// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import store from './store/'
console.log(store);
Vue.config.productionTip = false
Vue.use(VueResource);
Vue.http.options.emulateHTTP = true;
Vue.http.options.emulateJSON = true;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  VueResource,
  template: '<App/>',
  components: { App },
  watch:{//监听路由检查登录
    "$route" :'checkLogin'
  },
  //进入页面时
  created(){
    this.checkLogin();
  },
  methods:{
    checkLogin(){
        //检查是否存在session
        if(!this.getCookie('session')){
            this.$router.push('/login');
        }else{
            this.$router.push('/home');
        }
    }
  }

})