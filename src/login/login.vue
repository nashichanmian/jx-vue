<template>
    <div>
        <div class="Bgimg">
         <section id="bar">
             <h1 class='title'>乌鲁木齐铁路局</h1>
          </section>
          <img src="../assets/xiao.jpg" height="690" width="375" >
          <section class="User">
              <div id="position">
                <span class="name-icon"></span>
                <input type="text" name="usname" placeholder="请输入用户名" v-model="usname">
                <span class="errmsg">{{errmsg}}</span><!-- 错误信息 -->
                <br>
                <span class="pasd-icon"></span>
                <input type="password" name="password" placeholder="请输入密码" v-model="password" />
                <span class="errmsg errmsg2">{{errmsg2}}</span><!-- 错误信息 -->
                <input type="button" name="submit" id="submit" value="登录" @click="submit">
              </div>
              <loading v-if="isLogin" marginTop="-30%"></loading>
          </section>
        </div>
    </div>
</template>


<script>
import {isvalid,loading} from '../../static/index.js'
import Loading from '@/components/Loading'
import {hex_sha1} from '../../static/sha.min.js'
export default{
    data(){
        return{
            isLogin: false,
            usname:'',
            password:'',
            errmsg:'',
            errmsg2:'',
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
        submit(){//登录逻辑
            let _this = this;
            if(isvalid(_this,_this.usname,_this.password)){
                  this.toLogin();
            }
        },
        toLogin(){//登录请求
          this.isLogin = true ;//设置登录状态
            //加密规则 哈希
            // let password_sha = hex_sha1(hex_sha1( this.paswd ));

            //http
            this.$http.post('http://114.115.142.167:8080/jxkh/m/service.do?method=userLogin',{
              account: this.usname,
              password: this.password
            }).then((response) =>{
             //如果登录成功则保存登录状态并设置有效期
                if(response.body.code == 1){
                  console.log(response.body)
                  this.userInfo.ddId = response.body.data.ddId;
                  this.userInfo.userName = response.body.data.userName;
                  this.userInfo.roleLevel = response.body.data.roleLevel;
                  this.$store.commit('updateUserInfo',this.userInfo);
                  let expireDays = 1000 * 60 * 60 * 24 * 15;
                  var userInfo = JSON.stringify(this.userInfo);
                  this.setCookie('userInfo',userInfo,expireDays);

                  //跳转
                  let _this = this;
                console.log("跳home")
                setTimeout(function(){
                  _this.$router.push('/home');
                },2000);
              }else{
                alert("登录失败");
                this.isLogin=false;
              }
            },(response) =>{
              console.log("请求失败");
                  this.isLogin = false;
            });
        }
    },
  }

</script>

<style scoped>
    #bar{
        width: 100%;
        height:2rem;
        text-align:center;
        background:rgb(248, 79, 11);
    }
    .title{
        color:#fff;
        line-height:2rem;
    }
    img{
        position:absolute;
        z-index:-1;
        width:100%;
    }
    .User{
        text-align:center;
        position:absolute;
        padding:0;
        margin:0;
        width:100%;
        bottom:10rem;
    }
    @media screen and (max-width: 320px) {
    .User{
        bottom:6rem;
        }
    }
    .User input{
        padding:0;
        margin: .7rem auto;
        text-align:center;
        width:70%;
        height:1.5rem;
        border:none;
        border-radius:.3rem;
     }
    .pasd-icon,.name-icon{
        position:absolute;
        top:.8rem;
        margin-left:1rem;
        line-height:10rem;
        background-image:url('../assets/usname.png');
        background-repeat:no-repeat;
        background-size:1.2rem;
        width:1rem;
        height:1rem;
     }
     .pasd-icon{
        background-image:url('../assets/password.png');
        top:3.8rem;
        margin-left:1rem;
     }
     #submit{
        background:rgb(179,168,163);
        border:1px ridge #fff;
        color:#fff;
     }
     .errmsg{
        position:absolute;
        top:2.4rem;
        left:5rem;
        color:red;
     }
     .errmsg2{
        top:5.2rem;
     }
</style>