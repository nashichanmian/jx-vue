<template>
    <div id="ZRcheckList">
        <div>
                <span class="return" onclick="window.history.go(-1)">&nbsp;&nbsp;<<返回</span>
        </div>

        <div class="Box">
        <section class="select selectLeft">
             <span>单位:</span>
             <select name="province" id="province" @change="getAtbArr">
                    <option>选择级别</option>
                    <option v-for="(list,index) in getvalFZR.roleName">{{list}}</option>
             </select>
        </section>
        <section class="select selectRight">
            <span>部门:</span>
            <select name="city" class="city">
                <option>选择部门</option>
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
                  <div class="item-title">人员</div>
                  <div class="item-title">职务</div>
                  <div class="item-title">部门</div>
                  <div class="item-title">得分</div>
                </div>
              </li>
              <li class="item-content" @click='toRouter5' v-for="(item,index) in getXSlist">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner" id="Atblist">
                  <div class="after">{{item.userName}}</div>
                  <div class="after jibie" :bId="item.bId" :orName="item.orName" :step="item.Step">{{item.roleName}}</div>
                  <div class="after">{{item.orName}}</div>
                  <div class="after">{{item.Score}}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>



    </div>
</template>
<script>
import {mapGetters} from 'vuex'
    export default{
        data(){
            return{
                val:[
                    {
                        unitName:[],
                        unitId:[]
                    }
                ],
                AtbArr:[],
                unId:'',
                deId:'',
            }
        },
        mounted(){
            this.$store.dispatch('getvalFZR');
        },
        computed:mapGetters([
            'getvalFZR',
            'getXSlist'
        ]),
        methods: {
            getAtbArr(){
                let arr=[];
                let valIndex = $('#province').val();//获取单位input的value，查询在数组中出现的位置，获取下表然后通过下标比较unitId的数组同位置的值就是需要的unitId;
                this.unId = this.getvalFZR.roleId[this.getvalFZR.roleName.indexOf(valIndex)];
                this.$http.post('http://114.115.142.167:8080/jxkh/m/service.do?method=getOrganizationListBySecondDirector',{
                    ddId:this.getCookie('userInfo').ddId
                }).then((response) =>{
                    if(response.body.code ==1){
                         let data2 = response.body.data;
                         for(var i=0;i<data2.length;i++){
                             arr.push(data2[i].orName);
                         }
                        let sltCity = $('.city');
                        $(".city option").remove();//每次选择都清空城市列表
                        //遍历根据省份下标与之对应的城市下标
                        for(var j=0;j<arr.length;j++){
                            sltCity.append("<option>"+arr[j]+"</option>");
                        }
                    }
                })
            },
            serch(){
                this.$store.dispatch("getXSlist");
            },
            toRouter5(){
              var role = this.getEventTrigger(event).getElementsByTagName("div")[1].getElementsByTagName("div")[1].innerHTML;//用户级别传给mlist页面用于判断并渲染上级评价的名称
              var BID = this.getEventTrigger(event).getElementsByTagName("div")[1].getElementsByTagName("div")[1].getAttribute('bId');
              this.$store.commit('BID',BID);
              this.$store.commit('roleLevel',role);
              this.$router.push('/rorlevel0');
            },
            getEventTrigger(event)
              { //获取当前点击的元素的innerhtml用于判断人员级别
                 var x=event.currentTarget;
                 return x;
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
        color:rgb(0, 173, 248);
        margin:0;
        padding:0;
    }
    #Btn_res{
        color:#fff;
        width:3rem;
        float:right;
        margin-top:-1.7rem;
        margin-right:3rem;
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
    .after{
      min-width:4rem;
      text-align:left;
      color:rgb(131, 132, 133);
      margin-left:.2rem;
    }
    .after:nth-child(3){
      margin-left:.8rem;
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
    .after{
      min-width:3.8rem;
      text-align:left;
      color:rgb(131, 132, 133);
      margin-left:0;
    }
    .after:nth-child(3){
      margin-left:0;
    }
}
</style>