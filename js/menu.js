
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

(function($){
$(document).ready(function(){
//Menu
$('#toggle').click(function() {
    $(this).toggleClass('toggle-active');
    $('#overlay').toggleClass('nav-active');
    $('.navbar-default').toggleClass('bg-menu-mobile');
});
$('.navigation a').click(function(e){
    e.preventDefault();

    $('.mn-active').removeClass('mn-active');

    el = $(this);

    name = el.attr('href');

    pos = $(name).position().top;

    el.addClass('mn-active');

    $('html,body').stop().animate({scrollTop:pos},800,'easeInQuad');
    return false;
});

// Closes the Responsive Menu on Menu Item Click
    if($(window).width() <768){
        $('.navbar-collapse ul li a').click(function() {
            $(this).closest('.navbar-default').find('button.toggle-active').removeClass('toggle-active');
            $('.navbar-default').removeClass('bg-menu-mobile');
            $(this).closest('.collapse').collapse('toggle');
        });
    }

    $(window).scroll(function(){

        t = $(window).scrollTop() + 20;

        $('.wapper').find('.page').each(function(){
            el = $(this);
            p = el.position().top;

            if(p <= t){
                id = el.attr('id');
                $('.mn-active').removeClass('mn-active');
                $("[href='#"+id+"']").addClass('mn-active');

            }
        });
    });
});

})(jQuery);

