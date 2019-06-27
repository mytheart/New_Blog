<template>
  <div class="home">
    <el-container>
      <el-header height="80px">
        <div class="con">
          <a href="#" class="logo"></a>
          <ul class="lists">
            <li>
              <router-link tag="a" to="/index">首页</router-link>
            </li>
            <li>
              <router-link tag="a" to="/articles">文章列表</router-link>
            </li>
            <li>
              <router-link tag="a" to="/about">关于本站</router-link>
            </li>
            <li>
              <router-link tag="a" to="/links">友情链接</router-link>
            </li>
            <li>
              <router-link tag="a" to="/guestbook">留言板</router-link>
            </li>
          </ul>
          <a href="#" class="login">
            <el-button type="primary" @click="$router.push('/login')">登录</el-button>
          </a>
        </div>
      </el-header>

      <el-main>
        <div class="con">
          <router-view height="0"></router-view>
        </div>
          
      </el-main>

      <el-footer height>
        <footer>
          <ul class="tags">
            <li>
              <a href="#">javaScript</a>
            </li>
            <li>
              <a href="#">Linux</a>
            </li>
            <li>
              <a href="#">Vue.js</a>
            </li>
            <li>
              <a href="#">node.js</a>
            </li>
            <li>
              <a href="#">React.js</a>
            </li>
            <li>
              <a href="#">webpack</a>
            </li>
            <li>
              <a href="#">jQuery</a>
            </li>
            <li>
              <a href="#">Es6</a>
            </li>
            <li>
              <a href="#">bootstrap</a>
            </li>
            <li>
              <a href="#">java</a>
            </li>
            <li>
              <a href="#">mysql</a>
            </li>
            <li>
              <a href="#">数据结构和算法</a>
            </li>
            <li>
              <a href="#">学习经验</a>
            </li>
            <li>
              <a href="#">学习笔记</a>
            </li>
            <li>
              <a href="#">视频分享</a>
            </li>
          </ul>
          <p>Copyright © 2019-2019 张印个人博客 All rights reserved. 由免费开源的WordPress强力驱动. 鲁ICP备14017955号站长统计</p>
        </footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  
}
</script>


<style scoped>

.con {
  width: 1140px;
  margin: 0 auto;
  height: 100%;
}
.el-header {
  background-color: #fff;
  line-height: 80px;
}
.el-header .logo {
  display: inline-block;
  width: 150px;
  height: 80px;
  background-image: url("../assets/1277.gif");
  background-size: cover;
  margin-right: 50px;
}
.el-header ul {
  display: inline-block;
}
.el-header ul li {
  list-style: none;
  float: left;
  /* width: 50px; */
  margin-right: 50px;
}
.el-header ul li a {
  font-size: 16px;
  color: #000;
}

.el-header .login {
  float: right;
}

main.el-main {
  padding: 0;
}

footer {
  margin-top: 30px;
  color: #a2a2a2;
  background-color: #191818;
  padding: 25px;
}

footer ul {
  height: 35px;
  text-align: center;
}

footer ul li {
  display: inline-block;
  margin-left: 15px;
}

footer ul li a {
  color: #a2a2a2;
}

footer p {
  text-align: center;
}
</style>
