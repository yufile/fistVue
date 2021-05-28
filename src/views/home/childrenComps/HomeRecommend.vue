<template>
  <div class="home-rec">
    <div v-for="item in recommend" class="rec-item">
      <a :href="item.link">
        <img :src="item.image" alt="" >
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props:{
    recommend:{
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
.home-rec {
  display: flex;
  text-align: center;
  padding: 10px 0 20px 0;
  border-bottom:10px solid #eee;
  font-size: 14px;
}
.rec-item {
  flex: 1;
}
.rec-item img {
  width: 80%;
  margin-bottom: 10px;
}
</style>
