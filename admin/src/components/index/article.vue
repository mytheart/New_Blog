<template>
  <div class="articleList">
    <div class="logo">人气文章排行榜</div>
    <div class="content">
      <ul>
        <li v-for="(item,index) in articles" :key="index">
          <span class="con-left">{{item.time}}</span>

          <a :href="item.href">{{item.title}}</a>
          <router-link :to="`/articleDetail/${item._id}`">{{item.title}}</router-link>
          <span class="con-right">
             <i class="el-icon-view"></i>
            <span class="views">{{item.views}}</span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  created(){
    this.fetchArticle()
  },
  data() {
    return {
      articles: []
    };
  },
  methods: {
     fetchArticle() {
      this.$http.get("/rest/articles").then(res => {
        this.articles = res.data;
      });
    }
  }
};
</script>

<style scoped>
.logo {
  width: 100%;
  height: 210px;
  background-image: url("/imgs/bg1.jpg");
  background-size: 100% 100%;
  text-align: center;
  line-height: 210px;
  color: #fff;
  font-size: 30px;
  color: #fff;
}
.content {
  box-sizing: border-box;
  position: relative;
  min-height: 500px;
  margin: 50px 0;
  padding: 60px 48px;
  background: #fff;
  -webkit-box-shadow: 0 2px 5px 0 rgba(146, 146, 146, 0.1);
  -moz-box-shadow: 0 2px 5px 0 rgba(146, 146, 146, 0.1);
  box-shadow: 0 2px 5px 0 rgba(146, 146, 146, 0.1);
}
ul li{
  height: 40px;
  line-height: 40px;
   color: #7d7d7d;

}
.content .con-left{
  margin-right: 20px;
}
.content .con-right{
  float: right;
}
.content a{
  color: #7d7d7d;
}

</style>