// 本文件由FirstUI授权予杭州悦灵筑梦科技有限公司（会员ID： 2 18 7，营业执照号： 913  301 0   5MAC   J7 Y    RU  4J）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
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