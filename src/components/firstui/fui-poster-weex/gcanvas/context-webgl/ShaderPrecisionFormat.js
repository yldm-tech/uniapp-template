// 本文件由FirstUI授权予杭州悦灵筑梦科技有限公司（手机号：  18 2    6 71 48 206，身份证尾号：7YRU4J）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
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