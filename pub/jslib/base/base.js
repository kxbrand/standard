/*!kxbrand(http://www.kxbrand.net)-11-04-2014 */
define("base/base",["jquery","../mod/include","../mod/addjs"],function(a,b){var c=a("jquery"),d=a("../mod/include"),e=a("../mod/addjs").addJs;b.include=d,b.addJs=e,c("div[data-in]").each(function(){var a=c(this).attr("data-in");d(a)})}),define("mod/include",["jquery"],function(a,b,c){var d=a("jquery");c.exports=function(a){var b="kxInclude_"+(new Date).getTime();d.ajax({async:!1,type:"GET",url:a+".html?radom="+b,dataType:"html",success:function(b){d("[data-in='"+a+"']").html(b)}})}}),define("mod/addjs",[],function(a,b){var c=function(a,b){if(!a)return!1;b=b||function(){};var c=a.replace(/\/|\?|:|\\|\.|#/g,"");if(document.getElementById(c))b();else{var d=document.createElement("script");d.type="text/javascript",d.id=c,d.src=a,d.readyState?d.onreadystatechange=function(){("loaded"==d.readyState||"complete"==d.readyState)&&(d.onreadystatechange=null,b())}:d.onload=function(){b()},document.getElementsByTagName("head")[0].appendChild(d)}};b.addJs=c});