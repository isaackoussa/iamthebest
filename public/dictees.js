// I'm The Best — Banque de dictées (français, niveau 4ème)
// Textes originaux, rédigés pour l'appli. Chaque dictée : niveau, titre, texte,
// et les points d'orthographe ou de grammaire qu'elle travaille.
// Utilisée par le générateur d'exercices (type « Dictée »), lue par la synthèse vocale.

const DICTEES = [

  /* ===================== FACILE ===================== */
  { id:"d01", niveau:"facile", titre:"Le marché du samedi",
    texte:"Le samedi matin, ma mère va au marché d'Adjamé. Elle achète des tomates, des oignons et du piment. Les vendeuses appellent les clients en souriant. Moi, je porte le panier et je compte la monnaie.",
    points:["« va » (verbe aller) ≠ « à » (préposition) : ici « va au marché ».","Pluriels en -s : des tomates, des oignons, les vendeuses, les clients.","« et » relie deux éléments ; « est » est le verbe être."] },
  { id:"d02", niveau:"facile", titre:"La pluie",
    texte:"Il pleut depuis ce matin sur le village. Les enfants restent dans la case et regardent les gouttes tomber. Les poules se cachent sous le grenier. Demain, le soleil reviendra et la terre sera douce.",
    points:["Accord sujet-verbe au pluriel : les enfants restent, regardent ; les poules se cachent.","Futur simple : reviendra, sera.","« se cachent » : verbe pronominal, « se » devant le verbe."] },
  { id:"d03", niveau:"facile", titre:"Mon cartable",
    texte:"Mon cartable est lourd. Il contient mes cahiers, mes livres et ma trousse. Dans ma trousse, il y a deux stylos bleus, un crayon et une gomme. Chaque soir, je range mes affaires avant de dormir.",
    points:["« mes » (à moi, pluriel) : mes cahiers, mes livres, mes affaires.","Accord de l'adjectif : deux stylos bleus.","« est » (verbe être) : mon cartable est lourd."] },
  { id:"d04", niveau:"facile", titre:"Le football",
    texte:"Après l'école, les garçons et les filles jouent au football sur le terrain. Koffi est le gardien de but. Awa court très vite et marque un beau but. Tout le monde applaudit et crie de joie.",
    points:["« jouent » : sujet pluriel (les garçons et les filles).","« Tout le monde » est singulier : tout le monde applaudit, crie.","« beau » devant un nom masculin : un beau but."] },
  { id:"d05", niveau:"facile", titre:"La lagune",
    texte:"À Abidjan, la lagune brille au soleil. Des pirogues glissent sur l'eau calme. Les pêcheurs lancent leurs filets et attendent en silence. Le soir, ils rentrent avec des poissons frais.",
    points:["« À » en majuscule garde son accent : À Abidjan.","« leurs filets » : chaque pêcheur a plusieurs filets, donc leurs + s.","« ils rentrent » : 3ᵉ personne du pluriel, terminaison -ent."] },
  { id:"d06", niveau:"facile", titre:"Le petit frère",
    texte:"Mon petit frère a trois ans. Il aime les histoires et les chansons. Le soir, il s'assoit à côté de moi et je lui lis un conte. Souvent, il s'endort avant la fin de l'histoire.",
    points:["« a » (verbe avoir) ≠ « à » (préposition) : il a trois ans / à côté de moi.","« s'assoit », « s'endort » : verbes pronominaux.","« lui » est un pronom : je lui lis un conte."] },
  { id:"d07", niveau:"facile", titre:"Le champ de maïs",
    texte:"Mon grand-père cultive un champ de maïs près de la rivière. Il se lève tôt et travaille avec sa houe. Les épis sont grands et jaunes. Bientôt, nous ferons la récolte en famille.",
    points:["« sont » (verbe être) ≠ « son » (à lui) : les épis sont grands.","Accord des adjectifs : grands et jaunes.","Futur : nous ferons."] },
  { id:"d08", niveau:"facile", titre:"La rentrée",
    texte:"C'est la rentrée des classes. Les élèves portent des uniformes propres. Ils retrouvent leurs amis dans la cour. La cloche sonne et chacun entre dans sa salle avec le sourire.",
    points:["« C'est » = cela est.","« chacun » est singulier : chacun entre dans sa salle.","« leurs amis » : pluriel."] },
  { id:"d09", niveau:"facile", titre:"Le repas",
    texte:"Ce soir, nous mangeons du foutou avec une sauce graine. Papa partage la viande et maman sert les enfants. Nous disons merci et nous lavons les assiettes ensemble.",
    points:["« nous mangeons » : on garde le e après le g devant -ons.","« sert » : verbe servir au présent (il sert).","« ensemble » s'écrit en un seul mot."] },
  { id:"d10", niveau:"facile", titre:"Le chat",
    texte:"Notre chat s'appelle Minou. Il dort toute la journée sur la natte. La nuit, il chasse les souris dans la cuisine. Quand il a faim, il miaule devant la porte.",
    points:["« s'appelle » : deux p et deux l.","« toute la journée » : toute s'accorde avec journée.","« Quand » (moment) s'écrit avec un d."] },
  { id:"d11", niveau:"facile", titre:"Le car",
    texte:"Nous partons au village en car. Le chauffeur range les bagages sur le toit. La route est longue mais le paysage est beau. Nous voyons des collines, des forêts et des plantations.",
    points:["« mais » marque une opposition ≠ « mes » (à moi).","« est » (verbe être) répété : la route est longue, le paysage est beau.","Pluriels : des collines, des forêts, des plantations."] },
  { id:"d12", niveau:"facile", titre:"L'arbre",
    texte:"Devant notre maison, il y a un grand manguier. Ses branches donnent une ombre fraîche. Les oiseaux y font leurs nids. En saison sèche, nous mangeons ses mangues sucrées.",
    points:["« ses » (à lui, à l'arbre) ≠ « ces » (ceux-là) : ses branches, ses mangues.","« y » remplace « dans l'arbre ».","Accords : une ombre fraîche, ses mangues sucrées."] },
  { id:"d13", niveau:"facile", titre:"La bibliothèque",
    texte:"Le mercredi, je vais à la bibliothèque du collège. Je choisis un livre et je m'installe près de la fenêtre. Le silence m'aide à lire. Je rends le livre la semaine suivante.",
    points:["« je vais à la » : préposition à avec accent.","« je choisis », « je rends » : terminaisons du présent (-is, -ds).","« m'aide » : me + aide, apostrophe."] },
  { id:"d14", niveau:"facile", titre:"La fête",
    texte:"Pour la fête de fin d'année, la classe prépare un spectacle. Les uns chantent, les autres dansent. Les parents arrivent nombreux et prennent des photos. Tout le monde passe une belle soirée.",
    points:["« Les uns chantent, les autres dansent » : verbes au pluriel.","« nombreux » s'accorde avec les parents.","« prennent » : deux n."] },
  { id:"d15", niveau:"facile", titre:"Le puits",
    texte:"Chaque matin, ma sœur va chercher de l'eau au puits. Elle remplit deux seaux et les porte sur sa tête. Le chemin est étroit et glissant. Elle marche lentement pour ne rien renverser.",
    points:["« sœur » s'écrit avec œ.","« les porte » : les = les seaux (pronom).","Adverbe en -ment : lentement."] },
  { id:"d16", niveau:"facile", titre:"Le maître",
    texte:"Notre professeur de français est patient. Il explique les règles au tableau et nous donne des exemples. Quand nous faisons une erreur, il nous aide à la corriger.",
    points:["« nous donne », « nous aide » : nous est complément, le verbe reste au singulier (il).","« nous faisons » : sujet nous.","« la corriger » : infinitif après la préposition à."] },
  { id:"d17", niveau:"facile", titre:"La plage",
    texte:"Le dimanche, nous allons à la plage de Grand-Bassam. Les vagues sont fortes, alors nous restons près du bord. Mon père achète des noix de coco et nous buvons leur eau fraîche.",
    points:["« alors » marque la conséquence.","« leur eau » : leur sans s devant un nom singulier.","« nous buvons » : verbe boire."] },
  { id:"d18", niveau:"facile", titre:"Le réveil",
    texte:"Le coq chante avant le lever du soleil. Je me réveille, je me lave et je m'habille vite. Ma mère me donne une bouillie chaude. Ensuite, je prends mon sac et je pars à l'école.",
    points:["« je me lave », « je m'habille » : verbes pronominaux.","« je prends », « je pars » : terminaisons -ds et -s.","« Ensuite » marque une étape."] },
  { id:"d19", niveau:"facile", titre:"Le téléphone",
    texte:"Ma tante habite à Bouaké. Elle nous appelle tous les dimanches. Elle demande des nouvelles de chacun. Moi, je lui raconte mes notes et mes progrès à l'école.",
    points:["« tous les dimanches » : tous + s au pluriel.","« nous appelle » : deux p, deux l.","« je lui raconte » : lui sans s."] },
  { id:"d20", niveau:"facile", titre:"L'orage",
    texte:"Le ciel devient noir et le vent souffle fort. Soudain, un éclair déchire les nuages et le tonnerre gronde. Les gens courent se mettre à l'abri. Après l'orage, l'air est frais.",
    points:["« les gens courent » : gens est pluriel.","« Soudain » : adverbe sans s.","« à l'abri » : préposition à."] },

  /* ===================== MOYEN ===================== */
  { id:"d21", niveau:"moyen", titre:"La visite chez le médecin",
    texte:"Hier, ma petite sœur avait de la fièvre. Ma mère l'a emmenée au centre de santé. Le médecin l'a examinée avec attention, puis il a prescrit des médicaments. Le soir, elle allait déjà mieux et elle a mangé un peu de riz.",
    points:["Participe passé avec avoir et COD placé avant : l'a emmenée, l'a examinée (l' = ma sœur, féminin).","Imparfait : avait, allait (-ait).","« a mangé » : pas d'accord, le COD est après."] },
  { id:"d22", niveau:"moyen", titre:"Le premier jour au collège",
    texte:"Quand je suis arrivée au collège, j'étais un peu inquiète. Tout me semblait immense. Une élève de troisième m'a montré les salles et m'a présenté les professeurs. Le soir, j'ai raconté ma journée à mes parents, qui étaient fiers de moi.",
    points:["Passé composé avec être : je suis arrivée (accord avec je = une fille).","« m'a montré » : pas d'accord, me est ici complément indirect (à moi).","« qui étaient » : le verbe s'accorde avec l'antécédent « mes parents »."] },
  { id:"d23", niveau:"moyen", titre:"Les cacaoyers",
    texte:"Dans la région de Soubré, les planteurs récoltent les cabosses de cacao. Ils les ouvrent avec une machette et en retirent les fèves. Les fèves sont mises à fermenter, puis on les fait sécher au soleil pendant plusieurs jours.",
    points:["« les ouvrent » : les = les cabosses.","« en retirent » : en = des cabosses.","« sont mises » : passif, participe accordé avec les fèves (féminin pluriel)."] },
  { id:"d24", niveau:"moyen", titre:"Le conte du soir",
    texte:"Autrefois, au village, les enfants se réunissaient autour du feu. Le vieux Kouassi leur racontait l'histoire de Kakou Ananzè, l'araignée rusée. Les petits riaient et les grands écoutaient sans dire un mot. Ces soirées leur apprenaient la sagesse.",
    points:["Imparfait de l'habitude : se réunissaient, racontait, riaient, écoutaient, apprenaient.","« leur racontait » : leur devant un verbe ne prend jamais de s.","« Ces soirées » : ces (celles-là) ≠ ses (à lui)."] },
  { id:"d25", niveau:"moyen", titre:"La coupure d'électricité",
    texte:"Ce soir-là, l'électricité a été coupée dans tout le quartier. Nous avons allumé une lampe à pétrole et nous nous sommes installés dans la cour. Les voisins sont venus nous rejoindre. Finalement, la soirée a été plus joyeuse que d'habitude.",
    points:["« a été coupée » : passif, accord avec l'électricité.","« nous nous sommes installés » : verbe pronominal, accord avec nous.","« sont venus » : être, accord avec les voisins."] },
  { id:"d26", niveau:"moyen", titre:"Le match de handball",
    texte:"Notre équipe a gagné le tournoi interclasses. Les joueuses se sont battues jusqu'à la dernière minute. Quand l'arbitre a sifflé la fin du match, nous avons crié de joie. Le directeur nous a félicitées devant tout le collège.",
    points:["« se sont battues » : pronominal, accord avec les joueuses.","« nous a félicitées » : COD nous (des filles) placé avant avoir, donc accord.","« jusqu'à » : élision et accent."] },
  { id:"d27", niveau:"moyen", titre:"Le départ de Yao",
    texte:"Yao a quitté son village pour aller travailler à Abidjan. Sa mère l'a accompagné jusqu'à la gare routière. Elle lui a donné des conseils et quelques provisions. Quand le car est parti, elle a longtemps agité la main.",
    points:["« l'a accompagné » : l' = Yao (masculin singulier), pas de e.","« lui a donné » : lui est COI, pas d'accord.","« le car est parti » : accord avec le car (masculin singulier)."] },
  { id:"d28", niveau:"moyen", titre:"La saison des pluies",
    texte:"Quand la saison des pluies commence, les paysans se hâtent de semer. Les pistes deviennent boueuses et les ruisseaux se transforment en torrents. Il faut parfois attendre plusieurs heures avant de pouvoir traverser. Mais la pluie apporte aussi la vie aux champs.",
    points:["« se hâtent » : accent circonflexe.","« deviennent », « se transforment » : pluriel.","« plusieurs » s'écrit toujours avec un s."] },
  { id:"d29", niveau:"moyen", titre:"Le téléphone perdu",
    texte:"En rentrant de l'école, Mariam s'est aperçue qu'elle avait perdu son téléphone. Elle est retournée sur ses pas et l'a cherché partout. Un marchand l'avait trouvé près de l'arrêt de bus. Il le lui a rendu avec un grand sourire.",
    points:["« s'est aperçue » : accord avec Mariam (s'apercevoir est toujours accordé).","« l'a cherché », « l'avait trouvé » : l' = le téléphone, masculin.","Plus-que-parfait : avait perdu, avait trouvé (action antérieure)."] },
  { id:"d30", niveau:"moyen", titre:"La propreté du collège",
    texte:"Les élèves de quatrième ont organisé une journée de salubrité. Ils ont balayé les salles, ramassé les papiers et nettoyé les caniveaux. Les professeurs les ont aidés. À la fin de la journée, la cour était si propre qu'on ne la reconnaissait plus.",
    points:["« les ont aidés » : COD les (les élèves) avant avoir, donc accord.","« ont balayé, ramassé, nettoyé » : COD après, pas d'accord.","« si propre qu'on » : conséquence (si... que)."] },
  { id:"d31", niveau:"moyen", titre:"La pirogue",
    texte:"Les pêcheurs ont poussé la pirogue vers la mer. Les vagues étaient hautes, mais ils n'avaient pas peur. Ils ont ramé longtemps avant de jeter leurs filets. Au retour, toute la famille les attendait sur la plage pour les aider.",
    points:["« n'avaient pas » : négation ne... pas, apostrophe devant la voyelle.","« toute la famille » est singulier : attendait.","« leurs filets » : pluriel."] },
  { id:"d32", niveau:"moyen", titre:"La lettre de grand-mère",
    texte:"Grand-mère m'a écrit une longue lettre. Elle me dit que les mangues sont mûres et que les poules ont eu des poussins. Elle espère que je travaille bien à l'école. Je lui répondrai dès ce soir et je lui enverrai une photo de ma classe.",
    points:["« mûres » : accent circonflexe et accord au féminin pluriel.","Futur : je répondrai, j'enverrai (verbe envoyer).","« que » introduit des subordonnées : que les mangues sont mûres, que je travaille."] },
  { id:"d33", niveau:"moyen", titre:"Le marché de Treichville",
    texte:"Le marché de Treichville est toujours plein de monde. On y trouve des tissus aux couleurs vives, des chaussures et des produits venus de toute l'Afrique. Les marchandes discutent les prix avec patience. Les clients qui savent négocier repartent satisfaits.",
    points:["« On y trouve » : y = au marché.","« venus » s'accorde avec les produits (participe employé seul).","« qui savent » : accord avec l'antécédent « les clients »."] },
  { id:"d34", niveau:"moyen", titre:"Le devoir de mathématiques",
    texte:"Le professeur nous a rendu les copies du devoir. Certains élèves étaient déçus, d'autres étaient contents. Moi, j'avais bien révisé les fractions et j'ai obtenu une bonne note. Les exercices que j'avais ratés, je les ai refaits le soir même.",
    points:["« que j'avais ratés » : COD que (les exercices) avant avoir, accord au masculin pluriel.","« je les ai refaits » : COD les avant avoir, accord.","« nous a rendu les copies » : COD après, pas d'accord."] },
  { id:"d35", niveau:"moyen", titre:"Le baobab",
    texte:"Au milieu de la savane se dresse un baobab immense. Son tronc est si large que cinq enfants ne peuvent pas l'entourer de leurs bras. On dit qu'il a plus de cinq cents ans. Les anciens se réunissent à son ombre pour régler les problèmes du village.",
    points:["Inversion du sujet : se dresse un baobab (le sujet est après le verbe).","« cinq cents » prend un s car il n'est suivi d'aucun nombre.","« se réunissent » : sujet les anciens."] },
  { id:"d36", niveau:"moyen", titre:"La couturière",
    texte:"Tante Adjoua est couturière. Dans son atelier, elle coud des robes, des pagnes et des uniformes. Ses clientes lui apportent des tissus qu'elles ont achetés au marché. Elle prend leurs mesures, puis elle dessine les modèles qu'elles ont choisis.",
    points:["« elle coud » : verbe coudre (d final).","« qu'elles ont achetés » : COD que (des tissus) avant avoir.","« qu'elles ont choisis » : COD que (les modèles), masculin pluriel."] },
  { id:"d37", niveau:"moyen", titre:"La fête de l'igname",
    texte:"Chaque année, les Akan célèbrent la fête de l'igname. Avant ce jour, personne n'a le droit de manger les nouvelles ignames. Les familles se rassemblent, les tambours résonnent et les danseurs se mettent en mouvement. C'est un moment de joie et de remerciement.",
    points:["« personne n'a » : personne + ne, verbe au singulier.","« nouvelles ignames » : igname est féminin.","« se rassemblent », « résonnent », « se mettent » : pluriel."] },
  { id:"d38", niveau:"moyen", titre:"Le vélo neuf",
    texte:"Pour mon anniversaire, mon oncle m'a offert un vélo neuf. Je l'ai essayé tout de suite dans la rue. Au début, je tombais souvent, mais mon cousin m'a appris à garder l'équilibre. Maintenant, je vais à l'école à vélo et j'arrive toujours à l'heure.",
    points:["« m'a offert » : me est COI (à moi), pas d'accord.","« je l'ai essayé » : l' = le vélo, masculin.","« tout de suite » s'écrit en trois mots."] },
  { id:"d39", niveau:"moyen", titre:"Les tortues de mer",
    texte:"Sur les plages de Grand-Béréby, des tortues viennent pondre leurs œufs la nuit. Elles creusent un trou dans le sable, y déposent leurs œufs et repartent vers la mer. Quelques semaines plus tard, les petites tortues sortent du sable et courent vers les vagues.",
    points:["« leurs œufs » : œ et pluriel.","« y déposent » : y = dans le trou.","« Quelques semaines » : quelques + s au pluriel."] },
  { id:"d40", niveau:"moyen", titre:"La panne du car",
    texte:"Au milieu du trajet, le car est tombé en panne. Le chauffeur est descendu et a ouvert le capot. Les passagers se sont assis à l'ombre des arbres en attendant. Deux heures plus tard, un mécanicien est arrivé et a réparé le moteur.",
    points:["« est tombé », « est descendu », « est arrivé » : passé composé avec être, accord avec le sujet.","« se sont assis » : accord avec les passagers.","« en attendant » : gérondif."] },

  /* ===================== DIFFICILE ===================== */
  { id:"d41", niveau:"difficile", titre:"La leçon du vieux pêcheur",
    texte:"Le vieux pêcheur que nous avions rencontré sur la plage nous a raconté sa vie. Il avait commencé à pêcher dès l'âge de dix ans. Les tempêtes qu'il avait affrontées, les nuits qu'il avait passées en mer, il les évoquait sans se plaindre. Il voulait que nous comprenions la valeur du travail.",
    points:["« que nous avions rencontré » : COD que (le pêcheur) avant avoir, masculin singulier.","« les tempêtes qu'il avait affrontées », « les nuits qu'il avait passées » : accord avec le COD placé avant.","Subjonctif après « vouloir que » : que nous comprenions."] },
  { id:"d42", niveau:"difficile", titre:"Le retour des pluies",
    texte:"Après des mois de sécheresse, les premières pluies sont enfin tombées. Les paysans, qui avaient craint de perdre leurs récoltes, se sont précipités dans les champs. Les semences qu'ils avaient gardées précieusement ont été mises en terre. Bien qu'ils soient fatigués, ils travaillent du matin au soir.",
    points:["« se sont précipités » : accord avec les paysans.","« qu'ils avaient gardées » : COD que (les semences) avant avoir, féminin pluriel.","« Bien que » est suivi du subjonctif : bien qu'ils soient."] },
  { id:"d43", niveau:"difficile", titre:"L'exode rural",
    texte:"Chaque année, de nombreux jeunes quittent leur village pour s'installer en ville. Ils espèrent y trouver un emploi et une vie meilleure. Pourtant, beaucoup d'entre eux découvrent des difficultés qu'ils n'avaient pas imaginées. Il faudrait que les campagnes offrent davantage d'opportunités pour que les jeunes y restent.",
    points:["« beaucoup d'entre eux découvrent » : accord avec le complément (eux), au pluriel.","« qu'ils n'avaient pas imaginées » : COD que (des difficultés) avant avoir.","Subjonctif : il faudrait que les campagnes offrent ; pour que les jeunes restent."] },
  { id:"d44", niveau:"difficile", titre:"La forêt menacée",
    texte:"La forêt de Taï est l'une des dernières forêts primaires d'Afrique de l'Ouest. Les arbres qui s'y élèvent abritent des chimpanzés, des éléphants et des centaines d'espèces d'oiseaux. Les menaces que les braconniers et les planteurs font peser sur elle sont nombreuses. Il est urgent que chacun prenne conscience de sa fragilité.",
    points:["« l'une des dernières forêts » : accord au pluriel de forêts.","« qui s'y élèvent » : accord avec « les arbres ».","Subjonctif : il est urgent que chacun prenne."] },
  { id:"d45", niveau:"difficile", titre:"Un souvenir d'enfance",
    texte:"Lorsque j'étais enfant, je passais mes vacances chez ma grand-mère, à Korhogo. Elle se levait avant l'aube et préparait le feu. Je me souviens des histoires qu'elle m'a racontées et des chansons qu'elle m'a apprises. Ces moments-là, je ne les ai jamais oubliés.",
    points:["« les histoires qu'elle m'a racontées », « les chansons qu'elle m'a apprises » : accord avec le COD que, placé avant.","« je ne les ai jamais oubliés » : COD les (ces moments) avant avoir.","« Ces moments-là » : trait d'union."] },
  { id:"d46", niveau:"difficile", titre:"Le chef du village",
    texte:"Le chef du village convoqua tous les habitants sur la place. Lorsqu'ils furent réunis, il prit la parole d'une voix grave. Il leur annonça que la route serait bientôt goudronnée et que chacun devrait participer aux travaux. Les villageois, qui attendaient cette nouvelle depuis longtemps, l'accueillirent avec enthousiasme.",
    points:["Passé simple : convoqua, furent, prit, annonça, accueillirent.","Conditionnel dans le discours indirect : serait, devrait.","« l'accueillirent » : verbe accueillir, -cueil-."] },
  { id:"d47", niveau:"difficile", titre:"La compétition de génie en herbe",
    texte:"Les élèves que le collège avait sélectionnés pour le concours se sont entraînés pendant des semaines. Le jour de la finale, ils ont répondu à des questions de mathématiques, d'histoire et de sciences. Quoique leurs adversaires fussent redoutables, ils ont remporté la victoire. Leurs professeurs ne cachaient pas leur fierté.",
    points:["« que le collège avait sélectionnés » : COD que (les élèves) avant avoir.","« se sont entraînés » : accord avec le sujet.","« leur fierté » (singulier) / « leurs professeurs » (pluriel)."] },
  { id:"d48", niveau:"difficile", titre:"La lettre au ministre",
    texte:"Monsieur le Ministre, nous, élèves de quatrième, souhaitons attirer votre attention sur l'état de notre collège. Les tables sont abîmées et plusieurs salles n'ont plus de fenêtres. Nous vous serions reconnaissants de bien vouloir envisager des travaux. Veuillez agréer, Monsieur le Ministre, l'expression de notre profond respect.",
    points:["« nous serions reconnaissants » : conditionnel de politesse, accord avec nous.","« abîmées » : accent circonflexe et accord.","« Veuillez agréer » : formule de politesse de la lettre officielle."] },
  { id:"d49", niveau:"difficile", titre:"Le griot",
    texte:"Le griot s'avança au milieu du cercle et commença à chanter. Sa voix puissante racontait les exploits des ancêtres, leurs batailles et leurs alliances. Les vieillards, qui connaissaient ces récits par cœur, hochaient la tête. Quant aux enfants, ils écoutaient, fascinés, des histoires qu'ils n'avaient jamais entendues.",
    points:["« Quant aux » (en ce qui concerne) ≠ « quand » (moment).","« fascinés » : participe employé comme adjectif, accordé avec ils.","« qu'ils n'avaient jamais entendues » : COD que (des histoires) avant avoir."] },
  { id:"d50", niveau:"difficile", titre:"L'eau, une ressource précieuse",
    texte:"L'eau que nous buvons provient souvent de rivières ou de nappes souterraines. Avant d'arriver au robinet, elle doit être traitée pour éliminer les impuretés et les microbes. Pourtant, nombreux sont ceux qui la gaspillent sans y penser. Si chacun fermait le robinet en se brossant les dents, des milliers de litres seraient économisés.",
    points:["« nombreux sont ceux qui » : inversion, accord au pluriel.","Hypothèse : si + imparfait, conditionnel (si chacun fermait..., seraient économisés).","« doit être traitée » : passif, accord avec l'eau."] },
  { id:"d51", niveau:"difficile", titre:"Le départ en exil",
    texte:"Le jour où il quitta son pays, Ahmed emporta seulement une valise et quelques photographies. Les rues qu'il avait tant parcourues, les amis qu'il avait connus depuis l'enfance, il savait qu'il ne les reverrait peut-être jamais. Pourtant, il gardait l'espoir qu'un jour la paix reviendrait.",
    points:["« Le jour où » : où relatif de temps (avec accent).","« les rues qu'il avait tant parcourues », « les amis qu'il avait connus » : accord avec le COD que.","Conditionnel (futur dans le passé) : reverrait, reviendrait."] },
  { id:"d52", niveau:"difficile", titre:"La décision",
    texte:"Après avoir longtemps hésité, Fatou décida de se présenter à l'élection des délégués. Ses camarades, qu'elle avait souvent aidés en mathématiques, la soutinrent aussitôt. Bien qu'elle fût timide, elle prononça un discours qui convainquit toute la classe. Elle fut élue à une large majorité.",
    points:["« qu'elle avait souvent aidés » : COD que (ses camarades) avant avoir.","Passé simple : décida, soutinrent, prononça, convainquit, fut.","« Bien qu'elle fût » : subjonctif imparfait (littéraire) après bien que."] },
  { id:"d53", niveau:"difficile", titre:"Le marché flottant",
    texte:"Sur la lagune, les commerçantes ont installé un petit marché sur des pirogues amarrées les unes aux autres. Elles vendent du poisson fumé, des fruits et des beignets qu'elles ont préparés à l'aube. Les acheteurs, venus de toutes les rives, s'y pressent dès les premières heures du jour.",
    points:["« amarrées » : participe accordé avec les pirogues.","« qu'elles ont préparés » : COD que (des beignets) avant avoir, masculin pluriel.","« venus de toutes les rives » : participe accordé avec les acheteurs."] },
  { id:"d54", niveau:"difficile", titre:"Le débat en classe",
    texte:"Le professeur avait proposé un débat sur l'utilisation du téléphone à l'école. Certains pensaient qu'il fallait l'interdire, d'autres affirmaient qu'il pouvait servir à apprendre. Chacun exposa ses arguments en respectant la parole des autres. À la fin, la classe conclut qu'un usage encadré serait la meilleure solution.",
    points:["« l'interdire » : l' = le téléphone.","« Chacun exposa ses arguments » : chacun est singulier, ses arguments au pluriel.","Conditionnel dans le discours indirect : serait."] },
  { id:"d55", niveau:"difficile", titre:"La traversée du fleuve",
    texte:"Le passeur nous fit signe de monter dans la barque. Le courant était si fort que nous dûmes nous agripper aux bords. Les eaux boueuses, que les pluies avaient gonflées, charriaient des branches et des troncs d'arbres. Lorsque nous atteignîmes l'autre rive, nous poussâmes un soupir de soulagement.",
    points:["Passé simple à la 1ʳᵉ personne du pluriel : nous dûmes, nous atteignîmes, nous poussâmes (accents circonflexes).","« que les pluies avaient gonflées » : COD que (les eaux) avant avoir.","« si fort que » : conséquence."] },
  { id:"d56", niveau:"difficile", titre:"Le recyclage",
    texte:"Dans notre quartier, une association collecte les bouteilles en plastique que les habitants jetaient autrefois dans les caniveaux. Les déchets qu'elle a récupérés sont transformés en pavés et en tables-bancs pour les écoles. Grâce à cette initiative, les rues sont plus propres et des jeunes ont trouvé un emploi.",
    points:["« que les habitants jetaient » : imparfait, pas d'accord (verbe conjugué, pas un participe).","« qu'elle a récupérés » : COD que (les déchets) avant avoir.","« tables-bancs » : nom composé, les deux noms au pluriel."] },
  { id:"d57", niveau:"difficile", titre:"La nuit au campement",
    texte:"La nuit était tombée sur le campement. Les chasseurs, épuisés par leur longue marche, s'étaient allongés autour du feu. Les bruits de la forêt, qu'ils avaient appris à reconnaître, ne les inquiétaient plus. Seul le plus jeune ne parvenait pas à s'endormir ; il guettait le moindre craquement.",
    points:["« s'étaient allongés » : plus-que-parfait d'un verbe pronominal, accord avec les chasseurs.","« qu'ils avaient appris à reconnaître » : pas d'accord, le COD de « appris » est l'infinitif « à reconnaître ».","Point-virgule : il sépare deux propositions liées."] },
  { id:"d58", niveau:"difficile", titre:"La jeune inventrice",
    texte:"À quinze ans, Aminata a conçu un petit appareil qui purifie l'eau grâce à l'énergie solaire. Les journalistes qui l'ont interrogée ont été impressionnés par sa simplicité. Elle explique que l'idée lui est venue lorsque ses voisins sont tombés malades après avoir bu l'eau du puits.",
    points:["« les journalistes qui l'ont interrogée » : COD l' (Aminata) avant avoir, féminin.","« l'idée lui est venue » : être, accord avec l'idée.","« après avoir bu » : infinitif passé."] },
  { id:"d59", niveau:"difficile", titre:"Le discours du directeur",
    texte:"En cette fin d'année, je tiens à féliciter tous les élèves qui ont fourni des efforts. Les résultats que vous avez obtenus témoignent de votre travail. Je remercie également les parents, sans lesquels rien n'aurait été possible. Je souhaite que vous passiez de bonnes vacances et que vous reveniez en forme.",
    points:["« que vous avez obtenus » : COD que (les résultats) avant avoir.","« sans lesquels » : pronom relatif composé, accordé avec les parents.","Subjonctif après « souhaiter que » : que vous passiez, que vous reveniez."] },
  { id:"d60", niveau:"difficile", titre:"La réconciliation",
    texte:"Les deux familles s'étaient disputées pendant des années à cause d'une parcelle de terre. Les anciens, que la situation inquiétait, les ont réunies sous l'arbre à palabres. Après de longues discussions, chacun a reconnu ses torts. On a partagé un repas, et la paix est revenue entre les deux familles.",
    points:["« s'étaient disputées » : pronominal, accord avec les deux familles.","« les ont réunies » : COD les (les familles) avant avoir, féminin pluriel.","« la paix est revenue » : être, accord avec la paix."] }
];

/* ---------- Moteur de dictée (sans interface, testable) ---------- */
const DICTEE_ENGINE = (function(){
  const PUNCT = /^[.,;:!?…]$/;
  const norm = t => String(t)
    .replace(/[’ʼ`´]/g, "'")          // apostrophes typographiques -> '
    .replace(/[  ]/g, " ")             // espaces insécables
    .replace(/[«»"“”]/g, " ")
    .replace(/\.\.\./g, "…");

  // Un mot peut contenir des traits d'union ; « l' », « qu' », « j' » forment un mot à part.
  function tokenize(text){
    return norm(text).match(/[\p{L}\p{N}]+(?:-[\p{L}\p{N}]+)*'?|[.,;:!?…]/gu) || [];
  }

  const stripAccents = w => w.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/œ/g, "oe").replace(/æ/g, "ae");

  // nature d'une faute, pour l'expliquer à l'élève
  function kind(exp, got){
    if (exp && PUNCT.test(exp) || got && PUNCT.test(got)) return "ponctuation";
    if (exp && got){
      if (exp.toLowerCase() === got.toLowerCase()) return "majuscule";
      if (stripAccents(exp).toLowerCase() === stripAccents(got).toLowerCase()) return "accent";
      const e = exp.toLowerCase(), g = got.toLowerCase();
      if (e.length > 2 && (e.startsWith(g) || g.startsWith(e)) && Math.abs(e.length - g.length) <= 3) return "terminaison";
      return "orthographe";
    }
    return exp ? "mot oublié" : "mot en trop";
  }

  /* Aligne le texte attendu et le texte tapé (distance d'édition sur les mots)
     et renvoie la liste des opérations : ok, faute (remplacement), oubli, ajout. */
  function compare(expectedText, typedText, opts){
    const withPunct = !opts || opts.ponctuation !== false;
    let E = tokenize(expectedText), T = tokenize(typedText);
    if (!withPunct){ E = E.filter(t => !PUNCT.test(t)); T = T.filter(t => !PUNCT.test(t)); }
    const n = E.length, m = T.length;
    // coût d'un remplacement : faible si seuls l'accent ou la majuscule diffèrent,
    // très élevé entre un mot et un signe de ponctuation (on préfère alors oubli + ajout)
    const subCost = (a, b) => {
      if (a === b) return 0;
      if (PUNCT.test(a) !== PUNCT.test(b)) return 2.5;
      const k = kind(a, b);
      return (k === "majuscule" || k === "accent") ? 0.4 : (k === "terminaison" ? 0.7 : 1);
    };
    const D = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
    for (let i = 0; i <= n; i++) D[i][0] = i;
    for (let j = 0; j <= m; j++) D[0][j] = j;
    for (let i = 1; i <= n; i++) for (let j = 1; j <= m; j++){
      D[i][j] = Math.min(D[i-1][j] + 1, D[i][j-1] + 1, D[i-1][j-1] + subCost(E[i-1], T[j-1]));
    }
    const eq = (x, y) => Math.abs(x - y) < 1e-9;
    const ops = [];
    let i = n, j = m;
    while (i > 0 || j > 0){
      if (i > 0 && j > 0 && eq(D[i][j], D[i-1][j-1] + subCost(E[i-1], T[j-1]))){
        ops.push(E[i-1] === T[j-1] ? { op:"ok", exp:E[i-1], got:T[j-1] } : { op:"faute", exp:E[i-1], got:T[j-1], kind:kind(E[i-1], T[j-1]) });
        i--; j--;
      }
      else if (i > 0 && eq(D[i][j], D[i-1][j] + 1)){ ops.push({ op:"oubli", exp:E[i-1], kind:kind(E[i-1], null) }); i--; }
      else { ops.push({ op:"ajout", got:T[j-1], kind:kind(null, T[j-1]) }); j--; }
    }
    ops.reverse();
    // barème : 1 point par faute, ½ point pour la ponctuation, les majuscules et les accents
    let points = 0, fautes = 0;
    ops.forEach(o => {
      if (o.op === "ok") return;
      fautes++;
      points += (o.kind === "ponctuation" || o.kind === "majuscule" || o.kind === "accent") ? 0.5 : 1;
    });
    const note = Math.max(0, Math.round((20 - points) * 2) / 2);
    return { ops, fautes, points, note, total: E.length };
  }

  /* Découpe le texte en groupes de mots à dicter : d'abord les phrases, puis les
     virgules, puis des morceaux d'environ 5 mots pour les longues propositions. */
  function groups(text){
    const sentences = norm(text).split(/(?<=[.!?…])\s+/).filter(Boolean);
    const out = [];
    sentences.forEach(s => {
      s.split(/(?<=[,;:])\s+/).forEach(part => {
        const words = part.split(/\s+/).filter(Boolean);
        if (words.length <= 7){ out.push(words.join(" ")); return; }
        const k = Math.ceil(words.length / Math.ceil(words.length / 5));
        for (let i = 0; i < words.length; i += k) out.push(words.slice(i, i + k).join(" "));
      });
    });
    return out;
  }

  // texte à prononcer : on peut dicter la ponctuation en toutes lettres
  const NOMS = { ",":"virgule", ";":"point-virgule", ":":"deux points", ".":"point",
                 "?":"point d'interrogation", "!":"point d'exclamation", "…":"points de suspension" };
  function spoken(text, dicterPonctuation){
    if (!dicterPonctuation) return norm(text);
    let out = "";
    tokenize(text).forEach(t => {
      if (PUNCT.test(t)) out += ", " + NOMS[t] + (/[.?!…]/.test(t) ? ". " : ", ");
      else out += (out && !/[\s']$/.test(out) ? " " : "") + t;
    });
    return out.replace(/\s+/g, " ").trim();
  }

  return { tokenize, compare, groups, spoken };
})();

if (typeof module !== "undefined") module.exports = { DICTEES, DICTEE_ENGINE };
