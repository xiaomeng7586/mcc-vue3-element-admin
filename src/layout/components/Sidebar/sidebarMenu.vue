<template>
  <div>
    <el-menu
      :uniqueOpened="true"
      active-text-color="#ffd04b"
      background-color="#545c64"
      text-color="#fff"
      >
      <!-- 子集 -->
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item index="1-1">选项一</el-menu-item>
        <el-menu-item index="1-2">选项二</el-menu-item>
      </el-submenu>
      <!-- 具体菜单 -->
      <el-menu-item index="2">
        <i class="el-icon-location"></i>
        <template #title>
          <span>导航四</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
