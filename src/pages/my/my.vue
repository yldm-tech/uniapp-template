<script setup lang="ts">
import { useMemberStore } from '@/stores'

const memberStore = useMemberStore()

const handleClick = (type: string) => {
  switch (type) {
    case '1':
      console.log('ETC連携')
      break
    case '2':
      console.log('ポイント連携')
      break
    case '3':
      console.log('プライバシー')
      break
    case '4':
      console.log('ヘルプ')
      break
    case '5':
      console.log('ログアウト')
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
        <view class="text-md text-black">
          <text class="mr-1">涼風</text>
        </view>
        <view class="text-md py-1 text-gray-300">
          <text>ID:5123195</text>
        </view>
      </view>
    </view>
    <!-- items -->
    <view class="mr-5">
      <fui-list :bottomBorder="false" :topBorder="false">
        <fui-list-cell :bottomBorder="false" arrow @click="handleClick('1')">
          <fui-icon
            class="bg-blue-200 w-12 h-12 flex justify-center items-center text-center mx-3 rounded-full"
            name="calendar"
            color="#707EFF"
            size="50"
          />
          <text class="text-md font-normal">ETC明細連携</text>
        </fui-list-cell>
        <fui-list-cell :bottomBorder="false" arrow @click="handleClick('2')">
          <fui-icon
            class="bg-red-100 w-12 h-12 flex justify-center items-center text-center mx-3 rounded-full"
            name="kefu"
            color="#EF5454"
            size="50"
          />
          <text class="text-md font-normal">ポイント連携</text>
        </fui-list-cell>
        <fui-list-cell :bottomBorder="false" arrow @click="handleClick('3')">
          <fui-icon
            class="bg-blue-200 w-12 h-12 flex justify-center items-center text-center mx-3 rounded-full"
            name="star-fill"
            color="#369FFF"
            size="50"
          />
          <text class="text-md font-normal">プライバシー</text>
        </fui-list-cell>
        <fui-list-cell :bottomBorder="false" arrow @click="handleClick('4')">
          <fui-icon
            class="bg-yellow-100 w-12 h-12 flex justify-center items-center text-center mx-3 rounded-full"
            name="help-fill"
            color="#ffc046"
            size="50"
          />
          <text class="text-md font-normal">ヘルプ</text>
        </fui-list-cell>
        <fui-list-cell :bottomBorder="false" arrow @click="handleClick('5')">
          <fui-icon
            class="bg-green-100 w-12 h-12 flex justify-center items-center text-center mx-3 rounded-full"
            name="setup-fill"
            color="#85d062"
            size="50"
          />
          <text class="text-md font-normal">ログアウト</text>
        </fui-list-cell>
      </fui-list>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.my {
  background-image: url('https://mp-cbe7a562-c50b-4ab4-967b-265c3e6ab630.cdn.bspapp.com/common/user_bg.png');
  background-size: 45%;
  background-origin: border-box;
  background-repeat: no-repeat;
}
</style>
