<template>
  <view>
    <todo-header />
    <text>My Tasks</text>
    <view class="mx-5 flex" v-for="item in 4" :key="item">
      <view
        class="flex rounded-3xl shadow-md"
        :class="{
          'bg-pink-500 h-64 w-1/2': item === 1,
          'bg-yellow-300 h-42 w-1/2': item === 2,
          'bg-purple-500 h-36 w-1/2': item === 3,
          'bg-blue-500 h-32 w-1/2': item === 4,
        }"
      >
        <view class="bg-url">
          <view>Mobile AppDesign</view>
          <view>{{ item }} tasks</view>
        </view>
      </view>
    </view>
  </view>
</template>
