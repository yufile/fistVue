<template>
  <div class="detail-info" v-if="Object.keys(show).length !== 0" >
    <div class="image-title">
      <div class="title-left"></div>
      <div class="title-center">{{show.desc}}</div>
      <div class="title-right"></div>
    </div>
    <div class="image-center">
      <div class="content" v-for="index in show.detailImage">
        <span>{{show.detailImage.key}}</span>
        <div v-for="indext in index.list">
          <img :src="indext" alt="" @load="detailImageLoad">
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "DetailImageInfo",
  props:{
    show: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    detailImageLoad() {
      this.$emit('detailImageLoad')
    }
  }
}
</script>

<style scoped>
.detail-info {
  margin: 10px;
}
.title-left:before ,.title-right:after{
  content: '';
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}
.title-left {
  width: 90px;
  height: 1px;
  background-color: #666666;
  position: relative;
}
.title-right {
  width: 90px;
  height: 1px;
  background-color: #666666;
  position: relative;
  float: right;
}
.title-center {
  margin: 20px 0;
  letter-spacing: 0.1em;
  text-align: justify;
}
.image-center {
  padding-top: 20px ;
}
.content span {
  display: inline-block;
  padding: 10px 0;
}
.content div img {
  width: 100%;
}
</style>
