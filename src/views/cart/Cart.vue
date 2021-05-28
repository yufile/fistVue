<template>
  <div class="cart">
    <!--  导航  -->
    <nav-bar class="cart-nav">
      <template v-slot:center>
        <div>购物车({{shopLength}})</div>
      </template>
    </nav-bar>
    <!--  内容  -->
    <cart-list/>
    <!--  结算  -->
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import CartList from "@/views/cart/cartComps/CartList";
import CartBottomBar from "@/views/cart/cartComps/CartBottomBar";

import {mapGetters} from "vuex"
export default {
name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['shopLength'])
  }

}
</script>

<style scoped>
.cart-nav{
  background-color: var(--color-tint);
  color: #fff;
}
</style>
