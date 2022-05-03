<template>
  <div>
    <div class="logo-container">
      <el-avatar size="44" shape="square" src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"></el-avatar>
      <h1 class="logo-title" v-if="$store.getters.sidebarOpened">mcc-admin</h1>
    </div>
    <sidebar-menu></sidebar-menu>
  </div>
</template>

<script setup lang="ts">
import SidebarMenu from './SidebarMenu.vue'
</script>

<style lang="scss" scoped>
.logo-container {
  height: 44px;
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>
