/************************************
*@描述：基础类
*@家族：b2b
*@模块：jslib
*@版本：1.0.0
*@说明：合并lazyload,msg(在artdialog扩展)
************************************/
define(function(require, exports, module) {
  var $ = require('jquery');
  var include = require('../mod/include');
  var addJs = require('../mod/addjs').addJs;
  exports.include = include;
  exports.addJs = addJs;
  $("div[data-in]").each(function(){
    var _in = $(this).attr("data-in");
    include(_in);
  });
});