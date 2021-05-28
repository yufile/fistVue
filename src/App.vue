<template>
  <div id="nav">
      <router-view v-slot="{Component}">
        <keep-alive exclude="Detail">
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from "@/components/content/MainTabBar";
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>
<style scoped>

</style>
