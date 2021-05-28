<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null,
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      /*开启对 content 以及 content 子元素 DOM 改变的探测。当插件被使用后，
      当这些 DOM 元素发生变化时，将会触发 scroll 的 refresh 方法*/
      observeDOM: true,
      mouseWheel:true, // 鼠标滚动事件
      click:true, // 解决在 滚动区域 div等标签 （除了button）不能点击
      probeType: this.probeType,// 监听滚动位置
      pullUpLoad: this.pullUpLoad, // 上拉加载更多 配合下面的函数使用
      observeImage: true // 图片加载完成 调用 refresh 重新计算 可滚动高度
    })
    // 判断是否满足这条件
    if(this.probeType === 2 || this.probeType === 3){
      // 实时监听 滚动 位置
      this.scroll.on('scroll', (position) =>{
        this.$emit('scrollBtn' ,position)
      })
    }
    // 判断是否有这个属性是否为真
    if(this.pullUpLoad){
      // 上拉加载更多 监听滚到底部
      this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp')
      })
    }
  },
  methods: {
    // 将回到顶部组件封装
    scrollTo(x, y ,time = 300){
      // 回到顶部 x, y坐标 time是动画 回到顶部所需要的时间
     this.scroll && this.scroll.scrollTo(x, y, time)
    },
    /*finishPullUp (){
      this.scroll.finishPullUp()
    }*/
  }
}
</script>

<style scoped>

</style>
