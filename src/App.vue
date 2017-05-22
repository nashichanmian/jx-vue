<template>
  <div id="app">
    <router-view ></router-view>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  data(){
    return{
      isLogin:false,
      userInfo:{
        //保存用户信息
        nick:null,
        ulevel:null,
        uid:null,
      }
    }
  },
  mounted(){
    //组件开始挂在时获取用户信息
    this.getUserInfo();
  },
  methods:{
    //请求用户信息
    getUserInfo(){
      //发送http请求获取
      this.$http.get('/api/GetZP',{
          "params" : this.userInfo
        }).then((response) => {
          console.log('获取用户信息')
          //success
          if(response.data.code == 0){
            this.$store.commit('updateUserInfo',this.userInfo)
          }
        },(response) =>{
          //Error
      });
    },


  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
