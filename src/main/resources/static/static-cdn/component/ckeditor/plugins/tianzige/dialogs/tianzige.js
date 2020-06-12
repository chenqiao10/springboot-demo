CKEDITOR.dialog.add("tianzige",function(editor,base) {  
    var escape = function(value){
        return value;
    };
    return {  
        title: "插入田字格",
        resizable: CKEDITOR.DIALOG_RESIZE_BOTH, 
        minWidth: 200,  
        minHeight:60,  
        contents: [{  
            id: "cb",  
            name:'cb',
            label: "cb",  
            title: "cb",
            elements: [{
            	type:'html',
                html:'<div>每行插入<select id="rows" style="height: 24px;padding: 0 5px;border: 1px solid #d1cbcb;border-radius: 3px;margin: 5px;"><option>1</opyion><option>2</option><option>3</opyion><option>4</option><option>5</opyion><option>6</option><option>7</opyion><option>8</option><option>9</opyion><option>10</option><option>11</opyion><option>12</option><option>13</opyion><option>14</option></select>个</div><div>一共插入<select id="cols" style="height: 24px;padding: 0 5px;border: 1px solid #d1cbcb;border-radius: 3px;margin: 5px;"><option>1</opyion><option>2</option><option>3</opyion><option>4</option><option>5</opyion><option>6</option><option>7</opyion><option>8</option><option>9</opyion><option>10</option></select>行</div>'
            }]
        }],
        onOk : function(){
        	var rows = document.getElementById("rows"),cols = document.getElementById("cols");
        	var index1 = rows.selectedIndex,index2 = cols.selectedIndex;
        	var text1 = rows.options[index1].text,text2 = cols.options[index2].text;
        	var str1 = "",str2="";
        	for(var i=0;i<text1;i++){
        		str1+="<img style='margin-right:1px;' src='" + document.getElementById("id_base").value + "/static-source/component/ckeditor/plugins/tianzige/tzg.png' alt='田字格'/>"
            }
            for(var i=0;i<text2;i++){
            	str2+="<span style='display:block;'>"+str1+"</span>";
            }
            //点击确定按钮后的操作  
            editor.insertHtml(str2);
        }
    };
});