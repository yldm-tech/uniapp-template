<script setup lang="ts">
import ProjectCard from './components/project-card.vue'
import ProjectProgress from './components/project-progress.vue'
import ProjectTaskGroup from './components/project-task-group.vue'

const onTap = () => {
  console.log('onTap')
}
</script>

<template>
  <view class="mt-12">
    <project-card />
    <project-progress />
    <project-task-group />
  </view>
</template>

<style lang="scss"></style>
