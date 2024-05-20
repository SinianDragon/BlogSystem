<script setup lang="ts">
import {userMockData} from "@/mockData/userMockData"
import {blogs} from "@/mockData/blogUserMockData"
import {onMounted, type Ref, ref, type UnwrapRef} from "vue";
import {activeIndexStore} from "@/stores/activeIndex";
import Navtop from "@/components/Navtop.vue";

const ActiveIndexStore = activeIndexStore()
import {useRouter} from "vue-router";

const router = useRouter()
const likes = ref(7954)
const views = ref(15325)
let articleNumber = ref(213)
const friendList = ref([])
const groupList = ref([])

onMounted(() => {
  ActiveIndexStore.setActiveIndex('/Home/PersonalCenter')
})
const showDetail = (blog: any) => {
  router.push({path: '/Home/Article', query: {id: getUuid()}, state: {blog: JSON.stringify(blog)}})
}

function getUuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0
    const v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}


</script>

<template>
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
  <div class="padding" style="height: 10%"></div>
  <div class="personCenter-container">
    <el-container style="width: 100%;min-height: 100%;
    height: auto;margin: auto;  text-align: center;">
      <el-header style="height:auto;width:100%;">
        <div class="user-message-container">
          <div class="user-card">
            <font-awesome-icon :icon="['fas', 'user']" style="position: relative;margin-right: auto "/>
            <img class="user-image" :src="userMockData.userProfilePhoto" alt="User Image">
            <div class="user-info">
              <div class="user-details">
                <h3>昵称：{{ userMockData.userNickname }}</h3>
                <p style="font-weight: 100;color: #96969b">{{ userMockData.userName }}</p>
                <p class="colorful">level：{{ userMockData.userLevel }}</p>
              </div>
            </div>
            <div class="user-stats">
              <div class="article-stats">
                <p>文章总数</p>
                <p>
                  <font-awesome-icon :icon="['far', 'newspaper']"/>
                  {{ articleNumber }}
                </p>
              </div>
              <div class="view-stats">
                <p>总浏览量</p>
                <p>
                  <font-awesome-icon :icon="['fas', 'eye']"/>
                  {{ views }}
                </p>
              </div>
              <div class="likes-stats">
                <p>总获赞量</p>
                <p>
                  <font-awesome-icon :icon="['fas', 'heart']" style="color: #ff0000;"/>
                  {{ likes }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </el-header>
      <el-main style="width:100%;min-height: 100%;height: auto;">
        <div class="all-message-container">
          <el-row>
            <el-col :span="24">
              <div class="blog-post" style="justify-items:center;text-align: center;width: auto"
                   v-for="(blog,key) in (blogs)"
                   :key="key">
                <div class="author-info"  @click="showDetail(blog)">
                  <img class="author-avatar" :src="blog.blogUsers.userProfilePhoto" alt="Author Avatar">
                  <div>
                    <span class="author-username">{{ blog.blogUsers.userNickname }}</span><br>
                    <span style="font-weight: 100;color: #96969b"> {{ blog.blogUsers.userName }}</span><br>
                    <span class="user-level colorful">level: {{ blog.blogUsers.userLevel }}</span>
                  </div>
                  <div class="post-time"  @click="showDetail(blog)">
                    <font-awesome-icon :icon="['far', 'calendar']"/>
                    {{ blog.articleDate.replace(new RegExp('T'), " ") }}
                  </div>
                </div>
                <h2 class="article-title"  @click="showDetail(blog)">{{ blog.articleTitle }}</h2>
                <p class="article-content"  @click="showDetail(blog)">{{ blog.articleContent.replace(/<[^>]+>/g, '').substring(0, 50) }}...</p>
                <div class="article-stats-info">
          <span>
            <font-awesome-icon :icon="['fas', 'eye']"/>&nbsp;{{ blog.articleViews }}
          </span>
                  <el-button type="danger">删除
                  </el-button>
                  <el-button type="warning">修改
                  </el-button>
                  <span>
            <font-awesome-icon :icon="['fas', 'heart']" style="color: #fd2008;"/>&nbsp;{{ blog.articleLikeCount }}
          </span>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>
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

.personCenter-container {
  margin-top: 10px;
  width: 100%;
  height: 100%;
}

.user-message-container {
  text-align: center;
  justify-content: center;
  justify-items: center;
  align-items: center;
}

.user-card {
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin: 10px;
  padding: 15px;
  width: auto;
}

.user-image {
  width: 80px;
  height: 80px;
  border-radius: 100%;
  object-fit: cover;
  cursor: pointer;
}

.user-image:hover {
  box-shadow: 2px 2px 30px rgba(4, 15, 29, 0.1);
  transform: scale(1.01);
  transition: all ease 0.1s;
}

.user-info {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.user-stats {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
  width: 100%;
}

.blog-post {
  background-color: #ffffff;
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.05);
  align-items: center;
  padding: 15px;
  border-radius: 10px;
  margin: 30px 30px 30px 30px;
  width: 85%;
  cursor: pointer;
}

.author-info {
  display: flex;
  align-items: center;
  /* Other styles for author-info */
  text-align: center;
}

.author-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.blog-post:hover {
  box-shadow: 2px 2px 30px rgba(4, 15, 29, 0.1);
  transform: scale(1.01);
  transition: all ease 0.1s;
}

.post-time {
  font-size: 14px; /* 设置时间元素的字体大小 */
  color: #555;
  margin-left: auto; /* 将时间元素推到右侧 */
}

.article-title {
  font-size: 20px;
  margin: 10px 0;
}

.article-content {
  font-size: 14px;
}

.article-stats-info {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.all-message-container {

}


</style>