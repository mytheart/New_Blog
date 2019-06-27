<template>
  <div class="links">
    <div class="logo">友情链接</div>
    <div class="con">
      <h2>暂无，欢迎留言交换友链</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.logo {
  width: 100%;
  height: 210px;
  background-image: url("/imgs/bg4.jpg");
  background-size: 100% 100%;
  text-align: center;
  line-height: 210px;
  color: #fff;
  font-size: 30px;
  color: #fff;
}
.con {
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
h2{
  color: #999;
}
</style>