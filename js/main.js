$(document).ready(function(){
	setTimeout(function(){
		$('.preloader').fadeOut();
		$('.phone').addClass('animated fadeInUp');
		$('.apptitle').addClass('animated fadeInRight');		
	}, 1500);
}); 

/*** ANIMATION INIT ***/
$('.rectangle-1').waypoint(function(){
	setTimeout(function(){$('#section-2').addClass('animated fadeInDown')}, 300)
},{offset: '50%'});

$('.rectangle-2').waypoint(function() {
    setTimeout(function(){$('#section-3-title').addClass('animated fadeInDown')},300);
    setTimeout(function(){$('.phone-big').addClass('animated fadeInUp')},500);
    setTimeout(function(){$('#feature_1').addClass('animated fadeInRight')},700);
    setTimeout(function(){$('#feature_2').addClass('animated fadeInRight')},900);
    setTimeout(function(){$('#feature_3').addClass('animated fadeInRight')},1100);
    setTimeout(function(){$('#feature_4').addClass('animated fadeInRight')},1300);    
}, { offset: '50%' });

$('.rectangle-1').waypoint(function() {
    setTimeout(function(){$('.rectangle-1 .col-sm-4').addClass('animated fadeInUp')},300);    
}, { offset: '50%' });

$('.rectangle-3').waypoint(function() {
    setTimeout(function(){$('#section-testimonials').addClass('animated fadeInDown')},300);  
    setTimeout(function(){$('.fa-quote-left').addClass('animated fadeInUp')},500);  
    setTimeout(function(){$('.testimonial').addClass('animated fadeInUp')},700);       
}, { offset: '50%' });

$('.team').waypoint(function() {
    setTimeout(function(){$('#section-team').addClass('animated fadeInDown')},300);         
    setTimeout(function(){$('.team-member').addClass('animated fadeInUp')},500);     
}, { offset: '65%' });

$('.rectangle-4').waypoint(function() {
    setTimeout(function(){$('#newsletter-message').addClass('animated fadeInLeft')},300);  
    setTimeout(function(){$('#newsletter-form').addClass('animated fadeInRight')},500);  
    setTimeout(function(){$('#footer-animation').addClass('animated fadeInDown')},700);      
}, { offset: '80%' });
/*** STOP ANIMATION ***/

/*** UI TOP***/
$(window).scroll(function() {
	var winH = $('body').height();
	var win34 = (winH/4)*3;
    	if($(window).scrollTop() > win34){
			$("#uiTop").fadeIn();
			} else {
				$("#uiTop").fadeOut();	    
			}
});
$('#uiTop').on('click', function(){
$('html,body').animate({
          scrollTop:0
        }, 1000);
});
/*** END UI TOP ***/

/*** Button Scroll ***/
$('#learnmore').on('click',function(){
	$("html, body").animate({ 
		scrollTop: $('#part2').offset().top 
		}, 1000);
});	
/*** End ***/

/*** FORM VALIDATION ***/
jQuery.validator.setDefaults({
    errorPlacement: function(error, element) {
        error.appendTo(element.prev());
    }
});
$("#subscribe").validate({
	submitHandler: function(form) {
		        $(form).ajaxSubmit({
		            success: function() {
		            	$("#newsletter-message").fadeOut('slow');
		            	$("#newsletter-form").fadeOut('slow',function(){
		            	var thanks = '<div class="row fadeInRight" style="padding-top:50px;"> <div class="col-sm-6 col-centered text-centered padding-top-30"> <div data-icon="}" class="icon"></div> <h2>Thank You for subscribing!</h2> <p>We will let you know all our updates!</p> </div> </div>';
			            $("#form-subscribe").append(thanks).fadeIn();			            	
		            	});
		            }     
				});
    },
	rules: {
	    EMAIL: {
	      required: true,
	      email:true
	    }
	  },
    invalidHandler: function(form, validator) {
        var errors = validator.numberOfInvalids();
        if (errors) {
            $("#email").css('border-color','#FF1E12');
            $("#email").attr('placeholder','Please insert Email!');                        
            $("#email").val('');                        
            $("#email").fadeTo(100, 0.1).fadeTo(200, 1.0);
            $("#email").fadeTo(100, 0.1).fadeTo(200, 1.0);
            $("#email").fadeTo(100, 0.1).fadeTo(200, 1.0);                        
        }    
    }    
    });
/*** END VALIDATION ***/