<template>
  <view class="todo-container flex justify-between px-5 py-5">
    <view class="flex flex-col items-center w-full">
      <image class="h-30 w-30" src="/static/images/avatar.png" mode="scaleToFill" />
      <view class="py-2 text-xl font-bold">Evan Hu</view>
      <view class="text-gray-400">xiaomo@xiaomo.info</view>
      <view class="w-full my-5">
        <fui-button>Edit Profile</fui-button>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.todo-container {
  /* #ifdef APP-PLUS */
  padding-top: var(--status-bar-height);
  height: calc(100% - var(--status-bar-height));
  /* #endif */
  /* #ifdef MP-WEIXIN */
  padding-top: calc(var(--status-bar-height) + 40rpx);
  /* #endif */
}
</style>
