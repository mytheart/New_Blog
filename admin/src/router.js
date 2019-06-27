import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Main from './views/Main.vue'
import PageIndex from './views/Index.vue'


// admin
import CategoryEdit from './components/admin/CategoryEdit.vue'
import CategoryList from './components/admin/CategoryList.vue'

import ArticleEdit from './components/admin/ArticleEdit.vue'
import ArticleList from './components/admin/ArticleList.vue'

import AdminUserEdit from './components/admin/AdminUserEdit.vue'
import AdminUserList from './components/admin/AdminUserList.vue'



// pagaIndex
import Index from './components/index/index.vue'
import Article from './components/index/article.vue'
import About from './components/index/about.vue'
import Links from './components/index/links.vue'
import Guestbook from './components/index/guestbook.vue'
import ArticleDetail from './components/index/articleDetail.vue'



Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/login', name: 'login', component: Login, meta: { isPublic: true } },
    {
      path: '/admin',
      name: 'admin',
      component: Main,
      children: [
        { path: 'categoryEdit', component: CategoryEdit },
        { path: 'categoryEdit/:id', component: CategoryEdit, props: true },
        { path: 'categoryList', component: CategoryList },

        { path: 'articleEdit', component: ArticleEdit },
        { path: 'articleEdit/:id', component: ArticleEdit, props: true },
        { path: 'articleList', component: ArticleList },


        { path: 'administratorEdit', component: AdminUserEdit },
        { path: 'administratorEdit/:id', component: AdminUserEdit, props: true },
        { path: 'administratorList', component: AdminUserList },

      ]
    },
    {
      path: '/',
      name: 'PageIndex',
      component: PageIndex,
      redirect: '/index',
      children: [
        { path: 'index', name: 'index', component: Index, meta: { isPublic: true } },
        { path: 'articles', name: 'articles', component: Article, meta: { isPublic: true } },
        { path: 'about', name: 'about', component: About, meta: { isPublic: true } },
        { path: 'links', name: 'link', component: Links, meta: { isPublic: true } },
        { path: 'guestbook', name: 'guestbook', component: Guestbook, meta: { isPublic: true } },
        { path: 'articleDetail/:id', name: 'articleDetail', component: ArticleDetail, props:true,meta: { isPublic: true } }
      ]
    }

  ]
})
router.beforeEach((to, from, next) => {
  console.log(to.meta)
  if (!to.meta.isPublic && !localStorage.token) {
    console.log(1)
    return next('/login')
  }
  console.log(2)
  next()
})
export default router