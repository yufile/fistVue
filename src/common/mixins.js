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
