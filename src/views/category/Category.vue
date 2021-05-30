<template>
  <div class="category">
<!-- 标题  -->
    <nav-bar class="category-shop">
      <template v-slot:center>
        <div>商品分类</div>
      </template>
    </nav-bar>
    <div class="subfield">
      <!--  商品类别  -->
      <tab-control class="ctitle"
                   ref="tabControl2"
                   :title="['综合', '新品', '销量']"
                   @btnClick='btnClick' v-show="isFixed"/>
      <category-item :cate="cate" @getMaitKey="getMaitKey"/>
      <!--  商品数据  -->
      <scroll class="scroll-cate-detail" :probe-type="3" @scrollBtn="scrollBtn" ref="scroll">
        <cate-detail :detail="cateShop" @tuload="tuload"/>
        <tab-control ref="tabControl1" :title="['综合', '新品', '销量']"  @btnClick='btnClick'/>
        <goods :goods="goods" />
      </scroll>
      <back-top @click.native="backTop()" v-show="isActiveTop"/>
    </div>

  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import CategoryItem from "@/views/category/childrenShop/CategoryItem";
import Goods from "@/components/content/goods/Goods";

import {getCategory,getSubcategory,getSubcategoryDetail} from "@/network/category";
import {suckTopNav,bockBopMixin} from "@/common/mixins";
import CateDetail from "@/views/category/childrenShop/CateDetail";
import Scroll from "@/components/common/scroll/Scroll";
import TabControl from "@/components/content/tabcontrol/TabControl";

export default {
name: "Cart",
  components: {
    TabControl,
    Scroll,
    CateDetail,
    NavBar,
    CategoryItem,
    Goods,
  },
  data() {
    return {
      cate: [], // 类别
      shopIndex: [],// maitKey 值
      cateShop: [],// 商品数据
      miniWallkey: [], //点击各种类别id值数组
      goods: [], //吸顶下方的数据
      minWallIndex: 0, // 为了获取点击各种类别id值 下标
      isFixed: false,// 是否隐藏吸顶
      offsetTop: 0, //获取吸顶导航到顶部高度
    }
  },
  mixins: [suckTopNav,bockBopMixin],// 混入
  created() {
    // 在创建当前页面时 调用请求的数据（各种类别数据）
    this.getCategory()
    // 调用各种数据 吸顶下方数据 由于获取 其中的 miniWallkey[] 这个数组中的数据获取不到 原因是数据没加载过来就获取数据
    // 所以获取不到数据 通过延长调用时间来获取数据 办法不好可以改进
    if(this.miniWallkey.length !== 0){
      // 页面加载时就响应数据 来调用 让其展示数据
      this.getSubcategoryDetail(0)
    }else {
      setTimeout(()=>{
        this.getSubcategoryDetail(0)
      },200)
    }
  },
  mounted() {

  },
  methods: {
    scrollBtn(position) {
      // 1.判断当前滚动位置是否 大于 1000
      this.isActiveTop = -position.y > 500
      // 2.判断当前位置是否 等于 this.offsetTop 如果等于就让 当前 流行导航吸顶（position: fixed）
      this.isFixed = (-position.y) > (this.offsetTop - 44)
     /* console.log(-position.y,this.offsetTop)*/
    },
    getCategory() {
      // 获取分类栏左侧数据
      getCategory().then(res => {
        /*console.log(res)*/
        this.cate = res.data.category.list
        for (let item of this.cate) {
          // 将获取的数据添加到shopIndex中
          this.shopIndex.push(parseInt(item.maitKey))
          // 将获取的数据添加到miniWallkey中
          this.miniWallkey.push(parseInt(item.miniWallkey))
        }console.log(this.miniWallkey)
        this.getSubcategory(0);
      })

    },
    // 获取分类栏 右侧上半部分数据
    getSubcategory(index) {
      // 要求传入当前点击的是上衣还是裤子 的 maitKey值 来识别是哪个
      let maitKey = this.shopIndex[index]
      /*console.log(index)*/
      getSubcategory(maitKey).then(res => {
        /*console.log(res);*/
        this.cateShop = res.data.list
      })
    },
    getSubcategoryDetail() {
      /*获取吸顶下的数据 当点击 吸顶导航时调用getSubcategoryDetail()函数
      this.currIndex用来确定是哪一个导航  点击侧栏导航时 获取当前点击的哪个下标 来从存储的数组中将miniWallkey值取出来
      切换衣服样式
      */
      const miniWallkey = this.miniWallkey[this.minWallIndex];
      getSubcategoryDetail(miniWallkey ,this.currIndex).then(res => {
        this.goods = []
        /*console.log(miniWallkey,this.currIndex)
        console.log(res)*/
        this.goods.push(...res)
      })
    },
    // 使用了 父子通信
    getMaitKey(index) {
      // 点击切换数据 衣服样式获取下标
      this.getSubcategory(index)
      this.minWallIndex = index;
      this.getSubcategoryDetail()
    },
    // 当图片加载完成之后获取当前吸顶 到顶部位置 赋值给 offsetTop
    tuload() {
      this.offsetTop = this.$refs.tabControl1.$el.offsetTop ;
      /*console.log(this.$refs.tabControl1.$el.offsetTop)*/
    }
  }

}
</script>

<style scoped>
.category {

}
.category-shop {
  background-color: var(--color-tint);
  color: #fff;
}
.subfield {
  width: 100%;
  display: flex;
  height:calc(100vh - 44px - 49px) ;
}
.scroll-cate-detail {
  height: 100% ;
  overflow: hidden;
  flex: 1;
}
.ctitle {
  position: fixed;
  right: 0;
  top: 44px;
  width: 73.5%;
  z-index: 9;
  background-color: #ffffff;
}
</style>
