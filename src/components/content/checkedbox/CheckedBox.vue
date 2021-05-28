<template>
  <div class="checked-box">
    <div class="checked-img" :class="{active:isChecked}">
      <img src="~@/assets/img/cart/tick.svg"  alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckedBox",
  props: {
    isChecked: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.checked-img {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #d2d2d2 ;
  margin: 0 auto;
}
.active {
  border-color: #ff0135;
  background-color: #ff0135 ;
}
</style>
