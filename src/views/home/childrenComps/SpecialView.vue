<template>
  <div class="special">
    <a href="http://act.mogujie.com/zzlx67">
      <img src="@/assets/img/home/recommend_bg.jpg" alt="" @load="special">
    </a>
  </div>
</template>

<script>
export default {
name: "SpecialView",
  methods: {
    special() {
      this.$emit('special')
    }
  }
}
</script>

<style scoped>
.special img{
  width: 100%;
}
</style>
