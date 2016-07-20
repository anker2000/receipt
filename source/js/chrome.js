var Chrome = function() {
	
	function inputHandler(e) {
	
	}
	
	function setScrollPosition() {
		$(".container.main .receipt_list").scrollTop($(".container.main form")[0].scrollHeight);
	}
	function setupLinks() {
		$(".receipt_list li li").bind("click",function() {
			$("body").addClass("secondary");
			webkit.messageHandlers.callbackHandler.postMessage("geo");
		});
		$(".container.secondary header button").bind("click",function() {
			$("body").removeClass("secondary");
		});
	}
	function addHeaderBlur() {
		$(".container.main .receipt_list.copy").html($(".container.main .receipt_list:not(.copy)").html());
		$(".container.main .receipt_list:not(.copy)").bind("scroll",function() {
			$(".container.main .receipt_list.copy").css("transform","translate3d(0,"+(1-$(this).scrollTop())+"px,0)");
		});

		$(".container.secondary .receipt_details.copy").html($(".container.secondary .receipt_details:not(.copy)").html());
		$(".container.secondary .receipt_details:not(.copy)").bind("scroll",function() {
			$(".container.secondary .receipt_details.copy").css("transform","translate3d(0,"+(1-$(this).scrollTop())+"px,0)");
		})
	}
	return {
		Init: function() {
			
			setScrollPosition();
			try {
				webkit.messageHandlers.callbackHandler.postMessage("black");
			} catch (e) {
				console.log(e);
			}
			setupLinks();
			addHeaderBlur();
		}
	}
}();
Chrome.Init();