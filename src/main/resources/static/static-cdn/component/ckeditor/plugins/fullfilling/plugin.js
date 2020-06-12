CKEDITOR.plugins.add("fullfilling", {
	requires : [ "button" ],
	init : function(a) {
		a.addCommand("fullfilling",CKEDITOR.plugins.fullfilling.commands.fullfilling);
		a.ui.addButton("fullfilling", {
			label : "正确填涂",
			command : "fullfilling",
			icon : this.path + "fullfilling.png"
		});
	}
});
CKEDITOR.plugins.fullfilling = {
	commands : {
		fullfilling : {
			exec : function(editor) {
				editor.insertHtml("<img style='margin:0 3px;' src='static-cdn/component/ckeditor/plugins/fullfilling.png'/>");
			}
		}
	}
};
   
