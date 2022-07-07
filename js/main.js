
/* ---------------------------- header navigation ----------------------------- */



/* -------------------------- document Start ------------------ */

    
$(document).ready(function () {
    
/*17-04-2018 js start*/
    
$("#nav-toggle").click(function(){
    $(".navigation").slideToggle();
    $(this).toggleClass('active');
});

var $root = $('html, body');

$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top -130
    }, 500);

    return false;
});    
    
$("header .ddmainglobal").click(function(){
    $("header .ddinerglobal").slideToggle();
});
    
$("header .ddinerglobal ul li a").click(function(){
    $("header .ddinerglobal").hide();
});
    
 
    
if (screen.width < 767) {
    $(".navigation ul li a").click(function(){
        $(".navigation").slideUp();
        $("#nav-toggle").removeClass('active');
    }); 
}    
/*17-04-2018 js end*/    
    
/* -------------------------- spotlight slider------------------ */  
    
    
    
 $('.spotlight-carosel').slick({
    slidesToShow: 1,
 	slidesToScroll: 1,
 	arrows: false,
    dots:true,
 	fade: false,
 	infinite: false,
	useTransform: true,
    autoplay:false,
 	speed: 400,
});   
    
    
 
   
    
$('.testimonial-carosel').slick({
    slidesToShow: 1,
 	slidesToScroll: 1,
 	arrows: false,
    dots:true,
 	fade: false,
 	infinite: false,
	useTransform: true,
    autoplay:false,
 	speed: 400,
});
    
 
  
    
$('.casestudy-carosel').slick({
    slidesToShow: 3,
 	slidesToScroll: 1,
 	arrows: false,
    dots:true,
 	infinite:true,
	autoplay:false,
 	speed:800,
    centerMode:true,
    centerPadding: '0px',
    adaptiveHeight: true,
    //asNavFor: '.dotsWrapAD',
    
    responsive: [
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
              centerMode:false,
    centerPadding: '0px',
          }
        }

      ]
    
});
    
if (screen.width < 768) {
 
 $('.why-mod-carosel').slick({
    slidesToShow: 6,
 	slidesToScroll: 1,
 	arrows: false,
    dots:true,
 	infinite:true,
	autoplay:false,
 	speed:800,
    centerMode:true,
    centerPadding: '0px',
    adaptiveHeight: true,
    //asNavFor: '.dotsWrapAD',
    
    responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
              centerMode:false,
    centerPadding: '0px',
          }
        }

      ]
    
});   
    
}     
    


    
       
});