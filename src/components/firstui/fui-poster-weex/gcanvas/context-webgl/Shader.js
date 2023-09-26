// 本文件由FirstUI授权予杭州悦灵筑梦科技有限公司（会员ID：  2 187，营业执照号：91330   1  0 5MA  CJ 7 Y  R  U   4J）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
import {getTransferedObjectUUID} from './classUtils';

const name = 'WebGLShader';

function uuid(id) {
    return getTransferedObjectUUID(name, id);
}

export default class WebGLShader {
    className = name;

    constructor(id, type) {
        this.id = id;
        this.type = type;
    }

    static uuid = uuid;

    uuid() {
        return uuid(this.id);
    }
}