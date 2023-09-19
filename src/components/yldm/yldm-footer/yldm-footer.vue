<template>
  <view :style="{ paddingBottom: bottom + 'px' }">
    <fui-footer :text="`Copyright © ${year} yldm.tech`"></fui-footer>
  </view>
</template>

<script setup lang="ts">
const { safeAreaInsets } = uni.getSystemInfoSync()
const bottom = safeAreaInsets!.bottom
const year = new Date().getFullYear()
</script>
