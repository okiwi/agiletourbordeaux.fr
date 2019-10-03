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
        'conf-crabe':              '<h1>A la découverte du deep work</h1><p>Dans un monde ou les distractions sont nombreuses (réseaux sociaux, messagerie instantanée, SMS, mails …), la concentration est une denrée précieuse mais qui tend à se raréfier. Pourtant c\'est celle-ci qui peut amener plus de valeur à notre travail.</p><p>L\'agilité prône la protection de l\'équipe de développement des éléments extérieurs qui peuvent perturber son travail. Et si le "Deep work" permettait de protéger l\'équipe de l\'intérieur ?</p><p>Je vous propose au travers de ce lighting talk de vous présenter sommairement ce qu\'est le "Deep work" ainsi que mon expérience de l\'apprentissage difficile mais bénéfique de ce nouveau super pouvoir !</p>',
        'conf-osherove':           '<h1>Growing great teams and adopting new processes through Elastic Leadership</h1><p>As managers, architects, and other types of technical team leaders, you usually study methodologies, practices, and techniques for delivering software.</p><p>Often your learning leaves you a great desire to "change" how things work, but you soon discover that you\'re "stuck". Stuck convincing your team to adopt particular practices. Stuck with too little time to learn how to implement these practices ("we don\'t have time for unit testing"). Stuck with all the people-related aspects of leading a team.In this talk we will cover some of the essential skills and techniques for leading software teams, based on elastic and adaptive leadership principles.</p><p>You will gain insight into the skills that make real change happen in your team, and how to transform the team you have into the team you want.</p><p>Learn about the three basic team modes: Survival mode, Learning mode, and Self Organization mode. Learn how to understand which mode your team is in right now.Learn essential skills for the three modes of leadership you will need for the three phases of the team: Command and control leadership, Coaching and facilitative leadership.Learn how to start changing anything by understanding why people behave the way they do and grasp the six influence forces that affect our behaviour.</p>',
        'conf-leguedois':          '<h1>Cessons les estimations</h1><p>Alors que les estimations sont à la base des méthodes classiques et que dans le domaine Agile, Scrum notamment lui accorde une grande importance, nous allons l’espace d’une conférence remettre en cause celles-ci.</p><p>Après un bref rappel de différentes méthodes permettant de réaliser des estimations et croyances qui y sont attachées, nous prendrons le temps de réfléchir sur les effets néfastes de ces dernières.</p><p>Enfin, nous verrons comment dans la réalité des projets, il est possible de s’en extraire.</p><p>Conférence iconoclaste, sous la forme d’un one man show, afin de réfléchir (et de rire ?) sur un aspect essentiel de l’agilité.</p><p>Ouvert à tout public ayant une première approche des projets de développement logiciel.</p>',
        'conf-humphreys':          '<h1>Si à 40 ans on est pas manager, c\'est qu\'on a raté sa vie</h1><p>Venez rencontrer un manager qui va vous expliquer comment il a réussi sa vie malgré ses burnout, licenciements et divorces.</p>',
        'conf-carnelos':           '<h1>Crafters en 2018 : Revisitez vos fondamentaux</h1><p>En relisant le manifeste du software craftsmanship, comment ses principes peuvent se comprendre aujourd\'hui en 2018 ?</p><p>Je vous propose d\'établir une liste de compétences clés qui feront de nous de meilleurs crafters.</p><p>Parmi ces sujets :<ul><li>&nbsp;&nbsp;&nbsp;&nbsp;- Quelles sont les enjeux sociaux et notre place dans le leading tech</li><li>&nbsp;&nbsp;&nbsp;&nbsp;- Survivre au flot technique permanent</li><li>&nbsp;&nbsp;&nbsp;&nbsp;- Comprendre son combat dans le TDD et le design émergent</li><li>&nbsp;&nbsp;&nbsp;&nbsp;- Pratiquer une revue de code efficace</li><li>&nbsp;&nbsp;&nbsp;&nbsp;- L\'éthique et la responsabilité du développeur</li></ul></p><p>Alors venez challenger vos a priori !</p>',
        'atelier-osherove':        '<h1>Atelier Elastic leadership</h1><p>Une mise en pratique avec des Lego dans la continuité de la Keynote</p>',
        'atelier-agiloparc':       '<h1>Agiloparc, un jeu pour comprendre le rôle de PO</h1><p>Après un petit rappel sur le rôle et les attributions du Product Owner, nous vous présenterons un jeu que nous avons créer pour illustrer les questionnements auxquels se trouve confronter le Product Owner au travers d\'un atelier immersif de priorisation du backlog et de réalisation sous la forme de dessin d\'un parc d\'attractions.</p><p>Soyez le Product Owner d\'un parc d\'attraction : priorisez vos réalisations pour maximiser vos gains mais gare aux aléas.</p>',
        'conf-chapelier':          '<h1>Alice et le Chapelier in Agile-Land</h1><p>Alice et le Chapelier fou re-visitent l\'agilité à Agile-Land à travers son histoire.</p><p>"Voudriez-vous me dire, s\'il vous plaît, quel chemin je dois prendre pour [faire de l\'agilité] ?<br>– Cela dépend beaucoup de l\'endroit où tu veux aller, répondit le chat.<br>– Peu m\'importe l\'endroit...dit Alice.<br>– En ce cas, peu importe la route que tu prendras, répliqua-t-il."</p><p>Rencontre théâtralisée avec Alice et le Chapelier fou qui vivent au Pays des Merveilles ou les valeurs humaines et le respect des individus passent avant les képis-aïe !</p><p>Ou les managers, comme le chat du cheschire s\'éclipsent pour faire place aux principaux protagonistes qui "font" l\'histoire. Nous passeront ensuite "de l\'autre côté du miroir" pour voir ce qu\'il en est vraiment de Pays de l\'Agilité, dans le monde de l\'entreprise.</p><p>Nous vous proposons un parallèle entre l\'aventure d\'Alice racontée par Lewis Caroll et notre aventure au Pays de l\'Agilité. Cette présentation théâtrale permet de revisiter les fondamentaux de l\'agilité en s\'amusant. A l\'issue de cette présentation, les participants seront amenés à s\'interroger sur la voie qu\'ils ont chois pour aller vers leur chemin de l\'agilité.</p><p>Nous trouvons le livre de Lewis Caroll très philosophique et nous aimerions faire des parallèles avec notre histoire et l\'apprentissage que nous avons de l\'agilité.</p>',
        'conf-schneider':          '<h1>Soignons-nous de la réunionnite aiguë</h1><p>"Favorisons les Humains et leurs interactions" qu\'ils disaient !</p><p>Oui, mais... Réunionnite aigüe aussi !</p><p>Bienvenue à vous pour cette session où nous nous interrogerons sur les solutions dont on dispose pour améliorer durablement notre culture des réunions.</p>',
        'conf-mazardo':            '<h1>DevoOoups</h1><p>Les containeurs, les orchestrateurs, les provisionners, le continous delivery, beaucoup d\'outils sont disponibles pour faire du devops. <br>- A qui sont-ils destinés ? <br>- Mais qu\'est-ce vraiment le mouvement devops tant à la mode ?</p><p>De temps en temps développeur, parfois scrummaster, administrateur système en apprentissage, passionné par l\'open source, j\'espère par cette intervention clarifier le mot devops. Mots clés : docker, k8s, ansible, continuous delivery, devops.</p>',
        'conf-pierrain':           '<h1>Et si on parlait un peu Éthique ?</h1><p>j\'ai jamais pu saquer Kant, mais là il faut qu\'on parle...</p><p>Coder, c\'est de plus en plus façonner le monde. Redéfinir ses contours et certaines interactions que nous pouvons avoir (ou pas) entre nous.</p><p>Si certains métiers se sont déjà interrogés par le passé sur leur rôle et leur impact sur la société, il me semble que ces questions d\'éthique ne nous traversent pas encore suffisamment dans la sphère des faiseuses et faiseurs de logiciels.</p><p>Et si on se posait quelques minutes pour faire le tour de certaines d\'entre elles ?</p>',
        'conf-lemaire':            '<h1>Et si on redémarrait l\'agile ?</h1>',
        'conf-urvoas':             '<h1>Le théâtre forum, (dé)jouons ensemble les scènes clichés du merveilleux univers de l’entreprise</h1><p>Notre quotidien professionnel peut ressembler à une véritable pièce de théâtre, tragique ou de boulevard.</p><p>On y retrouve beaucoup d\'acteurs, des situations qui s\'enchaînent, des interactions complexes et parfois des coups de théâtre. Face à tout cela, nos émotions sont mises à rude épreuve et peuvent s\'exprimer de façons variées : rire, colère, tristesse, retrait, ...</p><p>D\'ailleurs vous avez peut-être vous-même rencontré un pair programming qui dérape car la patience n\'est pas de rigueur, un manager un peu trop explosif qui débarque au milieu de l\'équipe, un PO trop absent(*), ...</p><p>Venez plonger dans un atelier ludique et participatif mêlant jeu d\'acteurs (non professionnels), observation et échanges ...</p><p>(*)Les acteurs s\'arrogent le droit à tout moment de changer le scénario en fonction des désidératas de l\'auditoire.</p>',
        'conf-coach-psy':          '<h1>Cultivez votre Agilité dans votre ADN avec l\'union d\'une psy et d\'un coach</h1><p>Nous proposons à tous ceux qui cherchent les méthodes agiles, un atelier au cœur des pratiques du langage verbal indirect (stratégie de langage, paradoxe, discernement) et du langage corporel direct (confrontation, ancrage, adaptation), animé par une psy diplômée des sciences humaines et ancien cadre en recrutement et un coach "martial", lui-même chef d\'entreprise.</p><p>Nous allons mettre en scène l\'agilité dans les organisations à travers les justes valeurs de nos questionnements.</p>',
        'atelier-event-storming':  '<h1>Découvrir Event Storming et le quotidien des développeurs</h1><p>Cet atelier s\'adresse aussi bien à un développeur, un PO qu\'à un expert métier.</p><p>En alternant rapidement des phases d\'échanges sur le métier et d\'implémentation, nous allons : <ul><li>- Découvrir EventStorming</li><li>- Sentir comment il permet d\'aligner la compréhension des Product Owners, des Experts Métiers et des Programmeurs</li><li>- Voir comment écrire un code cohérent avec la vision partagée du métier</li><li>- Bien nous amuser</li><li>- ...</li></ul></p><p>Aucune connaissance en programmation n\'est nécessaire.</p><p>Prérequis : si possible amener un PC dans lequel vous aurez préchargé Scratch dans votre navigateur en ouvrant la page <a href="https://beta.scratch.mit.edu">https://beta.scratch.mit.edu</a></p>',
        'atelier-coding':          '<h1>Coding dojo</h1><p>Le coding dojo est une rencontre entre plusieurs personnes qui souhaitent travailler sur un défi de programmation de façon collective.</p>',
        'open-space':              '<h1>Open space</h1><p>L\'Open Space (ou Forum Ouvert) est une méthode pour structurer des conversations et des conférences.</p><p>Grâce à cette méthode, des groupes de 5 à 2 000 participants peuvent s\'assembler et travailler ensemble.</p><p>La caractéristique de la méthode est l\'ouverture mise à la fois sur le contenu mais aussi sur la forme.</p><p>Les participants sont invités à travailler ensemble sur une thématique importante et complexe. L\'ordre du jour est réalisé par les participants au démarrage de l\'Open Space.</p><p>Les utilisateurs donnent ainsi leurs propres sujets en plénière et forment des groupes de travail pour chaque thème abordé.</p>',
        'coding-gouter':           '<h1>Coding goûter</h1><p>Venez apprendre à coder avec votre enfant. Une occasion unique de partager des gâteaux, des rires et du code !</p>'
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
