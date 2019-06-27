<template>
  <div class="article">
    <p>
        <router-link style="color:#000" :to="`/articleDetail/${article._id}`">{{article.title}}</router-link>
    </p>
    <p v-html="article.body"></p>
    <p>
      <i class="el-icon-timer"></i>&nbsp;
      <span class="time">{{article.ctime}}</span>
      &nbsp;&nbsp; | &nbsp;&nbsp;
      <i class="el-icon-view"></i>&nbsp;
      <span class="views">{{article.views}}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: ["article"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.article {
  height: 160px;
  padding: 10px;
  box-sizing: border-box;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 25px;
  box-shadow: 1px 1px 5px #5f5f5f;
}
.article p:nth-of-type(1) {
  height: 30px;
  line-height: 30px;
  font-size: 20px;
}

.article p:nth-of-type(2) {
  max-height: 60px;
  line-height: 20px;
  overflow: hidden;
}
.article p:nth-of-type(3) {
  font-size: 16px;
}
</style>