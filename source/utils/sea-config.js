/************************************
*@描述：seajs配置文件
*@说明：http://www.seajs.org
************************************/
seajs.config({
  base: "/pub/jslib",
  paths: {
    'p-c':'/pub/csslib',
    'p-u':'/pub/utils',
    'p-kx':'/pub/b2b/kx'
  },
  alias: {
    "jquery": "plugins/jquery/jquery/1.10.1/jquery.js",
    "css-syntaxhighlighter": "p-c/ui/ui.css",
    "css-artdialog": "p-c/ui/ui.css",
    "css-ztree": "plugins/ztree/3.5.15/ztree.css",
    "base": "base/base.js",
    "c-ui": "ui/ui.js",
    "p-tree": "ui/tree.js"
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