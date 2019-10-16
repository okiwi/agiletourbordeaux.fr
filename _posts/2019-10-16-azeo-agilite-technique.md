---
layout: post2018
title:  "AZEO - L'agilité technique"
image: azeo.jpg
wide-image: azeo-wide.jpg
js:
- /static/js/post.js
---

# Qu’est-ce que l’agilité technique ?
**Article rédigé par Benjamin Titeux, Consultant Modern Apps AZEO**

Depuis les dernières années, on voit que la méthodologie agile prend un essor important, mais savez-vous ce qu’est l’agilité technique ? C’est ce que nous allons découvrir ensemble.
Pour commencer, il faut savoir que pour utiliser convenablement l’agilité il faut définir un Flow. Ce Flow va permettre à votre équipe d’optimiser le plus possible notre temps de travail.
Un Flow typique de l’agilité technique est constitué d’une suite de plusieurs étapes.

<!--more-->

![Alt text](/static/img/blog/article-azeo/image001.png){: img-responsive }{: .center-block }

### Décider

Pour pouvoir concevoir les fonctionnalités le mieux possible, les développeurs doivent avoir des user Stories (US).

Les US sont comme de petits énoncés d’une partie de la fonctionnalité à mettre en place, cette US doit être testable.

Lors de la rédaction d’une US, les Product Owners (PO) donnent les informations concernant la viabilité et la réalisation d’une fonctionnalité, les développeurs indiquent la faisabilité technique et les testeurs fournissent des informations concernant les possibles exceptions, les cas de bord et d’autres cas inattendus que les utilisateurs de la fonctionnalité peuvent avoir.

Ensemble ces informations permettant d’avoir la meilleure description possible pour la réalisation de l’US, les tests d’acceptation doivent être écrits dans un langage commun à l’équipe, de cette façon toutes les personnes participant à la conception de l’US peuvent communiquer de façon claire et sans risque de confusion.

### Concevoir

La conception d’une application repose sur plusieurs principes, le premier est le plus important.

La qualité du code et sa maintenabilité impactent la rapidité de développement d'une fonctionnalité. 

Un flow rapide dépend du design et de l’implémentation d’une application certaine pratiques doivent être mise en place et respecté lors de la conception de cette fonctionnalité.
* Lors de la conception d’une application le nommage et le style de code doivent être définis et respectés pendant toute cette durée, cette pratique permet une meilleure compréhension et modification d’un bloc de code par n’importe quel développeur.
* Chaque ligne de code de l’application doit pouvoir être modifiée à n’importe quel moment par un développeur de l’équipe. De cette façon nous n’avons pas de point de blocage lors de la réalisation d’une fonctionnalité.

Une application doit pouvoir évoluer dans le temps. Lors de la conception de cette application, le design de l’architecture du code de l’application doit pouvoir évoluer. L’application d’un bon couplage/cohésion et d’une bonne abstraction/encapsulation permet une implémentation plus rapide d’une nouvelle fonctionnalité.

L’application du principe « SOLID » rend le code source de l’application flexible.
* Single responsibility principle : Une entité / service doit être responsable d’une seule et unique fonctionnalité dans notre application.
* Open/closed principle: Les entités / services doivent être fermés aux modifications mais ouverts aux extensions.
* Liskov substitution principle : Un client et une interface ne doivent pas dépendre d’une implémentation spécifique et doivent pouvoir utiliser n’importe quelle implémentation sans le savoir.
* Interface separation principle: Favoriser plusieurs interfaces client plutôt qu’une seule large et unique interface.
* Dependency inversion principle: Les modules de haut niveau ne doivent pas dépendre des modules de bas niveau et les deux doivent dépendre des interfaces.

### Tester

La conception d’une fonctionnalité doit être faite en s’assurant de la qualité des différents composants de celle-ci. Pour s’assurer de cette qualité, les développeurs utilisent souvent une approche appelée TDD (Test Driven Development). Cette approche implique la création du plus petit test possible et son implémentation dans un cycle rapide (idéalement quelques minutes).

Le TDD permet de créer de nombreux tests au moment même de la conception de la fonctionnalité. Cela permet au développeur de pouvoir refactoriser une portion du code source de la fonctionnalité pour permettre la conception de nouvelles fonctionnalités en s’assurant que les tests créés pour les fonctionnalités soient toujours passants.

![Alt text](/static/img/blog/article-azeo/image002.png){: img-responsive }{: .center-block }

### Déployer

Lors de la phase de déploiement, les équipes de développement et de recette effectuent les tests de Behavior-Driven Development (BDD) pour permettre la validation d’une US ou Fonctionnalité.

Ces tests étant plus long à réaliser, ils ne peuvent pas être effectués au moment de la conception de la fonctionnalité mais dans la phase de recette de cette fonctionnalité. 

Dans le cas où des tests BDD seraient non passants, les informations concernant les tests non validés sont données au PO pour que des correctifs soient effectués. Chaque correctif doit être intégré dans notre flow en respectant les différentes étapes.

![Alt text](/static/img/blog/article-azeo/image003.png){: img-responsive }{: .center-block }

### Livraison

Notre dernière phase concerne la livraison de notre fonctionnalité.

L’utilisation d’un flow d’agilité technique permet à une équipe d’être sûre de la qualité du produit fourni au client.

Dans le cas où une fonctionnalité ne répond pas totalement aux attentes du client ou contient des bugs, celui-ci informe directement le PO afin de faire effectuer les modifications, permettant au PO de définir de nouvelles US et de les inclure dans le flow.

## Comment mettre en place l’agilité technique

Pour utiliser l’agilité technique, nous devons mettre en place une méthode appelé Continuous Delivery, cette méthode permet de mettre en place un Continuous Integration pipeline et un Continuous Deployment pipeline.

![Alt text](/static/img/blog/article-azeo/image004.png){: img-responsive }{: .center-block }

### Continuous Integration

Notre équipe de développement effectuant de nombreuses modifications lors de la réalisation d’une fonctionnalité, nous devons nous assurer que chaque modification effectuée par un développeur ne perturbe pas le fonctionnement de notre application et ne nuit pas à la qualité de celle-ci.

Nous ne pouvons pas nous permettre de demander à un développeur d’effectuer tous les tests à chaque modification. Dans un flow d’agilité technique nous devons nous assurer de rester les plus rapides possible pour effectuer la conception d’une fonctionnalité.

La solution est d’utiliser la Continuous Integration (CI), celle-ci nous permet de nous assurer que la qualité de notre application ne se dégrade pas à chaque modification effectuée par un développeur.

La CI implique que les développeurs travaillent toujours sur la dernière version du code de notre application, de cette façon les modifications apportées par le développement d’une US doivent être intégrées fréquemment dans la base de code commune à tous les développeurs.

Cette façon de travailler permet d’utiliser un CI pipeline pour tester automatiquement les dernières modifications apportées par les développeurs pour pouvoir détecter les éventuels bugs ou régressions le plus rapidement possible.

![Alt text](/static/img/blog/article-azeo/image005.png){: img-responsive }{: .center-block }

Dans un premier temps, notre pipeline doit récupérer la dernière version du code source de l’application contenant les modifications effectuées par les développeurs, puis effectuera une compilation du code source. Dans le cas où notre code source ne compile pas, le pipeline indique une erreur détaillée permettant au développeur d’effectuer les correctifs et s’arrête à cette étape.

Par la suite, le pipeline effectuera les différents tests unitaires créés dans notre fonctionnement TDD. A nouveau, dans le cas où un test unitaire n’est pas validé, le pipeline s’arrête et il nous indique une erreur détaillée.

Lorsque les tests sont tous validés, notre pipeline effectue une publication d’un artifact contenant notre application compilée.

### Continuous Deployment

Maintenant que les dernières modifications effectuées par les développeurs ont été compilées et les tests unitaires validés par notre CI pipeline, la phase des tests BDD peut commencer.

Dans notre flow, nous ne voulons pas qu’un membre de notre équipe soit constamment pris par le déploiement de la dernière version de notre fonctionnalité sur chaque environnement.

Dans cette optique la mise en place d’un pipeline de Continuous Deployment (CD) permet d’automatiser la gestion des déploiements sur les environnements. 

Un CD pipeline récupère automatiquement le dernier artifact publié par le CI pipeline et commence à effectuer les déploiements, cette façon de procéder permet d’obtenir des retours rapides sur les fonctionnalités testées en BDD et de s’assurer que les fonctionnalités apportées ne comportent aucun bug et respectent les standards de qualité définis.

![Alt text](/static/img/blog/article-azeo/image006.png){: img-responsive }{: .center-block }

Chaque déploiement dans un environnement est effectué par le CD pipeline. 

Lors de la configuration du pipeline des pre-approvals et des post-approvals peuvent être mis en place pour ne pas déployer sur l’environnement suivant sans validation d’un responsable des tests. 

Lorsque tous les testent BDD ont été effectué sur un environnement comme l’UAT, le responsable peut valider le déploiement dans cet environnement pour permettre au CD pipeline de continuer et d’effectuer la livraison sur l’environnement suivant. 

Si les tests sur un environnement ne sont pas validés, la livraison est refusée et le pipeline s’arrête.

# Qu’est-ce que ça apporte
Une entreprise doit créer un environnement de travail permettant aux équipes agiles de pouvoir travailler dans les meilleures conditions possibles afin de concevoir des solutions de la plus haute qualité pour les besoins actuels et futurs.

L’agilité technique permet d’atteindre cet objectif en permettant aux équipes de réaliser des applications avec un cycle de conception rapide tout en s’assurant que la qualité des développements effectués soit la plus élevée possible.
