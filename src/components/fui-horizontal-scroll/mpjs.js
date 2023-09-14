// 本文件由FirstUI授权予杭州悦灵筑梦科技有限公司（手机号：    1 8267    1 48206，身份证尾号：7YRU4J）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
// #ifndef APP-PLUS || MP-WEIXIN || H5

export default {
	methods: {
		scrollHandler(event) {
			const detail = event.detail
			const scrollWidth = detail.scrollWidth
			const scrollLeft = detail.scrollLeft
			const width = this.width
			const scrollBarWidth = this.bgWidth
			const blockWidth = this.blockWidth
			const x = scrollLeft / (scrollWidth - width) * (scrollBarWidth - blockWidth)
			this.transform = `translate3d(${x}px,0,0)`
		},
		scrolltoupper(event) {
			this.scrollEvent('left')
			this.transform = 'translate3d(0,0,0)'
		},
		scrolltolower(event) {
			this.scrollEvent('right')
			const x = this.bgWidth - this.blockWidth
			this.transform = `translate3d(${x}px,0,0)`
		}
	}
}

// #endif

// #ifdef APP-PLUS|| MP-WEIXIN || H5
export default {}
// #endif
