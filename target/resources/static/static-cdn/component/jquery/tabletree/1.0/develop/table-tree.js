(function($) {
	$.fn.tabletree = function(options) {
		var $obj = $(this);
		var opts = $.extend({}, $.fn.tabletree.defaults, options);
		init();
		function init(){
			$obj.find(".tree-hit").click(function(event, continueFlag){
				var $cur = $(this);
				var level = $cur.attr("id").split("_")[1];
				var trID = "tr_"+level;
				if($cur.hasClass("tree-expanded"))
				{
					$cur.removeClass("tree-expanded").addClass("tree-collapsed").next().removeClass("tree-folder-open");
					$("tr[id^='"+trID+"']").each(function(){
						var $this = $(this);
						if($this.attr("id")!=trID)
						{
							$this.hide();
							$this.find(".tree-hit").removeClass("tree-expanded").addClass("tree-collapsed").next().removeClass("tree-folder-open");
						}
					});
				}
				else
				{
					$cur.removeClass("tree-collapsed").addClass("tree-expanded").next().addClass("tree-folder-open");
					showChildren(level, continueFlag);
				}
			});
			$obj.find("tr").not(".title").hover(function(){$(this).addClass("trover");},function(){$(this).removeClass("trover");}).each(function(){
				var $this = $(this);
				var level = $this.attr("id").split("_")[1], len = level.length/4;
				if(len==1)//根节点
				{
					$this.show();
					if(opts.onInitShow=="expanded")//全部展开
					{
						$this.find(".tree-hit").trigger("click", true);
					}
				}
			});
			
			//定位节点
			if(opts.onInitShow!="ROOT" && opts.onInitShow!="expanded")
			{
				var level = opts.onInitShow;
				$("#tree_"+level).find(".tree-title").addClass("tree-title-star");
				var len = level.length/4;
				for(var i=1;i<len;i++)
				{
					$("#hit_"+level.substring(0,i*4)).trigger("click", false);
				}
			}
		}
		/**
		 * 展开节点
		 * continueFlag 是否继续展开下层节点
		 */
		function showChildren(level, continueFlag)
		{
			var trID = "tr_"+level;
			$("tr[id^='"+trID+"']").each(function(){
				var $this = $(this);
				var curTrID = $this.attr("id");
				var curLevel = curTrID.split("_")[1];
				if(curTrID!=trID && (curLevel.length/4)-(level.length/4)==1)//下层节点
				{
					$this.show();
					var $cur = $this.find(".tree-hit");
					if($cur.hasClass("tree-collapsed"))
					{
						if(continueFlag)
						{
							$cur.removeClass("tree-collapsed").addClass("tree-expanded").next().addClass("tree-folder-open");
							showChildren(curLevel, continueFlag);
						}
					}
				}
			});
		};
	};
	$.fn.tabletree.defaults = {
		onInitShow: "ROOT"	//ROOT：表示根节点，expanded：表示全部展开
	};    
})(jQuery);