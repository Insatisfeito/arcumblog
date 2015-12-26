$(document).ready(function() {

    $('[data-hover="dropdown"]').dropdownHover();


    $(window).on('scroll load', function() {

        if ($(window).scrollTop() > 0) {
            $('#header').addClass('scrolled');
        } else {
            $('#header').removeClass('scrolled');

        }
    });

    $('input, textarea').placeholder();

    $('#testimonials-carousel').carousel({
        interval: 15000
    });

    $('#activities-carousel').carousel({
        interval: 15000
    });

    smoothScroll.init();

});

$(window).load(function() {
    if (window.location.hash) {
        $("."+window.location.hash.substring(1)+"-modal").click();
    }
});



$(document).ready(function() {
    $('.team-wrapper').hide();
    $('#2015').show();
    $('.team-change').click(function() {
        $('.team-wrapper').hide();
        $('#' + $(this).attr('name')).show();
    })
});

/*
$(document).keydown(function(e) {
    if (e.keyCode == 27) {
        $(".closebt").click();
    }
});
*/


