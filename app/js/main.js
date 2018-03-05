
TweenMax.fromTo('.header', 0.7, {y:-100}, {y: 0});
TweenMax.fromTo('.banner_laptop', 0.5, {scale: 0, delay: 1, opacity: 0}, {scale: 1, opacity: 1, delay: 1});

var parallax = document.querySelectorAll('.banner_parallax');
TweenMax.staggerFromTo (parallax, 1, 
    {opacity: 0, scale: 0.5, delay: 1.5}, 
    {opacity:1, scale: 1, delay: 1.5}, 
    0.2);
var cont = document.querySelectorAll('.content_btn');
TweenMax.staggerFrom (cont, 1,
    {opacity: 0, scale: 0.5, delay: 2.5, y: 100},
0.5);
var tl = new TimelineMax({ 
    repeat: -1,
    repeatDelay: 2
  }); 
  
  tl.to(
    '.scroll-button',   
     2,     
     {y:25},   
     -1  
  );

//=====parallax=====//
//var scene = document.getElementById('scene');
//var parallaxInstance = new Parallax(scene);


//=====burger menu=====//
jQuery(document).ready(function(){
    var $listMenu = $('.mobile-nav-header');    
    $('.burger-menu').click(function(){
        $('#burger').toggleClass('active');
        $('.burger-top').toggleClass('active');
        $('.burger-middle').toggleClass('active');
        $('.burger-bottom').toggleClass('active');
        $('.mobile-nav').toggleClass('active');
        if ($('#burger').hasClass('active')) {
            $listMenu.show();
                     setTimeout(function(){	
                       $listMenu.css('opacity','1');
                     }, 200);
               } else {
               $listMenu.css('opacity','0');
               setTimeout(function(){	
               $listMenu.hide();
             }, 500);
               }
             return false;
       });
   });
             
   //=====one page scroll====//
$(function() {
    $('.scroll-button').click (function() {
      $('html, body').animate({scrollTop: $('.scroll_block').offset().top }, 'slow');
      return false;
    });
  });
  
  $(function() {
    var limit = $('.scroll_block').offset().top
      , tempScrollTop = 0
      , currentScrollTop = 0
      , animating = false
      , target = $('html, body');
    $(document).scroll(function(e) {
      if (animating) {
        return;
      }
      currentScrollTop = $(document).scrollTop();
      if (tempScrollTop < currentScrollTop && currentScrollTop < limit) {     
        animating = true;
        target.stop(true).animate({ scrollTop: limit }, 300, function() {
          animating = false;
          tempScrollTop = $(document).scrollTop();
        });
      }
      else if (tempScrollTop > currentScrollTop && currentScrollTop < limit) {
        animating = true;
        target.stop(true).animate({ scrollTop: 0 }, 300, function() {
          animating = false;
          tempScrollTop = $(document).scrollTop();
        });
      }  
    });
  });