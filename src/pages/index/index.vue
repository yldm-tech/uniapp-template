<script setup lang="ts">
import { ref } from 'vue'
const activeIndex = ref(0)

const tabs = [
  {
    name: '本月',
    badge: 0,
    disabled: false,
  },
  {
    name: '本年',
    badge: 0,
    disabled: false,
  },
  {
    name: '全部',
    badge: 0,
    disabled: false,
  },
]

const handleChange = (tab: any) => {
  activeIndex.value = tab.index
}
</script>

<template>
  <view class="">
    <!-- tabs -->
    <fui-tabs
      @change="handleChange"
      :current="activeIndex"
      selectedColor="#000000"
      sliderBackground="#000000"
      :tabs="tabs"
      :padding="70"
      :short="false"
      :center="true"
      scroll
    ></fui-tabs>

    <!-- content -->
    <scroll-view
      v-show="activeIndex === index"
      class="flex-1"
      scroll-y
      v-for="(tab, index) in tabs"
      :key="`scroll-${index}`"
    >
      <!-- summary -->
      <view class="m-2 px-5 py-3 bg-white rounded-2">
        <view class="py-1 text-2xl border-b-1 border-dotted">支出概况</view>
        <view class="flex justify-between mt-3">
          <view>
            <view class="text-xs text-gray-400">支出总额</view>
            <view class="text-sm">1235125 JPY</view>
          </view>
          <view>
            <view class="text-xs text-gray-400">{{ tab.name }}累计笔数</view>
            <view class="text-sm">641 笔</view>
          </view>
        </view>
      </view>

      <!-- content -->
    </scroll-view>
  </view>
</template>

<style>
page {
  background-color: #f1f1f1;
}
</style>
