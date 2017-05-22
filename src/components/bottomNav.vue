<template>
    <nav class="bar bar-tab">
    <router-link calss="navRot" to="mounthKH">月度考核</router-link>
    <router-link calss="navRot" to="H1KH">半年考核</router-link>
    <router-link calss="navRot" to="yearKH">年度考核</router-link>
    <router-link calss="navRot" to="MyJX">我的绩效</router-link>
    </nav>
</template>

<script>

    export default{

    }
</script>

<style>

    .bar{
        padding-top:.8rem;
        text-align:center;
    }
    .router-link-active{
        color:red;
        border-bottom:2px solid rgb(28, 12, 41);
    }
</style>