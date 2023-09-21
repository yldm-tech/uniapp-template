<script setup lang="ts">
import { ref } from 'vue'
import { tabs } from '@/mocks/category'
const activeIndex = ref(0)

const handleChange = (tab: any) => {
  activeIndex.value = tab.index
}
</script>

<template>
  <view class="">
    <fui-tabs
      @change="handleChange"
      :current="activeIndex"
      :tabs="tabs"
      :short="false"
      scroll
      alignLeft
    ></fui-tabs>

    <scroll-view
      v-show="activeIndex === index"
      class="flex-1"
      scroll-y
      v-for="(tab, index) in tabs"
      :key="`scroll-${index}`"
    >
      <fui-grid v-for="tabItem in tab.children" :key="tabItem.id">
        <fui-text class="w-full block m-3" :text="`${tabItem.name}`" :size="60"></fui-text>
        <fui-grid-item v-for="(item, index) in tabItem.children" :key="`grid-${index}`">
          <view class="fui-grid__cell">
            <image src="/static/images/user_default.png" class="w-12 h-12" mode="widthFix"></image>
            <text>{{ item.name }}</text>
          </view>
        </fui-grid-item>
      </fui-grid>
    </scroll-view>
  </view>
</template>

<style>
page {
  background-color: #ffffff;
  /* 非nvue端可通过此变量控制边框颜色 */
  /* --fui-color-border:#465CFF; */
}

.fui-section__title {
  margin-left: 32rpx;
}

.fui-grid__cell {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  font-size: 28rpx;
  font-weight: 400;
}

.fui-padding {
  padding: 36rpx 0;
}

.fui-icon {
  width: 96rpx;
  height: 96rpx;
  margin-bottom: 16rpx;
}

.fui-icon__2x {
  width: 64rpx;
  height: 64rpx;
  margin-bottom: 16rpx;
}

.fui-flex__column {
  flex: 1;
}
</style>
