<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index) in breadcrumbData" :key="item.path">
      <!-- 不可点击 -->
      <span class="no-redirect" v-if="index === breadcrumbData.length - 1">{{item.meta.title}}</span>
      <!-- 可点击 -->
      <span class="redirect" v-else @click="onLink(item.path)">{{item.meta.title}}</span>
    </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const breadcrumbData = ref<any>([])
const formatBreadcrumbData = () => {
  breadcrumbData.value = route.matched.filter(item => item.meta && item.meta.title)
}

watch(
  route,
  () => {
    formatBreadcrumbData()
  },
  {
    immediate: true
  }
)

const router = useRouter()
// 路由跳转
const onLink = (path:string) => {
  router.push(path)
}

// 主题替换颜色
const store = useStore()
const linkHoverColor = ref(store.getters.cssvar.menuBg)
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
  ::v-deep .redirect {
    cursor: pointer;
    color: #666;
    font-weight: 600;
    &:hover {
      color: v-bind(linkHoverColor);
    }
  }
}
</style>
