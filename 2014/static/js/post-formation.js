jQuery(document).ready(function () {
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
