<script setup lang="ts">
import {activeIndexStore} from "@/stores/activeIndex";
import {userMockData} from "@/mockData/userMockData"
import Navtop from "@/components/Navtop.vue";
import {onMounted} from "vue";


</script>

<template>
  <div class="home-container">

    <div class="header">
      <el-col :span="14">
        <div class="userDetail" style="display: flex">
          <el-dropdown>
            <img src="https://cdn.pixabay.com/photo/2023/12/07/11/11/girl-8435340_960_720.png" alt="">
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>修改头像</el-dropdown-item>
                <el-dropdown-item>历史头像</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <div style="padding-left: 20px;align-items: center">
            <span style="font-weight: bold;font-size: 18px">昵称：{{ userMockData.userNickname }}</span><br>
            <span style="font-weight: 100;color: #96969b">{{ userMockData.username }}</span><br>
            <span class="colorful">level：{{ userMockData.level }}</span>
          </div>
        </div>
      </el-col>

      <Navtop/>
    </div>

    <router-view :key="$route.fullPath"></router-view>
  </div>

</template>

<style scoped>
.colorful {
  background: linear-gradient(to bottom, #96969b, #6c7b88, #484d52);
  -webkit-background-clip: text;
  color: transparent;
}


.home-container {
  height: 100%;
  width: 100%;
  background: #f8f8f8;
  overflow-y: auto;
}

.header {
  height: 10%;
  width: 100%;
  position: fixed;
  display: flex;
  text-align: center;
  align-items: center;
  background: white;
  right: 0;
  top: 0;
  z-index: 999;
}

.userDetail img {
  margin-left: 30px;
  object-fit: fill;
  width: 65px;
  height: 65px;
  border-radius: 100%;
  outline: none; /*取消黑边*/
}


</style>