<script setup lang="ts">
import { randomNum } from '@/utils'

const items = [
  {
    id: 1,
    name: '/static/images/aichi.png',
    value: 1000,
  },
  {
    id: 2,
    name: '/static/images/fokukita.png',
    value: 2000,
  },
  {
    id: 3,
    name: '/static/images/hirojima.png',
    value: 3000,
  },
  {
    id: 4,
    name: '/static/images/honyon.png',
    value: 4000,
  },
  {
    id: 5,
    name: '/static/images/koube.png',
    value: 5000,
  },
  {
    id: 6,
    name: '/static/images/nagoya.png',
    value: 6000,
  },
  {
    id: 7,
    name: '/static/images/nexco.png',
    value: 7000,
  },
]
</script>

<template>
  <view class="bg-gray-100">
    <view
      class="flex justify-between rounded-3 bg-white m-2 p-3"
      v-for="(item, index) in items"
      :key="index"
    >
      <view class="px-1">
        <image class="h-10" :src="item.name" mode="heightFix" />
      </view>
      <view class="pr-5">
        <view class="py-1 text-xs text-gray-400 font-normal">ポイント</view>
        <view class="py-1 float-right">{{ randomNum(400, 3000) }}</view>
      </view>
    </view>
  </view>
</template>
