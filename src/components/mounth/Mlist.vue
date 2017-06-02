<template>
    <div id="Mlist">
        <header class="bar">
          <h3 class="title">月度考核</h3>
        </header>
        <section class="contentx">
          <ul>
              <li style="margin-left:-.2rem">项目</li>
              <li>考评情况</li>
              <li>得分</li>
          </ul>
          <hr id="border_botm">
        </section>
        <div id="Mdetail">
          <div class="content">
            <div class="content-block-title zp">自评 :</div>
            <div class="list-block">
              <ul>
                <router-link to="input">
                    <li class="item-content" style="border-bottom:1px solid rgb(243,244,245);">
                      <div class="item-media"></div>
                      <div class="item-inner">
                      <div class="item-title">个人安全<br>绩效</div>
                      <div class="item-after">{{zp.text1}}</div>
                      <div class="item-after">{{zp.number1}}</div>
                      </div>
                    </li>
                </router-link>
                <router-link to="checkList">
                    <li class="item-content">
                      <div class="item-media"></div>
                      <div class="item-inner">
                      <div class="item-title">个人自评</div>
                      <div class="item-after">{{zp.text2}}</div>
                      <div class="item-after">{{zp.number2}}</div>
                      </div>
                    </li>
                </router-link>
              </ul>
            </div>
            <div class="content-block-title clePading">上级评价 :</div>
            <div class="list-block">
              <ul>
                <li class="item-content" style="border-bottom:1px solid rgb(243,244,245);">
                  <div class="item-media"></div>
                  <div class="item-inner">
                  <div class="item-title">科长评价</div>
                  <div class="item-after">xxx</div>
                  <div class="item-after">得分</div>
                  </div>
                </li>
                <li class="item-content">
                  <div class="item-media"></div>
                  <div class="item-inner">
                  <div class="item-title">分管主任</div>
                  <div class="item-after">xxx</div>
                  <div class="item-after">得分</div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="content-block-title clePading">总分 :</div>
          </div>
     </div>
    </div>
</template>
<script>
export default{
  data(){
    return{
      //自评
       zp : {
        text1:'状态良好',
        number1:'99',
        text2:'状态良好',
        number2:'99'
      }
    }
  },
  created(){
    this.$http.get('/api/GetZP',{
      params:{
        id:'',
      }
    }).then((response) => {
      if(response.data.code == 1){
        this.zp = response.data.data;
        console.log(response.data.data);
         }
      },error => {

    });
  },
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
      height:6rem;
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
    #border_botm{
      width:85%;
      margin-top:1.5rem;
      border-top:1px solid rgb(0, 173, 248);
    }
    .zp{
        margin-top:6.5rem;
        margin-left:1.5rem;
    }
    .clePading{
        margin-top:1.5rem;
        margin-left:1.5rem;
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
        height:4rem;
        color:rgb(123 ,124, 125);
        font-size:15px;
    }
@media screen and (max-width: 320px) {
    .zp{
        margin-top:6rem;
    }

    .item-content{
        height:3rem;
      }
}
    .item-after{
        color:rgb(123 ,124, 125);
    }
    .item-after:nth-child(2){
      margin-left:-1rem;
    }
    .list-block .item-inner:after{
        display:none;
    }
</style>