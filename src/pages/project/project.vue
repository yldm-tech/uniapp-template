<script setup lang="ts">
const onTap = () => {
  console.log('onTap')
}
</script>

<template>
  <view class="">
    <view>
      <view>
        <view>Your today's task almost done!</view>
        <button>View Task</button>
      </view>
      <view>
        <fui-button>hello</fui-button>
        <fui-circle :percent="75"></fui-circle>
      </view>
    </view>
  </view>
</template>

<style lang="scss"></style>
