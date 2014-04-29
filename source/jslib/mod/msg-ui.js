define(function(require, exports, module) {
  var msg = {},$ = require("jquery"); dialog = require("../plugins/artdialog/v6/dialog-plus");
    msg.full = function(data,syntaxhighlighter){
        var _w = $(window).width()-14,_h = $(window).height()-44;
        var _dialog = dialog({
            title: "消息",
            content:"<div style='padding:20px;'>"+data+"</div>",
            width: _w,
            height: _h,
            fixed: true
        }).show();
    }
    module.exports = msg;
});