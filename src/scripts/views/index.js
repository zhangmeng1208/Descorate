// 引入模板
var tplIndex = require('../templates/index.string');

// 引用公共方法
var util = require('../utils/fn.js');
// 定义视图
SPA.defineView('index', {

	// 装载html模板
	html: tplIndex,
	modules: [{
		name: 'content', // 子视图的名字，用作后边引用的句柄
		views: ['home', 'dongtai','message','my'], // 定义子视图的列表数组
		defaultTag: 'home', // 定义默认视图
		container: '.l-container' // 子视图的容器
	}],
	// 载入插件列表
	// delegated 实现tab事件的绑定
	plugins: ['delegated'],

	// 初始化一些属性和方法
	init: {
		//设置焦点
//		 setFocus: function (e) {
//	     $(e.el).addClass('active').siblings().removeClass('active');
//		 }
	},
	// 绑定tab 事件
	bindActions:{
		'switch.tabs' : function(e,data){
			//设置当前table高亮   方法一和方法二
			//$(e.el).addClass('active').siblings().removeClass('active');
			util.setFocus(e.el);
//			console.log(data);
			// 切换子视图
			this.modules.content.launch(data.tag);
		}
	},
	bindEvents:{
		beforeShow:function(){
//			console.log(0);
		},
		//所有dom文档都加载结束后开始执行show，相当于document.ready效果，iscroll要在所有文档都加载出来后才能执行
		show:function(){
//			console.log(1);

		}
	}
	
	
});
