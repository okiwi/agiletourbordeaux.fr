jQuery(document).ready(function () {
    jQuery('body').addClass('sub-page');
    theme.init();

    // add active class to programme menu
    jQuery('ul.sf-menu li:nth-child(1)').addClass('active');

    var animatedModal = jQuery("#animatedModal");
    var toTopButton = jQuery(".to-top");

    const confLambert = `<h1>Sortir de l'ère des héros - l'excellence technique comme clé d'une organisation résiliente</h1>
    <p>Votre projet marche, mais c’est le chaos. Comment arrêter de dépendre de ces “héros” sur qui tout repose ?</p>`;

    const confNeis = `<h1>Swarming, Swarming, Swarming</h1>
    <p>Un "swarm" ou essaim en français est une initiative permettant de tester une idée, un concept, un projet.</p>
    <p>Un essaim quitte la ruche, pollenise et ensuite revient à la ruche, ou crée une nouvelle ruche.</p>
    <p>Nous allons parler de théorie de flocage dans le contexte de l´organisation agile. Dans mon livre, "The New Normal: AO...", j'explique la structure d´une organisation en plateforme.</p>
    <p>Mais un point clef reste toujours le Swarm. Au lieu de passer des mois à définir un cadre, on fait un swarm d´une ou deux semaines.</p>
    <p>Etes-vous prêt pour le futur de l´Agile?</p>`;

    const confDuboisCabanne = `<h1>Jusqu’ici tout va bien!</h1>
    <p>C’est l’histoire d’une société qui lance des trains agiles, de plus en plus de trains, des trains de plus en plus gros, des trains de trains qui embarquent toujours plus de gens, vont de plus en plus en vite, accélèrent encore, encore plus, toujours plus....</p>
    <p>C’est l’histoire d’une société qui trébuche et tombe et qui au fur et à mesure de sa chute se répète sans cesse pour se rassurer : jusqu’ici tout va bien, jusqu’ici tout va bien, jusqu’ici tout va bien...</p>
    <p>C’est l’histoire de deux agilistes qui, au lendemain de l’impact, constatent l’effondrement : les trains vidés de leurs passagers, privés de leurs pilotes, certains stoppés net d’autres continuant d’avancer et de produire tant bien que mal mais sans visibilité et avec les mêmes objectifs, au risque de dérailler. Et les gens dedans, et les gens sur le quai ne savent pas quoi faire de leurs douleurs, doutes, pertes ….</p>
    <p>L’important c’est pas la chute, c’est l'atterrissage!</p>
    <p>Cette situation sans précédent nous amené à interroger le modèle de l’agilité à l’échelle bien sûr, mais aussi son mode d’implémentation : savoir escalader ne suffit pas, il faut savoir le faire en sécurité, et pour cela comprendre la désescalade.</p>`;
    
    const confCharon = `<h1>Ludopédagogie ou pourquoi jouer pour s'améliorer</h1>
    <p>Après une approche à 360° du sujet (histoire, mécanismes d'apprentissage de l'adulte, bonnes pratiques...), je présenterai une mise en œuvre concrète à travers un serious game inventé par l'équipe de coachs en place chez Cdiscount.</p>`;

    const atelierRoudaut = `<h1>The energizer storm</h1>
    <p>L'objectif de ce workshop est double.</p>
    <p>Il s'agit d'apporter aux non initiés les éléments clés concernant les energizers pour se lancer dans cette nouvelle pratique. Nous allons voir pourquoi réaliser des energizers et quelles sont les astuces pour les réussir.</p>
    <p>Le second objectif est de vous faire découvrir une grande quantité d'energizer afin de renouveler votre collection. :)</p>
    <p>Ce workshop prône l'intelligence collective et l’apprentissage par la pratique.</p>`;

    const confLandryTopcu = `<h1>Osez Devenir Speaker !</h1>
    <p>Devenir Speaker, c’est peut-être quelque chose qui vous fait envie. Mais qu’est ce qui vous empêche d’aller plus loin ?</p>
    <p>Sûrement cette petite voix qui vous dit qu’il y a beaucoup de gens plus qualifiés que vous pour parler d’un sujet. Qu’est ce que vous avez à partager de toute manière ? Et puis parler devant une centaine de personnes ce n’est pas pour vous, les gens qui arrivent à faire ça ont certaines prédispositions…</p>
    <p>Lors de cette session, nous verrons ensemble que cette petite voix a tort. Vous pouvez le faire ! Et pour bien se lancer, nous verrons les bonnes pratiques de la création d'un talk jusqu'à la réalisation de celui-ci: le choix du sujet, la création du talk et la candidature aux conférences.</p>`;

    const confFroville = `<h1>Le Continuous Delivery souffle sur mon bateau Agilité. Ca va secouer !</h1>
    <p>La mise en place du Continuous Delivery a des impacts inattendus pour de nombreuses équipes et notamment sur l'organisation agile quotidienne (rôles, communication, format des US...).</p>
    <p>Le Continuous Delivery vise à rendre ton produit déployable en production à tout moment et passe notamment par de l'automatisation de la construction, du déploiement et des tests.</p>
    <p>Chez Pôle Emploi, nous accompagnons nos équipes de fabrication vers le Continous Delivery depuis plusieurs années.</p>
    <p>Notre expérience est qu'il y a des choses à savoir pour que cela se passe du mieux possible et nous te partagerons nos apprentissages.</p>`;

    const confLemaire = `<h1>Keynote d'Arnaud Lemaire</h1>
    <p></p>`;

    const confKol = `<h1>Peut-on devenir agile sans comprendre l’humain et ses limites ?</h1>
    <p>Lorsque j'explique à mes proches mon métier de coach Agile, cela les laisse perplexes. Après tout l'agilité ce n'est que du bon sens et des valeurs auxquelles il est facile d'adhérer.</p>
    <p>Alors pourquoi tant de transformations agiles sont si difficiles?</p>
    <p>Selon moi la difficulté réside dans l'incarnation de ses valeurs par les équipes et les parties prenantes.</p>
    <p>En effet, l’application de ces valeurs entre souvent en contradiction avec notre propre fonctionnement, notre intuition en tant qu’être humain et nous oblige a sortir de notre zone de confort. C’est pourquoi selon moi, la méthode classique pour accompagner des équipes à devenir agiles ne fonctionne pas. En effet, il s’agit de faire appliquer un framework qui aurait fait ses preuves ailleurs. Et plus les individus résistent et plus l’accompagnant force pour les emmener dans la « bonne » direction pour « leur bien être » et parce que « c’est comme cela que l’on devient agile ».</p>
    <p>Je vous propose donc de décrypter différentes techniques agiles, sous un autre angle, et vous démontrez qu’on peut accompagner des équipes de manière à ce qu'elles puissent incarner ces valeurs dans un contexte professionnel, sans dette émotionnelle et au service de l'intelligence collective.</p>`;

    const atelierSanJuan = `<h1>Comment hacker son mindset pour plus d'agilité</h1>
    <p>« Pour quoi » le mindset et en quoi c’est important pour vous ? Parce que c’est la baaaase !</p>
    <p>Que vous le vouliez ou non, vous êtes tout le temps en train de « travailler votre mindset » malheureusement, on le travaille souvent d’une façon qui, au mieux, n’aide pas et au pire, savonne généreusement la planche. Un beau mindset, bien musclé vous permettra de développer votre leadership, de faire face aux challenges, de mener à bien un projet, d’être un meilleur manager…</p>
    <p>Comment développer son mindset ?</p>
    <p>Je propose de partager 4 façons simples de développer son mindset. C’est à la portée de tous, il nous suffit de nous attacher à faire de petits changements chaque jour et ainsi, notre mindset plus positif nous apportera plus d’agilité pour réussir dans notre environnement pro (et perso !)</p>`;

    const confDlus = `<h1>Agilité et danse contemporaine</h1>
    <p>Suite à une expérience de worskhops et de performance de danse contemporaine "Slow Show" en Février 2020 avec un chorégraphe de renommée mondiale, Dimitri Chamblas. J'ai perçu des similitudes, des liens entre agilité et cette activité artistique : la dynamique des workshops, la posture du coach, les exercices Ice-breaker, les activité de cohésion de groupe. Cette session permettra de façon surprenante de lier des univers apparemment bien éloignés.</p>`;

    const confUrvoas = `<h1>La permaculture humaine, une solution pour une transformation agile plus durable</h1>
    <p>Beaucoup de transformations agiles échouent …. dans le temps</p>
    <p>Jardinier agile chez Lectra depuis 15 ans, à force d’expérimentations et d’itérations, je suis arrivé à la conclusion que la permaculture humaine peut permettre d’élaborer un système de façon respectueux et plus durable. Un système bon pour l’entreprise, bon pour les collaborateurs produisant des produits de qualité, satisfaisants les clients tout en étant économe en ressources.</p>
    <p>Je propose de partager avec vous cette histoire … et mes recettes de jardinier.</p>`;

    const confRouhaud = `<h1>4 workshops to destroy silos</h1>
    <p>2019 was a big year at Vestiaire Collective and we changed a lot of things to be more agile in the way we work. We had some pretty good results too but silos are still here and we don't like it!</p>
    <p>To change that we defined a 4 workshops process to go from an idea to it's implementation including persons from each perspective (business, product and IT):</p>
    <p>1. Lighting session: presentation of the problem we're trying to solve or the initiative we wish to implement</p>
    <p>2. Event Storming: create a map of the current process/system specific to the topic</p>
    <p>3. Story Mapping: define solutions all together by focusing on persona, epics and User Stories drafts (think behavior, not deliverables)</p>
    <p>4. Example Mapping: deep dive in the US and make them bullet proof (ou presque ;)</p>
    <p>Good results so far but a few challenges (in part because of the current situation of confinement). We didn't invent anything but are always willing to share our experience and the results we had :)</p>`;

    const confMetais = `<h1>Après tout ça, a-t-on encore envie de parler d'agilité ?</h1>
    <p>La crise que nous venons de traverser (et traversons encore...) a ébranlé en profondeur nos repères et nos convictions.</p>
    <p>Quid de nos convictions autour de l'agilité ? Que sont-elles devenues "après tout ça" ? Sommes-nous abattus ou au contraire convaincus comme jamais ?</p>
    <p>Je vous propose de poser à plat ce qui s'est passé : ce qui a été mis à mal, bousculé. Puis nous ferons un zoom sur comment l'agilité s'est comportée (et se comporte encore) durant cette crise. Quelles sont ses forces ? Ses faiblesses ? A-t-elle mutée ? Enfin, après un suspense insoutenable, je vous avouerai si oui ou non, j'y crois encore.</p>`;

    const atelierBeraudSudreau = `<h1>L'agilité c'est pas sorcier : Chaos transformation</h1>
    <p>Comment tirer bénéfice du hasard dans la transformation d'un système complexe ?</p>`;

    const confVeyron = `<h1>Excursion cosmique vers la transformation agile</h1>
    <p>La transformation agile, vous connaissez ? Et avez-vous remarqué le lien avec la naissance des étoiles ? Tout comme la formation d’une galaxie, celle-ci commence par le regroupement des bonnes particules, avant de former sa première étoile jusqu’à atteindre une galaxie de projets.</p>
    <p>Embarquez pour un voyage cosmique au cours duquel vous découvrirez comment s’adapter dans un univers qui se digitalise, en boostant l’efficacité de vos étoiles et de votre galaxie. Suite à cette conférence intergalactique, vous aurez en main toutes les clés pour que votre transformation agile brille telle une étoile.</p>
    <p>En Voyageant au travers d’une conférence oubliez vos préjugés sur la transformation agile et découvrez la sous un autre angle. Les objectifs à travers cette conférences sont :</p>
    <p>- Découvrir toutes les étapes d’une transformation agile sous un autre angle à travers le voyage</p>
    <p>- Plonger dans un univers différent et ressortir avec toutes les clés pour bien comprendre et démarrer une transformation agile</p>
    <p>- Éviter les pièges de la transformation</p>
    <p>La conférence abordera les sujets suivants :</p>
    <p>- Qu’est ce qu’une transformation agile et pourquoi en faire une ?</p>
    <p>- L’initialisation de la transformation</p>
    <p>- Co-création du plan de transformation et conduite du changement</p>
    <p>- Création de la première équipe agile</p>
    <p>- Stabilité de la première équipe agile</p>
    <p>- Rayonnement de l’équipe (mise en place de cercles de partage, rex, …)</p>
    <p>- Conclusion sur les différents types de galaxies (entreprises) ainsi que leur culture d’entreprise.</p>
    <p>Prochain voyage pour l’agilité à l’échelle ?</p>`;

    const confDijoux = `<h1>La posture du coach</h1>
    <p>Quelle différence entre un consultant et un coach ? Quels sont les éléments caractéristiques de la pratique du coach ? Comment se faire accepter par l'équipe ? Comment les amener à se poser les bonnes questions ? Comment rendre visible leur progès et leurs succès ?</p>`;

    const confBailly = `<h1>TDD et TDD sont dans un bateau</h1>
    <p>Le TDD (Type-Driven Development) ou Développement Dirigé par les Tests est un des piliers du développement agile : les tests sont une forme de spécification exécutable concrète, basée sur des exemples, qui guident la conception et le développement du code. Les langages modernes et plus particulièrement les langages fonctionnels permettent d'appliquer ce principe en amont du processus, avant même que le code ne soit exécuté, lors de la compilation : d'où l'idée du TDD comme Type-Driven Development, développement dirigé par les types.</p>
    <p>Cette session est une démonstration pratique, au travers d'exemples dans divers langages, de la manière dont les deux formes de TDD peuvent s'articuler et comment le Type DD peut améliorer la conception du code.</p>`;

    const confMigot = `<h1>Prendre le temps d’aller plus loin - le mantra des organisations apprenantes</h1>
    <p>Donner satisfaction à un client requiert du temps. Du temps pour produire évidemment. Du temps pour apprendre surtout. C’est en l’écoutant, en l’observant puis en expérimentant qu’une organisation peut répondre aux besoins de ses utilisateurs. C’est également en accordant du temps à ses collaborateurs afin de leur permettre de réfléchir, d’émettre des hypothèses et de collaborer qu’une organisation peut être innovante tout en conservant ses talents. Sans cette prise de recul, impossible de s’améliorer et de prospérer.</p>
    <p>Nous verrons au sein de cette conférence comment octroyer et occuper ce temps à travers différents conseils, retours d’expérience et exemples concrets.</p>`;

    const confBarreau = `<h1>Donnons de l'agilité à la Data Science</h1>
    <p>La Data Science est une discipline regroupant des domaines de la modélisation mathématique et de l'analyse de données, que nous appellerons recherche, ainsi que du traitement de données et de la mise à disposition des modèles, que nous appellerons développement. Les entreprises pratiquant déjà l'agilité, avec des frameworks comme Scrum, vont naturellement l'utiliser pour ces équipes Data Science. Est-ce pertinent, justifié ? Possiblement. Pour notre équipe, cela posait des difficultés pour mener à bien des travaux de recherche d'un côté et de développement de l'autre.</p>
    <p>Je vous invite à découvrir le cheminement de notre équipe à AT Internet pour faire coexister la recherche et le développement, en synergie, dans un objectif commun : délivrer de la valeur.</p>
    <p>Nous allons aborder des principes qui vous parleront déjà comme le Scrumban, mais aussi d'autres moins connues avec le Squad Health Check Model ainsi que le Shape Up.</p>`;

    const confPloquin = `<h1>Apprendre à apprendre</h1>
    <p>D'après le World Economic Forum, la première des compétences à maîtriser dans nos entreprises en 2020 est la "Résolution de problèmes complexes".</p>
    <p>Le Lean est une démarche d’amélioration continue qui place la résolution de problèmes comme point de départ de l’apprentissage (i.e. de l’amélioration). Mais l’apprentissage est-il un concept si simple que cela ?</p>
    <p>Je vous propose de partager avec vous mon aventure du Lean et comment ce dernier m’a appris à apprendre. On parlera de dissonances, de biais, mais aussi de problèmes, de management et d’outils.</p>`;

    const confDusseaut = `<h1>Keynote de Jean-Baptiste Dusseaut</h1>
    <p></p>`;

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
        'conf-lambert': confLambert,
        'conf-neis': confNeis,
        'conf-dubois-cabanne': confDuboisCabanne,
        'conf-charon': confCharon,
        'atelier-roudaut': atelierRoudaut,
        'conf-landry-topcu': confLandryTopcu,
        'conf-froville': confFroville,
        'conf-lemaire': confLemaire,
        'conf-kol': confKol,
        'atelier-san-juan': atelierSanJuan,
        'conf-dlus': confDlus,
        'conf-urvoas': confUrvoas,
        'conf-rouhaud': confRouhaud,
        'conf-metais': confMetais,
        'atelier-beraud-sudreau': atelierBeraudSudreau,
        'conf-veyron': confVeyron,
        'conf-dijoux': confDijoux,
        'conf-bailly': confBailly,
        'conf-migot': confMigot,
        'conf-barreau': confBarreau,
        'conf-ploquin': confPloquin,
        'conf-dusseaut': confDusseaut,

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
