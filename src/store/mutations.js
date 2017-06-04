/*
* @Author: Marte
* @Date:   2017-06-03 21:11:48
* @Last Modified by:   Marte
* @Last Modified time: 2017-06-05 01:50:07
*/
import {getCookie} from './index.js'
import getters from './getters'
var userInfo = getCookie('userInfo');
const state = {
    isShow:false,
    roleLevelName:{
        name1:'',
        name2:''
    }
};

const mutations = {
    Mlist(state){
        if(userInfo.roleLevel == 2){
            state.isShow = true;
        }
    },
    Clicknone(state){
        state.isShow = false;
    },
    roleLevelNameFC(state){//Mlist 根据人员级别显示名称
            if(userInfo.roleLevel == 1){
                state.roleLevelName.name1= "科长评价";
                state.roleLevelName.name2= "分管主任";
                }else if(userInfo.roleLevel == 2){
                state.roleLevelName.name1= "分管主任";
                state.roleLevelName.name2= "主任评价";
                }
    },
};
export default{
    state,
    mutations,
    getters
}