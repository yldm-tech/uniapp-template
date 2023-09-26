// 本文件由FirstUI授权予杭州悦灵筑梦科技有限公司（会员ID：21  8 7，营业执照号：   91 33  0 1 05  M A  CJ  7 YRU 4J）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
import {getTransferedObjectUUID} from './classUtils';

const name = 'WebGLRenderBuffer';

function uuid(id) {
    return getTransferedObjectUUID(name, id);
}

export default class WebGLRenderbuffer {
    className = name;

    constructor(id) {
        this.id = id;
    }

    static uuid = uuid;

    uuid() {
        return uuid(this.id);
    }
}