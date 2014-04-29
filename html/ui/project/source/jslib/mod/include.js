/************************************
*@描述：html包含页面
*@说明：外层需data-in属性，且与路径保持一致。
*@示例：
  <div class="g-head" data-in="in/head"></div>
*@使用：var include = require("../mod/include")。
************************************/
define(function(require,exports,module){
  var $ = require("jquery");
  module.exports = function(sTarget){
    var _id="kxInclude_"+(new Date()).getTime();
    $.ajax({
      async:false,
      type:"GET",
      url:sTarget+".html?radom="+_id,
      dataType:"html",
      success:function(data){
        $("[data-in='"+sTarget+"']").html(data);
      }
    });
  };
});