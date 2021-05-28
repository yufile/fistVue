<template>
  <div class="detail-nav">
    <nav-bar>
      <template v-slot:left>
        <div class="detail-img" @click="backImage">
          <img src="@/assets/img/common/back.svg" alt="">
        </div>
      </template>
      <template v-slot:center >
        <div class="detail-item">
          <div class="item-all" v-for="(item, index) in titles"
          :class="{active:index === currentIndex}" @click="titleClick(index)">{{item}}</div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
name: "DetailNav",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index ;
      this.$emit('detailNav',index)
    },
    backImage() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.detail-item {
  display: flex;
}
.item-all {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.detail-img {
  margin-top: 8px;
}
</style>
