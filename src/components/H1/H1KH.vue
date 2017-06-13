<template>
    <div id="H1KH.vue">
        <header class="bar bar-nav">
            <h1 class="title">民主测评</h1>
        </header>
        <div class="content">
          <div class="content-padded grid-demo">
            <div class="row">
              <div class="col-50 timeBox timearr"  v-for="(item,index) in list" >
              <div class="time" @click="Mlist" :timeid="item.pid" :timestatus="item.planStatus">{{item.planDate}}</div>
              </div>
              <div class="col-50 timeBox">
                  <span id="more" class="time">加载更多</span>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>

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