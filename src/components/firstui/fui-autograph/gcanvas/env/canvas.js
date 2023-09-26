// 本文件由FirstUI授权予杭州悦灵筑梦科技有限公司（手机号：1    8 267  148  2 06，身份证尾号：7YRU4J）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
import GContext2D from '../context-2d/RenderingContext';
import GContextWebGL from '../context-webgl/RenderingContext';

export default class GCanvas {

    // static GBridge = null;

    id = null;

    _needRender = true;

    constructor(id, { disableAutoSwap }) {
        this.id = id;

        this._disableAutoSwap = disableAutoSwap;
        if (disableAutoSwap) {
            this._swapBuffers = () => {
                GCanvas.GBridge.render(this.id);
            }
        }
    }

    getContext(type) {

        let context = null;

        if (type.match(/webgl/i)) {
            context = new GContextWebGL(this);

            context.componentId = this.id;

            if (!this._disableAutoSwap) {
                const render = () => {
                    if (this._needRender) {
                        GCanvas.GBridge.render(this.id);
                        this._needRender = false;
                    }
                }
                setInterval(render, 16);
            }

            GCanvas.GBridge.callSetContextType(this.id, 1); // 0 for 2d; 1 for webgl
        } else if (type.match(/2d/i)) {
            context = new GContext2D(this);

            context.componentId = this.id;

//             const render = ( callback ) => {
//
//                 const commands = context._drawCommands;
//                 context._drawCommands = '';
//
//                 GCanvas.GBridge.render2d(this.id, commands, callback);
//                 this._needRender = false;
//             }
// 			//draw方法触发
// 			context._flush = render;
//             //setInterval(render, 16);

            GCanvas.GBridge.callSetContextType(this.id, 0);
        } else {
            throw new Error('not supported context ' + type);
        }

        return context;

    }

    reset() {
        GCanvas.GBridge.callReset(this.id);
    }


}