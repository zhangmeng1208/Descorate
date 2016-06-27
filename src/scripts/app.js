
// 引入类库
require('./lib/spa.min.js');
require('./lib/swiper-3.3.1.min.js');
require('./lib/jquery-1.11.0.js');
require('./lib/iscroll-probe.js');

// 引入views
require('./views/dongtai.js');
require('./views/message.js');
require('./views/my.js');
require('./views/home.js');
require('./views/index.js');

//SPA的设置  
SPA.config({
	//定义首个页面视图
	indexView: 'index'
});
