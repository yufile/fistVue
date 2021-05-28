<template>
<!-- 判断当前 goods keys是不是空 如果是空 就不在渲染后面的标签 -->
  <div class="detail-base" v-if="Object.keys(goods) !== 0">
<!--  标题  -->
    <div class="title">{{goods.title}}</div>
<!--  价格之类的  -->
    <div class="price-info">
      <div class="newPrice">{{goods.newPrice}}</div>
      <div class="oldPrice">{{goods.oldPrice}}</div>
      <div v-if="goods.discount" class="discount">{{goods.discount}}</div>
    </div>
<!-- 销量之类的   -->
    <div class="columns-info">
      <span v-for="item in goods.columns" class="sales-volume">{{item}}</span>
    </div>
<!--  退运费 之类  遍历长度时 会从1开始所以要去取下标需要index - 1-->
    <div class="info-services">
     <span class="info-services-item" v-for="index in goods.servicesSum">
       <img :src="goods.services[index - 1].icon" alt="">
       <span>{{goods.services[index - 1].name}}</span>
     </span>
    </div>
  </div>
</template>

<script>
export default {
name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      Goods: this.goods
    }
  }
}
</script>

<style scoped>
.detail-base {
  padding: 5px;
}
.title {
  margin: 10px 0 10px 0;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.1em;
  text-align: justify;
}
.price-info {
  display: flex;
  margin: 0 10px;
}
.newPrice {
  font-size: 25px;
  color: var(--color-tint);
}
.oldPrice {
  margin: 10px 5px 0 5px;
  font-size: 12px;
  text-decoration: line-through;
}
.discount {
  height: 20px;
  line-height: 20px;
  background-color: var(--color-tint);
  border-radius: 10px;
  text-align: center;
  font-size: 14px;
  color: #fff;
}
.columns-info {
  display: flex;
  font-size: 14px;
  text-align: center;
  justify-content: space-between;
  margin-top: 10px;
  padding-bottom: 15px;
  border-bottom: 2px solid #d2d2d2 ;
}
.info-services {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  padding-bottom: 20px;
  border-bottom: 5px solid #d2d2d2;
}
.info-services-item img{
  width: 10px;
}
.info-services-item {
  font-size: 13px;
}
</style>
