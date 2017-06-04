<template>
<div>
    <div id="bmkh">
        <div>
            <router-link to="mounthKH" id="Return">
                <span class="return">&nbsp;&nbsp;<<返回</span>
            </router-link>
        </div>
        </div>
        <div class="contentRQ">
          <div class="list-block">
            <ul>
              <li class="item-content" id="Atbtitle">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                  <div class="item-title">人员</div>
                  <div class="item-title">职务</div>
                  <div class="item-title">得分</div>
                </div>
              </li>
              <li class="item-content" @click="toRouter4">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner" id="Atblist">
                  <div class="item-after">张三</div>
                  <div class="item-after">科员</div>
                  <div class="item-after">99</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
    </div>
</div>
</template>
<script>
    export default{
        methods:{
            toRouter4(){
                this.$router.push('/rorLevel0')
            }
        }
    }
</script>
<style scoped>
    .return{
        display:inline-block;
        background:rgb(0, 173, 248);
        height:2.7rem;
        width:100%;
        font-size:1.3em;
        line-height:2.7rem;
        color:#fff;
        font-weight:700;
    }
@media screen and (max-width: 320px) {
     .return{
        height:2rem;
        line-height:2rem;
     }
}
    .contentRQ{
        width:90%;
        margin:0 auto;
    }
    #Atbtitle{
        color:rgb(0, 173, 248);

    }
    #Atbtitle .item-title:nth-child(1){
        margin-left:.2rem;
    }
    #Atbtitle .item-title:nth-child(2){
        margin-left:.8rem;
    }
    #Atbtitle .item-title:nth-child(3){
        margin-left:.6rem;
    }
</style>