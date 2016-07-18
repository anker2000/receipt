var megaNav = function() {
	
	function inputHandler(e) {
	
	}
	function toggleNav() {
		$(".mega-nav").toggleClass("fullscreen");
		$("body").toggleClass("nav");
	}
	return {
		Init: function() {
			$(".mega-nav .burger").bind("click",toggleNav);
			$(".mega-nav .nav-right button").bind("click",function(e) {
				$("body").addClass("logged-in").removeClass("nav");
				$("nav").removeClass("fullscreen");
				e.preventDefault();
				return false;
			});
			$(".signout").bind("click",function(e) {
				$("body").removeClass("logged-in").removeClass("nav");
				$("nav").removeClass("fullscreen");
				e.preventDefault();
				return false;
			});
			$(".login button").bind("click",function(e) {
				$("body").addClass("logged-in").removeClass("nav");
				$("nav").removeClass("fullscreen");
				e.preventDefault();
				return false;
			});
		}
	}
}();
$(function() {
	megaNav.Init();
})