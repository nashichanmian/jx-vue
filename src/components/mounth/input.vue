<template>
    <div id="input">
        <div>
                <span class="return" onclick="window.history.go(-1)">&nbsp;&nbsp;<<返回</span>
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
        <div class="content-Btn" v-show="isNone">
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
                message2:'',
                isNone:'true'
            }
        },
        mounted(){
            this.btnNone();
             this.message = this.$store.getters.zp.personalSafetyPerformenceContent;
             this.message2= this.$store.getters.zp.personalSafetyPerformenceScore;
        },
        methods:{
          PostZP:function(){
                $.showPreloader();
                setTimeout(function () {
                    $.hidePreloader();
                }, 2000);
            if(this.message && this.message2){
                this.$http.post('http://114.115.142.167:8080/jxkh/m/service.do?method=savePersonalSafetyPerformance',{
                    kid:this.$store.getters.zp.kid,
                    safetyContent:this.message,
                    safetyScore:this.message2
                }).then((response) => {
                   if(response.body.code ==1){
                     CallbackMove();
                     setTimeout(()=>{
                        window.history.back(-1);
                    },4000);
                    }else{
                        alert(response.body.msg);
                    }
                },error =>{
                        console.log(response);
                });
            }else{
                console.log("kong")
            }
          },
          btnNone(){//如果上级已评价 隐藏按钮
            if(this.$store.state.step >2){
                this.isNone = false;
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
    .Btn2{
        width:6rem;
        height:2rem;
        background:rgb(0, 173, 248);
        border:none;
        border-radius:.3rem;
        color:#fff;
        font-weight:700;
    }

</style>