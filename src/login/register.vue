<template>
    <div id="register">
        <header class="bar bar-nav">
          <h1 class='title'>注 册</h1>
        </header>
        <div class="content">
          <div class="list-block">
            <ul>
              <!-- Text inputs -->
              <li>
                <div class="item-content">
                  <div class="item-media"><i class="icon icon-form-name"></i></div>
                  <div class="item-inner">
                    <div class="item-title label">钉钉ID</div>
                    <div class="item-input">
                      <input type="text" placeholder="请填写钉钉ID" v-model="ddId">
                    </div>
                  </div>
                </div>
              </li>
    <!-- password -->
              <li>
                <div class="item-content">
                  <div class="item-media"><i class="icon icon-form-password"></i></div>
                  <div class="item-inner">
                    <div class="item-title label">密码</div>
                    <div class="item-input">
                      <input type="password" placeholder="请填写密码" v-model="userPwd">
                    </div>
                  </div>
                </div>
              </li>
    <!-- phone -->
              <li>
                <div class="item-content">
                  <div class="item-media"><i class="icon icon-form-password"></i></div>
                  <div class="item-inner">
                    <div class="item-title label">手机号</div>
                    <div class="item-input">
                      <input type="number" placeholder="请填写手机号码" v-model="teleNum">
                    </div>
                  </div>
                </div>
              </li>
    <!-- name -->
             <li>
                <div class="item-content">
                  <div class="item-media"><i class="icon icon-form-name"></i></div>
                  <div class="item-inner">
                    <div class="item-title label">姓名</div>
                    <div class="item-input">
                      <input type="text" placeholder="请填写真实姓名" v-model="userName">
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <span class="errmsg">{{errmsg}}</span><!-- 错误信息 -->
          </div>
          <div class="content-block">
            <div class="row">
              <div class="col-50"><a href="#" class="button button-big button-fill button-danger" @click="">取消</a></div>
              <div class="col-50"><a href="javascript:;" class="button button-big button-fill button-success" @click="Submit">提交</a></div>
            </div>
          </div>
        </div>
        <loading v-if="isLogin"  id="loading"></loading>
    </div>
</template>
<script>
import {register} from '../../static/index.js'
import Loading from '@/components/Loading'
export default{
    data(){
      return{
          isLogin: false,
          ddId:'',
          userPwd:'',
          teleNum:'',
          userName:'',
          errmsg:'',
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
    methods:{
      Submit(){
        let _this = this;
        if(register(_this, _this.ddId, _this.userPwd, _this.teleNum, _this.userName)){
            this.isLogin = true ;//设置登录状态
            this.toRegister();
        }

      },
      toRegister(){
        let _this = this;
        this.$http.post('/jxkh/m/service.do?method=register',{
          ddId:this.ddId,
          userPwd:this.userPwd,
          teleNum:this.teleNum,
          userName:this.userName
        }).then((response) => {
             //如果注册成功则保存登录状态并设置有效期
            if(response.body.code == 1){
              console.log(response.body)
              this.userInfo.ddId = response.body.data.ddId;
              this.userInfo.userName = response.body.data.userName;
              this.userInfo.roleLevel = response.body.data.roleLevel;
              this.$store.commit('updateUserInfo',this.userInfo);
              let expireDays = 1000 * 60 * 60 * 24 * 15;
              this.setCookie('ddId',this.userInfo.ddId,expireDays);
              //跳转
              setTimeout(function(){
                _this.$router.push('/home');
              },2000);
            }else{
                alert("登录失败");
                this.isLogin = false;
              }
            },(response) =>{
              console.log("请求失败");
              setTimeout(function(){
                _this.isLogin = false;
              },2000);
        })
      }
    }
  }
</script>

<style scoped>
    .title{
      line-height:100%;
    }
    .errmsg{
      display:block;
      text-align:center;
      color:red;
      position:relative;
      bottom:-1rem;
    }
  #loading{
    position:absolute;
    text-align:center;
    left:40%;
  }
</style>