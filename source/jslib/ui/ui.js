/************************************
*@描述：UI规范模块JS
*@家族：b2b
*@模块：jslib
*@版本：1.0.0
*@说明：暂无
************************************/
define(function(require, exports, module) {
  var $ = require("jquery"),base = require("base"),
      sh = require("../plugins/syntaxhighlighter/3.0.83/syntaxhighlighter");
  exports.loadMsg = function(target){
    var msg = require("../mod/msg-ui");
  	var id="kxMsgUrl_"+(new Date()).getTime();
	  $.ajax({
	    async:false,
	    type:"GET",
	    url:"in/"+target+".html?radom="+id,
	    dataType:"html",
	    success:function(data){
	    	msg.full(data,sh);
	    }
	  });
    $(function(){
      sh.highlight();
    })
  };
  //绑定左侧菜单事件
	$("#j-ui-side").find(".ul1>.li1>a").bind("click",function(){
		var $nextUl = $(this).next("ul"),$em = $(this).find("em");
		if($em.hasClass("z-close")){
			if($nextUl[0]){
				$em.removeClass('z-close');
				$em.addClass('z-open');
				$nextUl.show();
			}
		}else{
			if($nextUl[0]){
				$em.removeClass('z-open');
				$em.addClass('z-close');
				$nextUl.hide();
			}
		}
	});
	//打开左侧菜单
	var _datanav = $("body").attr("data-nav"),$current_a = $("#j-ui-side").find("a[data-nav="+_datanav+"]");
	var $loadUl = $current_a.parent().parent();
	if($loadUl.css("display")=="none"){
		$loadUl.show();
		$loadUl.parent().find("em.z-close").removeClass('z-close').addClass("z-open");
		$current_a.addClass('current')
	}
  //代码高亮
  sh.all();
});