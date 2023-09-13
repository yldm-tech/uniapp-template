<script setup lang="ts">
import { ref } from 'vue'
import TodoContent from './components/todo-content.vue'

// tabs 数据
const orderTabs = ref([
  { orderState: 0, title: 'Mon' },
  { orderState: 1, title: 'Tue' },
  { orderState: 2, title: 'Thu' },
  { orderState: 3, title: 'Wen' },
  { orderState: 4, title: 'Fri' },
])

const activeIndex = ref(0)
</script>

<template>
  <view class="flex justify-between mt-12">
    <view class="mx-5">
      <text class="block text-2xl font-bold">June,03</text>
      <text class="block text-sm text-gray-500">16 tasks Today</text>
    </view>
    <view>
      <image class="w-[80px]" src="/static/images/cal_button.png" mode="widthFix" />
    </view>
  </view>

  <view class="h-full flex flex-col mx-3">
    <!-- tabs -->
    <view class="flex leading-10 my-3 relative z-10">
      <view
        :class="{ 'text-white bg-orange-400': activeIndex === index }"
        class="flex flex-col flex-1 justify-between bg-white rounded-12 text-center py-6 text-md shadow-sm mx-2"
        @tap="($event: any) => (activeIndex = index)"
        v-for="(item, index) in orderTabs"
        :key="item.title"
      >
        <text class="block text-3xl font-black">{{ index + 1 }}</text>
        <text class="block text-xl font-normal">{{ item.title }}</text>
      </view>
    </view>
    <!-- 滑动容器 -->
    <swiper
      class="swiper"
      :current="activeIndex"
      @change="($event: any) => (activeIndex = $event.detail.current)"
    >
      <!-- 滑动项 -->
      <swiper-item v-for="item in orderTabs" :key="item.title">
        <todo-content />
      </swiper-item>
    </swiper>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
}
</style>
