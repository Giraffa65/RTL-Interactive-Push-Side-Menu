var main = function() {
    $('.icon-menu').click(function() {
    $('.menu').animate({
        right: '0px'
    }, 200);  
    
    $('body').animate({
          right: '200px'
        }, 200);
});

    $('.icon-close').click(function() {
    $('.menu').animate( {
          right: '-200px'
    }, 200);
    
    $('body').animate({
          right: '0px'
    }, 200);
});
}

$(document).ready(main);
