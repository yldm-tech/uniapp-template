<template>
  <view class="container flex justify-between px-5 py-5">
    <view class="left">
      <image class="w-10 h-10 inline-block" src="/static/images/menu.png" mode="scaleToFill" />
      <text class="ml-6 text-gray-500">June 03,2023</text>
    </view>
    <view class="right">
      <image class="h-10 w-10" src="/static/images/avatar.png" mode="scaleToFill" />
    </view>
  </view>
</template>

<style lang="scss" scoped>
.container {
  /* #ifdef APP-PLUS */
  padding-top: var(--status-bar-height);
  height: calc(100% - var(--status-bar-height));
  /* #endif */
  /* #ifdef MP-WEIXIN || MP */
  padding-top: calc(var(--status-bar-height) + 40rpx);
  /* #endif */
  min-height: 100%;
}
</style>
