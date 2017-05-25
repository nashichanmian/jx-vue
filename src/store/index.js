/*
* @Author: Marte
* @Date:   2017-05-22 15:42:33
* @Last Modified by:   Marte
* @Last Modified time: 2017-05-24 01:04:54
*/

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//Vuex配置
export default new Vuex.Store({
    state: {
        domain:'http://172.23.197.1/jxkh/m/service.do?method=userLoginByDingDing&teleNum=%22111%22',//保存后台请求的地址
        userInfo:{
            //保存用户信息
            uid:null,
            ulevel:null,
        }
    },
    mutations: {
        updateUserInfo(state,newUserInfo){
            state.userInfo = newUserInfo;
        }
    },
})
//设置cookie,增加到vue实例 方便全局调用
Vue.prototype.setCookie = (c_name,value,expiredays) =>{
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}
//获取cookie
function getCookie(name){
    var arr,reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if(arr = document.cookie.match(reg))
    {
        console.log(arr);
        return (arr[2]);
    }
    else
        return null;
}
Vue.prototype.getCookie = getCookie;

//删除cookie
Vue.prototype.delCookie =(name) => {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}
