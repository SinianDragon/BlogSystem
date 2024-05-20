<script setup lang="ts">

import {onMounted} from "vue";
import {useRouter} from "vue-router";
import {articleList, blogs} from "@/mockData/blogUserMockData";

const articleNumber =  213
const views = 15325
const likes = 7954
const blogAndUser = JSON.parse(history.state.blog)
const router = useRouter()

const showDetail = (blog: any) => {
  router.push({path: '/Home/Article', query:{id:getUuid()},state: {blog: JSON.stringify(blog)}})
}

function getUuid () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0
    const v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

onMounted(()=>{

})

</script>

<template>
  <div class="padding" style="height: 10%"></div>
  <div class="article">
    <div class="user-left">
      <div class="user-card">
        <font-awesome-icon :icon="['fas', 'user']" style="position: relative;margin-right: auto "/>
        <img class="user-image" :src="blogAndUser.blogUsers.userProfilePhoto" alt="User Image">
        <div class="user-info">
          <div class="user-details">
            <h3>昵称：{{ blogAndUser.blogUsers.userNickname }}</h3>
            <p style="font-weight: 100;color: #96969b">{{ blogAndUser.blogUsers.userName }}</p>
            <p class="colorful">level：{{ blogAndUser.blogUsers.userLevel }}</p>
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

      <h2 style="color: #718da6">他其他的文章</h2>

      <div class="blog-card" v-for="(article,key)  in (articleList).slice(0,5)" :key="key"  @click="showDetail(article)">
        <div class="blog-name">
          {{ article.articleTitle }}
        </div>
        <div class="blog-content">
          {{ article.articleContent.replace(/<[^>]+>/g, '').substring(0, 20) }}...
        </div>
        <div class="view-like-stats">
          <div class="data-time">
            <font-awesome-icon :icon="['far', 'calendar']"/>
            {{ article.articleDate.substring(0, 10) }}
          </div>
          <div class="views">
            <font-awesome-icon :icon="['fas', 'eye']"/>
            {{ article.articleViews }}
          </div>
          <div class="likes">
            <font-awesome-icon :icon="['fas', 'heart']" style="color: #ff0000;"/>
            {{ article.articleLikeCount }}
          </div>
        </div>
      </div>

      <el-link style="color: #656e70" v-if="articleList.length>4">查看所有文章</el-link>

    </div>


    <div class="article-right">
      <div class="content-article-show-nice">
        <div style="padding:40px">
          <el-row>
            <el-col :span="17" id="total-article-container">
              <el-row>
                <el-col :span="24" style="text-align: left">
                  <font-awesome-icon :icon="['fas', 'eye']" style="font-size: 25px"/>
                  {{ blogAndUser.articleViews }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <font-awesome-icon :icon="['fas', 'heart']"
                                     :style="{cursor: 'pointer',fontSize: '25px'}"/>
                  {{ blogAndUser.articleLikeCount }}
                </el-col>
              </el-row>
              <div class="article-listened" id="article-listened">
                <div class="article-title">
                  <h1>{{ blogAndUser.articleTitle }}</h1>
                </div>
                <div class="article-content" id="article-content">

                </div>
              </div>
            </el-col>
            <el-col :span="1" style="border-right: rgb(241,241,241) solid 2px;"></el-col>
            <el-col :span="6">
              <div class="article-catalog">
                <u-anchor container="#article-listened"
                          style="position: fixed;pointer-events: none;margin-left: 20px"
                          target=".article-content">
                </u-anchor>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <el-link class="detail-comment">查看评论</el-link>
      <el-drawer

          title="评论详情"
          direction="rtl"
          size="45%">
        <u-comment
            style="margin-top: -20px"
        >
        </u-comment>
        <el-pagination
            style="margin: 30px 30px 30px 30px"
            page-count="5"
            :small="false"
            background layout="prev, pager, next, jumper"
            :total="10"
            :pager-count="5"
        />
      </el-drawer>

    </div>
  </div>

</template>

<style scoped>


.article-catalog {
  width: 15%;
}

.content-article-show-nice {
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}

.detail-comment {
  position: absolute;
  bottom: 0;
  left: 83.5%;
  transform: translate(-50%, -50%);
  color: rgb(141, 151, 156);
  z-index: 1;
  font-size: large;
  font-weight: bold;
}

.colorful {
  background: linear-gradient(to bottom, #96969b, #6c7b88, #484d52);
  -webkit-background-clip: text;
  color: transparent;
}

/* 博客文章页面容器 */
.article {
  padding-top: 40px;
  height: auto;
  display: flex;
  overflow: auto;
}

/* 左半部分（用户信息） */
.user-left {
  width: 25%;
  padding: 10px;
  height: auto;
  background-color: #f1f1f1;
  display: flex;
  margin-left: 5%;
  margin-right: 10px;
  margin-bottom: 60px;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  text-align: center;
}


.user-card {
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.05);
  padding: 15px;
  border-radius: 10px;
  margin: 10px 30px 30px 40px;
  width: 80%;
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


/* 右半部分（文章内容） */
.article-right {
  width: 75%;
  padding: 20px;
  background-color: #f1f1f1;
  margin-right: 5%;
  height: auto;
  margin-left: 10px;
  margin-bottom: 60px;
  flex-direction: column;
  word-wrap: break-word;
  word-break: normal;
}

.article-title {
  position: relative;
  left: 2px;
  text-align: center;
}

.blog-card {
  border: 1px solid #ccc;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  background-color: #ffffff;
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  width: 80%;
  cursor: pointer;
}

.blog-name {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.blog-content {
  margin-bottom: 10px;
}

.view-like-stats {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

</style>