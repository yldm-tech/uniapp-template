<script setup lang="ts">
import { ref } from 'vue'

// tabs 数据
const orderTabs = ref([
  { orderState: 0, title: '全部' },
  { orderState: 1, title: '待付款' },
  { orderState: 2, title: '待发货' },
  { orderState: 3, title: '待收货' },
  { orderState: 4, title: '待评价' },
])
// 定义 props
const query = defineProps<{
  type: string
}>()

const activeIndex = ref(0)
</script>

<template>
  <view class="h-full flex flex-col bg-white">
    <!-- tabs -->
    <view class="flex justify-around leading-10 my-3 bg-white shadow-md relative z-10">
      <text
        class="flex-1 text-center p-2 text-md text-[#262626]"
        @tap="($event) => (activeIndex = index)"
        v-for="(item, index) in orderTabs"
        :key="item.title"
      >
        {{ item.title }}
      </text>
      <!-- 游标 -->
      <view
        class="absolute bottom-0 left-0 w-[20%] bg-green-600 py-0.5 transition-all duration-500 h-1"
        :style="{ left: (activeIndex * 100) / orderTabs.length + '%' }"
      ></view>
    </view>
    <!-- 滑动容器 -->
    <swiper
      class="swiper"
      :current="activeIndex"
      @change="($event) => (activeIndex = $event.detail.current)"
    >
      <!-- 滑动项 -->
      <swiper-item v-for="item in orderTabs" :key="item.title">
        hello {{ activeIndex }}
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
