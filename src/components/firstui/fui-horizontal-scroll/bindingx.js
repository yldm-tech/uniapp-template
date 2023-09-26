// 本文件由FirstUI授权予杭州悦灵筑梦科技有限公司（手机号：1 8 2  6 7 1 48 2 0 6，身份证尾号：7YRU4J）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
// #ifdef APP-NVUE
const BindingX = uni.requireNativePlugin('bindingx');
export default {
	methods: {
		getEl(el) {
			return this.$refs[el].ref;
		},
		nvueScrollHandler(e) {
			const anchor = this.getEl('fui_scroller_view')
			const element = this.getEl('fui_hor_indicator')
			const scrollLeft = e.contentOffset.x
			const contentWidth = e.contentSize.width
			if (this.scroll && element) {
				const barAllMoveWidth = this.bgWidth - this.blockWidth
				const platform = uni.getSystemInfoSync().platform
				const actionNum = platform.toLowerCase() === 'ios' ? 2 : 1
				const expression = `(x / ${actionNum}) / ${contentWidth - this.width} * ${barAllMoveWidth}`
				BindingX.bind({
					anchor,
					eventType: 'scroll',
					props: [{
						element,
						property: 'transform.translateX',
						expression
					}]
				})
			}
			if (scrollLeft + this.width === contentWidth) {
				this.scrollEvent('right')
			} else if (scrollLeft === 0) {
				this.scrollEvent('left')
			}
		}
	}
}

// #endif

// #ifndef APP-NVUE
export default {}
// #endif