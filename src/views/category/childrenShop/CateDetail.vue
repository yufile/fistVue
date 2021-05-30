<template>
  <div class="cate-detail">
    <div class="cate-item" v-for="item in detail">
      <a :href="item.link" >
        <img :src="item.image" alt="" @load="tuload">
        <span>{{item.title}}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CateDetail",
  props: {
    detail: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    tuload() {
      this.$emit('tuload')
    }
  }

}
</script>

<style scoped>
.cate-detail {
  width: 100%;
  display: flex;
  flex-wrap: wrap ;
  padding: 10px;
}
.cate-item a {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}
.cate-item {
  display: flex;
  width: 33%;
}
.cate-item a img {
  width: 50px;
  margin: 20px;
}

</style>
