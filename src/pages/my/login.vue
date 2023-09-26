<template>
  <view class="root">
    <view
      @click="goIndex"
      class="fixed cursor-pointer right-5 top-15 px-5 py-1 bg-gray-50 rounded-5 text-gray-600"
      >skip</view
    >
    <view class="flex justify-center my-32">
      <image class="w-48" src="/static/images/vector.png" mode="aspectFit"></image>
    </view>

    <view class="header">
      <view class="text-center text-3xl py-2">
        <text>MY ETC</text>
      </view>
      <view class="text-center text-sm py-2 text-gray-600">
        <text>ETC請求書情報を迅速に把握する</text>
      </view>
    </view>

    <view class="mx-5 mt-10">
      <fui-button class="rounded-10 text-center" type="primary"> Lineでログイン</fui-button>
    </view>

    <view class="mx-5 my-5 text-xs">
      <text class="text-gray-500 text-sm text-center">
        <text>当アプリにログインすることで、以下の</text>
        <text @click="handleClick('terms')" class="text-purple-600 cursor-pointer"> 利用規約 </text>
        <text>と</text>
        <text @click="handleClick('privacy')" class="text-purple-600 cursor-pointer">
          プライバシーポリシー
        </text>
        <text>に同意するものとします。</text>
      </text>
    </view>
  </view>
</template>

<script setup lang="ts">
const goIndex = () => {
  uni.reLaunch({
    url: '/pages/index/index',
  })
}

const handleClick = (content: string) => {
  console.log(content)
}
</script>
