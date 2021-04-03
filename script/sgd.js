// SGD.js
// Stochastic gradient descent
// 2018.05.24 BD4SUR

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

function gd(gs, x0, y0, cv) {
    const STEP = 20;

    let grad = function(x, y) {
        let zerov = new Array(2);
        zerov[0] = 0;
        zerov[1] = 0;
        return gs.reduce(function(prev, current) {
            let g = current.gradient(x, y);
            g[0] += prev[0];
            g[1] += prev[1];
            return g;
        }, zerov);
    };

    let norm = function(g) {
        return Math.sqrt(g[0] * g[0] + g[1] * g[1]);
    };

    let color = '#fff';
    cv.Line([x0-5, y0],[x0+5, y0],color);
    cv.Line([x0, y0-5],[x0, y0+5],color);

    let x = x0;
    let y = y0;
    let g = grad(x, y);

    let timer = setInterval(()=>{
        if(norm(g) > 0.01) {
            let newX = x + STEP * g[0];
            let newY = y + STEP * g[1];
            cv.Line([x,y], [newX, newY], color);
            x = newX;
            y = newY;
            g = grad(x, y);
        }
        else {
            cv.Circle([x,y], 5, color);
            clearInterval(timer);
        }
    }, 0);

    let end = new Array(2);
    end[0] = x;
    end[1] = y;
    return end;
}
