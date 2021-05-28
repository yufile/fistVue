<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle" ><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
name: "TabBarItem",
  props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    }
  ,
  data() {
    return {
     /* isActive: false*/
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  },
  computed: {
    isActive() {
      /*当前点击的路由/home 和当前this.path路由相同时 才让才是当前点击的按钮 indexOf == -1说明不相等 不相等的不让变色*/
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      // 判断当前 isActive是否是真 如果是真就将activeColor中的颜色赋值给:style 否则就不
      return this.isActive ? {color: this.activeColor}:{}
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
</style>
