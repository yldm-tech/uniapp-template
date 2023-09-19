<template>
  <view :style="{ paddingTop: top + 'px' }"> this is yldm-header </view>
</template>

<script setup lang="ts">
const { safeAreaInsets } = uni.getSystemInfoSync()
let top = safeAreaInsets!.top

// #ifdef MP-WEIXIN
top = safeAreaInsets!.top + 40
// #endif
</script>
