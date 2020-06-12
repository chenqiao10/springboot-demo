/**
 * V2.0
 * @param $
 * @param window
 */
(function($,window){
$.fn.scrolload = function(options){
	var innerDefault={
		loadOver:"load_over_",
		loadIng:"load_ing_"
	};
	
	var options = $.extend( {}, $.fn.scrolload.defaults,options,innerDefault);
	
	var $window =$(window);
	var $w_height = $window.height();
	var flag=true;
	
	var $thiss =$(this);
	var list=filter($thiss);
	log(list);
	
	function log(objs) {
		objs.each(function(i,n){
			action($(this));
		});
	}
	
	function action($this){
		if(!flag){
			return false;
		}
		if($this.hasClass(options.loadOver)){
			return false;
		}
		if($this.hasClass(options.loadIng)){
			return false;
		}
		if(!options.hide && $this.is(":hidden")){
			return false;
		}
		
		var offsetTop =$this.offset().top;//这个也会被挤下来，所以也是变化的
		var $w_scrollTop = $window.scrollTop();//变化的
		var outerHeight = $this.outerHeight();
		
		if($w_scrollTop>offsetTop-$w_height && offsetTop+outerHeight>$w_scrollTop){
			$this.addClass(options.loadIng);
			list=list.not($this);
			
			options.when.call($this,"<div class=\"loading\"></div>");
			if(options.ajax){
				$.ajax({
			        url : options.url.call($this,$this),
			        success : function(data) {
			        	$this.addClass(options.loadOver).removeClass(options.loadIng);
			        	options.when.call($this,data);
			        	if(outerHeight>$this.outerHeight()){//加载之后高度变小了，下面的可能会上来
			        		log(list);//性能消耗点
			        	}
			        	else{//加载之后高度变大了，把下面的挤下去了
			        	}
			        },
					error:function(){
						$this.removeClass(options.loadOver);
						list=list.add($this);
					}
				});
			}
			else{
				//暂不支持
			}
		}
	}
	
	function filter(objs){
		if(options.hide){
			return objs.not("."+options.loadOver);
		}
		return objs.not("."+options.loadOver).filter(":visible");
	}
	
	$window.scroll(_.throttle(function(){
		log(list);
	}, options.throttleTime)).resize(_.throttle(function(){
		$w_height = $window.height();
		log(list);
	}, options.throttleTime));//函数节流	
	
	$.fn.scrolload.update=function(objs){
		list=filter($(objs));
		log(list);
	};
	$.fn.scrolload.add=function(objs){
		objs= filter($(objs));
		log(objs);
		list=list.add(objs);
	};
	
	$.fn.scrolload.reload=function(objs,url){
		objs = $(objs).removeClass(options.loadOver).removeClass(options.loadIng);
		if(url){
			objs.attr("data-url",url);
		}
		objs= filter(objs);
		log(objs);
		list=list.add(objs);
	};
	
	$.fn.scrolload.load=function(){
		log(list);
	};
	
	$.fn.scrolload.disabled=function(){
		flag=false;
	}
	
	$.fn.scrolload.enabled=function(){
		flag=true;
	}
};

$.fn.scrolload.defaults = {
		throttleTime:1000,
		hide:false,
		when:function(){},
		ajax:true,
		url:function(){return this.attr("data-url");}
};
})(jQuery,window);