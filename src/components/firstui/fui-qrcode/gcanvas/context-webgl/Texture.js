// 本文件由FirstUI授权予杭州悦灵筑梦科技有限公司（会员ID：2 1 8 7，营业执照号：9  1   33  01 05  M     A CJ7 YRU4J）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
import {getTransferedObjectUUID} from './classUtils';

const name = 'WebGLTexture';

function uuid(id) {
    return getTransferedObjectUUID(name, id);
}

export default class WebGLTexture {
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