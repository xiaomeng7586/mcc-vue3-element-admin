<template>
  <div class="header-search" :class="{show: isShow}"  @click.stop="onShowClick">
    <svg-icon class-name="search-icon" icon="search"></svg-icon>
    <el-select
      ref="headerSearchSelectRef"
      class="header-search-select"
      v-model="search"
      filterable
      default-first-option
      remote
      :remote-method="querySearch"
      placeholder="search"
      @change="onSelectChange"
    >
      <el-option v-for="option in 5" :key="option" :value="option" :lable="option"></el-option>
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'

// 数据源
const router = useRouter()
const searchPool = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes() as any)
  return generateMenus(filterRoutes)
})

// 控制search展示
const isShow = ref(false)
const onShowClick = () => {
  isShow.value = !isShow.value
}

// search相关
const search = ref('')
// 搜索方法
const querySearch = () => {
  console.log('querySearch')
}
// 选中回调
const onSelectChange = () => {
  console.log('onSelectChange')
}
</script>

<style scoped lang="scss">
.header-search {
  font-size: 0 !important;
  ::v-deep .search-icon {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }
  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    ::v-deep .el-input__inner {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }
  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
