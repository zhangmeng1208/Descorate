var tplHome = require('../templates/home.string');

//引用公共方法
var util = require('../utils/fn.js');
//定义视图
SPA.defineView('home', {
	html: tplHome,
	//通过plugins定义一个插件，在vm里定义一个变量livelist,
	plugins:['delegated',{
		name:'avalon',
		options:function(vm){
			vm.livelist = [];
		}
	}],
  init: {
    mySwiper: null,
    formatData: function (arr) {
      var tempArr = [];
      for (var i = 0; i < Math.ceil(arr.length/2); i++) {
        tempArr[i] = [];
        tempArr[i].push(arr[2*i]);
        tempArr[i].push(arr[2*i+1]);
      }
      return tempArr;
    }
  },
	views: ['home', 'dongtai','message','my'], // 定义子视图的列表数组
	//定义视图
	bindEvents: {
		'beforeShow':function(){
			var that = this;
			//获得vm对象
			var vm = this.getVM();
			$.ajax({
				//url:'/decorates/mock/hot.json',
			//一般url都是php类型的,url一般都是后端给的
			  url:'/api/hot.php',
			//传递参数，data
				type:'get',
				data:{
					rtype:'refresh'
				},
			//后端返回json数据，rs即是json数据
			success:function(rs){
				//console.log(1);
				//vm.livelist = rs.data;
 				vm.livelist = that.formatData(rs.data);
			}
			});
		},
		'show': function() {
			var mySwiper = new Swiper('.swiper-container', {
				loop: true,
				autoplay: 1000,

				// 如果需要分页器
				pagination: '.swiper-pagination',

			});
			//var myScroll = new IScroll('#home-scroll');
			
		}
	},
	//tab事件点击事件
	bindActions:{
		'tap.slide' : function(e,data){
			this.myswiper.slideTo($(e.el).index())
		}
		
	}
	
	
	
})