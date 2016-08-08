var ListTools = function() {
	var startTouchPoint = 0;
	var currentTouchPoint = 0;
	var startScrollPoint = 0;
	var currentScrollPoint = 0;
	
	function touchStartHandler(e){
		startTouchPoint = e.originalEvent.pageX;
		startScrollPoint = $(this).scrollLeft();
		$(this).stop().unbind("touchmove").unbind("touchend");
		$(this).bind("touchmove",touchMoveHandler);
		$(this).bind("touchend",touchEndHandler);
		

	}
	function touchMoveHandler(e) {
		currentTouchPoint = startTouchPoint-e.originalEvent.pageX;
		currentScrollPoint = startScrollPoint + currentTouchPoint;
		$(this).scrollLeft(currentScrollPoint);
		$(this).siblings().each(function() {
			if ($(this).scrollLeft()>0) {
				$(this).animate({
					scrollLeft: 0
				}, 400);
			}
		});
		if (Math.abs(currentTouchPoint)>10) {
			e.preventDefault();
			e.stopPropagation();
		}
	}
	function touchEndHandler(e) {
		var lockAreaBuffer = 10;
		var scrollThreshold = 60;
		var thisTarget = 0;
		currentScrollPoint = $(this).scrollLeft();
		if (startScrollPoint < lockAreaBuffer) {
			if (currentScrollPoint > scrollThreshold) {
				thisTarget=this.scrollWidth;
			} else {
				thisTarget=0;
			}
		} else {
			console.log(currentScrollPoint, this.scrollWidth, this.scrollWidth-scrollThreshold);
			if (currentScrollPoint<(this.scrollWidth-$(window).width())-scrollThreshold) {
				thisTarget = 0;
			} else {
				thisTarget = this.scrollWidth;
			}
		}
		$(this).animate({
			scrollLeft: thisTarget
		}, 400);
		$(this).unbind("touchmove");
	}
	return {
		Init: function() {
			$("ul.items li").unbind("touchstart");
			$("ul.items li").bind("touchstart",touchStartHandler);
		}
	}
}();
ListTools.Init();