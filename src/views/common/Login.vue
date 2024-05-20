<script setup lang="ts">

import {useRouter} from "vue-router";
import {reactive} from "vue";
import {message} from '../../utils/resetMessage.js'
const router = useRouter()

const user = reactive({
  username: '',
  password: '',
  code: ''
})

const login = () => {
  if (user.username === 'admin' && user.password === 'admin' && user.code === '123') {

    router.push({path:'/Home/Content'}).then(()=>{
      message.success("登陆成功")
    })
  }else{
    message.error("登陆失败")
  }
}

const register = () => {
    router.push({path:'/Register'})
}

</script>

<template>
  <div class="login">
    <el-form label-width="55px">
      <h1 class="title">用户登录</h1>
      <el-form-item label="用户名">
        <el-input type="text" v-model="user.username" placeholder="登录账号" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="user.password" placeholder="登录密码" autocomplete="off"
                  show-password></el-input>
      </el-form-item>
      <el-form-item label="验证码">
        <el-input type="text" v-model="user.code" placeholder="验证码" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div>
      <div style="text-align: center;margin: 10px">
        <el-row>
          <el-col :span="12">
            <el-image/>
          </el-col>
          <el-col :span="12">
            <el-link type="primary" style="height: 40px;width: 120px;">
              看不清,换一张试试
            </el-link>
          </el-col>
        </el-row>
      </div>
      <div style="text-align: center;margin: 30px 10px 10px;">
        <el-row>
          <el-col :span="12">
            <el-button type="primary" @click="login()" style="width: 60%">登录</el-button>
          </el-col>
          <el-col :span="12">
            <el-button type="primary" @click="register()" style="width: 60%">注册</el-button>
          </el-col>
        </el-row>
      </div>
      <el-row style="margin: 20px 0 0;">
        <el-link type="primary">忘记密码</el-link>
      </el-row>
    </div>
  </div>
</template>

<style scoped>
.login {
  align-items: center;
  border-radius: 10px;
  margin: 12% auto;
  width: 350px;
  padding: 30px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  text-align: left;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
}


.title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}

</style>