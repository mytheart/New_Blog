<template>
  <div class="index">
    <!-- 热门标签 -->
    <!-- 热门文章 -->
    <!-- 最新评论 -->
    <!-- 导航链接 -->
    <!-- background-image:url(/imgs/1.jpg) -->
    <el-row>
      <el-col :span="16" class="main-left">
        <swiper></swiper>
      </el-col>
      <el-col :span="8">
        <block :data="items[0]" class="block1 cov"></block>
        <block :data="items[1]" class="block2 cov"></block>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="16" class="main-left">
        <block :data="items[2]" class="block1 cov"></block>
        <block :data="items[3]" class="block1 cov"></block>
      </el-col>
      <el-col :span="8">
        <block :data="items[4]" class="block1 cov"></block>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="16" class="main-left">
        <blog-article v-for="(item,index) in articles" :key="index" :article="item"></blog-article>
      </el-col>
      <el-col :span="8">
        <hot-tags class="cov" :tags="tags"></hot-tags>
        <hot-article class="cov"></hot-article>
        <latest-comment class="cov"></latest-comment>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Swiper from "../compon-index/swiper";
import Block from "../compon-index/block";
import BlogArticle from "../compon-index/article";
import HotTags from "../compon-index/hotTags";
import HotArticle from "../compon-index/hotArticle";
import latestComment from "../compon-index/latestComment";
export default {
  created() {
    this.fetchArticle();
    this.fetchTags();
  },
  data() {
    return {
      items: [
        {
          text: "我的CSDN博客，记录成长，记录生活",
          background: "background-image:url(/imgs/csdn.jpg)",
          href: "https://blog.csdn.net/weixin_42755677"
        },
        {
          text: "我的bilibili首页",
          background: "background-image:url(/imgs/bilibili.jfif)",
          href: "https://www.bilibili.com/"
        },
        {
          text: "我的掘金首页",
          background: "background-image:url(/imgs/juejin.jpg)",
          href: "https://juejin.im/user/5ce62d116fb9a07ebd48ae64"
        },
        {
          text: "我的Github地址",
          background: "background-image:url(/imgs/github.jfif)",
          href: "https://github.com/mytheart"
        },
        {
          text: "刷题利器leetcode",
          background: "background-image:url(/imgs/leetcode.jfif)",
          href: "https://leetcode-cn.com/problemset/all/"
        }
      ],
      articles: [],
      tags: []
    };
  },
  methods: {
    fetchArticle() {
      this.$http.get("http://120.79.182.51/web/api/rest/articles").then(res => {
        this.articles = res.data;
      });
    },
    fetchTags() {
      this.$http.get("http://120.79.182.51/web/api/rest/categories").then(res => {
        this.tags = res.data;
      });
    }
   
  },
  components: {
    Swiper,
    Block,
    BlogArticle,
    HotTags,
    HotArticle,
    latestComment
  }
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.main-left {
  padding-right: 40px;
}
.cov {
  float: right;
}
.block1 {
  margin-bottom: 30px;
}
</style>