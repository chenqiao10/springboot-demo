CKEDITOR.plugins.add("tianzige", {  
	requires: ["dialog"],  
	init: function(a) {
		a.addCommand("tianzige", new CKEDITOR.dialogCommand("tianzige"));  
        a.ui.addButton("tianzige", {  
        	label: "画田字格",//调用dialog时显示的名称  
            command: "tianzige",  
            icon: this.path + "tzgico.png"//在toolbar中的图标     
        });  
        CKEDITOR.dialog.add("tianzige", this.path + "dialogs/tianzige.js");
	}  
});
   
