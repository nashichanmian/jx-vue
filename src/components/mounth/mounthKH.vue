<template>
    <div>
        <header class="bar bar-nav">
            <h1 class="title">新闻公告</h1>
        </header>
        <div class="content">
          <div class="content-padded grid-demo">
            <div class="row">
              <div class="col-50 timeBox"  v-for="(item,index) in Time" >
              <router-link class="time" to="Mlist" @click="">{{item}}</router-link>
              </div>
              <div class="col-50 timeBox">
                  <span class="time" @click="loadMore">加载更多</span>
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
                Time:[]
            }
        },
        created(){
            this.$http.get('/api/res').then((response) => {
                if(response.data.code == 1){
                  this.Time = response.data.data;
                  console.log(response.data.data);
                }
            },error => {

            });
        },
        methods:{
            loadMore(){
                console.log(this.Time.length)
            }
        },

    }
</script>
<style scoped>
    .timeBox{
        height:2rem;
        margin-bottom:.5rem;
        background:#213;

    }
    .time{
        line-height:2rem;
    }
</style>