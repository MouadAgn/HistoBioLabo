export type ActivityProcessStep = {
  title: string
  description: string
}

export type Activity = {
  title: string
  slug: string
  shortDescription: string
  longDescription: string
  images: string[]
  process: ActivityProcessStep[]
  icon: string
}

export const activities: Activity[] = [
  {
    title: "Macroscopie",
    slug: "macroscopie",
    shortDescription: "Analyse macroscopique rigoureuse des pièces pour une orientation précise.",
    longDescription:
      "La macroscopie est la première lecture d’une pièce opératoire ou d’un prélèvement. Elle conditionne tout le parcours diagnostique, car elle transforme un volume biologique en une information structurée, traçable et exploitable. Dans notre laboratoire, chaque pièce est reçue avec des contrôles d’identitovigilance et une description minutieuse : taille, poids, couleur, consistance, limites d’exérèse, relations anatomiques et orientation chirurgicale. Cette étape permet de sélectionner les zones pertinentes à échantillonner, d’éviter toute perte d’information et d’optimiser la pertinence clinique des analyses qui suivent. Nous utilisons des protocoles standardisés, un étiquetage univoque et une iconographie systématique pour documenter la pièce, faciliter les échanges avec les cliniciens et améliorer la compréhension du compte rendu. La macroscopie est aussi un acte de communication : elle relie la réalité opératoire au langage histologique, tout en garantissant la cohérence entre les prélèvements, les blocs et les lames. Notre approche privilégie la précision, la traçabilité et la rapidité, afin d’offrir aux équipes médicales une base fiable pour les décisions thérapeutiques.",
    images: ["/images_defilement/1 Macroscopie/1.png"],
    process: [
      {
        title: "Réception & traçabilité",
        description:
          "Contrôle d’identitovigilance, enregistrement et codification du prélèvement dans le circuit analytique.",
      },
      {
        title: "Description structurée",
        description:
          "Mesures, orientation et documentation photographique pour préserver l’information anatomique.",
      },
      {
        title: "Échantillonnage ciblé",
        description:
          "Sélection des zones clés selon le contexte clinique pour maximiser la valeur diagnostique.",
      },
    ],
    icon: "Microscope",
  },
  {
    title: "Histopathologie",
    slug: "histopathologie",
    shortDescription: "Colorations et examens histologiques pour un diagnostic fiable.",
    longDescription:
      "L’histopathologie analyse l’architecture tissulaire au microscope afin d’identifier, de classifier et de stadifier les pathologies. Cette discipline est le cœur de l’anatomopathologie : elle met en évidence les anomalies morphologiques, les processus inflammatoires, infectieux ou tumoraux, et guide les décisions thérapeutiques. Notre expertise repose sur une chaîne maîtrisée : fixation adéquate, inclusion rigoureuse, coupes fines et colorations adaptées à la question clinique. Les colorations standards (HES) sont complétées par des techniques spéciales lorsque nécessaire, afin de préciser les lésions, les agents infectieux ou les dépôts. Chaque cas bénéficie d’une lecture approfondie, d’une corrélation clinico-radiologique et, si besoin, d’une relecture collégiale. Cette approche permet d’assurer une interprétation fiable, reproductible et utile pour le clinicien. Nous privilégions la clarté des comptes rendus, l’alignement avec les référentiels internationaux et une communication proactive pour optimiser la prise en charge du patient. L’histopathologie n’est pas seulement un examen : c’est une synthèse médicale qui transforme le tissu en décisions cliniques.",
    images: ["/images_defilement/2 Histopathologie/2.jpg"],
    process: [
      {
        title: "Préparation des lames",
        description:
          "Fixation, inclusion en paraffine et coupes fines pour préserver l’architecture tissulaire.",
      },
      {
        title: "Colorations ciblées",
        description:
          "HES et techniques spéciales selon l’indication pour affiner l’interprétation.",
      },
      {
        title: "Interprétation experte",
        description:
          "Lecture structurée avec corrélation clinique et rédaction d’un compte rendu clair.",
      },
    ],
    icon: "ScanLine",
  },
  {
    title: "Cytopathologie",
    slug: "cytopathologie",
    shortDescription: "Étude cellulaire fine pour le dépistage et le diagnostic précoce.",
    longDescription:
      "La cytopathologie explore les cellules isolées ou en petits amas pour détecter précocement les anomalies, notamment dans les programmes de dépistage. Elle est essentielle pour évaluer des lésions avant tout geste invasif, orienter un diagnostic ou surveiller une pathologie connue. Notre laboratoire met en œuvre des protocoles de préparation qui garantissent la qualité des prélèvements : étalements maîtrisés, fixation immédiate, coloration adaptée et, lorsque pertinent, préparation en milieu liquide. Cette rigueur technique améliore la lisibilité des cellules, réduit les artéfacts et augmente la fiabilité des résultats. L’interprétation cytologique exige une expertise fine : nous analysons la morphologie, la cohésion, les caractéristiques nucléaires et le contexte inflammatoire. En cas de doute, une corrélation avec l’histologie ou des examens complémentaires est proposée pour sécuriser la décision médicale. Notre objectif est de fournir un diagnostic rapide, utile et pédagogique, afin d’accompagner les cliniciens dans la stratégie de prise en charge. La cytopathologie est une discipline de précision où chaque détail compte pour la santé du patient.",
    images: ["/images_defilement/3 Cytopathologie/3.jpg"],
    process: [
      {
        title: "Préparation des prélèvements",
        description:
          "Étale­ment contrôlé, fixation rapide ou milieu liquide pour une qualité optimale.",
      },
      {
        title: "Colorations spécialisées",
        description:
          "Techniques adaptées à l’indication pour révéler les caractéristiques cellulaires.",
      },
      {
        title: "Conclusion intégrée",
        description:
          "Interprétation cytologique avec recommandation d’examens complémentaires si nécessaire.",
      },
    ],
    icon: "TestTube2",
  },
  {
    title: "Immunohistochimie",
    slug: "immunohistochimie",
    shortDescription: "Marquages ciblés pour préciser l’origine et le profil tumoral.",
    longDescription:
      "L’immunohistochimie est une technique clé pour caractériser les tissus et préciser l’origine des lésions. En ciblant des antigènes spécifiques, elle met en évidence des profils d’expression qui orientent le diagnostic, la classification et parfois la thérapeutique. Cette approche est particulièrement précieuse en oncologie, dans les diagnostics complexes ou lorsqu’un type tumoral doit être confirmé. Notre laboratoire utilise des panels d’anticorps validés, une automatisation contrôlée et des procédures strictes pour garantir la reproductibilité des résultats. Chaque cas est évalué dans un contexte clinique global, avec une interprétation intégrée des marquages positifs et négatifs. Les contrôles internes et externes sont systématiques pour assurer la qualité. L’objectif n’est pas seulement d’identifier une tumeur, mais de fournir une information biologique utile aux traitements ciblés. Nous transformons l’expression moléculaire en une lecture morphologique claire, afin d’aider les cliniciens à choisir la meilleure stratégie thérapeutique pour le patient.",
    images: ["/images_defilement/4 immunohistochimie/4.jpg"],
    process: [
      {
        title: "Sélection des marqueurs",
        description:
          "Choix d’anticorps ciblés selon le contexte clinique et la morphologie.",
      },
      {
        title: "Automatisation contrôlée",
        description:
          "Protocoles standardisés avec contrôles qualité internes et externes.",
      },
      {
        title: "Interprétation intégrée",
        description:
          "Lecture croisée des marquages et synthèse diagnostique utile au clinicien.",
      },
    ],
    icon: "BadgeCheck",
  },
  {
    title: "Typage HPV",
    slug: "typage-hpv",
    shortDescription: "Détection et typage du papillomavirus humain avec précision.",
    longDescription:
      "Le typage HPV permet d’identifier la présence et le type de papillomavirus humain, un facteur majeur dans certaines lésions précancéreuses et cancéreuses. Cet examen contribue au dépistage, au suivi et à la stratification du risque, en complément de la cytologie et de l’histologie. Nous appliquons des techniques fiables pour détecter les génotypes à haut risque, avec une traçabilité complète de l’échantillon. La qualité du prélèvement et la standardisation du processus sont essentielles pour garantir la pertinence du résultat. Nos biologistes interprètent les données dans leur contexte clinique afin de fournir un avis clair pour la prise en charge. Le typage HPV n’est pas une simple donnée technique : il guide la surveillance, oriente les décisions thérapeutiques et améliore la prévention. Notre engagement est d’offrir des résultats précis, rapides et sécurisés, afin de renforcer la prévention et l’efficacité des parcours de soins.",
    images: ["/images_defilement/5 Typage HPV/5.png"],
    process: [
      {
        title: "Contrôle du prélèvement",
        description:
          "Vérification de la conformité et préparation selon les normes de biologie moléculaire.",
      },
      {
        title: "Détection & typage",
        description:
          "Analyse ciblée des génotypes HPV, notamment à haut risque oncogène.",
      },
      {
        title: "Restitution clinique",
        description:
          "Interprétation contextualisée pour guider dépistage, suivi et prévention.",
      },
    ],
    icon: "ShieldCheck",
  },
  {
    title: "Circuit urgent",
    slug: "circuit-urgent",
    shortDescription: "Prélèvements critiques traités en priorité selon l’indication.",
    longDescription:
      "Le circuit urgent répond aux situations cliniques qui exigent un diagnostic rapide pour orienter une prise en charge immédiate. Il s’agit d’un parcours prioritaire, structuré et sécurisé, qui mobilise l’ensemble des équipes pour réduire les délais sans compromettre la qualité. Chaque demande est évaluée pour confirmer le niveau d’urgence et déclencher une chaîne dédiée : réception prioritaire, préparation accélérée, lecture rapide et communication directe avec le clinicien. Ce circuit est crucial dans les décisions opératoires, les gestes oncologiques ou les situations aiguës. Nous garantissons la traçabilité de chaque étape et maintenons les standards de qualité identiques aux examens programmés. L’objectif est simple : fournir un résultat fiable dans un délai court, tout en gardant un niveau d’exigence maximal. Notre organisation s’appuie sur une coordination interne fluide, des protocoles de priorisation et une disponibilité médicale renforcée. Ainsi, le circuit urgent devient un véritable outil de décision pour les équipes soignantes.",
    images: ["/images_defilement/6 Circuit urgent/6.png"],
    process: [
      {
        title: "Priorisation immédiate",
        description:
          "Validation de l’urgence et mise en file dédiée pour réduire les délais.",
      },
      {
        title: "Traitement accéléré",
        description:
          "Préparation et lecture optimisées tout en conservant les standards qualité.",
      },
      {
        title: "Communication directe",
        description:
          "Transmission rapide des résultats au clinicien avec avis médical.",
      },
    ],
    icon: "Zap",
  },
  {
    title: "Matériel et techniques",
    slug: "materiel-et-techniques",
    shortDescription: "Plateau technique performant et contrôles qualité systématiques.",
    longDescription:
      "Un diagnostic fiable repose sur un plateau technique robuste, maîtrisé et continuellement contrôlé. Notre laboratoire investit dans des équipements modernes : automates de coloration, microtomes de précision, systèmes d’imagerie et outils de gestion de l’échantillon. Chaque instrument est suivi par des procédures de maintenance et de calibration régulières, garantissant la stabilité des résultats. Les techniques sont choisies selon leur pertinence clinique, la sensibilité requise et la reproductibilité attendue. Nos équipes sont formées aux bonnes pratiques et aux mises à jour technologiques, afin d’intégrer les innovations sans perdre la rigueur des standards. Cette combinaison de matériel performant et de protocoles stricts permet d’assurer des analyses rapides, fiables et comparables dans le temps. En anatomopathologie, la qualité technique est un gage de sécurité médicale. Nous nous engageons à offrir aux cliniciens des résultats soutenus par une infrastructure solide, afin de sécuriser les décisions thérapeutiques et la confiance des patients.",
    images: ["/images_defilement/7 Matériel et techniques/7.jpg"],
    process: [
      {
        title: "Calibration continue",
        description:
          "Maintenance planifiée et contrôles internes pour stabiliser la performance.",
      },
      {
        title: "Protocoles standardisés",
        description:
          "Méthodes validées et documentées pour garantir la reproductibilité.",
      },
      {
        title: "Veille technologique",
        description:
          "Intégration raisonnée des innovations pour renforcer la qualité des analyses.",
      },
    ],
    icon: "FlaskConical",
  },
  {
    title: "Innovation et suivi",
    slug: "innovation-et-suivi",
    shortDescription: "Intégration d’outils modernes pour une traçabilité optimale.",
    longDescription:
      "L’innovation en anatomopathologie ne se limite pas aux équipements ; elle concerne aussi les méthodes de suivi, la traçabilité et l’expérience clinique. Nous intégrons des outils numériques pour sécuriser la chaîne d’analyses, faciliter l’accès aux données et améliorer la communication avec les équipes médicales. La traçabilité complète de chaque échantillon, du prélèvement à la restitution, réduit les risques d’erreur et renforce la confiance. Nous mettons en œuvre des systèmes de double vérification, des procédures de relecture et des indicateurs qualité pour maintenir un haut niveau d’exigence. L’innovation est pensée comme un levier d’amélioration continue : elle soutient la qualité diagnostique, accélère les délais et facilite le suivi longitudinal des patients. Cette approche s’accompagne d’une écoute active des cliniciens et d’une adaptation aux besoins spécifiques. Notre engagement est de construire une anatomopathologie moderne, sûre et centrée sur le patient, où la technologie est au service de la fiabilité médicale.",
    images: ["/documents/1 Photos macroscopiques jointes au CR/3B.jpg", "/documents/1 Photos macroscopiques jointes au CR/2B.png"],
    process: [
      {
        title: "Traçabilité numérique",
        description:
          "Suivi complet des échantillons avec historisation et sécurisation des données.",
      },
      {
        title: "Contrôles qualité",
        description:
          "Indicateurs et relectures régulières pour maintenir un haut niveau d’exigence.",
      },
      {
        title: "Amélioration continue",
        description:
          "Optimisation des flux et intégration d’outils modernes adaptés aux besoins.",
      },
    ],
    icon: "Sparkles",
  },
  {
    title: "Rigueur Diagnostiques",
    slug: "rigueur-diagnostiques",
    shortDescription: "Relecture et vérifications pour garantir la précision finale.",
    longDescription:
      "La rigueur diagnostique est la colonne vertébrale de notre pratique. Chaque compte rendu engage une décision médicale, parfois urgente ou lourde de conséquences. C’est pourquoi nous appliquons un processus de vérification strict et structuré. La lecture morphologique est confrontée aux données cliniques, radiologiques et aux antécédents. En cas de cas complexe, une relecture collégiale est organisée afin d’assurer la cohérence et la fiabilité du diagnostic. Nous maintenons une documentation précise, des protocoles d’assurance qualité et des audits internes réguliers. Cette exigence ne ralentit pas le processus ; elle le sécurise. Elle permet de réduire les incertitudes, d’améliorer la pertinence des recommandations et de renforcer la confiance des cliniciens. Notre objectif est d’offrir un diagnostic clair, argumenté et utile pour la stratégie thérapeutique. La rigueur diagnostique, c’est la promesse d’un laboratoire qui place la sécurité du patient au centre de chaque décision.",
    images: ["/images_defilement/9 Rigueur Diagnostiques/9.png"],
    process: [
      {
        title: "Lecture experte",
        description:
          "Analyse morphologique approfondie avec corrélation clinico-radiologique.",
      },
      {
        title: "Relecture collégiale",
        description:
          "Validation par plusieurs experts pour les dossiers complexes ou sensibles.",
      },
      {
        title: "Assurance qualité",
        description:
          "Audits, contrôles et suivi des indicateurs pour garantir la précision finale.",
      },
    ],
    icon: "CheckCircle2",
  },
]

