// I'm The Best — Dictées tirées d'œuvres (à dicter par l'enseignant ou le parent)
// Chaque fiche : un texte « d'après » une œuvre du domaine public (scène fidèle à l'œuvre,
// réécrite au niveau 4ème), des questions pour l'élève et leur corrigé.
//   partie 1 : le texte à dicter
//   partie 2 : les questions (à recopier par l'élève) puis le corrigé (pour l'adulte)

const DICTEES_OEUVRES = [

  /* ===================== FACILE ===================== */
  { id:"o01", niveau:"facile", auteur:"Charles Perrault", oeuvre:"Le Petit Poucet", annee:"1697",
    titre:"Les cailloux blancs",
    texte:"Le Petit Poucet avait entendu ses parents dire qu'ils allaient abandonner leurs sept enfants dans la forêt. Il se leva de bon matin et courut au bord d'un ruisseau. Il remplit ses poches de petits cailloux blancs, puis il revint à la maison. Quand la famille partit, il laissa tomber les cailloux un à un le long du chemin. Le soir, lorsque les parents se furent éloignés, ses frères se mirent à pleurer. Mais le Petit Poucet savait comment rentrer : il suivit les cailloux qui brillaient sous la lune.",
    pieges:["Passé simple : se leva, courut, remplit, revint, partit, laissa, suivit.","« se furent éloignés » : passé antérieur, accord avec les parents.","« un à un » : à avec accent.","« qui brillaient » : accord avec l'antécédent « les cailloux »."],
    questions:[
      { q:"Pourquoi le Petit Poucet ramasse-t-il des cailloux ?", r:"Parce qu'il a entendu que ses parents voulaient abandonner les enfants dans la forêt : les cailloux lui serviront à retrouver le chemin de la maison." },
      { q:"Relève deux qualités du Petit Poucet montrées par ce texte.", r:"Il est rusé (intelligent) et prévoyant ; il est aussi courageux, car il ne pleure pas comme ses frères." },
      { q:"Conjugue « remplir » et « revenir » au passé simple, à la 3ᵉ personne du pluriel.", r:"Ils remplirent ; ils revinrent." },
      { q:"Quelle est la nature du mot « blancs » dans « petits cailloux blancs » ? Pourquoi prend-il un s ?", r:"C'est un adjectif qualificatif ; il s'accorde avec le nom « cailloux » (masculin pluriel)." },
      { q:"Donne un synonyme de « abandonner ».", r:"Laisser, délaisser, quitter." }
    ] },
  { id:"o02", niveau:"facile", auteur:"Jean de La Fontaine", oeuvre:"Le Laboureur et ses Enfants (Fables)", annee:"1668",
    titre:"Le trésor caché",
    texte:"Un riche laboureur, sentant sa mort prochaine, fit venir ses enfants auprès de lui. Il leur dit qu'un trésor était caché dans le champ que leurs parents leur avaient laissé. Il ne savait pas l'endroit exact, mais ils le trouveraient s'ils retournaient la terre avec courage. Après la mort du père, les fils creusèrent le champ partout, de tous les côtés. Ils ne découvrirent aucun trésor. Pourtant, à la fin de l'année, la terre bien travaillée donna une récolte magnifique. Le père avait été sage : le travail est un trésor.",
    pieges:["« leur dit » (leur devant le verbe, sans s) / « leurs parents » (pluriel).","Conditionnel dans le discours rapporté : ils le trouveraient.","« creusèrent », « découvrirent » : passé simple au pluriel.","« aucun trésor » : aucun s'emploie au singulier."],
    questions:[
      { q:"Quel « trésor » les enfants ont-ils finalement trouvé ?", r:"Une belle récolte, obtenue grâce à leur travail : le vrai trésor, c'est le travail." },
      { q:"Quelle est la morale de ce texte ?", r:"Le travail est un trésor : il apporte la richesse à ceux qui font des efforts." },
      { q:"Dans « Il leur dit », quelle est la fonction de « leur » ?", r:"C'est un pronom personnel complément d'objet indirect (il dit à eux)." },
      { q:"Mets la phrase « ils le trouveraient » au futur simple.", r:"Ils le trouveront." },
      { q:"Que signifie « sentant sa mort prochaine » ?", r:"Comprenant qu'il allait bientôt mourir." }
    ] },
  { id:"o03", niveau:"facile", auteur:"Alphonse Daudet", oeuvre:"La Chèvre de monsieur Seguin (Lettres de mon moulin)", annee:"1869",
    titre:"Blanquette dans la montagne",
    texte:"La petite chèvre blanche arriva enfin dans la montagne. Quelle joie ! Jamais elle n'avait vu autant d'herbe ni de fleurs. Elle courait, sautait, se roulait dans les prés et broutait sans s'arrêter. Il n'y avait plus de corde, plus de pieu, rien pour l'empêcher de gambader. Les châtaigniers la caressaient de leurs branches et les genêts d'or s'ouvraient sur son passage. Toute la montagne semblait lui faire fête. Mais, le soir venu, le vent fraîchit et la montagne devint violette. Au loin, on entendit hurler le loup.",
    pieges:["Imparfait : elle courait, sautait, se roulait, broutait.","« Quelle joie ! » : quelle s'accorde avec joie.","« Toute la montagne » : toute au féminin singulier.","« les genêts d'or » : accent circonflexe sur genêts."],
    questions:[
      { q:"Pourquoi la chèvre est-elle si heureuse ?", r:"Elle est enfin libre : il n'y a plus de corde ni de pieu, et elle découvre l'herbe et les fleurs de la montagne." },
      { q:"Quel événement annonce un danger à la fin du texte ?", r:"Le soir tombe, le vent fraîchit et on entend hurler le loup." },
      { q:"Relève trois verbes à l'imparfait et explique pourquoi l'auteur emploie ce temps.", r:"Courait, sautait, broutait : l'imparfait décrit des actions qui durent ou se répètent." },
      { q:"Quelle figure de style trouve-t-on dans « Les châtaigniers la caressaient de leurs branches » ?", r:"Une personnification : les arbres agissent comme des personnes." },
      { q:"Donne un synonyme de « gambader ».", r:"Sauter, bondir, courir joyeusement." }
    ] },
  { id:"o04", niveau:"facile", auteur:"Jules Renard", oeuvre:"Poil de Carotte", annee:"1894",
    titre:"Les poules",
    texte:"Un soir d'hiver, Madame Lepic remarqua que les poules n'étaient pas rentrées. Elle demanda qui irait fermer le poulailler. Le grand frère et la sœur refusèrent aussitôt. Alors tout le monde se tourna vers Poil de Carotte, le plus jeune. Le pauvre garçon avait peur du noir, mais il n'osa pas dire non. Il traversa la cour en courant, les bras tendus devant lui. Il ferma la porte des poules et revint, essoufflé, fier de son courage. Personne ne le félicita ; on lui dit seulement qu'il irait désormais chaque soir.",
    pieges:["« n'étaient pas rentrées » : accord avec les poules.","« Personne ne le félicita » : personne + ne, verbe au singulier.","« essoufflé » : deux s, deux f.","« désormais » s'écrit en un mot."],
    questions:[
      { q:"Pourquoi Poil de Carotte accepte-t-il d'aller fermer les poules ?", r:"Il n'ose pas refuser, car tout le monde se tourne vers lui et il est le plus jeune." },
      { q:"Que ressent Poil de Carotte au retour ? Comment réagit sa famille ?", r:"Il est fier de son courage ; mais personne ne le félicite, on lui impose même d'y aller chaque soir." },
      { q:"Quelle est la fonction de « le plus jeune » dans la phrase ?", r:"C'est une apposition au nom « Poil de Carotte »." },
      { q:"Relève un verbe pronominal.", r:"« se tourna »." },
      { q:"Donne le contraire de « courage ».", r:"La lâcheté, la peur." }
    ] },
  { id:"o05", niveau:"facile", auteur:"Hector Malot", oeuvre:"Sans famille", annee:"1878",
    titre:"Apprendre à lire",
    texte:"Pendant nos longues marches sur les routes, Vitalis décida de m'apprendre à lire. Il ramassa un morceau de bois plat et le coupa en petites planchettes. Sur chacune, il grava une lettre avec la pointe de son couteau. Le soir, à l'étape, il me montrait les lettres et je devais les reconnaître. Le chien Capi apprenait en même temps que moi, et il avait souvent plus de mémoire que son élève. J'en étais vexé, alors je travaillai avec ardeur. Au bout de quelques semaines, je savais lire.",
    pieges:["« chacune » renvoie à chaque planchette.","« je devais les reconnaître » : les = les lettres ; accent circonflexe.","« quelques semaines » : pluriel.","« je travaillai » (passé simple) ≠ « je travaillais » (imparfait)."],
    questions:[
      { q:"Comment Vitalis s'y prend-il pour apprendre à lire à Rémi ?", r:"Il grave des lettres sur de petites planchettes de bois et les lui montre chaque soir." },
      { q:"Pourquoi Rémi se met-il à travailler avec ardeur ?", r:"Parce qu'il est vexé que le chien Capi apprenne plus vite que lui." },
      { q:"Qui raconte l'histoire ? Justifie.", r:"Rémi, le personnage principal : le récit est à la 1ʳᵉ personne (je, m', moi)." },
      { q:"« Il grava une lettre » : mets cette phrase au passé composé.", r:"Il a gravé une lettre." },
      { q:"Que signifie « avec ardeur » ?", r:"Avec énergie, avec enthousiasme." }
    ] },
  { id:"o06", niveau:"facile", auteur:"Victor Hugo", oeuvre:"Les Misérables", annee:"1862",
    titre:"La poupée de Cosette",
    texte:"Cosette, la petite servante des Thénardier, regardait la grande poupée exposée dans la boutique d'en face. Elle n'avait jamais eu de jouet. Ce soir de Noël, un étranger vêtu d'un vieux manteau jaune entra dans l'auberge. Il observa l'enfant maigre et triste qui travaillait sans repos. Soudain, il sortit, puis revint avec la belle poupée dans les bras. Il la posa devant Cosette et lui dit qu'elle était pour elle. La fillette n'osait pas la toucher. Ses yeux brillaient de bonheur, comme si un miracle venait d'arriver.",
    pieges:["« exposée » : participe accordé avec la poupée.","« Elle n'avait jamais eu » : ne... jamais, participe « eu ».","« vêtu » : accordé avec un étranger.","« Ses yeux » (à elle) ≠ « ces yeux »."],
    questions:[
      { q:"Pourquoi Cosette n'ose-t-elle pas toucher la poupée ?", r:"Elle n'a jamais eu de jouet et n'arrive pas à croire que ce cadeau soit pour elle." },
      { q:"Relève deux expressions qui montrent que Cosette est malheureuse chez les Thénardier.", r:"« la petite servante », « l'enfant maigre et triste qui travaillait sans repos »." },
      { q:"Quelle est la fonction de « vêtu d'un vieux manteau jaune » ?", r:"Complément du nom « étranger » (groupe participial épithète)." },
      { q:"Mets « Elle n'osait pas la toucher » au présent.", r:"Elle n'ose pas la toucher." },
      { q:"Trouve un mot de la même famille que « bonheur ».", r:"Heureux, heureusement, malheur." }
    ] },
  { id:"o07", niveau:"facile", auteur:"Alphonse Daudet", oeuvre:"Tartarin de Tarascon", annee:"1872",
    titre:"Le chasseur de lions",
    texte:"Tartarin, de la petite ville de Tarascon, rêvait de grandes aventures. Dans son jardin poussaient des plantes venues du monde entier et, dans son bureau, il gardait des fusils, des sabres et des couteaux de chasse. Un jour, il annonça à toute la ville qu'il partirait en Afrique chasser le lion. Les habitants l'admirèrent. Mais les semaines passaient, et Tartarin ne partait pas. Il fallut que ses amis se moquent de lui pour qu'il se décide enfin à prendre le bateau pour Alger.",
    pieges:["Inversion du sujet : dans son jardin poussaient des plantes.","« venues » : participe accordé avec des plantes.","Subjonctif après « il fallut que » et « pour que » : se moquent, se décide.","« Alger » : majuscule (nom de ville)."],
    questions:[
      { q:"Quel est le rêve de Tartarin ?", r:"Vivre de grandes aventures, en particulier aller chasser le lion en Afrique." },
      { q:"Pourquoi le texte est-il amusant ?", r:"Tartarin se vante beaucoup mais ne part pas : il faut que ses amis se moquent de lui pour qu'il se décide." },
      { q:"Quel est le sujet du verbe « poussaient » ?", r:"« des plantes venues du monde entier » (sujet inversé)." },
      { q:"Pourquoi « se moquent » est-il au subjonctif ?", r:"Parce qu'il vient après « il fallut que », qui exprime une nécessité." },
      { q:"Donne un synonyme de « se décider ».", r:"Se résoudre, prendre la décision." }
    ] },
  { id:"o08", niveau:"facile", auteur:"Alphonse Daudet", oeuvre:"Les Vieux (Lettres de mon moulin)", annee:"1869",
    titre:"La visite aux grands-parents",
    texte:"Mon ami Maurice m'avait demandé d'aller voir ses grands-parents, qui vivaient seuls dans un petit village. J'arrivai à midi, à l'heure de la sieste. La maison était fraîche et silencieuse. Dans une chambre, deux petites filles en blouse bleue lisaient à voix basse, et un vieux monsieur dormait dans son fauteuil. Quand je dis que je venais de la part de Maurice, la grand-mère se mit à trembler de joie. Les deux vieux me prirent les mains et me posèrent mille questions sur leur petit-fils.",
    pieges:["« qui vivaient » : accord avec ses grands-parents.","« en blouse bleue » : accord de l'adjectif.","« mille » est invariable.","« leur petit-fils » : trait d'union, leur au singulier."],
    questions:[
      { q:"Pourquoi les grands-parents sont-ils si émus ?", r:"Le narrateur leur apporte des nouvelles de leur petit-fils Maurice, qu'ils aiment et qu'ils ne voient pas." },
      { q:"Relève deux détails qui montrent le calme de la maison.", r:"« fraîche et silencieuse », les petites filles qui lisent « à voix basse », le vieux monsieur qui dort." },
      { q:"Quelle est la nature de « qui » dans « qui vivaient seuls » ?", r:"Un pronom relatif (antécédent : ses grands-parents)." },
      { q:"Pourquoi « mille » ne prend-il pas de s ?", r:"« Mille » est un adjectif numéral invariable." },
      { q:"Que signifie l'expression « de la part de » ?", r:"Envoyé par, au nom de quelqu'un." }
    ] },
  { id:"o09", niveau:"facile", auteur:"Louis Pergaud", oeuvre:"La Guerre des boutons", annee:"1912",
    titre:"La bataille des deux villages",
    texte:"Les garçons de Longeverne et ceux de Velrans se faisaient la guerre depuis toujours. Chaque jeudi, après l'école, les deux armées se retrouvaient à la lisière du bois. On se lançait des injures, puis des cailloux, et enfin on se battait à coups de bâton. Les prisonniers subissaient une terrible punition : on leur coupait tous les boutons de leurs vêtements. Ils rentraient chez eux en tenant leur pantalon à deux mains, et leurs parents les grondaient sévèrement.",
    pieges:["« ceux de Velrans » : pronom démonstratif pluriel.","« Chaque jeudi » : chaque au singulier.","« on leur coupait » : leur sans s / « leurs vêtements » au pluriel.","« sévèrement » : adverbe en -ment."],
    questions:[
      { q:"Quelle est la « terrible punition » infligée aux prisonniers ?", r:"On leur coupe tous les boutons de leurs vêtements." },
      { q:"Pourquoi cette punition est-elle si redoutée ?", r:"Les prisonniers doivent rentrer en tenant leur pantalon et se font gronder par leurs parents." },
      { q:"Relève les étapes de la bataille.", r:"D'abord les injures, puis les cailloux, enfin les coups de bâton." },
      { q:"Justifie l'orthographe de « leur » dans « on leur coupait » et de « leurs » dans « leurs vêtements ».", r:"Le premier est un pronom devant un verbe (invariable) ; le second est un déterminant devant un nom pluriel." },
      { q:"Que signifie « la lisière du bois » ?", r:"Le bord, la limite du bois." }
    ] },
  { id:"o10", niveau:"facile", auteur:"Jules Verne", oeuvre:"Le Tour du monde en quatre-vingts jours", annee:"1873",
    titre:"Le pari",
    texte:"Au Reform Club de Londres, Phileas Fogg jouait aux cartes avec ses amis. L'un d'eux affirma qu'il était impossible de faire le tour du monde en moins de trois mois. Phileas Fogg répondit tranquillement qu'on pouvait le faire en quatre-vingts jours. Ses amis éclatèrent de rire. Alors il paria vingt mille livres qu'il réussirait. Le soir même, il partit avec son domestique, Passepartout, et un sac rempli de billets de banque. Le grand voyage commençait.",
    pieges:["« quatre-vingts » prend un s car il termine le nombre.","« vingt mille livres » : mille invariable.","« L'un d'eux affirma » : sujet singulier.","« rempli » : participe accordé avec un sac."],
    questions:[
      { q:"Quel est le pari de Phileas Fogg ?", r:"Faire le tour du monde en quatre-vingts jours ; il parie vingt mille livres." },
      { q:"Relève un mot qui montre le caractère calme de Phileas Fogg.", r:"« tranquillement »." },
      { q:"Écris en lettres le nombre 80, puis 85.", r:"Quatre-vingts ; quatre-vingt-cinq (sans s, car suivi d'un autre nombre)." },
      { q:"« Il paria qu'il réussirait » : à quel temps est « réussirait » et pourquoi ?", r:"Au conditionnel présent : c'est un futur dans le passé." },
      { q:"Donne un synonyme de « domestique ».", r:"Serviteur, valet." }
    ] },

  /* ===================== MOYEN ===================== */
  { id:"o11", niveau:"moyen", auteur:"Alphonse Daudet", oeuvre:"La Dernière Classe (Contes du lundi)", annee:"1873",
    titre:"La dernière leçon de français",
    texte:"Ce matin-là, j'étais en retard pour l'école et je craignais d'être grondé. Mais, en entrant dans la classe, je fus surpris : tout était calme, et monsieur Hamel portait sa belle redingote verte des jours d'inspection. Au fond de la salle, des vieux du village étaient assis en silence. Alors le maître monta dans sa chaire et nous annonça d'une voix douce que c'était notre dernière leçon de français. Un ordre était arrivé de Berlin : désormais, on n'enseignerait plus que l'allemand dans les écoles d'Alsace et de Lorraine.",
    pieges:["« Ce matin-là » : trait d'union.","« je fus surpris » : passé simple du verbe être + participe accordé avec je (un garçon).","« étaient assis » : accord avec des vieux.","« on n'enseignerait plus que » : ne... plus que (restriction), conditionnel."],
    questions:[
      { q:"Pourquoi l'atmosphère de la classe est-elle inhabituelle ?", r:"Tout est calme, le maître porte ses habits de fête et des vieux du village sont venus assister à la classe." },
      { q:"Quelle nouvelle le maître annonce-t-il ? Explique la situation historique.", r:"C'est la dernière leçon de français : après la guerre de 1870, l'Alsace et la Lorraine sont annexées par l'Allemagne et l'allemand devient la seule langue enseignée." },
      { q:"Pourquoi les vieux du village sont-ils présents ?", r:"Pour rendre hommage au maître et à la langue française, et regretter de ne pas l'avoir assez apprise." },
      { q:"Relève une proposition subordonnée complétive.", r:"« que c'était notre dernière leçon de français »." },
      { q:"Mets « Un ordre était arrivé de Berlin » au passé composé.", r:"Un ordre est arrivé de Berlin." },
      { q:"Que signifie « désormais » ?", r:"À partir de maintenant, dorénavant." }
    ] },
  { id:"o12", niveau:"moyen", auteur:"Alphonse Daudet", oeuvre:"Le Secret de maître Cornille (Lettres de mon moulin)", annee:"1869",
    titre:"Le moulin qui tournait à vide",
    texte:"Quand les minoteries à vapeur s'installèrent près d'Arles, tous les moulins à vent du pays cessèrent de tourner, sauf celui de maître Cornille. Le vieux meunier continuait à faire virer ses ailes, et on voyait son âne passer sur les chemins, chargé de gros sacs. Pourtant, personne ne lui apportait plus de blé. Intriguée, sa petite-fille Vivette entra un jour dans le moulin pendant son absence. La chambre de la meule était vide, et les sacs ne contenaient que du plâtre et de la terre blanche. Le vieil homme avait voulu sauver l'honneur de son moulin.",
    pieges:["« tous les moulins » / « personne ne lui apportait » : accords.","« chargé de gros sacs » : accordé avec son âne.","« Intriguée » : accordé avec Vivette (apposition en tête de phrase).","« ne contenaient que » : restriction ne... que."],
    questions:[
      { q:"Pourquoi les moulins à vent ont-ils cessé de tourner ?", r:"Les minoteries à vapeur, plus modernes, ont pris tout le travail des meuniers." },
      { q:"Quel est le secret de maître Cornille ?", r:"Son moulin tourne à vide : ses sacs ne contiennent que du plâtre, il fait semblant de travailler pour sauver l'honneur de son moulin." },
      { q:"Quel sentiment ce secret inspire-t-il au lecteur ?", r:"De la pitié et de l'émotion pour ce vieil homme fier et malheureux." },
      { q:"Quelle est la fonction de « Intriguée » ?", r:"Apposition au sujet « sa petite-fille Vivette »." },
      { q:"« cessèrent de tourner » : donne l'infinitif et le temps du verbe conjugué.", r:"Cesser, au passé simple." },
      { q:"Pourquoi « vieil » et non « vieux » dans « le vieil homme » ?", r:"Devant un nom masculin commençant par une voyelle ou un h muet, on emploie « vieil »." }
    ] },
  { id:"o13", niveau:"moyen", auteur:"Victor Hugo", oeuvre:"Les Misérables", annee:"1862",
    titre:"Cosette et le seau",
    texte:"La Thénardier avait envoyé Cosette chercher de l'eau à la source, au milieu du bois, en pleine nuit. L'enfant, qui avait à peine huit ans, marchait seule dans l'obscurité. Elle tenait un seau presque aussi grand qu'elle. Arrivée à la source, elle le plongea dans l'eau froide, puis elle reprit le chemin du village. Le seau était si lourd qu'elle devait s'arrêter tous les dix pas. Elle grelottait et n'osait pas pleurer. Tout à coup, elle sentit que le seau ne pesait plus rien : une main énorme venait de saisir l'anse.",
    pieges:["« avait envoyé Cosette chercher de l'eau » : le COD (Cosette) est placé après l'auxiliaire, donc pas d'accord.","« Arrivée à la source » : participe accordé avec elle (Cosette).","« si lourd qu'elle » : conséquence.","« tous les dix pas » : tous au pluriel."],
    questions:[
      { q:"Relève trois éléments qui rendent la situation de Cosette effrayante.", r:"Elle est seule, il fait nuit, elle est dans un bois, elle n'a que huit ans, le seau est très lourd." },
      { q:"Que se passe-t-il à la fin du texte ? Qui est, selon toi, ce personnage ?", r:"Une main énorme saisit le seau : c'est Jean Valjean, qui vient aider Cosette." },
      { q:"Pourquoi Cosette « n'ose pas pleurer » ?", r:"Elle a peur et elle est habituée à être maltraitée : elle ne se plaint jamais." },
      { q:"Relève une proposition subordonnée de conséquence.", r:"« qu'elle devait s'arrêter tous les dix pas » (après « si lourd »)." },
      { q:"Quel est le temps de « avait envoyé » ? Pourquoi l'auteur l'emploie-t-il ?", r:"Le plus-que-parfait : l'action est antérieure aux autres actions du récit." },
      { q:"Que signifie « grelotter » ?", r:"Trembler de froid." }
    ] },
  { id:"o14", niveau:"moyen", auteur:"Hector Malot", oeuvre:"Sans famille", annee:"1878",
    titre:"Le départ de Rémi",
    texte:"Je n'avais que huit ans quand j'appris que mère Barberin n'était pas ma vraie mère. J'avais été trouvé, tout petit, sur un trottoir de Paris. Son mari, revenu de la ville blessé et sans argent, décida de se débarrasser de moi. Il me vendit à un vieux musicien ambulant, le signor Vitalis, qui voyageait avec trois chiens et un singe. Lorsque nous quittâmes le village, je me retournai plusieurs fois pour apercevoir la maison où j'avais été si heureux. Je pleurais en silence, et Capi, le chien, vint me lécher la main.",
    pieges:["« J'avais été trouvé » : plus-que-parfait passif, accord avec je (Rémi).","« revenu de la ville blessé » : participes accordés avec son mari.","« nous quittâmes » : passé simple, accent circonflexe.","« où » (relatif de lieu) : la maison où j'avais été heureux."],
    questions:[
      { q:"Quelle découverte bouleverse Rémi ?", r:"Mère Barberin n'est pas sa vraie mère : il est un enfant trouvé." },
      { q:"Pourquoi le mari de mère Barberin vend-il Rémi ?", r:"Il est revenu blessé et sans argent ; il ne veut plus nourrir un enfant qui n'est pas le sien." },
      { q:"Relève les sentiments de Rémi au moment du départ.", r:"La tristesse (il pleure en silence) et le regret (il se retourne pour voir la maison)." },
      { q:"Quel est le rôle de Capi à la fin du texte ?", r:"Il console Rémi : c'est le début de leur amitié." },
      { q:"Conjugue « quitter » au passé simple à toutes les personnes du pluriel.", r:"Nous quittâmes, vous quittâtes, ils quittèrent." },
      { q:"Que signifie « un musicien ambulant » ?", r:"Un musicien qui se déplace de ville en ville pour jouer." }
    ] },
  { id:"o15", niveau:"moyen", auteur:"Jules Verne", oeuvre:"Cinq semaines en ballon", annee:"1863",
    titre:"Au-dessus de l'Afrique",
    texte:"Le ballon du docteur Fergusson s'éleva lentement au-dessus de Zanzibar. À bord du Victoria, le docteur, son ami Kennedy et le fidèle Joe regardaient la côte s'éloigner. Bientôt, le vent les poussa vers l'intérieur du continent africain. Sous leurs yeux défilaient des forêts immenses, des fleuves aux eaux rapides et des troupeaux d'animaux sauvages. Les voyageurs, émerveillés, prenaient des notes et dessinaient des cartes. Ils espéraient découvrir enfin les sources du Nil, que tant d'explorateurs avaient cherchées avant eux.",
    pieges:["Inversion du sujet : sous leurs yeux défilaient des forêts...","« émerveillés » : participe accordé avec les voyageurs.","« que tant d'explorateurs avaient cherchées » : COD que (les sources) avant avoir, féminin pluriel.","« À bord » : accent sur À majuscule."],
    questions:[
      { q:"Quel est le but du voyage des trois personnages ?", r:"Traverser l'Afrique en ballon et découvrir les sources du Nil." },
      { q:"Relève trois paysages découverts depuis le ballon.", r:"Des forêts immenses, des fleuves aux eaux rapides, des troupeaux d'animaux sauvages." },
      { q:"Quel est le sujet de « défilaient » ?", r:"« des forêts immenses, des fleuves aux eaux rapides et des troupeaux d'animaux sauvages »." },
      { q:"Justifie l'accord de « cherchées ».", r:"Participe passé avec avoir : il s'accorde avec le COD « que » (= les sources du Nil), placé avant." },
      { q:"Mets « Le ballon s'éleva » au présent puis au passé composé.", r:"Le ballon s'élève ; le ballon s'est élevé." },
      { q:"Trouve un synonyme de « émerveillés ».", r:"Éblouis, fascinés, ravis." }
    ] },
  { id:"o16", niveau:"moyen", auteur:"Guy de Maupassant", oeuvre:"Le Papa de Simon", annee:"1879",
    titre:"L'enfant sans père",
    texte:"Le premier jour d'école, les autres garçons entourèrent le petit Simon. Ils avaient entendu leurs parents dire qu'il n'avait pas de papa, et ils se moquaient de lui sans pitié. Simon, rouge de honte, ne savait que répondre. Le soir, désespéré, il s'en alla au bord de la rivière et se mit à pleurer. Un grand ouvrier, le forgeron Philippe, qui passait par là, lui demanda pourquoi il avait tant de chagrin. Il écouta l'enfant avec bonté, puis le ramena chez sa mère, la Blanchotte, en lui promettant qu'il trouverait bien un papa.",
    pieges:["« entourèrent » : passé simple pluriel.","« rouge de honte », « désespéré » : accordés avec Simon.","« s'en alla » : verbe s'en aller au passé simple.","« tant de chagrin » ; « qu'il trouverait » : conditionnel (futur dans le passé)."],
    questions:[
      { q:"Pourquoi les garçons se moquent-ils de Simon ?", r:"Parce qu'il n'a pas de père ; ils répètent ce que disent leurs parents." },
      { q:"Quel rôle joue le forgeron Philippe ?", r:"Il console Simon avec bonté et le ramène chez sa mère ; il deviendra son « papa »." },
      { q:"Relève deux expressions qui montrent la souffrance de Simon.", r:"« rouge de honte », « désespéré », « se mit à pleurer », « tant de chagrin »." },
      { q:"Quelle est la fonction de « le forgeron Philippe » ?", r:"Apposition au nom « un grand ouvrier »." },
      { q:"Transforme au discours direct : « il lui demanda pourquoi il avait tant de chagrin ».", r:"Il lui demanda : « Pourquoi as-tu tant de chagrin ? »" },
      { q:"Donne un synonyme de « sans pitié ».", r:"Cruellement, impitoyablement." }
    ] },
  { id:"o17", niveau:"moyen", auteur:"Jules Verne", oeuvre:"L'Île mystérieuse", annee:"1875",
    titre:"La dernière allumette",
    texte:"Les naufragés, tombés du ciel avec leur ballon, se retrouvèrent sur une île inconnue. La nuit approchait et le froid devenait vif. Il fallait absolument du feu. Le marin Pencroff fouilla toutes ses poches : il ne trouva qu'une seule allumette. Ses compagnons retinrent leur souffle. Pencroff prépara un petit tas d'herbes sèches et de mousse, s'abrita du vent et frotta l'allumette avec mille précautions. Une petite flamme jaillit, et les herbes s'enflammèrent. Les naufragés poussèrent un cri de joie : ils étaient sauvés.",
    pieges:["« tombés du ciel » : participe accordé avec les naufragés.","« il ne trouva qu'une seule allumette » : restriction.","« retinrent » : verbe retenir au passé simple.","« mille précautions » : mille invariable ; « s'enflammèrent » : deux m."],
    questions:[
      { q:"Pourquoi le feu est-il si important pour les naufragés ?", r:"La nuit approche, il fait froid : le feu leur permet de se chauffer, de cuire et de survivre." },
      { q:"Comment l'auteur crée-t-il le suspense ?", r:"Il n'y a qu'une seule allumette ; les compagnons retiennent leur souffle ; Pencroff prend mille précautions." },
      { q:"Relève les étapes de l'allumage du feu.", r:"Préparer un tas d'herbes sèches et de mousse, s'abriter du vent, frotter l'allumette, la flamme jaillit, les herbes s'enflamment." },
      { q:"« Il fallait absolument du feu » : quelle est la nature de « absolument » ?", r:"Un adverbe (de manière)." },
      { q:"Conjugue « retenir » au passé simple à la 3ᵉ personne du singulier et du pluriel.", r:"Il retint ; ils retinrent." },
      { q:"Que signifie « retenir son souffle » ?", r:"Arrêter de respirer un instant, sous l'effet de l'émotion ou de l'attente." }
    ] },
  { id:"o18", niveau:"moyen", auteur:"Jules Verne", oeuvre:"Deux ans de vacances", annee:"1888",
    titre:"Le schooner dans la tempête",
    texte:"Le Sloughi, un petit navire, avait rompu ses amarres pendant la nuit. À son bord se trouvaient quinze enfants, des élèves d'une pension de Nouvelle-Zélande, et un jeune mousse, mais aucun marin capable de le diriger. Poussé par une violente tempête, le bateau dériva pendant des jours sur l'océan Pacifique. Briant et Gordon, les plus âgés, tenaient la barre à tour de rôle, trempés et épuisés. Enfin, une terre apparut à l'horizon. Les vagues projetèrent le navire sur le sable. Les jeunes naufragés comprirent qu'ils allaient devoir vivre seuls sur cette île.",
    pieges:["« avait rompu ses amarres » : plus-que-parfait ; « se trouvaient quinze enfants » : sujet inversé.","« Poussé » : accordé avec le bateau ; « trempés et épuisés » : avec Briant et Gordon.","« à tour de rôle » : accent circonflexe.","« apparut » : passé simple du verbe apparaître."],
    questions:[
      { q:"Pourquoi la situation des enfants est-elle si dangereuse ?", r:"Ce sont des enfants, sans aucun marin pour diriger le navire, pris dans une violente tempête au milieu du Pacifique." },
      { q:"Quel rôle jouent Briant et Gordon ?", r:"Les plus âgés tiennent la barre à tour de rôle : ils dirigent le bateau et protègent les autres." },
      { q:"Comment se termine le voyage ?", r:"Le navire est projeté sur le sable d'une île ; les enfants vont devoir y vivre seuls." },
      { q:"Quelle est la fonction de « Poussé par une violente tempête » ?", r:"Apposition au sujet « le bateau » (elle exprime la cause)." },
      { q:"Relève un verbe au plus-que-parfait et explique son emploi.", r:"« avait rompu » : l'action s'est produite avant le début du récit." },
      { q:"Que signifie « dériver » ?", r:"Être emporté par les courants ou le vent, sans pouvoir se diriger." }
    ] },
  { id:"o19", niveau:"moyen", auteur:"Guy de Maupassant", oeuvre:"Aux champs", annee:"1882",
    titre:"Deux familles de paysans",
    texte:"Les Tuvache et les Vallin vivaient côte à côte dans deux chaumières, au pied d'une colline. Chaque famille avait quatre enfants, et tout ce petit monde grouillait devant les portes du matin au soir. On les nourrissait de soupe et de pommes de terre, car les parents étaient pauvres. Un jour, une belle voiture s'arrêta devant les maisons. Une dame élégante en descendit. Elle n'avait pas d'enfant et proposa aux Tuvache de leur acheter leur petit garçon, en échange d'une rente. La mère refusa avec colère.",
    pieges:["« côte à côte » : accents circonflexes, à avec accent.","« Chaque famille avait » : singulier.","« tout ce petit monde grouillait » : singulier.","« de leur acheter leur petit garçon » : leur pronom puis leur déterminant (singulier)."],
    questions:[
      { q:"Quelle est la situation des deux familles au début du texte ?", r:"Elles sont voisines, pauvres et ont chacune quatre enfants." },
      { q:"Que propose la dame aux Tuvache ? Comment réagit la mère ?", r:"Elle propose d'acheter leur petit garçon contre une rente ; la mère refuse avec colère." },
      { q:"À ton avis, la mère a-t-elle raison de refuser ? Justifie.", r:"Réponse libre : par exemple, un enfant ne se vend pas, l'amour d'une mère n'a pas de prix ; ou au contraire, l'enfant aurait pu avoir une vie meilleure." },
      { q:"Relève la proposition qui exprime la cause et le mot qui l'introduit.", r:"« car les parents étaient pauvres », introduite par la conjonction de coordination « car »." },
      { q:"Pourquoi « grouillait » est-il au singulier ?", r:"Son sujet, « tout ce petit monde », est au singulier." },
      { q:"Que signifie « une rente » ?", r:"Une somme d'argent versée régulièrement." }
    ] },
  { id:"o20", niveau:"moyen", auteur:"Victor Hugo", oeuvre:"Les Misérables", annee:"1862",
    titre:"Gavroche sur la barricade",
    texte:"Sur la barricade, les insurgés manquaient de cartouches. Gavroche, un gamin de Paris, eut une idée. Il prit un panier et sortit dans la rue, sous les balles des soldats. Il ramassait les cartouches tombées des gibernes des morts et les mettait dans son panier. Les balles sifflaient autour de lui, mais il continuait en chantant une petite chanson moqueuse. Les combattants le regardaient avec admiration et frayeur. Soudain, une balle l'atteignit. Il se releva, chanta encore un couplet, puis une seconde balle l'abattit.",
    pieges:["« tombées des gibernes » : participe accordé avec les cartouches.","« eut une idée » : passé simple du verbe avoir (sans accent).","« en chantant » : gérondif.","« l'atteignit », « l'abattit » : passé simple, l' = Gavroche."],
    questions:[
      { q:"Pourquoi Gavroche sort-il de la barricade ?", r:"Pour ramasser les cartouches des morts, car les insurgés n'en ont plus." },
      { q:"Relève deux traits du caractère de Gavroche.", r:"Il est courageux (il sort sous les balles) et insolent ou joyeux (il chante une chanson moqueuse)." },
      { q:"Quels sentiments les combattants éprouvent-ils ?", r:"De l'admiration et de la frayeur." },
      { q:"Quel est le mode et la valeur de « en chantant » ?", r:"Le gérondif : il indique la manière (ou la simultanéité)." },
      { q:"Écris « il eut une idée » au passé composé.", r:"Il a eu une idée." },
      { q:"Qu'est-ce qu'un « insurgé » ?", r:"Une personne qui se révolte, qui prend les armes contre le pouvoir." }
    ] },

  /* ===================== DIFFICILE ===================== */
  { id:"o21", niveau:"difficile", auteur:"Victor Hugo", oeuvre:"Les Misérables", annee:"1862",
    titre:"Les chandeliers de l'évêque",
    texte:"Jean Valjean, qui avait passé dix-neuf ans au bagne, avait été accueilli par l'évêque de Digne. Pendant la nuit, il s'était enfui en emportant l'argenterie de son hôte. Au petit matin, trois gendarmes le ramenèrent, le tenant au collet. Mais l'évêque, loin de l'accuser, s'avança vers lui avec douceur. Il déclara qu'il lui avait donné ces couverts et lui reprocha d'avoir oublié les deux chandeliers d'argent, qu'il lui tendit aussitôt. Les gendarmes, stupéfaits, le relâchèrent. Jean Valjean, bouleversé, ne comprenait pas qu'on pût lui pardonner ainsi.",
    pieges:["« avait été accueilli » : plus-que-parfait passif, accord avec Jean Valjean.","« le tenant au collet » : participe présent invariable.","« qu'il lui tendit » : COD que (les chandeliers), mais verbe conjugué au passé simple (pas de participe).","« qu'on pût » : subjonctif imparfait après « ne comprenait pas que »."],
    questions:[
      { q:"Pourquoi Jean Valjean est-il ramené par les gendarmes ?", r:"Il a volé l'argenterie de l'évêque qui l'avait accueilli." },
      { q:"Explique le geste de l'évêque. Que veut-il montrer à Jean Valjean ?", r:"Il ment pour le sauver et lui donne même les chandeliers : il lui offre son pardon et veut le pousser à devenir honnête." },
      { q:"Relève deux mots qui expriment la réaction des personnages au geste de l'évêque.", r:"« stupéfaits » (les gendarmes), « bouleversé » (Jean Valjean)." },
      { q:"Quelle est la valeur du plus-que-parfait dans les deux premières phrases ?", r:"Il présente des actions antérieures au moment du récit (le bagne, l'accueil, la fuite)." },
      { q:"Pourquoi le verbe « pût » est-il au subjonctif ?", r:"Il est dans une subordonnée complétive après un verbe de pensée à la forme négative (« ne comprenait pas que »)." },
      { q:"Transforme au discours direct : « Il déclara qu'il lui avait donné ces couverts ».", r:"Il déclara : « Je vous ai donné ces couverts. »" },
      { q:"Que signifie « le bagne » ?", r:"Une prison où les condamnés étaient soumis aux travaux forcés." }
    ] },
  { id:"o22", niveau:"difficile", auteur:"Guy de Maupassant", oeuvre:"La Parure", annee:"1884",
    titre:"La rivière de diamants",
    texte:"Mathilde Loisel avait emprunté à son amie, Madame Forestier, une superbe rivière de diamants pour aller au bal du ministère. Elle y avait été admirée de tous. Mais, en rentrant chez elle, elle s'aperçut que le collier avait disparu. Son mari et elle le cherchèrent partout, en vain. Ils durent en acheter un semblable, qui coûta trente-six mille francs, et ils s'endettèrent pour des années. Pendant dix ans, Mathilde fit les plus durs travaux du ménage. Un jour, elle apprit que la parure qu'ils avaient perdue n'était qu'un faux qui valait cinq cents francs.",
    pieges:["« Elle y avait été admirée » : passif, accord avec elle.","« s'aperçut » : passé simple de s'apercevoir (ç devant u).","« trente-six mille » : traits d'union, mille invariable ; « cinq cents » : s final.","« la parure qu'ils avaient perdue » : COD que (la parure) avant avoir."],
    questions:[
      { q:"Pourquoi Mathilde a-t-elle emprunté le collier ?", r:"Pour être belle et élégante au bal du ministère, car elle n'avait pas de bijoux." },
      { q:"Quelles sont les conséquences de la perte du collier ?", r:"Ils achètent un collier semblable très cher, s'endettent et vivent dix ans dans la misère." },
      { q:"Pourquoi la fin du texte est-elle tragique ?", r:"Le collier perdu n'était qu'un faux : tous leurs sacrifices étaient inutiles." },
      { q:"Justifie l'accord de « perdue ».", r:"Participe passé avec avoir : il s'accorde avec le COD « que » (= la parure), placé avant." },
      { q:"Écris en lettres : 36 000 et 500.", r:"Trente-six mille ; cinq cents." },
      { q:"Relève une proposition subordonnée relative et donne son antécédent.", r:"« qui coûta trente-six mille francs » (antécédent : un semblable) ou « qui valait cinq cents francs » (antécédent : un faux)." },
      { q:"Que signifie « en vain » ?", r:"Sans résultat, inutilement." }
    ] },
  { id:"o23", niveau:"difficile", auteur:"Émile Zola", oeuvre:"Germinal", annee:"1885",
    titre:"L'arrivée au Voreux",
    texte:"Dans la plaine rase, sous la nuit sans étoiles, un homme suivait seul la grande route. Il s'appelait Étienne Lantier ; il avait perdu son travail et cherchait de l'embauche. Le vent glacial de mars soufflait si fort qu'il lui coupait le visage. Soudain, au loin, il aperçut des feux rouges qui brûlaient dans le ciel noir. C'était le Voreux, une fosse de mine de charbon. Les bâtiments, à moitié cachés dans l'ombre, ressemblaient à une bête énorme accroupie, prête à dévorer les hommes qui descendaient chaque jour dans ses profondeurs.",
    pieges:["« sous la nuit sans étoiles » : étoiles au pluriel.","« si fort qu'il lui coupait » : conséquence.","« accroupie, prête » : accordés avec une bête.","« les hommes qui descendaient » : accord avec l'antécédent."],
    questions:[
      { q:"Dans quelle situation se trouve Étienne Lantier ?", r:"Il est seul, sans travail, et marche la nuit dans le froid pour trouver de l'embauche." },
      { q:"Relève les éléments du décor qui rendent l'atmosphère inquiétante.", r:"La nuit sans étoiles, la plaine rase, le vent glacial, les feux rouges dans le ciel noir." },
      { q:"Quelle figure de style l'auteur emploie-t-il pour décrire la mine ? Que suggère-t-elle ?", r:"Une comparaison (et une personnification) : la mine ressemble à une bête prête à dévorer les hommes ; elle est dangereuse et cruelle pour les mineurs." },
      { q:"Relève une proposition subordonnée de conséquence.", r:"« qu'il lui coupait le visage »." },
      { q:"Quelle est la fonction de « une fosse de mine de charbon » ?", r:"Apposition au nom « le Voreux »." },
      { q:"Donne le sens de « chercher de l'embauche ».", r:"Chercher du travail, un emploi." }
    ] },
  { id:"o24", niveau:"difficile", auteur:"Alain-Fournier", oeuvre:"Le Grand Meaulnes", annee:"1913",
    titre:"Le domaine mystérieux",
    texte:"Augustin Meaulnes s'était égaré dans la campagne avec la voiture et la jument qu'il avait empruntées. La nuit tombait, et il ne reconnaissait plus les chemins. Après des heures de marche, il aperçut, entre les sapins, la tourelle d'un vieux château. Dans la cour, des enfants déguisés couraient en riant, et des lanternes de couleur étaient suspendues aux branches. On préparait, lui dit-on, une fête pour des fiançailles. Meaulnes, ébloui, se mêla aux invités. Il ne savait pas encore qu'il chercherait ce domaine pendant des années, sans jamais en retrouver le chemin.",
    pieges:["« qu'il avait empruntées » : COD que (la voiture et la jument), féminin pluriel.","« des enfants déguisés » ; « étaient suspendues » : accords.","« lui dit-on » : incise avec inversion du sujet et trait d'union.","Conditionnel (futur dans le passé) : chercherait."],
    questions:[
      { q:"Comment Meaulnes découvre-t-il le domaine ?", r:"Il se perd dans la campagne la nuit et aperçoit par hasard la tourelle d'un vieux château." },
      { q:"Relève les éléments qui donnent au lieu un caractère merveilleux.", r:"Les enfants déguisés qui courent en riant, les lanternes de couleur suspendues aux branches, la fête des fiançailles." },
      { q:"Que nous apprend la dernière phrase sur la suite du roman ?", r:"Meaulnes cherchera ce domaine pendant des années sans le retrouver : c'est l'objet de sa quête." },
      { q:"Justifie l'accord de « empruntées ».", r:"Participe passé avec avoir, accordé avec le COD « que » (= la voiture et la jument), féminin pluriel, placé avant." },
      { q:"Pourquoi « chercherait » est-il au conditionnel ?", r:"C'est un futur dans le passé : l'action est future par rapport au moment du récit." },
      { q:"Que signifie « s'égarer » ?", r:"Se perdre, se tromper de chemin." }
    ] },
  { id:"o25", niveau:"difficile", auteur:"Gustave Flaubert", oeuvre:"Un cœur simple", annee:"1877",
    titre:"Félicité, la servante",
    texte:"Pendant un demi-siècle, Félicité fut la servante de Madame Aubain. Pour cent francs par an, elle faisait la cuisine et le ménage, cousait, lavait, repassait et s'occupait des chevaux et de la volaille. Elle se levait dès l'aube pour ne pas manquer la messe et travaillait jusqu'au soir sans interruption. Son visage était maigre et sa voix aiguë. Elle avait connu bien des malheurs : l'homme qu'elle avait aimé l'avait abandonnée, et les enfants qu'elle avait élevés étaient partis. Pourtant, elle restait douce et dévouée, donnant toute son affection à ceux qui l'entouraient.",
    pieges:["« un demi-siècle » : demi invariable devant le nom, trait d'union.","« sa voix aiguë » : tréma sur le e (aiguë).","« l'homme qu'elle avait aimé l'avait abandonnée » : deux accords différents (aimé : COD l'homme ; abandonnée : COD l' = Félicité).","« les enfants qu'elle avait élevés » : COD que avant avoir."],
    questions:[
      { q:"Relève les tâches que Félicité accomplit chaque jour.", r:"Elle fait la cuisine et le ménage, coud, lave, repasse, s'occupe des chevaux et de la volaille." },
      { q:"Qu'est-ce qui rend Félicité admirable malgré ses malheurs ?", r:"Elle reste douce et dévouée et donne toute son affection aux autres." },
      { q:"Justifie l'accord de « aimé » et de « abandonnée ».", r:"« aimé » : COD « que » = l'homme (masculin singulier) ; « abandonnée » : COD « l' » = Félicité (féminin singulier) ; les deux sont placés avant l'auxiliaire avoir." },
      { q:"Pourquoi écrit-on « un demi-siècle » sans e ?", r:"Placé devant le nom et relié par un trait d'union, « demi » est invariable." },
      { q:"Quelle est la valeur de l'imparfait dans « elle faisait la cuisine » ?", r:"L'habitude, la répétition." },
      { q:"Donne un synonyme de « dévouée ».", r:"Fidèle, serviable, attachée." }
    ] },
  { id:"o26", niveau:"difficile", auteur:"Honoré de Balzac", oeuvre:"Eugénie Grandet", annee:"1833",
    titre:"Le père Grandet",
    texte:"Le père Grandet était l'homme le plus riche de Saumur, mais personne n'aurait pu le deviner. Il portait toujours les mêmes vêtements usés et mesurait chaque matin le pain, le sucre et la bougie que sa femme et sa fille utiliseraient dans la journée. Le feu n'était allumé qu'à partir du premier novembre, quel que fût le froid. Sa servante, la grande Nanon, le servait depuis trente ans sans se plaindre. Pendant ce temps, l'or s'entassait dans un cabinet secret dont il gardait seul la clé, et qu'il visitait la nuit, quand tout le monde dormait.",
    pieges:["« personne n'aurait pu » : conditionnel passé, personne + ne.","« quel que fût le froid » : quel que en deux mots, accordé avec le froid ; subjonctif imparfait.","« dont il gardait seul la clé » : pronom relatif dont.","« utiliseraient » : futur dans le passé (conditionnel)."],
    questions:[
      { q:"Quel est le principal défaut du père Grandet ? Relève deux preuves.", r:"L'avarice : il porte des vêtements usés, mesure le pain, le sucre et la bougie, n'allume le feu qu'à partir du 1ᵉʳ novembre." },
      { q:"Pourquoi personne ne pourrait deviner sa richesse ?", r:"Il vit très pauvrement et cache son or dans un cabinet secret." },
      { q:"Relève une proposition relative introduite par « dont » et donne son antécédent.", r:"« dont il gardait seul la clé » ; antécédent : un cabinet secret." },
      { q:"Explique l'orthographe de « quel que fût le froid ».", r:"« quel que » s'écrit en deux mots devant le verbe être ; « quel » s'accorde avec le sujet « le froid » ; « fût » est au subjonctif imparfait." },
      { q:"Mets « personne n'aurait pu le deviner » au présent de l'indicatif.", r:"Personne ne peut le deviner." },
      { q:"Qu'est-ce qu'un avare ?", r:"Une personne qui aime l'argent et refuse de le dépenser." }
    ] },
  { id:"o27", niveau:"difficile", auteur:"Pierre Loti", oeuvre:"Le Roman d'un spahi", annee:"1881",
    titre:"Saint-Louis du Sénégal",
    texte:"Jean Peyral, un jeune soldat venu des montagnes de France, était arrivé à Saint-Louis du Sénégal. Il découvrait une ville blanche, posée sur le sable, entre le fleuve et la mer. Le soleil brûlait les rues désertes à l'heure de midi, et un vent chaud soufflait du désert. Le soir, quand la chaleur tombait, la vie reprenait : les femmes vêtues de pagnes éclatants allaient puiser l'eau, les pêcheurs ramenaient leurs pirogues et les tam-tams résonnaient jusqu'à la nuit. Jean, dépaysé, se sentait à la fois fasciné et terriblement seul.",
    pieges:["« venu des montagnes » : participe accordé avec un jeune soldat.","« posée sur le sable » : accordé avec une ville.","« vêtues de pagnes éclatants » : accords.","« les tam-tams » : nom composé au pluriel."],
    questions:[
      { q:"D'où vient Jean Peyral et où se trouve-t-il ?", r:"Il vient des montagnes de France ; il est soldat (spahi) à Saint-Louis du Sénégal." },
      { q:"Compare la ville à midi et le soir.", r:"À midi, les rues sont désertes et brûlées par le soleil ; le soir, la vie reprend : les femmes puisent l'eau, les pêcheurs rentrent, les tam-tams résonnent." },
      { q:"Quels sentiments éprouve Jean ? Pourquoi ?", r:"Il est à la fois fasciné par ce pays nouveau et très seul, car il est loin de chez lui (dépaysé)." },
      { q:"Relève trois participes passés employés comme adjectifs et justifie leur accord.", r:"« venu » (un soldat), « posée » (une ville), « vêtues » (les femmes)." },
      { q:"Quelle est la valeur de l'imparfait dans le texte ?", r:"La description d'un décor et d'actions habituelles." },
      { q:"Que signifie « être dépaysé » ?", r:"Se sentir étranger, perdu, loin de ses habitudes et de son pays." }
    ] },
  { id:"o28", niveau:"difficile", auteur:"Jules Verne", oeuvre:"Vingt mille lieues sous les mers", annee:"1870",
    titre:"La forêt sous-marine",
    texte:"Le capitaine Nemo nous avait invités à une promenade au fond de la mer. Revêtus de nos scaphandres, nous quittâmes le Nautilus et marchâmes sur un sable fin, à trente pieds sous la surface. Bientôt, une forêt immense se dressa devant nous. Les herbes et les arbustes ne se courbaient pas, comme ceux de la terre : ils montaient tout droit vers la lumière. Des poissons aux couleurs éclatantes glissaient entre les branches, si nombreux qu'on aurait dit des oiseaux. Jamais je n'avais contemplé un spectacle aussi merveilleux.",
    pieges:["« nous avait invités » : COD nous (le narrateur et ses compagnons) avant avoir, masculin pluriel.","« Revêtus de nos scaphandres » : accordé avec nous.","« nous quittâmes », « marchâmes » : passé simple.","« si nombreux qu'on aurait dit » : conséquence, conditionnel passé."],
    questions:[
      { q:"Comment les personnages peuvent-ils marcher au fond de la mer ?", r:"Ils portent des scaphandres et quittent le sous-marin Nautilus du capitaine Nemo." },
      { q:"En quoi la forêt sous-marine est-elle différente d'une forêt terrestre ?", r:"Les herbes et les arbustes ne se courbent pas : ils montent tout droit vers la lumière ; des poissons y nagent comme des oiseaux." },
      { q:"Relève une comparaison et explique-la.", r:"« si nombreux qu'on aurait dit des oiseaux » : les poissons qui glissent entre les branches font penser à des oiseaux dans les arbres." },
      { q:"Justifie l'accord de « invités ».", r:"Participe passé avec avoir, accordé avec le COD « nous » (masculin pluriel) placé avant." },
      { q:"Conjugue « marcher » au passé simple aux trois personnes du pluriel.", r:"Nous marchâmes, vous marchâtes, ils marchèrent." },
      { q:"Qu'est-ce qu'un scaphandre ?", r:"Un équipement étanche qui permet de respirer et de marcher sous l'eau." }
    ] },
  { id:"o29", niveau:"difficile", auteur:"Jules Verne", oeuvre:"Michel Strogoff", annee:"1876",
    titre:"Le courrier du tsar",
    texte:"Le tsar avait appris que les Tartares avaient envahi la Sibérie et coupé les lignes télégraphiques. Il fallait prévenir son frère, enfermé à Irkoutsk, qu'un traître se préparait à livrer la ville. Le tsar choisit pour cette mission Michel Strogoff, un capitaine courageux né en Sibérie. Celui-ci devrait parcourir plus de cinq mille kilomètres à travers des régions occupées par l'ennemi. Pour ne pas être reconnu, il voyagerait sous un faux nom, comme un simple marchand. « Va, lui dit le tsar, et souviens-toi que tu portes la vie de milliers d'hommes. »",
    pieges:["« avaient envahi la Sibérie et coupé les lignes » : COD après, pas d'accord.","« enfermé à Irkoutsk », « né en Sibérie » : accords avec le nom.","« occupées par l'ennemi » : accordé avec des régions.","Impératif : va, souviens-toi (trait d'union)."],
    questions:[
      { q:"Pourquoi le tsar a-t-il besoin d'un courrier ?", r:"Les Tartares ont coupé le télégraphe ; il doit prévenir son frère, à Irkoutsk, qu'un traître veut livrer la ville." },
      { q:"Pourquoi choisit-il Michel Strogoff ?", r:"Il est courageux et il connaît la Sibérie, puisqu'il y est né." },
      { q:"Quelles précautions Michel Strogoff doit-il prendre ?", r:"Voyager sous un faux nom, déguisé en simple marchand, pour ne pas être reconnu." },
      { q:"Relève deux verbes au conditionnel et explique leur valeur.", r:"« devrait », « voyagerait » : futur dans le passé." },
      { q:"Mets la phrase du tsar au discours indirect : « Va, lui dit le tsar. »", r:"Le tsar lui dit de partir (d'aller)." },
      { q:"Qu'est-ce qu'un « traître » ?", r:"Une personne qui trahit, qui livre son camp à l'ennemi." }
    ] },
  { id:"o30", niveau:"difficile", auteur:"Victor Hugo", oeuvre:"Notre-Dame de Paris", annee:"1831",
    titre:"Quasimodo et les cloches",
    texte:"Quasimodo, le sonneur de Notre-Dame, était bossu, borgne et sourd. Rejeté par tous à cause de sa laideur, il vivait seul dans les tours de la cathédrale. Ses seules amies étaient les cloches, qu'il avait appris à connaître une à une. Les jours de fête, il se jetait sur la plus grosse, qu'il appelait Marie, et la faisait balancer de toutes ses forces. Le vacarme était si terrible que les murs tremblaient. Alors, cet être que les hommes avaient repoussé se sentait enfin heureux : la cathédrale tout entière semblait lui appartenir.",
    pieges:["« Rejeté par tous » : accordé avec Quasimodo.","« qu'il avait appris à connaître » : pas d'accord (le COD est l'infinitif).","« cet être que les hommes avaient repoussé » : COD que (cet être), masculin singulier.","« tout entière » : tout est ici un adverbe ; il reste invariable devant un adjectif féminin commençant par une voyelle."],
    questions:[
      { q:"Pourquoi Quasimodo vit-il seul ?", r:"Il est rejeté par tous à cause de sa laideur (bossu, borgne et sourd)." },
      { q:"Pourquoi les cloches sont-elles ses « seules amies » ?", r:"Elles sont sa seule compagnie ; en les faisant sonner, il se sent heureux et puissant." },
      { q:"Relève l'antithèse (opposition) qui structure le texte.", r:"Quasimodo est rejeté par les hommes, mais se sent heureux et maître de la cathédrale grâce aux cloches." },
      { q:"Justifie l'accord de « repoussé ».", r:"Participe passé avec avoir, accordé avec le COD « que » (= cet être, masculin singulier) placé avant." },
      { q:"Pourquoi « appris » ne s'accorde-t-il pas dans « qu'il avait appris à connaître » ?", r:"Le COD de « appris » est l'infinitif « à connaître », et non « les cloches »." },
      { q:"Que signifie « borgne » ?", r:"Qui ne voit que d'un œil." }
    ] }
];

if (typeof module !== "undefined") module.exports = { DICTEES_OEUVRES };
