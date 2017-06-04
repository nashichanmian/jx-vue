<template>
    <div id="KZ01">
        <div>
                <span class="return" onclick="window.history.go(-1)">&nbsp;&nbsp;<<返回</span>
        </div>
        <div class="Box">
            <span>单位:</span>
            <input type="text" id='picke' class="pickerCS" value="科长"/>
            <span style="marginLeft:1rem;">部门:</span>
            <input type="text" id='pickerAtb' class="pickerCS" value="综合科"/>
            <button id="Btn_res" type="button">查询</button>
        </div>
        <div class="contentRQ">
          <div class="list-block">
            <ul>
              <li class="item-content" id="Atbtitle">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                  <div class="item-title">人员</div>
                  <div class="item-title">职务</div>
                  <div class="item-title">部门</div>
                  <div class="item-title">得分</div>
                </div>
              </li>
              <li class="item-content" @click='toRouter2'>
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner" id="Atblist">
                  <div class="item-after">张三</div>
                  <div class="item-after jibie">科长</div>
                  <div class="item-after">综合部</div>
                  <div class="item-after">99</div>
                </div>
              </li>
                            <li class="item-content" @click='toRouter2'>
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner" id="Atblist">
                  <div class="item-after">张三</div>
                  <div class="item-after jibie">科长</div>
                  <div class="item-after">综合部</div>
                  <div class="item-after">99</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
    </div>
</template>
<script>
import {picker} from '../../../static/index.js'
    export default{
        data(){
            return{
                val:['档案室','财务科'],
                AtbArr:['全部'],
            }
        },
        mounted(){
            picker('#picke',this.val);
            picker('#pickerAtb',this.AtbArr);
            this.getVal();
        },
        watch:{
           val:{
            handler:function(val,oldval){
                    getAtbArr();
               },
             deep:true
            }
        },
        methods: {
            getVal(){
                this.$http.get('/jxkh/jxkh/opkaoherules.do?method=getRulesTypeList').then((response) =>{
                    if(response.body.data ==1){
                        this.val = response.body.data
                    }else{
                        alert(response.body.msg)
                    }
                },(response) =>{

                })
            },
            getAtbArr(){
                this.$get('/jxkh/jxkh/opkaoherules.do?method=getRulesComentList&ruleType=A',{
                    ruleType : $('#picke').value
                }).then((response) =>{
                    if(response.body.data ==1){
                        this.val = response.body.data
                    }else{
                        alert(response.body.msg)
                    }
                },(response) =>{
                    alert("请求失败")
                })
            },
            toRouter2(){
                    this.$router.push('/rorLevel1')
            }
        }
    }
</script>
<style scoped>
    .return{
        display:inline-block;
        background:rgb(0, 173, 248);
        height:2.7rem;
        width:100%;
        font-size:1.3em;
        line-height:2.7rem;
        color:#fff;
        font-weight:700;
    }
    .pickerCS{
        width:2.2rem;
        height:1.2rem;
        text-align:center;
        background:#cdd;
        font-size:.8rem;
        font-weight:700;
    }
    .Box{
        margin-top:2rem;
        margin-left:1rem;
    }
    .contentRQ{
        width:90%;
        margin:0 auto;
    }
    #Atbtitle{
        color:rgb(0, 173, 248);
        margin-left:-.5rem;
    }
    #Atbtitle .item-title:nth-child(2){
        margin-left:.1rem;
    }
    #Atbtitle .item-title:nth-child(3){
        margin-left:.6rem;
    }
    #Atblist{
        font-size:14px;
        margin-left:-1rem;
    }
    #Atblist .item-after:nth-child(2){
        margin-left:.2rem;
    }
    #Atblist .item-after:nth-child(3){
        margin-left:.7rem;
    }
    #Atblist .item-after:nth-child(4){
        margin-right:.5rem;
    }
    #Atblist input{
        margin-left:-1rem;
    }
    .item-title{
        font-size:16px;
    }
    #Btn1{
        border:none;
        background:#cdd;
    }
    .Btn1, .Btn2{
        width:6rem;
        height:2rem;
        background:rgb(0, 173, 248);
        border:none;
        border-radius:.3rem;
        color:#fff;
        font-weight:700;
    }
    .Btn1{
        margin-right:1rem;
    }
    #Bombtn{
        position:fixed;
        bottom:1rem;
        width:100%;
    }
    .content-Btn{
        text-align:center;
        margin-top:3rem;
    }
@media screen and (max-width: 320px) {
     .return{
        height:2rem;
        line-height:2rem;
     }
     .Box{
        margin-left:1rem;
        font-size:14px;
     }
     .pickerCS{
        height:1rem;
     }

}
</style>