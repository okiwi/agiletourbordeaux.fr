jQuery(document).ready(function () {
    jQuery('body').addClass('sub-page');
    theme.init();

    // add active class to programme menu
    jQuery('ul.sf-menu li:nth-child(2)').addClass('active');

    var animatedModal = jQuery("#animatedModal");

    var descriptions = {
        'conf-ploum': '<h1>Le bonheur sans travail</h1><p><ol><li>1. Le travail est appelé à disparaitre car, par nature, il y aura un robot pour le faire à notre place</li><li>2. Il est nécessaire de trouver une motivation, un sens à sa vie autre que le travail</li><li>3. L’argent, symbole du travail, ne s’y prête pas. Je propose donc une nouvelle méthode de mesure de l’épanouissement à travers des unités de temps.</li></ol></p>',
        'conf-rosoor': '<h1>Comment ça va ? Bien ! Evidemment.</h1><p>Dirigeants, indépendants, freelance, auto-entrepreneurs sont maîtres de leur destin. En position de            leadership, c\'est assez rare qu\'ils avouent "aller mal". Et d\'ailleurs, la société ne le comprendrait pas.</p>            <p>Quand on parle de bien être au travail et donc de risques psycho-sociologiques on s\'adresse donc            essentiellement aux salariés, aux personnes qui ont un lien hiérarchique avec un manager, un patron.</p>            <p>Or nous sommes dans un monde où l\'organisation du travail évolue avec de plus en plus, avec une            augmentation de l\'indépendance au détriment du salariat...le burn-out, lui ne fait pas la différence entre            les statuts.</p>            <p>Pointer le problème, c\'est déjà y répondre en partie.</p>            <p><b>Benjamin Rosoor,</b></p>    <p>Multi-Entrepreneur du web depuis 1999. Il est engagé depuis plusieurs années au sein du Centre des Jeunes    Dirigeants (CJD) où il a participé à des travaux sur le bien être du dirigeant.</p>',
        'conf-gaillot': '<h1>Mob mob mob programming</h1><p>Vous connaissez peut-être déjà la pratique de "mob programming" (littéralement : programmer en meute), qui consiste à programmer en groupe sur un seul ordinateur - une manière comme une autre de prolonger la blague sur le nombre de guitaristes qu\'il faut pour changer une ampoule. Mais avez-vous déjà essayé le "mob programming" (littéralement : la programmation de mobs, c\'est-à-dire des animaux/robots/monstres/personnages-non-joueurs dans un jeu vidéo) ?<p><p>Le temps d\'une session hautement pédagogique à valeur fortement ajoutée, nous montrerons comment allier poésie, curiosité scientifique et grand n\'importe quoi dans un monde virtuel (en l\'occurrence : Minecraft). Nous programmerons des mobs, des meutes de mobs, avec une meute de programmeurs. Accessoirement, nous en profiterons pour réviser les fondamentaux de la programmation JavaScript et de la physique Minecraftienne. Et pour réfléchir à comment intéresser les enfants (et les adultes) à la programmation. Une écoute de Marilyn Manson n\'est pas à exclure.</p>'
    };

    jQuery('.modalLink').each(function(index, element) {
        jQuery(element).on('click', function(event) {
            var id = jQuery(event.currentTarget).attr('id');
            animatedModal.find('.modal-content').html(descriptions[id]);
        });

        jQuery(element).animatedModal({
            animatedIn:'slideInLeft',
            animatedOut:'slideOutRight',
            animationDuration:'.6s',
            beforeOpen: function() {
                animatedModal.addClass('visible');
            },
            afterClose: function() {
                animatedModal.removeClass('visible');
            },
            color: '#2C495A'
        });
    });
});
