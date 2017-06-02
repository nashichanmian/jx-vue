<template>
  <div id="app">
    <router-view ></router-view>
     <loading v-if="isLogin" marginTop="-30%"></loading>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import register from '@/login/register'
export default {
  data(){
    return{
      isLogin:false,
      userInfo:{
        //保存用户信息
        userName:null,
        ddId:null,
        roleLevel:null,
      }
    }
  },
  components:{
    Loading
  },
  mounted(){
    //组件开始挂在时获取用户信息
    this.ddConfig();
  },
  methods:{

    //获取钉钉免登及userinfo
    ddConfig(){
        var _this = this;
        var url = 'http://172.23.197.1/jxkh';
        console.log("url", url);
        var corpId = "dinga64936c15a0df28935c2f4657eb6378f";  // 企业的corpId
        var signature = "";
        var nonceStr = "";
        var timeStamp = "";
        var agentId = "";
        $.post(
            '/jxkh/m/service.do?method=getDingCode',
            {
                "url": url,
                "corpId": corpId
            },
            function (result) {
                signature = result.signature;
                nonceStr = result.nonceStr;
                timeStamp = result.timeStamp;
                agentId = result.agentid;
                corpId = result.corpId;
                dd.config({
                    agentId: agentId,
                    corpId: corpId,
                    timeStamp: timeStamp,
                    nonceStr: nonceStr,
                    signature: signature,
                    jsApiList: [
                        'runtime.info',
                        'biz.contact.choose',
                        'device.notification.confirm',
                        'device.notification.alert',
                        'device.notification.prompt',
                        'biz.ding.post',
                        'biz.util.openLink'] //必填，需要使用的jsapi列表
                });

                function ready () {
                        console.log('dd.ready rocks!');
                        dd.runtime.info({
                            onSuccess: function (info) {
                                console.log('runtime info: ' + JSON.stringify(info));
//                                alert(JSON.stringify(info));
                            },
                            onFail: function (err) {
                                console.log('fail: ' + JSON.stringify(err));
//                                alert(JSON.stringify(err));
                            }
                        });

                        dd.runtime.permission.requestAuthCode({
                            corpId: corpId, //企业id
                            onSuccess: function (info) {
                                 $.ajax({
                                    url: '/jxkh/m/service.do?method=getUserInfo',
                                    type:"POST",
                                    data: {"code":info.code},
                                    success: function (data) {
                                        if(data.code ==1){
                                          _this.userInfo.ddId = data.data.ddId;
                                          _this.userInfo.userName = data.data.userName;
                                          _this.userInfo.roleLevel = data.data.roleLevel;
                                          _this.$store.commit('updateUserInfo',_this.userInfo);
                                          let expireDays = 1000 * 60 * 60 * 24 * 15;
                                          _this.setCookie('ddId',_this.userInfo.ddId,expireDays);
                                          alert("用户信息保存成功"+_this.userInfo.userName)
                                        }else if(data.code == 0 && data.data){
                                             _this.$router.push('/register');
                                        }else{
                                            alert(data.msg);
                                        }
                                    },
                                    error: function (data) {
                                        alert(2);
                                        alert(data);
                                    }
                                });
                            },
                            onFail: function (err) {
                                console.log('requestAuthCode fail: ' + JSON.stringify(err));
                                alert(JSON.stringify(err));
                            }
                        });
                    }
        dd.ready(ready());
    })
    }

  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
