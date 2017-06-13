<template>
    <div id="register">
        <header class="bar bar-nav">
          <h1 class='title' style="line-height:2.7rem">注 册</h1>
        </header>
        <div class="content">
          <div class="list-block">
            <ul>
              <!-- Text inputs -->
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
                  <div class="item-media"><i class="icon icon-form-name"></i></div>
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
<!--               <li>
                <div class="item-content">
                  <div class="item-media"><i class="icon icon-form-name"></i></div>
                  <div class="item-inner">
                    <div class="item-title label">部门</div>
                    <div class="item-input">
                      <input type="text" id='orgId' placeholder="请选择所属部门"/>
                    </div>
                  </div>
                </div>
              </li> -->
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
import {register,picker} from '../../static/index.js'
import Loading from '@/components/Loading'
export default{
    data(){
      return{
          isLogin: false,
          // orgList:[],
          // orId:[],
          organizationId:'',
          userPwd:'',
          teleNum:'',
          userName:'',
          errmsg:'',
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
              specialTagRole:null,
              inOrganizer:null
          }
      }
    },
    mounted(){

    },
    components:{
      Loading
    },
    methods:{
      // getOrgList(){//http 获取字典
      //   this.$http.get('http://114.115.142.167:8080/jxkh/m/service.do?method=getOrganizationList').then((response) =>{
      //     let data = response.body.data;
      //     console.log(response.body.data)
      //     let arr=[];
      //     let arr2=[];
      //     for(var i=0;i<data.length;i++){
      //       arr.push(data[i].orname);
      //       // arr2.push(data[i].orid);
      //     }
      //     this.orgList = arr;//把字典赋值给数组
      //     this.orId = arr2;
      //     picker('#orgId',this.orgList);
      //   },(response) =>{
      //     console.log(response)
      //   });
      // },
      Submit(){
        let _this = this;
        if(register(_this, _this.userPwd, _this.teleNum, _this.userName)){
            this.isLogin = true ;//设置登录状态
            this.toRegister();
        }
      },
      toRegister(){
        // let oname = $('#orgId').val();//根据input value在数组的位置 提取ID
        // var oid= this.orId[this.orgList.indexOf(oname)];
        this.$http.post('http://114.115.142.167:8080/jxkh/m/service.do?method=register',{
          userPwd:this.userPwd,
          teleNum:this.teleNum,
          userName:this.userName,
          ddId:'zpxnHklxMg4tsoXp'
        }).then((response) => {
            console.log(response.body)
             //如果注册成功则保存登录状态并设置有效期
            if(response.body.code == 1){
                  console.log(response.body)
                  this.userInfo = response.body.data;
                  this.$store.commit('updateUserInfo',this.userInfo);
                  let expireDays = 1000 * 60 * 60;
                  var userInfo = JSON.stringify(this.userInfo);
                  this.setCookie('userInfo',userInfo,expireDays);
                  //跳转
                  this.$router.push('/home');
                  this.isLogin=false;
            }else{
              this.isLogin=false;
                this.errmsg=response.body.msg;
              }
            },(response) =>{
              console.log("请求失败");
              setTimeout(function(){
                this.isLogin = false;
              },2000);
        })
      }
    }
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