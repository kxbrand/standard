define(function(require, exports, module) {
  var $ = require("jquery"),zTree = require("../plugins/ztree/3.5.15/ztree.js");
  var setting = {	};
	var zNodes =[
		{ name:"static（静态资源文件夹，开发与发布域名均以此为ROOT目录）",
			open:true,
			children: [
				{ name:"source（开发源文件夹，无需上传线上服务器）",
					open:false,
					children: [
						{ name:"csslib（项目样式源文件夹，开发过程用less+watch实现）",
							open:false,
							children: [
								{ name:"mod（模块样式文件夹，可根据实际需要，从SVN库中获取并修改）",
									open:false,
									children:[
										{ name:"base.less（常用一些变量，Mixins等）"},
										{ name:"reset.less（浏览器重置）"},
										{ name:"function.less（功能样式）"},
										{ name:"......"}
									]
								},
								{ name:"频道或模块文件夹或其他文件夹，请更名", icon:"/jslib/plugins/ztree/3.5.15/pub/images/diy/folder.gif"}
							]
						},
						{ name:"jslib（项目JS源文件夹，开发过程用jshint进行检测）",
							open:false,
							children: [
								{ name:"mod（模块JS文件夹，可根据实际需要，从SVN库中获取并修改，合并打包进依赖关系）",
									open:false,
									children:[
										{ name:"include.js（模板包含文件）"},
										{ name:"addjs.js（异步加载JS文件）"},
										{ name:"addcss.js（异步加载CSS文件）"},
										{ name:"placeholder.js（placeholder插件）"},
										{ name:"......"}
									]
								},
								{ name:"plugins（插件样式文件夹，可根据实际需要，从SVN库中获取并修改，一个插件一个文件夹，可用alias进行引用或打包）",
									open:false,
									children:[
										{ name:"artdialog（弹出层样式）", icon:"/jslib/plugins/ztree/3.5.15/pub/images/diy/folder.gif"},
										{ name:"chosen（美化下拉框样式）", icon:"/jslib/plugins/ztree/3.5.15/pub/images/diy/folder.gif"},
										{ name:"......", icon:"/jslib/plugins/ztree/3.5.15/pub/images/diy/folder.gif"}
									]
								},
								{ name:"频道或模块文件夹或其他文件夹，请更名", icon:"/jslib/plugins/ztree/3.5.15/pub/images/diy/folder.gif"}
							]
						},
						{ name:"utils（外部非CMD模块JS源文件夹，可直接引用）",
							open:false,
							children: [
								{ name:"sea.js（seajs文件,默认使用V2.2.0）"},
								{ name:"sea-config.js（seajs配置文件）"}
							]
						},
						{ name:"other（其他文件夹，插件的API文档等）",
							open:false,
							children: [
								{ name:"artdialog（弹出层样式）", icon:"/jslib/plugins/ztree/3.5.15/pub/images/diy/folder.gif"},
								{ name:"chosen（美化下拉框样式）", icon:"/jslib/plugins/ztree/3.5.15/pub/images/diy/folder.gif"},
								{ name:"......", icon:"/jslib/plugins/ztree/3.5.15/pub/images/diy/folder.gif"}
							]
						}
					]
				},
				{ name:"pub（发布后目录，注意与源文件保持一致）",
					open:false,
					children: [
						{ name:"images（图片文件夹）",
						  open:false,
						  children: [
							{ name:"t.gif（1px*1px透明gif图片）"},
							{ name:"common（全局图片）",icon:"/jslib/plugins/ztree/3.5.15/pub/images/diy/folder.gif"},
							{ name:"psd（PSD源文件）",icon:"/jslib/plugins/ztree/3.5.15/pub/images/diy/folder.gif"},
							{ name:"test（测试图片）",icon:"/jslib/plugins/ztree/3.5.15/pub/images/diy/folder.gif"},
							{ name:"...（各频道所用图片）",icon:"/jslib/plugins/ztree/3.5.15/pub/images/diy/folder.gif"}
						  ]
						},
						{ name:"...（其他文件夹，文件夹与文件的结构(名称)必须与源文件夹保持一致(mod除外)）"}
					]
				},
				{ name:"html（静态页面）",
					open:false,
					children: [
						{ name:"template.html（默认模板文件，新建页面以此为准）"},
						{ name:"页面文件.html（静态页面）"},
						{ name:"频道或模块文件夹或其他文件夹，请更名", icon:"/jslib/plugins/ztree/3.5.15/pub/images/diy/folder.gif"},
						{ name:"in（静态包含文件）",
							open:false,
							children: [
								{ name:"head.html（头部文件）"},
								{ name:"foot.html（底部文件）"},
								{ name:"....（其他共用文件）"}
							]
						}
					]
				},
				{ name:"Gruntfile.js（grunt配置文件）"},
				{ name:"package.json（构建工具，别名等配置文件）"}
			]
		}
	];
	$(document).ready(function(){
		zTree.init($("#j-foldStructure"), setting, zNodes);
	});
});