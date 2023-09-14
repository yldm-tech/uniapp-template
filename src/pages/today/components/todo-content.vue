<template>
  <scroll-view
    scroll-y
    :refresher-enabled="false"
    :refresher-triggered="triggered"
    :refresher-threshold="100"
    refresher-background="lightgreen"
    @refresherpulling="onPulling"
    @refresherrefresh="onRefresh"
    @refresherrestore="onRestore"
    @refresherabort="onAbort"
    class="h-[500px]"
  >
    <view
      class="flex justify-between items-center border-b-1 py-2 px-2"
      v-for="item in contents"
      :key="item.id"
    >
      <text class="mx-5 text-md">9 AM</text>
      <view
        class="flex-1 my-1 rounded-4 px-6 py-2 shadow-lg shadow-cyan-200 bg-gradient-to-r from-cyan-400 to-cyan-500"
      >
        <text class="text-white text-sm">{{ item.title }}</text>
        <text class="block text-white text-xs">{{ item.duration }}</text>
      </view>
    </view>
  </scroll-view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const triggered = ref()
const _freshing = ref(false)
const onPulling = (e: any) => {
  console.log('on pulling', e)
}
const onRefresh = () => {
  if (_freshing.value) return
  _freshing.value = true
  setTimeout(() => {
    triggered.value = false
    _freshing.value = false
  }, 3000)
}
const onRestore = () => {
  triggered.value = 'restore' // 需要重置
  console.log('onRestore')
}
const onAbort = () => {
  console.log('onAbort')
}
const contents = [
  {
    id: 1,
    time: '8 AM',
    title: 'Breakfast with Simon',
    duration: '9am - 12am',
  },
  {
    id: 2,
    time: '8 AM',
    title: 'Breakfast with Simon',
    duration: '9am - 12am',
  },
  {
    id: 3,
    time: '8 AM',
    title: 'Breakfast with Simon',
    duration: '9am - 12am',
  },
  {
    id: 4,
    time: '8 AM',
    title: 'Breakfast with Simon',
    duration: '9am - 12am',
  },
  {
    id: 5,
    time: '8 AM',
    title: 'Breakfast with Simon',
    duration: '9am - 12am',
  },
  {
    id: 6,
    time: '8 AM',
    title: 'Breakfast with Simon',
    duration: '9am - 12am',
  },
  {
    id: 7,
    time: '8 AM',
    title: 'Breakfast with Simon',
    duration: '9am - 12am',
  },
  {
    id: 8,
    time: '8 AM',
    title: 'Breakfast with Simon',
    duration: '9am - 12am',
  },
  {
    id: 9,
    time: '8 AM',
    title: 'Breakfast with Simon',
    duration: '9am - 12am',
  },
  {
    id: 10,
    time: '8 AM',
    title: 'Breakfast with Simon',
    duration: '9am - 12am',
  },
]
</script>
