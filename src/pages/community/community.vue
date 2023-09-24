<script setup lang="ts"></script>

<template>
  <scroll-view scroll-y>
    <view
      v-for="(item, index) in 10"
      :key="index"
      class="community h-48 w-full bg-white my-3 rounded-3"
    >
      <view class="px-3 py-2">公告区</view>
      <view class="flex">
        <view class="w-1/2 bg-blue-200 m-3" v-for="(item, index) in 4" :key="index">
          <view class="community__content__title">公告标题</view>
          <view class="community__content__desc">公告内容</view>
          <view class="community__content__time">2021-09-26 12:00</view>
        </view>
      </view>
    </view>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
