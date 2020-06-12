(function($) {
	$.scrolltop = function(options) {
		var opts = $.extend({}, $.scrolltop.defaults, options);
		init(opts);
	};
	function init(opts)
	{
		var isIE6 = !$.support.opacity && !$.support.style && window.XMLHttpRequest==undefined;
		var $window = $(window);
		var $scrollup, thew;//thew表示滚动图标的宽度
		if(opts.scrollupID=="")
		{
			$scrollup = $(opts.scrollupHtml);
			thew = 54;
		}
		else
		{
			var $theScrollup = $("#"+opts.scrollupID);
			$scrollup = $theScrollup.html();
			thew = $theScrollup.width();
		}
		var pbottom = opts.position.bottom, pright = opts.position.right;
		if(!isIE6 && opts.centerWidth!=0)
		{
			pright = ($window.width()-opts.centerWidth)/2 - thew;
			if(pright<opts.position.right)pright = opts.position.right;
		}
		var $sup = $("<div></div>").append($scrollup).css({
			position: isIE6? 'absolute' : 'fixed',
			bottom: pbottom+"px",
			right: pright+"px",
			cursor: "pointer",
			display: "none"
		}).appendTo('body').click(function(){
			var top = 0;if(opts.anchorid!="")top = $("#"+opts.anchorid).offset().top;
			$("body,html").animate({scrollTop: top},1000);
			return false;
		});
		
		var initH = 150;
		if(!isIE6)
		{
			$window.bind('scroll resize',function(){
				var hiddenflag = false;if($sup.is(":hidden")) hiddenflag = true;
				if ($window.scrollTop()>initH){
					if(hiddenflag)$sup.fadeIn(1000);
	            }
	            else{
	            	if(!hiddenflag)$sup.fadeOut(1000);
	            };
			});
			if(opts.centerWidth!=0)//窗口resize需要重新摆放位置
			{
				$window.bind('resize',function(){
					setTimeout(function(){
						var pright = ($window.width()-opts.centerWidth)/2 - thew;
						if(pright<opts.position.right)pright = opts.position.right;
						$sup.css({right: pright+"px"});
					}, 1);
				});
			}
		}
		else//ie6
		{
			$window.bind('scroll resize',function(){
				var hiddenflag = false;if($sup.is(":hidden")) hiddenflag = true;
				var wWidth = $window.scrollLeft() + $window.width();
				var theRight = wWidth - $sup.width() - opts.position.right;
				var x = theRight;
				var y = $window.scrollTop() + $window.height() - $sup.height() - opts.position.bottom;
				if(opts.centerWidth!=0)
				{
					x = wWidth - (wWidth-opts.centerWidth)/2;
					if(x>wWidth)x = theRight;
				}
				$sup.css({left:x+'px', top:y+'px'});
				if ($window.scrollTop()>initH){
					if(hiddenflag)$sup.show();
	            }  
	            else{
	            	if(!hiddenflag)$sup.hide();
	            };
	        });
		};
	};
	$.scrolltop.defaults = {
		scrollupID: "",
		scrollupHtml: '<span style="color:#ff3333;background-color: #fff;">&uarr;回到顶部</span>',
		position: {right:5, bottom:5},	//右下角的位置
		centerWidth: 0,	//居中内容的宽度，如果不为0，表示屏幕够宽时需要紧贴内容右侧
		anchorid: ""	//回到锚点的id
	};
})(jQuery);