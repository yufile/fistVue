import BackTop from "@/components/content/backtop/BackTop";
export const bockBopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isActiveTop: false,
    }
  },
  methods: {
    // 回到顶部
    backTop (){
      /*this.$refs.scroll.scroll.scrollTo(0,0,500)*/
      this.$refs.scroll.scrollTo(0, 0 , 500)
    },
  }
}

export const suckTopNav = {
  data() {
    return {
      currIndex : 'pop',
    }
  },
  methods: {
    /*
   * 点击事件
   * */
    btnClick(index) {
      switch (index) {
        case 0 : this.currIndex = 'pop'
          break;
        case 1 : this.currIndex = 'new'
          break;
        case 2 : this.currIndex = 'sell'
          break;
      }
      if (this.getSubcategoryDetail){
        this.getSubcategoryDetail()
      }
      // 获取 组件TabControl中的 counter 值 让这两个导航栏 所点击时 响应相同
      if(this.$refs.tabControl1 || this.$refs.tabControl2){
        this.$refs.tabControl1.counter = index
        this.$refs.tabControl2.counter = index
      }

    },
  }
}
