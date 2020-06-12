(function($,window){
$.fn.anchor = function(options){
	var innerDefault={
	};
	var options = $.extend( {}, $.fn.anchor.defaults,options,innerDefault);
	var $thiss =$(this);
	$thiss.click(function(event){
		event.preventDefault();
		//event.stopPropagation();
		//event.stopImmediatePropagation();
		var $this = $(this);
		action($this);
	});
	
	//点击事件
	function action($this){
		var allurl = window.location.href;
		var data = $this.attr(options.dataPro);
		
		var urlArr =allurl.split("#");
		var url=urlArr[0];
		var hashs = urlArr[1];
		
		if(options.position==0 || !hashs){
			window.location.href=url+"#"+data;
			options.callback.call($this,[data],$this.attr(options.dataPro));
		}
		else{
			var newArr=renderArr(hashs.split(options.split),options.position,data);
			window.location.href=url+"#"+newArr.join(options.split);
			options.callback.call($this,newArr,$this.attr(options.dataPro));
		}
	}
	
	//数组替换
	function renderArr(hashArr,position,data){
		var arrlen =hashArr.length;
		if(arrlen>=position){
			var len = arrlen-position;
			hashArr.splice(position,len ,data); // 
		}
		else{
			var blanks = position-arrlen;
			var temparr=[];
			for(var i=0;i<blanks;i++){
				temparr[i]="";
			}
			if(temparr.length){
				hashArr.splice(arrlen,0 ,temparr); // 
			}
			hashArr.splice(position,0 ,data); // 
		}
		return hashArr;
	}
	
	//获取当前锚点
	function getAnchor(split){
		var url = window.location.toString();
		var hashs = url.split("#")[1];
		if(hashs){
			return hashs.split(split);
		}
		return [];
	}

	/**
	 * 默认是否加载
	 */
	if(options.useDefault){
		var hashArr = getAnchor(options.split);
		var hash=hashArr[options.position];
		var defaultObj;
		if(hash)
		{
			defaultObj=$thiss.filter(function(index) {
				  return $(this).attr(options.dataPro) == hash;
			});
		}
		
		if(!defaultObj || !defaultObj.attr(options.dataPro)){
			defaultObj= options.defaultObj;
		}
		
		if(!defaultObj){
			defaultObj= $thiss.eq(0);
		}
		
		if(defaultObj){
			options.callback.call(defaultObj,hashArr,defaultObj.attr(options.dataPro));
		}
	}
};

$.fn.anchor.defaults = {
		dataPro:"rel", //从元素的该属性上取值设置到锚点
		position:0,//第几层级
		split:";",//多层之间的分隔符
		callback:function(){},//加载成功之后
		useDefault:true,//是否默认进入的时候，根据锚点信息进行加载,如果该值设置为false，defaultObj不会起作用
		defaultObj:null//默认，useDefault为true的时候，现根据锚点加载，如果没有锚点则根据defaultObj，没有设置defaultObj，则获取目标元素的第一个元素
};
})(jQuery,window);