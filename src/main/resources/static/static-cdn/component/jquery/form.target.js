(function($){
$.fn.formTarget = function(fun){
	var $this =$(this);
	var t= new Date().getTime();
	var iframe = $('<iframe name="formTarget_'+t+'" style="display:none;"></iframe>').appendTo($this);
	$this.attr("target",iframe.attr("name"));
	iframe.unbind().bind("load",function(){
	 	var html = $(this).contents().find("body").text();
	 	fun.call($this,html);
	 	iframe.remove();
	});
	return $this;
};	
})(jQuery);
//"contentType", "text/html" 注意action返回类型一定是这个，不能使"contentType", "text/plain"