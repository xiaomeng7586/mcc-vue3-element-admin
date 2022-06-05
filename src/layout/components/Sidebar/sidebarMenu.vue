<template>
  <div>
    <el-menu
      :collapse="!$store.getters.sidebarOpened"
      :default-active="activeMenu"
      :uniqueOpened="true"
      :active-text-color="$store.getters.cssvar.menuActiveText"
      :background-color="$store.getters.cssvar.menuBg"
      :text-color="$store.getters.cssvar.menuText"
      router
      >
      <sidebar-item v-for="item in routes" :key="item.path" :route="item"></sidebar-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'
import { filterRouters, generateMenus } from '@/utils/route'
import SidebarItem from './SidebarItem.vue'

const router = useRouter()
const routes = computed(() => {
  const filterRoute = filterRouters((router.getRoutes() as any))
  return generateMenus(filterRoute)
})

const route = useRoute()
const activeMenu = computed(() => {
  const { path } = route
  return path
})
</script>

<style scoped>

</style>
