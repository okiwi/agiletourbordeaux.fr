function chargerTemplatesExternes(urlDesTemplates, nomDesTemplates) {
    $.each(nomDesTemplates, function() {
        $.ajax({
            url : urlDesTemplates + this + '.template',
            async : false,
            dataType : 'html',
            cache : true
        }).done(function(templates) {
            $(templates).filter('script').each(function() {
                if (this.id) {
                    ich.addTemplate(this.id, $(this).html());
                }
            });
        });
    });
}