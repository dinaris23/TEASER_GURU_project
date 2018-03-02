
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

//=====parallax=====//
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

    