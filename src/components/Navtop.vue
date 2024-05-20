<script setup lang="ts">
import {activeIndexStore} from "@/stores/activeIndex";
const ActiveIndexStore = activeIndexStore();
import {useRouter} from "vue-router";
const router = useRouter()
const PersonalCenter = () => {
  router.push({path:'/Home/PersonalCenter'})
}
</script>

<template>
  <el-col :span="10" style="height: 100%">
    <div class="nav">
      <el-menu
          :default-active="ActiveIndexStore.activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
          :router="true"
      >
        <div class="flex-grow"/>
        <el-menu-item index="/Home/Content">博客主页</el-menu-item>
        <el-menu-item index="/Home/PersonalCenter" @click="PersonalCenter()">个人中心</el-menu-item>
      </el-menu>
    </div>
  </el-col>
</template>

<style scoped>
/* 导航条 */
.nav {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.nav ul {
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
}

/* 导航链接 */
.nav li {
  cursor: pointer;
  color: black;
  font-size: 16px;
  flex: 1;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Microsoft JhengHei UI", serif;
  font-weight: bold;
}
</style>