<template>
    <div>
        <router-view></router-view>
        <BottomNav></BottomNav>
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
