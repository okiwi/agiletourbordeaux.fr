jQuery(document).ready(function () {
    theme.init();
    //theme.initMainSlider();
    theme.initCountDown();
    theme.initSponsorsSlider();
    theme.initTestimonials();
    theme.initGoogleMap();
});
jQuery(window).load(function () {
    theme.initAnimation();
});

jQuery(window).load(function () { jQuery('body').scrollspy({offset: 100, target: '.navigation'}); });
jQuery(window).load(function () { jQuery('body').scrollspy('refresh'); });
jQuery(window).resize(function () { jQuery('body').scrollspy('refresh'); });

jQuery(document).ready(function () { jQuery('.page').css('min-height', jQuery(window).height()); });
jQuery(window).load(function(){ jQuery('.page').css('min-height', jQuery(window).height()); });
jQuery(window).resize(function(){ jQuery('.page').css('min-height', jQuery(window).height()); });

jQuery(window).load(function() {
    if (location.hash != '') {
        var hash = '#' + window.location.hash.substr(1);
        if (hash.length) {
            jQuery('html,body').delay(0).animate({
                scrollTop: jQuery(hash).offset().top - 44 + 'px'
            }, {
                duration: 1200,
                easing: "easeInOutExpo"
            });
        }
    }
});
