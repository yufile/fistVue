<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="comment-title">
      <span class="review">用户评论</span>
      <div class="more">
        <span>更多</span>
        <span>></span>
      </div>
    </div>
    <div class="comment-context" v-for="item in commentInfo.list">
      <div class="context-header">
        <img :src="item.user.avatar" alt="">
        <span>{{item.user.uname}}</span>
      </div>
      <div class="context-review">
        <p>{{item.content}}</p>
      </div>
      <div class="comment-time">
        <p>{{timeFilter(item.created)}}</p>
        <p>{{item.style}}</p>
      </div>
      <div class="comment-img" >
        <img :src="img" v-for="img in item.images" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    timeFilter(value) {
      // 将时间戳转化 为对象
      const date = new Date(value * 1000)
      return moment(date).format('YYYY-MM-DD')
    }
  }
}
</script>

<style scoped>
.comment-info {
  width: 100%;
  padding: 10px;
  border-bottom: 4px solid #e5e5e5;
}
.comment-title {
  display: flex;
  justify-content: space-between;
  height: 44px;
  border-bottom: 1px solid #d2d2d2;
  line-height: 44px;
}
.more span:nth-of-type(1) {
  margin-right: 10px;
}
.comment-context {
  width: 100%;
}
.context-header {
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.context-header img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
}
.context-review {
  margin: 10px 0;
  letter-spacing: 0.1em;
  text-align: justify;
}
.comment-time {
  display: flex;
  font-size: 14px;
  color: #b1b1b1;
}
.comment-time p:nth-of-type(1){
  margin-right: 10px;
}
.comment-img img {
  width: 100px;
  margin:10px 10px 10px 0;
}
.comment-img {
  display: flex;
  flex-wrap: wrap;

}
</style>
