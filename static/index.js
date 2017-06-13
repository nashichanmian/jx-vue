/*
* @Author: Marte
* @Date:   2017-05-17 12:09:12
* @Last Modified by:   Marte
* @Last Modified time: 2017-06-13 17:05:05
*/
function picker(id,val){
   $(id).picker({
  toolbarTemplate: '<header class="bar bar-nav">\
  <button style="height:2rem; line-height:2rem;" class="button button-link pull-right close-picker">确定</button>\
  <h1 class="title" style="line-height:2rem;" >选择类型</h1>\
  </header>',
  cols: [
      {
      textAlign: 'center',
      values: val,
      }
    ]
  });
};

//操作成功回调动画
function CallbackMove(){
  setTimeout(function(){
    $.toast('操作成功，正在跳转...', 2000, 'success top');
  },3000);
  setTimeout(function(){
    $('#Return').click();
  },5000);
}
//登录验证
function isvalid(_this,name,paswd){
  if(name && paswd){
    _this.errmsg ='';
    _this.errmsg2 = '';
    return true;
  }
  if(!name){
    _this.errmsg="用户名不能为空 !";
    return false;
  }else{
    _this.errmsg="";
  } ;
  if(!paswd){
    _this.errmsg2="密码不能为空 !";
    return false;
  }else{
    _this.errmsg2="";
  }
};
function register(_this,paswd,teleNum,username){
  if(paswd && teleNum && username ){
    _this.errmsg ='';
    return true;
  };
  if(!paswd){
    _this.errmsg="密码不能为空 !";
    return false;
  }else{
    _this.errmsg2="";
  };
  if(!teleNum){
    _this.errmsg="电话号码不能为空 !";
    return false;
  }else{
    _this.errmsg3="";
  };
  if(!username){
    _this.errmsg="请输入您的姓名 !";
    return false;
  }else{
    _this.errmsg="";
  };
}

export {
    picker,
    CallbackMove,
    isvalid,
    register
}