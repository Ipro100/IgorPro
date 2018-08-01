$(document).ready(function() {

//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("main_form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

   $(".popup_content").magnificPopup({
   	type : "image",
   	gallery : {
   		enabled : true
   	},
   	remavalDelay: 300,
   	
   });

   $(".header_content h1").animated("fadeInDown");
   $(".line_caption p, .section_header").animated("fadeInUp");
   $(".mnu_line").animated("zoomIn");
   
   $(".anim_zoom ").animated("zoomIn","zoomOut");
   $(".anim_rotate_left ").animated("rotateInUpRight");
   $(".anim_rotate_right ").animated("rotateInUpLeft");



	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


	
	$(".mnu_line ul li a").mPageScroll2id();

});

$(window).on('load', function () {
    $preloader = $('.loader'),
      $loader = $preloader.find('.loader_inner');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
  });