<script setup lang="ts">
import { ref } from 'vue'
import { randomNum, randomTime } from '@/utils'
const activeIndex = ref(0)

const tabs = [
  {
    name: '2023年',
    badge: 0,
    disabled: false,
  },
  {
    name: '2022年',
    badge: 0,
    disabled: false,
  },
  {
    name: '2021年',
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
    <view class="bg-white pb-3">
      <fui-tabs
        @change="handleChange"
        :current="activeIndex"
        selectedColor="#000000"
        sliderBackground="#000000"
        :tabs="tabs"
        :padding="50"
        :short="false"
        :center="true"
        scroll
      ></fui-tabs>
    </view>

    <!-- view -->
    <scroll-view
      v-show="activeIndex === index"
      class="flex-1"
      scroll-y
      v-for="(tab, index) in tabs"
      :key="`scroll-${index}`"
    >
      <!-- card -->
      <view class="my-3 mx-2 p-5 bg-white rounded-3" v-for="(item, index) in 20" :key="index">
        <text class="text-xl my-2">{{ tab.name }} 10月30日</text>
        <view v-for="(item, index) in randomNum(1, 3)" :key="index">
          <!-- in -->
          <view>
            <image class="w-3 h-3" src="/static/images/in.png" mode="scaleToFill" />
            <text class="inline-block px-1 py-2 w-12">Enter</text>
            <text class="inline-block px-1 text-sm py-2 w-12 text-gray-400">12:35</text>
            <text class="inline-block px-1 py-2 w-32 text-sm">王子北</text>
          </view>
          <!-- out -->
          <view>
            <image class="w-3 h-3" src="/static/images/out.png" mode="scaleToFill" />
            <text class="inline-block px-1 py-2 w-12">Exit</text>
            <text class="inline-block px-1 py-2 w-12 text-sm text-gray-400">{{
              randomTime()
            }}</text>
            <text class="inline-block px-1 py-2 w-32 text-sm">王子南</text>
          </view>
          <!-- total -->
          <view class="flex justify-between rounded-1 bg-gray-50 my-3 py-1 px-3">
            <view>
              <text class="">合計</text>
              <text class="text-gray-400 mx-5">Total</text>
            </view>
            <text>¥ {{ randomNum(300, 2300) }}</text>
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
