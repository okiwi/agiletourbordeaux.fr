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

    const confDusseaut = `<h1>L’ordre sans le pouvoir</h1>
    <p>10 ans d’agile tour, eXtreme Programmer depuis plus longtemps encore. Je vais prendre cette opportunité pour étudier avec vous, ce que l’agilité a voulu dire et veut dire pour moi.</p>`;

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
    const confAzeau = `<h1>Conception émergente : l'art de coder sans savoir où l'on va ?</h1>
    <p>"Si on avait su, on l'aurait codé autrement", "J'ai codé un truc générique pour faciliter les futurs changements", "L'architecture est à revoir complètement si on veut prendre en compte ce cas là" Qui a déjà développé un logiciel sans jamais entendre ce genre de phrase ?</p>
    <p>Le développeur semble sans cesse naviguer entre le regret du code existant -parce qu'il faut bien faire avec- et l'attirance d'un code futur, toujours plein de promesses.</p>
    <p>Au cours d'une présentation interactive où vous ferez, collectivement et en direct, des choix de conception, je vous propose de visiter quelques pratiques de développement visant à faciliter l'émergence d'un code que l'on va pouvoir faire durer tout en restant focalisé sur les besoins immédiats.</p>`;
    const confFedou = `<h1>Stratégie de test : la faire bien pour en faire moins</h1>
    <p>Une stratégie de tests, on sait tous que c’est nécessaire, mais sans forcément savoir à quoi ça ressemble.</p>
    <p>Une stratégie de tests est la façon de s’organiser pour montrer qu’une application est de qualité suffisante pour aller en production. Il ne s’agit donc pas d’un inventaire de tests manuels ou automatisés, mais d’un raisonnement avec des choix et des renoncements.</p>
    <p>Dans cette présentation nous verrons comment une stratégie de tests vise à optimiser la confiance et les preuves de qualité dans le cadre du développement d’un produit agile.</p>`;
    const confMonville = `<h1></h1><p></p>`;
    const confLemaire = `<h1>Entre industrialisation et artisanat, le métier de développeur</h1><p></p>`;
    const confHumphreys = `<h1>Les émotions dans le monde professionnel</h1>
    <p>Venez assister à une expérience inédite : La fabuleuse Docteur Alice va expérimenter / analyser devant vous le phénomène unique de la Vanessa dont le comportement professionnel intrigue - serait-elle assez folle pour exprimer ses émotions au travail ?</p>`;
    const confPascaud = `<h1>Et si nous faisions quelque chose de nos réunions ?</h1>
    <p>Savez vous ce qu’est une réunion magique ? Si si vous les connaissez. Vous avez certainement déjà participé ou animé des telles réunions. Cherchez un peu, vous allez vous en rappeler. Qu’est ce qui d’après vous peut bien rendre une réunion magique ? Cet artefact qui, vous l’avouerez bien, a de plus en plus tendance à produire de moins en moins de valeur.</p>
    <p>Alors que peut on faire pour que nos réunions aboutissent à quelque chose ? Comment peut on maximiser la valeur que nous apportons pendant les réunions ? Nous le découvrirons ensemble autour d’ateliers et de mise en pratique.</p>`;
    const confJakubowski = `<h1>Sur le chemin de la qualité : en équipe et dès demain !</h1>
    <p>Ça y est ! C’est décidé ! Vous allez construire des applications de meilleure qualité. Vous êtes convaincu•e que, pour cela, certaines pratiques de développement sont fondamentales comme par exemple les revues de code ou les tests unitaires automatisés.</p>
    <p>Mais le problème, c’est que vos collègues n’en font pas. Parce que « c’est trop cher on n’a pas le temps », « je ne connais pas », « on ne m’écoutera pas », « ça ne marchera pas chez nous », « je crains les remarques sur mon code »…</p>
    <p>Comment aider votre équipe ?</p>
    <p>Après cette conférence, quand vous reviendrez sur votre plateau projet, vous aurez quelques éléments à essayer tout de suite. Et peut-être de quoi élaborer un plan de bataille pour que vous et votre équipe soyez fiers de votre code et ainsi conquérir le monde ! 😉</p>`;
    const atelierPizza = `<h1>Kanban Pizza Game</h1><p>Venez découvrir, comprendre et pratiquer le Kanban et quelques concept Lean dans un atelier de fabrication de Pizza !</p>`;
    const atelierConter = `<h1>Livrer sans savoir ou savoir sans livrer, quelle est ta question</h1>
    <p>L’agile c’est simple : on se synchronise et on avance !</p>
    <p>Ok, et ça donne quoi quand il faut s’accorder avec les architectes, l’expert en cyber-sécurité, les gars du hardware, l’équipe infra … ?</p>
    <p>Qui doit parler de quoi, avec qui et quand ? </p>
    <p>Est-on en train de prendre la bonne décision au bon moment ?</p>
    <p>Nous vous proposons d’expérimenter une technique visuelle baptisée pull scheduling board que nous déployons avec succès depuis bientôt 5 ans dans le cadre de développement de produits </p>
    <p>
    Avec cette pratique lean vous découvrirez :
    <ul>
        <li>comment accélérer vos interactions créatrices de valeur en les orientant sur les bonnes questions à poser dans le bon ordre,</li>
        <li>comment sécuriser vos décisions en connaissance de cause,</li>
        <li>comment faciliter l’auto-organisation en rendant visible contenu et rythme des questions et des interactions nécessaires pour y répondre.</li>
        <li>comment en tirer profit dans votre agilité à l’échelle.</li>
    </ul>
    </p>`;
    const confDetant = `<h1>Test && Commit || Revert</h1><p></p>`;
    const confIa = `<h1>L'Intelligence Artificielle va-t-elle changer l'agilité ?</h1><p>L'IA et ses ramifications change profondément le paradigme du développement logiciel en passant d'une pratique algorithmique à une pratique  d'apprentissage. Cette session propose de parcourir les impacts de la réalisation d'application à base d'intelligence artificielle sur les pratiques agiles historiques tels que l'intégration continue, le refactoring, le pair programming, le TDD. etc</p>`;
    const confPecoul = `<h1>The software evolution hasn't happened yet</h1>
    <p>On nous parle depuis longtemps de la fameuse loi de Moore, mais pourquoi cette loi ne semble s’appliquer qu’au Hardware et pas au Software ? S’il existe une ingénierie de l’informatique, alors pourquoi les programmeurs n’arrivent pas à trouver des méthodes scientifiques qui produisent un logiciel robuste, dans un délai et un coup raisonnable ? Qu’est ce qui peut être si compliqué dans le fait de traduire un besoin métier en une série d’instructions non ambiguës compréhensibles par un ordinateur ? Durant cette présentation, j’aimerais introduire quelques hypothèses pour répondre à ces questions. Le but est de challenger nos pratiques ainsi que notre compréhension de ce qu’est un logiciel et un développeur, dans le but de nous améliorer. Je vous préviens : vous aurez plus de questions en repartant qu’en arrivant, mais heureusement l’important c’est le voyage, pas la destination.</p>`;
    const confBrunet = `<h1>L'entreprise libérée : La théorie de l'évolution des organisations</h1>
    <p>Voilà un concept qui fait parler de lui. L'entreprise libérée, soit on aime, soit on déteste. Je t'aime, moi non plus.</p>
    <p>Mais au final de quoi parle-t-on vraiment ? Suffit-il d'un baby foot et d'un open space pour être une entreprise libérée ? Quelles sont les ingrédients magiques à créer cette philosophie ?</p>
    <p>Je vous embarque dans un voyage, comme Darwin sur le navire Beagle, afin de découvrir l'évolution des organisations et comment on en est arrivé à l'entreprise libérée.</p>`;
    const keynoteCloture = `<h1></h1><p></p>`;
    const confThibault = `<h1>En finir avec la “dette technique”</h1>
    <p>Ward Cunningham a nommé "Technical Debt" le procédé qui consiste à déroger temporairement à ses standards de qualité en vue de gagner du temps dans la réalisation d'un objectif intermédiaire. Au cours de la dernière décennie, l'expression est devenue très populaire, tout en perdant son sens initial.  Elle est désormais utilisée pour désigner l'état d'une solution jugée non conforme à l'état de l'art généralement admis dans notre industrie, et pour souligner le fait que c'est cette non-qualité qui ralentit la progression de l'équipe aux prises avec cette solution. La plupart des équipes de développement ne contractent pas délibérément de dette technique. Elles subissent, ou créent passivement, de la dette technique.</p>
    <p>Dans ce contexte le terme "Dette Technique" ne contribue en rien à clarifier l'état de ce qu'il est censé décrire. Il ne veut plus rien dire. Nous devons donc trouver un modèle alternatif qui nous donne une meilleure façon de parler de cet état des choses que nous appelons une solution "endettée" si nous voulons contribuer à l'améliorer.  C'est ce que je me propose de faire durant cette présentation.</p>`;
    const confLambert = `<h1>Une semaine dans ma peau de testeur agile</h1>
    <p>Le testeur, ou le QA, on voit très bien ce qu'il fait avant le passage à l'agilité : il teste... Plus précisément, il valide les changements, il vérifie la non-régression, et puis il fait aussi d'autres trucs à côté.</p>
    <p>Par contre que fait-il maintenant qu'on travaille en agile ? Ce n'est évident pour personne, d'autant plus qu'on l'a intégré dans l'équipe agile. Comment peut-il bien faire tout ce qu'il faisait avant mais désormais en juste une itération ? Et puis on n'arrête pas de parler d'automatisation des tests, a-t-on vraiment encore besoin de testeur ?</p>
    <p>Pourquoi ne pas répondre à ces questions en suivant un testeur agile pendant une semaine ? Pendant une semaine, vous allez voir à quoi ressemble le quotidien d'un testeur agile, voir ce qu'il fait de ses journées, voir toute la valeur qu'il ajoute à l'équipe sans se positionner pour autant en garant de la prod.</p>
    <p>Je suis un agiliste auto-didacte et j'ai d'ailleurs un avis très mitigé sur les certifications. Loin de tout dogmatisme, attendez-vous à voir avant tout du retour d'expérience, du vécu. Le tout sur le ton de l'humour et du troll !</p>
    <p>Vous verrez que le rôle de testeur agile est plein de subtilités. Contrairement à ce qu'on pourrait imaginer il a énormément de travail et la plupart des équipes gagneraient à un avoir un !</p>`;
    const confCranford = `<h1>Agile Sex</h1><p>L'agilité se vie comme une vie sexuelle. Les deux ont des buts et des pratiques en commun, autant que de résultats similaire. Ça peut se bien passer comme ça peut très mal se passer. Quelques idées et astuces pour que les résultats soient les bons</p>`;
    const confYoteau = `<h1>Pourquoi le DevOps concernent pas que les Dev/Ops</h1>
    <p>On entend tout autour du DevOps. "Le DEVOPS, c'est tout automatiser". "Le DevOps, c'est cassé le mur de l'imcompréhension entre Dev et Ops". OK mais Pourquoi? A travers, quelques exemples, je vais vous montrer comment la collaboration entre Dev et Ops rends service à tous les métiers de l'entreprise.</p>`;
    const confStEtienne = `<h1>10 years challenge: comment vivre avec le même code</h1><p>Pour la grande majorité des développeurs (ceux ci étant en majorité employés dans des ESN) les projets s'enchainent et ne se ressemblent pas tous. Et il y a ce fameux turn-over. J'ai connu cela durant mes 15 premières années de carrière. Et tout d'un coup, l'âge de raison sûrement, me voici pris dans une aventure de long terme. Déboussolant ou rassurant? Peut être les deux. Mais cela ne s'est pas fait par hasard. Laissez moi vous raconter ce qui m'a permis de rester contre tout attente avec la même équipe et le même code. Ce qui a fait que 10 ans passèrent très vite, sans le temps de sentir la routine et avec comme défi permanent de construire pour durer.</p>`;
    const atelierCassini = `<h1>Bien réussir sa rétrospective</h1>
    <p>Cérémonie mal aimée, mal comprise, mal utilisée ou pas adaptée à votre contexte actuel, à chaque fin de sprint celle-ci est pourtant une des plus importantes et doit rebooster vos troupes.</p>
    <p>Attendez vous à du concret pour ré-apprivoiser cette cérémonie et lui redonner du sens mais également à repartir avec de nouvelles clés pour réussir vos rétrospectives.</p>`;
    const atelierAllaire = `<h1>Découvrez Haskell avec cette introduction à la programmation fonctionnelle</h1>
    <p>Les fonctionnalités de programmation fonctionnelle sont de plus en plus présentes dans les langages impératifs, orienté objet. Mais qu'est-ce que la programmation fonctionnelle au juste ? Nous partirons de cette définition pour introduire Haskell un langage purement fonctionnel. A partir d'une fonction anodine nous déroulerons plusieurs phases de refactoring pour faire émerger l'abstraction sous-jascente. (Aucun pré-requis nécessaire en Haskell) A la fin de ce talk vous saurez écrire un petit programme en Haskell et vous aurez découvert de nouvelles armes pour refactorer votre code.</p>`;
    const confMoura = `<h1>La théorie sociale de Bourdieu et la tech</h1><p></p>`;
    const confAvoustin = `<h1>Mind The Gap</h1>
    <p>La collaboration entre experts techniques et experts du domaine métier n’est pas toujours évidente. On a parfois l'impression que chacun vit sur sa planète, avec des objectifs et des rythmes très différents. Or, arriver à les faire collaborer pour que le besoin de l’un soit solutionné par l’autre est un des enjeux majeurs de notre métier.</p>
    <p>Très tôt, avec l’agile, beaucoup de bonnes pratiques et d’ateliers ont émergé pour tenter de réduire cet écart. Les User Stories avec leur critère d’acceptation, les ateliers de Story Mapping, ou de Sprint Planning en sont des exemples. Mais ils ne solutionnent pas tous les problèmes, notamment ceux liés à la conception même du produit.</p>
    <p>Je vous propose donc de découvrir quelques pratiques et ateliers à ajouter dans votre boite à outils, et à tester dès demain, pour améliorer la communication entre experts techniques et experts du domaine, les amener à collaborer plus efficacement, et faciliter le travail de conception de la solution.</p>`;
    const confSaillofest = `<h1>Danse ton chemin agile</h1>
    <p>Je pourrais vous parler de danse swing, mon loisir préféré, pendant des heures. Je peux avoir des débats enflammés sur l’agilité, mon sujet professionnel préféré, pendant des heures.</p>
    <p>Quel lien entre les deux?</p>
    <p>J’ai appris dans mon parcours de danseuse qu’il n’est pas facile d’évaluer son propre niveau, que le niveau ressenti et la réalité sont parfois bien différent. Quel effort fournir pour quel résultat? C’est un parcours d’humilité et de recherche d’excellence que j’ai retrouvé dans mon chemin agile. </p>
    <p>J’ai choisi de vous parler, pendant moins d’une heure ;-), de chemin d’apprentissage agile en faisant un parallèle avec mon parcours de danseuse.</p>
    <p>Est-ce que je me sens débutante? Avancée? Jusqu’où je souhaite aller? Amatrice éclairée ou professionnelle aguerrie?</p>
    <p>Est-ce que mon équipe, mon organisation est débutante, mature? Qu’est-ce que nous souhaitons qu’il arrive? Quel effort sommes nous prêt à investir pour que cela arrive? </p>`;
    const confAubert = `<h1>L'intégration (dis-)continue</h1><p>Présentation des principes et bonnes pratiques de l'intégration continue (code sources, livrables, environnements). Que doit-on/peut-on automatiser ? Que faire quand certaines actions restent manuelles ? Comment outiller l'intégration discontinue ? (ce descriptif pourrait évoluer un peu dans sa version finale)</p>`;
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
