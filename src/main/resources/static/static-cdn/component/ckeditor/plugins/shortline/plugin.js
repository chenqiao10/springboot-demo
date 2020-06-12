CKEDITOR.plugins.add("shortline", {
	requires : [ "button" ],
	init : function(a) {
		a.addCommand("shortline",CKEDITOR.plugins.shortline.commands.shortline);
		a.ui.addButton("shortline", {
			label : "画短线",
			command : "shortline",
			icon : this.path + "shortline.png"
		});
	}
});
CKEDITOR.plugins.shortline = {
	commands : {
		shortline : {
			exec : function(editor) {				
				insertHTML = "<span style='line-height:2.5'><u>&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;&#12288;</u></span><span></span>";
				
				var userAgent = navigator.userAgent;
				var isIE = !!window.ActiveXObject || "ActiveXObject" in window; //判断是否IE浏览器
				var isEdge = userAgent.indexOf("Edge") > -1;
				if(isIE || isEdge){
					insertHTML = insertHTML.replace(/&#12288;/g,"");
				}
				
				editor.insertHtml(insertHTML);
			}
		}
	}
};
   
