<template>
  <div class="detail-shop">
    <div class="shop-title">
      <img :src="shop.logo" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-status">
      <div class="shop-sales">
        <div class="sales">
          <span>{{filter(shop.sell)}}</span>
          <span>总销量</span>
        </div>
        <div class="sales">
          <span>{{shop.goodsCount}}</span>
          <span>商品</span>
        </div>
        <div class="sales">
          <span>{{filter(shop.fans)}}</span>
          <span>粉丝</span>
        </div>
      </div>
      <div class="shop-minute">
        <div class="minute" v-for="item in shop.score">
          <span>{{item.name}}</span>
          <span :style="{color:item.isBetter?'red':'green'}">{{item.score}}</span>
          <span :class="{isActive:item.isBetter,noActive:!item.isBetter}">{{item.isBetter?'高':'低'}}</span>
        </div>
      </div>
    </div>
    <div class="shop-into">
      <a :href="shop.src">
        <div>进店逛逛</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    filter(value){
      if(value < 10000){
        return value
      }else {
        return  (value/10000).toFixed(1) +'万'
      }
    }
  }
}
</script>

<style scoped>
.detail-shop {
  width: 100%;
  padding: 10px;
}
.shop-title {
  display: flex;
  align-items: center;
  font-size: 14px ;
  font-weight: bold;
  font-family:  Helvetica, sans-serif;
}
.shop-title img {
  width: 50px;
  border-radius: 50% ;
  margin-right: 10px;
}
.shop-status {
  display: flex;
  margin: 10px 0;
  align-items: center;
}
.shop-sales {
  display: flex;
  flex: 1;
  border-right: 1px solid #d2d2d2 ;
  font-size: 14px;
}
/**/
.shop-minute {
  flex: 1;
}
.sales {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
}
.minute {
  display: flex;
  justify-content: center;
  margin-top: 5px;
  font-size: 14px;
}

.minute span:nth-of-type(2) {
  width: 50px;
  text-align: center;
}
.shop-into {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.shop-into a div {
  width: 150px;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  text-align: center;
  background-color: #d2d2d2;
}
.isActive {
  color: white;
  background-color: red;
}
.noActive {
  color: white;
  background-color: green;
}
</style>
