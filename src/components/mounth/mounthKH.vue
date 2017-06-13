<template>
    <div id="mounthKH">
        <header class="bar bar-nav">
            <h1 class="title">新闻公告</h1>
        </header>
        <div class="content">
          <div class="content-padded grid-demo">
            <div class="row">
              <div class="col-50 timeBox timearr"  v-for="(item,index) in timeList" >
              <div class="time" @click="Mlist" :timeid="item.pid" :timestatus="item.planStatus">{{item.planDate}}</div>
              </div>
              <div class="col-50 timeBox">
                  <span id="more" class="time">加载更多</span>
              </div>
            </div>
          </div>
        </div>
        <div class="Box" v-show="isShow">
            <span class="Clicknone" @click='Clicknone'>X</span>
            <div class="Box2">
            <router-link class="Mlist" to="Mlist">个人自评</router-link>
            </div>
            <div class="Box2">
            <router-link class="Bmkh" to="KZ-bmkh">部门考核</router-link>
            </div>
            <div class="zt"><!-- 状态 -->
              <span class="zt1" style="color:red">{{MlistX}}</span>
              <span style="color:#ccc;marginLeft:33%">{{Bmkh}}</span>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex'
    export default{
        data(){
            return{
                MlistX:'未完成',//科长弹出框-个人自评的状态
                Bmkh:'已完成'// 部门考核的状态
            }
        },
        mounted(){//获取时间戳列表
          this.getTimeList();
        },
        updated(){//判断是否已经完成考核
            let timearr = $('.time');
            for(var i=0;i<timearr.length;i++){
              if(timearr[i].getAttribute('timestatus') == 1){
                  timearr[i].classList.add('bgImg');
              }
            }
        },
        computed:mapGetters([
            'timeList',
            'isShow'
          ]),
        methods:{
          ...mapActions([
              'getTimeList'
          ]),getEventTrigger(event) //获取当前点击的元素的innerhtml用于判断人员级别
              {
              var x=event.currentTarget;
                  return x;
              },
             Mlist(){
              var userInfo = this.getCookie('userInfo');
              if(userInfo.roleId == 1 || userInfo.roleId == 2){
                this.$router.push('/Mlist');
              }else if(userInfo.roleId == 4){ //副主任级别判断跳转
                this.$router.push('/ZRcheckList');
              }else if(userInfo.roleId  == 5){//主任级别判断跳转
                this.$router.push('/KZ01');
              };
              var Id = this.getEventTrigger(event).getAttribute('timeid');
              this.$store.commit('Mlist');
              this.$store.commit('Emit',Id);//当前被点击的月份ID保存在state
              setTimeout(
                ()=>{this.Clicknone()},5000)
            },
            Clicknone(){
              this.$store.commit('Clicknone')
            },
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
      height:3.7rem;
      background:rgb(0, 173, 248);
      border-radius:.4rem;
      margin-top:2rem;
      color:#fff;
      font-family:'微软雅黑';
      font-weight:700;
    }
    #timeStyle{

    }
    #more{
      color:#fff;
      font-weight:700;
    }
    .router-link-active{
        color:rgb(0,173,248);
        border-bottom:3px solid rgb(0, 173, 248);
    }
    .Box{
      position:absolute;
      z-index:9999;
      width:80%;
      height:10rem;
      background:#fafaff;
      top:30%;
      left:10%;
      border-radius:1rem;
    }
    .Box2{
      margin-top:20%;
    }
    .Clicknone{
      margin-left:1rem;
    }
    .Mlist, .Bmkh{
      display:block;
      background:rgb(208, 0, 0);
      width:6rem;
      height:3rem;
      border-radius:1rem;
      text-align:center;
      line-height:3rem;
      font-size:18px;
      font-weight:700;
      color:#fff;
      float:left;
      margin-top:-2rem;
    }
    .Mlist{
      margin-right:1rem;
      margin-left:1rem;
    }
    .zt{
      color:rgb(208, 0, 0);
      margin-left:15%;
    }
    .zt1{
      margin-left:.2rem;
    }
    .bgImg{
      background-image:url('../../assets/logo2.png');
      background-repeat:no-repeat;
      background-size:100%;
    }
    @media screen and (max-width: 320px) {
      .Mlist, .Bmkh{
        width: 5rem;
        margin-top:0;
      }

    }
</style>