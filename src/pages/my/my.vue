<script setup lang="ts">
import MyHeader from './components/my-header.vue'
import { useMemberStore } from '@/stores'
import MyMenu from './components/my-menu.vue'

const memberStore = useMemberStore()
</script>

<template>
  <todo-header />
  <my-header />
  <my-menu />
</template>

<style lang="scss">
//
</style>
