<template>
  <div class="about">
    <div class="logo">关于本站</div>
    <div class="con">
      <h2>关于我</h2>
      <ul>
        <li>张印，男，大三，本科，自学非培训。喜欢电子产品，喜欢和计算机</li>
        <li>喜欢web全栈开发，喜欢原生js，喜欢研究源码，喜欢研究数据结构和算法。擅长Vue.js + Node.js + Mongodb全栈开发</li>
        <p>学习是一种生活方式</p>
        <li>平时喜欢看书，喜欢写博客记录日常学习生活</li>
        <li>
          CSDN博客:
          <a href="https://blog.csdn.net/weixin_42755677">https://blog.csdn.net/weixin_42755677</a>
        </li>
        <li>
          Github:
          <a href="https://github.com/mytheart">https://github.com/mytheart</a>
        </li>
      </ul>
      <h2>关于本站</h2>
      <ul>
        <li>本站尚在建站中，功能还不完善，可暂时移步至我的CSDN博客</li>
        <li>下一步将做增加博客功能，做移动端适配</li>
        <li>本站使用 Vue.js + Node.js + Mongodb开发,服务器为阿里云轻量型服务器，系统Linux(Centos7)</li>
        <li>本章不定时更新，日常更新主要在CSDN</li>
        <li>有些文章并不是写给"人"看的，仅仅是作为作者自己的备忘录</li>
        <li>欢迎大家留言，欢迎交换友链</li>
      </ul>
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
  background-image: url("/imgs/bg3.jpg");
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
h2 {
  padding: 10px 0;
  margin: 18px 0;
  color: #555;
  font-weight: 700;
  color: #999;
}
ul > li {
  height: 30px;
  line-height: 30px;
}
</style>