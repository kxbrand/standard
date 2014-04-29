/************************************
*@描述：seajs配置文件
*@说明：http://www.seajs.org
************************************/
seajs.config({
  base: "/jslib",
  paths: {
    'p-c':'/pub/csslib',
    'p-u':'/utils',
    'p-kx':'b2b/kx'
  },
  alias: {
    "jquery": "plugins/jquery/jquery/1.10.1/jquery.js",
    "base": "base/base.js",
    "superslide": "plugins/superslide/superslide.js",
    "csschosen": "plugins/chosen/1.1.0/chosen.css"
  },
  'map': [
    [/^(.*\.(?:css))(.*)$/i, '$1?20131212'],
    [/^(.*\.(?:js))(.*)$/i, '$1?20131213']
  ],
  'maponline': [
    [/^(.*base\.(?:js))(.*)$/i,function(url){
      if(location.search.indexOf("debug") > -1){
        return "http://localhost/base.js?20131212";
      }else{
        return url+"?20131212";
      }
    }]
  ]
});
/************************************
*@描述：全局变量
************************************/
var kx = {
  base: "/jslib"
};