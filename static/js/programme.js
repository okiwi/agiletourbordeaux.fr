jQuery(document).ready(function () {
    jQuery('body').addClass('sub-page');
    theme.init();

    // add active class to programme menu
    jQuery('ul.sf-menu li:nth-child(1)').addClass('active');

    var animatedModal = jQuery("#animatedModal");
    var toTopButton = jQuery(".to-top");

    const confAppelo = `<h1>Shakeup and Speedup</h1>
    <p>Shifting up the Innovation Funnel (for businesses that want to change and innovate faster)</p>
    <p>Starting new teams and scaling up innovation is more important than ever. The key to success
    is applying different practices in different stages of the innovation lifecycle. What works for a
    new business does not work for a mature one, and vice versa. In this talk, we will nosedive into
    the major good practices for business leaders and product teams, from the moment they have
    an innovative idea to the day they will scale it up (or screw it up). Everything depends on the
    lifecycle stage of the new product or service</p>`;

    //`<h1></h1><p></p>`

    const confDusseaut = `<h1>L'articulation Craftsmanship/agilité</h1>`;

    const confSanglanCharlier = `<h1>Mob programming, promesse tenues ?</h1><p>Le Mob Programming consiste à regrouper une équipe entière dans une pièce équipée d'un seul poste de travail pour tout le monde. Cette pratique vous promet entre autres une productivité accrue alors qu'une seule personne à la fois ne peut toucher le clavier ! Promesses tenues ?</p>`;

    const confMy = `<h1>A la chasse des voleurs de temps</h1>
    <p>Dans ce monde VUCA en mouvement permanent, notre capacité à répondre à une demande évoluant sans cesse est devenue un enjeu majeur de survie aussi bien dans la sphère professionnelle que dans la sphère personnelle. En effet, le temps est devenu aujourd'hui une ressource rare et précieuse.</p>
    <p>Comment organiser son temps afin de prendre les bonnes décisions, au bon moment ? Comment s'assurer de ne pas gaspiller son temps sur des choses qui n'en valent pas la peine ? Comment devenir acteur de son temps plutôt que d'être victime de son manque ?</p>
    <p>Inspiré des travaux de Dominica DeGrandis dans son livre intitulé "Making work visible", je vous propose de dénicher ces voleurs de temps qui nous empêchent d'être efficaces et productifs afin de pouvoir mieux vous en défaire ! </p>`;

    const confMartin = `<h1>Organiser l'Agilité dans une entreprise en hyper-croissance</h1>
    <p>Manomano est passé de 5 features teams sur un lieu (Paris) à 15 features teams sur trois lieux (Barcelone, Bordeaux, Paris) sur les 18 derniers mois. Et il est prévu de doubler sur l'année prochaine.</p>
    <p>En tant que premier coach agile interne, je vous raconterai comment organiser l'agilité dans ce contexte : équipes, outils, principes...</p>`;

    const atelierUrvoas = `<h1>Hackez votre cerveau avec l'intelligence collective</h1>
    <p>Marre des réunions et workshops ennuyeux et stériles?</p>
    <p>Venez hacker votre cerveau et mettre en pratique plusieurs principes d'intelligence collective à travers un atelier participatif et ludique. </p>`;

    const atelierCadilhac = `<h1>TDD React</h1>
    <p>La pratique du TDD peut changer votre vie de développeur. True story. Au programme de cet atelier : du développement 100% TDD, en Javascript sur du React.</p>
    <p>Nous partirons d’une feuille blanche et construirons une application de répartition de dépenses : Jim a payé 150 euros de courses pendant les vacances, combien lui doivent Pam et Michael ?</p>
    <p>Comment choisir le premier test ?</p>
    <p>Quels outils pour être efficace ?</p>
    <p>Nous répondrons a toutes ces questions, et bien d’autres.</p>
    <p>Cet atelier est pour vous si :
    <ul>
        <li>vous avez entendu parler de TDD, mais vous doutez que cela fonctionne dans la vraie vie ;</li>
        <li>vous avez commencé TDD, mais vous n’y avez pas trouvé ce que vous espériez ;</li>
        <li>vous pratiquez déjà TDD, et vous avez envie de voir comment ça se passe chez d'autres développeurs ;</li>
    </ul>
    </p>
    <p>Et surtout : vous avez envie de retrouver le PLAISIR de développer.</p>`;

    const confFaure = `<h1>Agilistes et développeur·euse·s sont dans un bateau</h1>
    <p>A la machine à café, j’ai entendu un développeur râler car il devait intégrer une équipe fonctionnant en Scrum. Un autre jour, j’ai croisé un Scrum Master et sa Product Owner qui se plaignaient de leur équipe de dev qui n’allait pas assez vite et qui faisait exprès de gonfler ses estimations.</p>
    <p>Il y a quelque chose de pourri au royaume de l’agilité…</p>
    <p>Comment expliquer cet éloignement entre développeurs et agilistes ? Est-il inexorable ?</p>
    <p>L’objectif ambitieux de cette présentation est d’essayer de réconcilier ces deux populations qui auraient dû rester les deux faces d’une même pièce. On parlera sans doute de Software Craftsmanship, de Domain Driven Design, de dette technique, de refactoring mais aussi de valeur métier, de gemba, etc. </p>
    <p>En sortie de cette session, les POs ne seront peut-être pas des spécialistes du principe de substitution de Liskov, mais connaitront au moins l'existence des principes SOLID. Les devs ne seront peut-être pas capables d'animer un shifumi géant mais ils auront, j'espère, envie d'aller voir et comprendre leurs utilisateurs.</p>`;

    const confHaasser = `<h1>Tempête de boulettes géantes (en prod)</h1><p></p>`;
    const confAzeau = `<h1>Conception émergente : l'art de coder sans savoir où l'on va ?</h1><p></p>`;
    const confFedou = `<h1>Stratégie de test : la faire bien pour en faire moins</h1><p></p>`;
    const confMonville = `<h1></h1><p></p>`;
    const confLemaire = `<h1>Entre industrialisation et artisanat, le métier de développeur</h1><p></p>`;
    const confHumphreys = `<h1>Les émotions dans le monde professionnel</h1><p></p>`;
    const confPascaud = `<h1>Et si nous faisions quelque chose de nos réunions ?</h1><p></p>`;
    const confJakubowski = `<h1>Sur le chemin de la qualité : en équipe et dès demain !</h1><p></p>`;
    const atelierPizza = `<h1>Kanban Pizza Game</h1><p></p>`;
    const atelierConter = `<h1>Livrer sans savoir ou savoir sans livrer, quelle est ta question</h1><p></p>`;
    const confDetant = `<h1>Test && Commit || Revert</h1><p></p>`;
    const confIa = `<h1>L'Intelligence Artificielle va-t-elle changer l'agilité ?</h1><p></p>`;
    const confPecoul = `<h1>The software evolution hasn't happened yet</h1><p></p>`;
    const confBrunet = `<h1>L'entreprise libérée : La théorie de l'évolution des organisations</h1><p></p>`;
    const keynoteCloture = `<h1></h1><p></p>`;
    const confThibault = `<h1></h1><p></p>`;
    const confLambert = `<h1>Une semaine dans ma peau de testeur agile</h1><p></p>`;
    const confCranford = `<h1>Agile Sex</h1><p></p>`;
    const confYoteau = `<h1>Pourquoi le DevOps concernent pas que les Dev/Ops</h1><p></p>`;
    const confStEtienne = `<h1>10 years challenge: comment vivre avec le même code</h1><p></p>`;
    const atelierCassini = `<h1>Bien réussir sa rétrospective</h1><p></p>`;
    const atelierAllaire = `<h1>Découvrez Haskell avec cette introduction à la programmation fonctionnelle</h1><p></p>`;
    const confMoura = `<h1>La théorie sociale de Bourdieu et la tech</h1><p></p>`;
    const confAvoustin = `<h1>Mind The Gap</h1><p></p>`;
    const confSaillofest = `<h1>Danse ton chemin agile</h1><p></p>`;
    const confAubert = `<h1>L'intégration (dis-)continue</h1><p></p>`;
    const openSpace = `<h1>Open Space</h1><p></p>`;

    var descriptions = {
        'conf-appelo':             confAppelo,
        'conf-dusseaut':           confDusseaut,
        'conf-sanglanCharlier':    confSanglanCharlier,
        'conf-o-my':               confMy,
        'conf-martin':             confMartin,
        'atelier-urvoas':          atelierUrvoas,
        'atelier-cadilhac':        atelierCadilhac,
        'conf-faure':              confFaure,
        'conf-haasser':            confHaasser,
        'conf-azeau':              confAzeau,
        'conf-fedou':              confFedou,
        'conf-monville':           confMonville,
        'conf-lemaire':            confLemaire,
        'conf-humphreys':          confHumphreys,
        'conf-pascaud':            confPascaud,
        'conf-jakubowski':         confJakubowski,
        'atelier-pizza':           atelierPizza,
        'atelier-conter':          atelierConter,
        'conf-detant':             confDetant,
        'conf-ia':                 confIa,
        'conf-pecoul':             confPecoul,
        'conf-brunet':             confBrunet,
        'conf-keynoteCloture':     keynoteCloture,
        'conf-thibault':           confThibault,
        'conf-lambert':            confLambert,
        'conf-cranford':           confCranford,
        'conf-yoteau':             confYoteau,
        'conf-stEtienne':          confStEtienne,
        'atelier-cassini':         atelierCassini,
        'atelier-allaire':         atelierAllaire,
        'conf-moura':              confMoura,
        'conf-avoustin':           confAvoustin,
        'conf-saillofest':         confSaillofest,
        'conf-aubert':             confAubert,
        'open-space':              openSpace
	};

    hideModal();
    
    jQuery('.modalLink').each(function(index, element) {
        handleClickEvent(element);
    });

    jQuery('#btn-close-modal').on('click', function(event) {
        hideModal();
    });

    function handleClickEvent(element) {
        jQuery(element).on('click', function(event) {
            var id = jQuery(event.currentTarget).attr('id');
            changeDescription(id);
            showModal();
        });
    }
    
    function showModal() {
        animatedModal.addClass('visible');
        animatedModal.removeClass('vhidden');
        jQuery('body').attr('style', 'overflow: hidden');
        toTopButton.addClass('vhidden');
    }

    function hideModal() {
        animatedModal.addClass('vhidden');
        animatedModal.removeClass('visible');
        jQuery('body').attr('style', 'overflow: auto');
        toTopButton.removeClass('vhidden');
    }

    function changeDescription(id) {
        animatedModal.find('.modal-content').html(descriptions[id]);
    }
});
