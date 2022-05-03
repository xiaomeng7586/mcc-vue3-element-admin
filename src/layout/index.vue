<template>
  <div class="app-wrapper" :class="[$store.getters.sidebarOpened ? 'openSidebar':'hideSidebar']">
    <!-- 左侧菜单 -->
    <sidebar class="sidebar-container" :style="{backgroundColor:variables.menuBg}"/>
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部navbar -->
        <navbar />
      </div>
      <!-- 内容区 -->
      <app-main></app-main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar/index.vue'
import AppMain from './components/AppMain.vue'
import variables from '@/styles/variables.scss'

console.log('variables', variables)
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.scss';

.app-wrapper {
  @include clearFix;
  position: relative;
  width: 100%;
  height: 100%;
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}
.hideSidebar .fixed-header {
  width: calc(100% - #{$hideSideBarWidth});
}
</style>
