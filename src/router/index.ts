import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import("../views/common/Login.vue"),
    },
    {
      path:'/Home',
      name: 'Home',
      component: () => import("../views/Home.vue"),
      children:[
        {
          path:'/Home/Content',
          name: 'Content',
          component: () => import("../views/content/Article.vue"),
        },
        {
          path:'/Home/Article',
          name: 'Article',
          component: () => import("../views/article/ShowArticle.vue"),
        },
        {
          path:'/Home/PersonalCenter',
          name: 'PersonalCenter',
          component: () => import("../views/Center/PersonalCenter.vue")
        },
      ]
    },
    {
      path:'/Register',
      name: 'Register',
      component: () => import("../views/common/Register.vue")
    },

  ]
})

export default router
