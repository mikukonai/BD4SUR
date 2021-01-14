// 信号处理相关
// 2019.08.02 使用TS重写
/**
 * 复数类
 */
var Complex = /** @class */ (function () {
    function Complex(rep, imp) {
        this.rep = 0;
        this.imp = 0;
        this.rep = rep;
        this.imp = imp;
    }
    Complex.prototype.add = function (c) {
        return new Complex(c.rep + this.rep, c.imp + this.imp);
    };
    Complex.prototype.sub = function (c) {
        return new Complex(this.rep - c.rep, this.imp - c.imp);
    };
    Complex.prototype.scale = function (r) {
        return new Complex(r * this.rep, r * this.imp);
    };
    Complex.prototype.mul = function (c) {
        var newrep = this.rep * c.rep - this.imp * c.imp;
        var newimp = this.rep * c.imp + this.imp * c.rep;
        return new Complex(newrep, newimp);
    };
    Complex.prototype.copyFrom = function (c) {
        this.rep = c.rep;
        this.imp = c.imp;
    };
    // 模的平方
    Complex.prototype.energy = function () {
        return (this.rep * this.rep + this.imp * this.imp);
    };
    // 模
    Complex.prototype.radius = function () {
        return Math.sqrt(this.rep * this.rep + this.imp * this.imp);
    };
    // 相位([0, 2*pi))
    Complex.prototype.phase = function () {
        var angle = Math.atan2(this.imp, this.rep);
        return (angle >= 0) ? angle : (2 * Math.PI + angle);
    };
    Complex.prototype.show = function () {
        console.log('Complex:[ ' + this.rep + ' , ' + this.imp + ' ]');
    };
    return Complex;
}());
/**
 * 矩阵
 */
var Matrix = /** @class */ (function () {
    function Matrix(width, height) {
        if (width < 0 || height < 0)
            throw "Bad matrix size.";
        this.width = width;
        this.height = height;
        this.data = new Array(this.width * this.height);
    }
    Matrix.prototype.show = function () {
        var stringArray = new Array();
        stringArray.push('= Matrix ====================\n');
        for (var row = 0; row < this.height; row++) {
            for (var col = 0; col < this.width; col++) {
                stringArray.push(parseFloat(this.getElement(col, row).toString()).toFixed(1).toString());
                stringArray.push(', ');
            }
            stringArray.push('\n');
        }
        stringArray.push('=============================\n');
        console.log(stringArray.join(''));
    };
    Matrix.prototype.map = function (f) {
        this.data = this.data.map(f);
    };
    Matrix.prototype.setElement = function (x, y, value) {
        if (x < 0 || x > this.width || y < 0 || y > this.height)
            throw "Bad arguments.";
        this.data[x + y * this.width] = value;
    };
    Matrix.prototype.getElement = function (x, y) {
        if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
            return undefined;
        }
        else {
            return this.data[x + y * this.width];
        }
    };
    Matrix.prototype.setRow = function (rowIndex, rowArray) {
        if (rowArray.length !== this.width)
            throw "Width mismatch.";
        for (var col = 0; col < this.width; col++) {
            this.setElement(col, rowIndex, rowArray[col]);
        }
    };
    Matrix.prototype.getRow = function (rowIndex) {
        var rowArray = new Array();
        for (var col = 0; col < this.width; col++) {
            rowArray[col] = this.getElement(col, rowIndex);
        }
        return rowArray;
    };
    Matrix.prototype.setCol = function (colIndex, colArray) {
        if (colArray.length !== this.height)
            throw "Height mismatch.";
        for (var row = 0; row < this.height; row++) {
            this.setElement(colIndex, row, colArray[row]);
        }
    };
    Matrix.prototype.getCol = function (colIndex) {
        var colArray = new Array();
        for (var row = 0; row < this.height; row++) {
            colArray[row] = this.getElement(colIndex, row);
        }
        return colArray;
    };
    Matrix.prototype.setBlock = function (x, y, block) {
        if (x < 0 || y < 0 || x + block.width > this.width || y + block.height > this.height) {
            throw "Bad arguments.";
        }
        for (var row = y; row < y + block.height; row++) {
            for (var col = x; col < x + block.width; col++) {
                var val = block.getElement(col - x, row - y);
                this.setElement(col, row, val);
            }
        }
    };
    // 不作边界检查
    Matrix.prototype.getBlock = function (x, y, width, height) {
        // if(x < 0 || y < 0 || width < 0 || height < 0 || x + width > this.width || y + height > this.height) {
        //     throw `Bad arguments.`;
        // }
        var block = new Matrix(width, height);
        for (var row = 0; row < block.height; row++) {
            for (var col = 0; col < block.width; col++) {
                var val = this.getElement(col + x, row + y);
                block.setElement(col, row, val);
            }
        }
        return block;
    };
    /**
     * 以下是一些静态函数
     */
    // 卷积
    Matrix.Convolution = function (input, kernal) {
        var output = new Matrix(input.width, input.height);
        var sum = kernal.data.reduce(function (prev, current) {
            return (prev + current);
        }, 0);
        sum = (sum === 0) ? 1 : sum;
        for (var y = 0; y < input.height; y++) {
            for (var x = 0; x < input.width; x++) {
                var window_1 = input.getBlock(x - (kernal.width >> 1), y - (kernal.height >> 1), kernal.width, kernal.height);
                var avr = 0;
                for (var i = 0; i < window_1.data.length; i++) {
                    avr += ((window_1.data[i] || 0) * kernal.data[i]);
                }
                output.setElement(x, y, avr / sum);
            }
        }
        return output;
    };
    return Matrix;
}());
// 指数查找表
var POW = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536];
// 对数查找表
var LOG = {
    '1': 0, '2': 1, '4': 2, '8': 3, '16': 4, '32': 5, '64': 6, '128': 7, '256': 8,
    '512': 9, '1024': 10, '2048': 11, '4096': 12, '8192': 13, '16384': 14, '32768': 15, '65536': 16,
};
// FFT 快速傅立叶变换
function BasicFFT(IN, size, isIFFT) {
    // 计算旋转因子
    function calculateTwiddleFactor(fftSize, isIFFT) {
        var W = new Array(fftSize);
        var ReP = 0;
        var ImP = 0;
        // 只需要用到0~(fftSize-1)的旋转因子
        for (var i = 0; i < (fftSize >> 1); i++) {
            // W[i] = exp(-2*pi*j*(i/N))
            ReP = Math.cos(2.0 * Math.PI * (i / fftSize));
            if (isIFFT) {
                ImP = Math.sin(2.0 * Math.PI * (i / fftSize));
            }
            else {
                ImP = -Math.sin(2.0 * Math.PI * (i / fftSize));
            }
            W[i] = new Complex(ReP, ImP);
        }
        return W;
    }
    // 生成码位倒置序列
    function bitReverse(fftSize) {
        var brevIndex = new Array();
        var temp = 0;
        var bitSize = LOG[fftSize];
        for (var i = 0; i < fftSize; i++) {
            temp = i;
            brevIndex[i] = 0;
            for (var c = 0; c < bitSize; c++) {
                if (((temp >> c) & 1) !== 0) {
                    brevIndex[i] += (1 << (bitSize - 1 - c)); // POW[bitSize - 1 - c];
                }
            }
        }
        return brevIndex;
    }
    // 两个数组，用来交替存储各级蝶形运算的结果
    var buf = new Array();
    buf[0] = new Array();
    buf[1] = new Array();
    for (var i = 0; i < size; i++) {
        buf[0][i] = new Complex(0, 0);
        buf[1][i] = new Complex(0, 0);
    }
    var M = LOG[size];
    if (!(size in LOG)) {
        throw '[FFT] 输入序列长度必须是2的幂';
    }
    // 码位倒置后的输入序列下标
    var indexIn = bitReverse(size);
    // 旋转因子备用
    var W = calculateTwiddleFactor(size, isIFFT);
    var level = 0;
    for (level = 0; level < (((M & 1) === 0) ? M : (M + 1)); level++) {
        for (var group = 0; group < POW[M - level - 1]; group++) {
            for (var i = 0; i < (1 << level) /*POW[level]*/; i++) {
                var indexBuf = i + (group << (level + 1));
                var scalingFactor = (1 << (M - level - 1)); // POW[M-level-1];
                if (level === 0) {
                    (buf[0])[indexBuf].copyFrom(IN[indexIn[indexBuf]].add(W[i * scalingFactor].mul(IN[indexIn[indexBuf + (1 << level) /*POW[level]*/]])));
                    (buf[0])[indexBuf + (1 << level) /*POW[level]*/].copyFrom(IN[indexIn[indexBuf]].sub(W[i * scalingFactor].mul(IN[indexIn[indexBuf + (1 << level) /*POW[level]*/]])));
                }
                else {
                    (buf[level & 1])[indexBuf].copyFrom((buf[(level + 1) & 1])[indexBuf].add(W[i * scalingFactor].mul((buf[(level + 1) & 1])[indexBuf + (1 << level) /*POW[level]*/])));
                    (buf[level & 1])[indexBuf + (1 << level) /*POW[level]*/].copyFrom((buf[(level + 1) & 1])[indexBuf].sub(W[i * scalingFactor].mul((buf[(level + 1) & 1])[indexBuf + (1 << level) /*POW[level]*/])));
                }
            }
        }
    }
    var result = null;
    if ((M & 1) === 0) {
        result = buf[(level + 1) & 1];
    }
    else {
        result = buf[level & 1];
    }
    if (isIFFT) {
        return result.map(function (value) { return value.scale(1 / size); });
    }
    else {
        return result;
    }
}
function FFT(IN, size) {
    return BasicFFT(IN, size, false);
}
function IFFT(IN, size) {
    return BasicFFT(IN, size, true);
}
// 离散余弦变换（DCT）及其反变换
/* 参考：
 * https://dsp.stackexchange.com/questions/2807/fast-cosine-transform-via-fft
 * https://www.nayuki.io/page/fast-discrete-cosine-transform-algorithms
 * Makhoul J . A Fast Cosine Transform in One and Two Dimensions[J]. IEEE Transactions on Acoustics Speech and Signal Processing, 1980, 28(1):27-34.
 */
// 一维 DCT-2 (The DCT)
function DCT(input) {
    var N = input.length;
    var input2 = new Array();
    // 序列重排：[01234567]->[02467531]
    for (var n = 0; n < (N >> 1); n++) {
        input2[n] = input[n << 1];
        input2[N - 1 - n] = input[(n << 1) + 1];
    }
    // FFT
    var INPUT2 = new Array();
    for (var i = 0; i < N; i++) {
        INPUT2[i] = new Complex(input2[i], 0);
    }
    var fftout = FFT(INPUT2, INPUT2.length);
    var OUTPUT = new Array();
    // 平移（乘因子）
    for (var n = 0; n < N; n++) {
        var factor = new Complex(Math.cos((-n * Math.PI) / (N << 1)) /* * 2*/, Math.sin((-n * Math.PI) / (N << 1)) /* * 2*/);
        OUTPUT[n] = fftout[n].mul(factor).rep * ((n === 0) ? 1 / Math.sqrt(8) : 1 / 2);
    }
    return OUTPUT;
}
// 一维 DCT-3 (The IDCT, Makhoul)
function IDCT(input) {
    var N = input.length;
    var INPUT2 = new Array();
    input[N] = 0;
    for (var n = 0; n < N; n++) {
        var scale = (n === 0) ? Math.sqrt(8) : 2;
        var W = new Complex(Math.cos((n * Math.PI) / (N << 1)) * scale /* * 0.5*/, Math.sin((n * Math.PI) / (N << 1)) * scale /* * 0.5*/);
        var I = new Complex(input[n], -input[N - n]);
        INPUT2[n] = W.mul(I);
    }
    var OUTPUT = IFFT(INPUT2, INPUT2.length);
    var result = new Array();
    // 序列重排：[02467531]->[01234567]
    for (var n = 0; n < (N >> 1); n++) {
        result[n << 1] = OUTPUT[n].rep;
        result[(n << 1) + 1] = OUTPUT[N - 1 - n].rep;
    }
    return result;
}
// 2D DCT
// 对简单方块作DCT，宽度必须是2的幂
function DCT2dSquare(matrix) {
    var temp = new Matrix(matrix.width, matrix.height);
    // 对每行作DCT
    for (var y = 0; y < matrix.height; y++) {
        var row = matrix.getRow(y);
        var dctrow = DCT(row);
        temp.setRow(y, dctrow);
    }
    // 对每列作DCT
    var result = new Matrix(matrix.width, matrix.height);
    for (var x = 0; x < matrix.width; x++) {
        var col = temp.getCol(x);
        var dctcol = DCT(col);
        result.setCol(x, dctcol);
    }
    return result;
}
// 对简单方块作IDCT，宽度必须是2的幂
function IDCT2dSquare(dctMatrix) {
    var temp = new Matrix(dctMatrix.width, dctMatrix.height);
    // 对每列作IDCT
    for (var x = 0; x < dctMatrix.width; x++) {
        var dctcol = dctMatrix.getCol(x);
        var col = IDCT(dctcol);
        temp.setCol(x, col);
    }
    // 对每行作IDCT
    var origin = new Matrix(dctMatrix.width, dctMatrix.height);
    for (var y = 0; y < dctMatrix.height; y++) {
        var dctrow = temp.getRow(y);
        var row = IDCT(dctrow);
        origin.setRow(y, row);
    }
    return origin;
}
// 对任意尺寸的矩阵分块作DCT，默认块尺寸为64×64
function DCT2d(input, BLOCK_SIZE) {
    BLOCK_SIZE = BLOCK_SIZE || 64;
    // 根据块大小对原图作扩展
    var width = Math.ceil(input.width / BLOCK_SIZE) * BLOCK_SIZE;
    var height = Math.ceil(input.height / BLOCK_SIZE) * BLOCK_SIZE;
    var Expanded = new Matrix(width, height);
    Expanded.setBlock(0, 0, input);
    // 将原图外的边缘置0
    for (var y = input.height; y < height; y++) {
        for (var x = 0; x < width; x++) {
            Expanded.setElement(x, y, 0);
        }
    }
    for (var y = 0; y < input.height; y++) {
        for (var x = input.width; x < width; x++) {
            Expanded.setElement(x, y, 0);
        }
    }
    // 分块DCT
    for (var y = 0; y < height; y += BLOCK_SIZE) {
        for (var x = 0; x < width; x += BLOCK_SIZE) {
            var block = Expanded.getBlock(x, y, BLOCK_SIZE, BLOCK_SIZE);
            var dctBlock = DCT2dSquare(block);
            Expanded.setBlock(x, y, dctBlock);
        }
    }
    return {
        originalWidth: input.width,
        originalHeight: input.height,
        blockSize: BLOCK_SIZE,
        matrix: Expanded
    };
}
function IDCT2d(input) {
    var originalWidth = input.originalWidth;
    var originalHeight = input.originalHeight;
    var blockSize = input.blockSize;
    var originalMatrix = new Matrix(input.matrix.width, input.matrix.height);
    for (var y = 0; y < input.matrix.height; y += blockSize) {
        for (var x = 0; x < input.matrix.width; x += blockSize) {
            var dctBlock = input.matrix.getBlock(x, y, blockSize, blockSize);
            var originalBlock = IDCT2dSquare(dctBlock);
            originalMatrix.setBlock(x, y, originalBlock);
        }
    }
    originalMatrix.map(function (v) { return Math.round(v); }); // 像素取整
    return originalMatrix.getBlock(0, 0, originalWidth, originalHeight);
}
/*
let input: Matrix<number> = new Matrix(6,3);
input.data = [
    1,2,3,4,5,6,
    7,8,9,0,1,2,
    3,4,5,6,7,8
];
let dct = DCT2d(input, 8);
let origina = IDCT2d(dct);
origina.show();
*/ 
