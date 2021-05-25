//AUTO SCROLL
$('.page-scroll').on('click', function(e){
    
    //Get href
    var href = $(this).attr('href');

    //Get element
    var elementHref = $(href);

    //Scroll
    $('html, body').animate({
        scrollTop: (elementHref.offset().top - 55)
    }, 1500, 'easeInOutExpo'
    );
    

    e.preventDefault();
});

//PARALLAX
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    $('.my-img').css({'-webkit-transform':'translate(0px,'+ wScroll/10 +')'});
});


//'transform': 'translateX(0px) translateY('+ wScroll/4 +')'





