/************************************
*@描述：动态添加JS
*@家族：kxbrand
*@名称：base
*@版本：1.0.0
*@依赖关系：[]
*@说明：
  参数：file,字符串,必传
  参数：callback,函数,加载完成后回调函数
*@示例：base.addJs("/jslib/kx-min.js",function(){alert("success")});
************************************/
define(function(require, exports, module) {
  var addJs = function(file,callback){
    if(!file){
     return false;
    }
    callback = callback || function(){};
    //var _sId = file.replace(/()/g, "");
    var _sId = file.replace(/\/|\?|:|\\|\.|#/g, "");
    if(!document.getElementById(_sId)){
      var _script = document.createElement("script");
      _script.type = "text/javascript";
      _script.id = _sId;
      _script.src = file;
      if (_script.readyState){
        _script.onreadystatechange = function(){
          if (_script.readyState == "loaded" || _script.readyState == "complete"){
            _script.onreadystatechange = null;
            callback();
          }
        };
       }else{
          _script.onload = function(){
            callback();
          };
       }
      document.getElementsByTagName('head')[0].appendChild(_script);
    }else{
      callback();
    }
  }
  exports.addJs = addJs;
});