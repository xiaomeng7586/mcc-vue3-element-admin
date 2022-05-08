<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item
      ><a href="/">promotion management</a></el-breadcrumb-item
    >
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>
      <span class="no-redirect">promotion detail</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
  ::v-deep .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
