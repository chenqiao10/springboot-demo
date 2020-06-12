CKEDITOR.plugins.add("wishimageresizer", {  
	init: function(a) {
        //	判断事件是否已经绑定
		if($('#id_sheetContent').length == 0) {
			return false;
		}
		
		var objEvt = $._data($('#id_sheetContent')[0], 'events');
		if (objEvt && objEvt['mouseover']) {
			return false;
        }
		
		if(window.navigator.userAgent.indexOf("Chrome") == -1 || window.navigator.userAgent.indexOf("Edge") > -1){
			return false;
		}
		
		$("#id_sheetContent").on("click",".subjective img",function(){
        	var $img = $(this);
        	if($img.parent().hasClass("resizer")){
        		return false;
        	};
        	unbindResizer();       	
        	$img.wrap("<p class='resizer' style='border:1px solid #63a8eb;-webkit-box-shadow:1px;resize:both;overflow:hidden;display:inline-block;z-index:999;'></p>");    	
        	var fix = 5; 	// 漏出拖拽区的位置
        	var img_width = $img.width();
        	var img_height = $img.height();
        	$img.parent().width(img_width + fix).height(img_height + fix);
        	$img.parent().css("float",$img.css("float"));
        	$(".resizer").on("mouseup",function(){
        		var width = $(this).width();
        		var height = $(this).height();
        		if($img.width() != width || $img.height() != height){
            		$img.width(width - fix).height(height - fix).css("display","inline");
        		}
        	});
        	return false;
		});

		$("#id_sheetContent").on("mouseup",function(e){
			unbindResizer();
        });     
		

        
        function unbindResizer(){
        	$(".resizer").children().unwrap();
        }
	}  
});