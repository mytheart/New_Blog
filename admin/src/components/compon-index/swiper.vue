<template>
  <div class="block">
    <el-carousel height="450px">
      <el-carousel-item v-for="(item,index) in data" :key="index">
        <h1>{{ item.text }}</h1>
        <img :src="item.src" alt>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          src: "/imgs/1.jpg",
          text: "大家好，我叫张印"
        },
        {
          src: "/imgs/2.jpg",
          text: "我是一名web全栈开发爱好者，平时喜欢读书"
        },
        {
          src: "/imgs/3.jpg",
          text: "很高兴能在这里和大家分享我对技术和生活的思考"
        }
      ]
    };
  }
};
</script>

<style scoped>
.el-carousel__item h1 {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 10px;
  color: #fff;
  line-height: 150px;
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
}
</style>