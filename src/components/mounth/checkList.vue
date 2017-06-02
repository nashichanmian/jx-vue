<template>
    <div id="checkList">
        <div>
            <router-link to="Mlist" id="Return">
                <span class="return">&nbsp;&nbsp;<<返回</span>
            </router-link>
        </div>
        <div class="Box">
            <span>问题类别:</span>
            <input type="text" id='picke' class="pickerCS" value="类别"/>
            <span >问题属性:</span>
            <input type="text" id='pickerAtb' class="pickerCS" value="属性"/>
            <button id="Btn_res" type="button">查询</button>
        </div>
        <div class="contentRQ">
          <div class="list-block">
            <ul>
              <li class="item-content" id="Atbtitle">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                  <div class="item-title">类别</div>
                  <div class="item-title">属性</div>
                  <div class="item-title">问题</div>
                  <div class="item-title">减分</div>
                  <div class="item-title">选择</div>
                </div>
              </li>
              <li class="item-content">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner" id="Atblist">
                  <div class="item-after">类别</div>
                  <div class="item-after">属性</div>
                  <div class="item-after">问题</div>
                  <div class="item-after">减分</div>
                  <div class="item-after"><input name="Fruit" type="radio" value="" /></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="content-Btn">
                <button class="Btn1" @click="PostZP">修改</button>
                <button class="Btn2" @click="PostZP">提交</button>
        </div>
    </div>
</template>
<script>
import {picker} from '../../../static/index.js'
    export default{
        data(){
            return{
                Atblist:['类别','属性','问题','减分','选择'],
                val:['a','b'],
                AtbArr:['get','文秘']
            }
        },
        mounted(){
            picker('#picke',this.val);
            picker('#pickerAtb',this.AtbArr)
        },
        methods: {

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
    #Atblist .item-after:nth-child(3){
        margin-left:.7rem;
    }
    #Atblist .item-after:nth-child(4){
        margin-right:1.2rem;
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