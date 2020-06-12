CKEDITOR.dialog.add("help",function(editor,base) {  
    var escape = function(value){
        return value;
    };
    return {  
        title: "使用帮助",  
        minWidth: "500",  
        minHeight:"500", 
        buttons: [],
        contents: [{  
            id: "useHelp",   
            elements: [{  
                type: "html",  
                html: "<style type='text/css'>" +
                		".help-content li{line-height: 25px;list-style: none;}" +
                		".help-content li p.ft-red{color:#ff3333;}" +
                		".cke_button_longline_icon{background:url(./static-cdn/component/ckeditor/plugins/longline.png) no-repeat center;margin: 4px 2px 0 0;}" +
                		".cke_button_shortline_icon{background:url(./static-cdn/component/ckeditor/plugins/shortline.png) no-repeat center;margin: 4px 2px 0 0;}" +
                		".cke_button_tianzige_icon{background:url(./static-cdn/component/ckeditor/plugins/tzgico.png) no-repeat center;margin: 4px 2px 0 0;}" +
                		".cke_button_fullfilling_icon{background:url(./static-cdn/component/ckeditor/plugins/fullfilling.png) no-repeat center;margin: 4px 2px 0 0;}</style>" +
                		"<ul class='help-content'>" +
                		"<li><span class='cke_button_icon cke_button_longline_icon'></span>画长横线：点击即可在编辑区域的相应位置生成一条长线，并且自动回行。</li>" +
                		"<li><span class='cke_button_icon cke_button_shortline_icon'></span>画短横线：点击即可在鼠标处画一条短横线，画完后可以继续编辑。</li>" +
                		"<li><span class='cke_button_icon cke_button_tianzige_icon'></span>田字格：可以选择一次性插入每行几个田字格、共几行，如果大小不合适可适度拖放。</li>" +
                		"<li><span class='cke_button_icon cke_button_fullfilling_icon'></span>正确填涂：添加正确填涂涂抹样式。</li>" +
                		"<li>行间距：选中内容，点击图标，选择几倍行高，控制各行之间的距离。</li>" +
                		"<li><p class='ft-red'>图片怎么引入？</p><ol><li>点击工具栏中该图标，选择本地图片点击“确定”；</li>" +
                		"<li>火狐浏览器，支持直接粘贴图片。</li></ol></li>" +
                		"<li><p class='ft-red'>画方框的技巧：</p><ol><li>拷贝粘贴方框的特殊符号，例如：□□□□□□□；</li>" +
                		"<li>选中这些方框，首先将“行间距”变为“单倍行距”，以免字体放大后有遮挡现象；</li>" +
                		"<li>选中这些方框，调整字体大小为“36px”左右即可。</li></ol></li><li><p class='ft-red'>出现文字遮挡怎么办？</p><ol>" +
                		"<li>原因是：字体大小与行间距不匹配；</li><li>选中遮挡内容部分，将“行间距”变为“1倍行距”后，一般可以解决遮挡问题。</li></ol></ul>"  
            }]  
        }]
    };
});