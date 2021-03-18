
// Nagao串频统计算法和新词发现
// 2018.12.21

// text-文本  tokenLength-词长度  freqThreshole-词频阈值  isKeepDe-是否保留带“的”的串
function nagao(text, tokenLength, freqThreshold, isKeepDe) {
    const MAX_LENGTH = 20;
    let TOKEN_LENGTH = tokenLength;
    // 后缀表
    let suffix = new Array();
    for(let i = 0; i < text.length; i++) {
        // let pf = new Object();
        // pf['suffix'] = text.substr(i, MAX_LENGTH);
        let pf = text.substr(i, MAX_LENGTH);
        suffix.push(pf);
    }

    // 字典序排序
    suffix.sort(function(a, b) {
        return (a > b) ? 1 : -1;
    });

    // 公共前缀长度
    let common = new Array();
    common[0] = 0;
    for(let i = 1; i < suffix.length; i++) {
        let clen = 0;
        while(suffix[i-1][clen] === suffix[i][clen]) {
            clen++;
            if(clen >= MAX_LENGTH) {
                break;
            }
        }
        common[i] = clen;
    }

    // 串频统计
    let freq = new Object();
    for(let i = 0; i < suffix.length; i++) {
        let token = suffix[i].substr(0, TOKEN_LENGTH);
        if(freq[token] === undefined) {
            freq[token] = 1;
        }
        if(common[i] >= TOKEN_LENGTH) {
            freq[token] = freq[token] + 1;
        }
        else if(common[i] < TOKEN_LENGTH) {
            freq[token] = 1;
        }
    }

    // 按照串频阈值进行过滤
    let dup = new Object();
    for(let t in freq) {
        if(freq[t] >= freqThreshold) {
            if(isKeepDe || (!/的/gi.test(t))) {
                dup[t] = freq[t];
            }
        }
    }

    return dup;
}


function newword(text) {
    // 去除非汉字字符
    text = text.replace(/[^\u4e00-\u9fa5]/g,"");

    console.time("词频计算");
    // 计算词频
    let freq1 = nagao(text, 1, 1, false);
    let freq2 = nagao(text, 2, 3, false);
    let freq3 = nagao(text, 3, 3, false);
    let freq4 = nagao(text, 4, 3, false);
    let freq5 = nagao(text, 5, 3, false);

    let freq = new Object();
    for(let t in freq1) { freq[t] = freq1[t]; }
    for(let t in freq2) { freq[t] = freq2[t]; }
    for(let t in freq3) { freq[t] = freq3[t]; }
    for(let t in freq4) { freq[t] = freq4[t]; }
    for(let t in freq5) { freq[t] = freq5[t]; }
    console.timeEnd("词频计算");

    let charnum = 0;
    for(let t in freq1) {
        charnum++;
    }

    // 邻字数计算
    console.time("邻词计算");
    let lrentropy = {};
    for(let token in freq) {
        var offset = 0;
        var rset = {};
        var lset = {};
        while(offset != -1) {
            offset = text.indexOf(token, offset + 1);
            var rindex = offset + token.length;
            var lindex = offset - 1;
            var right = text.substring(rindex, rindex + 1).match(/[\u4e00-\u9fa5\n]{1}/);
            var left = text.substring(lindex, offset).match(/[\u4e00-\u9fa5\n]{1}/);

            if(right != null)
                rset[right] = 1;
            if(left != null)
                lset[left ] = 1;
        }

        var lent = 0;
        for(var tok in lset) {
            lent += 1;
        }
        
        var rent = 0;
        for(var tok in rset) {
            rent += 1;
        }

        lrentropy[token] = [lent, rent]; //-Math.log2(1/Math.min(lent, rent));
    }
    console.timeEnd("邻词计算");

    let nw = new Object();
    for(var token in freq) {
        if(-Math.log2(1/Math.max(lrentropy[token][0], lrentropy[token][1])) > 2) {
            let minSolidity = Number.MAX_VALUE;
            let solidity = new Array();
            // 计算凝固度
            for(let i = 1; i < token.length; i++) {
                let firstP = ((freq[token.substring(0, i)] === undefined) ? 1 : freq[token.substring(i, token.length)])/text.length;
                let lastP  = ((freq[token.substring(i, token.length)] === undefined) ? 1 : freq[token.substring(i, token.length)])/text.length;
                let solidityValue = (freq[token]/text.length) / (firstP * lastP);
                solidity.push(solidityValue);
                if(solidityValue <= minSolidity) {
                    minSolidity = solidityValue;
                }
            }

            nw[token] = {
                ent: -Math.log2(1/Math.max(lrentropy[token][0], lrentropy[token][1])),
                solidity: minSolidity,
                tf: freq[token],
            };
        }
    }

    return nw;
};

const text = `

令我愕然的是，我全然不知道在当前情况下该怎么办。任何一个有着正常人类情感的人都会对我的现状和无力感表示同情。而且一定会像我一样询问： 
“这是怎么回事？” 
“你刚刚说什么？” 
我身边的春日脸上挂着和环境完全不相称的微笑。那笑容显出近乎邪恶的喜悦，暗示着她为了达到目的可以忽略一切常识狂飙突进。一旦她脸上挂上这种笑容，我们就别无选择只能跟着这个不计后果的女人上天入地。我只能祈祷我们搭乘的电车的终点站不是学生教导室或者专为落榜生开办的预科学校。 
但是，现在好像也不是祈祷的时候。 
“我什么都没说。实际上我这会儿什么都不想说。” 
我就说了这些。 
“哦。那么就什么都别说。这里交给我。你当龙套好了。不管怎么说你也不擅长当谈判专家。” 
虽然我不喜欢她这么随便就决定了我人生的发展方向，不过我还是保持沉默。的确，我一不知道对谁说话二不知道该说些什么，所以我还是决定不要随便开口免得说错话把情况弄得更糟。再说，不管是谁发现自己突然被推到这么个场合来，心里的想法也会和我差不多吧。 
没错，你要是突然被拖进一个什么鬼知道在哪里的城堡的王宫，发现眼前有个看上去像个国王似的矮胖老头坐在宝座上，你的想法肯定也是这么回事， 
“勇者春日。” 
那个看起来好像方块老K的老头用庄重深沉的嗓音说道。 
“为了拯救这个世界，需要一位天生的勇者，一位继承了上古时代伟大英雄血统的勇者。你是我们唯一的希望。请答应朕的请求，去打倒那妄图用恐怖和灾厄来支配这个美丽世界的大魔王吧。” 
“我说，老头。” 
春日无礼地回应着那个被跪在一边宰相模样的老头称为“陛下”的国王。 
这里的设定好像是中世纪风的君主集权制度，但是大概这个国家没有不敬罪。现在卫兵该冲出来把春日抓起来丢进地牢里了吧，不过千万得关她单间。我可不想和她一起进去。 
除了我，长门，朝比奈学姐和古泉应该也不想一起进去。希望不要因为我们站成一排的缘故就以为我们和她是一伙的。 
“拯救世界是么？好吧，未尝不可。任何委托对我来说都不成问题。祝贺你，你真是好眼光选对了人。我和我的部下可以以秒为单位完成任何委托。我们有一长串的辉煌成就可以证明。” 
这通发言完完全全是胡说八道，我真希望马上把它给删掉，就像它从来没有存在过一样。 
在我左边，春日雄赳赳气昂昂地站得笔直，猛地用右手食指指着宝座上的老K说道。 
“不过你也知道，劳动需要相应的报酬。要是打倒了那个统治欲发作什么的魔王，我能得到什么？我觉得征服世界对我的影响只是换个缴税对象罢了。” 
她还真是擅长谈判。我把目光从她那张表情生动的脸上移开，漫不经心地打量着她的服装。 
勇者春日——。一般来说如果有人这么称呼她的话，我大概会压下可怜他的心情给那个家伙叫救护车或者马上离开现场吧。不过看来这次例外。因为春日现在的这身打扮——不管你怎么挑剔——相当有“勇者”的派头。想象一下出现在世界观设定为西方中世纪背景下的RPG中的勇者服装吧。差不多就是那回事。眼下春日就穿成这样。 
“哦哦，勇者春日。” 
国王早该把我们都从城堡里赶出去了。但是显然他想和春日好好谈谈。 
“当邪恶的魔王被打倒，世界恢复了和平的早晨，你的名字将和英雄二字联系在一起响彻世界每个角落。你对这样的荣誉还不满意么？” 
“我就想说这个。” 
春日用手指弹了一下鼻子。 
“荣誉勋章又不能烧了吃。我最多把它拿到拍卖会上卖掉。” 
“勇者春日。我把我的女儿，公主许配给你——” 
“我才不要什么公主咧。” 
“——那么王子，和王子结婚分享君权怎么样？但是，我的孩子们，王子和公主，都被魔王绑架了。他们被关在魔王的城堡里。等你把他们救出来了我们再谈婚论嫁。” 
“都说了不要了。” 
可以听出她的声音里开始带点愠怒。 
“如果你以为让我和什么莫名其妙的家伙结婚我就会高兴的话，我现在就告诉你，你大错特错了！要说错成什么样？就好像在涂机读答题卡时看漏了一道题，然后还把全部答案涂完，并且没意识到这点就把答题卡交了上去。就是错成这样！而且这还不是在模拟考的时候，是在正式考试的时候！” 

`;