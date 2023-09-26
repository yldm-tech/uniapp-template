// 本文件由FirstUI授权予杭州悦灵筑梦科技有限公司（会员ID： 218  7，营业执照号： 9 133 01 0 5M    ACJ   7Y R  U 4 J）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
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