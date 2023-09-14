<template>
  <view>
    <view class="mx-5">
      <text class="font-bold">In Progress</text>
      <uni-badge
        class="uni-badge-left-margin bg-opacity-50"
        :text="items.length.toString()"
        type="primary"
        :customStyle="{ background: '#4335d6' }"
      />
    </view>

    <scroll-view class="mx-2 whitespace-nowrap" scroll-x>
      <view
        :style="{ background: item.bgColor }"
        class="inline-block rounded-5 w-52 p-3 whitespace-normal m-3 h-28"
        v-for="item in items"
        :key="item.id"
      >
        <view>
          <text class="text-gray-500 text-xs">{{ item.title }}</text>
        </view>
        <view class="py-1">{{ item.description }}</view>
        <view class="py-1">
          <fui-progress
            :percent="70"
            :height="10"
            showInfo
            :activeColor="item.color"
          ></fui-progress>
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
    description: 'Project 1 description',
    progress: 0.2,
    bgColor: '#E7F3FF',
    color: 'orange',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Project 2 description',
    progress: 0.4,
    bgColor: '#FFE9E1',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Project 3 description',
    progress: 0.6,
    bgColor: '#E7F3FF',
    color: '#4335d6',
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Project 4 description',
    progress: 0.8,
    bgColor: '#E7F3FF',
    color: '#4335d6',
  },
  {
    id: 5,
    title: 'Project 5',
    description: 'Project 5 description',
    progress: 1,
    bgColor: '#E7F3FF',
    color: '#4335d6',
  },
]
</script>
