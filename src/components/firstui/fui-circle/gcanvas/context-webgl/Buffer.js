// 本文件由FirstUI授权予杭州悦灵筑梦科技有限公司（会员ID：2 1 8 7，营业执照号： 9  1330 1  05MA C J7    YR  U   4J）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
import {getTransferedObjectUUID} from './classUtils';

const name = 'WebGLBuffer';

function uuid(id) {
    return getTransferedObjectUUID(name, id);
}

export default class WebGLBuffer {
    className = name;

    constructor(id) {
        this.id = id;
    }

    static uuid = uuid;

    uuid() {
        return uuid(this.id);
    }
}