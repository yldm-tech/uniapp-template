<template>
  <view class="mt-2 mx-5">
    <view>
      <text class="font-bold">Task Groups</text>
      <uni-badge
        class="uni-badge-left-margin bg-opacity-50"
        :text="items.length.toString()"
        type="primary"
        :customStyle="{ background: '#4335d6' }"
      />
    </view>

    <scroll-view scroll-y class="h-[500px]">
      <view class="w-full h-12 my-10" v-for="item in items" :key="item.id">
        <view
          class="flex justify-between border-[0.3px] border-gray-100 shadow-sm items-center rounded-3"
        >
          <view class="px-5 py-3">
            <view class="py-2">{{ item.title }}</view>
            <view class="text-xs text-gray-500">{{ item.id }} Tasks</view>
          </view>
          <view class="mr-3">
            <fui-circle
              :width="75"
              :percent="item.progress"
              :color="item.color"
              :background="item.bgColor"
              :foreground="item.color"
              :strokeWidth="3"
            ></fui-circle>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
const items = [
  {
    id: 1,
    title: 'Project 1',
    progress: 52,
    bgColor: '#E7F3FF',
    color: 'orange',
  },
  {
    id: 2,
    title: 'Project 2',
    progress: 44,
    bgColor: '#FFE9E1',
  },
  {
    id: 3,
    title: 'Project 3',
    progress: 60,
    bgColor: '#E7F3FF',
    color: '#4335d6',
  },
  {
    id: 4,
    title: 'Project 1',
    progress: 83,
    bgColor: '#E7F3FF',
    color: 'orange',
  },
  {
    id: 5,
    title: 'Project 2',
    progress: 12,
    bgColor: '#FFE9E1',
  },
  {
    id: 6,
    title: 'Project 3',
    progress: 32,
    bgColor: '#E7F3FF',
    color: '#4335d6',
  },
  {
    id: 7,
    title: 'Project 1',
    progress: 58,
    bgColor: '#E7F3FF',
    color: 'orange',
  },
  {
    id: 8,
    title: 'Project 2',
    progress: 90,
    bgColor: '#FFE9E1',
  },
  {
    id: 9,
    title: 'Project 3',
    progress: 12,
    bgColor: '#E7F3FF',
    color: '#4335d6',
  },
]
</script>

<style lang="scss"></style>
