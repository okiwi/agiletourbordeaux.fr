/* override theme.js function to remove social networks buttons
 * handlePrettyPhoto() call needs to be commented in theme.js
 */
$("a[data-gal^='prettyPhoto']").prettyPhoto({
    theme: 'dark_square',
    social_tools: ''
});

// Sponsors Slider
theme.initSponsorsSlider = function () {
    console.log('init sponsor slider', $(".sponsors-carousel .owl-carousel"));
    $(".sponsors-carousel .owl-carousel").owlCarousel({
        autoplay: true,
        loop: true,
        margin: 25,
        dots: false,
        nav: true,
        navText: [
            "<i class='fa fa-caret-left'></i>",
            "<i class='fa fa-caret-right'></i>"
        ],
        responsive: {
            0:    {items: 1},
            479:  {items: 2},
            768:  {items: 3},
            991:  {items: 5},
            1024: {items: 6}
        }
    });
};
