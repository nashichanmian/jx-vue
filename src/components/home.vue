<template>
    <div>
        <router-view></router-view>
        <BottomNav></BottomNav>
        <h1></h1>
    </div>
</template>

<script>
import BottomNav from './bottomNav'
export default{
components:{
    BottomNav
  }
}
</script>
