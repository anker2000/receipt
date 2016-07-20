var Forms = function() {
	
	function duplicateList() {
		
	}

	return {
		Init: function() {
			$("input[type=date]").each(function() {
				var replaceInput = document.createElement("input");
				var obj = this;

				replaceInput.setAttribute("type","text");
				replaceInput.setAttribute("placeholder",this.getAttribute("placeholder"));
				
				this.style.pointerEvents="none";
				this.style.position="absolute";
				this.style.opacity=0;
				$(this).parent().append(replaceInput);

				replaceInput.addEventListener("focus",function() {
					$(obj).focus();
				});
				$(this).bind("blur",function() {
					$(replaceInput).val($(this).val());
				});
				$(this).bind("change",function() {
					(replaceInput).val($(this).val());
				});
			})
			
		}
	}
}();
Forms.Init();