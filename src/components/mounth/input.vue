<template>
    <div id="input">
        <div>
            <router-link to="Mlist" id="Return">
                <span class="return">&nbsp;&nbsp;<<返回</span>
            </router-link>
        </div>
        <div class="box1">
            <span class="jx">个人安全绩效:</span>
            <br>
            <textarea class="textInput" name="zp" v-model="message"></textarea>
        </div>
        <div class="box2">
            <span class="number">评价得分:</span>
            <br>
            <input class="nubInput" type="number" v-model="message2" min="" max="100" />
        </div>
        <div class="content-Btn">
                <button class="Btn1" @click="PostZP">修改</button>
                <button class="Btn2" @click="PostZP">提交</button>
        </div>
    </div>
</template>
<script>
    import {CallbackMove} from '../../../static/index.js'
    export default{
        data(){
            return{
                message:'',
                message2:''
            }
        },
        methods:{
          PostZP:function(){
                $.showPreloader();
                setTimeout(function () {
                    $.hidePreloader();
                }, 2000);
            if(this.message && this.message2){
                this.$http.post('/api/PostZP',{
                    id:'Usid',
                    text1:this.message1,
                    text2:this.message2
                }).then((response) => {
                  // if(response.data.code ==1){
                     CallbackMove();
                     console.log(this.message);
                     console.log(this.message2);

                  // }
                },error =>{

                });
            }else{
                console.log("kong")
            }
          },
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
@media screen and (max-width: 320px) {
     .return{
        height:2rem;
        line-height:2rem;
     }
}
    .box1,.box2{
        width:90%;
        margin-top:1rem;
        margin-left:.9rem;
    }
    .jx,.number{
        color:rgb(123 ,124, 125);
        font-size:16px;
        font-weight:700;
    }
    .textInput{
        margin-top:.4rem;
        width:100%;
        height:7rem;
    }
    .nubInput{
        width:100%;
        height:3.5rem;
        margin-top:.4rem;
    }
    .content-Btn{
        text-align:center;
        margin-top:3rem;

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
</style>