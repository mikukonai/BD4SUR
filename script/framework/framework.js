
// Framework IROHA V4.0
// BD4SUR.com
// Copyright © 2016-2019 BD4SUR

////////////////////////////////////////////////////////
//
//  常 量 / 配 置 项
//
////////////////////////////////////////////////////////

// 监听器节流延时（无需纳入配置项）
const OBSERVER_THROTTLE_DELAY = 100;

////////////////////////////////////////////////////////
//
//  SPA 全 局 状 态
//
////////////////////////////////////////////////////////

// 滚动状态 NOTE 设置此状态位的目的是为了防止图片懒加载在滚动时被触发，导致滚动目标的位置计算错误。
let IS_SCROLLING = false;

// 滚动位置记录
let SCROLL_POSITION_STACK = new Array();
// 排序选项
let SORTING_OPTION = "category";

// 监听器
let ARTICLE_OBSERVER;  // Article节点监听器
let LIST_OBSERVER;     // 列表监听器

// 监听器节流
let OBSERVER_THROTTLE_TIMER;

////////////////////////////////////////////////////////
//
//  注 册 SPA 触 发 器
//
////////////////////////////////////////////////////////

function SPA_RegisterTriggers() {
    $('.SPA_TRIGGER').off('click'); // 避免重复绑定
    $('.SPA_TRIGGER').each(function(i,e) {
        $(e).click(()=>{
            let targetid = $(e).attr('data-target');
            history.pushState({PageID: targetid}, '', `#/${targetid}`);
            SCROLL_POSITION_STACK.push(window.pageYOffset);
            SPA_Render(targetid);
        });
    });
}

////////////////////////////////////////////////////////
//
//  SPA 页 面 渲 染 / 格 局 切 换 管 理
//
////////////////////////////////////////////////////////

function SPA_Render(pathString, callback) {
    callback = callback || (() => {});

    // SPA路径
    let path = pathString.replace(/^\#\//gi, "").split("/");
    let PageID = path[0];
    let ArticleID = path[1];

    // 按钮光标
    $(`.SPA_TRIGGER[data-target!="${PageID}"]`).attr("active", "false");
    $(`.SPA_TRIGGER[data-target="${PageID}"]`).attr("active", "true");

    console.log(`[Iroha-SPA] 渲染器：当前SPA路径为 ${path.map((v)=>{return decodeURI(v);}).join("/")}`);

    // 每个格局各自的渲染流程，目前包括：注册监听器以处理渲染后动作、渲染格局对应的视图布局

    // 门户格局公用渲染动作
    function PortalConfigInit(PageID) {
        $("title").html("BD4SUR 业余无线电台");  // 页面标题
        $(".StickyTitleContainer").hide();      // 控制顶栏显示
        $("#MainNavbar").show();                // 控制导航栏显示
        $("#BackButton").hide();                // 不显示返回按钮
        $(".MenuContainer").hide();             // 不显示菜单按钮
        // 使用模板设置页面内容（框架）
        $('.SPA_MAIN_CONTAINER').html($(`template#${PageID}`).html());
    }

    // 首页（电台日志）
    if(PageID === "index") {
        PortalConfigInit("index");
        LoadStationLog();
    }
    // 资料（文章）
    if(PageID === "blog") {
        // 正文
        if(ArticleID !== undefined) {
            $("#BackButton").show();     // 显示返回按钮
            $(".MenuContainer").show();  // 显示菜单按钮
            // 控制导航栏的显示
            if(GetMediaType() === "Desktop") { $("#MainNavbar").show(); }
            else if(GetMediaType() === "Mobile") { $("#MainNavbar").hide(); }
            // 创建菜单内容的锚点"ContentsContainer"
            $("#MenuContentContainer").html(`<div id="ContentsContainer"></div>`);
            // 页面内容（框架）
            $('.SPA_MAIN_CONTAINER').html($(`template#${PageID}-article`).html());
            // 载入文章主体内容
            LoadArticle(PageID, ArticleID);
        }
        // 列表
        else {
            PortalConfigInit(PageID);
            LoadList("blog");
        }
    }
    // 灵感
    else if(PageID === "inspirations") {
        PortalConfigInit(PageID);
        $(".MenuContainer").show();  // 显示菜单（目录）按钮
        // 创建菜单内容的锚点"ContentsContainer"
        $("#MenuContentContainer").html(`<!--标签容器--><div id="InspirationMenuTags"></div><!--目录容器--><div id="InspirationMenuList"></div>`);
        LoadInspirations();
    }
    // 其他 TODO 待开发，注意有些格局的初始化代码位于其他模块中，是动态加载动态执行的。这些模块之间的关系，后续需要妥善规划。
    else {
        // 页面标题
        $("title").html("BD4SUR 业余无线电台");
        // 控制导航栏和顶栏的显示
        $(".StickyTitleContainer").hide();
        $("#MainNavbar").show();
        // 不显示返回和菜单按钮
        $("#BackButton").hide();
        $(".MenuContainer").hide();
        // 页面内容（框架）
        $('.SPA_MAIN_CONTAINER').html($(`template#${PageID}`).html());
    }

    // 所有格局共享的：渲染框架布局、格局切入时的初始化工作、SPA触发器注册，等等

    // 通用初始化
    ActionsOnReady();

    // 处理SPA行为：这里使用简单的延时，暂时不使用监听器
    setTimeout(() => {
        SPA_RegisterTriggers();
        $(".FirstLoadingMask").fadeOut(800); // 清除首屏加载遮罩
        callback();
    }, 100);
}


//////////////////////////////////////////////////////
//
//  事件：Onready
//
//  使用方法：(() => { ...  ActionsOnReady();  ... })();
//
//////////////////////////////////////////////////////

function ActionsOnReady() {
    // 设置版权年份
    SetCopyrightYear();

    // 删除所有已有的MikumarkScript和MikumarkStyle节点
    $(".MikumarkScript").remove();
    $(".MikumarkStyle").remove();

    // 重置进度条（进度条动作由template里面的内容控制）
    $("#Progressbar").show();
    $("#Progressbar").css('width', '0%');

    // 进场动画
    $('body').css({'opacity': '0.5'});
    $('body').animate({'opacity': '1'});

    // 绑定菜单按钮的动作
    $('#MenuButton').off('click'); // 避免重复绑定
    $("#MenuButton").click(() => { MenuToggle(); }); // 菜单按钮的点击事件
}

//////////////////////////////////////////////////////
//
//  事件：Onresize
//
//  使用方法：window.onresize = () => { ...  ActionsOnResize();  ... }
//
//////////////////////////////////////////////////////

function ActionsOnResize() {
    ArrangeSideButtonLayout();
}

//////////////////////////////////////////////////////
//
//  事件：Onscroll
//
//  使用方法：window.onscroll = () => { ...  ActionsOnScroll();  ... }
//
//////////////////////////////////////////////////////

function ActionsOnScroll() {
    
}

//////////////////////////////////////////////////////
//
//  通 用 样 式 和 动 效
//
//////////////////////////////////////////////////////

// 设置版权年份
function SetCopyrightYear() {
    $(".CopyrightYear").each((i, e) => {
        $(e).html(String(new Date().getFullYear()));
    });
}

// 同类元素逐个滑落进入的效果
function SlideInOneByOne(
    className, // CSS类名（不带点）
    offsetTop, // 从顶部多高的位置滑落下来
    slideTime, // 滑落延时（默认800ms）
    delayTime, // 每个元素之间的等待延时（默认50ms）
    callback  // 结束后的回调函数
) {
    slideTime = slideTime || 800;
    delayTime = delayTime || 50;
    callback = callback || (() => {});
    let showTime = 0;
    $(`.${className}`).each((i,e) => {
        let originMarginTop = $(e).css("margin-top");
        $(e).css({"opacity": 0, "margin-top": `-${offsetTop}px`});
        setTimeout(() => {
            $(e).animate({"opacity": 1.0, "margin-top": originMarginTop}, slideTime);
        }, showTime);
        showTime += delayTime;
    });
    setTimeout(callback, showTime);
}

// 布局侧栏位置
function ArrangeSideButtonLayout() {
    let buttonWidth = $(".SideButton").width();
    // 控制左右侧栏的水平位置
    if(GetMediaType() === "Desktop") {
        let MainRightMargin = parseInt($(".Main").css("margin-right").match(/^\d+/gi)[0]);
        let MainLeftMargin = parseInt($(".Main").css("margin-left").match(/^\d+/gi)[0]);
        $(".RightAside").css("right", (MainRightMargin - 70).toString() + 'px');
        $(".LeftAside").css("left", (MainLeftMargin - 40 - buttonWidth).toString() + 'px');
    }
    else if(GetMediaType() === "Mobile"){
        $(".RightAside").css("right", '0px');
        $(".RightAside").css("height", "100%");
        $(".LeftAside").css("left", '0px');
    }
}

// 菜单折叠状态切换
function MenuToggle(state) {
    let currentState = $("#MenuButton").attr("data-state");
    if(state === "on") {
        currentState = "off";
    }
    else if(state === "off") {
        currentState = "on";
    }

    if(currentState === "on") {
        $("#MenuButton").attr("data-state", "off");
        $("#MenuButton").html(`<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M896.704 569.087H127.296c-31.398 0-57.087-25.689-57.087-57.087 0-31.398 25.689-57.087 57.087-57.087h769.409c31.398 0 57.087 25.689 57.087 57.087-0.001 31.398-25.69 57.087-57.088 57.087zM953.791 266c0-31.398-25.689-57.087-57.087-57.087H127.296c-31.398 0-57.087 25.689-57.087 57.087 0 31.398 25.689 57.087 57.087 57.087h769.409c31.397 0 57.086-25.689 57.086-57.087z m-57.087 549.087H127.296c-31.398 0-57.087-25.689-57.087-57.087 0-31.398 25.689-57.087 57.087-57.087h769.409c31.398 0 57.087 25.689 57.087 57.087-0.001 31.398-25.69 57.087-57.088 57.087z" fill="#505050"></path></svg>`);
        if(GetMediaType() === "Desktop") {
            $("#MenuContainer").animate({width: "40px", height: "40px"}, 200, "easeOutExpo");
        }
        else if(GetMediaType() === "Mobile") {
            $("#MenuContainer").animate({width: "40px", height: "40px"}, 200, "easeOutExpo", ()=> {
                $("#MenuContainer").css("background", "transparent");
            });
        }
    }
    else if(currentState === "off") {
        $("#MenuButton").attr("data-state", "on");
        $("#MenuButton").html(`<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path d="M857.085876 995.34637L511.878687 650.139181 166.773873 995.34637a97.665379 97.665379 0 0 1-138.205725-138.10335L373.775337 512.035831 28.568148 166.828642A97.665379 97.665379 0 0 1 166.773873 28.725292L511.878687 373.932481 856.983501 28.725292A97.665379 97.665379 0 0 1 995.086852 166.828642L649.982038 512.035831 995.086852 857.24302a97.563004 97.563004 0 1 1-138.000976 138.10335z" fill="#505050"></path></svg>`);
        if(GetMediaType() === "Desktop") {
            $("#MenuContainer").css("border-radius", "20px");
            $("#MenuContainer").animate({width: "400px", height: "600px"}, 200, "easeOutExpo");
        }
        else if(GetMediaType() === "Mobile") {
            $("#MenuContainer").css("background-color", "#ffffff");
            $("#MenuContainer").animate({width: $(window).width(), height: "100%"}, 200, "easeOutExpo");
        }
    }
}

//////////////////////////////////////////////////////
//
//  工 具 函 数
//
//////////////////////////////////////////////////////

// 终端类型判断："Desktop" or "Mobile"
function GetMediaType() {
    return ($(window).width() >= 650) ? "Desktop" : "Mobile";
}

// 解析请求参数，并返回字典
function GetRequestArgs() {
    let reqArg = new Object();
    let reqArgStr = window.document.location.href.match(/\?.*$/gi);
    if(reqArgStr !== null) {
        let fields = reqArgStr[0].substring(1).split('&');
        for(let field of fields) {
            field = field.replace(/\#.*$/i, ''); // 忽略井号后面的任何字符
            let pair = field.split('=');
            reqArg[decodeURI(pair[0])] = pair[1] ? decodeURI(pair[1]): null;
        }
    }
    return reqArg;
}

////////////////////////////////////////////////////////
//
//  外 部 脚 本 Worker 管 理 器（暂不启用，仅作为技术储备）
//
////////////////////////////////////////////////////////

// 外部脚本Worker
let WORKER;

// 启动新Worker，接受回调。
function CreateWorker(externalSourceFiles, callback) {
    let CodeBuffer = new Array();
    let FetchScript = new Promise((resolve, reject) => {
        resolve();
    });
    // 首先逐个请求外部脚本
    for(let i = 0; i < externalSourceFiles.length; i++) {
        FetchScript = FetchScript.then(() => {
            // console.log(`请求外部脚本：${externalSourceFiles[i]}`);
            return new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.open("GET", externalSourceFiles[i]);
                xhr.onreadystatechange = () => {
                    if(xhr.readyState === XMLHttpRequest.DONE) {
                        if(xhr.status === 200) {
                            // console.log(`请求脚本成功：${externalSourceFiles[i]}`);
                            CodeBuffer.push(xhr.responseText);
                            resolve();
                        }
                        else {
                            // console.error(`请求脚本失败：${externalSourceFiles[i]}`);
                        }
                    }
                };
                xhr.send();
            });
        });
    }
    // 拼接代码，并启动Worker
    FetchScript.then(() => {
        let Code = CodeBuffer.join("\n");
        WORKER = new Worker(`data:text/javascript,${encodeURIComponent(Code)}`);
        console.log(`[Iroha-SPA] 脚本Worker已启动`);
        callback();
    });
}

function StopWorker() {
    if(WORKER) {
        WORKER.terminate();
        console.log(`[Iroha-SPA] 脚本Worker中止`);
    }
}

function PostMessage(msg) {
    WORKER.postMessage(msg);
}

function OnMessage(handler) {
    WORKER.onmessage = handler;
}
