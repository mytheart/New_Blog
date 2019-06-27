<template>
    <a :href="data.href">
       <div class="block" :style="data.background">
        <div class="con">
          <p>{{data.text}}</p>
        </div>
    </div>
    </a>
 
</template>

<script>
export default {
    props:['data'],
  data () {
    return {
    }
  },
  methods: {}
}
</script>

<style scoped>
.block{
  box-shadow: 1px 1px 3px #5f5f5f;
  width: 360px;
  height: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  transition: all .5s;
  background-size: 100% 100%;
}
.block .con{
  position: relative;
  width: 85%;
  height: 85%;
  border: 1px solid purple;
  opacity: 1;
  transition: all .5s;
}
.block:hover{
  opacity: 1;
}
.block .con:hover{
  border: none;
}


.block .con p{
  padding: 5px;
  position: absolute;
  bottom: 0;
  color: #000;
  font-size: 16px;
  font-weight: bold;
}
</style>