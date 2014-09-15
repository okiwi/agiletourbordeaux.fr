jQuery(document).ready(function () {
    // add active class to blog menu
    jQuery('ul.sf-menu li:first-child + li').addClass('active');

    $('input[name=language]:radio').change(
        function(){
            var other;
            if ($(this).val() == 'fr') {
                other = 'en';
            } else {
                other = 'fr';
            }

            $('#formation-' + $(this).val()).removeClass('hide');
            $('#formation-' + other).addClass('hide');
        }
    );
});
