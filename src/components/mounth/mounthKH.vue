<template>
    <div id="mounthKH">
        <header class="bar bar-nav">
            <h1 class="title">新闻公告</h1>
        </header>
        <div class="content">
          <div class="content-padded grid-demo">
            <div class="row">
              <div class="col-50 timeBox"  v-for="(item,index) in list" >
              <router-link class="time" to="Mlist" @click="">{{item}}</router-link>
              </div>
              <div class="col-50 timeBox">
                  <span id="more" class="time" @click="loadMore">加载更多</span>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                list:[],
                limit:10,
                page:1
            }
        },
        mounted(){
            this.$http.get('/jxkh/jxkh/opkaoheplan.do?method=publishMonthlyAccessment').then((response) => {
                if(response.data.code == 1){
                  // var userInfo = this.getCookie('userInfo')
                  // console.log(userInfo.userName);
                  this.list = response.data.data;
                }
            },error => {
            });
        },
        methods:{
            loadMore(){

            },
            getlist(){

              this.$http.get('api/list',{
                'id' : "ydkh"//月度考核
              }).then((response) => {
                if(response.body.code ==1){
                  this.list = response.body.data//返回的是数组
                }else{
                  console.log(response.msg);
                }
              },(response) => {
                alert(response);
              })
            }
        },

    }
</script>
<style scoped>
    .bar{
      background:rgb(0, 173, 248);
      height:2.7rem;
    }
    .title{
      font-size:1.3em;
      line-height:2.7rem;
      color:#fff;
    }
    .content{
      background-color:rgb(243, 244, 245);
    }
    .timeBox{
      margin-bottom:.5rem;
      text-align:center;
    }
    .time{
      display:inline-block;
      line-height:4rem;
      width:6.5rem;
      height:4rem;
      background:rgb(0, 173, 248);
      border-radius:.4rem;
      margin-top:2rem;
      color:#fff;
      font-family:'微软雅黑';
      font-weight:700;
    }
    #more{
      color:#fff;
      font-weight:700;
    }
    .router-link-active{
        color:rgb(0,173,248);
        border-bottom:3px solid rgb(0, 173, 248);
    }
</style>