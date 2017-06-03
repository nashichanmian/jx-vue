<template>
    <nav class="bar">
    <router-link class="navRot" to="mounthKH">月度考核</router-link>
    <router-link class="navRot" to="H1KH">半年考核</router-link>
    <router-link class="navRot" to="yearKH">年度考核</router-link>
    <router-link class="navRot" to="MyJX" v-show='MY'>我的绩效</router-link>
    <router-link class="navRot FG" to="FGlist" v-show='FG'>分管部门绩效查询</router-link>
    <router-link class="navRot" to="FGlist" v-show='ALL'>全员查询</router-link>
    </nav>
</template>

<script>
export default{
    data(){
        return{
            FG:false,
            MY:false,
            ALL:true
        }
    },
    mounted(){
        this.getOrg();
    },
    methods:{
        getOrg(){

        }
    }
}
</script>

<style scoped>
    .bar{
        text-align:center;
        position:fixed;
        bottom:0;
        height:2.5rem;
        margin:0;
        padding:0;
    }
    .navRot{
        background:#fff;
        height:100%;
        float:left;
        width:25%;
        line-height:2.5rem;
        border-right:2px solid rgb(243, 244, 245);
        font-size:.85rem;
        color:rgb(131, 132, 133);
        font-family:'微软雅黑';
    }
    .router-link-active{
        color:rgb(0,173,248);
        border-bottom:3px solid rgb(0, 173, 248);
    }
    .FG{
        line-height:1.3rem;
    }
</style>