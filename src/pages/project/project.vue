<script setup lang="ts">
import ProjectCard from './components/project-card.vue'
import ProjectTaskGroup from './components/project-task-group.vue'

const onTap = () => {
  console.log('onTap')
}
</script>

<template>
  <todo-header />
  <project-card />
  <project-task-group />
</template>

<style lang="scss"></style>
