<template>
    <div id="Mlist">
        <header class="bar">
          <h3 class="title">月度考核</h3>
        </header>
          <div class="content" >
            <section class="contentx">
              <ul>
                  <li style="margin-left:-.2rem">项目</li>
                  <li>考评情况</li>
                  <li>得分</li>
              </ul>
              <hr id="border_botm">
            </section>
            <div class="content-block-title zp">自评 :</div>
            <div class="list-block">
              <ul>
                <router-link to="input" >
                    <li class="item-content" style="border-bottom:1px solid rgb(243,244,245);">
                      <div class="item-media"></div>
                      <div class="item-inner">
                      <div class="item-title">个人安全<br>绩效</div>
                      <div class="text" id="zptext1">{{zp.personalSafetyPerformenceContent}}</div>
                      <div class="number">{{zp.personalSafetyPerformenceScore}}</div>
                      </div>
                    </li>
                </router-link>
                <router-link to="checkList">
                    <li class="item-content" @click="watchElemt">
                      <div class="item-media"></div>
                      <div class="item-inner">
                      <div class="item-title">个人自评</div>
                      <div class="text">{{zp.selfEvaulationContent}}</div>
                      <div class="number">{{zp.selfEvaluationScore}}</div>
                      </div>
                    </li>
                </router-link>
              </ul>
            </div>
            <div class="content-block-title clePading">上级评价 :</div>
            <div class="list-block">
              <ul>
                <div @click="roleverPD">
                <li class="item-content" style="border-bottom:1px solid rgb(243,244,245);" @click="watchElemt">
                  <div class="item-media"></div>
                  <div class="item-inner">
                  <div class="item-title">{{roleLevelName.name1}}</div>
                  <div class="text">{{zp.firstLeaderContent}}</div>
                  <div class="number">{{zp.firstLeaderScore}}</div>
                  </div>
                </li>
                <li class="item-content" @click="watchElemt">
                  <div class="item-media"></div>
                  <div class="item-inner">
                  <div class="item-title">{{roleLevelName.name2}}</div>
                  <div class="text">{{zp.secondLeaderContent}}</div>
                  <div class="number">{{zp.secondLeaderScore}}</div>
                  </div>
                </li>
              </div>
              </ul>
            </div>
            <div class="content-block-title clePading totalScores">总分 :{{zp.finalScore}}</div>
          </div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
import {bus} from '../Util/bus.js'
import {jzmove} from '../Util/move.js'
export default{
  data(){
    return{

    }
  },
  created(){
      this.Mdetail2();
      this.$store.commit('roleLevelNameFC',this.getCookie('userInfo').roleId);//根据进入人员级别动态渲染title
  },

  computed:mapGetters([
      'roleLevelName',
      'zp'
  ]),

  methods:{
   ...mapActions([
        'Mdetail2'
      ]),
      watchElemt(){
          var types = this.getEventTrigger(event).getElementsByTagName("div")[1].getElementsByTagName("div")[0].innerHTML;
            this.$store.dispatch('types',types);
      },
      getEventTrigger(event)
        { //获取当前点击的元素的innerhtml用于判断评价类型(自评、上级评价)
            var x=event.currentTarget;
            return x;
        },
      roleverPD(){
            if(this.types == "科长评价" && this.getCookie('userInfo').roleId == 3){
                this.$router.push('/checkList');
            };
            if(this.types == "分管主任" && this.getCookie('userInfo').roleId == 4){
                this.$router.push('/checkList');
            };
            if(this.types == "主任评价" && this.getCookie('userInfo').roleId == 5){
                this.$router.push('/checkList');
            };
      }
  }
}
</script>
<style scoped>
    .bar{
      background:rgb(0, 173, 248);
      height:2.7rem;
      margin:0;
      padding:0;
      text-align:center;
      position:fixed;
      top:0;
    }
    .title{
      font-size:1.3em;
      line-height:2.7rem;
      color:#fff;
      margin-left:.5rem;
    }
@media screen and (max-width: 320px) {
     .bar{
        height:2rem;
     }
     .title{
      line-height:2rem;
     }
}
    .contentx{
      padding-top:3.7rem;
      width:100%;
      margin:0 auto;
      background:rgb(243, 244, 245);
    }
    .contentx li{
      display:inline-block;
      float:left;
      width: 30%;
      text-align:center;
    }
    .contentx li:last-child{
      margin-left:.55rem;
    }
    .contentx li:nth-child(2){
      margin-left:1.5rem;
    }
    @media screen and (max-width: 320px) {
     .contentx li:nth-child(2){
      margin-left:1.25rem;
     }
    }
    @media screen and (min-width: 360px) {
     .contentx li:nth-child(2){
      margin-left:1.25rem;
     }
    }
    #border_botm{
      width:84%;
      margin-top:1.5rem;
      text-align:center;
      margin-left:7.5%;
      border-top:1px solid rgb(0, 173, 248);
    }
    .zp{
        margin-left:1.5rem;
    }
    .clePading{
        margin-top:1.5rem;
        margin-left:1.5rem;
    }
    .totalScores{
      font-size:16px;
      font-weight:700;
    }
    .list-block{
        padding:0;
        margin:0 7.5%;
        background:#fff;
    }
    .item-content{
        padding:0;
        margin:0;
        background:#fff;
        color:rgb(123 ,124, 125);
        font-size:15px;
    }
    .number{
        color:rgb(123 ,124, 125);
        margin-left:-2rem;
        width:1rem;
    }
    .text{
      max-height:5rem;
      overflow:scroll;
      width:8rem;
      margin:0 1rem;
      word-wrap: break-word;

    }
    .item-after:nth-child(2){
      display:block;
      margin-left:-3rem;
      width:5rem;
      height:100%;
      word-wrap: break-word;
    }
    .list-block .item-inner:after{
        display:none;
    }
@media screen and (max-width: 320px) {
    .zp{
        margin-top:1rem;
    }
    .text:nth-child(2){
      margin-left:.5rem;
    }
    .item-content{

    }
    .text{
      width:6rem;
      margin-left:-4rem;
       word-wrap: break-word;
       height:100%;
    }
}
</style>