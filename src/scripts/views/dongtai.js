var tplDongtai = require('../templates/dongtai.string');

//引用公共方法
var util = require('../utils/fn.js');

//定义视图
SPA.defineView('dongtai', {
	html: tplDongtai,
	plugins:['delegated'],
	init: {
		mySwiper :null
	},
	bindEvents: {
		'show': function() {
			this.mySwiper = new Swiper('.swiper-container',{
				loop: false,
				onSlideChangeStart: function(swiper){
					var index = swiper.activeIndex;
					var $lis = $('.m-dongtai nav ul li');
//    				console.log(swiper.activeIndex);
					util.setFocus($lis.eq(index));
    }
			})
		}
	},
	//tab事件
	bindActions:{
		//设置当前划过高亮
		'tabSlide': function(e,data){
//			console.log(e.el);
			$(e.el).addClass('active').siblings().removeClass('active');
			
			//this.mySwiper.slideTo($(e.el).index());
		}
		
	}
});
