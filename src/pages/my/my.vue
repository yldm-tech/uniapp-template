<script setup lang="ts">
import { useMemberStore } from '@/stores'

const memberStore = useMemberStore()

const handleClick = (type: string) => {
  switch (type) {
    case '1':
      console.log('我的预约')
      break
    case '2':
      console.log('客服中心')
      break
    case '3':
      console.log('隐私政策')
      break
    case '4':
      console.log('帮助')
      break
    case '5':
      console.log('设置')
      break
    default:
      break
  }
}
</script>

<template>
  <view class="my">
    <!-- header -->
    <view class="header pt-20 pb-5 flex items-center">
      <view>
        <fui-avatar class="mx-5" width="200" src="/static/images/user_default.png"></fui-avatar>
      </view>
      <view class="mx-8">
        <view class="text-xl text-black">
          <text class="mr-1">小莫</text>
        </view>
        <view class="text-md py-1 text-gray-300">
          <text>ID:83387856</text>
        </view>
      </view>
    </view>
    <!-- items -->
    <view>
      <fui-list :bottomBorder="false" :topBorder="false">
        <fui-list-cell :bottomBorder="false" arrow @click="handleClick('1')">
          <fui-icon
            class="bg-blue-200 w-12 h-12 flex justify-center items-center text-center mx-3 rounded-full"
            name="calendar"
            color="#707EFF"
            size="40"
          />
          <text class="text-xl font-normal">我的预约</text>
        </fui-list-cell>
        <fui-list-cell :bottomBorder="false" arrow @click="handleClick('2')">
          <fui-icon
            class="bg-red-100 w-12 h-12 flex justify-center items-center text-center mx-3 rounded-full"
            name="kefu"
            color="#EF5454"
            size="40"
          />
          <text class="text-xl font-normal">联系客服</text>
        </fui-list-cell>
        <fui-list-cell :bottomBorder="false" arrow @click="handleClick('3')">
          <fui-icon
            class="bg-blue-200 w-12 h-12 flex justify-center items-center text-center mx-3 rounded-full"
            name="star-fill"
            color="#369FFF"
            size="40"
          />
          <text class="text-xl font-normal">隐私政策</text>
        </fui-list-cell>
        <fui-list-cell :bottomBorder="false" arrow @click="handleClick('4')">
          <fui-icon
            class="bg-yellow-100 w-12 h-12 flex justify-center items-center text-center mx-3 rounded-full"
            name="help-fill"
            color="#ffc046"
            size="40"
          />
          <text class="text-xl font-normal">帮助</text>
        </fui-list-cell>
        <fui-list-cell :bottomBorder="false" arrow @click="handleClick('5')">
          <fui-icon
            class="bg-green-100 w-12 h-12 flex justify-center items-center text-center mx-3 rounded-full"
            name="setup-fill"
            color="#85d062"
            size="40"
          />
          <text class="text-xl font-normal">设置</text>
        </fui-list-cell>
      </fui-list>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.my {
  background-image: url('/static/images/user_bg.png');
  background-size: 45%;
  background-origin: border-box;
  background-repeat: no-repeat;
}
</style>
