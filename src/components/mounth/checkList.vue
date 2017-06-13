<template>
<div class="content">
    <div id="checkList">
        <div>
                <span class="return" onclick="window.history.go(-1)">&nbsp;&nbsp;<<返回</span>
        </div>
        <div class="Box">
            <section class="select selectLeft">
                 <span>类别:</span>
                 <select name="province" id="province" @change="getAtbArr">
                        <option>问题类别</option>
                        <option v-for="(list,index) in getCheck">{{list}}</option>
                 </select>
            </section>
            <section class="select selectRight">
                <span>属性:</span>
                <select name="city" class="city">
                    <option>问题属性</option>
                </select>
            </section>
            <button id="Btn_res" class="button button-fill" @click="serch">查询</button>
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
              <li class="item-content" v-for="(item,index) in reschList">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner" id="Atblist">
                  <div class="after">{{inputVal}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                  <div class="after">{{item.ruleComent}}</div>
                  <div class="after">{{item.ruleText}}</div>
                  <div class="after">{{item.ruleScore | toMinus}}</div>
                  <div class="after"><input name="Fruit" type="checkbox" v-if="item.ruleScore" v-model = "selected" :value='item.ruleId'/></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="inputText">
            <input class="input1" type="text" v-model = "input1"/>
            <input class="input2" type="number" v-model = "input2">
        </div>
        <div class="content-Btn">
                <button class="Btn2" @click="submitFrom">提交</button>
        </div>
    </div>
   </div>
</template>
<script>
import {mapGetters} from 'vuex'
    export default{
        data(){
            return{
                Atblist:['类别','属性','问题','减分','选择'],
                inputVal:'',
                atbVal:'',
                reschList:[
                    {
                        ruleId:null,
                        ruleType:null,
                        ruleComent:null,
                        ruleText:null,
                        ruleScore:null
                    }
                ],
                input1:'',
                input2:'',
                selected:[],
                selectedString:''
            }
        },
        mounted(){
            this.$store.dispatch('getCheck');
        },
        computed:mapGetters([
            'getCheck'
        ]),
        methods: {
            getAtbArr(){
                this.inputVal = $('#province').val();//获取单位input的value，查询在数组中出现的位置，获取下表然后通过下标比较unitId的数组同位置的值就是需要的unitId;
                this.$http.post('http://114.115.142.167:8080/jxkh/m/service.do?method=getRulesComentList',{
                    ruleType:this.inputVal
                }).then((response) =>{
                    if(response.body.code ==1){
                         let data2 = response.body.data;
                         console.log(data2)
                        let sltCity = $('.city');
                        $(".city option").remove();//每次选择都清空城市列表
                        //遍历根据省份下标与之对应的城市下标
                        for(var j=0;j<data2.length;j++){
                            sltCity.append("<option>"+data2[j]+"</option>");
                        }
                    }
                })
            },
            serch(){
                this.atbVal = $('.city').val();
                this.$http.get('http://114.115.142.167:8080/jxkh/m/service.do?method=getQuestionByTypeAndComent&ruleType='+this.inputVal+'&ruleComent='+this.atbVal).then((response) =>{
                        this.reschList = response.body.data;
                },(response)=>{

                });
            },
            submitFrom(){
                this.selectedString = this.selected.join(',');
                this.$http.post('http://114.115.142.167:8080/jxkh/m/service.do?method=saveEvaulation',{
                     kid :this.$store.getters.zp.kid,
                     content : this.input1,
                     score : this.input2,
                     choose : this.selectedString,
                     type : this.$store.getters.types
                }).then((response) => {
                    if(response.body.code == 1){
                        $.toast('操作成功，正在跳转...', 3000, 'success top');
                        setTimeout(()=>{
                            window.history.back(-1);
                        },3000);
                    }else{
                        $.toast("操作失败,请重试");
                    }
                })
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
    .select{
        float:left;
        color:rgb(0, 173, 248);
        margin:0;
        padding:0;
    }
    .selectRight{
        margin-left:-.3rem;
    }
    #Btn_res{
        color:#fff;
        width:3rem;
        margin-top:2rem;
    }
    .Box{
        margin-top:1.5rem;
        margin-left:1.6rem;

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
        overflow:scroll;
    }
    #Atbtitle .item-title:nth-child(3){
        margin-left:.6rem;
         overflow:scroll;
    }
    #Atblist{
        font-size:14px;
        margin-left:-1rem;
         overflow:scroll;
    }
    #Atblist .item-after:nth-child(3){
        margin-left:.7rem;
         overflow:scroll;
    }
    #Atblist .item-after:nth-child(4){
        margin-right:1.2rem;
         overflow:scroll;

    }
    #Atblist input{
        margin-left:-1rem;
    }
    .item-title{
        font-size:16px;

    }
    .Btn2{
        width:6rem;
        height:2rem;
        background:rgb(0, 173, 248);
        border:none;
        border-radius:.3rem;
        color:#fff;
        font-weight:700;
    }
    #Bombtn{
        position:fixed;
        bottom:1rem;
        width:100%;
    }
    .content-Btn{
        text-align:center;
        margin-top:7rem;
        padding-bottom:5rem;
    }
    .inputText{
        width:90%;
        margin:0 auto;
     }
    .inputText input{
        float:left;
    }
    .input1{
        width:12rem;
        height:3rem;
        overflow:scroll;
    }
    .input2{
        margin-left:.3rem;
        width:4.5rem;
        height:3rem;
    }
    .after{
        min-width: 4rem;
        margin-left:.2rem;
        color:rgb(131, 132, 133);
    }
    .after:nth-child(2){
        margin-left:-1.5rem;
    }
    .after:nth-child(4){
        margin-left:1rem;
    }
    .after:last-child{
        margin-left:-1rem;
    }
@media screen and (max-width: 320px) {
     .return{
        height:2rem;
        line-height:2rem;
     }
     .Box{
        margin-left:1rem;
        font-size:15px;
     }
    .after:nth-child(2){
        margin-left:-2.2rem;
    }
    .after:nth-child(3){
        margin-left:-.5rem;
    }
    .after:nth-child(4){
        margin-left:.5rem;
    }
    .input1{
        width:10rem;
        height:3rem;
        overflow:scroll;
    }
    .input2{
        width:4rem;
        height:3rem;
    }
}
</style>