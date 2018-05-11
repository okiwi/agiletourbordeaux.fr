jQuery(document).ready(function () {
    jQuery('body').addClass('sub-page');
    theme.init();
    theme.initSponsorsSilverSlider();
    theme.initPartenaireSlider();
});

jQuery(window).load(function () {
    theme.initAnimation();
});
