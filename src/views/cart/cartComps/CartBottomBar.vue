<template>
  <div class="cart-bar">
    <div class="all-checked">
      <checked-box :is-checked="SelectAll" @click="allSelect" class="bar-checked"/>
      <span>全选</span>
    </div>
    <div class="price">合计:{{allPrice}}</div>
    <div class="set">结算:({{Settlement}})</div>
  </div>
</template>

<script>
import CheckedBox from "@/components/content/checkedbox/CheckedBox";
export default {
  name: "CartBottomBar",
  components: {
    CheckedBox
  },
  computed: {

    allPrice() {
      return '￥' + this.$store.state.currList.filter((item)=>{
        return item.checked;
      }).reduce(((previousValue, currentValue) => {
        return previousValue + currentValue.price * currentValue.count;
      }),0).toFixed(2)
    },
    Settlement() {
      return this.$store.state.currList.filter((item) => item.checked).length
    },
    SelectAll() {
      if(this.$store.state.currList.length === 0) return false
      // 过滤checked为false的个数的个数 如果有获取当前个数长度然后取反就为false
     /* // 否则 ，没有checked为false的 长度为0取反为真
      return !(this.$store.state.currList.filter(item => !item.checked).length)*/
      // 查找到当前 checked为false 如果查找到一个就返回真 然后取反 全选就为false
      return !this.$store.state.currList.find(item => !item.checked)
    }
  },
  methods: {
    allSelect() {
      if(this.SelectAll) {
        this.$store.state.currList.forEach(item => item.checked = false)
      }else {
        this.$store.state.currList.forEach(item => item.checked = true)
      }
    }
     /* for (let item of this.$store.state.currList){
        if(!item.checked){
          item.checked = true
        }else {
          item.checked = false
        }
      }
    }*/
  }
}
</script>

<style scoped>
.cart-bar {
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  background-color: #dbdbdb;
  box-shadow: 0 -1px 1px 1px #d2d2d2;
}
.bar-checked {
  margin: 0 10px;
}
.all-checked {
  display: flex;
  margin-right: 20px;
}
.price {
  flex: 2;
}
.set {
  flex: 1;
  background-color: #ff8198;
  height: 100%;
  text-align: center;
  line-height: 45px;
}
</style>
