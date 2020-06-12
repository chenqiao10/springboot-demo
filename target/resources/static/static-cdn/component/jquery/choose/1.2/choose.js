/********************************
 * @File:choose.js
 * @Description: 全选、至少选一项的验证
 * @Date:2011-6-10
 * @version v1.2
 * @Copyright:wish
 * @author:ffw_cn
 ********************************/
//<--begin
/*1、功能说明：全选、反选、取消全选,chk_name指将要被全选的input控件名称(控件名称不能包含特殊符号)*******/
;(function($) {
	$.fn.chooseAll = function(chk_name,options){
		var settings = $.extend({
			chkname:chk_name,
			css_all:"css_choose_all",
			css_reverse:"css_choose_reverse",
			css_cancel:"css_choose_cancel",
			myFunc:function(){}
		},options);
		var chk = $("input[name='"+settings.chkname+"']");
		$("."+settings.css_all,this).click(function(){
			chk.each(function(){$(this).attr("checked",true);});
		});
		$("."+settings.css_cancel,this).click(function(){
			chk.each(function(){$(this).attr("checked",false);});
		});
		$("."+settings.css_reverse,this).click(function(){
			chk.each(function(){
				if($(this).attr("checked")){$(this).attr("checked",false);}else{$(this).attr("checked",true);}
			});
		});
	}
	/*2、功能说明：至少选一项*******************************************************/
	$.fn.chooseLeast = function(chk_name){
		var flag = false;
		if($("input[name='"+chk_name+"']:checked").length > 0)
		{
			flag = true;
		}
		//if(!flag){alert("请至少选择其中一项！");}
		return flag;
	}
})(jQuery);
//end-->