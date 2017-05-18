/*
* @Author: Marte
* @Date:   2017-05-17 12:09:12
* @Last Modified by:   Marte
* @Last Modified time: 2017-05-17 12:39:38
*/
$("#picker").onclick=function(){
    alert("message")
}
$("#picker").picker({
  toolbarTemplate: '<header class="bar bar-nav">\
  <button class="button button-link pull-left">按钮</button>\
  <button class="button button-link pull-right close-picker">确定</button>\
  <h1 class="title">标题</h1>\
  </header>',
  cols: [
    {
      textAlign: 'center',
      values: ['iPhone 4', 'iPhone 4S', 'iPhone 5', 'iPhone 5S', 'iPhone 6', 'iPhone 6 Plus', 'iPad 2', 'iPad Retina', 'iPad Air', 'iPad mini', 'iPad mini 2', 'iPad mini 3']
    }
  ]
});
export {
    indexJs
}