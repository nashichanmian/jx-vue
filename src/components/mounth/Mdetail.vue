<template>
    <div>
        <div class="content">
          <div class="content-block-title zp">自评</div>
          <div class="list-block">
            <ul>
              <router-link to="input">
                  <li class="item-content">
                    <div class="item-media"><i class="icon icon-f7"></i></div>
                    <div class="item-inner">
                    <div class="item-title">个人</br>安全</br>绩效</div>
                    <div class="item-after">{{zp.text1}}</div>
                    <div class="item-after">{{zp.number1}}</div>
                    </div>
                  </li>
              </router-link>
              <router-link to="checkList">
                  <li class="item-content">
                    <div class="item-media"><i class="icon icon-f7"></i></div>
                    <div class="item-inner">
                    <div class="item-title">个人</br>自评</div>
                    <div class="item-after">{{zp.text2}}</div>
                    <div class="item-after">{{zp.number2}}</div>
                    </div>
                  </li>
              </router-link>
            </ul>
          </div>
          <div class="content-block-title clePading">上级评价</div>
          <div class="list-block">
            <ul>
              <li class="item-content">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                <div class="item-title">科长</br>评价</div>
                <div class="item-after">xxx</div>
                <div class="item-after">得分</div>
                </div>
              </li>
              <li class="item-content">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                <div class="item-title">分管</br>主任</div>
                <div class="item-after">xxx</div>
                <div class="item-after">得分</div>
                </div>
              </li>
            </ul>
          </div>
          <div class="content-block-title clePading">xx分</div>
        </div>
    </div>
</template>
<script>
export default{
  data(){
    return{
      //自评
       zp : {
        text1:'',
        number1:'',
        text2:'',
        number2:''
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
    .zp{
        margin-top:2.5rem;
    }
    .item-content{
        height:17.5vh;
    }
    @media screen and (max-width: 320px) {
    .item-content{
        height:16vh;
        }
    }
    .clePading{

        margin:.5rem;
    }
    .item-content, .list-block{
        padding:0;
        margin:0;
    }
</style>