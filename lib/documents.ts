export type DocumentContent = {
  title: string
  slug: string
  category: string
  description: string
  longDescription: string
  points: string[]
  images: string[]
  downloadable?: boolean
  downloadUrl?: string
}

export const documents: DocumentContent[] = [
  {
    title: "Demande examen",
    slug: "demande-examen",
    category: "Formulaire",
    description: "Formulaire de demande d'examen anatomopathologique.",
    longDescription:
      "La demande d'examen est le document pivot qui déclenche tout le parcours diagnostique. Elle centralise les informations cliniques essentielles, le contexte opératoire, les antécédents et les objectifs de l'analyse. Plus elle est précise, plus l'interprétation est pertinente. Elle permet au laboratoire d'identifier le type de prélèvement, d'adapter les techniques nécessaires et d'assurer une traçabilité complète. Ce formulaire garantit aussi une communication fluide entre le prescripteur et l'équipe d'anatomopathologie, en évitant les ambiguïtés et les retards. En pratique, il faut le remplir lisiblement, y joindre toute donnée clinique utile, et vérifier la concordance des identifiants patient. Une demande bien renseignée réduit les délais, sécurise les résultats et facilite la prise de décision médicale.",
    points: [
      "Déclenchement officiel du parcours d'analyse.",
      "Contexte clinique fiable pour un diagnostic précis.",
      "Traçabilité administrative et médicale complète.",
    ],
    images: ["/Demande examen anatomopathologique.jpg"],
    downloadable: true,
    downloadUrl: "/Demande examen anatomopathologique.jpg",
  },
  {
    title: "Photos macroscopiques",
    slug: "photos-macroscopiques",
    category: "Imagerie",
    description: "Visualisation détaillée des pièces opératoires et des prélèvements à l'œil nu.",
    longDescription:
      "Les photos macroscopiques documentent l'aspect des pièces opératoires avant la mise en coupe. Elles constituent une preuve visuelle précise de la taille, de la forme, des marges et des particularités observées à l'œil nu. Ce support est précieux pour la corrélation clinico-pathologique et pour la traçabilité des gestes réalisés en macroscopie. Il aide le clinicien à comprendre l'étendue réelle de la lésion, facilite les discussions en réunion de concertation et peut être utilisé pour expliquer le compte rendu au patient. Ces images sont archivées de manière sécurisée et associées au dossier. Pour une utilisation optimale, elles sont consultées avec le compte rendu et replacées dans le contexte clinique global.",
    points: [
      "Documentation visuelle des prélèvements.",
      "Traçabilité et sécurité diagnostique.",
      "Support d'échange avec les cliniciens.",
    ],
    images: [
      "/documents/1 Photos macroscopiques jointes au CR/2B.png",
      "/documents/1 Photos macroscopiques jointes au CR/3B.jpg",
    ],
  },
  {
    title: "Photos microscopiques",
    slug: "photos-microscopiques",
    category: "Diagnostic",
    description: "Captures haute résolution des coupes histologiques analysées au microscope.",
    longDescription:
      "Les photos microscopiques illustrent les images clés observées au microscope et soutiennent l'interprétation du diagnostic. Elles permettent de visualiser les détails cellulaires, l'architecture tissulaire et les éléments caractéristiques d'une lésion. Ces clichés apportent une valeur pédagogique et scientifique, facilitent la relecture interne et peuvent être partagés lors de discussions multidisciplinaires. Ils contribuent à la transparence du diagnostic et renforcent la compréhension des résultats par le clinicien. Pour les cas complexes, ils servent de référence pour des comparaisons futures ou des avis spécialisés. La consultation de ces images avec le compte rendu aide à contextualiser les conclusions et à mieux comprendre les critères retenus.",
    points: [
      "Illustration des critères histologiques majeurs.",
      "Appui à la relecture et à l'expertise.",
      "Support pédagogique et multidisciplinaire.",
    ],
    images: [
      "/documents/2 Photos microscopiques jointes au CR/1B.png",
      "/documents/2 Photos microscopiques jointes au CR/2B.png",
    ],
  },
  {
    title: "Documents envoyés",
    slug: "documents-envoyes",
    category: "Communication",
    description: "Accès rapide aux rapports et documents administratifs transmis de manière sécurisée.",
    longDescription:
      "Les documents envoyés regroupent l'ensemble des comptes rendus et pièces administratives transmis par le laboratoire. Ils permettent de retrouver rapidement ce qui a été communiqué, d'assurer le suivi médical et de faciliter les démarches administratives. Cette archive sécurisée améliore la continuité des soins en garantissant que les informations essentielles restent disponibles pour le clinicien et le patient. Elle est utile pour les contrôles, les relectures, les échanges entre spécialistes ou les demandes d'assurance. Pour bien l'utiliser, il suffit d'identifier la date ou le type de document et de le consulter avec son compte rendu principal. Ce service renforce la transparence et la qualité du parcours de soin.",
    points: [
      "Historique complet des envois officiels.",
      "Accès rapide aux comptes rendus.",
      "Continuité et sécurisation du suivi.",
    ],
    images: [
      "/documents/3 Documents envoyé directement/photo_2026-02-06_10-25-56 (2).jpg",
      "/documents/3 Documents envoyé directement/photo_2026-02-06_10-25-56.jpg",
    ],
  },
  {
    title: "Votre compte HBL",
    slug: "compte-hbl",
    category: "Espace Client",
    description: "Interface personnalisée permettant la gestion de vos analyses et l'historique de vos examens.",
    longDescription:
      "Le compte HBL est votre espace personnalisé pour suivre l'avancement des analyses, consulter l'historique des examens et accéder aux documents associés. Il centralise les informations utiles et simplifie la communication avec le laboratoire. Grâce à cette interface, le clinicien peut vérifier l'état d'un dossier, retrouver un compte rendu antérieur ou télécharger un document en toute sécurité. Pour le patient, c'est un accès structuré et sécurisé aux résultats validés. Le compte HBL garantit la confidentialité des données, la traçabilité des accès et une disponibilité rapide des informations. Pour l'utiliser, il suffit de se connecter avec ses identifiants, puis de naviguer par date, spécialité ou type d'examen.",
    points: [
      "Accès sécurisé aux résultats et documents.",
      "Suivi clair de l'avancement des analyses.",
      "Historique structuré des examens réalisés.",
    ],
    images: ["/documents/4 Votre compte HBL/Screenshot 2026-02-06 113128.png"],
  },
]


