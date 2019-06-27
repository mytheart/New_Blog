<template>
  <div class="hotTags">
    <h2>个人分类</h2>
    <div class="content">
      <a href="#" v-for="(item,index) in tags" :key="index">{{item.name}}</a>
    </div>
  </div>
</template>

<script>
export default {
  props:['tags'],
  data() {
    return {
    };
  },
  methods: {}
};
</script>

<style scoped>
.hotTags {
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
.hotTags h2 {
  font-size: 18px;
  color: #282828;
  font-weight: 600;
  height: 40px;
  line-height: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
}

.hotTags a {
  display: inline-block;
  font-size: 12px;
  line-height: 20px;
  padding: 4px 6px;
  margin: 0 8px 8px 0;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  color: rgba(0, 0, 0, 0.44);
  background-color: rgba(255, 255, 255, 0.97);
}
</style>