<template>
    <div>
        <div>
            <router-link to="Mdetail" id="Return">
                <span><<返回</span>
            </router-link>
        </div>
        <div>
            <span>个人安全绩效:</span>
            <br>
            <textarea name="zp" rows="3" cols="30" v-model="message"></textarea>
        </div>
        <div>
            <span>评价得分:</span>
            <br>
            <input type="number" v-model="message2" min="1" max="100" />
        </div>
        <div class="content-block">
            <div class="row">
              <div class="col-50">
                <button href="#" class="button button-big button-fill button-success" @click="PostZP">提交</button>
              </div>
              <div class="col-50">
                <button class="button button-big button-fill button-danger" @click="PostZP">修改</button>
              </div>
            </div>
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