// 信号处理相关
// 2019.08.02 使用TS重写

/**
 * 复数类
 */
class Complex {
    public rep: number = 0;
    public imp: number = 0;

    constructor(rep:number, imp: number) {
        this.rep = rep;
        this.imp = imp;
    }

    public add(c: Complex): Complex {
        return new Complex(c.rep + this.rep, c.imp + this.imp);
    }

    public sub(c: Complex): Complex {
        return new Complex(this.rep - c.rep, this.imp - c.imp);
    }

    public scale(r: number): Complex {
        return new Complex(r * this.rep, r * this.imp);
    }

    public mul(c: Complex): Complex {
        let newrep: number = this.rep * c.rep - this.imp * c.imp;
        let newimp: number = this.rep * c.imp + this.imp * c.rep;
        return new Complex(newrep, newimp);
    }

    public copyFrom(c: Complex): void {
        this.rep = c.rep;
        this.imp = c.imp;
    }

    // 模的平方
    public energy(): Number {
        return (this.rep * this.rep + this.imp * this.imp);
    }

    // 模
    public radius(): Number {
        return Math.sqrt(this.rep * this.rep + this.imp * this.imp);
    }

    // 相位([0, 2*pi))
    public phase(): Number {
        let angle = Math.atan2(this.imp, this.rep);
        return (angle >= 0) ? angle : (2 * Math.PI + angle);
    }

    public show(): void {
        console.log('Complex:[ ' + this.rep + ' , ' + this.imp + ' ]');
    }
}

/**
 * 矩阵
 */
class Matrix<T> {
    public width: number;
    public height: number;
    public data: Array<T>;

    constructor(width: number, height: number) {
        if(width < 0 || height < 0) throw `Bad matrix size.`;
        this.width = width;
        this.height = height;
        this.data = new Array(this.width * this.height);
    }

    public show(): void {
        let stringArray: Array<string> = new Array();
        stringArray.push('= Matrix ====================\n');
        for(let row = 0; row < this.height; row++) {
            for(let col = 0; col < this.width; col++) {
                stringArray.push(parseFloat(this.getElement(col, row).toString()).toFixed(1).toString());
                stringArray.push(', ');
            }
            stringArray.push('\n');
        }
        stringArray.push('=============================\n');
        console.log(stringArray.join(''));
    }

    public map(f: (v:any, i: any, a: any)=>T): void {
        this.data = this.data.map(f);
    }

    public setElement(x: number, y: number, value: T): void {
        if(x < 0 || x > this.width || y < 0 || y > this.height) throw `Bad arguments.`;
        this.data[x + y * this.width] = value;
    }

    public getElement(x: number, y: number): T {
        if(x < 0 || x >= this.width || y < 0 || y >= this.height) {
            return undefined;
        }
        else {
            return this.data[x + y * this.width];
        }
    }

    public setRow(rowIndex: number, rowArray: Array<T>): void {
        if(rowArray.length !== this.width) throw `Width mismatch.`;
        for(let col = 0; col < this.width; col++) {
            this.setElement(col, rowIndex, rowArray[col]);
        }
    }

    public getRow(rowIndex: number): Array<T> {
        let rowArray = new Array<T>();
        for(let col = 0; col < this.width; col++) {
            rowArray[col] = this.getElement(col, rowIndex);
        }
        return rowArray;
    }

    public setCol(colIndex: number, colArray: Array<T>): void {
        if(colArray.length !== this.height) throw `Height mismatch.`;
        for(let row = 0; row < this.height; row++) {
            this.setElement(colIndex, row, colArray[row]);
        }
    }

    public getCol(colIndex: number): Array<T> {
        let colArray = new Array<T>();
        for(let row = 0; row < this.height; row++) {
            colArray[row] = this.getElement(colIndex, row);
        }
        return colArray;
    }

    public setBlock(x: number, y: number, block: Matrix<T>): void {
        if(x < 0 || y < 0 || x + block.width > this.width || y + block.height > this.height) {
            throw `Bad arguments.`;
        }
        for(let row = y; row < y + block.height; row++) {
            for(let col = x; col < x + block.width; col++) {
                let val = block.getElement(col - x, row - y);
                this.setElement(col, row, val);
            }
        }
    }

    // 不作边界检查
    public getBlock(x: number, y: number, width: number, height: number): Matrix<T> {
        // if(x < 0 || y < 0 || width < 0 || height < 0 || x + width > this.width || y + height > this.height) {
        //     throw `Bad arguments.`;
        // }
        let block: Matrix<T> = new Matrix(width, height);
        for(let row = 0; row < block.height; row++) {
            for(let col = 0; col < block.width; col++) {
                let val = this.getElement(col + x, row + y);
                block.setElement(col, row, val);
            }
        }
        return block;
    }

    /**
     * 以下是一些静态函数
     */

    // 卷积
    static Convolution(input: Matrix<number>, kernal: Matrix<number>): Matrix<number> {
        let output = new Matrix<number>(input.width, input.height);
        let sum = kernal.data.reduce((prev, current)=> {
            return (prev + current);
        }, 0);
        sum = (sum === 0) ? 1 : sum;
        for(let y = 0; y < input.height; y++) {
            for(let x = 0; x < input.width; x++) {
                let window = input.getBlock(x - (kernal.width >> 1), y - (kernal.height >> 1), kernal.width, kernal.height);
                let avr = 0;
                for(let i = 0; i < window.data.length; i++) {
                    avr += ((window.data[i] || 0) * kernal.data[i]);
                }
                output.setElement(x, y, avr / sum);
            }
        }
        return output;
    }
}

/**
 * 向量
 */
type Vector<T> = Array<T>;

// 指数查找表
const POW = [1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384,32768,65536];
// 对数查找表
const LOG = {
    '1':0,      '2':1,      '4':2,      '8':3,      '16':4,      '32':5,      '64':6,      '128':7,      '256':8,
    '512':9,    '1024':10,  '2048':11,  '4096':12,  '8192':13,   '16384':14,  '32768':15,  '65536':16,
};

// FFT 快速傅立叶变换
function BasicFFT(IN: Array<Complex>, size: number, isIFFT: boolean): Array<Complex> {
    // 计算旋转因子
    function calculateTwiddleFactor(fftSize: number, isIFFT: boolean): Array<Complex> {
        let W: Array<Complex> = new Array(fftSize);
        let ReP: number = 0;
        let ImP: number = 0;
        // 只需要用到0~(fftSize-1)的旋转因子
        for(let i = 0; i < (fftSize>>1) ; i++) {
            // W[i] = exp(-2*pi*j*(i/N))
            ReP = Math.cos(2.0 * Math.PI * ( i / fftSize ) );
            if(isIFFT) {
                ImP = Math.sin(2.0 * Math.PI * ( i / fftSize ) );
            }
            else {
                ImP = -Math.sin(2.0 * Math.PI * ( i / fftSize ) );
            }
            W[i] = new Complex(ReP, ImP);
        }
        return W;
    }
    // 生成码位倒置序列
    function bitReverse(fftSize: number): Array<number> {
        let brevIndex = new Array();
        let temp = 0;
        let bitSize = LOG[fftSize];
        for(let i = 0; i < fftSize; i++) {
            temp = i;
            brevIndex[i] = 0;
            for(let c = 0; c < bitSize; c++) {
                if(((temp >> c) & 1) !== 0) {
                    brevIndex[i] += (1 << (bitSize - 1 - c)); // POW[bitSize - 1 - c];
                }
            }
        }
        return brevIndex;
    }
    // 两个数组，用来交替存储各级蝶形运算的结果
    let buf = new Array<any>();
    buf[0] = new Array<Complex>();
    buf[1] = new Array<Complex>();
    for(let i = 0; i < size; i++) {
        buf[0][i] = new Complex(0,0);
        buf[1][i] = new Complex(0,0);
    }

    let M: number = LOG[size];
    if(!(size in LOG)) { throw '[FFT] 输入序列长度必须是2的幂'; }

    // 码位倒置后的输入序列下标
    let indexIn: Array<number> = bitReverse(size);

    // 旋转因子备用
    let W: Array<Complex> = calculateTwiddleFactor(size, isIFFT);

    let level: number = 0;
    for(level = 0; level < (((M & 1) === 0) ? M : (M+1)); level++) {
        for(let group = 0; group < POW[M-level-1]; group++) {
            for(let i = 0; i < (1<<level)/*POW[level]*/; i++) {
                let indexBuf: number = i + (group << (level+1));
                let scalingFactor: number = (1 << (M-level-1)); // POW[M-level-1];
                if(level === 0) {
                    (buf[0])[       indexBuf      ].copyFrom(
                        IN[indexIn[indexBuf]] .add( W[i*scalingFactor] .mul( IN[indexIn[indexBuf+(1<<level)/*POW[level]*/]] )));
                    (buf[0])[indexBuf + (1<<level)/*POW[level]*/].copyFrom(
                        IN[indexIn[indexBuf]] .sub( W[i*scalingFactor] .mul( IN[indexIn[indexBuf+(1<<level)/*POW[level]*/]] )));
                }
                else {
                    (buf[level & 1])[       indexBuf      ].copyFrom(
                        (buf[(level+1) & 1])[indexBuf] .add( W[i*scalingFactor] .mul( (buf[(level+1) & 1])[indexBuf+(1<<level)/*POW[level]*/] )));
                    (buf[level & 1])[indexBuf + (1<<level)/*POW[level]*/].copyFrom(
                        (buf[(level+1) & 1])[indexBuf] .sub( W[i*scalingFactor] .mul( (buf[(level+1) & 1])[indexBuf+(1<<level)/*POW[level]*/] )));
                }
            }
        }
    }

    let result: Array<Complex> = null;
    if((M & 1) === 0) {
        result = buf[(level+1) & 1];
    }
    else {
        result = buf[level & 1];
    }
    if(isIFFT) {
        return result.map((value)=>{ return value.scale(1/size);});
    }
    else {
        return result;
    }
}

function FFT(IN: Array<Complex>, size: number): Array<Complex> {
    return BasicFFT(IN, size, false);
}

function IFFT(IN: Array<Complex>, size: number): Array<Complex> {
    return BasicFFT(IN, size, true);
}

// 离散余弦变换（DCT）及其反变换

/* 参考：
 * https://dsp.stackexchange.com/questions/2807/fast-cosine-transform-via-fft
 * https://www.nayuki.io/page/fast-discrete-cosine-transform-algorithms
 * Makhoul J . A Fast Cosine Transform in One and Two Dimensions[J]. IEEE Transactions on Acoustics Speech and Signal Processing, 1980, 28(1):27-34.
 */

// 一维 DCT-2 (The DCT)
function DCT(input: Array<number>): Array<number> {
    let N = input.length;
    let input2 = new Array<number>();
    // 序列重排：[01234567]->[02467531]
    for(let n = 0; n < (N >> 1); n++) {
        input2[n] = input[n << 1];
        input2[N-1-n] = input[(n << 1) + 1];
    }
    // FFT
    let INPUT2 = new Array<Complex>();
    for(let i = 0; i < N; i++) { INPUT2[i] = new Complex(input2[i], 0); }
    let fftout: Array<Complex> = FFT(INPUT2, INPUT2.length);
    let OUTPUT: Array<number> = new Array();
    // 平移（乘因子）
    for(let n = 0; n < N; n++) {
        let factor = new Complex(
            Math.cos( (-n * Math.PI) / (N << 1) )/* * 2*/,
            Math.sin( (-n * Math.PI) / (N << 1) )/* * 2*/
        );
        OUTPUT[n] = fftout[n].mul(factor).rep * ((n === 0) ? 1/Math.sqrt(8) : 1/2);
    }
    return OUTPUT;
}

// 一维 DCT-3 (The IDCT, Makhoul)
function IDCT(input: Array<number>): Array<number> {
    let N = input.length;
    let INPUT2 = new Array<Complex>();
    input[N] = 0;
    for(let n = 0; n < N; n++) {
        let scale = (n === 0) ? Math.sqrt(8) : 2;
        let W = new Complex(
            Math.cos( (n * Math.PI) / (N << 1) ) * scale/* * 0.5*/,
            Math.sin( (n * Math.PI) / (N << 1) ) * scale/* * 0.5*/
        );
        let I = new Complex(
            input[n],
            -input[N - n]
        );
        INPUT2[n] = W.mul(I);
    }
    let OUTPUT: Array<Complex> = IFFT(INPUT2, INPUT2.length);
    let result = new Array<number>();
    // 序列重排：[02467531]->[01234567]
    for(let n = 0; n < (N >> 1); n++) {
        result[n << 1] = OUTPUT[n].rep;
        result[(n << 1) + 1] = OUTPUT[N-1-n].rep;
    }
    return result;
}

// 2D DCT
// 对简单方块作DCT，宽度必须是2的幂
function DCT2dSquare(matrix: Matrix<number>): Matrix<number> {
    let temp = new Matrix<number>(matrix.width, matrix.height);
    // 对每行作DCT
    for(let y = 0; y < matrix.height; y++) {
        let row: Array<number> = matrix.getRow(y);
        let dctrow: Array<number> = DCT(row);
        temp.setRow(y, dctrow);
    }
    // 对每列作DCT
    let result = new Matrix<number>(matrix.width, matrix.height);
    for(let x = 0; x < matrix.width; x++) {
        let col: Array<number> = temp.getCol(x);
        let dctcol: Array<number> = DCT(col);
        result.setCol(x, dctcol);
    }
    return result;
}

// 对简单方块作IDCT，宽度必须是2的幂
function IDCT2dSquare(dctMatrix: Matrix<number>): Matrix<number> {
    let temp = new Matrix<number>(dctMatrix.width, dctMatrix.height);
    // 对每列作IDCT
    for(let x = 0; x < dctMatrix.width; x++) {
        let dctcol: Array<number> = dctMatrix.getCol(x);
        let col: Array<number> = IDCT(dctcol);
        temp.setCol(x, col);
    }
    // 对每行作IDCT
    let origin = new Matrix<number>(dctMatrix.width, dctMatrix.height);
    for(let y = 0; y < dctMatrix.height; y++) {
        let dctrow: Array<number> = temp.getRow(y);
        let row: Array<number> = IDCT(dctrow);
        origin.setRow(y, row);
    }
    return origin;
}


// DCT输出结果类型
interface DCT_Spectrum {
    originalWidth: number;
    originalHeight: number;
    blockSize: number;
    matrix: Matrix<number>;
}

// 对任意尺寸的矩阵分块作DCT，默认块尺寸为64×64
function DCT2d(input: Matrix<number>, BLOCK_SIZE: number): DCT_Spectrum {
    BLOCK_SIZE = BLOCK_SIZE || 64;
    // 根据块大小对原图作扩展
    let width: number = Math.ceil(input.width / BLOCK_SIZE) * BLOCK_SIZE;
    let height: number = Math.ceil(input.height / BLOCK_SIZE) * BLOCK_SIZE;
    let Expanded: Matrix<number> = new Matrix(width, height);
    Expanded.setBlock(0, 0, input);
    // 将原图外的边缘置0
    for(let y = input.height; y < height; y++) {
        for(let x = 0; x < width; x++) {
            Expanded.setElement(x, y, 0);
        }
    }
    for(let y = 0; y < input.height; y++) {
        for(let x = input.width; x < width; x++) {
            Expanded.setElement(x, y, 0);
        }
    }
    // 分块DCT
    for(let y = 0; y < height; y += BLOCK_SIZE) {
        for(let x = 0; x < width; x += BLOCK_SIZE) {
            let block = Expanded.getBlock(x, y, BLOCK_SIZE, BLOCK_SIZE);
            let dctBlock = DCT2dSquare(block);
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

function IDCT2d(input: DCT_Spectrum): Matrix<number> {
    let originalWidth = input.originalWidth;
    let originalHeight = input.originalHeight;
    let blockSize = input.blockSize;
    let originalMatrix: Matrix<number> = new Matrix(input.matrix.width, input.matrix.height);
    for(let y = 0; y < input.matrix.height; y += blockSize) {
        for(let x = 0; x < input.matrix.width; x += blockSize) {
            let dctBlock = input.matrix.getBlock(x, y, blockSize, blockSize);
            let originalBlock = IDCT2dSquare(dctBlock);
            originalMatrix.setBlock(x, y, originalBlock);
        }
    }
    originalMatrix.map((v)=>{return Math.round(v);}); // 像素取整
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