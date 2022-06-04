<template>
  <div  @click="toggle">
    <svg-icon :icon="isScreenFull ? 'exit-fullscreen':'fullscreen'"></svg-icon>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import screenfull from 'screenfull'

const isScreenFull = ref(false)

const toggle = () => {
  screenfull.toggle()
}

const change = () => {
  isScreenFull.value = screenfull.isFullscreen
}

onMounted(() => {
  screenfull.on('change', change)
})

onUnmounted(() => {
  screenfull.off('change', change)
})
</script>

<style scoped>

</style>
