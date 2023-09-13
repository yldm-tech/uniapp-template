<template>
  <view class="flex justify-between border-b-1 py-2" v-for="item in contents" :key="item.id">
    <text class="mx-5 text-md">9 AM</text>
    <view
      class="flex-1 my-1 rounded-4 px-6 py-2 shadow-lg shadow-cyan-200 bg-gradient-to-r from-cyan-400 to-cyan-500"
    >
      <text class="block text-white text-sm">{{ item.title }}</text>
      <text class="block text-white text-xs">{{ item.duration }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
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
]
</script>
