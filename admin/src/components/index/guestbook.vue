<template>
  <div class="guestbook">
    <div class="logo">留言板</div>
    <div class="con">
      <div class="aboutLeaveWords cl" id="aboutLeaveWords">
       

        <!-- <p class="WordsTitle">
          关于：目前有
          <span class="commentTotals">{{totals}}</span>条留言
        </p>


        <div class="messageBoard" v-for="(item,index) in commentList" :key="index">
          <aside class="wordsLeft">
            <img src="/public/imgs/3.jpg" alt>
          </aside>
          <aside class="wordsRight">
            <p>
              <span class="name">{{item.user_name}}</span>
            </p>
            <p class="con">
              <span class="reply" v-if="item.parent!=-1">
                回复
                <a href="#">@{{item.parent}}</a>
              </span>
              {{item.comments}}
            </p>
            <p class="time">
              {{item.time}}
              <a href="#sent_comment">[回复]</a>
            </p>
          </aside>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totals: "16",
      commentList: [
        {
          user_name: "zhnagy",
          parent: "parent",
          comments: "comments",
          time: "2019.6"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.logo {
  width: 100%;
  height: 210px;
  background-image: url("/imgs/bg5.jpg");
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

.gBMain .bloggerWords {
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  box-shadow: 1px 1px 5px rgba(97, 97, 97, 0.48);
  padding: 20px;
}
.gBMain .bloggerWords p {
  height: 40px;
  line-height: 40px;
  color: red;
}
.gBMain .bloggerWords p:nth-of-type(1) {
  color: #000;
}
</style>