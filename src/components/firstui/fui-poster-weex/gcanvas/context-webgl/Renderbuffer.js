// 本文件由FirstUI授权予杭州悦灵筑梦科技有限公司（会员ID： 2  187，营业执照号：913 30105M  A CJ7  YR  U        4 J）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
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