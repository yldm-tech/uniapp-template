// 本文件由FirstUI授权予杭州悦灵筑梦科技有限公司（会员ID：2 1  87，营业执照号：91    33 0   1  0  5M A CJ 7Y RU 4J）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
export default class WebGLShaderPrecisionFormat {
    className = 'WebGLShaderPrecisionFormat';

    constructor({
        rangeMin, rangeMax, precision
    }) {
        this.rangeMin = rangeMin;
        this.rangeMax = rangeMax;
        this.precision = precision;
    }
}