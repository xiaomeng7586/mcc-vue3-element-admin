<template>
  <div class="hamburger-container" @click="toggleClick">
    <svg-icon class="hamburger" :icon="icon" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const toggleClick = () => {
  store.commit('app/triggerSidebarOpend')
}
const icon = computed(() => {
  return store.getters.sidebarOpened ? 'hamburger-opened' : 'hamburger-closed'
})
</script>

<style lang="scss" scoped>
.hamburger-container {
  padding:0 16px;
  .hamburger {
    width: 20px;
    height: 20px;
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
