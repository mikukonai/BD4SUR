function Perceptron(xs, ys, label) {
    this.xs = xs;
    this.ys = ys;
    this.label = label;
    this.args = new Array();
}
Perceptron.prototype = {
    Classifier: function(x,y) {
        return this.args[0] * x + this.args[1] * y + this.args[2];
    },
    setArgs: function(wx, wy, b) {
        this.args[0] = wx;
        this.args[1] = wy;
        this.args[2] = b;
    },
    // 批量梯度（没有用到）
    lossd0: function() {
        let size = this.xs.length;
        let sum = 0;
        for(let i = 0; i < size; i++) {
            sum += ((this.label[i] >= 0) ? 1 : -1) * this.xs[i];
        }
        return (-sum);
    },
    lossd1: function() {
        let size = this.xs.length;
        let sum = 0;
        for(let i = 0; i < size; i++) {
            sum += ((this.label[i] >= 0) ? 1 : -1) * this.ys[i];
        }
        return (-sum);
    },
    lossd2: function() {
        let size = this.xs.length;
        let sum = 0;
        for(let i = 0; i < size; i++) {
            sum += ((this.label[i] >= 0) ? 1 : -1);
        }
        return (-sum);
    },
};


function GD(pt, cv) {

    let STEP = 0.01; // Learn rate

    const drawLine = function(w1, w2, b, saf) {
        let B = -b / w2;
        let w = - w1 / w2;
        cv.context.textBaseline = 'top';
        cv.Text('自适应学习率因子=' + saf.toFixed(3).toString(), [8, cv.Ymax-(8+14*0)], "#000", "12px consolas");
        cv.Text('斜率=' + w.toFixed(3).toString(), [8, cv.Ymax-(8+14*1)], "#000", "12px consolas");
        cv.Text('截距=' + B.toFixed(3).toString(), [8, cv.Ymax-(8+14*2)], "#000", "12px consolas");
        cv.Text('wx=' + w1.toFixed(3).toString(), [8, cv.Ymax-(8+14*3)], "#000", "12px consolas");
        cv.Text('wy=' + w2.toFixed(3).toString(), [8, cv.Ymax-(8+14*4)], "#000", "12px consolas");
        cv.Text('bias=' + b.toFixed(3).toString(), [8, cv.Ymax-(8+14*5)], "#000", "12px consolas");

        let color = '#666666';
        cv.context.lineWidth = 2;
        cv.Line([cv.Xmin, cv.Xmin * w + B],[cv.Xmax, cv.Xmax * w + B], color);
    };


    // 计算两类之间最短样本点距离，
    // 以最短线段的中垂线的参数作为迭代起始参数
    let x0, y0, x1, y1;
    let pos = new Array();
    let neg = new Array();
    for(let i = 0; i < pt.xs.length; i++) {
        if(pt.label[i] > 0) {pos.push(i);}
        else {neg.push(i);}
    }

    const distance = function(x0, y0, x1, y1) {
        return Math.sqrt((x0-x1)*(x0-x1) + (y0-y1)*(y0-y1));
    };

    let minDist = Number.MAX_SAFE_INTEGER;
    let minI = 0;
    let minJ = 0;
    for(let i = 0; i < neg.length; i++) {
        for(let j = 0; j < pos.length; j++) {
            let negIndex = neg[i];
            let posIndex = pos[j];
            let x0, y0, x1, y1;
            x0 = pt.xs[negIndex]; x1 = pt.xs[posIndex];
            y0 = pt.ys[negIndex]; y1 = pt.ys[posIndex];
            let dist = distance(x0, y0, x1, y1);
            if(dist < minDist) {
                minDist = dist;
                minI = negIndex;
                minJ = posIndex;
            }
        }
    }

    x0 = pt.xs[minI];
    y0 = pt.ys[minI];
    x1 = pt.xs[minJ];
    y1 = pt.ys[minJ];

    let negK = (x0-x1)/(y1-y0);
    // 小优化：针对中垂线和标签的方向，选择恰当的初值
    let w2 = 10;
    if(negK >= 0) {
        w2 = (negK * (y0 - y1) <= 0) ? 10 : -10;
    }
    else {
        w2 = (negK * (y0 - y1) <= 0) ? -10 : 10;
    }
    let w1 = (-w2) * negK;
    let b  = (-w2) * ((y1*y1-y0*y0+x1*x1-x0*x0)/(2*(y1-y0)));

    drawLine(w1, w2, b, 1);

    pt.setArgs(w1, w2, b);
    let count = 0;

    let acc = 1;
    let saf = 1; // self-adapted-factor 自适应的学习率因子

    let timer = setInterval(function() {
    // while(true) {
        count++;
        let classified = true;
        for(let c = 0; c < pt.xs.length; c++) {
            let test = pt.label[c] * pt.Classifier(pt.xs[c], pt.ys[c]);
            if(test <= 0) {
                classified = false;
                // 小优化：学习率自适应
                saf = Math.exp(-(acc+0.5))+1;
                w1 += saf * STEP * pt.label[c] * pt.xs[c];
                w2 += saf * STEP * pt.label[c] * pt.ys[c];
                acc = Math.min(STEP * pt.label[c] * pt.xs[c], STEP * pt.label[c] * pt.ys[c]);
                b  += STEP * pt.label[c] * 50; // 截距的步长要长一点（玄学）
                pt.setArgs(w1, w2, b);

                cv.Clear();
                plot(pt.xs, pt.ys, pt.label, cv);
                drawLine(w1, w2, b, saf);
            }
        }

        // 检查是否所有样本均被正确分类
        if(classified === true) {
            clearInterval(timer);
            cv.Clear();
            // let newlabel = new Array();
            // for(let i = 0; i < pt.xs.length; i++) {
            //     newlabel[i] = (pt.Classifier(pt.xs[i], pt.ys[i]) * pt.label[i] <= 0) ? -1 : 1;
            // }
            plot(pt.xs, pt.ys, pt.label, cv);
            w1 = pt.args[0];
            w2 = pt.args[1];
            b = pt.args[2];
            drawLine(w1, w2, b, saf);
            return;
            // break;
        }
    // }
    }, 0);

    console.log('SGD迭代次数=' + count);

    drawLine(w1, w2, b, saf);

    return timer;
}

function plot(xs, ys, label, cv) {
    for(let i = 0; i < xs.length; i++) {
        let color = null;
        if(label[i] >= 0) {
            color = '#ff0000';
        }
        else {
            color = '#0000ff';
        }
        cv.Circle([xs[i], ys[i]], 3, color);
    }
}
