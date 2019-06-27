<template>
  <div class="hotArticles">
    <h2>热门文章</h2>
    <p v-for="(item,index) in articles" :key="index">
      <a :href="item.src">{{item.title}}</a>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          title: "JavaScript（浏览器）执行的时间线",
          src: "http://www.mytheart.cn"
        },
        {
          title: "JavaScript（浏览器）执行的时间线",
          src: "http://www.mytheart.cn"
        },
        {
          title: "JavaScript（浏览器）执行的时间线",
          src: "http://www.mytheart.cn"
        },
        {
          title: "JavaScript（浏览器）执行的时间线",
          src: "http://www.mytheart.cn"
        },
        {
          title: "JavaScript（浏览器）执行的时间线",
          src: "http://www.mytheart.cn"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.hotArticles {
  box-sizing: border-box;
  box-shadow: 1px 1px 5px #5f5f5f;
  width: 360px;
  margin-bottom: 25px;
  padding: 20px;
  position: relative;
  overflow: hidden;
  background: #fff;
  margin-bottom: 30px;
}

.hotArticles h2 {
  font-size: 18px;
  color: #282828;
  font-weight: 600;
  height: 40px;
  line-height: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
}
.hotArticles p {
  line-height: 40px;
  height: 40px;
}
.hotArticles p a {
  color: #7d7d7d;
  font-size: 16px;
}
</style>