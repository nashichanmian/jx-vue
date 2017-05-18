/*
* @Author: Marte
* @Date:   2017-05-17 12:09:12
* @Last Modified by:   Marte
* @Last Modified time: 2017-05-18 19:24:00
*/
function picker(id,val){
   $(id).picker({
  toolbarTemplate: '<header class="bar bar-nav">\
  <button style="height:1rem; line-height:1rem;" class="button button-link pull-right close-picker">确定</button>\
  <h1 class="title" style="line-height:1rem;" >选择类型</h1>\
  </header>',
  cols: [
      {
      textAlign: 'center',
      values: val
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
export {
    picker,
    CallbackMove
}