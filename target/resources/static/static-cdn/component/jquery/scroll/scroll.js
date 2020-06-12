/********************************
 * @File:scroll.js
 * @Description: 左右切换滑动效果
 * @Date:2016-06-20
 * @version v1.0
 * @Copyright:wish
 * @author:licy
 ********************************/
/*
 * 功能说明滚动轴
 * @params 
 * moveLength 点击一次移动的长度，通常为一个元素的长度
 * item 滚动轴元素
 * orient 方向 垂直或水平 horizontal  vertical
 * leftClass 点击左侧按钮样式 左侧按钮失效样式 leftClass -none 只支持class
 * rightClass 点击右侧按钮样式 右侧按钮失效样式 rightClass -none 只支持class
 */
(function($) {
	$.fn.scrollbar = function(options){
		var settings = $.extend({
			moveLength:85,
			initPos:0,
			item:".item",
			leftClass:"left-btn",
			rightClass:"right-btn",
			orient:'horizontal', //vertical
			offset:0,
			myFunc:function(){}
		},options);
		var $barL1 = $(this);
		var $barL2 = $barL1.find("div").first();
		var LengthL1 = "horizontal" == settings.orient? $barL1.width():$barL1.height();
		var LengthL2 = 0;
		var $item = $(settings.item);
		if($item.length > 0){
			if("horizontal" == settings.orient){
				LengthL2 = $item.length * ($item.width() + parseInt($item.css("padding-left")) + parseInt($item.css("padding-right")) + parseInt($item.css("margin-left")) + parseInt($item.css("margin-right"))) + settings.offset;
				$barL2.css("left",settings.initPos);
			}else{
				LengthL2 = $item.length * ($item.height() + parseInt($item.css("padding-top")) + parseInt($item.css("padding-bottom")) + parseInt($item.css("margin-top")) + parseInt($item.css("margin-bottom"))) + settings.offset;
				$barL2.css("top",settings.initPos);
			}
		}
		var space = LengthL2 - LengthL1; //间隔
		$("." + settings.rightClass).parent().delegate("." + settings.rightClass, "click", function(){
			var curL = "horizontal" == settings.orient?$barL2.position().left : $barL2.position().top;
			if(-(curL - settings.moveLength) >= space){ // 到达极限
				$("." + settings.rightClass).removeClass(settings.rightClass).addClass(settings.rightClass + "-none");
			}
			if($("." + settings.leftClass + "-none").length > 0 && curL - settings.moveLength <= -settings.moveLength){	//激活另一个按钮
				$("." + settings.leftClass + "-none").removeClass(settings.leftClass + "-none").addClass(settings.leftClass);
			}
			if("horizontal" == settings.orient){
				$barL2.css("left",curL - settings.moveLength);
			}else{
				$barL2.css("top",curL - settings.moveLength);	
			}		
		});
		
		$("." + settings.leftClass).parent().delegate("." + settings.leftClass, "click", function(){
			var curL = "horizontal" == settings.orient?$barL2.position().left : $barL2.position().top;
			if(curL + settings.moveLength >= 0){	//到达极限
				$("." + settings.leftClass).removeClass(settings.leftClass).addClass(settings.leftClass + "-none");
			}
			if($("." + settings.rightClass + "-none").length > 0 && curL + settings.moveLength > -space){	//激活另一个按钮
				$("." + settings.rightClass + "-none").removeClass(settings.rightClass + "-none").addClass(settings.rightClass);		
			}
			if("horizontal" == settings.orient){
				$barL2.css("left",curL + settings.moveLength);	
			}else{
				$barL2.css("top",curL + settings.moveLength);	
			}
		});
		
		// 左右按钮初始化 
		if("horizontal" == settings.orient){
			$barL2.position().left == 0 && $("." + settings.leftClass).addClass(settings.leftClass + "-none").removeClass(settings.leftClass);		
		}else{
			$barL2.position().top == 0 && $("." + settings.leftClass).addClass(settings.leftClass + "-none").removeClass(settings.leftClass);
		}
		if(space <= 0){
			$("." + settings.rightClass).addClass(settings.rightClass + "-none").removeClass(settings.rightClass);
		}
		if("horizontal" == settings.orient){
			$barL2.position().left <= -space && $("." + settings.rightClass).addClass(settings.rightClass + "-none").removeClass(settings.rightClass);
		}else{
			$barL2.position().top <= -space && $("." + settings.rightClass).addClass(settings.rightClass + "-none").removeClass(settings.rightClass);
		}
	}
})(jQuery);