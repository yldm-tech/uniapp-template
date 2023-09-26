<script setup lang="ts">
import { randomNum } from '@/utils'
</script>

<template>
  <view class="bg-gray-100">
    <view
      class="flex justify-between rounded-3 bg-white m-2 p-3"
      v-for="(item, index) in 8"
      :key="index"
    >
      <view>
        <image
          class="w-12 h-12"
          src="https://img.icons8.com/ios/452/point-of-interest.png"
          mode="scaleToFill"
        />
      </view>
      <view>
        <view class="py-1 text-xs text-gray-400 font-normal">ポイント</view>
        <view class="py-1 float-right">{{ randomNum(400, 3000) }}</view>
      </view>
    </view>
  </view>
</template>
