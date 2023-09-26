<template>
	<!--本文件由FirstUI授权予杭州悦灵筑梦科技有限公司（会员ID：21 8  7，营业执照号： 913  3 0    105M    ACJ 7YR   U4 J）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-timeaxis__wrap"
		:style="{paddingTop:padding[0] || 0,paddingRight:padding[1]||0,paddingBottom:padding[2] || padding[0]||0,paddingLeft:padding[3] || padding[1]||0,background:background}">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: "fui-timeaxis",
		props: {
			padding: {
				type: Array,
				default () {
					return []
				}
			},
			background: {
				type: String,
				default: 'transparent'
			},
			leftWidth: {
				type: [Number, String],
				default: 0
			},
			width: {
				type: [Number, String],
				default: 48
			},
			// #ifdef APP-NVUE
			lineWidth: {
				type: [Number, String],
				default: 0.5
			},
			// #endif
			// #ifndef APP-NVUE
			lineWidth: {
				type: [Number, String],
				default: 1
			}
			// #endif

		},
		provide() {
			return {
				timeaxis: this
			}
		},
		created() {
			this.children = []
		},
		watch: {
			width(val) {
				this.children.forEach(item => {
					item.width = val
				})
			},
			lineWidth(val) {
				this.children.forEach(item => {
					item.lineWidth = val
				})
			},
			leftWidth(val) {
				this.children.forEach(item => {
					item.leftWidth = val
				})
			}
		}
	}
</script>

<style scoped>
	.fui-timeaxis__wrap {
		/* #ifndef APP-NVUE */
		width: 100%;
		box-sizing: border-box;
		/* #endif */
	}
</style>