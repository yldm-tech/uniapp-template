// 本文件由FirstUI授权予杭州悦灵筑梦科技有限公司（手机号：  18    2  6 7148 206，身份证尾号：7YRU4J）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
// #ifndef APP-PLUS || MP-WEIXIN || H5
export default {
	data() {
		return {
			startX: 0,
			startY: 0,
			lastLeft: 0,
			lastTop: 0,
			transform: ''
		}
	},
	methods: {
		touchstart(e) {
			if (this.direction === 'none') return;
			const touch = e.touches || e.changedTouches
			if (this.direction === 'all') {
				this.startX = touch[0].clientX
				this.startY = touch[0].clientY
			} else if (this.direction === 'vertical') {
				this.startY = touch[0].clientY
			} else {
				this.startX = touch[0].clientX
			}

		},
		getLeft(pageX) {
			var left = pageX - this.startX + this.lastLeft;
			left = left < -this.eLeft ? -this.eLeft : left;
			left = left > this.maxWidth ? this.maxWidth : left;

			return left
		},
		getTop(pageY, state) {
			var top = pageY - this.startY + this.lastTop;
			top = top < -this.eTop ? -this.eTop : top;
			top = top > this.maxHeight ? this.maxHeight : top;

			return top
		},
		touchmove(e) {
			if (this.direction == 'none') return;
			const touch = e.touches || e.changedTouches
			let pageX = touch[0].clientX,
				pageY = touch[0].clientY;

			let left = 0,
				top = 0;
			if (this.direction === 'all') {
				left = this.getLeft(pageX)
				this.startX = pageX
				top = this.getTop(pageY)
				this.startY = pageY
			} else if (this.direction === 'vertical') {
				top = this.getTop(pageY)
				this.startY = pageY
			} else {
				left = this.getLeft(pageX)
				this.startX = pageX
			}
			this.lastLeft = left
			this.lastTop = top
			this.transform = `translate3d(${left}px,${top}px,0)`
			this.change({
				left,
				top
			})
		}
	}
}

// #endif

// #ifdef APP-PLUS|| MP-WEIXIN || H5
export default {}
// #endif
