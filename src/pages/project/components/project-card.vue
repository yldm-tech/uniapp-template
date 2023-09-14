<template>
  <view class="flex justify-around rounded-5 m-5 py-8 px-2 border-1 bg-purple-500">
    <view>
      <view class="text-xs pr-8 w-40 text-white">Your today's task almost done!</view>
      <view
        class="w-20 bg-purple-200 font-normal text-center rounded-2 text-xs py-1 mt-5 text-purple-700"
        >View Task</view
      >
    </view>

    <view>
      <fui-circle
        :percent="75"
        color="#FFF"
        background="#E9D5FF"
        foreground="#FFF"
        :strokeWidth="5"
      ></fui-circle>
    </view>
    <view
      class="flex rounded-1 justify-center text-white items-center bg-gray-400 text-xs bg-opacity-50 w-4 h-4 text-center"
      >...</view
    >
  </view>
</template>
