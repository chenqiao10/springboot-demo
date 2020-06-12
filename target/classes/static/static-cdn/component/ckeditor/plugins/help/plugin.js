CKEDITOR.plugins.add("help", {  
	requires: ["dialog"],  
	init: function(a) {
		a.addCommand("help", new CKEDITOR.dialogCommand("help"));  
        a.ui.addButton("help", {  
        	label: "使用帮助",//调用dialog时显示的名称  
            command: "help",  
            icon: this.path + "help.png"//在toolbar中的图标  
   
        });  
        CKEDITOR.dialog.add("help", this.path + "dialogs/help.js");
	}  
});