<template>
    <div>
        <div class="Bgimg">
        <img src="../assets/xiao.jpg" height="670" width="375" alt="">
         <section class="bar bar-nav">
             <h1 class='title'>乌鲁木齐铁路局</h1>
          </section>
          <section class="User">
              <span class="name-icon"></span>
              <input type="text" name="usname" placeholder="请输入用户名" v-model="usname">
              <span class="errmsg">{{errmsg}}</span><!-- 错误信息 -->
              <br>
              <span class="pasd-icon"></span>
              <input type="password" name="password" placeholder="请输入密码" v-model="paswd" />
              <span class="errmsg errmsg2">{{errmsg2}}</span><!-- 错误信息 -->
              <input type="button" name="submit" id="submit" value="登录" @click="submit">
              <loading v-if="isLogin" marginTop="-30%"></loading>
          </section>
        </div>
    </div>
</template>


<script>
import {isvalid} from '../../static/index.js'
import Loading from '@/components/Loading'
import {hex_sha1} from '../../static/sha.min.js'
export default{
    data(){
        return{
            isLogin: false,
            usname:'',
            paswd:'',
            errmsg:'',
            errmsg2:''
        }
    },
    components:{
      Loading
    },
    methods:{
        submit:function(){//登录逻辑
            let _this = this;
            if(isvalid(_this,_this.usname,_this.paswd)){
                  this.toLogin();
            }
        },
        toLogin(){//登录请求
            //加密规则 哈希算法
            let password_sha = hex_sha1(hex_sha1( this.paswd ));

            let loginParam = {
              account: this.usname,
              password_sha
            };

            this.isLogin = true ;//设置登录状态

            this.$http.post('/api/GetZP',{
              param : loginParam
            }).then((response) =>{
             //如果登录成功则保存登录状态并设置有效期
                console.log(response)
                let expireDays = 1000 * 60 * 60 * 24 * 15;
                this.setCookie('cookie','session',expireDays);
                //跳转
                let _this = this;
                console.log("跳home")
                setTimeout(function(){
                  _this.$router.push('/home');
                },2000);

            },(response) =>{
              console.log(response);
            });
        }
    },
  }

</script>

<style scoped>
    .bar{
        margin:0;
        top: .8rem;
        position:absolute;
        background:rgb(248, 79, 11);
    }
    .title{
        color:#fff;
        line-height:100%;
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