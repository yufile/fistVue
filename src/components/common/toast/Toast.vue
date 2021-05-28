<template>
  <div class="toast" v-show="show">
    <div class="toast-style" v-show="show">
      {{message}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    message: {
      type:String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.toast-style {
  padding: 10px;
  position:fixed;
  top: 50%;
  right: 50%;
  transform: translate(50%,-50%);
  background-color: rgba(0,0,0,0.7);
  color: #fff;
  border-radius: 10px;
  font-size: 16px;
}
</style>
