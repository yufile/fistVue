<template>
  <div class="cart-item">
    <div class="item-left">
      <checked-box class="list-checked" :is-checked="proude.checked" @click.native="CheckClick"/>
    </div>
    <div class="item-center">
      <img :src="proude.images" alt="">
    </div>
    <div class="item-right">
      <div class="right-top">
        {{proude.title}}
      </div>
      <div class="right-middle">商品描述:{{proude.desc}}</div>
      <div class="right-bottom">
        <span>￥{{proude.price}}</span>
        <span>x{{proude.count}}</span>
        <span @click="del(proude.iid)">删除</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckedBox from "@/components/content/checkedbox/CheckedBox";
import {mapActions} from 'vuex'
export default {
  name: "CartListItem",
  components: {
    CheckedBox
  },
  props: {
    proude: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      isChecked: true
    }
  },
  methods: {
    ...mapActions(["delCart"]),
    CheckClick() {
      this.proude.checked = !this.proude.checked;
    },
    del(id){
      this.delCart(id)
    }
  }
}
</script>

<style scoped>
.cart-item {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 0 ;
  text-align: center;
  border-bottom: #d2d2d2 1px solid;
}
.item-center img {
  width: 70px;
  height: 100px;
  border-radius: 10px;
}
.right-top,.right-middle {
  height: 25px;
  line-height: 25px;
  margin-bottom: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: justify;
  justify-content: space-around;
}
.item-left {
  width: 8%;
}
.item-center {
  width: 25%;
}
.item-right {
  width: 65%;
}
.right-top {
  font-size: 18px;
  font-weight: bold;
}
.right-bottom {
  display: flex;
  justify-content: space-between;
  color: #000;
}
.right-bottom span:nth-of-type(1) {
  color: #ff002b;
}

</style>
