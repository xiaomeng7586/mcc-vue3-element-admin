<template>
<i class="sub-el-icon" v-if="icon.includes('el-icon')" :class="icon"></i>
<svg-icon v-else :icon="icon"></svg-icon>
<span>{{generateTitle(title)}}</span>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { generateTitle } from '@/utils/i18n'
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>

<style scoped>

</style>
