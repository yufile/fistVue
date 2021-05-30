<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center><div>购物街</div></template>
    </nav-bar>
    <tab-control :title="['流行','新款','精选']"
                 @btnClick='btnClick'
                  ref="tabControl2"
                  class="tab-control1"
                  v-show="isFixed"/>
    <scroll class="content" ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @scrollBtn = 'scrollBtn'
            @pullingUp ='pullingUp'>
        <!--   轮播图 -->
        <children-swiper :banner="banner" @swiperImageLoad='swiperImageLoad'/>
        <home-recommend :recommend="recommend"  />
        <special-view @special="special"/>
        <!--    商品头-->
        <tab-control class="control-scroll"
                     :title="['流行','新款','精选']"
                     @btnClick='btnClick'
                      ref="tabControl1"/>
        <!-- 商品  -->
        <goods :goods="showGoods"/>
    </scroll>
<!--  @click.native组件是不能添加 点击事件的 如果加上native就可以添加点击事件  -->
    <back-top @click.native="backTop()" v-show="isActiveTop"/>
  </div>
</template>

<script>
import ChildrenSwiper from "@/views/home/childrenComps/ChildrenSwiper";
import HomeRecommend from "@/views/home/childrenComps/HomeRecommend";
import SpecialView from "@/views/home/childrenComps/SpecialView";

import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabcontrol/TabControl";
import Goods from "@/components/content/goods/Goods";
import Scroll from "@/components/common/scroll/Scroll";
import {bockBopMixin,suckTopNav} from "@/common/mixins";
import {getHomeMultidata,getHomeGoods} from "@/network/home";
export default {
  name: "Cart",
  components: {
    ChildrenSwiper,
    HomeRecommend,
    SpecialView,
    NavBar,
    TabControl,
    Goods,
    Scroll,
  },
  data() {
    return {
      banner: [],
      recommend: [],
      // 请求商品数据
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      // 展示的数据 pop
      offsetTop: 0,
      isFixed: false,
      scrollY: 0 ,// 保存当前滑动位置
    }
  },
  // 混入
  mixins:[bockBopMixin,suckTopNav],
  created() {
    this.getHomeMultidata();
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
// 这两个函数使用的条件 需要设置keep-alive
  activated() {
    // 回到原来页面时 将页面刷新 并且 将离开时滚动的位置 赋值给当前页面 就相当于将当前页面保存滑动位置
    this.$refs.scroll.scroll.refresh()
    this.$refs.scroll.scroll.scrollTo(0 ,this.scrollY, 0)
  },
  deactivated() {
    /*console.log('------')*/
    // 离开当前页面时将在当前页面滚动到的位置 保存到 scrollY中
    this.scrollY = this.$refs.scroll.scroll.y
  },
  computed :{
    // 将展示的数据 封装起来 标签代码 不会太差长
    showGoods() {
      return this.goods[this.currIndex].list
    }
  },
  methods: {
    // 判断当前滚动位置 是否让 回到顶部按钮 显示 与消失
    scrollBtn(position) {
      // 1.判断当前滚动位置是否 大于 1000
      this.isActiveTop = -position.y > 1000
      // 2.判断当前位置是否 等于 this.offsetTop 如果等于就让 当前 流行导航吸顶（position: fixed）
      this.isFixed = (-position.y) > (this.offsetTop - 44)
    },
    // 上拉加载更多
    pullingUp() {
      this.getHomeGoods(this.currIndex)
    },
    special() {
      this.swiperImageLoad()
    },
    swiperImageLoad() {
       // 这里的ref 只能获取到vue组件内部的 属性 获取不到 其中的dom 所以需要挂载$el 获取dom元素
      /*this.offsetTop = this.$refs.tabControl2.$el.offsetTop;*/
      this.offsetTop = this.$refs.tabControl1.$el.offsetTop;
    },
    /*
    * 网络请求 代码
    * */
    getHomeMultidata() {
      getHomeMultidata().then(res =>{
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      // 获取当前 goods中的type下的page 页码 加一
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res =>{
       /* console.log(res)*/
        // 将请求过来的数据 通过解构赋值到 data中的goods下的type数据
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        // 可以多次上拉请求数据
        this.$refs.scroll.scroll.finishPullUp()
      })
    }
  }

}
</script>

<style scoped>
#home{
  /*视口高度*/
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  /*position: fixed;
  top:0;
  right: 0;
  left: 0;
  z-index: 9;*/
}
/*.control-scroll {
  position: sticky;
  top: 44px;
}*/
.tab-control1 {
  position: fixed;
  width: 100%;

  z-index: 9;
}
.content {
  /*使用计算属性视口100%(是home的高度 100vh)高度减去下方bav 49px 高度 */
  height: calc(100% - 49px);
  overflow: hidden;
}
.isShow {
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
}
</style>
