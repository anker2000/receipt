var Chrome = function() {
	
	function inputHandler(e) {
	
	}
	
	function setScrollPosition() {
		$(".container.main .receipt_list").scrollTop($(".container.main form")[0].scrollHeight);
	}
	function setupLinks() {
		$(".receipt_list li li").bind("click",function() {
			$("body").addClass("secondary");
			$(".receipt_details").scrollTop(0);
			webkit.messageHandlers.callbackHandler.postMessage("geo");
			Places.newReceiptShowNearbyStores();
		});
		$(".container.secondary header button").bind("click",function() {
			$("body").removeClass("secondary");
		});
		$(".container.secondary .add_item button").bind("click",function() {
			$("body").addClass("overlay");
		})
		$(".container.overlay button.cancel").bind("click",function() {
			$("body").removeClass("overlay");
		});
	}
	function setupGestures() {
		// $(".receipt_details .items li:not(.add_item)").each(function() {
		// 	console.log("binding to ",this);
		// 	var myOptions = {};
		// 	var hammertime = new Hammer(this, myOptions);
		// 	hammertime.on('swipe', function(ev) {
		// 		if (ev.direction == 2) {
		// 			$(ev.target).closest("li").addClass("swiped");
		// 		} else {
		// 			$(ev.target).closest("li").removeClass("swiped");
		// 		}
		// 	});
		// });
	}
	function swipeHandler(e) {
		console.log(e);
	}
	function addHeaderBlur() {
		$(".container.main .receipt_list.copy").html($(".container.main .receipt_list:not(.copy)").html());
		$(".container.main .receipt_list:not(.copy)").bind("scroll",function() {
			$(".container.main .receipt_list.copy").css("transform","translate3d(0,"+(1-$(this).scrollTop())+"px,0)");
		});

		$(".container.secondary .receipt_details.copy").html($(".container.secondary .receipt_details:not(.copy)").html());
		$(".container.secondary .receipt_details:not(.copy)").bind("scroll",function() {
			var scrollTop=$(this).scrollTop()-10;
			if (scrollTop < 0) {
				$(".container.secondary .receipt_details .receipt").each(function() {
					$(this).css("height","calc(61.8vh + "+(-64+Math.abs(scrollTop))+"px)").css("margin-top",scrollTop);
				});
			} else {
				$(".container.secondary .receipt_details .receipt").each(function() {
					$(this).css("height","calc(61.8vh - 64px)").css("margin-top",0);
				});
			}
			$(".container.secondary .receipt_details.copy").css("transform","translate3d(0,"+(1-$(this).scrollTop())+"px,0)");
		});
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
			setupGestures();
			addHeaderBlur();
		}
	}
}();
Chrome.Init();