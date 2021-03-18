/*
 * Levenshtein编辑距离算法/可视化
 * 2018.08.15
 */

function stringToBlocks(str, highlightIndex, divId) {
    let html = '';
    for(let i = 0; i < str.length; i++) {
        if(i <= highlightIndex) {
            html += `<span class="edit_distance_charblock edit_distance_highlight">${str[i]}</span>`;
        }
        else {
            html += `<span class="edit_distance_charblock">${str[i]}</span>`;
        }
    }
    document.getElementById(divId).innerHTML = html;
}

function showMatrix(mat, highlightX, highlightY, str1, str2, divId) {
    let html = `<table class="edit_distance_table"><tr><td>&nbsp;</td><td>.</td>`;
    for(let c = 0; c < str2.length; c++) {
        html += `<td>${str2[c]}</td>`;
    }
    html += '</tr>';

    for(let i = 0; i < mat.length; i++) {
        let line = mat[i];
        html += `<tr><td>${(str1[i-1]===undefined)?'.':str1[i-1]}</td>`;
        for(let j = 0; j < line.length; j++) {
            if(j === highlightX && i === highlightY) {
                html += `<td class="edit_distance_highlight">${line[j]}</td>`;
            }
            else {
                html += `<td>${line[j]}</td>`;
            }
        }
        html += '</tr>';
    }
    html += '</table>';
    document.getElementById(divId).innerHTML = html;
}

function LevenshteinDistance(str1, str2) {
    this.str1 = str1;
    this.str2 = str2;
    this.substitutionCost = 0;
    this.m = this.str1.length;
    this.n = this.str2.length;
    this.d = new Array(this.m + 1);
    this.gen = this.generator();
    this.init();
}

LevenshteinDistance.prototype = {
    generator: function*() {
        let i = 1; let j = 1;
        while(true) {
            if(i > this.m) {
                i = 1;
                j++;
            }
            if(j > this.n) {
                return true;
            }
            // 以下是算法核心
            if(this.str1[i - 1] === this.str2[j - 1]) {
                this.substitutionCost = 0;
            }
            else {
                this.substitutionCost = 1;
            }
            this.d[i][j] = Math.min(this.d[i-1][j] + 1,
                                    this.d[i][j-1] + 1,
                                    this.d[i-1][j-1] + this.substitutionCost);
            stringToBlocks(this.str1, i-1, 'line2');
            stringToBlocks(this.str2, j-1, 'line1');
            showMatrix(this.d, j, i, this.str1, this.str2, 'matrix');
            i++;
            yield false;
        }
    },
    init: function() {
        for(let i = 0; i <= this.m; i++) {
            this.d[i] = new Array(this.n + 1);
            for(let j = 0; j <= this.n; j++) {
                this.d[i][j] = 0;
            }
        }
        for(let i = 1; i <= this.m; i++) {
            this.d[i][0] = i;
        }
        for(let j = 1; j <= this.n; j++) {
            this.d[0][j] = j;
        }
    },
    auto: function() {
        clearTimeout(this.timer);
        this.init();
        this.timer = setInterval(()=>{
            if(!this.gen.next()) {
                clearTimeout(this.timer);
            }
        }, 100);
    },
    step: function() {
        clearTimeout(this.timer);
        this.gen.next();
    },
};
