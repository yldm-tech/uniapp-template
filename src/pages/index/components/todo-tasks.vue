<template>
  <view>
    <text class="text-xl font-bold mx-5 mb-2 block">My Tasks</text>
    <view class="grid grid-rows-7 grid-flow-col gap-1 h-[420px] mx-3">
      <view
        v-for="item in items"
        :key="item.id"
        class="bg-cover bg-center bg-no-repeat rounded-3xl my-1 mx-1 shadow-lg"
        :class="item.class"
      >
        <view class="flex justify-between">
          <view class="py-5 pl-4">
            <image class="w-[60px]" :src="item.contentImage" mode="widthFix" />
            <view class="text-white text-bold my-3">{{ item.content }}</view>
            <view class="text-white text-xs my-3">{{ item.count }} tasks</view>
          </view>
          <view
            class="px-2 py-3 flex"
            :class="{ 'items-end': item.id % 2 == 0, 'pb-10': item.id == 2 }"
          >
            <image class="w-5 h-5" src="/static/images/arrow.png" mode="scaleToFill" />
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  {
    id: 1,
    class: 'row-span-4 shadow-pink-400 bg-gradient-to-r from-pink-600 to-pink-500',
    contentImage: '/static/images/1.png',
    content: 'Mobile App Design',
    count: 21,
  },
  {
    id: 2,
    class: 'row-span-3 shadow-purple-400 bg-gradient-to-r from-purple-600 to-purple-500',
    contentImage: '/static/images/3.png',
    content: 'Web App Design',
    count: 12,
  },
  {
    id: 3,
    class: 'row-span-3 shadow-orange-400 bg-gradient-to-r from-orange-500 to-orange-400',
    contentImage: '/static/images/2.png',
    content: 'Logo',
    count: 32,
  },
  {
    id: 4,
    class: 'row-span-4 shadow-cyan-300 bg-gradient-to-r from-cyan-400 to-cyan-300',
    contentImage: '/static/images/4.png',
    content: 'Website Design',
    count: 14,
  },
])
</script>
