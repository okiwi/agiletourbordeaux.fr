jQuery(document).ready(function () {
    jQuery('body').addClass('sub-page');
    theme.init();

    // add active class to speaker menu
    jQuery('ul.sf-menu li:nth-child(2)').addClass('active');
});
