<template>
  <div class="app-main">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.app-main {
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 61px 20px 20px 20px;
  box-sizing: border-box;
}
</style>
