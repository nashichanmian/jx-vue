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
        ddId:null,
        teleNum:null,
        userName:null,
        roleId:null,
        organizationId:null,
        leaderFirstId:null,
        leaderSecondId:null,
        specialTag:null,
        roleLevel:null,
        specialTagRole:null,
        inOrganizer:null
      }
    }
  },
  components:{
    Loading
  },
  created(){
    //组件开始挂在时获取用户信息
    this.ddConfig();
  },
  methods:{

    //获取钉钉免登及userinfo
    ddConfig(){
        var _this = this;
        var url = 'http://114.115.142.167:8080/jxkh/';
        console.log("url", url);
        var corpId = "dinga64936c15a0df28935c2f4657eb6378f";  // 企业的corpId
        var signature = "";
        var nonceStr = "";
        var timeStamp = "";
        var agentId = "";
        $.get(
            'http://114.115.142.167:8080/jxkh/m/service.do?method=getDingCode',
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
                        dd.runtime.info({
                            onSuccess: function (info) {
                                console.log('runtime info: ' + JSON.stringify(info));
                            },
                            onFail: function (err) {
                                console.log('fail: ' + JSON.stringify(err));
                               alert(JSON.stringify(err));
                            }
                        });
                        dd.runtime.permission.requestAuthCode({
                            corpId: corpId, //企业id
                            onSuccess: function (info) {
                                 $.get('http://114.115.142.167:8080/jxkh/m/service.do?method=getUserInfo',
                                    {
                                      "code":info.code
                                    },
                                   function (data) {
                                        if(data.code ==1){
                                          _this.userInfo = data.data;
                                          _this.$store.commit('updateUserInfo',_this.userInfo);
                                          let expireDays = 1000 * 60 * 60;
                                          var userInfo = JSON.stringify(_this.userInfo);
                                          _this.setCookie('userInfo',userInfo,expireDays);
                                          $.toast("欢迎您"+_this.userInfo.userName, 2000, 'success top');
                                          setTimeout(()=>{_this.$router.push('/home')},2000);
                                        };
                                        if(data.code == 0 && data.data.ddId){
                                          $.toast("您尚未注册，将自动为您跳转至注册页面", 2000, 'success top');
                                          setTimeout(()=>{_this.$router.push('/register')},2000);
                                             _this.$store.commit('ddid',data.data.ddId);
                                        }else{
                                            alert(data.msg);
                                        }
                                    }
                                );
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
