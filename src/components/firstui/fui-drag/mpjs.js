// 本文件由FirstUI授权予杭州悦灵筑梦科技有限公司（手机号： 18 26  71   4 8 20 6，身份证尾号：7YRU4J）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
// #ifndef APP-PLUS || MP-WEIXIN || H5

export default {
	data() {
		return {
			current: -1,
			transX: '0px',
			transY: '0px',
			startTouch: null,
			tDragging: false,
			sId: null,
			preStartKey: null
		}
	},
	methods: {
		outOfRange(x1, y1, x2, y2, x3, y3) {
			return x1 < 0 || x1 >= y1 || x2 < 0 || x2 >= y2 || x3 < 0 || x3 >= y3
		},
		listSort(sKey, eKey) {
			let endRealKey = -1;
			this.list.forEach((item) => {
				if (item.sortKey === eKey) endRealKey = item.realKey;
			});

			return this.list.map((item) => {
				let cKey = item.sortKey;
				let rKey = item.realKey;
				if (sKey < eKey) {
					if (cKey > sKey && cKey <= eKey) {
						--rKey;
						--cKey;
					} else if (cKey === sKey) {
						rKey = endRealKey;
						cKey = eKey;
					}
				} else if (sKey > eKey) {
					if (cKey >= eKey && cKey < sKey) {
						++rKey;
						++cKey;
					} else if (cKey === sKey) {
						rKey = endRealKey;
						cKey = eKey;
					}
				}
				if (item.sortKey !== cKey) {
					let columns = Number(this.columns)
					item.transX = (cKey % columns) * this.cellWidth + "px";
					item.transY = Math.floor(cKey / columns) * this.cellHeight + "px";
					item.sortKey = cKey;
					item.realKey = rKey;
				}
				return item;
			});
		},
		emitsEvent(list, type) {
			let changeList = [],
				itemList = [];

			list.forEach((item) => {
				changeList[item.sortKey] = item;
			});

			changeList.forEach((item) => {
				itemList.push(item.entity);
			});
			if (type == "change") {
				this.change({
					itemList: itemList
				});
			} else {
				this.sortend({
					itemList: itemList
				});
			}
		},
		longPress(e) {
			if (!this.isDrag) return;
			let touch = e.changedTouches && e.changedTouches[0] ? e.changedTouches[0] : this.startTouch;
			if (!touch) return;
			this.current = Number(e.currentTarget.dataset.index);

			if (this.tDragging) return;
			//pageX
			this.transX = this.columns == 1 ? 0 : touch.clientX - (this.cellWidth / 2 + this.wrapLeft) + 'px';
			this.transY = touch.clientY - (this.cellHeight / 2 + this.wrapTop) + 'px';
			this.sId = touch.identifier;
			this.tDragging = true;
		},
		touchstart(e) {
			if (!this.isDrag) return;
			this.startTouch = e.changedTouches[0] || e.touches[0];
		},
		touchmove(e) {
			if (!this.isDrag || !this.tDragging) return;
			let touch = e.changedTouches[0] || e.touches[0];
			if (!touch || this.sId !== touch.identifier) return;
			let transX = this.columns == 1 ? 0 : touch.clientX - (this.cellWidth / 2 + this.wrapLeft);
			let transY = touch.clientY - (this.cellHeight / 2 + this.wrapTop);

			if (touch.clientY > this.windowHeight - this.cellHeight) {
				this.pageScroll({
					scrollTop: touch.pageY + this.cellHeight - this.windowHeight
				})
			} else if (touch.clientY < this.cellHeight) {
				this.pageScroll({
					scrollTop: touch.pageY - this.cellHeight
				})
			}
			this.transX = transX + 'px'
			this.transY = transY + 'px'

			let startKey = this.list[this.current].sortKey;
			let curX = Math.round(transX / this.cellWidth);
			let curY = Math.round(transY / this.cellHeight);
			let endKey = curX + Number(this.columns) * curY;

			if (this.outOfRange(curX, Number(this.columns), curY, this.rows, endKey, this.list.length)) return;

			if (startKey === endKey || startKey === this.preStartKey) return;
			this.preStartKey = startKey;

			let list = this.listSort(startKey, endKey);
			this.listChange({
				itemList: list
			})
			this.emitsEvent(list, "change");
		},
		touchend(e) {
			if (!this.isDrag || !this.tDragging) return;
			this.emitsEvent(this.list, "sortend");
			this.preStartKey = -1;
			this.tDragging = false;
			this.current = -1;
			this.transX = '0px';
			this.transY = '0px';
		}
	}
}

// #endif

// #ifdef APP-PLUS|| MP-WEIXIN || H5
export default {}
// #endif