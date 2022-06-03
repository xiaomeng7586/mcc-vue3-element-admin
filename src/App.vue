<template>
  <router-view />
</template>
<script lang="ts" setup>
import { useStore } from 'vuex'
import { generateNewStyle, writeNewStyle } from '@/utils/theme'

const store = useStore()
generateNewStyle(store.getters.mainColor)
  .then(newStyle => {
    writeNewStyle(newStyle)
  })
</script>

<style>
</style>
