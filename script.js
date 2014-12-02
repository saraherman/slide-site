// A $( document ).ready() block.
$( document ).ready(function() {
	// scrollbar
	$(".container").customScrollbar();

	$(".content .profile").show();
	$(".menu-item.profile").addClass('active');
	$(".content .profile").addClass('active');

	function clearbuffer(jq){
		$(".content .profile.active, .content .resume.active, .content .portfolio.active, .content .references.active, .content .contact.active").animate({left: "-710px"}, 500,function(){
		$('.active').removeClass("active");

			if (jq.hasClass("profile")) {
				$(".menu .profile").addClass("active").animate({paddingLeft:"20px"});
				$(".content .profile").addClass("active");
				$(".content .profile").animate({left: "0px"}, 500);
			}
			else if (jq.hasClass("resume")) {
				$(".menu .resume").addClass("active").animate({paddingLeft:"20px"});
				$(".content .resume").addClass("active");
				$(".content .resume").animate({left: "0px"}, 500);
			}
			else if (jq.hasClass("portfolio")) {
				$(".menu .portfolio").addClass("active").animate({paddingLeft:"20px"});
				$(".content .portfolio").addClass("active");
				$(".content .portfolio").animate({left: "0px"}, 500);
				}
			else if (jq.hasClass("references")) {
				$(".menu .references").addClass("active").animate({paddingLeft:"20px"});
				$(".content .references").addClass("active");
				$(".content .references").animate({left: "0px"}, 500);
				}
			else if (jq.hasClass("contact")) {
				$(".menu .contact").addClass("active").animate({paddingLeft:"20px"});
				$(".content .contact").addClass("active");
				$(".content .contact").animate({left: "0px"}, 500);	
			};
		$(".page .scroll").customScrollbar("resize", true);
		});
		
	}

	$(".menu-item").click(function( event ){
		var jq = $(this);
		if ($(this).hasClass( "active" )) {
			event.stopPropagation();
		}
		else{
			clearbuffer(jq);
		};	
	})

	$(".menu-item").mouseenter(function(){
		
		if ($(this).hasClass("active")) {}
		else{
			$(this).stop( true, false ).animate({paddingLeft:"40px"});
			}
		}).mouseleave(function(){
			$(this).stop( true, false ).animate({paddingLeft:"20px"});
		});


	
});