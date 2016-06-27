var tplMessage = require('../templates/message.string');

//引用公共方法
var util = require('../utils/fn.js');
//定义视图
SPA.defineView('message', {
	html: tplMessage,
	plugins:['delegated'],
	//定义视图
	bindEvents: {
		show: function() {
			
		}
	},
	//tab事件
	bindActions:{
		
		
	}
});