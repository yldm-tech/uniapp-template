// 本文件由FirstUI授权予杭州悦灵筑梦科技有限公司（会员ID：21   87，营业执照号：   9133010 5 M A CJ      7 Y RU4  J）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
import {getTransferedObjectUUID} from './classUtils';

const name = 'WebGLProgram';

function uuid(id) {
    return getTransferedObjectUUID(name, id);
}

export default class WebGLProgram {
    className = name;

    constructor(id) {
        this.id = id;
    }

    static uuid = uuid;

    uuid() {
        return uuid(this.id);
    }
}