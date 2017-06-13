/*
* @Author: Marte
* @Date:   2017-06-03 21:11:26
* @Last Modified by:   Marte
* @Last Modified time: 2017-06-14 02:15:52
*/
import Vue from 'vue'
import VueResource from 'vue-resource'
import {getCookie} from './index.js'
import mutations from './mutations'
export default{
    getTimeList:({commit}) => {//月度考核时间列表
            Vue.http.get('http://114.115.142.167:8080/jxkh/m/ service.do?method=publishMonthlyAccessment').then((response) => {
                  if(response.body.code == 1){
                    commit('getTimeList',response.body.data);
                }
            },error => {
              //alert("连接失败");
            });
    },
    Mdetail:({commit}) => {//上级考核下属的 个人考核详情
            console.log(mutations.state.pid);
            console.log(mutations.state.BID);
            Vue.http.post('http://114.115.142.167:8080/jxkh/m/service.do?method=getMonthlyAccessmentInfo',{
                pid:mutations.state.pid,
                bId:mutations.state.BID,
                ddId:''
            }).then((response) => {
              console.log(response.body.data)
              if(response.body.code ==1 ){
                  commit('Mdetail',response.body.data);
              }else{
                console.log(response.body.msg)
              }
            },(response) =>{
              console.log(response)
            })
    },
    Mdetail2:({commit}) => {//获取个人考核详情
            Vue.http.post('http://114.115.142.167:8080/jxkh/m/service.do?method=getMonthlyAccessmentInfo',{
                pid:mutations.state.pid,
                ddId:getCookie('userInfo').ddId,
                bId:''
            }).then((response) => {
              if(response.body.code ==1 ){
                  commit('Mdetail',response.body.data);
              }else{
                console.log(response.body.msg)
              }
            },(response) =>{
              // alert(response)
            })
    },
    types:({commit},types) =>{
           if(getCookie('userInfo').roleLevel == 1){
              if(types == '个人自评'){
                commit('types',1)
              };
              if(types == '科长评价'){
                commit('types',2)
              };
              if(types == '分管主任'){
                commit('types',3)
              }
            };
            if(getCookie('userInfo').roleId == 3){
              if(types == '个人自评'){
                commit('types',1)
              };
              if(types == '科长评价'){
                commit('types',2)
              };
              if(types == '分管主任'){
                commit('types',2)
              }
            }else{
              if(types == '分管主任'){
                commit('types',2)
              };
              if(types == '主任评价'){
                commit('types',3)
              }
            }

    },
    getXSlist:({commit}) => { //上级查看下属 返回人员列表信息
          Vue.http.post('http://114.115.142.167:8080/jxkh/m/service.do?method=getMonthlyAccessmentList',{
              pid:mutations.state.pid,
              ddId:getCookie('userInfo').ddId,
              currentRoleId:getCookie('userInfo').roleId
          }).then((response) =>{
              if(response.body.code ==1){

                commit('getXSlist',response.body.data)
              }else{
                console.log(response.body.msg)
              }
          },(response) =>{
            console.log(response)
          })
    },
    getval:({commit}) =>{//主任查看下属 单位列表
        Vue.http.get('http://114.115.142.167:8080/jxkh/m/service.do?method=getUnitList').then((response) =>{
            if(response.body.code ==1){
                let data = response.body.data;
                let getval={
                    unitName:[],
                    unitId:[]
                };
                let arr=[];
                let arr2=[];
                for(var i=0;i<data.length;i++){
                    arr.push(data[i].unitName);
                    arr2.push(data[i].unitId);
                };
                getval.unitName = arr;
                getval.unitId = arr2;
                commit('getval',getval);
                }
              },(response) =>{
                  console.log(response)
                })
    },
    getvalFZR:({commit}) =>{//副主任查看下属 人员级别
        Vue.http.get('http://114.115.142.167:8080/jxkh/m/service.do?method=getRoleListBySecondDirector').then((response) =>{
            if(response.body.code ==1){
                let data = response.body.data;
                let getvalFZR={
                    roleId:[],
                    roleName:[]
                };
                let arr=[];
                let arr2=[];
                for(var i=0;i<data.length;i++){
                    arr.push(data[i].roleName);
                    arr2.push(data[i].roleId);
                };
                getvalFZR.roleName = arr;
                getvalFZR.roleId = arr2;
                commit('getvalFZR',getvalFZR);
                }
              },(response) =>{
                  console.log(response)
                })
    },
    getCheck:({commit}) =>{//副主任查看下属 人员级别
        Vue.http.get('http://114.115.142.167:8080/jxkh/m/service.do?method=getRulesTypeList').then((response) =>{
            if(response.body.code ==1){
                let data = response.body.data;
                commit('getCheck',data);
                }
              },(response) =>{
                  console.log(response)
                })
    },

}