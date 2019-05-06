window.onresize = function() {
    if (document.documentElement.clientWidth > 790) {
        $("#project1").attr("src","img/img-desktop-slim/Tofona-x2.png");
        $("#project2").attr("src","img/img-desktop-slim/Marisa-2x.png");
        $("#project3").attr("src","img/img-desktop-slim/Calendario-2x.png");
        $("#project4").attr("src","img/img-desktop-slim/Circles-2x.png");
    } else {
        $("#project1").attr("src","img/img-mobile-x2/tofona@2.jpg");
        $("#project2").attr("src","img/img-mobile-x2/marisa@2.jpg");
        $("#project3").attr("src","img/img-mobile-x2/calendario@2.jpg");
        $("#project4").attr("src","img/img-mobile-x2/circles@2.jpg");
    }
}

onload = function() {
    if (document.documentElement.clientWidth > 790) {
        $("#project1").attr("src","img/img-desktop-slim/Tofona-x2.png");
        $("#project2").attr("src","img/img-desktop-slim/Marisa-2x.png");
        $("#project3").attr("src","img/img-desktop-slim/Calendario-2x.png");
        $("#project4").attr("src","img/img-desktop-slim/Circles-2x.png");
    } else {
        $("#project1").attr("src","img/img-mobile-x2/tofona@2.jpg");
        $("#project2").attr("src","img/img-mobile-x2/marisa@2.jpg");
        $("#project3").attr("src","img/img-mobile-x2/calendario@2.jpg");
        $("#project4").attr("src","img/img-mobile-x2/circles@2.jpg");
    }
}

    
    
function animateAnchors(selector) {
	$(selector).each(function(i){
		$(this).click(function(e) {
			e.preventDefault();
			ancla=$(this).attr("href");
			$("html,body").animate({scrollTop: $(ancla).offset().top-65},500);
		});
	});
}