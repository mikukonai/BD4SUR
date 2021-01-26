
// Framework IROHA V4.0
// mikukonai.com
// Copyright © 2016-2019 Mikukonai

// 载入并渲染列表
function LoadList(pageId) {

    // 列表渲染为HTML
    function RenderArticleList(articleList, listingMode) {

        // 标题→文件名
        function TitleToFilename(title) {
            return title.replace(/\s+/gi, "-");
        }

        let HtmlBuffer = new Array();
        for(let i = 0; i < articleList.length; i++) {
            let articleInfo = articleList[i];
            let title = articleInfo.title;
            let date = articleInfo.date;
            let authors = articleInfo.authors;
            let category = articleInfo.category;
            let copyright = articleInfo.copyright;
            let tags = articleInfo.tags;
            let cover = articleInfo.cover;

            let tagString = "";
            for(let j = 0; j < tags.length; j++) {
                tagString += `<span class="ArticleTag">${tags[j]}</span>`;
            }
            if(tags.length > 0) tagString += " / ";

            let coverHtml = (!cover || cover.length <= 0) ? "" : `<img class="ArticleCover" src="${cover}">`;

            let html = `
<tr class="ArticleItem enter" data-title="${title}">
    <td class="ArticleTitle">
        <span class="ArticleTitleLink SPA_TRIGGER" data-target="${pageId}/${TitleToFilename(title)}">${title}</span>
        <div style="font-size: 12px; color: #c0d0e0; margin-top: 4px;">${date}</div>
    </td>
    <td class="ArticleInfo"><span class="ArticleTag">${category}</span></td>
</tr>`;

            HtmlBuffer.push(html);
        }

        document.getElementById('ArticleListContainer').innerHTML = HtmlBuffer.join("");

        // SlideInOneByOne("enter", 10, 1000, 5);

        console.log(`[Iroha-SPA] 列表渲染完毕，计 ${articleList.length} 项`);

        /*
        // 组装简单列表
        function RenderList(items) {
            // const FillZero = (num) => { return ('000000' + num.toString()).substr(-2); };
            let HtmlBuffer = new Array();
            for(let i = 0; i < items.length; i++) {
                let item = items[i];
                // 条目颜色
                let itemColor = listObject.typeColorMapping[item.type] || "#cdcdcd";
                // 组装链接
                let itemLink = `${pageId}/${TitleToFilename(item.title)}`;
                // 组装标签
                let tagsHtml = "";
                for(let j = 0; j < item.tags.length; j++) {
                    tagsHtml += `<span class="ListItemTag">${item.tags[j]}</span>`;
                }
                // 组装HTML
                HtmlBuffer.push(`<div class="ListItem enter"><span class="ListItemNumber" style="color:${itemColor};">❖</span><span style="display:inline-block;max-width:50%;"><a class="ListItemLink SPA_TRIGGER" data-target="${itemLink}">${item.title}</a>${tagsHtml}</span><span class="ListItemDate"><span style="padding-right:6px;color:${itemColor};">${item.type}</span>${item.date}</span></div>`);
            }
            return HtmlBuffer.join("");
        }

        if(listingMode === "category") {
            // 对列表进行归类
            let catLists = new Object();
            for(let i = 0; i < listObject.items.length; i++) {
                let category = listObject.items[i].category;
                if(!(category in catLists)) {
                    catLists[category] = new Array();
                }
                catLists[category].push(listObject.items[i]);
            }

            // 对每个分类进行拼装HTML
            let HtmlBuffer = new Array();
            let catCount = 0;
            for(let cat in catLists) {
                let catTitle = cat.split('|')[0];
                let catSubtitle = cat.split('|')[1];
                let catSubtitleHtml = "";
                if(catSubtitle && catSubtitle !== "") {
                    catSubtitleHtml = ` · ${catSubtitle}`;
                }
                HtmlBuffer.push(`<div class="ListCategoryBlock" id="cat_${catCount}">
    <div class="ListCategoryBlockTitle enter">${catTitle}<span class="ListCategoryBlockTitle_en">${catSubtitleHtml}</span></div>`);
                HtmlBuffer.push(RenderList(catLists[cat]));
                HtmlBuffer.push('</div>');
                catCount++;
            }
            document.getElementById('ArticleListContainer').innerHTML = HtmlBuffer.join("");
        }

        else {
            // 对日期进行排序
            listObject.items.sort((a, b) => {
                if(a.isPinned) { return -1; }
                else if(b.isPinned) { return 1; }
                else {
                    let aNumber = parseInt(a.date.replace(/\-/gi, ""));
                    let bNumber = parseInt(b.date.replace(/\-/gi, ""));
                    if(isNaN(aNumber)) {
                        if(isNaN(bNumber)) return 0;
                        else return 1;
                    }
                    else {
                        if(isNaN(bNumber)) return -1;
                        else return (aNumber > bNumber) ? (-1) : ((aNumber < bNumber) ? (1) : 0);
                    }
                }
            });
            document.getElementById('ArticleListContainer').innerHTML = `<div class="ListCategoryBlock">${RenderList(listObject.items)}</div>`;
        }

        // 淡入动画
        SlideInOneByOne("enter", 10, 1000, 5);

        console.log(`[Iroha-SPA] 列表渲染完毕，计 ${listObject.items.length} 项`);
        */
    }

    /////////////////////////////
    //  函 数 主 体 部 分
    /////////////////////////////

    // 初始化文章列表监听器
    LIST_OBSERVER = new MutationObserver((mutations, observer) => {
        clearTimeout(OBSERVER_THROTTLE_TIMER);
        OBSERVER_THROTTLE_TIMER = setTimeout(() => {
            console.log(`[Iroha-SPA] 监听器：列表已更新`);
            SPA_RegisterTriggers();
        }, 100); // 100ms节流
    });
    LIST_OBSERVER.observe(document.getElementById('ArticleListContainer'), {characterData: true, childList: true, subtree: true});

    let listEndingSlogan = $('.ListEnding').html();
    $('.ListEnding').html('正在读取，请稍等…');

    let xhr = new XMLHttpRequest();
    xhr.open("GET", `markdown/${pageId}/-articles.json`);
    xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            $("#Progressbar").animate({width: `100%`});
            $("#Progressbar").fadeOut();

            // 绘制文章列表
            let contents = JSON.parse(xhr.responseText); // ParseArticleList(xhr.responseText);
            RenderArticleList(contents, SORTING_OPTION);

            // 绘制时间线
            RenderTimeline(contents);

            // 排序选项按钮
            $(`.ListSortingOption[data-sorting-option=${SORTING_OPTION}]`).addClass('ListSortingOptionSelected');
            $(`.ListSortingOption`).each((i, e) => {
                $(e).click(() => {
                    let sortingOption = $(e).attr("data-sorting-option");
                    $(".ListSortingOption").removeClass("ListSortingOptionSelected");
                    $(e).addClass("ListSortingOptionSelected");
                    RenderArticleList(contents, sortingOption);
                    SORTING_OPTION = sortingOption;
                });
            });

            $('.ListEnding').html(listEndingSlogan);
        }
        else if(xhr.readyState === XMLHttpRequest.DONE && xhr.status !== 200){
            $("#Progressbar").animate({width: `100%`});
            $("#Progressbar").fadeOut();
            $('.ListEnding').html('列表获取失败 >_<');
            return;
        }
    };
    xhr.onprogress = (event) => {
        const MAX_ARTICLE_LENGTH = 20000; // 最大字节数，用于近似计算加载进度
        let percentage = parseInt((event.loaded / MAX_ARTICLE_LENGTH) * 100);
        $("#Progressbar").animate({width: `${((percentage > 100) ? 100 : percentage)}%`});
    };
    xhr.send();
}

