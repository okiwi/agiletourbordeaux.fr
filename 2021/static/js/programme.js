jQuery(document).ready(function () {
    jQuery('body').addClass('sub-page');
    theme.init();

    // add active class to programme menu
    jQuery('ul.sf-menu li:nth-child(1)').addClass('active');

    var animatedModal = jQuery("#animatedModal");
    var toTopButton = jQuery(".to-top");

    const confAubry = `<h1>Keynote - Arrêtez de commencer des sprints, commencez par finir le prélude</h1>
    <p>Votre projet marche, mais c’est le chaos. Comment arrêter de dépendre de ces “héros” sur qui tout repose ?</p>`;

    const confGraveaud = `<h1>A la découverte d'Accelerate (FR)</h1>
    <p>Les organisations veulent déployer plus vite pour atteindre leurs objectifs. Mais elles souhaitent également avoir des applications plus stables dans le temps. Vitesse et stabilité sont compatibles et les organisations ont un moyen de le découvrir.</p>
	<p>Accelerate (la science derrière DevOps) est une recherche de 4 ans qui a défini les pratiques informatiques pour améliorer sa performance organisationnelle: productivité, rentabilité et être plus concurrentiel sur le marché.</p>
	<p>La force d'Accelerate est que c'est applicable à toutes les entreprises (note inscrite dans la recherche) et aide aux choix stratégiques dans son entreprise.</p>
	<p>Si la culture Agile est déjà présente alors déployer Accelerate est encore plus simple !
	<br>A travers cet atelier, vous comprendrez l'idée générale d'accelerate, quelques mécanismes et les résultats qu'Accelerate prédit"</p>`;

    const confChanson = `<h1>Débloquez vos résistances aux changements</h1>
    <p>Venez découvrir comment et pourquoi nous les humains préfèrons rester dans un statut quo insatisfaisant et épuisant, dans l'inconfort connu, plutôt que d'embrasser les changements qui seraient bons pour nous, notre équipe, notre entreprise, notre monde.</p>
	<p>	Nous éclairerons ces questions avec la notion d'immunité au changement de R. Kegan et L. Lahey, qui est un outil simple pour se réinventer. </p>`;
	
	const confEvers = `<h1>Mets toi ça dans la tête !</h1>
    <p>On a tous vécu cela: Se donner beaucoup de mal pour faire comprendre l'agilité et n'obtenir aucun changement visible, ni de comportement ni même de compréhension. </p>
	<p>Plutôt que de blâmer l'apprenant, je préfère m'interroger sur ma stratégie d'apprentissage. Aussi, j'ai étudié les mécanismes d'apprentissage et c'est cela que je vais partager avec vous.</p>
	<p>Vous repartirez avec une vision éclairée du processus cognitif permettant d'ancrer l'information, illustrée de pratiques de formateurs, facilitateurs et coachs.</p>`;
	
	const confSanglanCharlier = `<h1>Le Domain Driven Design, comment bien démarrer ?</h1>
    <p>Le Domain Driven Design gagne en popularité. De plus en plus d'équipes veulent s'y mettre, mais il est parfois compliqué de savoir par où commencer. </p>
	<p>Depuis peu la communauté DDD met à disposition un ensemble de ressources Open Source pour rendre le DDD plus accessible. Parmi celles-ci, je vous présenterai le DDD Starter Modeling Process qui constitue un guide parfait pour les personnes souhaitant se lancer dans l'aventure DDD.</p>`;
	
	const confAndrieux = `<h1>Comment (ne pas) refactorer un kernel.</h1>
    <p>Il était une fois un vieux logiciel adoré de tous. Il rendait de grands services à ses utilisateurs et malgré son âge avancé et sa maintenance capricieuse, ses développeurs l’aimaient et le choyaient. Mais après des années et des années d’existence, notre vieux logiciel fatigué avait besoin d’une cure de jouvence. Les meilleurs développeurs furent choisis pour accomplir cette mission et redonner sa superbe à notre antique ami.</p>
	<p>Cette histoire commence comme un conte de fée. Mais les choses ne se déroulent pas toujours comme dans les livres pour enfants !</p>
	<p>Nous verrons dans cette session les erreurs qui ont transformé un projet ambitieux et motivant en un long et douloureux développement. Nous aborderons différentes stratégies possibles pour gérer le refactoring d’un projet historique, les indicateurs présageant de difficultés à venir ainsi que le point commun entre un condensateur, une barre d’uranium et une estimation réaliste.</p>`;
	
	const confCabanne = `<h1>Pourquoi les coachs agiles répondent aux questions par des questions ?</h1>
    <p>
	<li>C’est quoi un coach agile ?</li>
	<li> Quelles formation fait-on pour devenir coach agile ?</li>
	<li> Quelle est la différence entre coaching agile et coaching professionnel ?</li>
	<li> A-t-on besoin d’avoir un diplôme de coach pro pour être coach agile ?</li>
	<li> Quels sont les différents styles de coach agile ?</li>
	<li> Quelle est la différence entre supervision, intervision et codev ?</li>
	<li> Y a-t-il un code de déontologie pour les coachs agiles ?</li></p>
	<p>Et aussi :
	<li> Ai-je besoin d’un coach agile pour me lancer dans l’agilité ?</li>
	<li> Qu’est ce que c’est une transformation agile ? On transforme quoi pour aller de quel état à quel état ?</li>
	<li> Une fois qu’on est agile, on a plus besoin de coach agile, c’est ça ?</li>
	<li> Combien on met de coach par FTE ou ETP ?</li>
	<li> Le coach agile est-il le nouveau Scrum Master ou le nouveau manager ?</li>
	<li> Comment et quand la mission du coach agile se termine ?</li>
	<li> Quand est-ce qu’un coach doit faciliter une retro et quand il ne doit pas le faire ?</li>
	<li> Le coach agile a-t-il un engagement de résultat ?</li></p>

	<p>Voilà les questions que Benjamin se pose ou qu’on lui pose, parfois pour discuter, parfois pour ironiser et la plupart du temps, cela soulève une très longue discussion. Il s'est dit que ça serait intéressant de compiler la synthèse de ces discussions dans cette conférence pour vous en faire profiter.</p>`;
    
    const confMira = `<h1>Agilité et Liberté : le regard de Montessori Extended</h1>
    <p></p>`;
	
	const confBossavit = `<h1>Chimères</h1>
    <p>Peut-être vous êtes-vous un jour senti·e mal à l’aise à l’idée de vous décrire en un seul mot : développeur, développeuse, testeur, testeuse ; Product Owner, manager ou tout autre mot anglais qu’on prétend « invariable »… </p>
	<p>Si vous avez envie d’en savoir plus sur tous ces rôles et sur vous-même, si vous êtes tenté·e par le complexe du savant fou et n’avez pas peur de vous lancer dans des manipulations génétiques, cette session est pour vous.</p>`;
	
	const confGerbaud = `<h1>Constituez des équipes, apprenez et jouez avec le Deck Agile</h1>
    <p>Le Deck Agile est un jeu de 52 cartes pour jouer avec l'agilité comme un As. 20 experts de l'agilité ont contribué à rédiger un contenu original pour découvrir et approfondir ses connaissances sur l'agilité</p>`;
	
	const confPloquin = `<h1>Et si nos managers étaient indispensables ?</h1>
    <p>Les managers ont généralement du mal avec l’agilité. Mais quel est leur rôle et les actions qu’ils doivent tenir auprès des équipes ? Est-ce que quelqu’un leur a dit ? Est-ce que quelqu’un le sait ?</p>
	<p>Le Lean management donne aux managers un rôle primordial qui les positionnent comme acteurs clés de la démarche d’amélioration continue. Et pour soutenir ce rôle, le Lean défini des pratiques à mettre en place et qui vont souvent à l’encontre de celles exercées par les managers traditionnels. Ce sont ces pratiques que je me propose de vous exposer.</p>`;
	
	const confJeremie = `<h1>Bien répondre aux besoins utilisateur, c'est surtout une histoire de comportement (logiciel) !</h1>
    <p>C'est super, tu arrives sur un nouveau projet ! Mais très vite, tu te rends compte que le seul moyen de comprendre ce qu'il fait, est d'aller faire de l'archéologie dans le code. Niveau user stories, elles sont bien définies... pourtant tu ne sais jamais jusqu’où tu dois aller pour les implémenter ! D'ailleurs à chaque fois que tu en livres, tu es a côté du besoin métier...</p>
	<p>Et si on te disait que le Behavior-Driven Development pouvait t'aider à résoudre tes problèmes !!</p>
	<p>En partant d'une user story, nous allons voir comment en faire émerger les comportements attendus du logiciel. Puis lors de la phase de développement, nous aborderons les pratiques qui permettent d'implémenter et vérifier automatiquement les attentes des utilisateurs.</p>`;
	
	const confUrvoas = `<h1>La confiance, la clé d'une équipe agile performante.</h1>
    <p>La confiance est la clé de la voûte de la performance collective d'une équipe.</p>
	<p>Mais qu'est-ce qui fait que nous décidons de faire confiance à une personne? Qu'est-ce qui fait que nous choisissons un jour de remettre une partie de notre devenir aux mains du collectif ?</p>
	<p>Découvrez à travers cette session interactive des leviers simples et concrets permettant de bâtir et d'entretenir confiance et performance pour vous et votre équipe.</p>`;
	
	const confBarralon = `<h1>L'inclusion dans les équipes agiles, focus sur les personnes neuro-atypiques</h1>
    <p>Ayant travaillé avec des personnes neuro-atypiques (HPI, troubles autistiques), je me suis interrogée sur leur position dans une équipe agile dite auto-managée.
	<li>Quelle est leur place ?</li>
	<li>Comment gère ton leur émotions ?</li>
	<li>Comment les comprendre ?</li>
	<li>Comment accueillir nos différences ?</li></p>
	<p>On en entend beaucoup parler chez les enfants (DYS, HPI, zèbre, etc). Mais chez les adultes c'est silence radio... que deviennent-ils ?</p>`;
	
	const confSutherland = `<h1>How to be a high performing distributed agile team</h1>
    <p>It's the 20th anniversary of the agile manifesto, and we have all just experienced a pandemic that has changed the way most of us work. </p>
	<p>The principles in the agile manifesto promote face-to face-collaboration. But what happens when face-to-face collaboration isn't possible? </p>
	<p>Distributed working is here to stay and those of us on distributed or hybrid teams are going to have to adapt.</p>
	<p>In this talk, we will discuss how changes in the new world of work affect the agile principles.  You will walk away having learned how to work online as if you were in the office together - and what’s possible when you get remote working right.</p>`;
	
	const confHemery = `<h1>Le tour de l'hexagone ?</h1>
    <p>L'architecture hexagonale, beaucoup de gens en parlent en ce moment. Ce pattern d'architecture mis sur le devant de la scène par Alistair Cockburn est de plus en plus populaire.</p>
	<p>À quoi ça ressemble concrètement ? Pour quels intérêts, notamment sur la testabilité ? Comment le mettre en place ? Prenons une base de code existante, et allons écrire un peu de code !</p>`;
	
	const confVeyron = `<h1>Vos convictions sont-elles un frein ou un accélérateur de vos projets ?</h1>
    <p>“On ne peut pas tout avoir”, “Ça ne marchera jamais”, “On a jamais rien sans rien” ...</p>
	<p>Nous avons tou.te.s des certitudes, que l’on porte sur soi, les autres ou la vie en général... Et c'est normal !</p>
	<p>Toutefois, ces dernières, conscientes ou inconscientes influencent nos actions et peuvent parfois nous limiter. Je vous propose dans cet atelier, à faire seul.e ou en équipe, les clés pour reconnaitre, comprendre et agir sur vos croyances afin d’en faire les atouts de vos projets.</p>
	<h2>Détails de l’atelier :</h2>
	<p><li>Passez à l’action en détectant et comprenant vos croyances. Via cet atelier qui s'équilibre entre théorie et pratique,</li>
	<li>Faites le choix de vous détacher d'une croyance limitante afin de créer et/ou renforcer une croyance aidante.</li></p>`;
	
	const confRay = `<h1>Priorisation de Roadmap : dépassez les attentes des devs, clients, directeurs !</h1>
    <p>Comment se sentir libre et épanoui dans la construction du produit, plutôt qu'en étau entre devs et directeurs ? Comment dépasser les attentes des devs, clients, directeurs ?</p>`;
	
	const confJorre = `<h1>Deviens un.e véritable pirate ! 🏴‍☠️</h1>
    <p>"Je ne peux rien faire changer dans cette boîte, je suis seulement [ton titre de job] !"</p>
	<p>Si c'est généralement ce que tu te dis quand tu regardes ta mission actuelle, même après avoir passé ta journée en conf agile, alors laisse-nous te prouver que tu te trompes.</p>
	<p>Les conférences agiles, c’est l’occasion pour toi :
	<br>- de trouver de nouvelles idées,
	<br>- de mieux comprendre comment faire progresser ton équipe,
	<br>- et de te rebooster pour enfin faire changer les choses.</p>
	<p>Mais malheureusement… tu y vas seul.e.</p>
	<p>D’ailleurs en retournant au bureau, certain.e.s de tes collègues vont peut-être te charier lorsque tu voudras lancer de nouvelles initiatives :
	<br>- "Ça y est, tu as vu une conf, tu crois que tu peux révolutionner le monde !",
	<br>- "La rétrospective ? Laisse tomber, nous on y va plus depuis longtemps, ça sert à rien et c’est pas aujourd’hui que ça va changer ..."
	<br>- "Mettre en place une intégration continue chez nous ? On y a pensé, mais ici on ne peut pas, c'est TELLEMENT compliqué."</p>
	<br>Et j’imagine que tu pourrais en citer d’autres.</p>
	<p>Dans ces conditions, tu t'épuises à essayer de faire bouger les choses, sans résultat. Tu te sens certainement frustré.e de ne pas réussir à faire émerger le désir de changement. Et peut-être même que tu te demandes comment réussir ta mission si tu ne peux pas expérimenter de nouvelles idées !</p>
	<p>Et c'est bien normal. N'importe qui douterait... Mais tu n'es peut-être pas n'importe qui... ?</p>
	<p>Si tu veux enfin savoir comment mieux utiliser ton énergie, redonner l'envie à ton équipe de s'améliorer sans que tu aies besoin de tout porter seul.e, déclencher le tilt pour que les choses changent, alors tu as trouvé la bonne conférence !</p>
	<p>Au travers d'exemples concrets, nous allons t'initier à l’art subtile de faire bouger les choses en détournant les pratiques des coachs et des managers. Tu pourras alors découvrir la/le véritable pirate qui sommeille en toi.</p>
	<p>Qu'est-ce que tu attends ? arrête de frotter le pont moussaillon et... À L'ABORDAGE ! 🏴‍☠️</p>`;
	
	const confMagne = `<h1>Comment dépasser les incompétences individuelles par le collectif ?</h1>
    <p>Comment aider les équipes de toute une organisation à s’améliorer techniquement ? </p>
	<p>Toute personne possède des compétences sur de nombreux domaines et est nécessairement incompétente sur d’autres. Le niveau de compétence d’une personne dans un domaine correspond aux connaissances qu’elle a pu acquérir dans celui-ci. Ce niveau peut être plus ou moins élevé en fonction de son appétence, de sa formation et de son expérience. Le partage des connaissances au sein d’une équipe est donc essentiel pour que celle-ci progresse rapidement. </p>
	<p>Comment faire pour que cette connaissance soit partagée rapidement et efficacement ? </p>
	<p>Nous avons expérimenté un nouveau format d’échange chez ManoMano. Ce format nommé “Atelier Craft”, a été créé par Promyze et propose une réponse à cette problématique. Nous verrons ce qu'a apporté ce format aux équipes, en termes de partage de connaissance et de montée en compétence de tous les membres qui les composent.</p>
	<h2>Plan :</h2>
	<h3>Contexte et Objectifs<h3>
	<h4>- Une situation réelle chez ManoMano</h4>
	<h4>- Un manque de compétence individuelle ?</h4>
	<h4>- Un manque de partage au sein d’une équipe ?</h4>

	<h3>Démarche et Résultats</h3>
	<h4>- Format des ateliers mis en place</h4>
	<h4>- Un REX chez ManoMano</h4>
	<h4>- Comment aller plus loin ? (création et animation de communautés de pratiques interne pour un partage de connaissance entre différentes équipes délocalisées)</h4>`;
	
	const confTardif = `<h1>25 ans d'intégration continue ...</h1>
    <p>De makefile au Déploiement continue revenons sur les grandes étapes, les grandes fonctionnalités, et les points de vigilances qu'il faut garder à l'esprit quand on automatise son projet.</p>
	<p>Pour chaque grande évolution (le versionning des sources, le découplage IDE / Build, le versionning des dépendances,......), nous discuterons des avantages, des problèmes résolus mais aussi des nouveaux problèmes engendrés.</p>
	<p>On regardera cette évolution selon 6 axes :
	<br>- l'evolution des langages (java, js, python,...)
	<br>- l'evolution des scm (cvs, svn, git, )
	<br>-l'evolution des outils de build (maven, gradle,...)
	<br>- l'evolution des IDE
	<br>-l'evolution des orchestrateurs (jenkins, gitlabci,...)
	<br>- le monde exterieur (cloud, docker, mobile,...)</p>

	<p>Un travail d'historien, avec plein de leçons à retenir.</p>

	<p>L'idée est d'en tirer des bonnes pratiques et une liste de piège à éviter quand nous nous lançons dans l'automatisation de notre projet ...</p>`;
	
	const tableRonde = `<h1>Table ronde : 20 ans du manifeste</h1>
    <p>Bruno Orsier (distanciel) , Christophe Deniau, Claude Aubry,  Laurent Bossavit , (François Beauregard, Nathalie Gilbert)</p>`;
	
    const openSpace = `<h1>Open space</h1>
    <p>L'Open Space (ou Forum Ouvert) crée un espace dans lequel des personnes peuvent s'organiser elles-mêmes et résoudre leurs problèmes en groupe. Il n'y a pas de thème imposé. Chacun peut faire avancer ce qui lui tient à cœur. La méthode permet une large participation et une compréhension mutuelle.</p>
    <p>Il repose sur le respect d'une loi, étayée par quatre principes.</p>
    <p>
        Les quatre principes :
        <ul>
            <li>les personnes qui se présentent sont les bonnes ;</li>
            <li>ce qui arrive, est la seule chose qui pouvait arriver ;</li>
            <li>ça commence quand ça commence ;</li>
            <li>quand c’est fini, c’est fini.</li>
        </ul>
    </p>
    <p>La loi des deux pieds : si vous n’êtes ni en train d’apprendre, ni de contribuer, passez à autre chose !</p>
    <a href="https://fr.wikipedia.org/wiki/M%C3%A9thodologie_Forum_Ouvert">Fiche Wikipedia</a>`;

    var descriptions = {
        'conf-aubry': confAubry,
        'conf-graveaud': confGraveaud,
        'conf-chanson': confChanson,
		'conf-evers': confEvers,
		'conf-sanglan-charlier': confSanglanCharlier,
		'conf-andrieux': confAndrieux,
		'conf-cabanne': confCabanne,
		'conf-mira': confMira,
		'conf-bossavit': confBossavit,
		'conf-gerbaud': confGerbaud,
		'conf-ploquin': confPloquin,
		'conf-jeremie': confJeremie,
		'conf-urvoas': confUrvoas,
		'conf-barralon': confBarralon,
		'conf-sutherland': confSutherland,
		'conf-hemery': confHemery,
		'conf-veyron': confVeyron,		
		'conf-ray': confRay,
		'conf-jorre': confJorre,
		'conf-magne': confMagne,
		'conf-tardif': confTardif,
		'table-ronde': tableRonde,
        'open-space': openSpace
    };

    hideModal();

    jQuery('.modalLink').each(function (index, element) {
        handleClickEvent(element);
    });

    jQuery('#btn-close-modal').on('click', function (event) {
        hideModal();
    });

    function handleClickEvent(element) {
        jQuery(element).on('click', function (event) {
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
