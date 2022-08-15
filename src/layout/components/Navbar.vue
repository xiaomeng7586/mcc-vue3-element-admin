<template>
  <div class="navbar">
    <hamburger class="hamburger-container" />
    <breadCrumb class="breadcrumb-container" />
    <div class="right-menu">
      <!-- 搜索 -->
      <header-search class="right-menu-item hover-effect"></header-search>
      <!-- 全屏切换 -->
      <!-- <screen-full class="right-menu-item hover-effect"></screen-full> -->
      <!-- 主题更换 -->
      <theme-picker class="right-menu-item hover-effect"></theme-picker>
      <!-- 国际化 -->
      <lang-select class="right-menu-item hover-effect"></lang-select>
      <!-- 头像 -->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar shape="square" :size="40" :src="$store.getters.userInfo.avatar"></el-avatar>
          <i class="el-icon-s-tools"></i>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item>{{ $t('msg.navBar.home')}}</el-dropdown-item>
            </router-link>
            <a target="__blank" href="#">
              <el-dropdown-item>{{ $t('msg.navBar.course')}}</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="logout">{{ $t('msg.navBar.logout')}}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import hamburger from '@/components/hamburger/index.vue'
import breadCrumb from '@/components/BreadCrumb/index.vue'
import LangSelect from '@/components/LangSelect/index.vue'
import ThemePicker from '@/components/ThemeSelect/index.vue'
// import ScreenFull from '@/components/ScreenFull/index.vue'
import HeaderSearch from '@/components/HeaderSearch/index.vue'
const store = useStore()
const logout = () => {
  store.dispatch('user/logout')
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 50px;
    float: left;
    cursor: pointer;
    height: 100%;
    transition: background 0.5s;
    &:hover {
      background: rgba(0,0,0,0.1);
    }
  }
  .breadcrumb-container {
    float: left;
  }
  .right-menu {
    display: flex;
    float: right;
    align-items: center;
    padding-right: 16px;
    ::v-deep .right-menu-item {
      display: inline-block;
      padding: 0 18px 0 0;
      font-size: 24px;
      color: #5a5b66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
      }
    }

    ::v-deep .avatar-container {
    cursor: pointer;
    .avatar-wrapper {
      margin-top: 5px;
      position: relative;
      .el-avatar {
        --el-avatar-background-color:none;
        margin-right: 12px;
      }
    }
  }
  }

}
</style>
