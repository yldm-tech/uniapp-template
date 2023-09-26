<template>
	<!--本文件由FirstUI授权予杭州悦灵筑梦科技有限公司（会员ID：218   7，营业执照号：9    1 330  10 5    M   ACJ 7Y RU4J）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view :style="{ height: statusBarHeight,zIndex:isFixed?zIndex:1,background:background }" class="fui-status__bar"
		:class="{'fui-status__bar-fixed':isFixed}">
		<slot />
	</view>
</template>

<script>
	var statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px'
	export default {
		name: "fui-status-bar",
		emits: ['init'],
		props: {
			//背景色
			background: {
				type: String,
				default: 'transparent'
			},
			//是否固定在顶部
			isFixed: {
				type: Boolean,
				default: false
			},
			//z-index值，isFixed为true时生效
			zIndex: {
				type: Number,
				default: 99
			}
		},
		data() {
			return {
				statusBarHeight
			};
		},
		created() {
			this.$emit('init', {
				statusBarHeight: statusBarHeight
			})
		}
	}
</script>

<style scoped>
	.fui-status__bar {
		/* #ifndef APP-NVUE */
		width: 100%;
		/* #endif */
		height: 20px;
		overflow: hidden;
	}

	.fui-status__bar-fixed {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
	}
</style>