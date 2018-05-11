"use strict";
var theme = function () {

    // init default skin
    // -------------------------------------------------------------------------------------------
    $(document).ready(function () {
        if (!$('.theme-config').length) {
            var color = 'blue-2'; //  light, dark ... #atbdx choisir "blue-2" ici
            var css = $('#theme-config-link');
            css.attr('href', '/assets/css/theme-' + color + '.css'); //#atbdx: ajout du "/" devant assets
        }
    });

    // prevent empty links
    // ---------------------------------------------------------------------------------------
    function handlePreventEmptyLinks() {
        $('a[href=#]').click(function (event) {
            event.preventDefault();
        });
    }

    // Placeholdem
    // ---------------------------------------------------------------------------------------
    function handlePlaceholdem() {
        Placeholdem(document.querySelectorAll('[placeholder]'));
    }

    // BootstrapSelect
    // ---------------------------------------------------------------------------------------
    function handleBootstrapSelect() {
        $('.selectpicker').selectpicker();
    }

    // add hover class for correct view on mobile devices
    // ---------------------------------------------------------------------------------------
    function handleHoverClass() {
        var hover = $('.thumbnail');
        hover.hover(
            function () {
                $(this).addClass('hover');
            },
            function () {
                $(this).removeClass('hover');
            }
        );
    }

    // superfish menu
    // ---------------------------------------------------------------------------------------
    function handleSuperFish() {
        $('ul.sf-menu').superfish();
        $('ul.sf-menu a').click(function() {
            $('body').scrollspy('refresh');
        });
        // fixed menu toggle
        $('.menu-toggle').on('click', function(){
            if($('.navigation').hasClass('opened')) {
                $(this).find('.fa').removeClass('fa-times').addClass('fa-bars');
                $('.navigation').removeClass('opened').addClass('closed');
            } else {
                $(this).find('.fa').removeClass('fa-bars').addClass('fa-times');
                $('.navigation').removeClass('closed').addClass('opened');
            }
        });
        // submenu fix
        $('.mobile-submenu').click(function () {
            $(this).parent().toggleClass('mobile-submenu-open');
        });
        $('ul.sf-menu a').click(function() {
            $('ul.sf-menu li').removeClass('mobile-submenu-open');
        });
    }

    // Smooth scrolling
    // ---------------------------------------------------------------------------------------
    function handleSmoothScroll(){
        $(".sf-menu a, .scroll-to").click(function () {

            //var headerH = $('header').outerHeight();
            var headerH = 0;
            $(".sf-menu a").removeClass('active');
            $(this).addClass('active');
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top - headerH + "px"
            }, {
                duration: 1200,
                easing: "easeInOutExpo"
            });
            return false;
        });
    }

    // prettyPhoto
    // ---------------------------------------------------------------------------------------
    function handlePrettyPhoto() {
        $("a[data-gal^='prettyPhoto']").prettyPhoto({
            theme: 'dark_square'
        });
    }

    // Scroll totop button
    // ---------------------------------------------------------------------------------------
    function handleToTopButton() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 1) {
                $('.to-top').css({bottom: "15px"});
            } else {
                $('.to-top').css({bottom: "-100px"});
            }
        });
        $('.to-top').click(function () {
            $('html, body').animate({scrollTop: '0px'}, 800);
            return false;
        });
    }

    // preloader
    // ---------------------------------------------------------------------------------------
    $(window).load(function() {
        $('#status').fadeOut();
        $('#preloader').delay(200).fadeOut(100);
    });

    // Shrink header on scroll
    // ---------------------------------------------------------------------------------------
    function handleAnimatedHeader() {
        var header = $(".header.fixed");
        function refresh() {
            var scroll = $(window).scrollTop();
            if (scroll >= 99) {
                header.addClass('shrink');
            } else {
                header.removeClass('shrink');
            }
        };
        $(window).load(function () { refresh(); });
        $(window).scroll(function () { refresh(); });
        $(window).on('touchstart',function(){ refresh(); });
        $(window).on('scrollstart',function(){ refresh(); });
        $(window).on('scrollstop',function(){ refresh(); });
        $(window).on('touchmove',function(){ refresh(); });

    }

    // INIT FUNCTIONS
    // ---------------------------------------------------------------------------------------
    return {
        init: function () {
            handlePreventEmptyLinks();
            handlePlaceholdem();
            handleBootstrapSelect();
            handleHoverClass();
            handleSuperFish();
            handleSmoothScroll();
//            handlePrettyPhoto();
            handleToTopButton();
            handleAnimatedHeader();
        },
        // Main Slider
        initMainSlider: function () {
            $("#main-slider").owlCarousel({
                //items: 1,
                autoplay: false, // "true" to have automatic changing slides
                loop: true,
                margin: 0,
                dots: false,
                nav: false,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsiveRefreshRate: 100,
                responsive: {
                    0:    {items: 1},
                    479:  {items: 1},
                    768:  {items: 1},
                    991:  {items: 1},
                    1024: {items: 1}
                }
            });
        },
        // CountDown
        initCountDown: function () {
            var agileDay = new Date();
            agileDay = new Date(2015, 10-1, 30, 9, 0, 0);
            $('#defaultCountdown').countdown({until: agileDay});
            $('#year').text(agileDay.getFullYear());
            $("#main-slider").on('changed.owl.carousel', function(event) {
                $('#defaultCountdown').countdown({until: agileDay});
                $('#year').text(agileDay.getFullYear());
            })
        },
        // Partners Slider
        initPartnerSlider: function () {
            $(".partners-carousel .owl-carousel").owlCarousel({
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
        },
        // Testimonials
        initTestimonials: function () {
            $("#testimonials").owlCarousel({
                items: 1,
                autoplay: true,
                loop: true,
                dots: true,
                nav: false,
                navText: [
                    "<i class='fa fa-caret-left'></i>",
                    "<i class='fa fa-caret-right'></i>"
                ]
            });
        },
        // Animation on Scroll
        initAnimation: function () {
            var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            if (isMobile == false) {
                $('*[data-animation]').addClass('animated');
                $('.animated').waypoint(function (down) {
                    var elem = $(this);
                    var animation = elem.data('animation');
                    if (!elem.hasClass('visible')) {
                        var animationDelay = elem.data('animation-delay');
                        if (animationDelay) {
                            setTimeout(function () {
                                elem.addClass(animation + " visible");
                            }, animationDelay);
                        } else {
                            elem.addClass(animation + " visible");
                        }
                    }
                }, {
                    offset: $.waypoints('viewportHeight')
                    //offset: 'bottom-in-view'
                    //offset: '95%'
                });
            }
            // Refresh Waypoints on tab click / animation
            $('#tabs-lv1 li a[data-toggle="tab"]').on('shown.bs.tab', function () { $.waypoints('refresh'); });
            $('#tabs-lv2 li a[data-toggle="tab"]').on('shown.bs.tab', function () { $.waypoints('refresh'); });
        },
        // Google map
        initGoogleMap: function() {
           var map,
                marker,
                myLatlng = new google.maps.LatLng(44.85359, -0.57493);
            function initialize() {
                var mapOptions = {
                    scrollwheel: false,
                    zoom: 17,
                    center: myLatlng
                };
                map = new google.maps.Map(document.getElementById('map-canvas'),
                    mapOptions);

                marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map,
                    animation: google.maps.Animation.BOUNCE,
                    title: 'Epitech Bordeaux'
                });
                google.maps.event.addListener(marker, 'click', toggleBounce);
            }

            function toggleBounce() {
                if (marker.getAnimation() != null) {
                    marker.setAnimation(null);
                } else {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                }
            }

            google.maps.event.addDomListener(window, 'load', initialize);
        }

    };

}();