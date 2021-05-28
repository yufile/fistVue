<template>
  <div class="detail">
    <detail-nav class="detail-nav" ref="navbar" @detailNav="detailNav" />
    <scroll class="detail-scroll" ref="scroll" :probe-type="3" @scrollBtn="scrollBtn">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-image-info :show="show" @detailImageLoad="detailImageLoad"/>
      <detail-param-info ref="params" :item-params="itemParams"/>
      <detail-comment-info ref="comment" :comment-info="rate"/>
      <goods ref="goods" :goods="recommend"/>
    </scroll>
    <detail-bottom-bar @joinCart="joinCart"/>
    <back-top @click.native="backTop()" v-show="isActiveTop" />
    <Toast :message="message" :show="showToast"/>
  </div>
</template>

<script>
import DetailNav from "@/views/details/Detailnav/DetailNav";
import DetailSwiper from "@/views/details/Detailnav/DetailSwiper";
import {getDetail,GoodMore,Shop,getRecommend} from "@/network/detail";
import DetailBaseInfo from "@/views/details/Detailnav/DetailBaseInfo";
import DetailShopInfo from "@/views/details/Detailnav/DetailShopInfo";
import DetailImageInfo from "@/views/details/Detailnav/DetailImageInfo";
import DetailParamInfo from "@/views/details/Detailnav/DetailParamInfo";
import DetailCommentInfo from "@/views/details/Detailnav/DetailCommentInfo";
import DetailBottomBar from "@/views/details/Detailnav/DetailBottomBar";

import Toast from "@/components/common/toast/Toast";
import Scroll from "@/components/common/scroll/Scroll";
import Goods from "@/components/content/goods/Goods";
import {antiShake} from "@/common/utils";
import  {bockBopMixin} from "@/common/mixins";
import {mapActions} from "vuex"
export default {
name: "Detail",
  components: {
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImageInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    Goods,
    Toast
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      show: {},//展示店铺衣服
      itemParams: {}, // 衣服参数
      rate : {}, // 评论信息
      recommend: [],
      navClick: [],//点击导航跳转到对应的位置
      getThemeTopY: null, //设置防抖
      currentIndex: 0, //设置滚动时 导航走
      message: '',
      showToast: false
    }
  },
  mixins:[bockBopMixin],
  created() {
  this.iid = this.$route.params.iid
    // 请求数据 详情数据
    getDetail(this.iid).then(res => {
      const data = res.result
      // 获取顶部轮播图
      this.topImages = data.itemInfo.topImages
      // 获取商品信息  1.标题之类的 2.销量之类的 3. 7天无理由退换 之类的
      this.goods = new GoodMore(data.itemInfo, data.columns, data.shopInfo.services)
      // 获取店铺信息
      this.shop = new Shop(data.shopInfo)
      // 展示衣服详情
      this.show = data.detailInfo
      // 衣服尺寸相关东西
      this.itemParams = data.itemParams
      // 评论信息
      if(data.rate.cRate !== 0){
        this.rate = data.rate
      }
      // 延迟操作 到下次dom更新时调用函数
      /*this.$nextTick(()=>{

      })*/
    })
    // 请求商品 数据
    getRecommend().then(res => {
      /*console.log(res.data)*/
      this.recommend = res.data.list;
    })
    this.getThemeTopY = antiShake(()=>{
      this.navClick = [];
      this.navClick.push(0);
      this.navClick.push(this.$refs.params.$el.offsetTop);
      this.navClick.push(this.$refs.comment.$el.offsetTop);
      this.navClick.push(this.$refs.goods.$el.offsetTop);
      // console.log(this.navClick)
    },300)
  },
  methods: {
    ...mapActions(['cartAdd']),
    // 加入购物车
    joinCart() {
      const proude = {}
      // 图片
      proude.images = this.topImages[0];
      // 价格
      proude.price = this.goods.realPrice;
      //标题
      proude.title = this.goods.title;
      // 类型
      proude.desc = this.goods.desc
      // id
      proude.iid = this.iid;
      // 内容
      /*this.$store.dispatch('cartAdd',proude)*/
      this.cartAdd(proude).then(res => {
        this.showToast = true;
        this.message = res
        setTimeout(() => {
          this.showToast = false
          this.message = ''
        },2000)
        console.log(res)
      })
    },
    detailNav(index) {
      this.$refs.scroll.scrollTo(0,-this.navClick[index],200)
    },
    /*// 在这里 可以获取组件内部的已经渲染好的标签 用来做锚点 类似效果 详情页图片加载完成之后赋值*/
    detailImageLoad() {
      this.getThemeTopY()
    },
    scrollBtn(position) {
      this.isActiveTop = (-position.y) > 1000
       // 获取当前滚动位置的 y坐标
      let positionY = -position.y + 44
      // 滚动到哪里 让相应的导航也跟着走
      let length = this.navClick.length
      for (let i = 0;i < length;i++){
        // this.currentIndex !== i 防止赋值条件过于频繁
        if(this.currentIndex !== i && (i < length-1 && positionY >= this.navClick[i] && positionY < this.navClick[i+1])|| (i === length-1 && positionY >= this.navClick[i] ) ){
          this.currentIndex = i
          this.$refs.navbar.currentIndex = this.currentIndex
        }
      }
    }
  }
}
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.detail-scroll {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>
