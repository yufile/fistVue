<template>
  <div class="tab-control">
    <div v-for="(item,index) in title"
         class="control-item"
         :class="{active:index===counter}"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    title:{
      type:Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    itemClick(index) {
      this.counter = index;
      // 通过$emit 事件传递给父组件 并传值
      this.$emit('btnClick',index)
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 44px;
  line-height: 44px;
  background-color: #fff;
}
.control-item {
  flex: 1;
}
.control-item span {

  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>
