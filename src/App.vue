<template>
  <div id="app">
    <router-view></router-view>
    <BottomNav></BottomNav>
  </div>
</template>

<script>
import BottomNav from '@/nav/bottomNav'
export default {
  components:{
    BottomNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
