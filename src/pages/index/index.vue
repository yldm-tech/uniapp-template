<template>
  <fui-tabs :tabs="tabs" :short="false"></fui-tabs>
  123
</template>

<script setup lang="ts">
import { ref } from 'vue'
const tabs = ref([
  {
    title: '本月',
  },
  {
    title: '本年',
  },
  {
    title: '全部',
  },
])
</script>
