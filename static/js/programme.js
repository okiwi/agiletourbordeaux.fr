jQuery(document).ready(function () {
    jQuery('body').addClass('sub-page');
    theme.init();

    // add active class to programme menu
    jQuery('ul.sf-menu li:nth-child(2)').addClass('active');

    var animatedModal = jQuery("#animatedModal");

    var descriptions = {
        'conf-sandro':      '<h1>The long road / La route est longue</h1><p>Choisir ses changements de carrière dans une industrie qui mute si souvent n\'est pas une mince affaire. Nous traiterons ici de l\'importance de ce choix, quels critères observer, et quand activer ces changements de carrière pour atteindre le rôle de nos rêves.</p>',
        'conf-ricaud':      '<h1>Stigmergie : fourmis, auto-organisation et collaboration à grande échelle</h1><p>Si le modèle concurrentiel crée des redondances et gâche des ressources sur la protection des idées, la publicité et autre, le modèle coopératif gâche beaucoup de temps et de ressources à discuter (et à discuter les discussions). Entre ces deux modèles, la stigmergie, une nouvelle méthode de gouvernance inspirée du mode d\'organisation des insectes sociaux, pourrait offrir un modèle alternatif plus adapté à la collaboration dans des grands groupes.</p><p><b>Lilian Ricaud</b> : Chercheur, consultant, formateur avec une approche écosystémique de la coopération.</p>',
        'conf-loudin':      '<h1>Refactorisation de code : comment intégrer à sa roadmap produit ?</h1><p></p>',
        'conf-rossignol':   '<h1>Agile Smells</h1><p>Ajouter une nouvelle colonne à votre kanban board, décaler le daily standup, sortir de rétrospective avec l\'action \"être plus rigoureux\", ou encore empiler les coachs agiles, doivent être pour vous des alertes sur le fait que vos équipes déplacent un problème ou ne se posent pas les bonnes questions.</p><p>Je vous propose, au travers de situation réellement vécues, de faire un tour d\'horizon des dérives, des fausses bonnes idées ou simplement des phrases prononcées qui peuvent vous amenez à vous dire que quelque chose sent mauvais.</p>',
        'conf-cockburn-workshop':    '<h1>Workshop</h1><p></p>',
        'conf-gaillot':     '<h1>Des promesses, toujours des promesses...</h1><p></p>',
        'conf-rageade':     '<h1>Le Lab Oratoire du Dr. Frankenstein</h1><p></p>',
        'conf-stauder':     '<h1>L\'agilité ça marche aussi dans mon Codir !</h1><p></p>',
        'conf-humphreys':   '<h1>Help! ma mère est un coach</h1><p>Ou comment je m\'exerce sur ma famille avant d\'accompagner les équipes...</p><p><b>Vanessa Humphreys</b> : Consultante, facilitatrice et formatrice, passionnée de coaching et d\'innovation. Facilitatrice en intelligence organisationnelle. Accompagnatrice de projets collaboratifs et accélératrice d\'innovation.</p>',
        'conf-cabanne':     '<h1>Le manager agile : un père, un héros, un coach ou un bourreau ?</h1><p>Changer de posture de management pour manager des équipes agile, ce n\'est pas facile ! Comment agir ? Les laisser faire, les guider, les diriger ? Je fais le parallèle entre un père de famille et un manager d\'équipe qui cherche l\'autonomie de ses équipiers comme de ses enfants tout en leur prodiguant la meilleure des éducations et en les poussant à l\'excellence. Lors de cette conférence, je vais faire le parallèle entre éducation positive et management agile. Je vais parler de la recherche d\'autonomie des équipes et de quelle posture adopter pour favoriser à la fois l\'autonomie et à la fois l\'apprentissage.</p><p><b>Benjamin Cabanne</b> : Coach agile et facilitateur. Avec ma casquette de coach, j\'accompagne les humains, les équipes et les organisations à se poser leurs bonnes questions agiles pour définir leur chemin et s\'engager dessus. Avec ma casquette de facilitateur, j\'accompagne les humains, les équipes et les organisations à mettre plus de plaisir et plus de collectif dans leurs engagements de tous les jours. Issu du monde du développement logiciel, j\'ai vécu et appris de l\'intérieur et compris la nécessité de l\'agilité. Issu également du sport en compétition, j\'ai une appétence particulière pour l\'apprentissage par le test and learn.</p>',
        'conf-goyard':      '<h1>Je Thaï ma route</h1><p>Aujourd\'hui salarié en France, et j\'ai l\'opportunité de vivre et travailler depuis la Thailande environ un moi sur deux. Je fais donc des aller/retour entre Bordeaux et Chiang Mai en Thailande depuis un an et demi. Je souhaite donc présenter ce mode de vie et de travail au travers de mon expérience, je parlerais de visas, de trajet, de vie, de travail ... et plein d\'autres choses.</p>',
        'conf-cockburn-keynote':    '<h1>template</h1><p></p>',
        'conf-grobmeier':    '<h1>How to code your life</h1><p></p>',
        'conf-lemaire':    '<h1>Dette technique et entropie logicielle</h1><p></p>',
        'conf-barralon':    '<h1>Ne créez pas un produit inutile ! Concentrez vous sur la valeur</h1><p></p>',
        'conf-urvoas':    '<h1>La clinique agile du Dr House</h1><p></p>',
        'conf-cauwenberghe-workshop':    '<h1>Concurrent algorithms</h1><p></p>',
        'conf-c-faure':    '<h1>Votre attention s\'il vous plaît</h1><p></p>',
        'conf-blanc':    '<h1>Clean Code – Comment coder propre</h1><p></p>',
        'conf-bailly':    '<h1>Du mode d’existence du code</h1><p></p>',
        'conf-f-faure':    '<h1>Le Work Hackisme est un humanisme</h1><p></p>',
        'conf-bossavit':    '<h1>L\'enfance perpétuelle : survivre dans une industrie qui croit toujours au Père Noël</h1><p></p>',
		'conf-cloture-J1':    '<h1>template</h1><p></p>',

		'conf-cauwenberghe-pleniere':    '<h1>Real options</h1><p></p>',
        'atelier-aimetti':    '<h1>Coaching Dojo</h1><p></p>', 
        'atelier-labasse':    '<h1>Lego pour les vrais projets de la vrais vie</h1><p></p>',
        'atelier-durand':    '<h1>Business Value Game</h1><p></p>',
        'atelier-froville':    '<h1>Lean startup snowflakes</h1><p></p>',
        'atelier-salazar':    '<h1>Passez à l\'action avec l\'improvisation !</h1><p></p>',
        'atelier-cranford':    '<h1>Coding Gouter</h1><p></p>',
        'atelier-gaillot':    '<h1>Open Space</h1><p></p>',
        'conf-cloture-J2':    '<h1>template</h1><p></p>'
	};

    jQuery('.modalLink').each(function(index, element) {
        jQuery(element).on('click', function(event) {
            var id = jQuery(event.currentTarget).attr('id');
            animatedModal.find('.modal-content').html(descriptions[id]);
        });

        jQuery(element).animatedModal({
            animatedIn:'fadeIn',
            animatedOut:'fadeOut',
            animationDuration:'.3s',
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
