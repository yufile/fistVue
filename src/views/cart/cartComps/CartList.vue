<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,index) in showShopList" :key="index" :proude="item"/>
    </scroll>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

import Scroll from "@/components/common/scroll/Scroll";
import CartListItem from "@/views/cart/cartComps/CartListItem";
export default {
  name: "CartList",
  components: {
    CartListItem,
    Scroll
  },
  computed: {
    ...mapGetters(['showShopList'])
  },
  activated() {
    // 当 每次进入到 这个页面时给刷新一下滚动高度
    this.$refs.scroll.scroll.refresh()
  }
}
</script>

<style scoped>
.cart-list {
  height: calc(100vh - 49px - 44px - 45px);
}
.content {
  height: 100%;
  overflow: hidden;
}
</style>
