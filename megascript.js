// 1 - главная страница, м.б. и контакты.
// 21 - выбор модели айфон
// 22 - выбор модели айпад
// 23 - выбор модели макбук
// 24 - выбор модели аймак
// 25 - выбор модели айпод
// 26 - выбор модели эпл вотч
// 3 - обычные 3-и страницы из меню
// 4 - страница О нас с 2-мя блоками
// 5 - замены деталей, 3-и страницы, которых тысячи
function megaScript() {
	jQuery(document).ready(function () {
		if ($(window).width() >= 770) {
			if (browser == 'Safari') {
				$('head').append('<link type="text/css" href="http://apple-good.ru/test/css/style-saf.css"  rel="stylesheet" >' + 
								'<script src="http://apple-good.ru/test/js/main-saf.js"></scr' + 'ipt>'); 
			} else {
				$('head').append('<link type="text/css" href="http://apple-good.ru/test/css/style.css"  rel="stylesheet" >' + 
									'<script src="http://apple-good.ru/test/js/jquery.parallax.js"></scr' + 'ipt>' + 
									'<script src="http://apple-good.ru/test/js/jquery.event.frame.js"></scr' + 'ipt>' + 
									'<script src="http://apple-good.ru/test/js/main.js"></scr' + 'ipt>'); 
				jQuery('.parallax-layer').parallax({
						mouseport: jQuery("#paralaxbody"),
						yparallax: false});
				if (pageType == 1 || 3 || 5 || 6)  {documentStyle.cubeWidth(window.innerWidth/3);} 
				if (pageType == 2)  {documentStyle.cubeWidth(window.innerWidth/2);} 
				if (pageType == 21 )  {documentStyle.cubeWidth(500);} 
				if (pageType == 22 )  {documentStyle.cubeWidth(500);} 
				if (pageType == 23 )  {documentStyle.cubeWidth(590);} 
				if (pageType == 24 )  {documentStyle.cubeWidth(590);} 
				if (pageType == 25 )  {documentStyle.cubeWidth(350);} 
				if (pageType == 26 )  {documentStyle.cubeWidth(590);} 
			}		
		 } else {
			$('head').append('<link type="text/css" href="http://apple-good.ru/test/css/style.css"  rel="stylesheet" >' +  
								'<script src="http://apple-good.ru/test/js/mobile.js"></scr' + 'ipt>'); 
			if (pageType == 6)  {$('head').append('<link type="text/css" href="http://apple-good.ru/test/css/page-6.css"  rel="stylesheet" >');} 
			if (pageType == 7)  {$('head').append('<link type="text/css" href="http://apple-good.ru/test/css/page-7.css"  rel="stylesheet" >');} 
			documentStyle.cubeWidth(window.innerWidth);
		 };
	 });
	 
