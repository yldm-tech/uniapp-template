// 本文件由FirstUI授权予杭州悦灵筑梦科技有限公司（会员ID： 2 1 87，营业执照号：  9   133   0 105M A    CJ  7Y RU4J）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
class FillStyleRadialGradient {
    constructor(x0, y0, r0, x1, y1, r1) {
        this._start_pos = { _x: x0, _y: y0, _r: r0 };
        this._end_pos = { _x: x1, _y: y1, _r: r1 };
        this._stop_count = 0;
        this._stops = [0, 0, 0, 0, 0];
    }

    addColorStop(pos, color) {
        if (this._stop_count < 5 && 0.0 <= pos && pos <= 1.0) {
            this._stops[this._stop_count] = { _pos: pos, _color: color };
            this._stop_count++;
        }
    }
}

export default FillStyleRadialGradient;