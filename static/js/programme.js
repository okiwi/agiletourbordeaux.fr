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

        'conf-gaillot':     '<h1>Des promesses, toujours des promesses...</h1><p>Le concept de promesse en programmation (" Promise " en anglais) n\'est pas nouveau — mais, comme beaucoup de choses, il a suscité un regain d\'attention quelques trente-cinq ans après son invention, avec la programmation de clients web : les promesses permettent en effet de coder élégamment le séquencement de comportements asynchrones.</p><p>Si les promesses, vues de loin, semblent assez simples à utiliser, l\'affaire n\'est pas si simple quand il s\'agit d\'en comprendre leur fonctionnement dans les détails pour en implémenter le mécanisme.</p><p>L\'ambition de cette session tient de celle de descendre une piste noire verglassée en monoski : programmer en un temps ridiculement restreint un mécanisme de promesses en JavaScript, dans l\'espoir de comprendre comment ça fonctionne vraiment. Et peut-être d\'apprendre deux-trois choses au passage sur TDD, la lecture de code, et la philosophie hégélienne.</p><p>Cette session propose d\'explorer un sujet non-trivial dans l\'espoir de rappeler aux agilistes que l\'acte de programmation n\'est pas un simple expédient, et mérite d\'être célébré en tant que tel.</p><p>Elle propose aussi d\'explorer un nouveau format pédagogique, dans lequel il s\'agit de faire passer une batterie de tests écrits d\'avance et qui décrivent par l\'exemple la norme complète des promesses. Les animateurs de la session cherchent ainsi à vérifier par l\'expérience dans quelle mesure un·e technicien·ne peut s\'approprier un concept non-trivial uniquement par l\'exemple.</p><p>Les participant·e·s sont invité·e·s à venir avec leur ordinateur portable pour coder pendant la session.</p><p>---</p><p><b>Emmanuel Gaillot</b> intervient en tant qu’accompagnateur d’équipes, animateur de réunions, formateur, programmeur extrême, codexhibitionniste et agitateur public. Il est un spécialiste de la gestion de projet incrémentale, des structures émergentes et des espaces de co-apprentissage. Par le biais d\'armes non-conventionnelles, il aide les équipes produisant du logiciel à être plus efficaces dans leur travail, plus fières de leurs résultats et plus heureuses en général. Orateur régulier à de nombreuses conférences sur l’agilité, co-organisateur de la première conférence sur le sujet en France, Emmanuel organise également la conférence annuelle Agile Open France. Il est l’un des fondateurs du Dojo de développement de Paris. Emmanuel est un des associés de la société (coopérative ouvrière de production) /ut7.</b>',
        'conf-rageade':     '<h1>Le Lab Oratoire du Dr. Frankenstein</h1><p></p>',
        'conf-stauder':     '<h1>L\'agilité ça marche aussi dans mon Codir !</h1><p></p>',
        'conf-humphreys':   '<h1>Help! ma mère est un coach</h1><p>Ou comment je m\'exerce sur ma famille avant d\'accompagner les équipes...</p><p><b>Vanessa Humphreys</b> : Consultante, facilitatrice et formatrice, passionnée de coaching et d\'innovation. Facilitatrice en intelligence organisationnelle. Accompagnatrice de projets collaboratifs et accélératrice d\'innovation.</p>',
        'conf-cabanne':     '<h1>Le manager agile : un père, un héros, un coach ou un bourreau ?</h1><p>Changer de posture de management pour manager des équipes agile, ce n\'est pas facile ! Comment agir ? Les laisser faire, les guider, les diriger ? Je fais le parallèle entre un père de famille et un manager d\'équipe qui cherche l\'autonomie de ses équipiers comme de ses enfants tout en leur prodiguant la meilleure des éducations et en les poussant à l\'excellence. Lors de cette conférence, je vais faire le parallèle entre éducation positive et management agile. Je vais parler de la recherche d\'autonomie des équipes et de quelle posture adopter pour favoriser à la fois l\'autonomie et à la fois l\'apprentissage.</p><p><b>Benjamin Cabanne</b> : Coach agile et facilitateur. Avec ma casquette de coach, j\'accompagne les humains, les équipes et les organisations à se poser leurs bonnes questions agiles pour définir leur chemin et s\'engager dessus. Avec ma casquette de facilitateur, j\'accompagne les humains, les équipes et les organisations à mettre plus de plaisir et plus de collectif dans leurs engagements de tous les jours. Issu du monde du développement logiciel, j\'ai vécu et appris de l\'intérieur et compris la nécessité de l\'agilité. Issu également du sport en compétition, j\'ai une appétence particulière pour l\'apprentissage par le test and learn.</p>',
        'conf-goyard':      '<h1>Je Thaï ma route</h1><p>Aujourd\'hui salarié en France, et j\'ai l\'opportunité de vivre et travailler depuis la Thailande environ un moi sur deux. Je fais donc des aller/retour entre Bordeaux et Chiang Mai en Thailande depuis un an et demi. Je souhaite donc présenter ce mode de vie et de travail au travers de mon expérience, je parlerais de visas, de trajet, de vie, de travail ... et plein d\'autres choses.</p>',

        'conf-cockburn-keynote':    '<h1></h1><p></p>',
        'conf-grobmeier':    '<h1>How to code your life</h1><p></p>',

        'conf-lemaire':    '<h1>Dette technique et entropie logicielle</h1><p>Souvent mal comprise et confondue avec l\'érosion du logiciel, la dette technique a mauvaise presse. Elle reste pourtant un processus essentiel (si maitrisé correctement) lors des développements. A contrario, l\'entropie logicielle est un phénomène naturel conduisant progressivement le logiciel à perdre en maintenabilité et évolutivité. Nous étudierons les causes d\'accélération de cette entropie, mais surtout, comment combattre ce processus qui finit par bloquer l\'évolution du logiciel (et au passage sa rentabilité) ? Une conférence ouverte à tous (y compris non développeurs), pour s\'intéresser à pourquoi et comment le code source d\'un logiciel finit par être immaintenable.</p>',
        'conf-barralon':    '<h1>Ne créez pas un produit inutile ! Concentrez vous sur la valeur</h1><p>"Il n’y a rien de plus inutile que de faire avec efficacité quelque chose qui ne doit pas du tout être fait." - Peter Drucker. Cette phrase vous parle ? Et bien venez ! Nous parlerons de la vie du produit, de son idée à sa mise sur le marché en se concentrant sur la VALEUR... #LeanStartup #LeanEntreprise</p>',
        'conf-urvoas':    '<h1>La clinique agile du Dr House</h1><p>Retrouvez le dernier épisode du Dr House dans lequel son équipe soigne une organisation atteinte d\'un mal non identifié. Ce format décalé est l\'occasion de revisiter et prendre du recul sur une transition Agile au sein d\'une entreprise de 1600 personnes.  L\'équipe du Dr House alterne partage d\'expérience et apports théoriques en revisitant et vulgarisant des concepts essentiels à toute transformation agile (approche systémique, solution focus, change management, culture d\'entreprise, ....).</p><p>Dr House (<b>Jérôme Urvoas</b>, Coach agile chez Lectra) Après plus de 10 ans passés à développer et encadrer des équipes de développement logiciel (Start Up, SSII, Editeur de Logiciel) , Jérôme accompagne depuis 8 ans les équipes Lectra dans la transformation Agile et Lean. Il a complété son cursus en 2016 par une formation en Coaching en Entreprise.  Dr Chase (Nicolas Poncet, Coach agile chez Lectra) Nicolas accompagne les équipes Lectra depuis 2014, fort de plus de 15 ans d’expérience en management de projets et d’équipes de développement logiciel dans des contextes variés (Bouygues Telecom/SSII, Agile ou non).</p>',

        'conf-cauwenberghe-workshop':    '<h1>Concurrent algorithms</h1><p></p>',

        'conf-c-faure':    '<h1>Votre attention s\'il vous plaît</h1><p>Christian Fauré présente les nouveaux enjeux de l\'attention dans le contexte digital, à la lumière d\'un éclairage pluridisciplinaire. Sont convoqués : le marketing, le management, la psychanalyse, la philosophie, les neurosciences et même les premiers penseurs chinois. Attention, vous risquez d\'être manipulés !</p>',
        'conf-blanc':    '<h1>Clean Code – Comment coder propre</h1><p>Le Clean Code est un ensemble de bonnes pratiques permettant de coder proprement quel que soit le langage de programmation. Le Clean Code répond aux questions de base du développeur et pose les bases d\'une programmation efficace et utile. En effet, si on code pour répondre uniquement aux besoins exprimés dans le cahier des charges, alors on aboutit inexorablement à écrire du code de mauvaise qualité, difficilement debuggable et maintenable. Une application mal codée convient pour un temps à ses utilisateurs, mais à terme, elle est condamnée à ne pas pouvoir évoluer. Coder proprement c\'est produire un code lisible, efficace et facilement modifiable. Une application avec un code propre peut évoluer rapidement et ainsi satisfaire ses utilisateurs sur le long terme.</p><p>Xavier Blanc est professeur à l\'Université de Bordeaux. Il possède une solide connaissance dans le domaine du génie logiciel et plus particulièrement dans la maintenance et l\'évolution logicielle. Nommé au LaBRI (Laboratoire Bordelais de Recherche en Informatique) en 2010, il a eu la charge de monter une équipe de recherche dans ce domaine. Cette équipe est aujourd\'hui reconnue au niveau international grâce aux résultats de recherche obtenus. Xavier Blanc a été nommé membre junior de l\'Institut Universitaire de France en 2015.</p>',
        'conf-bailly':    '<h1>Du mode d\'existence du code</h1><p></p>',
        'conf-f-faure':    '<h1>Le Work Hackisme est un humanisme</h1><p></p>',
        'conf-bossavit':    '<h1>L\'enfance perpétuelle : survivre dans une industrie qui croit toujours au Père Noël</h1><p></p>',
		'conf-cloture-J1':    '<h1>template</h1><p></p>',

		'conf-cauwenberghe-pleniere':    '<h1>Real options</h1><p>L\'analyse par les Options Réelles est une technique qui permet de prendre des décisions sur les décisions. C\'est cool, c\'est meta. Mais quel est l\'intéret pour l\'équipe au quotidien ? Vous prenez plein de décisions chaque jour comme développeur ou architecte. Des décisions qui peuvent couter cher. Les Options Réelles ne sont pas très compliquées, cela s\'explique en quelques minutes. Mais en appliquant les Options Réelles sur les projets informatiques et sur \'architecture des logiciels j\'ai découvert que plein de choses que je croyais vraies ou qui me semblaient intuitivement correctes étaient fausses. J\'illustre chaque technique avec des exemples qui viennent de projets auxquels j\'ai participé les dernières années, ou bien de la vie de tous les jours. Découvrez une autre façon de voir les décisions, des techniques simples pour gérer des projets ou définir une architecture de logiciel. Vous découvrirez peut-être que vous aussi croyez des choses qui sont fausses. Au minimum vous entendrez quelques histoires belges... :-)</p>',
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
