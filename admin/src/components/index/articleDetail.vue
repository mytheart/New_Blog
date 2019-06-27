<template>
  <div class="articleDetail">
    <div class="articleDetail" id="articleDetail">
      <h2>{{article.title}}</h2>
      <p>
        作者: 张印 分类:
       发布于:
        <span class="ctime">{{article.ctime}}</span> 浏览(
        <span class="views">{{article.views}}</span>)
      </p>
      <div class="content" v-html="article.body"></div>
    </div>

    <!-- <p class="switch" id="switchBox">
      <span class="prevBlog">
        <a :href="'/blog_detail.html?id='+(id-1)">上一篇</a>
      </span>
      <span class="nextBlog">
        <a :href="'/blog_detail.html?id='+(id+1)">下一篇</a>
      </span>
    </p> -->
  </div>
</template>

<script> 
export default {
    props:['id'],
    created(){
        this.fetchArticleDetail()
    },
  data() {
    return {
      article: {}
    };
  },
  methods: {
      fetchArticleDetail(){
          this.$http.get(`/rest/articles/${this.id}`).then(res=>{
              this.article=res.data
          })
      }
  }
};
</script>

<style scoped>
.articleDetail {
  box-sizing: border-box;
  width: 100%;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 1px 1px 10px #5f5f5f;
}

.articleDetail p {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #ddd;
}
.articleDetail p a {
  color: #337ab7;
}

.articleDetail .content {
  padding: 20px 0;
  line-height: 30px;
}

.switch {
  margin-top: 30px;
  height: 30px;
  line-height: 30px;
}

.switch span {
  display: inline-block;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 15px;
  width: 70px;
  text-align: center;
}
.switch span a {
  color: #337ab7;
  font-size: 12px;
}

.switch .nextBlog {
  float: right;
}
</style>