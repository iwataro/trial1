$('.faq__block__question').on('click', function(){
	$(this).next().slideToggle();

	if($(this).hasClass("open")) {
		$(this).removeClass("open");
	} else {
		$(this).addClass("open");
	}
});