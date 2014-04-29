/************************************
*@描述：动态添加CSS
*@家族：kxbrand
*@名称：base
*@版本：1.0.0
*@依赖关系：[]
*@说明：
  参数：file,字符串,必传
  参数：callback,函数,加载完成后回调函数
*@示例：base.addCss("/jslib/kx-min.css",function(){alert("success")});
************************************/
define(function(require, exports, module) {
  var addCss = function(file,callback){
    if(!file){
     return false;
    }
    callback = callback || function(){};
    var _sId = file.replace(/\/|\?|:|\\|\.|#/g, "");
    if(!document.getElementById(_sId)){
      var _css = document.createElement("link");
      _css.type = "text/css";
      _css.id = _sId;
      _css.rel = "stylesheet";
      _css.href = file;
      if (_css.readyState){
        _css.onreadystatechange = function(){
          if (_css.readyState == "loaded" || _css.readyState == "complete"){
            _css.onreadystatechange = null;
            callback();
          }
        };
       }else{
          _css.onload = function(){
            callback();
          };
       }
      document.getElementsByTagName('head')[0].appendChild(_css);
    }else{
      callback();
    }
  }
  exports.addCss = addCss;
});