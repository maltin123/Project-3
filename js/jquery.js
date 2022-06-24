$(window).scroll(function () { 
    if($(window).scrollTop() > 500) {
        $("#up").fadeIn();
    } else {
        $("#up").fadeOut();
    };
});

$("#up").click(function () { 
    $("html").animate({scrollTop:0}, 500);
    
});