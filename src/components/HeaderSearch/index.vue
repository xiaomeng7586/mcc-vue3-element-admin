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
      <el-option v-for="option in searchOptions" :key="option.item.title" :value="option.item.path" :label="option.item.title.join(' > ')"></el-option>
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, Ref } from 'vue'
import { useRouter } from 'vue-router'
import { filterRoutes } from '@/utils/route'
import { generateRoutes } from './FuseData'
import Fuse from 'fuse.js'

// 数据源
const router = useRouter()
const searchPool = computed(() => {
  const routes = filterRoutes(router.getRoutes() as any)
  return generateRoutes(routes)
})
console.log(searchPool.value)

// 搜索库相关
const fuse = new Fuse((searchPool as any).value, {
  shouldSort: true,
  minMatchCharLength: 1,
  keys: [
    {
      name: 'title',
      weight: 0.7
    },
    {
      name: 'path',
      weight: 0.5
    }
  ]
})

console.log(fuse)

// 控制search展示
const isShow = ref(false)
const onShowClick = () => {
  isShow.value = !isShow.value
}

// search相关
const search = ref('')
// 搜索列表
const searchOptions:Ref<any> = ref([])
// 搜索方法
const querySearch = (query:string) => {
  searchOptions.value = fuse.search(query)
}
// 选中回调
const onSelectChange = (path:string) => {
  router.push(path)
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
