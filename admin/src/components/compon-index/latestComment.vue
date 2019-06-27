<template>
  <div class="latestComment">
    <h2>最近留言</h2>
    <p v-for="(item,index) in comments" :key="index">{{item}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: ["今天天气好", "你好啊", "我来了", "真的挺不错"]
    };
  },
  methods: {}
};
</script>

<style scoped>
.latestComment {
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

.latestComment h2 {
  font-size: 18px;
  color: #282828;
  font-weight: 600;
  height: 40px;
  line-height: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
}
.latestComment p {
  line-height: 40px;
  height: 40px;
    color: #7d7d7d;
  font-size: 16px;
}

</style>