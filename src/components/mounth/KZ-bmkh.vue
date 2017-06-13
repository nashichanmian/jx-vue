<template>
<div>
    <div id="bmkh">
        <div>
            <div onclick="window.history.go(-1)" id="Return">
                <span class="return">&nbsp;&nbsp;<<返回</span>
            </div>
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
              <li class="item-content" @click="toRouter4" v-for="(item,index) in getXSlist">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner" id="Atblist">
                  <div class="item-after">{{item.userName}}</div>
                  <div class="item-after" :bId="item.bId" :orName="item.orName" :step="item.Step" style="margin-left:-.5rem">{{item.roleName}}</div>
                  <div class="item-after">{{item.superiorsScore}}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
    </div>
</div>
</template>
<script>
    import {bus} from '../Util/bus.js'
    import {mapGetters} from 'vuex'
    export default{
        data(){
          return {

          }
        },
        mounted(){
            this.$store.dispatch("getXSlist");//下属列表
        },
        computed:mapGetters([
            'getXSlist'
        ]),
        methods:{
            toRouter4(){
              var role = this.getEventTrigger(event).getElementsByTagName("div")[1].getElementsByTagName("div")[1].innerHTML;//用户级别传给mlist页面用于判断并渲染上级评价的名称
              var BID = this.getEventTrigger(event).getElementsByTagName("div")[1].getElementsByTagName("div")[1].getAttribute('bId');
              this.$store.commit('BID',BID);
              this.$store.commit('roleLevel',role);
              this.$router.push('/rorlevel0')
            },
            getEventTrigger(event)
              { //获取当前点击的元素的innerhtml用于判断人员级别
                 var x=event.currentTarget;
                 return x;
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
