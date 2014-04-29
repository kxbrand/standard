define(function(require, exports, module) {
  var msg = {},art = require("../plugins/artdialog/v6/dialog-plus");
  msg.Alert=function(str){
  	alert(str);
  }
  module.exports = msg;
});