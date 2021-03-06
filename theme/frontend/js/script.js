$("#btn-buy").click(function(){
    $("#sdt").addClass("show-tel", {duration:600,effect:'blind'});
    $("#lienhe").addClass("hidden", {duration:600,effect:'blind'});
});

// strat menu fixed
var num = 80; //number of pixels before modifying styles

// $(window).bind('scroll', function() {
//     if ($(window).scrollTop() > num) {
//         $('header').addClass('fixed');
//     } else {
//         $('header').removeClass('fixed');
//     }
// });
// end menu fixed


$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) $('#goTop').fadeIn();
        else $('#goTop').fadeOut();
    });
    $('#goTop').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 'slow');
        return false;
    });
    $('#goTop2').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 'slow');
        return false;
    });

});


$(window).scroll(function() {    

    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $(".primary-menu").addClass("scroll-fixed");
    }else{
        $(".primary-menu").removeClass("scroll-fixed");
    }
});
jQuery(function($) {
	
    var wow = new WOW({offset:50,mobile:false}); wow.init();

    var isChrome = !!window.chrome && !!window.chrome.webstore;
    if(isChrome==true){
        $('.top a h2').addClass("text-gd");
    }

    // Start slide camera
    // if($('body').find(".slide-top").length > 0){
    //     $('.slide-top').camera({
    //         // height: 'auto',
    //         height: '30%',
    //         // loader: 'pie',
    //         loader: 'none',
    //         pagination: false,
    //         thumbnails: false,
    //         hover: false,
    //         opacityOnGrid: false,
    //     });
    // };


    $('.box_slider_partner').owlCarousel({
        loop:false,
        margin:20,
        dots:false,
        autoplay:false,
        autoplayTimeout:10000,
        smartSpeed:1500,
        navContainerClass: "owl-nav-partner",
        nav:true,
        navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
        responsive:{
            0:{ items:1,nav:false,dots:true},
            480:{ items:2,nav:false,dots:true},
            768:{ items:3 },
            992:{items:4 },
            1200:{items:5 },
        },
        thumbs: false,
        thumbImage: false,
        // thumbsPrerendered: false,
        // thumbContainerClass: 'owl-thumbs',
        // thumbItemClass: 'owl-thumb-item'
    });


    $('#box-slide-doi-tac').owlCarousel({
        loop:true,
        responsive:{
            0:{ items:2 },
            480:{ items:2 },
            768:{ items:3 },
            992:{items:4 },
            1200:{items:4 },
        },
        margin:20,
        dots:true,
        nav:false,
        autoplay:true,
        autoplayTimeout:10000,
        smartSpeed:1500,
    });


    $('#slide-post-home-1').owlCarousel({
        loop:false,
        items: 3,
        nav:true,
        navText:['<img src="theme/frontend/images/icon/btn_slide_small.png">','<img src="theme/frontend/images/icon/btn_slide_small.png">'],
        responsive:{
            0:{ items:1 },
            480:{ items:2 },
            768:{ items:3 },
            992:{items:2, dots:false },
            1200:{items:3, dots:false }
        },
        margin:20,
        autoplay:true,
        autoplayTimeout:10000,
        smartSpeed:1500,
    });



    $('.slide-col-left-1').owlCarousel({
        loop:true,
        items: 1,
        dots:true,
        nav:false,
        autoplay:true,
        autoplayTimeout:10000,
        smartSpeed:1500,
    });



    $('.slide-doi-ngu').owlCarousel({
        loop:false,
        items: 4,
        margin:20,
        dots:true,
        nav:false,
        autoplay:true,
        autoplayTimeout:10000,
        smartSpeed:1500,
        responsive:{
            0:{ items:1 },
            480:{ items:2 },
            767:{ items:3 },
            991:{items:4, dots:false },
            1200:{items:4, dots:false },
        },
    });

    $('.feature .owl-controls').append('<i class="fa fa-angle-right smooth prev"></i>');
    $('.feature .owl-controls').prepend('<i class="fa fa-angle-left smooth next"></i>');
    $('.owl-controls .next').click(function(){
        $('.feature .owl-next').trigger("click");
    });
    $('.owl-controls .prev').click(function(){
        $('.feature .owl-prev').trigger("click");
    })

    $('.news-list').owlCarousel({
        loop:true,
        items: 1,
        margin:20,
        dots:false,
        nav:true,
        navText:['<i class="fa fa-angle-left smooth"></i>','<i class="fa fa-angle-right smooth"></i>'],
        autoplay:true,
        autoHeight:true,
        autoplayTimeout:8000,
        smartSpeed:1500,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
    });


    $(".map").click(function () {
        $(".map iframe").css("pointer-events", "auto");
    });
    $(".map iframe").mouseleave(function() {
        $(".map iframe").css("pointer-events", "none"); 
    });

});

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            events: {
                'onReady': onPlayerReady,
            }
        });
    }
    function onPlayerReady(event) {
        event.target.mute();
    }


$(window).load(function(){
    $('.load').fadeOut(1000);
});


$('.nav-tabs-dropdown').each(function(i, elm) {
    
    $(elm).text($(elm).next('ul').find('li.active a').text());
    
});
  
$('.nav-tabs-dropdown').on('click', function(e) {

    e.preventDefault();
    
    $(e.target).toggleClass('open').next('ul').slideToggle();
    
});

$('#nav-tabs-wrapper a[data-toggle="tab"]').on('click', function(e) {

    e.preventDefault();
    
    $(e.target).closest('ul').hide().prev('a').removeClass('open').text($(this).text());
      
});