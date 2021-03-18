// 初始化一个空Trie树
var TrieTree = function() {
    var tree = new Object;
    tree.node = ">";     // 当前字符
    tree.flag = false;    // 根节点是单词，空单词
    tree.nexts = []; // 子树
    tree.pos = 0;
    return tree;
};

// 以一个词初始化Trie树（注意，根节点为第一个字，所以这是一个内部使用的函数）
var TokenToTree = function(token) {
    var tempTree = TrieTree();
    if(token == null || token.length <= 0) {
        return TrieTree();
    }
    for(var i = token.length-1; i >= 0; i--) {
        // console.log("  当前字符 = " + token[i]);
        var subTree = TrieTree();
        subTree.node = token[i];
        // 最末字符
        if(i == token.length-1) {
            subTree.flag = true;
            subTree.nexts = null;
        }
        else {
            subTree.flag = false;
            subTree.nexts = [tempTree];
        }
        tempTree = subTree;
    }

    return tempTree;
};

// 向Trie树中添加一个词
var AddToken = function(tree, token) {
    var currentTree = tree;
    var next = null;
    // var found = false;
    var index = 0;

    for(var c = 0; c < currentTree.nexts.length; c++) {
        // console.log(" 当前节点：" + currentTree.node);
        next = currentTree.nexts[c];
        // console.log("  比较：" + next.node + " - " + token[index]);
        if(next.node == token[index]) {
            // console.log("  找到：" + token[index]);
            // 如果最后一个符号也在树中（意味着所有父节点都在树中），那么将flag修改为true，结束。
            if(index == token.length-1) {
                next.flag = true;
                return tree;
            }
            currentTree = next;
            // console.log("  下一棵树：" + currentTree.node);
            index++;
            c = -1;
            if(currentTree.nexts == null) {
                currentTree.nexts = [];
                break;
            }
        }
    }

    if(currentTree.node == "_" && currentTree.nexts.length == 0) {
        tree.nexts.push(TokenToTree(token));
        return tree;
    }
    else {
        // console.log(token.substring(index));
        var newTree = TokenToTree(token.substring(index));
        currentTree.nexts.push(newTree);
        return tree;
    }
};

// 查找某词是否存在
var FindToken = function(tree, token) {
    var currentTree = tree;
    var next = null;
    var index = 0;

    for(var c = 0; c < currentTree.nexts.length; c++) {
        next = currentTree.nexts[c];
        if(next.node == token[index]) {
            if(index == token.length-1) {
                if(next.flag == false) {
                    return false;
                }
                else {
                    return true;
                }
            }
            currentTree = next;
            index++;
            c = -1;
            if(currentTree.nexts == null) {
                break;
            }
        }
    }
    return false;
};

// 查找某前缀是否存在
var FindPrefix = function(tree, prefix) {
    var currentTree = tree;
    var next = null;
    var index = 0;

    for(var c = 0; c < currentTree.nexts.length; c++) {
        next = currentTree.nexts[c];
        if(next.node == prefix[index]) {
            if(index == prefix.length-1) {
                return true;
            }
            currentTree = next;
            index++;
            c = -1;
            if(currentTree.nexts == null) {
                break;
            }
        }
    }
    return false;
};

// 遍历Trie树
var Traverse = function(tree) {
    let tokens = new Array();
    let currentToken = '';
    (function traverse(tree) {
        currentToken += (tree.node === '>') ? '' : tree.node;
        if(tree.flag) {
            tokens.push(currentToken);
        }
        let children = tree.nexts;
        if(children === null || children === undefined) {
            return;
        }
        for(let i = 0; i < children.length; i++) {
            traverse(children[i]);
            currentToken = currentToken.substr(0, currentToken.length - 1);
        }
    })(tree);
    return tokens;
};

// 查找某前缀对应的全部词汇
var FindTokenByPrefix = function(tree, prefix) {
    var currentTree = tree;
    var next = null;
    var index = 0;
    var temp = TrieTree();

    for(var c = 0; c < currentTree.nexts.length; c++) {
        next = currentTree.nexts[c];
        if(next.node == prefix[index]) {
            if(index == prefix.length-1) {
                AddToken(temp, prefix); // 这一步会导致输出的词汇中包含前缀，不论原Trie树中是否有这个词。懒得改了。
                var n = temp.nexts[0];
                while(n.nexts != null) {
                    n = n.nexts;
                }

                n.nexts = next.nexts;
                // console.log("     " + next.node);
                // console.log(JSON.parse(JSON.stringify(temp)));
                return Traverse(temp);
            }

            currentTree = next;
            index++;
            c = -1;
            if(currentTree.nexts == null) {
                break;
            }
        }
    }
    // 并不存在这个前缀
    return null;
}

var lex = function() {

    var tree = TrieTree();
    AddToken(tree, "中国");
    AddToken(tree, "中美新型大国关系");
    AddToken(tree, "美国");
    AddToken(tree, "美利坚合众国");

    console.log(JSON.parse(JSON.stringify(tree)));

    console.log(FindToken(tree,"中华"));
    console.log(FindPrefix(tree,"中华"));

    var tokens = Traverse(tree);
    console.log(tokens);
    console.log(FindTokenByPrefix(tree, "中"));
    console.log(FindTokenByPrefix(tree, "美"));

    var pre = document.getElementById('code');

    pre.innerHTML = "请看控制台输出";

    // 数组去重
    var dedup = function (array){
        if(array == null) {
            return array;
        }
        var n = {}, r = [], len = array.length, val, type; 
        for (var i = 0; i < array.length; i++) { 
            val = array[i]; 
            type = typeof val; 
            if (!n[val]) { 
                n[val] = [type]; 
                r.push(val); 
            } else if (n[val].indexOf(type) < 0) { 
                n[val].push(type); 
                r.push(val); 
            } 
        } 
        return r; 
    }

    var str = string;

    console.log("非汉字字符去除开始");
console.time("非汉去除");
    str = str.replace(/[^\u4e00-\u9fa5\n]/g,"");
console.timeEnd("非汉去除");
    console.log("非汉字字符去除完毕");

    pre.innerHTML = str;

    var min = function(a,b){if(a <= b) return a; else return b;};

    console.log("重复出现至少两次的词提取开始");
console.time("重复词提取");
    var bi_2 = dedup(str.match(/([\u4e00-\u9fa5]{2})(?=(.*\1){1})/ig)) || [];
    var tri_2 = dedup(str.match(/([\u4e00-\u9fa5]{3})(?=(.*\1){1})/ig)) || [];
    var quad_2 = dedup(str.match(/([\u4e00-\u9fa5]{4})(?=(.*\1){1})/ig)) || [];
console.timeEnd("重复词提取");
    console.log("重复出现至少两次的词提取完毕");
    console.log("  2字词：" + bi_2.length);
    console.log("  3字词：" + tri_2.length);
    console.log("  4字词：" + quad_2.length);

    console.log("token合并开始");
console.time("token合并");
    var token = [];
    var de_count = 0;
    for(var i = 0; i < bi_2.length; i++) {
        if(!bi_2[i].match(/的/g))
            token.push(bi_2[i]);
        else
            de_count++;
            // console.log("【含有的的词】" + bi_2[i]);
    }

    for(var i = 0; i < tri_2.length; i++) {
        if(!tri_2[i].match(/的/g))
            token.push(tri_2[i]);
        else
            de_count++;
            // console.log("【含有的的词】" + tri_2[i]);
    }
    for(var i = 0; i < quad_2.length; i++) {
        if(!quad_2[i].match(/的/g))
            token.push(quad_2[i]);
        else
            de_count++;
            // console.log("【含有的的词】" + quad_2[i]);
    }

    bi_2 = null;
    tri_2 = null;
    quad_2 = null;
console.timeEnd("token合并");
    console.log("token合并完毕，token规模：" + token.length);
    console.log("  过滤掉含“的”的token数：" + de_count);

    console.log("词频计算开始");
console.time("词频计算");
    // 计算词频
    var tf = {};
    token.forEach(function(e, i, a) {
        var freq = str.match(eval("/"+e+"/ig")).length;
        tf[e] = freq;
        AddToken(tree, e);
        // console.log(e + " = " + freq);
    });
console.timeEnd("词频计算");
    console.log("词频计算完毕");

    console.log("邻词数计算开始");
console.time("邻词计算");
    // 计算（伪）左右熵
    var lrentropy = {};
    token.forEach(function(e, i, a) {
        var offset = 0;
        var rset = {};
        var lset = {};
        while(offset != -1) {
            offset = str.indexOf(e, offset + 1);
            var rindex = offset + e.length;
            var lindex = offset - 1;
            var right = str.substring(rindex, rindex + 1).match(/[\u4e00-\u9fa5\n]{1}/);
            var left = str.substring(lindex, offset).match(/[\u4e00-\u9fa5\n]{1}/);

            // console.log(e + " : " + left + " / " + right);

            if(right != null)
                rset[right] = 1;
            if(left != null)
                lset[left ] = 1;
        }

        var lent = 0;
        var lstring = "";
        for(var tok in lset) {
            lent += 1;
            lstring += tok.replace(/\n/g, "[LF]");
            lstring += ' / ';
        }
        // console.log("    [" + e + "] 的 " + lent + " 个左邻词 " + lstring);
        
        var rent = 0;
        var rstring = "";
        for(var tok in rset) {
            rent += 1;
            rstring += tok.replace(/\n/g, "[LF]");
            rstring += ' / ';
        }
        // console.log("    [" + e + "] 的 " + rent + " 个右邻词 " + rstring);

        var average = function(a,b) {
            return (a+b)/2;
        };

        var lre = min(lent, rent);
        lrentropy[e] = lre;

        // console.log("[" + e + "]的邻词数：" + lre + "\t 词频：" + tf[e] + "\n\n");
    });
console.timeEnd("邻词计算");
    console.log("邻词数计算完毕");
    
    for(var token in tf) {
        if(lrentropy[token] > 2) {
            // console.log(token + ".TF = " + tf[token] + "  LRE: " + lrentropy[token]);
        }
        // 词频高但邻词少的，考虑为构词成分
        
    }

    // console.log(Traverse(tree));

};

// 正向最大匹配
var posMaxMatch = function(tree, text) {
    var tokenized = [];
    var flag = false;
    // 正向匹配
    // 从左到右扫描每一个字
    var posWindowWidth = 5; // 正向扫描窗口长度
    for(var i = 0; i < text.length; i++) {
        if(/[\s\,\.\/\\\;\:\'\"\!\?\@\#\$\%\^\&\*\(\)\-\_\+\=\|，。？！“”’‘：；、—「」【】]/i.test(text[i])) {
            continue;
        }
        if(text.substring(i).search(/[A-Za-z0-9]+/i) === 0) {
            let western = text.substring(i).match(/[A-Za-z0-9]+/i)[0];
            tokenized.push(western);
            i += western.length;
            i--;
            continue;
        }
        flag = false;
// console.log("当前字: " + text[i]);
        var matchedToken = text[i];
        for(var c = i + posWindowWidth; c >= i; c--) {
            var slice = text.substring(i, c);
            // console.log("    检查: " + slice);
            if(FindToken(tree, slice) == true) {
                // console.log("    已匹配: " + slice);
                matchedToken = slice;
                flag = true;
                break;
            }
        }
        if(flag == true) {
            // console.log("    > 已找到: " + matchedToken);
            tokenized.push(matchedToken);
        }
        else {
            // console.log("    > 未登录: " + matchedToken);
            // tokenized.push("[" + matchedToken + "]");
            tokenized.push(matchedToken);
        }
        i += matchedToken.length;
        i--;
        
    }

    return tokenized;
};

// 反向最大匹配
var negMaxMatch = function(tree, text) {
    var tokenized = [];
    // 逆向匹配
    var negWindowWidth = 5;
    var flag = false;
    for(var i = text.length; i > 0; i--) {
        flag = false;
// console.log("当前字[" + (i-1) + "]: " + text[i-1]);
        var matchedToken = text[i-1];
        for(var c = i - negWindowWidth; c <= i; c++) {
            var slice = text.substring(c, i);
            // console.log("    检查: " + slice);
            if(FindToken(tree, slice) == true) {
                // console.log("    已匹配: " + slice);
                matchedToken = slice;
                flag = true;
                break;
            }
        }
        if(flag == true) {
            // console.log("    > 已找到: " + matchedToken);
            tokenized.push(matchedToken);
        }
        else {
            // console.log("    > 未登录: " + matchedToken);
            // tokenized.push("[" + matchedToken + "]");
            tokenized.push(matchedToken);
        }
        
        i -= matchedToken.length;
        i++;
    }
    // 注意：此时tokenized数组的顺序是反的，需要逆序
    var rev_tk = [];
    let last = 0;
    let temp = "";
    for(var i = tokenized.length - 1; i >= 0; i--) {
        if(/[A-Za-z0-9]/i.test(tokenized[i])) {
            temp += tokenized[i];
        }
        else {
            if(temp.length > 0) {
                rev_tk.push(temp);
                temp = "";
            }
            if(/[\s\,\.\/\\\;\:\'\"\!\?\@\#\$\%\^\&\*\(\)\-\_\+\=\|，。？！“”’‘：；、—「」【】]/i.test(tokenized[i])) {}
            else{
                rev_tk.push(tokenized[i]);
            }
        }
    }

    return rev_tk;
};

