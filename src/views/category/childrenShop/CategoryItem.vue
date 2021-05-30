<template>
  <div class="category-item">
    <scroll class="cate-scroll">
      <div class="item-cate" v-for="(item,index) in cate"
           :class="{active:index === count}"
           @click="isActive(index)">
        <span>{{item.title}}</span>
      </div>
    </scroll>

  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
export default {
  name: "CategoryItem",
  components: {
    Scroll
  },
  props: {
    cate: {
      type: Array ,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    isActive(index) {
      this.count = index;
      this.$emit('getMaitKey',index)
    }
  }
}
</script>

<style scoped>
.category-item {
  width: 100px;
  height: calc(100vh - 44px - 49px);
  background-color: #d2d2d2;
}
.active {
  color: var(--color-tint);
  border-left: #ff8198 4px solid;
  background-color: #fff;
  font-weight: bold;
}
.item-cate {
  width: 100%;
  height: 50px;
  font-size: 18px;
  line-height: 50px;
  text-align: center;
}
.cate-scroll {
  height: 100%;
  overflow: hidden;
}
</style>
