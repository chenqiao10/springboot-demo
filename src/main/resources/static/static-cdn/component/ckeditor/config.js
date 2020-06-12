CKEDITOR.editorConfig = function( config ) {	
	config.extraPlugins = 'simage';
	config.imageUploadURL='http://172.16.1.18:8081/demo/uploadImage';
	config.forcePasteAsPlainText = true;
	config.pasteFromWordRemoveFontStyles = true;	//去除字体相关样式
	config.pasteFromWordRemoveStyles = false;
	config.disableObjectResizing = true;
	config.allowedContent = true;
	config.enterMode = CKEDITOR.ENTER_P;
	config.fillEmptyBlocks = false;
	//	复制保留纯文本
	config.forcePasteAsPlainText = false;
	
	config.font_names='宋体/SimSun;黑体/SimHe;幼圆/YouYuan;微软雅黑/Microsoft YaHei;Time New Roman/Time New Roman;隶书/LiSu;Arial/Arial;comicz/comicz;CURLZ___/CURLZ___';
	config.fontSize_sizes ='8/8px;9/9px;10/10px;11/11px;12/12px;14/14px;16/16px;18/18px;20/20px;22/22px;24/24px;26/26px;28/28px;30/30px;32/32px;34/34px;36/36px;48/48px;72/72px'
	// config.font_names; // 添加字体
	config.skin = 'moono-lisa';// 设置皮肤
};
