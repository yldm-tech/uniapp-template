// 本文件由FirstUI授权予杭州悦灵筑梦科技有限公司（手机号：  1 82    67 148 2 06，身份证尾号：7YRU4J）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
/*!
 * 剪贴板
 *
 * 官网地址：https://firstui.cn/
 * 文档地址：https://doc.firstui.cn/
 */
// #ifdef H5
import ClipboardJS from "./clipboard.min.js"
// #endif

/**
 * data 需要复制的数据
 * callback 回调
 * e 当用户点击后需要先请求接口再进行复制时，需要传入此参数（H5端）
 * **/
const getClipboardData = function(data, callback, e) {
	// #ifdef APP-PLUS || MP
	uni.setClipboardData({
		data: data,
		success(res) {
			("function" == typeof callback) && callback(true)
		},
		fail(res) {
			("function" == typeof callback) && callback(false)
		}
	})
	// #endif

	// #ifdef H5
	let event = window.event || e || {}
	let clipboard = new ClipboardJS("", {
		text: () => data
	})
	clipboard.on('success', (e) => {
		("function" == typeof callback) && callback(true)
		clipboard.off('success')
		clipboard.off('error')
		clipboard.destroy()
	});
	clipboard.on('error', (e) => {
		("function" == typeof callback) && callback(false)
		clipboard.off('success')
		clipboard.off('error')
		clipboard.destroy()
	});
	clipboard.onClick(event)
	// #endif
}
export default {
	getClipboardData: getClipboardData
};