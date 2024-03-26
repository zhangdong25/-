<template>
  <div id="app">
    <!-- 路由文件入口 -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Sidebar from './components/Sidebar.vue'
export default {
  // components: { Sidebar },
}
</script>

<style scoped>
#app {
  height: 100%;
  width: 100%;
}

* {
  margin: 0;
  padding: 0;
}
</style>
<!-- <style lang="scss">
::-webkit-scrollbar {
  width: 0 !important;
}

::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
</style> -->