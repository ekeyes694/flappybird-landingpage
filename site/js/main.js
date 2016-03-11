$(document).ready(function () {
    $('.choices ul a').hide();
    $(window).load(function () {
        $(".choices ul a").velocity("transition.slideLeftIn", {
            duration: 3000
        });
    });
    $('a[href*="#"]').on('click', function (e) {
        // prevent default action and bubbling
        e.preventDefault();
        e.stopPropagation();
        // set target to anchor's "href" attribute
        var target = $(this).attr('href');
        // scroll to each target
        $(target).velocity('scroll', {
            duration: 1000,
            offset: -40,
            easing: 'ease-in-out'
        });
    });

});
