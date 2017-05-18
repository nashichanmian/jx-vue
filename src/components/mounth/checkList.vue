<template>
    <div>
        <div class="Return">
            <router-link to="Mdetail">
                <span><<返回</span>
            </router-link>
        </div>
        <div class="Box">
            <span>问题类别:</span>
            <input type="text" id='picker' class="pickerCS" value="类别" @click="picke"/>
            <span >问题属性:</span>
            <input type="text" id='pickerAtb' class="pickerCS" value="属性" @click="pickerAtb"/>
            <button id="Btn1" type="button">查询</button>
        </div>
        <div class="Atblist">
            <ul>
                <li v-for="item in Atblist">{{item}}</li>
            </ul>
        </div>
        <div class="content-block" id="Bombtn">
            <div class="row">
              <div class="col-50"><a href="#" class="button button-big button-fill button-danger">提交</a></div>
              <div class="col-50"><a href="#" class="button button-big button-fill button-success">修改</a></div>
            </div>
        </div>
    </div>
</template>
<script>
    import {picker} from '../../../static/index.js'
    export default{
        data(){
            return{
                Atblist:['类别','属性','问题','减分','选择']
            }
        },
        methods: {
            picke:function(){
                var ClassArr = ['用于存放后台读取字典的数组','A类','B类','C类',,'D类'];
                picker('#picker', ClassArr);
            },
            pickerAtb:function(){
                var AtbArr = ['get','文秘'];
                picker('#pickerAtb', AtbArr);
            }
        }
    }
</script>
<style scoped>
    .Return{
        height:2rem;
        width:100%;
        background:#;
        position: absolute;
        top:0;
        left:0;
    }
    .Return span{
        display:inline-block;
        position:absolute;
        left:.5rem;
        line-height:2rem;
    }
    .pickerCS{
        width:2.2rem;
        line-height:100%;
        text-align:center;
        background:#cdd;
        font-size:.8rem;
        font-weight:700;
    }
    .Box{
        position:absolute;
        padding:0;
        margin:0;
        left: .5rem;
        top: 2rem;
    }
    #Btn1{
        border:none;
        background:#cdd;
    }
    .Atblist{
        margin:0 auto;
        width:97%;
        border:1px solid #cccccc;
        background:#cccddd;
        margin-top:4rem;
        height:1.5rem;
        border-radius:.3rem;
    }
    .Atblist ul{
        padding-left:.5rem;
    }
    .Atblist li{
        float:left;
        display:inline-block;
        margin-right: 1.8rem;
        text-align:left;
    }
    #Bombtn{
        position:fixed;
        bottom:1rem;
        width:100%;
    }
</style>