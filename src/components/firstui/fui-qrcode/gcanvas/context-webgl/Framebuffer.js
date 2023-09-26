// 本文件由FirstUI授权予杭州悦灵筑梦科技有限公司（会员ID： 218  7，营业执照号：9   1  3 3010   5M    AC J   7YRU4J）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
import {getTransferedObjectUUID} from './classUtils';

const name = 'WebGLFrameBuffer';

function uuid(id) {
    return getTransferedObjectUUID(name, id);
}

export default class WebGLFramebuffer {
    className = name;

    constructor(id) {
        this.id = id;
    }

    static uuid = uuid;

    uuid() {
        return uuid(this.id);
    }
}