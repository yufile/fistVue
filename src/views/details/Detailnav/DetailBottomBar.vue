<template>
  <div class="bottom-bar">
    <div class="bottom-service">
      <i class="icon one"></i>
      <span>客服</span>
    </div>
    <div class="bottom-shop">
      <i class="icon two"></i>
      <span>店铺</span>
    </div>
    <div class="bottom-collect">
      <i class="icon three"></i>
      <span>收藏</span>
    </div>
    <div class="bottom-cart" @click="joinCart">
      <span>加入购物车</span>
    </div>
    <div class="bottom-buy">
      <span>购买</span>
    </div>
  </div>
</template>

<script>
export default {
name: "DetailBottomBar",
  methods: {
    joinCart() {
      this.$emit('joinCart')
    }
  }
}
</script>

<style scoped>
.bottom-bar {

  height: 49px;
  background-color: #fff;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  margin-bottom: 35px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  font-size: 14px;
}
.bottom-bar div {
  flex: 1;
}
.bottom-bar .bottom-cart {
  flex: 1.5;
}
.bottom-bar .bottom-buy {
  flex: 1.5;
}
.icon {
  display: block;
  width: 22px;
  height: 22px;
  text-align: center;
  margin: 5px auto ;
  background: url("~@/assets/img/detail/detail_bottom.png") 0 0/100% no-repeat;
}
.one {
  background-position-y: -52px;
}
.two {
  background-position-y: -98px ;
}
.bottom-cart {
  line-height: 49px;
  display: inline-block;
  height: 49px;
  background-color: #fdda33;
}
.bottom-buy {
  line-height: 49px;
  display: inline-block;
  height: 49px;
  background-color: #ffb0e8;
  color: #fff;
}
</style>
