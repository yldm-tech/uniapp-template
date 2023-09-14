<template>
  <todo-header />
  <view>
    <image
      @tap="goHome"
      class="w-24 absolute top-10 right-5"
      src="/static/images/skip.png"
      mode="widthFix"
    />

    <image class="w-full mt-24" src="/static/images/hero.png" mode="widthFix" />

    <view class="text-2xl w-full text-center py-5">Manage Your Tasks</view>
    <view class="w-full text-center text-md px-10 text-gray-600"
      >Organize all your to-do's analyst your projects. Color tag them to set priority and
      categories
    </view>

    <view @tap="goHome" class="text-center py-5">
      <image class="w-28" src="/static/images/next.png" mode="widthFix" />
    </view>
  </view>
</template>

<script lang="ts" setup>
const goHome = () => {
  uni.switchTab({
    url: '/pages/index/index',
  })
}
</script>

<style lang="scss" scoped></style>
