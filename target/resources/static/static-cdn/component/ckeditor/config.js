CKEDITOR.editorConfig = function( config ) {	
	config.extraPlugins = 'simage';
	config.imageUploadURL='http://172.16.1.18:8081/demo/uploadImage';
	config.forcePasteAsPlainText = true;
};
