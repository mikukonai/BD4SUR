
// Framework IROHA V4.0
// BD4SUR.com
// Copyright © 2016-2019 BD4SUR

/*! highlight.js v9.15.10 | BSD3 License | git.io/hljslicense */
/*
Copyright (c) 2006, Ivan Sagalaev
All rights reserved.
Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * Neither the name of highlight.js nor the names of its contributors 
      may be used to endorse or promote products derived from this software 
      without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE REGENTS AND CONTRIBUTORS ``AS IS'' AND ANY
EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE REGENTS AND CONTRIBUTORS BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
!function(e){var n="object"==typeof window&&window||"object"==typeof self&&self;"undefined"==typeof exports||exports.nodeType?n&&(n.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return n.hljs})):e(exports)}(function(a){var f=[],u=Object.keys,N={},c={},n=/^(no-?highlight|plain|text)$/i,s=/\blang(?:uage)?-([\w-]+)\b/i,t=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,r={case_insensitive:"cI",lexemes:"l",contains:"c",keywords:"k",subLanguage:"sL",className:"cN",begin:"b",beginKeywords:"bK",end:"e",endsWithParent:"eW",illegal:"i",excludeBegin:"eB",excludeEnd:"eE",returnBegin:"rB",returnEnd:"rE",relevance:"r",variants:"v",IDENT_RE:"IR",UNDERSCORE_IDENT_RE:"UIR",NUMBER_RE:"NR",C_NUMBER_RE:"CNR",BINARY_NUMBER_RE:"BNR",RE_STARTERS_RE:"RSR",BACKSLASH_ESCAPE:"BE",APOS_STRING_MODE:"ASM",QUOTE_STRING_MODE:"QSM",PHRASAL_WORDS_MODE:"PWM",C_LINE_COMMENT_MODE:"CLCM",C_BLOCK_COMMENT_MODE:"CBCM",HASH_COMMENT_MODE:"HCM",NUMBER_MODE:"NM",C_NUMBER_MODE:"CNM",BINARY_NUMBER_MODE:"BNM",CSS_NUMBER_MODE:"CSSNM",REGEXP_MODE:"RM",TITLE_MODE:"TM",UNDERSCORE_TITLE_MODE:"UTM",COMMENT:"C",beginRe:"bR",endRe:"eR",illegalRe:"iR",lexemesRe:"lR",terminators:"t",terminator_end:"tE"},b="</span>",h={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};function _(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function E(e){return e.nodeName.toLowerCase()}function v(e,n){var t=e&&e.exec(n);return t&&0===t.index}function l(e){return n.test(e)}function g(e){var n,t={},r=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return r.forEach(function(e){for(n in e)t[n]=e[n]}),t}function R(e){var a=[];return function e(n,t){for(var r=n.firstChild;r;r=r.nextSibling)3===r.nodeType?t+=r.nodeValue.length:1===r.nodeType&&(a.push({event:"start",offset:t,node:r}),t=e(r,t),E(r).match(/br|hr|img|input/)||a.push({event:"stop",offset:t,node:r}));return t}(e,0),a}function i(e){if(r&&!e.langApiRestored){for(var n in e.langApiRestored=!0,r)e[n]&&(e[r[n]]=e[n]);(e.c||[]).concat(e.v||[]).forEach(i)}}function m(o){function s(e){return e&&e.source||e}function c(e,n){return new RegExp(s(e),"m"+(o.cI?"i":"")+(n?"g":""))}!function n(t,e){if(!t.compiled){if(t.compiled=!0,t.k=t.k||t.bK,t.k){function r(t,e){o.cI&&(e=e.toLowerCase()),e.split(" ").forEach(function(e){var n=e.split("|");a[n[0]]=[t,n[1]?Number(n[1]):1]})}var a={};"string"==typeof t.k?r("keyword",t.k):u(t.k).forEach(function(e){r(e,t.k[e])}),t.k=a}t.lR=c(t.l||/\w+/,!0),e&&(t.bK&&(t.b="\\b("+t.bK.split(" ").join("|")+")\\b"),t.b||(t.b=/\B|\b/),t.bR=c(t.b),t.endSameAsBegin&&(t.e=t.b),t.e||t.eW||(t.e=/\B|\b/),t.e&&(t.eR=c(t.e)),t.tE=s(t.e)||"",t.eW&&e.tE&&(t.tE+=(t.e?"|":"")+e.tE)),t.i&&(t.iR=c(t.i)),null==t.r&&(t.r=1),t.c||(t.c=[]),t.c=Array.prototype.concat.apply([],t.c.map(function(e){return function(n){return n.v&&!n.cached_variants&&(n.cached_variants=n.v.map(function(e){return g(n,{v:null},e)})),n.cached_variants||n.eW&&[g(n)]||[n]}("self"===e?t:e)})),t.c.forEach(function(e){n(e,t)}),t.starts&&n(t.starts,e);var i=t.c.map(function(e){return e.bK?"\\.?(?:"+e.b+")\\.?":e.b}).concat([t.tE,t.i]).map(s).filter(Boolean);t.t=i.length?c(function(e,n){for(var t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,r=0,a="",i=0;i<e.length;i++){var o=r,c=s(e[i]);for(0<i&&(a+=n);0<c.length;){var u=t.exec(c);if(null==u){a+=c;break}a+=c.substring(0,u.index),c=c.substring(u.index+u[0].length),"\\"==u[0][0]&&u[1]?a+="\\"+String(Number(u[1])+o):(a+=u[0],"("==u[0]&&r++)}}return a}(i,"|"),!0):{exec:function(){return null}}}}(o)}function C(e,n,i,t){function c(e,n,t,r){var a='<span class="'+(r?"":h.classPrefix);return e?(a+=e+'">')+n+(t?"":b):n}function o(){E+=null!=l.sL?function(){var e="string"==typeof l.sL;if(e&&!N[l.sL])return _(g);var n=e?C(l.sL,g,!0,f[l.sL]):O(g,l.sL.length?l.sL:void 0);return 0<l.r&&(R+=n.r),e&&(f[l.sL]=n.top),c(n.language,n.value,!1,!0)}():function(){var e,n,t,r,a,i,o;if(!l.k)return _(g);for(r="",n=0,l.lR.lastIndex=0,t=l.lR.exec(g);t;)r+=_(g.substring(n,t.index)),a=l,i=t,void 0,o=s.cI?i[0].toLowerCase():i[0],(e=a.k.hasOwnProperty(o)&&a.k[o])?(R+=e[1],r+=c(e[0],_(t[0]))):r+=_(t[0]),n=l.lR.lastIndex,t=l.lR.exec(g);return r+_(g.substr(n))}(),g=""}function u(e){E+=e.cN?c(e.cN,"",!0):"",l=Object.create(e,{parent:{value:l}})}function r(e,n){if(g+=e,null==n)return o(),0;var t=function(e,n){var t,r,a;for(t=0,r=n.c.length;t<r;t++)if(v(n.c[t].bR,e))return n.c[t].endSameAsBegin&&(n.c[t].eR=(a=n.c[t].bR.exec(e)[0],new RegExp(a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m"))),n.c[t]}(n,l);if(t)return t.skip?g+=n:(t.eB&&(g+=n),o(),t.rB||t.eB||(g=n)),u(t),t.rB?0:n.length;var r=function e(n,t){if(v(n.eR,t)){for(;n.endsParent&&n.parent;)n=n.parent;return n}if(n.eW)return e(n.parent,t)}(l,n);if(r){var a=l;for(a.skip?g+=n:(a.rE||a.eE||(g+=n),o(),a.eE&&(g=n));l.cN&&(E+=b),l.skip||l.sL||(R+=l.r),(l=l.parent)!==r.parent;);return r.starts&&(r.endSameAsBegin&&(r.starts.eR=r.eR),u(r.starts)),a.rE?0:n.length}if(function(e,n){return!i&&v(n.iR,e)}(n,l))throw new Error('Illegal lexeme "'+n+'" for mode "'+(l.cN||"<unnamed>")+'"');return g+=n,n.length||1}var s=B(e);if(!s)throw new Error('Unknown language: "'+e+'"');m(s);var a,l=t||s,f={},E="";for(a=l;a!==s;a=a.parent)a.cN&&(E=c(a.cN,"",!0)+E);var g="",R=0;try{for(var d,p,M=0;l.t.lastIndex=M,d=l.t.exec(n);)p=r(n.substring(M,d.index),d[0]),M=d.index+p;for(r(n.substr(M)),a=l;a.parent;a=a.parent)a.cN&&(E+=b);return{r:R,value:E,language:e,top:l}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{r:0,value:_(n)};throw e}}function O(t,e){e=e||h.languages||u(N);var r={r:0,value:_(t)},a=r;return e.filter(B).filter(M).forEach(function(e){var n=C(e,t,!1);n.language=e,n.r>a.r&&(a=n),n.r>r.r&&(a=r,r=n)}),a.language&&(r.second_best=a),r}function d(e){return h.tabReplace||h.useBR?e.replace(t,function(e,n){return h.useBR&&"\n"===e?"<br>":h.tabReplace?n.replace(/\t/g,h.tabReplace):""}):e}function o(e){var n,t,r,a,i,o=function(e){var n,t,r,a,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",t=s.exec(i))return B(t[1])?t[1]:"no-highlight";for(n=0,r=(i=i.split(/\s+/)).length;n<r;n++)if(l(a=i[n])||B(a))return a}(e);l(o)||(h.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):n=e,i=n.textContent,r=o?C(o,i,!0):O(i),(t=R(n)).length&&((a=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=r.value,r.value=function(e,n,t){var r=0,a="",i=[];function o(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function c(e){a+="<"+E(e)+f.map.call(e.attributes,function(e){return" "+e.nodeName+'="'+_(e.value).replace('"',"&quot;")+'"'}).join("")+">"}function u(e){a+="</"+E(e)+">"}function s(e){("start"===e.event?c:u)(e.node)}for(;e.length||n.length;){var l=o();if(a+=_(t.substring(r,l[0].offset)),r=l[0].offset,l===e){for(i.reverse().forEach(u);s(l.splice(0,1)[0]),(l=o())===e&&l.length&&l[0].offset===r;);i.reverse().forEach(c)}else"start"===l[0].event?i.push(l[0].node):i.pop(),s(l.splice(0,1)[0])}return a+_(t.substr(r))}(t,R(a),i)),r.value=d(r.value),e.innerHTML=r.value,e.className=function(e,n,t){var r=n?c[n]:t,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(r)&&a.push(r),a.join(" ").trim()}(e.className,o,r.language),e.result={language:r.language,re:r.r},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.r}))}function p(){if(!p.called){p.called=!0;var e=document.querySelectorAll("pre code");f.forEach.call(e,o)}}function B(e){return e=(e||"").toLowerCase(),N[e]||N[c[e]]}function M(e){var n=B(e);return n&&!n.disableAutodetect}return a.highlight=C,a.highlightAuto=O,a.fixMarkup=d,a.highlightBlock=o,a.configure=function(e){h=g(h,e)},a.initHighlighting=p,a.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",p,!1),addEventListener("load",p,!1)},a.registerLanguage=function(n,e){var t=N[n]=e(a);i(t),t.aliases&&t.aliases.forEach(function(e){c[e]=n})},a.listLanguages=function(){return u(N)},a.getLanguage=B,a.autoDetection=M,a.inherit=g,a.IR=a.IDENT_RE="[a-zA-Z]\\w*",a.UIR=a.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",a.NR=a.NUMBER_RE="\\b\\d+(\\.\\d+)?",a.CNR=a.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",a.BNR=a.BINARY_NUMBER_RE="\\b(0b[01]+)",a.RSR=a.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",a.BE=a.BACKSLASH_ESCAPE={b:"\\\\[\\s\\S]",r:0},a.ASM=a.APOS_STRING_MODE={cN:"string",b:"'",e:"'",i:"\\n",c:[a.BE]},a.QSM=a.QUOTE_STRING_MODE={cN:"string",b:'"',e:'"',i:"\\n",c:[a.BE]},a.PWM=a.PHRASAL_WORDS_MODE={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},a.C=a.COMMENT=function(e,n,t){var r=a.inherit({cN:"comment",b:e,e:n,c:[]},t||{});return r.c.push(a.PWM),r.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),r},a.CLCM=a.C_LINE_COMMENT_MODE=a.C("//","$"),a.CBCM=a.C_BLOCK_COMMENT_MODE=a.C("/\\*","\\*/"),a.HCM=a.HASH_COMMENT_MODE=a.C("#","$"),a.NM=a.NUMBER_MODE={cN:"number",b:a.NR,r:0},a.CNM=a.C_NUMBER_MODE={cN:"number",b:a.CNR,r:0},a.BNM=a.BINARY_NUMBER_MODE={cN:"number",b:a.BNR,r:0},a.CSSNM=a.CSS_NUMBER_MODE={cN:"number",b:a.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},a.RM=a.REGEXP_MODE={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[a.BE,{b:/\[/,e:/\]/,r:0,c:[a.BE]}]},a.TM=a.TITLE_MODE={cN:"title",b:a.IR,r:0},a.UTM=a.UNDERSCORE_TITLE_MODE={cN:"title",b:a.UIR,r:0},a.METHOD_GUARD={b:"\\.\\s*"+a.UIR,r:0},a});hljs.registerLanguage("kotlin",function(e){var t={keyword:"abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual trait volatile transient native default",built_in:"Byte Short Char Int Long Boolean Float Double Void Unit Nothing",literal:"true false null"},r={cN:"symbol",b:e.UIR+"@"},a={cN:"subst",b:"\\${",e:"}",c:[e.ASM,e.CNM]},i={cN:"variable",b:"\\$"+e.UIR},n={cN:"string",v:[{b:'"""',e:'"""',c:[i,a]},{b:"'",e:"'",i:/\n/,c:[e.BE]},{b:'"',e:'"',i:/\n/,c:[e.BE,i,a]}]},c={cN:"meta",b:"@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*"+e.UIR+")?"},s={cN:"meta",b:"@"+e.UIR,c:[{b:/\(/,e:/\)/,c:[e.inherit(n,{cN:"meta-string"})]}]},l={cN:"number",b:"\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",r:0},b=e.C("/\\*","\\*/",{c:[e.CBCM]}),o={v:[{cN:"type",b:e.UIR},{b:/\(/,e:/\)/,c:[]}]},d=o;return d.v[1].c=[o],o.v[1].c=[d],{aliases:["kt"],k:t,c:[e.C("/\\*\\*","\\*/",{r:0,c:[{cN:"doctag",b:"@[A-Za-z]+"}]}),e.CLCM,b,{cN:"keyword",b:/\b(break|continue|return|this)\b/,starts:{c:[{cN:"symbol",b:/@\w+/}]}},r,c,s,{cN:"function",bK:"fun",e:"[(]|$",rB:!0,eE:!0,k:t,i:/fun\s+(<.*>)?[^\s\(]+(\s+[^\s\(]+)\s*=/,r:5,c:[{b:e.UIR+"\\s*\\(",rB:!0,r:0,c:[e.UTM]},{cN:"type",b:/</,e:/>/,k:"reified",r:0},{cN:"params",b:/\(/,e:/\)/,endsParent:!0,k:t,r:0,c:[{b:/:/,e:/[=,\/]/,eW:!0,c:[o,e.CLCM,b],r:0},e.CLCM,b,c,s,n,e.CNM]},b]},{cN:"class",bK:"class interface trait",e:/[:\{(]|$/,eE:!0,i:"extends implements",c:[{bK:"public protected internal private constructor"},e.UTM,{cN:"type",b:/</,e:/>/,eB:!0,eE:!0,r:0},{cN:"type",b:/[,:]\s*/,e:/[<\(,]|$/,eB:!0,rE:!0},c,s]},n,{cN:"meta",b:"^#!/usr/bin/env",e:"$",i:"\n"},l]}});hljs.registerLanguage("properties",function(r){var t="[ \\t\\f]*",e="("+t+"[:=]"+t+"|[ \\t\\f]+)",s="([^\\\\\\W:= \\t\\f\\n]|\\\\.)+",n="([^\\\\:= \\t\\f\\n]|\\\\.)+",a={e:e,r:0,starts:{cN:"string",e:/$/,r:0,c:[{b:"\\\\\\n"}]}};return{cI:!0,i:/\S/,c:[r.C("^\\s*[!#]","$"),{b:s+e,rB:!0,c:[{cN:"attr",b:s,endsParent:!0,r:0}],starts:a},{b:n+e,rB:!0,r:0,c:[{cN:"meta",b:n,endsParent:!0,r:0}],starts:a},{cN:"attr",r:0,b:n+t+"$"}]}});hljs.registerLanguage("basic",function(E){return{cI:!0,i:"^.",l:"[a-zA-Z][a-zA-Z0-9_$%!#]*",k:{keyword:"ABS ASC AND ATN AUTO|0 BEEP BLOAD|10 BSAVE|10 CALL CALLS CDBL CHAIN CHDIR CHR$|10 CINT CIRCLE CLEAR CLOSE CLS COLOR COM COMMON CONT COS CSNG CSRLIN CVD CVI CVS DATA DATE$ DEFDBL DEFINT DEFSNG DEFSTR DEF|0 SEG USR DELETE DIM DRAW EDIT END ENVIRON ENVIRON$ EOF EQV ERASE ERDEV ERDEV$ ERL ERR ERROR EXP FIELD FILES FIX FOR|0 FRE GET GOSUB|10 GOTO HEX$ IF|0 THEN ELSE|0 INKEY$ INP INPUT INPUT# INPUT$ INSTR IMP INT IOCTL IOCTL$ KEY ON OFF LIST KILL LEFT$ LEN LET LINE LLIST LOAD LOC LOCATE LOF LOG LPRINT USING LSET MERGE MID$ MKDIR MKD$ MKI$ MKS$ MOD NAME NEW NEXT NOISE NOT OCT$ ON OR PEN PLAY STRIG OPEN OPTION BASE OUT PAINT PALETTE PCOPY PEEK PMAP POINT POKE POS PRINT PRINT] PSET PRESET PUT RANDOMIZE READ REM RENUM RESET|0 RESTORE RESUME RETURN|0 RIGHT$ RMDIR RND RSET RUN SAVE SCREEN SGN SHELL SIN SOUND SPACE$ SPC SQR STEP STICK STOP STR$ STRING$ SWAP SYSTEM TAB TAN TIME$ TIMER TROFF TRON TO USR VAL VARPTR VARPTR$ VIEW WAIT WHILE WEND WIDTH WINDOW WRITE XOR"},c:[E.QSM,E.C("REM","$",{r:10}),E.C("'","$",{r:0}),{cN:"symbol",b:"^[0-9]+ ",r:10},{cN:"number",b:"\\b([0-9]+[0-9edED.]*[#!]?)",r:0},{cN:"number",b:"(&[hH][0-9a-fA-F]{1,4})"},{cN:"number",b:"(&[oO][0-7]{1,6})"}]}});hljs.registerLanguage("llvm",function(e){var n="([-a-zA-Z$._][\\w\\-$.]*)";return{k:"begin end true false declare define global constant private linker_private internal available_externally linkonce linkonce_odr weak weak_odr appending dllimport dllexport common default hidden protected extern_weak external thread_local zeroinitializer undef null to tail target triple datalayout volatile nuw nsw nnan ninf nsz arcp fast exact inbounds align addrspace section alias module asm sideeffect gc dbg linker_private_weak attributes blockaddress initialexec localdynamic localexec prefix unnamed_addr ccc fastcc coldcc x86_stdcallcc x86_fastcallcc arm_apcscc arm_aapcscc arm_aapcs_vfpcc ptx_device ptx_kernel intel_ocl_bicc msp430_intrcc spir_func spir_kernel x86_64_sysvcc x86_64_win64cc x86_thiscallcc cc c signext zeroext inreg sret nounwind noreturn noalias nocapture byval nest readnone readonly inlinehint noinline alwaysinline optsize ssp sspreq noredzone noimplicitfloat naked builtin cold nobuiltin noduplicate nonlazybind optnone returns_twice sanitize_address sanitize_memory sanitize_thread sspstrong uwtable returned type opaque eq ne slt sgt sle sge ult ugt ule uge oeq one olt ogt ole oge ord uno ueq une x acq_rel acquire alignstack atomic catch cleanup filter inteldialect max min monotonic nand personality release seq_cst singlethread umax umin unordered xchg add fadd sub fsub mul fmul udiv sdiv fdiv urem srem frem shl lshr ashr and or xor icmp fcmp phi call trunc zext sext fptrunc fpext uitofp sitofp fptoui fptosi inttoptr ptrtoint bitcast addrspacecast select va_arg ret br switch invoke unwind unreachable indirectbr landingpad resume malloc alloca free load store getelementptr extractelement insertelement shufflevector getresult extractvalue insertvalue atomicrmw cmpxchg fence argmemonly double",c:[{cN:"keyword",b:"i\\d+"},e.C(";","\\n",{r:0}),e.QSM,{cN:"string",v:[{b:'"',e:'[^\\\\]"'}],r:0},{cN:"title",v:[{b:"@"+n},{b:"@\\d+"},{b:"!"+n},{b:"!\\d+"+n}]},{cN:"symbol",v:[{b:"%"+n},{b:"%\\d+"},{b:"#\\d+"}]},{cN:"number",v:[{b:"0[xX][a-fA-F0-9]+"},{b:"-?\\d+(?:[.]\\d+)?(?:[eE][-+]?\\d+(?:[.]\\d+)?)?"}],r:0}]}});hljs.registerLanguage("json",function(e){var i={literal:"true false null"},n=[e.QSM,e.CNM],r={e:",",eW:!0,eE:!0,c:n,k:i},t={b:"{",e:"}",c:[{cN:"attr",b:/"/,e:/"/,c:[e.BE],i:"\\n"},e.inherit(r,{b:/:/})],i:"\\S"},c={b:"\\[",e:"\\]",c:[e.inherit(r)],i:"\\S"};return n.splice(n.length,0,t,c),{c:n,k:i,i:"\\S"}});hljs.registerLanguage("javascript",function(e){var r="[A-Za-z$_][0-9A-Za-z$_]*",t={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},a={cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},s={cN:"subst",b:"\\$\\{",e:"\\}",k:t,c:[]},c={b:"html`",e:"",starts:{e:"`",rE:!1,c:[e.BE,s],sL:"xml"}},n={b:"css`",e:"",starts:{e:"`",rE:!1,c:[e.BE,s],sL:"css"}},o={cN:"string",b:"`",e:"`",c:[e.BE,s]};s.c=[e.ASM,e.QSM,c,n,o,a,e.RM];var i=s.c.concat([e.CBCM,e.CLCM]);return{aliases:["js","jsx"],k:t,c:[{cN:"meta",r:10,b:/^\s*['"]use (strict|asm)['"]/},{cN:"meta",b:/^#!/,e:/$/},e.ASM,e.QSM,c,n,o,e.CLCM,e.CBCM,a,{b:/[{,]\s*/,r:0,c:[{b:r+"\\s*:",rB:!0,r:0,c:[{cN:"attr",b:r,r:0}]}]},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{cN:"function",b:"(\\(.*?\\)|"+r+")\\s*=>",rB:!0,e:"\\s*=>",c:[{cN:"params",v:[{b:r},{b:/\(\s*\)/},{b:/\(/,e:/\)/,eB:!0,eE:!0,k:t,c:i}]}]},{cN:"",b:/\s/,e:/\s*/,skip:!0},{b:/</,e:/(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,sL:"xml",c:[{b:/<[A-Za-z0-9\\._:-]+\s*\/>/,skip:!0},{b:/<[A-Za-z0-9\\._:-]+/,e:/(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,skip:!0,c:[{b:/<[A-Za-z0-9\\._:-]+\s*\/>/,skip:!0},"self"]}]}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:r}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:i}],i:/\[|%/},{b:/\$[(.]/},e.METHOD_GUARD,{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]},{bK:"constructor get set",e:/\{/,eE:!0}],i:/#(?!!)/}});hljs.registerLanguage("xml",function(s){var e={eW:!0,i:/</,r:0,c:[{cN:"attr",b:"[A-Za-z0-9\\._:-]+",r:0},{b:/=\s*/,r:0,c:[{cN:"string",endsParent:!0,v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf"],cI:!0,c:[{cN:"meta",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},s.C("\x3c!--","--\x3e",{r:10}),{b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"meta",b:/<\?xml/,e:/\?>/,r:10},{b:/<\?(php)?/,e:/\?>/,sL:"php",c:[{b:"/\\*",e:"\\*/",skip:!0},{b:'b"',e:'"',skip:!0},{b:"b'",e:"'",skip:!0},s.inherit(s.ASM,{i:null,cN:null,c:null,skip:!0}),s.inherit(s.QSM,{i:null,cN:null,c:null,skip:!0})]},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{name:"style"},c:[e],starts:{e:"</style>",rE:!0,sL:["css","xml"]}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{name:"script"},c:[e],starts:{e:"<\/script>",rE:!0,sL:["actionscript","javascript","handlebars","xml","vbscript"]}},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"name",b:/[^\/><\s]+/,r:0},e]}]}});hljs.registerLanguage("markdown",function(e){return{aliases:["md","mkdown","mkd"],c:[{cN:"section",v:[{b:"^#{1,6}",e:"$"},{b:"^.+?\\n[=-]{2,}$"}]},{b:"<",e:">",sL:"xml",r:0},{cN:"bullet",b:"^\\s*([*+-]|(\\d+\\.))\\s+"},{cN:"strong",b:"[*_]{2}.+?[*_]{2}"},{cN:"emphasis",v:[{b:"\\*.+?\\*"},{b:"_.+?_",r:0}]},{cN:"quote",b:"^>\\s+",e:"$"},{cN:"code",v:[{b:"^```w*s*$",e:"^```s*$"},{b:"`.+?`"},{b:"^( {4}|\t)",e:"$",r:0}]},{b:"^[-\\*]{3,}",e:"$"},{b:"\\[.+?\\][\\(\\[].*?[\\)\\]]",rB:!0,c:[{cN:"string",b:"\\[",e:"\\]",eB:!0,rE:!0,r:0},{cN:"link",b:"\\]\\(",e:"\\)",eB:!0,eE:!0},{cN:"symbol",b:"\\]\\[",e:"\\]",eB:!0,eE:!0}],r:10},{b:/^\[[^\n]+\]:/,rB:!0,c:[{cN:"symbol",b:/\[/,e:/\]/,eB:!0,eE:!0},{cN:"link",b:/:\s*/,e:/$/,eB:!0}]}]}});hljs.registerLanguage("php",function(e){var c={b:"\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"},i={cN:"meta",b:/<\?(php)?|\?>/},t={cN:"string",c:[e.BE,i],v:[{b:'b"',e:'"'},{b:"b'",e:"'"},e.inherit(e.ASM,{i:null}),e.inherit(e.QSM,{i:null})]},a={v:[e.BNM,e.CNM]};return{aliases:["php","php3","php4","php5","php6","php7"],cI:!0,k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",c:[e.HCM,e.C("//","$",{c:[i]}),e.C("/\\*","\\*/",{c:[{cN:"doctag",b:"@[A-Za-z]+"}]}),e.C("__halt_compiler.+?;",!1,{eW:!0,k:"__halt_compiler",l:e.UIR}),{cN:"string",b:/<<<['"]?\w+['"]?$/,e:/^\w+;?$/,c:[e.BE,{cN:"subst",v:[{b:/\$\w+/},{b:/\{\$/,e:/\}/}]}]},i,{cN:"keyword",b:/\$this\b/},c,{b:/(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{cN:"function",bK:"function",e:/[;{]/,eE:!0,i:"\\$|\\[|%",c:[e.UTM,{cN:"params",b:"\\(",e:"\\)",c:["self",c,e.CBCM,t,a]}]},{cN:"class",bK:"class interface",e:"{",eE:!0,i:/[:\(\$"]/,c:[{bK:"extends implements"},e.UTM]},{bK:"namespace",e:";",i:/[\.']/,c:[e.UTM]},{bK:"use",e:";",c:[e.UTM]},{b:"=>"},t,a]}});hljs.registerLanguage("bash",function(e){var t={cN:"variable",v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)}/}]},s={cN:"string",b:/"/,e:/"/,c:[e.BE,t,{cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]}]};return{aliases:["sh","zsh"],l:/\b-?[a-z\._]+\b/,k:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",_:"-ne -eq -lt -gt -f -d -e -s -l -a"},c:[{cN:"meta",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:!0,c:[e.inherit(e.TM,{b:/\w[\w\d_]*/})],r:0},e.HCM,s,{cN:"",b:/\\"/},{cN:"string",b:/'/,e:/'/},t]}});hljs.registerLanguage("dockerfile",function(e){return{aliases:["docker"],cI:!0,k:"from maintainer expose env arg user onbuild stopsignal",c:[e.HCM,e.ASM,e.QSM,e.NM,{bK:"run cmd entrypoint volume add copy workdir label healthcheck shell",starts:{e:/[^\\]$/,sL:"bash"}}],i:"</"}});hljs.registerLanguage("clojure",function(e){var t="a-zA-Z_\\-!.?+*=<>&#'",r="["+t+"]["+t+"0-9/;:]*",n={b:r,r:0},a={cN:"number",b:"[-+]?\\d+(\\.\\d+)?",r:0},o=e.inherit(e.QSM,{i:null}),s=e.C(";","$",{r:0}),c={cN:"literal",b:/\b(true|false|nil)\b/},i={b:"[\\[\\{]",e:"[\\]\\}]"},d={cN:"comment",b:"\\^"+r},l=e.C("\\^\\{","\\}"),m={cN:"symbol",b:"[:]{1,2}"+r},p={b:"\\(",e:"\\)"},u={eW:!0,r:0},f={k:{"builtin-name":"def defonce cond apply if-not if-let if not not= = < > <= >= == + / * - rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit defmacro defn defn- macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy defstruct first rest cons defprotocol cast coll deftype defrecord last butlast sigs reify second ffirst fnext nfirst nnext defmulti defmethod meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize"},l:r,cN:"name",b:r,starts:u},h=[p,o,d,l,s,m,i,a,c,n];return p.c=[e.C("comment",""),f,u],u.c=h,i.c=h,l.c=[i],{aliases:["clj"],i:/\S/,c:[p,o,d,l,s,m,i,a,c]}});hljs.registerLanguage("x86asm",function(s){return{cI:!0,l:"[.%]?"+s.IR,k:{keyword:"lock rep repe repz repne repnz xaquire xrelease bnd nobnd aaa aad aam aas adc add and arpl bb0_reset bb1_reset bound bsf bsr bswap bt btc btr bts call cbw cdq cdqe clc cld cli clts cmc cmp cmpsb cmpsd cmpsq cmpsw cmpxchg cmpxchg486 cmpxchg8b cmpxchg16b cpuid cpu_read cpu_write cqo cwd cwde daa das dec div dmint emms enter equ f2xm1 fabs fadd faddp fbld fbstp fchs fclex fcmovb fcmovbe fcmove fcmovnb fcmovnbe fcmovne fcmovnu fcmovu fcom fcomi fcomip fcomp fcompp fcos fdecstp fdisi fdiv fdivp fdivr fdivrp femms feni ffree ffreep fiadd ficom ficomp fidiv fidivr fild fimul fincstp finit fist fistp fisttp fisub fisubr fld fld1 fldcw fldenv fldl2e fldl2t fldlg2 fldln2 fldpi fldz fmul fmulp fnclex fndisi fneni fninit fnop fnsave fnstcw fnstenv fnstsw fpatan fprem fprem1 fptan frndint frstor fsave fscale fsetpm fsin fsincos fsqrt fst fstcw fstenv fstp fstsw fsub fsubp fsubr fsubrp ftst fucom fucomi fucomip fucomp fucompp fxam fxch fxtract fyl2x fyl2xp1 hlt ibts icebp idiv imul in inc incbin insb insd insw int int01 int1 int03 int3 into invd invpcid invlpg invlpga iret iretd iretq iretw jcxz jecxz jrcxz jmp jmpe lahf lar lds lea leave les lfence lfs lgdt lgs lidt lldt lmsw loadall loadall286 lodsb lodsd lodsq lodsw loop loope loopne loopnz loopz lsl lss ltr mfence monitor mov movd movq movsb movsd movsq movsw movsx movsxd movzx mul mwait neg nop not or out outsb outsd outsw packssdw packsswb packuswb paddb paddd paddsb paddsiw paddsw paddusb paddusw paddw pand pandn pause paveb pavgusb pcmpeqb pcmpeqd pcmpeqw pcmpgtb pcmpgtd pcmpgtw pdistib pf2id pfacc pfadd pfcmpeq pfcmpge pfcmpgt pfmax pfmin pfmul pfrcp pfrcpit1 pfrcpit2 pfrsqit1 pfrsqrt pfsub pfsubr pi2fd pmachriw pmaddwd pmagw pmulhriw pmulhrwa pmulhrwc pmulhw pmullw pmvgezb pmvlzb pmvnzb pmvzb pop popa popad popaw popf popfd popfq popfw por prefetch prefetchw pslld psllq psllw psrad psraw psrld psrlq psrlw psubb psubd psubsb psubsiw psubsw psubusb psubusw psubw punpckhbw punpckhdq punpckhwd punpcklbw punpckldq punpcklwd push pusha pushad pushaw pushf pushfd pushfq pushfw pxor rcl rcr rdshr rdmsr rdpmc rdtsc rdtscp ret retf retn rol ror rdm rsdc rsldt rsm rsts sahf sal salc sar sbb scasb scasd scasq scasw sfence sgdt shl shld shr shrd sidt sldt skinit smi smint smintold smsw stc std sti stosb stosd stosq stosw str sub svdc svldt svts swapgs syscall sysenter sysexit sysret test ud0 ud1 ud2b ud2 ud2a umov verr verw fwait wbinvd wrshr wrmsr xadd xbts xchg xlatb xlat xor cmove cmovz cmovne cmovnz cmova cmovnbe cmovae cmovnb cmovb cmovnae cmovbe cmovna cmovg cmovnle cmovge cmovnl cmovl cmovnge cmovle cmovng cmovc cmovnc cmovo cmovno cmovs cmovns cmovp cmovpe cmovnp cmovpo je jz jne jnz ja jnbe jae jnb jb jnae jbe jna jg jnle jge jnl jl jnge jle jng jc jnc jo jno js jns jpo jnp jpe jp sete setz setne setnz seta setnbe setae setnb setnc setb setnae setcset setbe setna setg setnle setge setnl setl setnge setle setng sets setns seto setno setpe setp setpo setnp addps addss andnps andps cmpeqps cmpeqss cmpleps cmpless cmpltps cmpltss cmpneqps cmpneqss cmpnleps cmpnless cmpnltps cmpnltss cmpordps cmpordss cmpunordps cmpunordss cmpps cmpss comiss cvtpi2ps cvtps2pi cvtsi2ss cvtss2si cvttps2pi cvttss2si divps divss ldmxcsr maxps maxss minps minss movaps movhps movlhps movlps movhlps movmskps movntps movss movups mulps mulss orps rcpps rcpss rsqrtps rsqrtss shufps sqrtps sqrtss stmxcsr subps subss ucomiss unpckhps unpcklps xorps fxrstor fxrstor64 fxsave fxsave64 xgetbv xsetbv xsave xsave64 xsaveopt xsaveopt64 xrstor xrstor64 prefetchnta prefetcht0 prefetcht1 prefetcht2 maskmovq movntq pavgb pavgw pextrw pinsrw pmaxsw pmaxub pminsw pminub pmovmskb pmulhuw psadbw pshufw pf2iw pfnacc pfpnacc pi2fw pswapd maskmovdqu clflush movntdq movnti movntpd movdqa movdqu movdq2q movq2dq paddq pmuludq pshufd pshufhw pshuflw pslldq psrldq psubq punpckhqdq punpcklqdq addpd addsd andnpd andpd cmpeqpd cmpeqsd cmplepd cmplesd cmpltpd cmpltsd cmpneqpd cmpneqsd cmpnlepd cmpnlesd cmpnltpd cmpnltsd cmpordpd cmpordsd cmpunordpd cmpunordsd cmppd comisd cvtdq2pd cvtdq2ps cvtpd2dq cvtpd2pi cvtpd2ps cvtpi2pd cvtps2dq cvtps2pd cvtsd2si cvtsd2ss cvtsi2sd cvtss2sd cvttpd2pi cvttpd2dq cvttps2dq cvttsd2si divpd divsd maxpd maxsd minpd minsd movapd movhpd movlpd movmskpd movupd mulpd mulsd orpd shufpd sqrtpd sqrtsd subpd subsd ucomisd unpckhpd unpcklpd xorpd addsubpd addsubps haddpd haddps hsubpd hsubps lddqu movddup movshdup movsldup clgi stgi vmcall vmclear vmfunc vmlaunch vmload vmmcall vmptrld vmptrst vmread vmresume vmrun vmsave vmwrite vmxoff vmxon invept invvpid pabsb pabsw pabsd palignr phaddw phaddd phaddsw phsubw phsubd phsubsw pmaddubsw pmulhrsw pshufb psignb psignw psignd extrq insertq movntsd movntss lzcnt blendpd blendps blendvpd blendvps dppd dpps extractps insertps movntdqa mpsadbw packusdw pblendvb pblendw pcmpeqq pextrb pextrd pextrq phminposuw pinsrb pinsrd pinsrq pmaxsb pmaxsd pmaxud pmaxuw pminsb pminsd pminud pminuw pmovsxbw pmovsxbd pmovsxbq pmovsxwd pmovsxwq pmovsxdq pmovzxbw pmovzxbd pmovzxbq pmovzxwd pmovzxwq pmovzxdq pmuldq pmulld ptest roundpd roundps roundsd roundss crc32 pcmpestri pcmpestrm pcmpistri pcmpistrm pcmpgtq popcnt getsec pfrcpv pfrsqrtv movbe aesenc aesenclast aesdec aesdeclast aesimc aeskeygenassist vaesenc vaesenclast vaesdec vaesdeclast vaesimc vaeskeygenassist vaddpd vaddps vaddsd vaddss vaddsubpd vaddsubps vandpd vandps vandnpd vandnps vblendpd vblendps vblendvpd vblendvps vbroadcastss vbroadcastsd vbroadcastf128 vcmpeq_ospd vcmpeqpd vcmplt_ospd vcmpltpd vcmple_ospd vcmplepd vcmpunord_qpd vcmpunordpd vcmpneq_uqpd vcmpneqpd vcmpnlt_uspd vcmpnltpd vcmpnle_uspd vcmpnlepd vcmpord_qpd vcmpordpd vcmpeq_uqpd vcmpnge_uspd vcmpngepd vcmpngt_uspd vcmpngtpd vcmpfalse_oqpd vcmpfalsepd vcmpneq_oqpd vcmpge_ospd vcmpgepd vcmpgt_ospd vcmpgtpd vcmptrue_uqpd vcmptruepd vcmplt_oqpd vcmple_oqpd vcmpunord_spd vcmpneq_uspd vcmpnlt_uqpd vcmpnle_uqpd vcmpord_spd vcmpeq_uspd vcmpnge_uqpd vcmpngt_uqpd vcmpfalse_ospd vcmpneq_ospd vcmpge_oqpd vcmpgt_oqpd vcmptrue_uspd vcmppd vcmpeq_osps vcmpeqps vcmplt_osps vcmpltps vcmple_osps vcmpleps vcmpunord_qps vcmpunordps vcmpneq_uqps vcmpneqps vcmpnlt_usps vcmpnltps vcmpnle_usps vcmpnleps vcmpord_qps vcmpordps vcmpeq_uqps vcmpnge_usps vcmpngeps vcmpngt_usps vcmpngtps vcmpfalse_oqps vcmpfalseps vcmpneq_oqps vcmpge_osps vcmpgeps vcmpgt_osps vcmpgtps vcmptrue_uqps vcmptrueps vcmplt_oqps vcmple_oqps vcmpunord_sps vcmpneq_usps vcmpnlt_uqps vcmpnle_uqps vcmpord_sps vcmpeq_usps vcmpnge_uqps vcmpngt_uqps vcmpfalse_osps vcmpneq_osps vcmpge_oqps vcmpgt_oqps vcmptrue_usps vcmpps vcmpeq_ossd vcmpeqsd vcmplt_ossd vcmpltsd vcmple_ossd vcmplesd vcmpunord_qsd vcmpunordsd vcmpneq_uqsd vcmpneqsd vcmpnlt_ussd vcmpnltsd vcmpnle_ussd vcmpnlesd vcmpord_qsd vcmpordsd vcmpeq_uqsd vcmpnge_ussd vcmpngesd vcmpngt_ussd vcmpngtsd vcmpfalse_oqsd vcmpfalsesd vcmpneq_oqsd vcmpge_ossd vcmpgesd vcmpgt_ossd vcmpgtsd vcmptrue_uqsd vcmptruesd vcmplt_oqsd vcmple_oqsd vcmpunord_ssd vcmpneq_ussd vcmpnlt_uqsd vcmpnle_uqsd vcmpord_ssd vcmpeq_ussd vcmpnge_uqsd vcmpngt_uqsd vcmpfalse_ossd vcmpneq_ossd vcmpge_oqsd vcmpgt_oqsd vcmptrue_ussd vcmpsd vcmpeq_osss vcmpeqss vcmplt_osss vcmpltss vcmple_osss vcmpless vcmpunord_qss vcmpunordss vcmpneq_uqss vcmpneqss vcmpnlt_usss vcmpnltss vcmpnle_usss vcmpnless vcmpord_qss vcmpordss vcmpeq_uqss vcmpnge_usss vcmpngess vcmpngt_usss vcmpngtss vcmpfalse_oqss vcmpfalsess vcmpneq_oqss vcmpge_osss vcmpgess vcmpgt_osss vcmpgtss vcmptrue_uqss vcmptruess vcmplt_oqss vcmple_oqss vcmpunord_sss vcmpneq_usss vcmpnlt_uqss vcmpnle_uqss vcmpord_sss vcmpeq_usss vcmpnge_uqss vcmpngt_uqss vcmpfalse_osss vcmpneq_osss vcmpge_oqss vcmpgt_oqss vcmptrue_usss vcmpss vcomisd vcomiss vcvtdq2pd vcvtdq2ps vcvtpd2dq vcvtpd2ps vcvtps2dq vcvtps2pd vcvtsd2si vcvtsd2ss vcvtsi2sd vcvtsi2ss vcvtss2sd vcvtss2si vcvttpd2dq vcvttps2dq vcvttsd2si vcvttss2si vdivpd vdivps vdivsd vdivss vdppd vdpps vextractf128 vextractps vhaddpd vhaddps vhsubpd vhsubps vinsertf128 vinsertps vlddqu vldqqu vldmxcsr vmaskmovdqu vmaskmovps vmaskmovpd vmaxpd vmaxps vmaxsd vmaxss vminpd vminps vminsd vminss vmovapd vmovaps vmovd vmovq vmovddup vmovdqa vmovqqa vmovdqu vmovqqu vmovhlps vmovhpd vmovhps vmovlhps vmovlpd vmovlps vmovmskpd vmovmskps vmovntdq vmovntqq vmovntdqa vmovntpd vmovntps vmovsd vmovshdup vmovsldup vmovss vmovupd vmovups vmpsadbw vmulpd vmulps vmulsd vmulss vorpd vorps vpabsb vpabsw vpabsd vpacksswb vpackssdw vpackuswb vpackusdw vpaddb vpaddw vpaddd vpaddq vpaddsb vpaddsw vpaddusb vpaddusw vpalignr vpand vpandn vpavgb vpavgw vpblendvb vpblendw vpcmpestri vpcmpestrm vpcmpistri vpcmpistrm vpcmpeqb vpcmpeqw vpcmpeqd vpcmpeqq vpcmpgtb vpcmpgtw vpcmpgtd vpcmpgtq vpermilpd vpermilps vperm2f128 vpextrb vpextrw vpextrd vpextrq vphaddw vphaddd vphaddsw vphminposuw vphsubw vphsubd vphsubsw vpinsrb vpinsrw vpinsrd vpinsrq vpmaddwd vpmaddubsw vpmaxsb vpmaxsw vpmaxsd vpmaxub vpmaxuw vpmaxud vpminsb vpminsw vpminsd vpminub vpminuw vpminud vpmovmskb vpmovsxbw vpmovsxbd vpmovsxbq vpmovsxwd vpmovsxwq vpmovsxdq vpmovzxbw vpmovzxbd vpmovzxbq vpmovzxwd vpmovzxwq vpmovzxdq vpmulhuw vpmulhrsw vpmulhw vpmullw vpmulld vpmuludq vpmuldq vpor vpsadbw vpshufb vpshufd vpshufhw vpshuflw vpsignb vpsignw vpsignd vpslldq vpsrldq vpsllw vpslld vpsllq vpsraw vpsrad vpsrlw vpsrld vpsrlq vptest vpsubb vpsubw vpsubd vpsubq vpsubsb vpsubsw vpsubusb vpsubusw vpunpckhbw vpunpckhwd vpunpckhdq vpunpckhqdq vpunpcklbw vpunpcklwd vpunpckldq vpunpcklqdq vpxor vrcpps vrcpss vrsqrtps vrsqrtss vroundpd vroundps vroundsd vroundss vshufpd vshufps vsqrtpd vsqrtps vsqrtsd vsqrtss vstmxcsr vsubpd vsubps vsubsd vsubss vtestps vtestpd vucomisd vucomiss vunpckhpd vunpckhps vunpcklpd vunpcklps vxorpd vxorps vzeroall vzeroupper pclmullqlqdq pclmulhqlqdq pclmullqhqdq pclmulhqhqdq pclmulqdq vpclmullqlqdq vpclmulhqlqdq vpclmullqhqdq vpclmulhqhqdq vpclmulqdq vfmadd132ps vfmadd132pd vfmadd312ps vfmadd312pd vfmadd213ps vfmadd213pd vfmadd123ps vfmadd123pd vfmadd231ps vfmadd231pd vfmadd321ps vfmadd321pd vfmaddsub132ps vfmaddsub132pd vfmaddsub312ps vfmaddsub312pd vfmaddsub213ps vfmaddsub213pd vfmaddsub123ps vfmaddsub123pd vfmaddsub231ps vfmaddsub231pd vfmaddsub321ps vfmaddsub321pd vfmsub132ps vfmsub132pd vfmsub312ps vfmsub312pd vfmsub213ps vfmsub213pd vfmsub123ps vfmsub123pd vfmsub231ps vfmsub231pd vfmsub321ps vfmsub321pd vfmsubadd132ps vfmsubadd132pd vfmsubadd312ps vfmsubadd312pd vfmsubadd213ps vfmsubadd213pd vfmsubadd123ps vfmsubadd123pd vfmsubadd231ps vfmsubadd231pd vfmsubadd321ps vfmsubadd321pd vfnmadd132ps vfnmadd132pd vfnmadd312ps vfnmadd312pd vfnmadd213ps vfnmadd213pd vfnmadd123ps vfnmadd123pd vfnmadd231ps vfnmadd231pd vfnmadd321ps vfnmadd321pd vfnmsub132ps vfnmsub132pd vfnmsub312ps vfnmsub312pd vfnmsub213ps vfnmsub213pd vfnmsub123ps vfnmsub123pd vfnmsub231ps vfnmsub231pd vfnmsub321ps vfnmsub321pd vfmadd132ss vfmadd132sd vfmadd312ss vfmadd312sd vfmadd213ss vfmadd213sd vfmadd123ss vfmadd123sd vfmadd231ss vfmadd231sd vfmadd321ss vfmadd321sd vfmsub132ss vfmsub132sd vfmsub312ss vfmsub312sd vfmsub213ss vfmsub213sd vfmsub123ss vfmsub123sd vfmsub231ss vfmsub231sd vfmsub321ss vfmsub321sd vfnmadd132ss vfnmadd132sd vfnmadd312ss vfnmadd312sd vfnmadd213ss vfnmadd213sd vfnmadd123ss vfnmadd123sd vfnmadd231ss vfnmadd231sd vfnmadd321ss vfnmadd321sd vfnmsub132ss vfnmsub132sd vfnmsub312ss vfnmsub312sd vfnmsub213ss vfnmsub213sd vfnmsub123ss vfnmsub123sd vfnmsub231ss vfnmsub231sd vfnmsub321ss vfnmsub321sd rdfsbase rdgsbase rdrand wrfsbase wrgsbase vcvtph2ps vcvtps2ph adcx adox rdseed clac stac xstore xcryptecb xcryptcbc xcryptctr xcryptcfb xcryptofb montmul xsha1 xsha256 llwpcb slwpcb lwpval lwpins vfmaddpd vfmaddps vfmaddsd vfmaddss vfmaddsubpd vfmaddsubps vfmsubaddpd vfmsubaddps vfmsubpd vfmsubps vfmsubsd vfmsubss vfnmaddpd vfnmaddps vfnmaddsd vfnmaddss vfnmsubpd vfnmsubps vfnmsubsd vfnmsubss vfrczpd vfrczps vfrczsd vfrczss vpcmov vpcomb vpcomd vpcomq vpcomub vpcomud vpcomuq vpcomuw vpcomw vphaddbd vphaddbq vphaddbw vphadddq vphaddubd vphaddubq vphaddubw vphaddudq vphadduwd vphadduwq vphaddwd vphaddwq vphsubbw vphsubdq vphsubwd vpmacsdd vpmacsdqh vpmacsdql vpmacssdd vpmacssdqh vpmacssdql vpmacsswd vpmacssww vpmacswd vpmacsww vpmadcsswd vpmadcswd vpperm vprotb vprotd vprotq vprotw vpshab vpshad vpshaq vpshaw vpshlb vpshld vpshlq vpshlw vbroadcasti128 vpblendd vpbroadcastb vpbroadcastw vpbroadcastd vpbroadcastq vpermd vpermpd vpermps vpermq vperm2i128 vextracti128 vinserti128 vpmaskmovd vpmaskmovq vpsllvd vpsllvq vpsravd vpsrlvd vpsrlvq vgatherdpd vgatherqpd vgatherdps vgatherqps vpgatherdd vpgatherqd vpgatherdq vpgatherqq xabort xbegin xend xtest andn bextr blci blcic blsi blsic blcfill blsfill blcmsk blsmsk blsr blcs bzhi mulx pdep pext rorx sarx shlx shrx tzcnt tzmsk t1mskc valignd valignq vblendmpd vblendmps vbroadcastf32x4 vbroadcastf64x4 vbroadcasti32x4 vbroadcasti64x4 vcompresspd vcompressps vcvtpd2udq vcvtps2udq vcvtsd2usi vcvtss2usi vcvttpd2udq vcvttps2udq vcvttsd2usi vcvttss2usi vcvtudq2pd vcvtudq2ps vcvtusi2sd vcvtusi2ss vexpandpd vexpandps vextractf32x4 vextractf64x4 vextracti32x4 vextracti64x4 vfixupimmpd vfixupimmps vfixupimmsd vfixupimmss vgetexppd vgetexpps vgetexpsd vgetexpss vgetmantpd vgetmantps vgetmantsd vgetmantss vinsertf32x4 vinsertf64x4 vinserti32x4 vinserti64x4 vmovdqa32 vmovdqa64 vmovdqu32 vmovdqu64 vpabsq vpandd vpandnd vpandnq vpandq vpblendmd vpblendmq vpcmpltd vpcmpled vpcmpneqd vpcmpnltd vpcmpnled vpcmpd vpcmpltq vpcmpleq vpcmpneqq vpcmpnltq vpcmpnleq vpcmpq vpcmpequd vpcmpltud vpcmpleud vpcmpnequd vpcmpnltud vpcmpnleud vpcmpud vpcmpequq vpcmpltuq vpcmpleuq vpcmpnequq vpcmpnltuq vpcmpnleuq vpcmpuq vpcompressd vpcompressq vpermi2d vpermi2pd vpermi2ps vpermi2q vpermt2d vpermt2pd vpermt2ps vpermt2q vpexpandd vpexpandq vpmaxsq vpmaxuq vpminsq vpminuq vpmovdb vpmovdw vpmovqb vpmovqd vpmovqw vpmovsdb vpmovsdw vpmovsqb vpmovsqd vpmovsqw vpmovusdb vpmovusdw vpmovusqb vpmovusqd vpmovusqw vpord vporq vprold vprolq vprolvd vprolvq vprord vprorq vprorvd vprorvq vpscatterdd vpscatterdq vpscatterqd vpscatterqq vpsraq vpsravq vpternlogd vpternlogq vptestmd vptestmq vptestnmd vptestnmq vpxord vpxorq vrcp14pd vrcp14ps vrcp14sd vrcp14ss vrndscalepd vrndscaleps vrndscalesd vrndscaless vrsqrt14pd vrsqrt14ps vrsqrt14sd vrsqrt14ss vscalefpd vscalefps vscalefsd vscalefss vscatterdpd vscatterdps vscatterqpd vscatterqps vshuff32x4 vshuff64x2 vshufi32x4 vshufi64x2 kandnw kandw kmovw knotw kortestw korw kshiftlw kshiftrw kunpckbw kxnorw kxorw vpbroadcastmb2q vpbroadcastmw2d vpconflictd vpconflictq vplzcntd vplzcntq vexp2pd vexp2ps vrcp28pd vrcp28ps vrcp28sd vrcp28ss vrsqrt28pd vrsqrt28ps vrsqrt28sd vrsqrt28ss vgatherpf0dpd vgatherpf0dps vgatherpf0qpd vgatherpf0qps vgatherpf1dpd vgatherpf1dps vgatherpf1qpd vgatherpf1qps vscatterpf0dpd vscatterpf0dps vscatterpf0qpd vscatterpf0qps vscatterpf1dpd vscatterpf1dps vscatterpf1qpd vscatterpf1qps prefetchwt1 bndmk bndcl bndcu bndcn bndmov bndldx bndstx sha1rnds4 sha1nexte sha1msg1 sha1msg2 sha256rnds2 sha256msg1 sha256msg2 hint_nop0 hint_nop1 hint_nop2 hint_nop3 hint_nop4 hint_nop5 hint_nop6 hint_nop7 hint_nop8 hint_nop9 hint_nop10 hint_nop11 hint_nop12 hint_nop13 hint_nop14 hint_nop15 hint_nop16 hint_nop17 hint_nop18 hint_nop19 hint_nop20 hint_nop21 hint_nop22 hint_nop23 hint_nop24 hint_nop25 hint_nop26 hint_nop27 hint_nop28 hint_nop29 hint_nop30 hint_nop31 hint_nop32 hint_nop33 hint_nop34 hint_nop35 hint_nop36 hint_nop37 hint_nop38 hint_nop39 hint_nop40 hint_nop41 hint_nop42 hint_nop43 hint_nop44 hint_nop45 hint_nop46 hint_nop47 hint_nop48 hint_nop49 hint_nop50 hint_nop51 hint_nop52 hint_nop53 hint_nop54 hint_nop55 hint_nop56 hint_nop57 hint_nop58 hint_nop59 hint_nop60 hint_nop61 hint_nop62 hint_nop63",built_in:"ip eip rip al ah bl bh cl ch dl dh sil dil bpl spl r8b r9b r10b r11b r12b r13b r14b r15b ax bx cx dx si di bp sp r8w r9w r10w r11w r12w r13w r14w r15w eax ebx ecx edx esi edi ebp esp eip r8d r9d r10d r11d r12d r13d r14d r15d rax rbx rcx rdx rsi rdi rbp rsp r8 r9 r10 r11 r12 r13 r14 r15 cs ds es fs gs ss st st0 st1 st2 st3 st4 st5 st6 st7 mm0 mm1 mm2 mm3 mm4 mm5 mm6 mm7 xmm0  xmm1  xmm2  xmm3  xmm4  xmm5  xmm6  xmm7  xmm8  xmm9 xmm10  xmm11 xmm12 xmm13 xmm14 xmm15 xmm16 xmm17 xmm18 xmm19 xmm20 xmm21 xmm22 xmm23 xmm24 xmm25 xmm26 xmm27 xmm28 xmm29 xmm30 xmm31 ymm0  ymm1  ymm2  ymm3  ymm4  ymm5  ymm6  ymm7  ymm8  ymm9 ymm10  ymm11 ymm12 ymm13 ymm14 ymm15 ymm16 ymm17 ymm18 ymm19 ymm20 ymm21 ymm22 ymm23 ymm24 ymm25 ymm26 ymm27 ymm28 ymm29 ymm30 ymm31 zmm0  zmm1  zmm2  zmm3  zmm4  zmm5  zmm6  zmm7  zmm8  zmm9 zmm10  zmm11 zmm12 zmm13 zmm14 zmm15 zmm16 zmm17 zmm18 zmm19 zmm20 zmm21 zmm22 zmm23 zmm24 zmm25 zmm26 zmm27 zmm28 zmm29 zmm30 zmm31 k0 k1 k2 k3 k4 k5 k6 k7 bnd0 bnd1 bnd2 bnd3 cr0 cr1 cr2 cr3 cr4 cr8 dr0 dr1 dr2 dr3 dr8 tr3 tr4 tr5 tr6 tr7 r0 r1 r2 r3 r4 r5 r6 r7 r0b r1b r2b r3b r4b r5b r6b r7b r0w r1w r2w r3w r4w r5w r6w r7w r0d r1d r2d r3d r4d r5d r6d r7d r0h r1h r2h r3h r0l r1l r2l r3l r4l r5l r6l r7l r8l r9l r10l r11l r12l r13l r14l r15l db dw dd dq dt ddq do dy dz resb resw resd resq rest resdq reso resy resz incbin equ times byte word dword qword nosplit rel abs seg wrt strict near far a32 ptr",meta:"%define %xdefine %+ %undef %defstr %deftok %assign %strcat %strlen %substr %rotate %elif %else %endif %if %ifmacro %ifctx %ifidn %ifidni %ifid %ifnum %ifstr %iftoken %ifempty %ifenv %error %warning %fatal %rep %endrep %include %push %pop %repl %pathsearch %depend %use %arg %stacksize %local %line %comment %endcomment .nolist __FILE__ __LINE__ __SECT__  __BITS__ __OUTPUT_FORMAT__ __DATE__ __TIME__ __DATE_NUM__ __TIME_NUM__ __UTC_DATE__ __UTC_TIME__ __UTC_DATE_NUM__ __UTC_TIME_NUM__  __PASS__ struc endstruc istruc at iend align alignb sectalign daz nodaz up down zero default option assume public bits use16 use32 use64 default section segment absolute extern global common cpu float __utf16__ __utf16le__ __utf16be__ __utf32__ __utf32le__ __utf32be__ __float8__ __float16__ __float32__ __float64__ __float80m__ __float80e__ __float128l__ __float128h__ __Infinity__ __QNaN__ __SNaN__ Inf NaN QNaN SNaN float8 float16 float32 float64 float80m float80e float128l float128h __FLOAT_DAZ__ __FLOAT_ROUND__ __FLOAT__"},c:[s.C(";","$",{r:0}),{cN:"number",v:[{b:"\\b(?:([0-9][0-9_]*)?\\.[0-9_]*(?:[eE][+-]?[0-9_]+)?|(0[Xx])?[0-9][0-9_]*\\.?[0-9_]*(?:[pP](?:[+-]?[0-9_]+)?)?)\\b",r:0},{b:"\\$[0-9][0-9A-Fa-f]*",r:0},{b:"\\b(?:[0-9A-Fa-f][0-9A-Fa-f_]*[Hh]|[0-9][0-9_]*[DdTt]?|[0-7][0-7_]*[QqOo]|[0-1][0-1_]*[BbYy])\\b"},{b:"\\b(?:0[Xx][0-9A-Fa-f_]+|0[DdTt][0-9_]+|0[QqOo][0-7_]+|0[BbYy][0-1_]+)\\b"}]},s.QSM,{cN:"string",v:[{b:"'",e:"[^\\\\]'"},{b:"`",e:"[^\\\\]`"}],r:0},{cN:"symbol",v:[{b:"^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)"},{b:"^\\s*%%[A-Za-z0-9_$#@~.?]*:"}],r:0},{cN:"subst",b:"%[0-9]+",r:0},{cN:"subst",b:"%!S+",r:0},{cN:"meta",b:/^\s*\.[\w_-]+/}]}});hljs.registerLanguage("ruby",function(e){var b="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",r={keyword:"and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",literal:"true false nil"},c={cN:"doctag",b:"@[A-Za-z]+"},a={b:"#<",e:">"},s=[e.C("#","$",{c:[c]}),e.C("^\\=begin","^\\=end",{c:[c],r:10}),e.C("^__END__","\\n$")],n={cN:"subst",b:"#\\{",e:"}",k:r},t={cN:"string",c:[e.BE,n],v:[{b:/'/,e:/'/},{b:/"/,e:/"/},{b:/`/,e:/`/},{b:"%[qQwWx]?\\(",e:"\\)"},{b:"%[qQwWx]?\\[",e:"\\]"},{b:"%[qQwWx]?{",e:"}"},{b:"%[qQwWx]?<",e:">"},{b:"%[qQwWx]?/",e:"/"},{b:"%[qQwWx]?%",e:"%"},{b:"%[qQwWx]?-",e:"-"},{b:"%[qQwWx]?\\|",e:"\\|"},{b:/\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/},{b:/<<[-~]?'?(\w+)(?:.|\n)*?\n\s*\1\b/,rB:!0,c:[{b:/<<[-~]?'?/},{b:/\w+/,endSameAsBegin:!0,c:[e.BE,n]}]}]},i={cN:"params",b:"\\(",e:"\\)",endsParent:!0,k:r},d=[t,a,{cN:"class",bK:"class module",e:"$|;",i:/=/,c:[e.inherit(e.TM,{b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}),{b:"<\\s*",c:[{b:"("+e.IR+"::)?"+e.IR}]}].concat(s)},{cN:"function",bK:"def",e:"$|;",c:[e.inherit(e.TM,{b:b}),i].concat(s)},{b:e.IR+"::"},{cN:"symbol",b:e.UIR+"(\\!|\\?)?:",r:0},{cN:"symbol",b:":(?!\\s)",c:[t,{b:b}],r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{cN:"params",b:/\|/,e:/\|/,k:r},{b:"("+e.RSR+"|unless)\\s*",k:"unless",c:[a,{cN:"regexp",c:[e.BE,n],i:/\n/,v:[{b:"/",e:"/[a-z]*"},{b:"%r{",e:"}[a-z]*"},{b:"%r\\(",e:"\\)[a-z]*"},{b:"%r!",e:"![a-z]*"},{b:"%r\\[",e:"\\][a-z]*"}]}].concat(s),r:0}].concat(s);n.c=d;var l=[{b:/^\s*=>/,starts:{e:"$",c:i.c=d}},{cN:"meta",b:"^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>)",starts:{e:"$",c:d}}];return{aliases:["rb","gemspec","podspec","thor","irb"],k:r,i:/\/\*/,c:s.concat(l).concat(d)}});hljs.registerLanguage("yaml",function(e){var b="true false yes no null",a="^[ \\-]*",r="[a-zA-Z_][\\w\\-]*",t={cN:"attr",v:[{b:a+r+":"},{b:a+'"'+r+'":'},{b:a+"'"+r+"':"}]},c={cN:"string",r:0,v:[{b:/'/,e:/'/},{b:/"/,e:/"/},{b:/\S+/}],c:[e.BE,{cN:"template-variable",v:[{b:"{{",e:"}}"},{b:"%{",e:"}"}]}]};return{cI:!0,aliases:["yml","YAML","yaml"],c:[t,{cN:"meta",b:"^---s*$",r:10},{cN:"string",b:"[\\|>] *$",rE:!0,c:c.c,e:t.v[0].b},{b:"<%[%=-]?",e:"[%-]?%>",sL:"ruby",eB:!0,eE:!0,r:0},{cN:"type",b:"!"+e.UIR},{cN:"type",b:"!!"+e.UIR},{cN:"meta",b:"&"+e.UIR+"$"},{cN:"meta",b:"\\*"+e.UIR+"$"},{cN:"bullet",b:"^ *-",r:0},e.HCM,{bK:b,k:{literal:b}},e.CNM,c]}});hljs.registerLanguage("ocaml",function(e){return{aliases:["ml"],k:{keyword:"and as assert asr begin class constraint do done downto else end exception external for fun function functor if in include inherit! inherit initializer land lazy let lor lsl lsr lxor match method!|10 method mod module mutable new object of open! open or private rec sig struct then to try type val! val virtual when while with parser value",built_in:"array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 string unit in_channel out_channel ref",literal:"true false"},i:/\/\/|>>/,l:"[a-z_]\\w*!?",c:[{cN:"literal",b:"\\[(\\|\\|)?\\]|\\(\\)",r:0},e.C("\\(\\*","\\*\\)",{c:["self"]}),{cN:"symbol",b:"'[A-Za-z_](?!')[\\w']*"},{cN:"type",b:"`[A-Z][\\w']*"},{cN:"type",b:"\\b[A-Z][\\w']*",r:0},{b:"[a-z_]\\w*'[\\w']*",r:0},e.inherit(e.ASM,{cN:"string",r:0}),e.inherit(e.QSM,{i:null}),{cN:"number",b:"\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",r:0},{b:/[-=]>/}]}});hljs.registerLanguage("erlang",function(e){var r="[a-z'][a-zA-Z0-9_']*",c="("+r+":"+r+"|"+r+")",b={keyword:"after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor",literal:"false true"},i=e.C("%","$"),n={cN:"number",b:"\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)",r:0},a={b:"fun\\s+"+r+"/\\d+"},d={b:c+"\\(",e:"\\)",rB:!0,r:0,c:[{b:c,r:0},{b:"\\(",e:"\\)",eW:!0,rE:!0,r:0}]},o={b:"{",e:"}",r:0},t={b:"\\b_([A-Z][A-Za-z0-9_]*)?",r:0},f={b:"[A-Z][a-zA-Z0-9_]*",r:0},l={b:"#"+e.UIR,r:0,rB:!0,c:[{b:"#"+e.UIR,r:0},{b:"{",e:"}",r:0}]},s={bK:"fun receive if try case",e:"end",k:b};s.c=[i,a,e.inherit(e.ASM,{cN:""}),s,d,e.QSM,n,o,t,f,l];var u=[i,a,s,d,e.QSM,n,o,t,f,l];d.c[1].c=u,o.c=u;var h={cN:"params",b:"\\(",e:"\\)",c:l.c[1].c=u};return{aliases:["erl"],k:b,i:"(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))",c:[{cN:"function",b:"^"+r+"\\s*\\(",e:"->",rB:!0,i:"\\(|#|//|/\\*|\\\\|:|;",c:[h,e.inherit(e.TM,{b:r})],starts:{e:";|\\.",k:b,c:u}},i,{b:"^-",e:"\\.",r:0,eE:!0,rB:!0,l:"-"+e.IR,k:"-module -record -undef -export -ifdef -ifndef -author -copyright -doc -vsn -import -include -include_lib -compile -define -else -endif -file -behaviour -behavior -spec",c:[h]},n,e.QSM,l,t,f,o,{b:/\.$/}]}});hljs.registerLanguage("typescript",function(e){var r="[A-Za-z$_][0-9A-Za-z$_]*",t={keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class public private protected get set super static implements enum export import declare type namespace abstract as from extends async await",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document any number boolean string void Promise"},n={cN:"meta",b:"@"+r},a={b:"\\(",e:/\)/,k:t,c:["self",e.QSM,e.ASM,e.NM]},s={cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,k:t,c:[e.CLCM,e.CBCM,n,a]},c={cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},o={cN:"subst",b:"\\$\\{",e:"\\}",k:t,c:[]},i={b:"html`",e:"",starts:{e:"`",rE:!1,c:[e.BE,o],sL:"xml"}},l={b:"css`",e:"",starts:{e:"`",rE:!1,c:[e.BE,o],sL:"css"}},b={cN:"string",b:"`",e:"`",c:[e.BE,o]};return o.c=[e.ASM,e.QSM,i,l,b,c,e.RM],{aliases:["ts"],k:t,c:[{cN:"meta",b:/^\s*['"]use strict['"]/},e.ASM,e.QSM,i,l,b,e.CLCM,e.CBCM,c,{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{cN:"function",b:"(\\(.*?\\)|"+e.IR+")\\s*=>",rB:!0,e:"\\s*=>",c:[{cN:"params",v:[{b:e.IR},{b:/\(\s*\)/},{b:/\(/,e:/\)/,eB:!0,eE:!0,k:t,c:["self",e.CLCM,e.CBCM]}]}]}],r:0},{cN:"function",b:"function",e:/[\{;]/,eE:!0,k:t,c:["self",e.inherit(e.TM,{b:r}),s],i:/%/,r:0},{bK:"constructor",e:/\{/,eE:!0,c:["self",s]},{b:/module\./,k:{built_in:"module"},r:0},{bK:"module",e:/\{/,eE:!0},{bK:"interface",e:/\{/,eE:!0,k:"interface extends"},{b:/\$[(.]/},{b:"\\."+e.IR,r:0},n,a]}});hljs.registerLanguage("sql",function(e){var t=e.C("--","$");return{cI:!0,i:/[<>{}*]/,c:[{bK:"begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment values with",e:/;/,eW:!0,l:/[\w\.]+/,k:{keyword:"as abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias all allocate allow alter always analyze ancillary and anti any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound bucket buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain explode export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force foreign form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour hours http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lateral lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minutes minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notnull notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second seconds section securefile security seed segment select self semi sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tablesample tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unnest unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace window with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",literal:"true false null unknown",built_in:"array bigint binary bit blob bool boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text time timestamp tinyint varchar varying void"},c:[{cN:"string",b:"'",e:"'",c:[e.BE,{b:"''"}]},{cN:"string",b:'"',e:'"',c:[e.BE,{b:'""'}]},{cN:"string",b:"`",e:"`",c:[e.BE]},e.CNM,e.CBCM,t,e.HCM]},e.CBCM,t,e.HCM]}});hljs.registerLanguage("rust",function(e){var t="([ui](8|16|32|64|128|size)|f(32|64))?",r="drop i8 i16 i32 i64 i128 isize u8 u16 u32 u64 u128 usize f32 f64 str char bool Box Option Result String Vec Copy Send Sized Sync Drop Fn FnMut FnOnce ToOwned Clone Debug PartialEq PartialOrd Eq Ord AsRef AsMut Into From Default Iterator Extend IntoIterator DoubleEndedIterator ExactSizeIterator SliceConcatExt ToString assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! debug_assert! debug_assert_eq! env! panic! file! format! format_args! include_bin! include_str! line! local_data_key! module_path! option_env! print! println! select! stringify! try! unimplemented! unreachable! vec! write! writeln! macro_rules! assert_ne! debug_assert_ne!";return{aliases:["rs"],k:{keyword:"abstract as async await become box break const continue crate do dyn else enum extern false final fn for if impl in let loop macro match mod move mut override priv pub ref return self Self static struct super trait true try type typeof unsafe unsized use virtual where while yield",literal:"true false Some None Ok Err",built_in:r},l:e.IR+"!?",i:"</",c:[e.CLCM,e.C("/\\*","\\*/",{c:["self"]}),e.inherit(e.QSM,{b:/b?"/,i:null}),{cN:"string",v:[{b:/r(#*)"(.|\n)*?"\1(?!#)/},{b:/b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/}]},{cN:"symbol",b:/'[a-zA-Z_][a-zA-Z0-9_]*/},{cN:"number",v:[{b:"\\b0b([01_]+)"+t},{b:"\\b0o([0-7_]+)"+t},{b:"\\b0x([A-Fa-f0-9_]+)"+t},{b:"\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)"+t}],r:0},{cN:"function",bK:"fn",e:"(\\(|<)",eE:!0,c:[e.UTM]},{cN:"meta",b:"#\\!?\\[",e:"\\]",c:[{cN:"meta-string",b:/"/,e:/"/}]},{cN:"class",bK:"type",e:";",c:[e.inherit(e.UTM,{endsParent:!0})],i:"\\S"},{cN:"class",bK:"trait enum struct union",e:"{",c:[e.inherit(e.UTM,{endsParent:!0})],i:"[\\w\\d]"},{b:e.IR+"::",k:{built_in:r}},{b:"->"}]}});hljs.registerLanguage("css",function(e){var c={b:/(?:[A-Z\_\.\-]+|--[a-zA-Z0-9_-]+)\s*:/,rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:/\S/,e:":",eE:!0,starts:{eW:!0,eE:!0,c:[{b:/[\w-]+\(/,rB:!0,c:[{cN:"built_in",b:/[\w-]+/},{b:/\(/,e:/\)/,c:[e.ASM,e.QSM]}]},e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"number",b:"#[0-9A-Fa-f]+"},{cN:"meta",b:"!important"}]}}]};return{cI:!0,i:/[=\/|'\$]/,c:[e.CBCM,{cN:"selector-id",b:/#[A-Za-z0-9_-]+/},{cN:"selector-class",b:/\.[A-Za-z0-9_-]+/},{cN:"selector-attr",b:/\[/,e:/\]/,i:"$"},{cN:"selector-pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{b:"@",e:"[{;]",i:/:/,c:[{cN:"keyword",b:/\w+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[e.ASM,e.QSM,e.CSSNM]}]},{cN:"selector-tag",b:"[a-zA-Z-][a-zA-Z0-9_-]*",r:0},{b:"{",e:"}",i:/\S/,c:[e.CBCM,c]}]}});hljs.registerLanguage("verilog",function(e){return{aliases:["v","sv","svh"],cI:!1,k:{keyword:"accept_on alias always always_comb always_ff always_latch and assert assign assume automatic before begin bind bins binsof bit break buf|0 bufif0 bufif1 byte case casex casez cell chandle checker class clocking cmos config const constraint context continue cover covergroup coverpoint cross deassign default defparam design disable dist do edge else end endcase endchecker endclass endclocking endconfig endfunction endgenerate endgroup endinterface endmodule endpackage endprimitive endprogram endproperty endspecify endsequence endtable endtask enum event eventually expect export extends extern final first_match for force foreach forever fork forkjoin function generate|5 genvar global highz0 highz1 if iff ifnone ignore_bins illegal_bins implements implies import incdir include initial inout input inside instance int integer interconnect interface intersect join join_any join_none large let liblist library local localparam logic longint macromodule matches medium modport module nand negedge nettype new nexttime nmos nor noshowcancelled not notif0 notif1 or output package packed parameter pmos posedge primitive priority program property protected pull0 pull1 pulldown pullup pulsestyle_ondetect pulsestyle_onevent pure rand randc randcase randsequence rcmos real realtime ref reg reject_on release repeat restrict return rnmos rpmos rtran rtranif0 rtranif1 s_always s_eventually s_nexttime s_until s_until_with scalared sequence shortint shortreal showcancelled signed small soft solve specify specparam static string strong strong0 strong1 struct super supply0 supply1 sync_accept_on sync_reject_on table tagged task this throughout time timeprecision timeunit tran tranif0 tranif1 tri tri0 tri1 triand trior trireg type typedef union unique unique0 unsigned until until_with untyped use uwire var vectored virtual void wait wait_order wand weak weak0 weak1 while wildcard wire with within wor xnor xor",literal:"null",built_in:"$finish $stop $exit $fatal $error $warning $info $realtime $time $printtimescale $bitstoreal $bitstoshortreal $itor $signed $cast $bits $stime $timeformat $realtobits $shortrealtobits $rtoi $unsigned $asserton $assertkill $assertpasson $assertfailon $assertnonvacuouson $assertoff $assertcontrol $assertpassoff $assertfailoff $assertvacuousoff $isunbounded $sampled $fell $changed $past_gclk $fell_gclk $changed_gclk $rising_gclk $steady_gclk $coverage_control $coverage_get $coverage_save $set_coverage_db_name $rose $stable $past $rose_gclk $stable_gclk $future_gclk $falling_gclk $changing_gclk $display $coverage_get_max $coverage_merge $get_coverage $load_coverage_db $typename $unpacked_dimensions $left $low $increment $clog2 $ln $log10 $exp $sqrt $pow $floor $ceil $sin $cos $tan $countbits $onehot $isunknown $fatal $warning $dimensions $right $high $size $asin $acos $atan $atan2 $hypot $sinh $cosh $tanh $asinh $acosh $atanh $countones $onehot0 $error $info $random $dist_chi_square $dist_erlang $dist_exponential $dist_normal $dist_poisson $dist_t $dist_uniform $q_initialize $q_remove $q_exam $async$and$array $async$nand$array $async$or$array $async$nor$array $sync$and$array $sync$nand$array $sync$or$array $sync$nor$array $q_add $q_full $psprintf $async$and$plane $async$nand$plane $async$or$plane $async$nor$plane $sync$and$plane $sync$nand$plane $sync$or$plane $sync$nor$plane $system $display $displayb $displayh $displayo $strobe $strobeb $strobeh $strobeo $write $readmemb $readmemh $writememh $value$plusargs $dumpvars $dumpon $dumplimit $dumpports $dumpportson $dumpportslimit $writeb $writeh $writeo $monitor $monitorb $monitorh $monitoro $writememb $dumpfile $dumpoff $dumpall $dumpflush $dumpportsoff $dumpportsall $dumpportsflush $fclose $fdisplay $fdisplayb $fdisplayh $fdisplayo $fstrobe $fstrobeb $fstrobeh $fstrobeo $swrite $swriteb $swriteh $swriteo $fscanf $fread $fseek $fflush $feof $fopen $fwrite $fwriteb $fwriteh $fwriteo $fmonitor $fmonitorb $fmonitorh $fmonitoro $sformat $sformatf $fgetc $ungetc $fgets $sscanf $rewind $ftell $ferror"},l:/[\w\$]+/,c:[e.CBCM,e.CLCM,e.QSM,{cN:"number",c:[e.BE],v:[{b:"\\b((\\d+'(b|h|o|d|B|H|O|D))[0-9xzXZa-fA-F_]+)"},{b:"\\B(('(b|h|o|d|B|H|O|D))[0-9xzXZa-fA-F_]+)"},{b:"\\b([0-9_])+",r:0}]},{cN:"variable",v:[{b:"#\\((?!parameter).+\\)"},{b:"\\.\\w+",r:0}]},{cN:"meta",b:"`",e:"$",k:{"meta-keyword":"define __FILE__ __LINE__ begin_keywords celldefine default_nettype define else elsif end_keywords endcelldefine endif ifdef ifndef include line nounconnected_drive pragma resetall timescale unconnected_drive undef undefineall"},r:0}]}});hljs.registerLanguage("brainfuck",function(r){var n={cN:"literal",b:"[\\+\\-]",r:0};return{aliases:["bf"],c:[r.C("[^\\[\\]\\.,\\+\\-<> \r\n]","[\\[\\]\\.,\\+\\-<> \r\n]",{rE:!0,r:0}),{cN:"title",b:"[\\[\\]]",r:0},{cN:"string",b:"[\\.,]",r:0},{b:/\+\+|\-\-/,rB:!0,c:[n]},n]}});hljs.registerLanguage("cpp",function(t){var e={cN:"keyword",b:"\\b[a-z\\d_]*_t\\b"},r={cN:"string",v:[{b:'(u8?|U|L)?"',e:'"',i:"\\n",c:[t.BE]},{b:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\((?:.|\n)*?\)\1"/},{b:"'\\\\?.",e:"'",i:"."}]},s={cN:"number",v:[{b:"\\b(0b[01']+)"},{b:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{b:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],r:0},i={cN:"meta",b:/#\s*[a-z]+\b/,e:/$/,k:{"meta-keyword":"if else elif endif define undef warning error line pragma ifdef ifndef include"},c:[{b:/\\\n/,r:0},t.inherit(r,{cN:"meta-string"}),{cN:"meta-string",b:/<[^\n>]*>/,e:/$/,i:"\\n"},t.CLCM,t.CBCM]},a=t.IR+"\\s*\\(",c={keyword:"int float while private char catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and or not",built_in:"std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr",literal:"true false nullptr NULL"},n=[e,t.CLCM,t.CBCM,s,r];return{aliases:["c","cc","h","c++","h++","hpp","hh","hxx","cxx"],k:c,i:"</",c:n.concat([i,{b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",e:">",k:c,c:["self",e]},{b:t.IR+"::",k:c},{v:[{b:/=/,e:/;/},{b:/\(/,e:/\)/},{bK:"new throw return else",e:/;/}],k:c,c:n.concat([{b:/\(/,e:/\)/,k:c,c:n.concat(["self"]),r:0}]),r:0},{cN:"function",b:"("+t.IR+"[\\*&\\s]+)+"+a,rB:!0,e:/[{;=]/,eE:!0,k:c,i:/[^\w\s\*&]/,c:[{b:a,rB:!0,c:[t.TM],r:0},{cN:"params",b:/\(/,e:/\)/,k:c,r:0,c:[t.CLCM,t.CBCM,r,s,e,{b:/\(/,e:/\)/,k:c,r:0,c:["self",t.CLCM,t.CBCM,r,s,e]}]},t.CLCM,t.CBCM,i]},{cN:"class",bK:"class struct",e:/[{;:]/,c:[{b:/</,e:/>/,c:["self"]},t.TM]}]),exports:{preprocessor:i,strings:r,k:c}}});hljs.registerLanguage("arduino",function(e){var t=e.getLanguage("cpp").exports;return{k:{keyword:"boolean byte word string String array "+t.k.keyword,built_in:"setup loop while catch for if do goto try switch case else default break continue return KeyboardController MouseController SoftwareSerial EthernetServer EthernetClient LiquidCrystal RobotControl GSMVoiceCall EthernetUDP EsploraTFT HttpClient RobotMotor WiFiClient GSMScanner FileSystem Scheduler GSMServer YunClient YunServer IPAddress GSMClient GSMModem Keyboard Ethernet Console GSMBand Esplora Stepper Process WiFiUDP GSM_SMS Mailbox USBHost Firmata PImage Client Server GSMPIN FileIO Bridge Serial EEPROM Stream Mouse Audio Servo File Task GPRS WiFi Wire TFT GSM SPI SD runShellCommandAsynchronously analogWriteResolution retrieveCallingNumber printFirmwareVersion analogReadResolution sendDigitalPortPair noListenOnLocalhost readJoystickButton setFirmwareVersion readJoystickSwitch scrollDisplayRight getVoiceCallStatus scrollDisplayLeft writeMicroseconds delayMicroseconds beginTransmission getSignalStrength runAsynchronously getAsynchronously listenOnLocalhost getCurrentCarrier readAccelerometer messageAvailable sendDigitalPorts lineFollowConfig countryNameWrite runShellCommand readStringUntil rewindDirectory readTemperature setClockDivider readLightSensor endTransmission analogReference detachInterrupt countryNameRead attachInterrupt encryptionType readBytesUntil robotNameWrite readMicrophone robotNameRead cityNameWrite userNameWrite readJoystickY readJoystickX mouseReleased openNextFile scanNetworks noInterrupts digitalWrite beginSpeaker mousePressed isActionDone mouseDragged displayLogos noAutoscroll addParameter remoteNumber getModifiers keyboardRead userNameRead waitContinue processInput parseCommand printVersion readNetworks writeMessage blinkVersion cityNameRead readMessage setDataMode parsePacket isListening setBitOrder beginPacket isDirectory motorsWrite drawCompass digitalRead clearScreen serialEvent rightToLeft setTextSize leftToRight requestFrom keyReleased compassRead analogWrite interrupts WiFiServer disconnect playMelody parseFloat autoscroll getPINUsed setPINUsed setTimeout sendAnalog readSlider analogRead beginWrite createChar motorsStop keyPressed tempoWrite readButton subnetMask debugPrint macAddress writeGreen randomSeed attachGPRS readString sendString remotePort releaseAll mouseMoved background getXChange getYChange answerCall getResult voiceCall endPacket constrain getSocket writeJSON getButton available connected findUntil readBytes exitValue readGreen writeBlue startLoop IPAddress isPressed sendSysex pauseMode gatewayIP setCursor getOemKey tuneWrite noDisplay loadImage switchPIN onRequest onReceive changePIN playFile noBuffer parseInt overflow checkPIN knobRead beginTFT bitClear updateIR bitWrite position writeRGB highByte writeRed setSpeed readBlue noStroke remoteIP transfer shutdown hangCall beginSMS endWrite attached maintain noCursor checkReg checkPUK shiftOut isValid shiftIn pulseIn connect println localIP pinMode getIMEI display noBlink process getBand running beginSD drawBMP lowByte setBand release bitRead prepare pointTo readRed setMode noFill remove listen stroke detach attach noTone exists buffer height bitSet circle config cursor random IRread setDNS endSMS getKey micros millis begin print write ready flush width isPIN blink clear press mkdir rmdir close point yield image BSSID click delay read text move peek beep rect line open seek fill size turn stop home find step tone sqrt RSSI SSID end bit tan cos sin pow map abs max min get run put",literal:"DIGITAL_MESSAGE FIRMATA_STRING ANALOG_MESSAGE REPORT_DIGITAL REPORT_ANALOG INPUT_PULLUP SET_PIN_MODE INTERNAL2V56 SYSTEM_RESET LED_BUILTIN INTERNAL1V1 SYSEX_START INTERNAL EXTERNAL DEFAULT OUTPUT INPUT HIGH LOW"},c:[t.preprocessor,e.CLCM,e.CBCM,e.ASM,e.QSM,e.CNM]}});hljs.registerLanguage("scheme",function(e){var t="[^\\(\\)\\[\\]\\{\\}\",'`;#|\\\\\\s]+",r="(\\-|\\+)?\\d+([./]\\d+)?",a={cN:"literal",b:"(#t|#f|#\\\\"+t+"|#\\\\.)"},i={cN:"number",v:[{b:r,r:0},{b:"(\\-|\\+)?\\d+([./]\\d+)?[+\\-](\\-|\\+)?\\d+([./]\\d+)?i",r:0},{b:"#b[0-1]+(/[0-1]+)?"},{b:"#o[0-7]+(/[0-7]+)?"},{b:"#x[0-9a-f]+(/[0-9a-f]+)?"}]},n=e.QSM,c=[e.C(";","$",{r:0}),e.C("#\\|","\\|#")],l={b:t,r:0},s={cN:"symbol",b:"'"+t},o={eW:!0,r:0},u={v:[{b:/'/},{b:"`"}],c:[{b:"\\(",e:"\\)",c:["self",a,n,i,l,s]}]},p={cN:"name",b:t,l:t,k:{"builtin-name":"case-lambda call/cc class define-class exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules ' * + , ,@ - ... / ; < <= = => > >= ` abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?"}},d={v:[{b:"\\(",e:"\\)"},{b:"\\[",e:"\\]"}],c:[{b:/lambda/,eW:!0,rB:!0,c:[p,{b:/\(/,e:/\)/,endsParent:!0,c:[l]}]},p,o]};return o.c=[a,i,n,l,s,u,d].concat(c),{i:/\S/,c:[{cN:"meta",b:"^#!",e:"$"},i,n,s,u,d].concat(c)}});hljs.registerLanguage("java",function(e){var a="false synchronized int abstract float private char boolean var static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do",t={cN:"number",b:"\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",r:0};return{aliases:["jsp"],k:a,i:/<\/|#/,c:[e.C("/\\*\\*","\\*/",{r:0,c:[{b:/\w+@/,r:0},{cN:"doctag",b:"@[A-Za-z]+"}]}),e.CLCM,e.CBCM,e.ASM,e.QSM,{cN:"class",bK:"class interface",e:/[{;=]/,eE:!0,k:"class interface",i:/[:"\[\]]/,c:[{bK:"extends implements"},e.UTM]},{bK:"new throw return else",r:0},{cN:"function",b:"([À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(<[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(\\s*,\\s*[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*)*>)?\\s+)+"+e.UIR+"\\s*\\(",rB:!0,e:/[{;=]/,eE:!0,k:a,c:[{b:e.UIR+"\\s*\\(",rB:!0,r:0,c:[e.UTM]},{cN:"params",b:/\(/,e:/\)/,k:a,r:0,c:[e.ASM,e.QSM,e.CNM,e.CBCM]},e.CLCM,e.CBCM]},t,{cN:"meta",b:"@[A-Za-z]+"}]}});hljs.registerLanguage("coq",function(e){return{k:{keyword:"_ as at cofix else end exists exists2 fix for forall fun if IF in let match mod Prop return Set then Type using where with Abort About Add Admit Admitted All Arguments Assumptions Axiom Back BackTo Backtrack Bind Blacklist Canonical Cd Check Class Classes Close Coercion Coercions CoFixpoint CoInductive Collection Combined Compute Conjecture Conjectures Constant constr Constraint Constructors Context Corollary CreateHintDb Cut Declare Defined Definition Delimit Dependencies DependentDerive Drop eauto End Equality Eval Example Existential Existentials Existing Export exporting Extern Extract Extraction Fact Field Fields File Fixpoint Focus for From Function Functional Generalizable Global Goal Grab Grammar Graph Guarded Heap Hint HintDb Hints Hypotheses Hypothesis ident Identity If Immediate Implicit Import Include Inductive Infix Info Initial Inline Inspect Instance Instances Intro Intros Inversion Inversion_clear Language Left Lemma Let Libraries Library Load LoadPath Local Locate Ltac ML Mode Module Modules Monomorphic Morphism Next NoInline Notation Obligation Obligations Opaque Open Optimize Options Parameter Parameters Parametric Path Paths pattern Polymorphic Preterm Print Printing Program Projections Proof Proposition Pwd Qed Quit Rec Record Recursive Redirect Relation Remark Remove Require Reserved Reset Resolve Restart Rewrite Right Ring Rings Save Scheme Scope Scopes Script Search SearchAbout SearchHead SearchPattern SearchRewrite Section Separate Set Setoid Show Solve Sorted Step Strategies Strategy Structure SubClass Table Tables Tactic Term Test Theorem Time Timeout Transparent Type Typeclasses Types Undelimit Undo Unfocus Unfocused Unfold Universe Universes Unset Unshelve using Variable Variables Variant Verbose Visibility where with",built_in:"abstract absurd admit after apply as assert assumption at auto autorewrite autounfold before bottom btauto by case case_eq cbn cbv change classical_left classical_right clear clearbody cofix compare compute congruence constr_eq constructor contradict contradiction cut cutrewrite cycle decide decompose dependent destruct destruction dintuition discriminate discrR do double dtauto eapply eassumption eauto ecase econstructor edestruct ediscriminate eelim eexact eexists einduction einjection eleft elim elimtype enough equality erewrite eright esimplify_eq esplit evar exact exactly_once exfalso exists f_equal fail field field_simplify field_simplify_eq first firstorder fix fold fourier functional generalize generalizing gfail give_up has_evar hnf idtac in induction injection instantiate intro intro_pattern intros intuition inversion inversion_clear is_evar is_var lapply lazy left lia lra move native_compute nia nsatz omega once pattern pose progress proof psatz quote record red refine reflexivity remember rename repeat replace revert revgoals rewrite rewrite_strat right ring ring_simplify rtauto set setoid_reflexivity setoid_replace setoid_rewrite setoid_symmetry setoid_transitivity shelve shelve_unifiable simpl simple simplify_eq solve specialize split split_Rabs split_Rmult stepl stepr subst sum swap symmetry tactic tauto time timeout top transitivity trivial try tryif unfold unify until using vm_compute with"},c:[e.QSM,e.C("\\(\\*","\\*\\)"),e.CNM,{cN:"type",eB:!0,b:"\\|\\s*",e:"\\w+"},{b:/[-=]>/}]}});hljs.registerLanguage("python",function(e){var r={keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10",built_in:"Ellipsis NotImplemented",literal:"False None True"},b={cN:"meta",b:/^(>>>|\.\.\.) /},c={cN:"subst",b:/\{/,e:/\}/,k:r,i:/#/},a={cN:"string",c:[e.BE],v:[{b:/(u|b)?r?'''/,e:/'''/,c:[e.BE,b],r:10},{b:/(u|b)?r?"""/,e:/"""/,c:[e.BE,b],r:10},{b:/(fr|rf|f)'''/,e:/'''/,c:[e.BE,b,c]},{b:/(fr|rf|f)"""/,e:/"""/,c:[e.BE,b,c]},{b:/(u|r|ur)'/,e:/'/,r:10},{b:/(u|r|ur)"/,e:/"/,r:10},{b:/(b|br)'/,e:/'/},{b:/(b|br)"/,e:/"/},{b:/(fr|rf|f)'/,e:/'/,c:[e.BE,c]},{b:/(fr|rf|f)"/,e:/"/,c:[e.BE,c]},e.ASM,e.QSM]},i={cN:"number",r:0,v:[{b:e.BNR+"[lLjJ]?"},{b:"\\b(0o[0-7]+)[lLjJ]?"},{b:e.CNR+"[lLjJ]?"}]},l={cN:"params",b:/\(/,e:/\)/,c:["self",b,i,a]};return c.c=[a,i,b],{aliases:["py","gyp","ipython"],k:r,i:/(<\/|->|\?)|=>/,c:[b,i,a,e.HCM,{v:[{cN:"function",bK:"def"},{cN:"class",bK:"class"}],e:/:/,i:/[${=;\n,]/,c:[e.UTM,l,{b:/->/,eW:!0,k:"None"}]},{cN:"meta",b:/^[\t ]*@/,e:/$/},{b:/\b(print|exec)\(/}]}});hljs.registerLanguage("lua",function(e){var t="\\[=*\\[",a="\\]=*\\]",r={b:t,e:a,c:["self"]},n=[e.C("--(?!"+t+")","$"),e.C("--"+t,a,{c:[r],r:10})];return{l:e.UIR,k:{literal:"true false nil",keyword:"and break do else elseif end for goto if in local not or repeat return then until while",built_in:"_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstringmodule next pairs pcall print rawequal rawget rawset require select setfenvsetmetatable tonumber tostring type unpack xpcall arg selfcoroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"},c:n.concat([{cN:"function",bK:"function",e:"\\)",c:[e.inherit(e.TM,{b:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}),{cN:"params",b:"\\(",eW:!0,c:n}].concat(n)},e.CNM,e.ASM,e.QSM,{cN:"string",b:t,e:a,c:[r],r:5}])}});hljs.registerLanguage("mipsasm",function(s){return{cI:!0,aliases:["mips"],l:"\\.?"+s.IR,k:{meta:".2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .ltorg ",built_in:"$0 $1 $2 $3 $4 $5 $6 $7 $8 $9 $10 $11 $12 $13 $14 $15 $16 $17 $18 $19 $20 $21 $22 $23 $24 $25 $26 $27 $28 $29 $30 $31 zero at v0 v1 a0 a1 a2 a3 a4 a5 a6 a7 t0 t1 t2 t3 t4 t5 t6 t7 t8 t9 s0 s1 s2 s3 s4 s5 s6 s7 s8 k0 k1 gp sp fp ra $f0 $f1 $f2 $f2 $f4 $f5 $f6 $f7 $f8 $f9 $f10 $f11 $f12 $f13 $f14 $f15 $f16 $f17 $f18 $f19 $f20 $f21 $f22 $f23 $f24 $f25 $f26 $f27 $f28 $f29 $f30 $f31 Context Random EntryLo0 EntryLo1 Context PageMask Wired EntryHi HWREna BadVAddr Count Compare SR IntCtl SRSCtl SRSMap Cause EPC PRId EBase Config Config1 Config2 Config3 LLAddr Debug DEPC DESAVE CacheErr ECC ErrorEPC TagLo DataLo TagHi DataHi WatchLo WatchHi PerfCtl PerfCnt "},c:[{cN:"keyword",b:"\\b(addi?u?|andi?|b(al)?|beql?|bgez(al)?l?|bgtzl?|blezl?|bltz(al)?l?|bnel?|cl[oz]|divu?|ext|ins|j(al)?|jalr(.hb)?|jr(.hb)?|lbu?|lhu?|ll|lui|lw[lr]?|maddu?|mfhi|mflo|movn|movz|move|msubu?|mthi|mtlo|mul|multu?|nop|nor|ori?|rotrv?|sb|sc|se[bh]|sh|sllv?|slti?u?|srav?|srlv?|subu?|sw[lr]?|xori?|wsbh|abs.[sd]|add.[sd]|alnv.ps|bc1[ft]l?|c.(s?f|un|u?eq|[ou]lt|[ou]le|ngle?|seq|l[et]|ng[et]).[sd]|(ceil|floor|round|trunc).[lw].[sd]|cfc1|cvt.d.[lsw]|cvt.l.[dsw]|cvt.ps.s|cvt.s.[dlw]|cvt.s.p[lu]|cvt.w.[dls]|div.[ds]|ldx?c1|luxc1|lwx?c1|madd.[sd]|mfc1|mov[fntz]?.[ds]|msub.[sd]|mth?c1|mul.[ds]|neg.[ds]|nmadd.[ds]|nmsub.[ds]|p[lu][lu].ps|recip.fmt|r?sqrt.[ds]|sdx?c1|sub.[ds]|suxc1|swx?c1|break|cache|d?eret|[de]i|ehb|mfc0|mtc0|pause|prefx?|rdhwr|rdpgpr|sdbbp|ssnop|synci?|syscall|teqi?|tgei?u?|tlb(p|r|w[ir])|tlti?u?|tnei?|wait|wrpgpr)",e:"\\s"},s.C("[;#]","$"),s.CBCM,s.QSM,{cN:"string",b:"'",e:"[^\\\\]'",r:0},{cN:"title",b:"\\|",e:"\\|",i:"\\n",r:0},{cN:"number",v:[{b:"0x[0-9a-f]+"},{b:"\\b-?\\d+"}],r:0},{cN:"symbol",v:[{b:"^\\s*[a-z_\\.\\$][a-z0-9_\\.\\$]+:"},{b:"^\\s*[0-9]+:"},{b:"[0-9]+[bf]"}],r:0}],i:"/"}});hljs.registerLanguage("glsl",function(e){return{k:{keyword:"break continue discard do else for if return while switch case default attribute binding buffer ccw centroid centroid varying coherent column_major const cw depth_any depth_greater depth_less depth_unchanged early_fragment_tests equal_spacing flat fractional_even_spacing fractional_odd_spacing highp in index inout invariant invocations isolines layout line_strip lines lines_adjacency local_size_x local_size_y local_size_z location lowp max_vertices mediump noperspective offset origin_upper_left out packed patch pixel_center_integer point_mode points precise precision quads r11f_g11f_b10f r16 r16_snorm r16f r16i r16ui r32f r32i r32ui r8 r8_snorm r8i r8ui readonly restrict rg16 rg16_snorm rg16f rg16i rg16ui rg32f rg32i rg32ui rg8 rg8_snorm rg8i rg8ui rgb10_a2 rgb10_a2ui rgba16 rgba16_snorm rgba16f rgba16i rgba16ui rgba32f rgba32i rgba32ui rgba8 rgba8_snorm rgba8i rgba8ui row_major sample shared smooth std140 std430 stream triangle_strip triangles triangles_adjacency uniform varying vertices volatile writeonly",type:"atomic_uint bool bvec2 bvec3 bvec4 dmat2 dmat2x2 dmat2x3 dmat2x4 dmat3 dmat3x2 dmat3x3 dmat3x4 dmat4 dmat4x2 dmat4x3 dmat4x4 double dvec2 dvec3 dvec4 float iimage1D iimage1DArray iimage2D iimage2DArray iimage2DMS iimage2DMSArray iimage2DRect iimage3D iimageBufferiimageCube iimageCubeArray image1D image1DArray image2D image2DArray image2DMS image2DMSArray image2DRect image3D imageBuffer imageCube imageCubeArray int isampler1D isampler1DArray isampler2D isampler2DArray isampler2DMS isampler2DMSArray isampler2DRect isampler3D isamplerBuffer isamplerCube isamplerCubeArray ivec2 ivec3 ivec4 mat2 mat2x2 mat2x3 mat2x4 mat3 mat3x2 mat3x3 mat3x4 mat4 mat4x2 mat4x3 mat4x4 sampler1D sampler1DArray sampler1DArrayShadow sampler1DShadow sampler2D sampler2DArray sampler2DArrayShadow sampler2DMS sampler2DMSArray sampler2DRect sampler2DRectShadow sampler2DShadow sampler3D samplerBuffer samplerCube samplerCubeArray samplerCubeArrayShadow samplerCubeShadow image1D uimage1DArray uimage2D uimage2DArray uimage2DMS uimage2DMSArray uimage2DRect uimage3D uimageBuffer uimageCube uimageCubeArray uint usampler1D usampler1DArray usampler2D usampler2DArray usampler2DMS usampler2DMSArray usampler2DRect usampler3D samplerBuffer usamplerCube usamplerCubeArray uvec2 uvec3 uvec4 vec2 vec3 vec4 void",built_in:"gl_MaxAtomicCounterBindings gl_MaxAtomicCounterBufferSize gl_MaxClipDistances gl_MaxClipPlanes gl_MaxCombinedAtomicCounterBuffers gl_MaxCombinedAtomicCounters gl_MaxCombinedImageUniforms gl_MaxCombinedImageUnitsAndFragmentOutputs gl_MaxCombinedTextureImageUnits gl_MaxComputeAtomicCounterBuffers gl_MaxComputeAtomicCounters gl_MaxComputeImageUniforms gl_MaxComputeTextureImageUnits gl_MaxComputeUniformComponents gl_MaxComputeWorkGroupCount gl_MaxComputeWorkGroupSize gl_MaxDrawBuffers gl_MaxFragmentAtomicCounterBuffers gl_MaxFragmentAtomicCounters gl_MaxFragmentImageUniforms gl_MaxFragmentInputComponents gl_MaxFragmentInputVectors gl_MaxFragmentUniformComponents gl_MaxFragmentUniformVectors gl_MaxGeometryAtomicCounterBuffers gl_MaxGeometryAtomicCounters gl_MaxGeometryImageUniforms gl_MaxGeometryInputComponents gl_MaxGeometryOutputComponents gl_MaxGeometryOutputVertices gl_MaxGeometryTextureImageUnits gl_MaxGeometryTotalOutputComponents gl_MaxGeometryUniformComponents gl_MaxGeometryVaryingComponents gl_MaxImageSamples gl_MaxImageUnits gl_MaxLights gl_MaxPatchVertices gl_MaxProgramTexelOffset gl_MaxTessControlAtomicCounterBuffers gl_MaxTessControlAtomicCounters gl_MaxTessControlImageUniforms gl_MaxTessControlInputComponents gl_MaxTessControlOutputComponents gl_MaxTessControlTextureImageUnits gl_MaxTessControlTotalOutputComponents gl_MaxTessControlUniformComponents gl_MaxTessEvaluationAtomicCounterBuffers gl_MaxTessEvaluationAtomicCounters gl_MaxTessEvaluationImageUniforms gl_MaxTessEvaluationInputComponents gl_MaxTessEvaluationOutputComponents gl_MaxTessEvaluationTextureImageUnits gl_MaxTessEvaluationUniformComponents gl_MaxTessGenLevel gl_MaxTessPatchComponents gl_MaxTextureCoords gl_MaxTextureImageUnits gl_MaxTextureUnits gl_MaxVaryingComponents gl_MaxVaryingFloats gl_MaxVaryingVectors gl_MaxVertexAtomicCounterBuffers gl_MaxVertexAtomicCounters gl_MaxVertexAttribs gl_MaxVertexImageUniforms gl_MaxVertexOutputComponents gl_MaxVertexOutputVectors gl_MaxVertexTextureImageUnits gl_MaxVertexUniformComponents gl_MaxVertexUniformVectors gl_MaxViewports gl_MinProgramTexelOffset gl_BackColor gl_BackLightModelProduct gl_BackLightProduct gl_BackMaterial gl_BackSecondaryColor gl_ClipDistance gl_ClipPlane gl_ClipVertex gl_Color gl_DepthRange gl_EyePlaneQ gl_EyePlaneR gl_EyePlaneS gl_EyePlaneT gl_Fog gl_FogCoord gl_FogFragCoord gl_FragColor gl_FragCoord gl_FragData gl_FragDepth gl_FrontColor gl_FrontFacing gl_FrontLightModelProduct gl_FrontLightProduct gl_FrontMaterial gl_FrontSecondaryColor gl_GlobalInvocationID gl_InstanceID gl_InvocationID gl_Layer gl_LightModel gl_LightSource gl_LocalInvocationID gl_LocalInvocationIndex gl_ModelViewMatrix gl_ModelViewMatrixInverse gl_ModelViewMatrixInverseTranspose gl_ModelViewMatrixTranspose gl_ModelViewProjectionMatrix gl_ModelViewProjectionMatrixInverse gl_ModelViewProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixTranspose gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_Normal gl_NormalMatrix gl_NormalScale gl_NumSamples gl_NumWorkGroups gl_ObjectPlaneQ gl_ObjectPlaneR gl_ObjectPlaneS gl_ObjectPlaneT gl_PatchVerticesIn gl_Point gl_PointCoord gl_PointSize gl_Position gl_PrimitiveID gl_PrimitiveIDIn gl_ProjectionMatrix gl_ProjectionMatrixInverse gl_ProjectionMatrixInverseTranspose gl_ProjectionMatrixTranspose gl_SampleID gl_SampleMask gl_SampleMaskIn gl_SamplePosition gl_SecondaryColor gl_TessCoord gl_TessLevelInner gl_TessLevelOuter gl_TexCoord gl_TextureEnvColor gl_TextureMatrix gl_TextureMatrixInverse gl_TextureMatrixInverseTranspose gl_TextureMatrixTranspose gl_Vertex gl_VertexID gl_ViewportIndex gl_WorkGroupID gl_WorkGroupSize gl_in gl_out EmitStreamVertex EmitVertex EndPrimitive EndStreamPrimitive abs acos acosh all any asin asinh atan atanh atomicAdd atomicAnd atomicCompSwap atomicCounter atomicCounterDecrement atomicCounterIncrement atomicExchange atomicMax atomicMin atomicOr atomicXor barrier bitCount bitfieldExtract bitfieldInsert bitfieldReverse ceil clamp cos cosh cross dFdx dFdy degrees determinant distance dot equal exp exp2 faceforward findLSB findMSB floatBitsToInt floatBitsToUint floor fma fract frexp ftransform fwidth greaterThan greaterThanEqual groupMemoryBarrier imageAtomicAdd imageAtomicAnd imageAtomicCompSwap imageAtomicExchange imageAtomicMax imageAtomicMin imageAtomicOr imageAtomicXor imageLoad imageSize imageStore imulExtended intBitsToFloat interpolateAtCentroid interpolateAtOffset interpolateAtSample inverse inversesqrt isinf isnan ldexp length lessThan lessThanEqual log log2 matrixCompMult max memoryBarrier memoryBarrierAtomicCounter memoryBarrierBuffer memoryBarrierImage memoryBarrierShared min mix mod modf noise1 noise2 noise3 noise4 normalize not notEqual outerProduct packDouble2x32 packHalf2x16 packSnorm2x16 packSnorm4x8 packUnorm2x16 packUnorm4x8 pow radians reflect refract round roundEven shadow1D shadow1DLod shadow1DProj shadow1DProjLod shadow2D shadow2DLod shadow2DProj shadow2DProjLod sign sin sinh smoothstep sqrt step tan tanh texelFetch texelFetchOffset texture texture1D texture1DLod texture1DProj texture1DProjLod texture2D texture2DLod texture2DProj texture2DProjLod texture3D texture3DLod texture3DProj texture3DProjLod textureCube textureCubeLod textureGather textureGatherOffset textureGatherOffsets textureGrad textureGradOffset textureLod textureLodOffset textureOffset textureProj textureProjGrad textureProjGradOffset textureProjLod textureProjLodOffset textureProjOffset textureQueryLevels textureQueryLod textureSize transpose trunc uaddCarry uintBitsToFloat umulExtended unpackDouble2x32 unpackHalf2x16 unpackSnorm2x16 unpackSnorm4x8 unpackUnorm2x16 unpackUnorm4x8 usubBorrow",literal:"true false"},i:'"',c:[e.CLCM,e.CBCM,e.CNM,{cN:"meta",b:"#",e:"$"}]}});hljs.registerLanguage("matlab",function(e){var a="('|\\.')+",s={r:0,c:[{b:a}]};return{k:{keyword:"break case catch classdef continue else elseif end enumerated events for function global if methods otherwise parfor persistent properties return spmd switch try while",built_in:"sin sind sinh asin asind asinh cos cosd cosh acos acosd acosh tan tand tanh atan atand atan2 atanh sec secd sech asec asecd asech csc cscd csch acsc acscd acsch cot cotd coth acot acotd acoth hypot exp expm1 log log1p log10 log2 pow2 realpow reallog realsqrt sqrt nthroot nextpow2 abs angle complex conj imag real unwrap isreal cplxpair fix floor ceil round mod rem sign airy besselj bessely besselh besseli besselk beta betainc betaln ellipj ellipke erf erfc erfcx erfinv expint gamma gammainc gammaln psi legendre cross dot factor isprime primes gcd lcm rat rats perms nchoosek factorial cart2sph cart2pol pol2cart sph2cart hsv2rgb rgb2hsv zeros ones eye repmat rand randn linspace logspace freqspace meshgrid accumarray size length ndims numel disp isempty isequal isequalwithequalnans cat reshape diag blkdiag tril triu fliplr flipud flipdim rot90 find sub2ind ind2sub bsxfun ndgrid permute ipermute shiftdim circshift squeeze isscalar isvector ans eps realmax realmin pi i inf nan isnan isinf isfinite j why compan gallery hadamard hankel hilb invhilb magic pascal rosser toeplitz vander wilkinson max min nanmax nanmin mean nanmean type table readtable writetable sortrows sort figure plot plot3 scatter scatter3 cellfun legend intersect ismember procrustes hold num2cell "},i:'(//|"|#|/\\*|\\s+/\\w+)',c:[{cN:"function",bK:"function",e:"$",c:[e.UTM,{cN:"params",v:[{b:"\\(",e:"\\)"},{b:"\\[",e:"\\]"}]}]},{cN:"built_in",b:/true|false/,r:0,starts:s},{b:"[a-zA-Z][a-zA-Z_0-9]*"+a,r:0},{cN:"number",b:e.CNR,r:0,starts:s},{cN:"string",b:"'",e:"'",c:[e.BE,{b:"''"}]},{b:/\]|}|\)/,r:0,starts:s},{cN:"string",b:'"',e:'"',c:[e.BE,{b:'""'}],starts:s},e.C("^\\s*\\%\\{\\s*$","^\\s*\\%\\}\\s*$"),e.C("\\%","$")]}});hljs.registerLanguage("haskell",function(e){var i={v:[e.C("--","$"),e.C("{-","-}",{c:["self"]})]},a={cN:"meta",b:"{-#",e:"#-}"},l={cN:"meta",b:"^#",e:"$"},c={cN:"type",b:"\\b[A-Z][\\w']*",r:0},n={b:"\\(",e:"\\)",i:'"',c:[a,l,{cN:"type",b:"\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"},e.inherit(e.TM,{b:"[_a-z][\\w']*"}),i]};return{aliases:["hs"],k:"let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec",c:[{bK:"module",e:"where",k:"module where",c:[n,i],i:"\\W\\.|;"},{b:"\\bimport\\b",e:"$",k:"import qualified as hiding",c:[n,i],i:"\\W\\.|;"},{cN:"class",b:"^(\\s*)?(class|instance)\\b",e:"where",k:"class family instance where",c:[c,n,i]},{cN:"class",b:"\\b(data|(new)?type)\\b",e:"$",k:"data family type newtype deriving",c:[a,c,n,{b:"{",e:"}",c:n.c},i]},{bK:"default",e:"$",c:[c,n,i]},{bK:"infix infixl infixr",e:"$",c:[e.CNM,i]},{b:"\\bforeign\\b",e:"$",k:"foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe",c:[c,e.QSM,i]},{cN:"meta",b:"#!\\/usr\\/bin\\/env runhaskell",e:"$"},a,l,e.QSM,e.CNM,c,e.inherit(e.TM,{b:"^[_a-z][\\w']*"}),i,{b:"->|<-"}]}});hljs.registerLanguage("shell",function(s){return{aliases:["console"],c:[{cN:"meta",b:"^\\s{0,3}[\\w\\d\\[\\]()@-]*[>%$#]",starts:{e:"$",sL:"bash"}}]}});hljs.registerLanguage("lisp",function(b){var e="[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#!]*",c="\\|[^]*?\\|",r="(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|\\-)?\\d+)?",a={cN:"literal",b:"\\b(t{1}|nil)\\b"},l={cN:"number",v:[{b:r,r:0},{b:"#(b|B)[0-1]+(/[0-1]+)?"},{b:"#(o|O)[0-7]+(/[0-7]+)?"},{b:"#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?"},{b:"#(c|C)\\("+r+" +"+r,e:"\\)"}]},n=b.inherit(b.QSM,{i:null}),i=b.C(";","$",{r:0}),t={b:"\\*",e:"\\*"},s={cN:"symbol",b:"[:&]"+e},u={b:e,r:0},d={b:c},f={c:[l,n,t,s,{b:"\\(",e:"\\)",c:["self",a,n,l,u]},u],v:[{b:"['`]\\(",e:"\\)"},{b:"\\(quote ",e:"\\)",k:{name:"quote"}},{b:"'"+c}]},m={v:[{b:"'"+e},{b:"#'"+e+"(::"+e+")*"}]},o={b:"\\(\\s*",e:"\\)"},v={eW:!0,r:0};return o.c=[{cN:"name",v:[{b:e},{b:c}]},v],v.c=[f,m,o,a,l,n,i,t,s,d,u],{i:/\S/,c:[l,{cN:"meta",b:"^#!",e:"$"},a,n,i,f,m,o,u]}});hljs.registerLanguage("makefile",function(e){var i={cN:"variable",v:[{b:"\\$\\("+e.UIR+"\\)",c:[e.BE]},{b:/\$[@%<?\^\+\*]/}]},r={cN:"string",b:/"/,e:/"/,c:[e.BE,i]},a={cN:"variable",b:/\$\([\w-]+\s/,e:/\)/,k:{built_in:"subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"},c:[i]},n={b:"^"+e.UIR+"\\s*[:+?]?=",i:"\\n",rB:!0,c:[{b:"^"+e.UIR,e:"[:+?]?=",eE:!0}]},t={cN:"section",b:/^[^\s]+:/,e:/$/,c:[i]};return{aliases:["mk","mak"],k:"define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath",l:/[\w-]+/,c:[e.HCM,i,r,a,n,{cN:"meta",b:/^\.PHONY:/,e:/$/,k:{"meta-keyword":".PHONY"},l:/[\.\w]+/},t]}});hljs.registerLanguage("prolog",function(c){var b={b:/\(/,e:/\)/,r:0},r={b:/\[/,e:/\]/},e={cN:"comment",b:/%/,e:/$/,c:[c.PWM]},n={cN:"string",b:/`/,e:/`/,c:[c.BE]},a=[{b:/[a-z][A-Za-z0-9_]*/,r:0},{cN:"symbol",v:[{b:/[A-Z][a-zA-Z0-9_]*/},{b:/_[A-Za-z0-9_]*/}],r:0},b,{b:/:-/},r,e,c.CBCM,c.QSM,c.ASM,n,{cN:"string",b:/0\'(\\\'|.)/},{cN:"string",b:/0\'\\s/},c.CNM];return b.c=a,{c:(r.c=a).concat([{b:/\.$/}])}});hljs.registerLanguage("go",function(e){var t={keyword:"break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",literal:"true false iota nil",built_in:"append cap close complex copy imag len make new panic print println real recover delete"};return{aliases:["golang"],k:t,i:"</",c:[e.CLCM,e.CBCM,{cN:"string",v:[e.QSM,{b:"'",e:"[^\\\\]'"},{b:"`",e:"`"}]},{cN:"number",v:[{b:e.CNR+"[i]",r:1},e.CNM]},{b:/:=/},{cN:"function",bK:"func",e:/\s*\{/,eE:!0,c:[e.TM,{cN:"params",b:/\(/,e:/\)/,k:t,i:/["']/}]}]}});hljs.registerLanguage("cs",function(e){var i={keyword:"abstract as base bool break byte case catch char checked const continue decimal default delegate do double enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long nameof object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual void volatile while add alias ascending async await by descending dynamic equals from get global group into join let on orderby partial remove select set value var where yield",literal:"null false true"},r={cN:"number",v:[{b:"\\b(0b[01']+)"},{b:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{b:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],r:0},t={cN:"string",b:'@"',e:'"',c:[{b:'""'}]},a=e.inherit(t,{i:/\n/}),c={cN:"subst",b:"{",e:"}",k:i},n=e.inherit(c,{i:/\n/}),s={cN:"string",b:/\$"/,e:'"',i:/\n/,c:[{b:"{{"},{b:"}}"},e.BE,n]},b={cN:"string",b:/\$@"/,e:'"',c:[{b:"{{"},{b:"}}"},{b:'""'},c]},l=e.inherit(b,{i:/\n/,c:[{b:"{{"},{b:"}}"},{b:'""'},n]});c.c=[b,s,t,e.ASM,e.QSM,r,e.CBCM],n.c=[l,s,a,e.ASM,e.QSM,r,e.inherit(e.CBCM,{i:/\n/})];var o={v:[b,s,t,e.ASM,e.QSM]},d=e.IR+"(<"+e.IR+"(\\s*,\\s*"+e.IR+")*>)?(\\[\\])?";return{aliases:["csharp","c#"],k:i,i:/::/,c:[e.C("///","$",{rB:!0,c:[{cN:"doctag",v:[{b:"///",r:0},{b:"\x3c!--|--\x3e"},{b:"</?",e:">"}]}]}),e.CLCM,e.CBCM,{cN:"meta",b:"#",e:"$",k:{"meta-keyword":"if else elif endif define undef warning error line region endregion pragma checksum"}},o,r,{bK:"class interface",e:/[{;=]/,i:/[^\s:,]/,c:[e.TM,e.CLCM,e.CBCM]},{bK:"namespace",e:/[{;=]/,i:/[^\s:]/,c:[e.inherit(e.TM,{b:"[a-zA-Z](\\.?\\w)*"}),e.CLCM,e.CBCM]},{cN:"meta",b:"^\\s*\\[",eB:!0,e:"\\]",eE:!0,c:[{cN:"meta-string",b:/"/,e:/"/}]},{bK:"new return throw await else",r:0},{cN:"function",b:"("+d+"\\s+)+"+e.IR+"\\s*\\(",rB:!0,e:/\s*[{;=]/,eE:!0,k:i,c:[{b:e.IR+"\\s*\\(",rB:!0,c:[e.TM],r:0},{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,k:i,r:0,c:[o,r,e.CBCM]},e.CLCM,e.CBCM]}]}});hljs.registerLanguage("scala",function(e){var t={cN:"subst",v:[{b:"\\$[A-Za-z0-9_]+"},{b:"\\${",e:"}"}]},a={cN:"string",v:[{b:'"',e:'"',i:"\\n",c:[e.BE]},{b:'"""',e:'"""',r:10},{b:'[a-z]+"',e:'"',i:"\\n",c:[e.BE,t]},{cN:"string",b:'[a-z]+"""',e:'"""',c:[t],r:10}]},r={cN:"type",b:"\\b[A-Z][A-Za-z0-9_]*",r:0},c={cN:"title",b:/[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,r:0},i={cN:"class",bK:"class object trait type",e:/[:={\[\n;]/,eE:!0,c:[{bK:"extends with",r:10},{b:/\[/,e:/\]/,eB:!0,eE:!0,r:0,c:[r]},{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,r:0,c:[r]},c]},s={cN:"function",bK:"def",e:/[:={\[(\n;]/,eE:!0,c:[c]};return{k:{literal:"true false null",keyword:"type yield lazy override def with val var sealed abstract private trait object if forSome for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit"},c:[e.CLCM,e.CBCM,a,{cN:"symbol",b:"'\\w[\\w\\d_]*(?!')"},r,s,i,e.CNM,{cN:"meta",b:"@[A-Za-z]+"}]}});hljs.registerLanguage("http",function(e){var t="HTTP/[0-9\\.]+";return{aliases:["https"],i:"\\S",c:[{b:"^"+t,e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{b:"^[A-Z]+ (.*?) "+t+"$",rB:!0,e:"$",c:[{cN:"string",b:" ",e:" ",eB:!0,eE:!0},{b:t},{cN:"keyword",b:"[A-Z]+"}]},{cN:"attribute",b:"^\\w",e:": ",eE:!0,i:"\\n|\\s|=",starts:{e:"$",r:0}},{b:"\\n\\n",starts:{sL:[],eW:!0}}]}});




// Mikumark V3.0
// Markdown Parser
// 2019.10 Refactored in TypeScript
// Arch:
// MD → [Parser] → MarkdownDocument object(HTML included) → [Painter] → Web page
// Document:
/*
#!title: 标题
#!authors: 作者1, 作者2, ...
#!date: 2019-10-11
#!cover: 封面图片链接
#!type: 类型
#!tags: 标签1, 标签2, ...
#!{macro1}: 单行Markdown脚本
#!content
此处为正文
#!base64
此处为base64编码的正文（目的是防止搜索引擎抓取。注意：如果文档中出现了这一节，则不会解析content。其他字段正常解析。）
#!style
此处为CSS
#!script: 外部脚本路径
#!script
此处为JS代码
#!metadata
此处为元数据（JSON）
*/
var Mikumark = /** @class */ (function () {
    function Mikumark(doc) {
        this.title = "";
        this.authors = new Array();
        this.date = "2016-11-24";
        this.cover = "";
        this.type = "";
        this.tags = new Array();
        this.outline = new Array();
        this.linkedScripts = new Array();
        this.linkedStyles = new Array();
        this.macros = new Map();
        this.titleCount = 0;
        this.Parse(doc);
        // console.log("Mikumark.js Markdown Parser V3.4");
        // console.log(this);
    }
    // 元字符转义
    Mikumark.EscapeMetachar = function (str) {
        return str
            .replace(/\\\*/g, Mikumark.C_STAR).replace(/\\\~/g, Mikumark.C_WAVE).replace(/\\\`/g, Mikumark.C_REVQ)
            .replace(/\\\[/g, Mikumark.C_LSQB).replace(/\\\]/g, Mikumark.C_RSQB).replace(/\\\(/g, Mikumark.C_LRDB)
            .replace(/\\\)/g, Mikumark.C_RRDB).replace(/\\\$/g, Mikumark.C_DOLR).replace(/\\\|/g, Mikumark.C_VERT)
            .replace(/\\\+/g, Mikumark.C_PLUS).replace(/\\\\/g, Mikumark.C_BSLT).replace(/\\\#/g, Mikumark.C_SHRP)
            .replace(/\\\-/g, Mikumark.C_MNUS).replace(/\\\&/g, Mikumark.C_AMPS).replace(/\\\%/g, Mikumark.C_PCNT);
    };
    // 元字符覆盖
    Mikumark.CoverMetachar = function (str) {
        return str
            .replace(/\*/g, Mikumark.C_STAR).replace(/\~/g, Mikumark.C_WAVE).replace(/\`/g, Mikumark.C_REVQ)
            .replace(/\[/g, Mikumark.C_LSQB).replace(/\]/g, Mikumark.C_RSQB).replace(/\(/g, Mikumark.C_LRDB)
            .replace(/\)/g, Mikumark.C_RRDB).replace(/\$/g, Mikumark.C_DOLR).replace(/\|/g, Mikumark.C_VERT)
            .replace(/\+/g, Mikumark.C_PLUS).replace(/\\/g, Mikumark.C_BSLT).replace(/\#/g, Mikumark.C_SHRP)
            .replace(/\-/g, Mikumark.C_MNUS).replace(/\&/g, Mikumark.C_AMPS).replace(/\%/g, Mikumark.C_PCNT);
    };
    // 元字符换回
    Mikumark.RecoverMetachar = function (str) {
        return str
            .replace(new RegExp(Mikumark.C_STAR, 'g'), '*').replace(new RegExp(Mikumark.C_WAVE, 'g'), '~').replace(new RegExp(Mikumark.C_REVQ, 'g'), '`')
            .replace(new RegExp(Mikumark.C_LSQB, 'g'), '[').replace(new RegExp(Mikumark.C_RSQB, 'g'), ']').replace(new RegExp(Mikumark.C_LRDB, 'g'), '(')
            .replace(new RegExp(Mikumark.C_RRDB, 'g'), ')').replace(new RegExp(Mikumark.C_DOLR, 'g'), '$').replace(new RegExp(Mikumark.C_VERT, 'g'), '|')
            .replace(new RegExp(Mikumark.C_PLUS, 'g'), '+').replace(new RegExp(Mikumark.C_BSLT, 'g'), '\\').replace(new RegExp(Mikumark.C_SHRP, 'g'), '#')
            .replace(new RegExp(Mikumark.C_MNUS, 'g'), '-').replace(new RegExp(Mikumark.C_AMPS, 'g'), '&').replace(new RegExp(Mikumark.C_PCNT, 'g'), '%');
    };
    // 覆盖HTML元字符
    Mikumark.CoverHTMLchar = function (str) {
        return str.replace(/>/gi, "&gt;").replace(/</gi, "&lt;").replace(/&/gi, "&amp;");
    };
    // 换回HTML元字符
    Mikumark.RecoverHTMLchar = function (str) {
        return str.replace(/&gt;/gi, ">").replace(/&lt;/gi, "<").replace(/&amp;/gi, "&");
    };
    // 处理宏展开（注意：不会递归展开，每个宏只被展开一次）
    Mikumark.prototype.ExpandMacros = function (str) {
        for (var macro in this.macros) {
            str = str.replace(new RegExp(macro, "g"), this.macros[macro]);
        }
        return str;
    };
    // 段内样式解析
    Mikumark.prototype.ParseInnerPara = function (md) {
        var RegexInlineCode = /\`(.+?)\`/g;
        var RegexTag = /\#\((.+?)\)\#/g;
        var RegexBold = /\*\*(.+?)\*\*/g;
        var RegexItalic = /%%(.+?)%%/g;
        var RegexDeleted = /~(.+?)~/g;
        var RegexColor = /\[\[(#?[a-zA-Z0-9]+?)\:(.+?)#\]\]/g;
        var RegexSelfLink = /\[(.+?)\]\(\)/g;
        var RegexLink = /\[(.+?)\]\((.+?)\)/g;
        // 首先处理换行
        var HTML = md.replace(/[\n\r]/g, "<br/>");
        // 宏展开
        HTML = this.ExpandMacros(HTML);
        // 行内代码：需要特殊处理，其内的所有元字符都应被转义，防止解析成HTML标签。（不会处理已屏蔽的元字符）
        var inlineCodeSegments = RegexInlineCode.exec(HTML);
        while (inlineCodeSegments !== null) {
            var rhs = inlineCodeSegments[1];
            HTML = HTML.replace(inlineCodeSegments[0], "<code class=\"MikumarkCode\"><script type=\"text/html\" style=\"display: inline;\">" + rhs + "</script></code>");
            // HTML = HTML.replace(inlineCodeSegments[0],
            //     `<code class="MikumarkCode">${Mikumark.CoverHTMLchar(Mikumark.CoverMetachar(inlineCodeSegments[1]))}</code>`);
            inlineCodeSegments = RegexInlineCode.exec(HTML);
        }
        // TODO 处理标签
        HTML = Mikumark.EscapeMetachar(HTML);
        HTML = HTML.replace(RegexTag, "<span class=\"MikumarkTag\">$1</span>")
            .replace(RegexBold, "<b>$1</b>")
            .replace(RegexItalic, "<i>$1</i>")
            .replace(RegexDeleted, "<del>$1</del>")
            .replace(RegexColor, "<span style=\"color:$1;\">$2</span>")
            .replace(RegexSelfLink, "<a target=\"_blank\" href=\"$1\">$1</a>")
            .replace(RegexLink, "<a target=\"_blank\" href=\"$2\">$1</a>");
        // return Mikumark.RecoverHTMLchar(Mikumark.RecoverMetachar(HTML));
        return Mikumark.RecoverMetachar(HTML);
    };
    // 段落级样式解析
    Mikumark.prototype.ParsePara = function (md) {
        if (md.length <= 0)
            return "";
        var HtmlBuffer = new Array();
        md = md.trim();
        // 标题
        if (/^#+?(?![\!\(]).+/g.test(md) === true) {
            var level = (md.match(/^#+(?=[^#])/i)[0]).length;
            var title = md.replace(/^#+/g, "").trim();
            title = this.ExpandMacros(title);
            HtmlBuffer.push("<h" + level + " id=\"Title_" + this.titleCount + "\">" + title + "</h" + level + ">");
            // 目录
            this.outline[this.titleCount] = {
                level: level,
                title: title
            };
            this.titleCount++;
        }
        // 分割线（至少3个连续dash的单行段落）
        else if (/^\-{3,}$/g.test(md) === true) {
            HtmlBuffer.push("<hr/>");
        }
        // 有序列表（+号开头的段落）
        else if (/^\++[\s\S]+/g.test(md) === true) {
            // 按行分割列表项
            var lines = md.split("\n");
            // 层级计数器
            var currentLevel = 0;
            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                // 计算+号数量（列表层级）
                var prefix = line.match(/^\++(?=[^\+])/i);
                if (prefix == null) {
                    HtmlBuffer.push(md);
                    break;
                }
                var level = prefix[0].length;
                // 列表文本
                var item = line.replace(/^\++/g, "").trim();
                // 判断层级是否改变
                if (level > currentLevel) { // 嵌套加深
                    for (var c = 0; c < (level - currentLevel); c++) {
                        HtmlBuffer.push("<ol>");
                    }
                    HtmlBuffer.push("<li>");
                    HtmlBuffer.push(this.ParseInnerPara(item));
                    currentLevel = level;
                }
                else if (level < currentLevel) { // 嵌套退出
                    for (var c = 0; c < (currentLevel - level); c++) {
                        HtmlBuffer.push("</li></ol>");
                    }
                    HtmlBuffer.push("</li><li>");
                    HtmlBuffer.push(this.ParseInnerPara(item));
                    currentLevel = level;
                }
                else { // 保持同级
                    HtmlBuffer.push("</li><li>");
                    HtmlBuffer.push(this.ParseInnerPara(item));
                    currentLevel = level;
                }
            }
            // 闭合列表标签
            for (var c = 0; c < currentLevel; c++) {
                HtmlBuffer.push("</li></ol>");
            }
        }
        // 无序列表（-号开头的段落）
        else if (/^\-+[\s\S]+/g.test(md) === true) {
            // 按行分割列表项
            var lines = md.split("\n");
            // 层级计数器
            var currentLevel = 0;
            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                // 计算-号数量（列表层级）
                var prefix = line.match(/^\-+(?=[^\-])/i);
                if (prefix == null) {
                    HtmlBuffer.push(md);
                    break;
                }
                var level = prefix[0].length;
                // 列表文本
                var item = line.replace(/^\-+/g, "").trim();
                // 判断层级是否改变
                if (level > currentLevel) { // 嵌套加深
                    for (var c = 0; c < (level - currentLevel); c++) {
                        HtmlBuffer.push("<ul>");
                    }
                    HtmlBuffer.push("<li>");
                    HtmlBuffer.push(this.ParseInnerPara(item));
                    currentLevel = level;
                }
                else if (level < currentLevel) { // 嵌套退出
                    for (var c = 0; c < (currentLevel - level); c++) {
                        HtmlBuffer.push("</li></ul>");
                    }
                    HtmlBuffer.push("</li><li>");
                    HtmlBuffer.push(this.ParseInnerPara(item));
                    currentLevel = level;
                }
                else { // 保持同级
                    HtmlBuffer.push("</li><li>");
                    HtmlBuffer.push(this.ParseInnerPara(item));
                    currentLevel = level;
                }
            }
            // 闭合列表标签
            for (var c = 0; c < currentLevel; c++) {
                HtmlBuffer.push("</li></ul>");
            }
        }
        // 表格
        else if (/^\|[\s\S]+\|$/g.test(md) === true) {
            // 按行分割
            var rows = md.split("\n");
            // 分割线标识
            var hasHeadline = false;
            // 对齐方式：下标为列序号（从1开始）
            var alignType = new Array();
            HtmlBuffer.push('<div class="MikumarkTableContainer"><table>');
            for (var i = 0; i < rows.length; i++) {
                var row = rows[i];
                var cols = row.split("|");
                if (cols.length <= 2) {
                    console.log("Syntax error.");
                    return;
                }
                if (cols.length == 3 && /\-{3,}/i.test(cols[1]) == true) {
                    hasHeadline = true;
                }
                else {
                    HtmlBuffer.push('<tr>');
                    if (hasHeadline == true) { // TD表格主体
                        for (var c = 1; c < cols.length - 1; c++) {
                            HtmlBuffer.push("<td" + (alignType[c] ? alignType[c] : '') + ">" + this.ParseInnerPara(cols[c]) + "</td>");
                        }
                    }
                    else { // TH表头
                        for (var c = 1; c < cols.length - 1; c++) {
                            // 记录对齐方式
                            if (/^\:.*\:$/gi.test(cols[c])) {
                                alignType[c] = " style=\"text-align:center;\"";
                            }
                            else if (/\:$/gi.test(cols[c])) {
                                alignType[c] = " style=\"text-align:right;\"";
                            }
                            else if (/^\:/gi.test(cols[c])) {
                                alignType[c] = " style=\"text-align:left;\"";
                            }
                            else {
                                alignType[c] = '';
                            }
                            cols[c] = cols[c].replace(/\:$/gi, '').replace(/^\:/gi, '');
                            HtmlBuffer.push("<th" + (alignType[c] ? alignType[c] : '') + ">" + this.ParseInnerPara(cols[c]) + "</th>");
                        }
                    }
                    HtmlBuffer.push('</tr>');
                }
            }
            HtmlBuffer.push('</table></div>');
        }
        // 图片
        else if (/^\!\[.+?\]\(.+?\)$/g.test(md) === true) {
            var imgTitle = md.match(/^\!\[.+\]\(/g)[0];
            imgTitle = imgTitle.substring(2, imgTitle.length - 2);
            var imgURL = md.match(/\]\([^(\]\()]+\)$/g)[0];
            imgURL = imgURL.substring(2, imgURL.length - 1);
            imgURL = this.ExpandMacros(imgURL);
            HtmlBuffer.push("<div class=\"MikumarkImageContainer\">\n            <div class=\"loading\">\n                <div class=\"dot\"></div><div class=\"dot\"></div><div class=\"dot\"></div><div class=\"dot\"></div><div class=\"dot\"></div>\n            </div>\n            <img class=\"MikumarkImage\" data-src=\"" + imgURL + "\"><div class=\"MikumarkImageTitle\">" + this.ParseInnerPara(imgTitle) + "</div></div>");
        }
        // 居中的段落
        else if (/^\:.+/g.test(md) === true) {
            var content = md.substring(1).trim(); // 截取:号后面的内容
            HtmlBuffer.push("<p style=\"text-align:center;\">" + this.ParseInnerPara(content) + "</p>");
        }
        // LaTeX公式段落
        else if (/^\$\$.+?\$\$$/g.test(md) === true) {
            HtmlBuffer.push("<p>" + md + "</p>");
        }
        // 单个HTML元素，直接原样返回
        else if (/^<.+?[\s\S]*>$/g.test(md) === true) {
            HtmlBuffer.push(md);
        }
        // 普通段落
        else {
            HtmlBuffer.push("<p>" + this.ParseInnerPara(md) + "</p>");
        }
        return HtmlBuffer.join("");
    };
    // 跨段落样式解析
    Mikumark.prototype.ParseInterPara = function (md) {
        var HtmlBuffer = new Array();
        // 首先处理代码块
        var codeBlocks = new Array();
        var mdBuffer = new Array();
        var codeIndex = 0;
        var codeLanguage = "";
        var codeBlockBuffer = new Array();
        var lines = md.split("\n");
        var isInCodeBlock = false;
        var codeBlockQuoteLevel = 0;
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (/^(>*)\s*```/g.test(line) === true) { // 支持在块引用中的代码块
                // 进入代码块
                if (isInCodeBlock === false) {
                    codeBlockQuoteLevel = (line.match(/^>*(?=[^>])/i)[0]).length;
                    codeLanguage = line.replace(/^(>*)\s*```:?/gi, "").toLowerCase();
                    isInCodeBlock = true;
                }
                // 退出代码块
                else {
                    isInCodeBlock = false;
                    mdBuffer.push(">>>>>>>>>>>>>>>>>>>".substring(0, codeBlockQuoteLevel) + "```" + codeIndex);
                    codeBlocks[codeIndex] = {
                        language: codeLanguage,
                        code: Mikumark.CoverHTMLchar(codeBlockBuffer.join(""))
                    };
                    codeIndex++;
                    codeLanguage = "";
                    codeBlockBuffer = new Array();
                    codeBlockQuoteLevel = 0;
                }
            }
            else {
                // 处于代码块内部
                if (isInCodeBlock === true) {
                    codeBlockBuffer.push(line + "\n");
                }
                else {
                    mdBuffer.push(line);
                }
            }
        }
        md = mdBuffer.join("\n"); // 重新组合起来
        // 自然段落分隔
        var paragraphs = md.split(/\n{2,}/g);
        // 遍历各个段落，判断段落类型
        // 引用块计数
        var quoteFlag = false;
        var quoteLevel = 0;
        for (var pcount = 0; pcount < paragraphs.length; pcount++) {
            var paragraph = paragraphs[pcount];
            // 引用框？
            if (/^>.+/g.test(paragraph) === true) {
                quoteFlag = true;
                // >号数量（引用层级）
                var level = (paragraph.match(/^>+(?=[^>])/i)[0]).length;
                // 引用文本
                var quote = paragraph.replace(/^>+/, "").trim();
                // 判断层级是否改变
                if (level > quoteLevel) { // 嵌套加深
                    for (var c = 0; c < (level - quoteLevel); c++) {
                        HtmlBuffer.push("<blockquote>");
                    }
                }
                else if (level < quoteLevel) { // 嵌套退出
                    for (var c = 0; c < (quoteLevel - level); c++) {
                        HtmlBuffer.push("</blockquote>");
                    }
                }
                else { } // 保持同级，不加标签
                // 处理代码块
                if (/^(>*)\s*```\d+/g.test(quote) === true) {
                    HtmlBuffer.push(quote);
                }
                else {
                    HtmlBuffer.push(this.ParsePara(quote));
                }
                quoteLevel = level;
            }
            // 无前缀的段落
            else {
                // 闭合引用标签，并退出引用状态
                if (quoteFlag == true) {
                    for (var c = 0; c < quoteLevel; c++) {
                        HtmlBuffer.push("</blockquote>");
                    }
                    quoteLevel = 0;
                }
                quoteFlag = false;
                if (/^```\d+/g.test(paragraph) === true) {
                    HtmlBuffer.push(paragraph);
                }
                else {
                    HtmlBuffer.push(this.ParsePara(paragraph));
                }
            }
        }
        // 代码写回并高亮
        for (var i = 0; i < HtmlBuffer.length; i++) {
            var para = HtmlBuffer[i];
            if (/^(>*)\s*```/g.test(para) === true) {
                var index = parseInt(para.trim().replace(/^(>*)\s*```/g, ""));
                var codeBlock = codeBlocks[index];
                var code = Mikumark.RecoverMetachar(Mikumark.RecoverHTMLchar(codeBlock.code));
                HtmlBuffer[i] = "<pre><code>" + code + "</code></pre>";
            }
        }
        return HtmlBuffer.join("");
    };
    // 文档结构解析
    Mikumark.prototype.Parse = function (doc) {
        var contentBuffer = new Array();
        var styleBuffer = new Array();
        var scriptBuffer = new Array();
        var metadataBuffer = new Array();
        var base64Buffer = new Array();
        var state = "content"; // content | style | script | metadata | base64
        var lines = doc.split("\n");
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (/^#!title:/g.test(line) === true) {
                var title = line.replace(/^#!title:/g, "").trim();
                this.title = title;
            }
            else if (/^#!date:/g.test(line) === true) {
                var date = line.replace(/^#!date:/g, "").trim();
                this.date = date;
            }
            else if (/^#!cover:/g.test(line) === true) {
                var cover = line.replace(/^#!cover:/g, "").trim();
                this.cover = cover;
            }
            else if (/^#!type:/g.test(line) === true) {
                var type = line.replace(/^#!type:/g, "").trim();
                this.type = type;
            }
            else if (/^#!authors:/g.test(line) === true) {
                var authors = line.replace(/^#!authors:/g, "").trim().split(",").map(function (e) { return e.trim(); });
                this.authors = authors;
            }
            else if (/^#!tags:/g.test(line) === true) {
                var tags = line.replace(/^#!tags:/g, "").trim().split(",").map(function (e) { return e.trim(); });
                this.tags = tags;
            }
            // 宏定义
            else if (/^#!{(.+?)}:/g.test(line) === true) {
                var macroContent = line.replace(/^#!{(.+?)}:/g, "").trim();
                var macroName = line.split(":")[0].replace(/^#!/g, ""); // 包括大括号
                this.macros[macroName] = macroContent;
            }
            // 外部CSS
            else if (/^#!style:/g.test(line) === true) {
                var cssPath = line.replace(/^#!style:/g, "").trim();
                this.linkedStyles.push(cssPath);
            }
            // 外部脚本
            else if (/^#!script:/g.test(line) === true) {
                var scriptPath = line.replace(/^#!script:/g, "").trim();
                this.linkedScripts.push(scriptPath);
            }
            else if (/^#!base64$/.test(line) === true) {
                state = "base64";
            }
            else if (/^#!content$/.test(line) === true) {
                state = "content";
            }
            else if (/^#!style$/.test(line) === true) {
                state = "style";
            }
            else if (/^#!script$/.test(line) === true) {
                state = "script";
            }
            else if (/^#!metadata$/.test(line) === true) {
                state = "metadata";
            }
            else {
                if (state === "content") {
                    contentBuffer.push(line);
                }
                else if (state === "style") {
                    styleBuffer.push(line);
                }
                else if (state === "script") {
                    scriptBuffer.push(line);
                }
                else if (state === "metadata") {
                    metadataBuffer.push(line);
                }
                else if (state === "base64") {
                    base64Buffer.push(line);
                }
            }
        }
        // Base64解码
        try {
            var base64content = DecodeB64(base64Buffer.join(""));
            if (base64content.length > 0) {
                // let key = EncodeB64(prompt('请输入口令'));
                // if(key !== 'IA==') { // 半角空格{
                //     alert('口令不匹配，返回上一页。');
                //     window.history.go(-1);
                //     return;
                // }
                this.content = base64content;
            }
            else {
                this.content = contentBuffer.join("\n");
            }
        }
        catch (e) {
            console.error("Base64编码字段并非base64编码，跳过。");
            this.content = contentBuffer.join("\n");
            ;
        }
        this.style = styleBuffer.join("\n");
        this.script = scriptBuffer.join("\n");
        try {
            this.metadata = JSON.parse(metadataBuffer.join("\n"));
        }
        catch (e) { }
        this.HTML = this.ParseInterPara(this.content);
    };
    // 元字符常量
    Mikumark.C_STAR = '@STAR@'; // *
    Mikumark.C_WAVE = "@WAVE@"; // ~
    Mikumark.C_REVQ = "@REVQ@"; // `
    Mikumark.C_LSQB = "@LSQB@"; // [
    Mikumark.C_RSQB = "@RSQB@"; // ]
    Mikumark.C_LRDB = "@LRDB@"; // (
    Mikumark.C_RRDB = "@RRDB@"; // )
    Mikumark.C_DOLR = "@DOLR@"; // $
    Mikumark.C_VERT = "@VERT@"; // |
    Mikumark.C_PLUS = "@PLUS@"; // +
    Mikumark.C_MNUS = "@MNUS@"; // -
    Mikumark.C_BSLT = "@BSLT@"; // \
    Mikumark.C_SHRP = "@SHRP@"; // #
    Mikumark.C_AMPS = "@AMPS@"; // &
    Mikumark.C_PCNT = "@PCNT@"; // %
    return Mikumark;
}());
// base64编码
function EncodeB64(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
}
// base64解码
function DecodeB64(str) {
    return decodeURIComponent(escape(window.atob(str)));
}





// 根据文章ID载入文章并完成渲染工作
function LoadArticle(PageID, ArticleID) {

    ///////////////////////////////////////////////////////
    //  Scroll 触 发 事 件
    ///////////////////////////////////////////////////////

    // 图片懒加载
    function ImageLazyLoading() {
        let top = document.documentElement.scrollTop || document.body.scrollTop;
        let clientHeight = document.documentElement.clientHeight;
        $('.MikumarkImage').each(function(i,e) {
            let offsetTop = $(e).offset().top;
            if($(e).attr('src') === undefined) {
                if(offsetTop >= top && offsetTop <= top + clientHeight) {
                    console.log(`[Iroha-SPA] 图片懒加载：${$(e).attr('data-src')}`);
                    $(e).attr('src', $(e).attr('data-src'));
                    e.onload = ()=>{
                        $(e).parent().children('.loading').fadeOut(500);
                    };
                }
            }
        });
    }

    // 追踪当前标题
    function TraceCurrentTitle() {
        // 遍历所有Title，根据当前滚动位置，计算当前所在的章节标题
        function GetVisibleTitle() {
            let titleDOMs = $("h1,h2,h3,h4");
            let currentTop = window.pageYOffset + 42;
            for(let i = 0; i < titleDOMs.length - 1; i++) {
                let currentTitleTop = window.pageYOffset + titleDOMs[i].getBoundingClientRect().top;
                let nextTitleTop = window.pageYOffset + titleDOMs[i+1].getBoundingClientRect().top;
                if(currentTop > currentTitleTop && currentTop < nextTitleTop) {
                    return titleDOMs[i].id;
                }
            }
            return "ContentsItem_0";
        }
        let visibleTitleId = GetVisibleTitle().split("_")[1];;
        $(`.ContentsItem`).removeClass("ContentsItemActive");
        $(`#ContentsItem_${visibleTitleId}`).addClass("ContentsItemActive");
    }

    // 仅移动端：控制StickyTitle和GoTop按钮的显示
    function ShowTopTitleOnThreshold() {
        let top = document.documentElement.scrollTop || document.body.scrollTop;
        if(GetMediaType() === "Desktop") {
            $('.StickyTitleContainer').hide();
            $('#GoTopButton').show();
        }
        else if(GetMediaType() === "Mobile") {
            $('#GoTopButton').hide();
            if(top > 280) {
                $('.StickyTitleContainer').fadeIn(300);
            }
            else {
                $('.StickyTitleContainer').fadeOut(300);
            }
        }
    }

    ///////////////////////////////////////////////////////
    //  Resize 触 发 事 件
    ///////////////////////////////////////////////////////


    ///////////////////////////////////////////////////////
    //  其 他 触 发 事 件
    ///////////////////////////////////////////////////////


    ///////////////////////////////////////////////////////
    //  文 章 渲 染 前 后 执 行 的 操 作
    ///////////////////////////////////////////////////////

    // 在文章渲染之前执行的操作
    function BeforeRendering() {
        ShowTopTitleOnThreshold(); // 设置顶部标题栏状态

        // 删除所有已有的MikumarkScript和MikumarkStyle节点
        $(".MikumarkScript").remove();
        $(".MikumarkStyle").remove();

        ActionsOnResize();
        ActionsOnScroll();
    }

    // 在文章渲染完成之后执行的操作
    // 由Article节点的监听器调用
    function AfterRendering() {
        // 为每张图片注册单击事件
        $('.MikumarkImage').each(function(i,e) {
            $(e).click(function() {
                window.open($(e).attr('src'), "_blank");
            });
        });

        window.onresize = () => {
            ActionsOnResize();
        };

        window.onscroll = () => {
            if(IS_SCROLLING !== true) { // 见IS_SCROLLING定义处注释
                ImageLazyLoading();
                TraceCurrentTitle();
            }
            ShowTopTitleOnThreshold();
            ActionsOnScroll();
        };

        // 关闭所有已经打开的目录菜单
        MenuToggle("off");

        // MathJax刷新
        MathJax.Hub.Configured();
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

        // 各触发一次以刷新布局
        $(window).scroll();
        // $(window).resize(); // TODO 存在 ArrangeSideButtonLayout 在直接访问文章页的情况下无效的情况
    }

    ///////////////////////////////////////////////////////
    //  文 章 和 目 录 渲 染
    ///////////////////////////////////////////////////////

    // 渲染文章正文
    function Render(mikumark) {
        // 标题
        document.getElementsByTagName("title")[0].innerHTML = `${mikumark.title} / BD4SUR 业余无线电台`;
        $('#StickyTitle').html(mikumark.title);
        $('#MikumarkArticleTitle').html(mikumark.title);

        // 日期
        $('#MikumarkMetadataDate').html(mikumark.date.replace(/\-/,"年").replace(/\-/,"月") + '日');

        // 作者
        $('#MikumarkMetadataAuthors').html(`作者：${mikumark.authors}`);

        // 文章正文
        $("#MikumarkContainer").html(mikumark.HTML);


        // 脚本节点
        for(let scriptSrc of mikumark.linkedScripts) {
            let scriptNode = document.createElement("script");
            scriptNode.src = scriptSrc;
            scriptNode.setAttribute("class", "MikumarkScript");
            scriptNode.async = "async";
            $('head').append(scriptNode);
        }

        let scriptNode = document.createElement("script");
        scriptNode.innerHTML = mikumark.script;
        scriptNode.setAttribute("class", "MikumarkScript");
        scriptNode.defer = "defer";
        $('body').append(scriptNode);

        // 样式节点
        let styleNode = document.createElement("style");
        styleNode.setAttribute("class", "MikumarkStyle");
        styleNode.innerHTML = mikumark.style;
        $('head').append(styleNode);

        for(let styleSrc of mikumark.linkedStyles) {
            let linkStyleNode = document.createElement("link");
            linkStyleNode.setAttribute("rel", "stylesheet");
            linkStyleNode.setAttribute("type", "text/css");
            linkStyleNode.setAttribute("charset", "utf-8");
            linkStyleNode.setAttribute("href", styleSrc);
            linkStyleNode.setAttribute("class", "MikumarkStyle");
            $('head').append(linkStyleNode);
        }

        // 绘制目录
        RenderTOC(mikumark);

        // 使用highlight.js处理代码高亮
        document.querySelectorAll('pre code').forEach((block) => { hljs.highlightBlock(block); });

    }

    // 渲染文章目录，并为每个按钮注册点击跳转事件
    function RenderTOC(mikumark) {
        let outline = mikumark.outline;
        let HtmlBuffer = new Array();
        HtmlBuffer.push(`<ul class="ContentsList">`);

        // 保证标签匹配的栈
        let stack = new Array();
        stack.push('{'); // 已经有一个ul了

        for(let i = 0; i < outline.length; i++) {
            let thisLevel = outline[i].level + 1;
            let nextLevel = (outline[i+1] === undefined) ? 2 : (outline[i+1].level + 1)
            let thisTitle = outline[i].title;
            // 缩进
            if(thisLevel < nextLevel) {
                HtmlBuffer.push(`<li><span data-title-id="${i}" id="ContentsItem_${i}" class="ContentsItem">${thisTitle}</span>`);
                stack.push('(');
                for(let c = 0; c < nextLevel - thisLevel; c++) {
                    HtmlBuffer.push(`<ul class="ContentsListItem">`);
                    stack.push('{');
                }
            }
            // 退出缩进
            else if(thisLevel > nextLevel) {
                HtmlBuffer.push(`<li><span data-title-id="${i}" id="ContentsItem_${i}" class="ContentsItem">${thisTitle}</span>`);
                stack.push('(');
                let count = thisLevel - nextLevel;
                while(count >= 0) {
                    if(stack[stack.length-1] === '(') {
                        stack.pop();
                        HtmlBuffer.push(`</li>`);
                    }
                    else if(stack[stack.length-1] === '{') {
                        if(count > 0) {
                            stack.pop();
                            HtmlBuffer.push(`</ul>`);
                        }
                        count--;
                    }
                }
            }
            // 平级
            else {
                HtmlBuffer.push(`<li><span data-title-id="${i}" id="ContentsItem_${i}" class="ContentsItem">${thisTitle}</span></li>`);
            }
        }
        HtmlBuffer.push('</ul>');

        $("#ContentsContainer").html(HtmlBuffer.join(""));

        // 注册目录标题的点击跳转事件
        // 跳转到某个标题
        function TurnTo(titleID) {
            let targetTop = window.pageYOffset + $(`#Title_${titleID}`)[0].getBoundingClientRect().top;
            $('html, body').animate({ scrollTop: targetTop-40 }, 200, 'easeOutExpo', () => {
                IS_SCROLLING = false;
                $(window).scroll(); // 保证触发目录刷新
            }); // 照顾顶部sticky导航栏的40px高度
        }
        $(".ContentsItem").each((i, e) => {
            $(e).click((event) => {
                let posterId = $(e).attr("data-title-id");
                IS_SCROLLING = true;
                TurnTo(posterId);
                MenuToggle();
                event.stopPropagation(); // 阻止冒泡
            });
        });
    }


    ///////////////////////////////////////////////////////
    //  函 数 主 体 部 分
    ///////////////////////////////////////////////////////

    // 监听Article变动，处理渲染后动作
    let ARTICLE_OBSERVER = new MutationObserver((mutations, observer) => {
        clearTimeout(OBSERVER_THROTTLE_TIMER);
        OBSERVER_THROTTLE_TIMER = setTimeout(() => {
            console.log(`[Iroha-SPA] 监听器：框架Article节点已更新`);
            AfterRendering();
        }, 100); // 100ms节流
    });
    ARTICLE_OBSERVER.observe(document.getElementsByTagName('Article')[0], {characterData: true, childList: true, subtree: true});


    BeforeRendering();
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `./markdown/${PageID}/${ArticleID}.md`);
    xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            let text = xhr.responseText;
            // 进度条读满
            $("#Progressbar").animate({width: `100%`});
            $("#Progressbar").fadeOut();

            // Markdown解析并渲染
            let mikumark = new Mikumark(text);
            console.log(`[Iroha-SPA] Mikumark：文档解析完毕`);
            Render(mikumark);
        }
        else if(xhr.readyState === XMLHttpRequest.DONE && xhr.status !== 200){
            $("#Progressbar").animate({width: `100%`});
            $("#Progressbar").fadeOut();
            alert(`文章载入失败。HTTP状态：${xhr.status} ${xhr.statusText}`);
            return;
        }
    };
    xhr.onprogress = (event) => {
        const MAX_ARTICLE_LENGTH = 64000; // 最大的文章字节数，用于近似计算加载进度
        let percentage = parseInt((event.loaded / MAX_ARTICLE_LENGTH) * 100);
        $("#Progressbar").animate({width: `${((percentage > 100) ? 100 : percentage)}%`});
    };
    xhr.send();
}
