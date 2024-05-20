<script setup lang="ts">
import {Delete, Search} from "@element-plus/icons-vue";
import {blogs} from "@/mockData/blogUserMockData";
import {pageStore} from "@/stores/page";
import {useRouter} from "vue-router";
import {onMounted} from "vue";
import {activeIndexStore} from "@/stores/activeIndex";
const ActiveIndexStore = activeIndexStore();

const router = useRouter()

const PageStore = pageStore();

const handleCurrentChange = () => {

}

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
  ActiveIndexStore.setActiveIndex('/Home/Content')
})

</script>

<template style="height: 100%">

  <div class="padding-class" style="height: 10%"></div>
  <div class="home-content">
    <div style="width: 100%;text-align: center;padding-top: 20px">
      <el-input
          placeholder="请输入你要搜索的文章"
          :prefix-icon="Search"
          style="width: 70%;text-align: left">
      </el-input>
      <el-button
          type="primary"
          style="width: 75px;margin: 10px 10px 10px 15px;"
      >
        <el-icon style="margin-right:3px">
          <Search/>
        </el-icon>
        搜索
      </el-button>
      <el-button
          type="primary"
          style="width: 75px;margin: 10px"
      >
        <el-icon style="margin-right:3px">
          <Delete/>
        </el-icon>
        清空
      </el-button>
    </div>
    <el-row>
      <el-col :span="16">
        <div class="left-content-article">
          <div class="blog-post" v-for="(blog,key) in blogs" :key="key" @click="showDetail(blog)">
            <div class="author-info">
              <img class="author-avatar" :src="blog.blogUsers.userProfilePhoto" alt="Author Avatar">
              <div>
                <span class="author-username">{{ blog.blogUsers.userNickname }}</span><br>
                <span style="font-weight: 100;color: #96969b"> {{ blog.blogUsers.userName }}</span><br>
                <span class="user-level colorful">level: {{ blog.blogUsers.userLevel }}</span>
              </div>
              <div class="article-label" style="margin-left: 50px">
                <font-awesome-icon icon="0"/>&nbsp;{{ blog.blogLabels.labelName }}
              </div>
              <div class="article-sort-label" style="margin-left: 50px">
                <font-awesome-icon :icon="['far', 'bookmark']"/>&nbsp;{{ blog.blogSorts.sortAlias }}
              </div>
              <div class="post-time">
                <font-awesome-icon :icon="['far', 'calendar']"/>
                {{ blog.articleDate.replace(new RegExp('T'), " ") }}
              </div>
            </div>
            <h2 class="article-title">{{ blog.articleTitle }}</h2>
            <p class="article-content">{{
                blog.articleContent.replace(/<[^>]*>/g, '').replace(/&nbsp;|&#160;|&amp;nbsp;/g, '').substring(0, 50)
              }}...</p>
            <div class="article-stats">
          <span>
            <font-awesome-icon :icon="['fas', 'eye']"/>&nbsp;{{ blog.articleViews }}
          </span>
              <span>
            <font-awesome-icon :icon="['fas', 'heart']" style="color: #fd2008;"/>&nbsp;{{ blog.articleLikeCount }}
          </span>
            </div>
          </div>
        </div>

        <div class="demo-pagination-block">
          <el-pagination
              style="padding: 10px;justify-content: center;"
              v-model:current-page="PageStore.page"
              :page-count="5"
              :small="false"
              background layout="prev, pager, next, jumper"
              :total="5"
              :pager-count="5"
              @current-change="handleCurrentChange"
          />
        </div>
      </el-col>


      <el-col :span="8">
        <div class="right-content-container">
          <div class="hot-article">
            <div class="sorts-introduce">
              <span class="sort-title">热门文章Top5</span>
            </div>
            <div class="blog-post" style="justify-items:center;text-align: center;width: 70%"
                 v-for="(blog,key) in blogs"
                 :key="key" @click="showDetail(blog)">
              <div class="author-info">
                <img class="author-avatar" :src="blog.blogUsers.userProfilePhoto" alt="Author Avatar">
                <div>
                  <span class="author-username">{{ blog.blogUsers.userNickname }}</span><br>
                  <span style="font-weight: 100;color: #96969b"> {{ blog.blogUsers.userName }}</span><br>
                  <span class="user-level colorful">level: {{ blog.blogUsers.userLevel }}</span>
                </div>
                <div class="post-time">
                  <font-awesome-icon :icon="['far', 'calendar']"/>
                  {{ blog.articleDate.replace(new RegExp('T'), " ") }}
                </div>
              </div>
              <h2 class="article-title">{{ blog.articleTitle }}</h2>
              <p class="article-content">{{ blog.articleContent.replace(/<[^>]+>/g, '').substring(0, 50) }}...</p>
              <div class="article-stats">
          <span>
            <font-awesome-icon :icon="['fas', 'eye']"/>&nbsp;{{ blog.articleViews }}
          </span>
                <span>
            <font-awesome-icon :icon="['fas', 'heart']" style="color: #fd2008;"/>&nbsp;{{ blog.articleLikeCount }}
          </span>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<style scoped>
.right-content-container {
  min-height: 96%;
  max-height: 96%;
  display: flex;
  flex-direction: column;
}

.sort-title {
  padding-top: 30px;
  font-weight: bolder;
  font-size: larger;
  color: #acbfd7
}

.hot-article {
  width: 90%;
  margin: 30px 30px 30px 5px;
  background-color: white;
  text-align: center;
  overflow-x: hidden;
  overflow-y: auto;
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}


.sorts-introduce {
  height: 10%;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}


.colorful {
  background: linear-gradient(to bottom, #96969b, #6c7b88, #484d52);
  -webkit-background-clip: text;
  color: transparent;
}

.demo-pagination-block {
  width: 100%;
}

.home-content {
  min-height: 100%;
  height: auto;
  width: 100%;
}

.left-content-article {
  min-height: 95%;
  max-height: 95%;
  display: flex;
  flex-direction: column;
}

.blog-post {
  background-color: #ffffff;
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.05);
  align-items: center;
  padding: 15px;
  border-radius: 10px;
  margin: 30px 10px 30px 40px;
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

.article-stats {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
</style>