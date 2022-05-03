<template>
  <div>
    <el-menu
      :uniqueOpened="true"
      active-text-color="#ffd04b"
      background-color="#545c64"
      text-color="#fff"
      >
      <sidebar-item v-for="item in routes" :key="item.path" :route="item"></sidebar-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { filterRoutes, generateMenus } from '@/utils/route'
import SidebarItem from './SidebarItem.vue'

const router = useRouter()
const routes = computed(() => {
  const filterRoute = filterRoutes((router.getRoutes() as any))
  return generateMenus(filterRoute)
})

console.log('routes', routes.value)
</script>

<style scoped>

</style>
