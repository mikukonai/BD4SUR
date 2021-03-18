// LifeGame.js
// A simulator for Conway's Game of Life
// 2018.5.22 mikukonai@GitHub

function LifeGame(w, h) {
    this.width = w;
    this.height = h;
    this.matrix = new Array(this.width * this.height);
}

LifeGame.prototype = {
    className: 'LifeGame',
    init: function() {
        for(let i = 0; i < this.width * this.height; i++) {
            this.matrix[i] = 0;
        }
    },
    setValue: function(x, y, v) {
        if(v === 0 || v === '0' || v === false || v == 0) {
            this.matrix[this.width * y + x] = 0;
        }
        else {
            this.matrix[this.width * y + x] = 1;
        }
    },
    getValue: function(x, y) {
        x = (x < 0) ? (this.width  + x) : x;
        y = (y < 0) ? (this.height + y) : y;
        return this.matrix[this.width * y + x];
    },
    nextState: function(x, y) {
        let count = 0;
        count += (this.getValue(x-1, y-1) === 1) ? 1 : 0;
        count += (this.getValue(x  , y-1) === 1) ? 1 : 0;
        count += (this.getValue(x+1, y-1) === 1) ? 1 : 0;

        count += (this.getValue(x-1, y  ) === 1) ? 1 : 0;
        count += (this.getValue(x+1, y  ) === 1) ? 1 : 0;

        count += (this.getValue(x-1, y+1) === 1) ? 1 : 0;
        count += (this.getValue(x  , y+1) === 1) ? 1 : 0;
        count += (this.getValue(x+1, y+1) === 1) ? 1 : 0;

        let center = this.getValue(x, y);
        if(center === 0) {
            if(count === 3) {
                return 1;
            }
            else {
                return 0;
            }
        }
        else {
            if(count === 2 || count === 3) {
                return 1;
            }
            else {
                return 0;
            }
        }
    },
    step: function() {
        // let newmat = new Array(this.width * this.height);
        // for(let i = 0; i < this.width * this.height; i++) {
        //     newmat[i] = this.nextState(i % this.width, Math.floor(i / this.width));
        // }
        // this.matrix = null;
        // this.matrix = newmat;
        let flip = new Array();
        for(let i = 0;i < this.width * this.height; i++) {
            let oldval = this.matrix[i];
            let newval = this.nextState(i % this.width, Math.floor(i / this.width));
            if(oldval !== newval) {
                flip.push(i);
            }
        }
        for(let i = 0; i < flip.length; i++) {
            let index = flip[i];
            this.matrix[index] = (this.matrix[index] === 0) ? 1 : 0;
        }
        flip = null;
    }
};

function show(lg, dotsize) {
    if(lg.__proto__.className !== 'LifeGame') {
        console.error('Type error.');
    }

    let canvas = document.getElementById('cv');
    let context = canvas.getContext('2d');

    canvas.width = lg.width * (dotsize + 1) - 1;
    canvas.height = lg.height * (dotsize + 1) - 1;

    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;

    let mat = lg.matrix;


    context.fillStyle = '#000000';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#66ccff';
    for(let i = 0;i < lg.width * lg.height; i++) {
        let value = mat[i];
        if(value !== 0) {
            context.fillRect((i % lg.width) * (dotsize+1), Math.floor(i / lg.width) * (dotsize+1), dotsize, dotsize);
        }
    }
}

function RLEParser(code) {
    let lines = code.split(/\n+/i);

    // size
    let format = lines[0];
    format = format.replace(/\s/gi, '');
    format = format.replace(',', '=');
    let args = format.split('=');
    let width = parseInt(args[1]);
    let height = parseInt(args[3]);

    let matrix = new Array(width * height);
    for(let i = 0; i < width * height; i++) {
        matrix[i] = 0;
    }

    let count = 0; //总的细胞计数
    for(let i = 1; i < lines.length; i++) {
        let line = lines[i];
        let inlinecount = 0;
        let num = 1;
        for(let j = 0; j < line.length; j++) {
            let post = line.substring(j);
            if(post.search(/[0-9]+/gi) === 0) {
                num = parseInt((post.match(/[0-9]+/gi))[0]);
                j += ((post.match(/[0-9]+/gi))[0]).length - 1;
            }
            else if(line[j] === 'b') {
                for(let c = 0; c < num; c++) {
                    matrix[count] = 0; count++; inlinecount++;
                }
                num = 1;
            }
            else if(line[j] === 'o') {
                for(let c = 0; c < num; c++) {
                    matrix[count] = 1; count++; inlinecount++;
                }
                num = 1;
            }
            else if(line[j] === '!') {
                console.log('Finished.');
                return matrix;
            }
            else if(line[j] === '$') {
                // 空行
                for(let k = inlinecount; k < width; k++) {
                    matrix[count] = 0; count++;
                }
                // inlinecount = width;
                for(let c = 1; c < num; c++) {
                    console.log('===');
                    for(let k = 0; k < width; k++) {
                        matrix[count] = 0; count++;
                    }
                }
                num = 1;
                inlinecount = 0;
            }
            else {
                console.error('Unexpected character: ' + line[j]);
                return;
            }
        }
    }
    return matrix;
}


