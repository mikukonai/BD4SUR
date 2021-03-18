// 模拟退火
// 2020-07-16

function Gaussian(A, sigmaX, sigmaY, x0, y0) {
    this.A = A;
    this.sigmaX = sigmaX;
    this.sigmaY = sigmaY;
    this.x0 = x0;
    this.y0 = y0;
}

Gaussian.prototype = {
    // 二维函数：计算某一点的值
    value2D: function(x, y) {
        return this.A * Math.exp(-( (((x - this.x0) * (x - this.x0)) / (2 * this.sigmaX * this.sigmaX)) + (((y - this.y0) * (y - this.y0)) / (2 * this.sigmaY * this.sigmaY)) ));
    },
    // 全局最大值（即A）
    maximum: function() {
        return this.A;
    },
    // 二维函数：两个方向上的一阶偏导
    pdx2D: function(x, y) {
        let amp = - ((x-this.x0) / (this.sigmaX * this.sigmaX));
        return amp * this.value2D(x, y);
        // return amp;
    },
    pdy2D: function(x, y) {
        let amp = - ((y-this.y0) / (this.sigmaY * this.sigmaY));
        return amp * this.value2D(x, y);
        // return amp;
    },
    // 梯度向量（注意：下降方向）
    gradient(x, y) {
        let grad = new Array(2);
        let gx = - this.pdx2D(x,y);
        let gy = - this.pdy2D(x,y);
        grad[0] = gx;//ux;
        grad[1] = gy;//uy;
        return grad;
    },
};

function show(gs, cv) {
    cv.Clear();
    cv.SetBackgroundColor('#000000');

    // 计算最值
    let max_value = Number.MIN_VALUE;
    let min_value = Number.MAX_VALUE;
    for(let i = cv.Xmin; i <= cv.Xmax; i+=5) {
        for(let j = cv.Ymin; j <= cv.Ymax; j+=5) {
            let value = gs.reduce((prev, current) => {
                return prev + current.value2D(i, j);
            }, 0);
            if(value > max_value) max_value = value;
            if(value < min_value) min_value = value;
        }
    }

    function HSV_to_RGB(h, s, v) {
        let hi = Math.floor(h / 60);
        let f = h / 60 - hi;
        let p = v * (1 - s);
        let q = v * (1 - f * s);
        let t = v * (1 - (1 - f) * s);
        switch(hi) {
            case 0: return [v, t, p];
            case 1: return [q, v, p];
            case 2: return [p, v, t];
            case 3: return [p, q, v];
            case 4: return [t, p, v];
            case 5: return [v, p, q];
            default: return [0, 0, 0];
        }
    }

    for(let i = cv.Xmin; i <= cv.Xmax; i+=5) {
        for(let j = cv.Ymin; j <= cv.Ymax; j+=5) {
            let value = gs.reduce((prev, current) => {
                return prev + current.value2D(i, j);
            }, 0);
            
            let hue = ((value - min_value) / (max_value - min_value)) * 280;

            let rgb = HSV_to_RGB(hue, 1, 1);

            let color = `rgb(${rgb[0] * 255},${rgb[1] * 255},${rgb[2] * 255})`;
            cv.Rect([i,j], 5, 5, color);
        }
    }

    // 画十字中心
    for(let i = 0; i < gs.length; i++) {
        let g = gs[i];
        let x = g.x0;
        let y = g.y0;
        cv.Line([x-5, y], [x+5, y], "#fff");
        cv.Line([x, y-5], [x, y+5], "#fff");
    }
}

// 模拟退火
function annealing(gs, x0, y0, cv) {
    let T = 300;
    let r = 0.99;
    let Tmin = 0.1;

    let x = x0;
    let y = y0;

    let timer = setInterval(()=>{
        // 在邻域内随机选择一个解，并保证在限定范围内
        let new_x = x + (Math.random() * 2 - 1) * T;
        while(new_x > 300 || new_x < 0) {
            new_x = x + (Math.random() * 2 - 1) * T;
        }
        let new_y = y + (Math.random() * 2 - 1) * T;
        while(new_y > 300 || new_y < 0) {
            new_y = y + (Math.random() * 2 - 1) * T;
        }

        // 计算误差
        let old_value = gs.reduce((prev, current) => {
            return prev + current.value2D(x, y);
        }, 0);
        let new_value = gs.reduce((prev, current) => {
            return prev + current.value2D(new_x, new_y);
        }, 0);

        // 判断解的取舍
        if(new_value < old_value) {
            cv.Circle([new_x, new_y], 1, "#fff");
            x = new_x;
            y = new_y;
        }
        else {
            // 概率地接受新解
            let p = Math.exp( -(new_value - old_value) / (T * 0.01));
            if(Math.random() < p) {
                cv.Circle([new_x, new_y], 1, "#fff");
                x = new_x;
                y = new_y;
            }
        }

        // 降温
        T = T * r;

        // 终止条件
        if(T <= Tmin) {
            cv.Circle([x, y], 3, "#000");
            cv.Circle([x, y], 5, "#000");
            cv.Circle([x, y], 7, "#000");
            clearInterval(timer);
        }
    }, 0);
}
