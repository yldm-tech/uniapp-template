<template>
  <view :style="{ paddingTop: paddingTop + 'px' }"></view>
</template>

<script setup lang="ts">
const { safeAreaInsets } = uni.getSystemInfoSync()
let paddingTop = safeAreaInsets?.top

// #ifdef MP_WEIXIN
paddingTop = safeAreaInsets!.top + 40
console.log('paddingTop', paddingTop)
// #endif
</script>
