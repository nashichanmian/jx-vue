/*
* @Author: Marte
* @Date:   2017-05-22 15:42:33
* @Last Modified by:   Marte
* @Last Modified time: 2017-06-11 18:03:30
*/

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//Vuex配置
import actions from './actions'
import mutations from './mutations'
export default new Vuex.Store({

    actions,
    modules:{
        mutations
    }
});
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
        var arr = JSON.parse(unescape(arr[2]));
        return arr;

    }
    else
        return null;
}
function getCookieString(name){
    var arr,reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if(arr = document.cookie.match(reg))
    {
        return arr[2];
    }
    else
        return null;
}
Vue.prototype.getCookie = getCookie;
Vue.prototype.getCookieString = getCookieString;
//删除cookie
// Vue.prototype.delCookie =(name) => {
//     var exp = new Date();
//     exp.setTime(exp.getTime() - 1);
//     var cval = getCookie(name);
//     if (cval != null)
//       document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
// }
export {
    getCookie
}

