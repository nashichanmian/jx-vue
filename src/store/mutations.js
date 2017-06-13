/*
* @Author: Marte
* @Date:   2017-06-03 21:11:48
* @Last Modified by:   Marte
* @Last Modified time: 2017-06-14 02:21:15
*/
import {getCookie} from './index.js'
import getters from './getters'
// var cooKieuserInfo = getCookie('userInfo');
const state = {
    ddid:'',
    isShow:false,
    userInfo:{
        //保存用户信息
        ddId:null,
        teleNum:null,
        userName:null,
        roleId:null,
        organizationId:null,
        leaderFirstId:null,
        leaderSecondId:null,
        specialTag:null,
        roleLevel:null,
        specialTagRole:null,
        inOrganizer:null
    },
    timeList:[],//首页时间列表
    pid:'',//计划ID
    zp:{//个人考核详情页
        personalSafetyPerformenceContent:'',
        personalSafetyPerformenceScore:'',
        selfEvaulationContent:'',
        selfEvaluationScore:'',
        firstLeaderContent:'',
        firstLeaderScore:'',
        secondLeaderContent:'',
        secondLeaderScore:'',
        finalScore:'',
        kid:'',
        step:''
    },

    roleLevelName:{ //动态更替个人考核详情页的Title
        name1:'',
        name2:''
    },
    getXSlist:[//查看下属的 月度考核人员列表
      {
        bId:'',
        pid:'',
        userName:'',
        roleName:'',
        Score:'',
        orName:'',
        Step:''
      }
    ],
    BID:'',//被考核者DDID
    role:'',
    types:'', //保存评价的级别
    getval:{//主任查看下属 单位列表
       unitName:[],
       unitId:[]
    },
    getvalFZR:{//副主任查看下属级别列表
       roleId:[],
       roleName:[]
    },
    getCheck:[],//问题类型列表
};

const mutations = {
    ddid(state,val){
        state.ddid = val;
    },
    getTimeList(state,res){
        state.timeList = res;
    },
    Mlist(state){
        if(getCookie('userInfo').roleId == 3){
            state.isShow = true;
        }
    },
    Clicknone(state){
        state.isShow = false;
    },
    Mdetail(state,val){
        state.zp = val;
    },
    roleLevelNameFC(state,val){//Mlist 根据人员级别显示名称
        if(val == 1 || val == 2){
            state.roleLevelName.name1= "科长评价";
            state.roleLevelName.name2= "分管主任";
            }else{
            state.roleLevelName.name1= "分管主任";
            state.roleLevelName.name2= "主任评价";
        }
    },
    getXSlist(state,val){
            state.getXSlist = val;
    },
    BID(state,val){
            state.BID = val;
    },
    updateUserInfo(state,newUserInfo){
        state.userInfo = newUserInfo;
    },
    Emit(state,Id){
        state.pid = Id;
    },
    roleLevel(state,role){
        state.role = role;
    },
    types(state,types){
        state.types = types;
    },
    getval(state,val){
        state.getval = val;
    },
    getvalFZR(state,val){
        state.getvalFZR = val;
    },
    getCheck(state,val){
        state.getCheck = val;
    }


};
export default{
    state,
    mutations,
    getters,
}