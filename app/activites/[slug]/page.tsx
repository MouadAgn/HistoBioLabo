import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { ActivityPage } from "@/components/activities/activity-page"

type ActivityPageProps = {
  params: Promise<{ slug: string }>
}

type ActivityContent = {
  title: string
  description: string
  points: string[]
  image: string
  secondaryImage?: string
}

const serviceTitles = [
  "Macroscopie",
  "Histopathologie",
  "Cytopathologie",
  "Immunohistochimie",
  "Typage HPV",
  "Circuit urgent",
  "Matériel et techniques",
  "Innovation et suivi",
  "Rigueur Diagnostiques",
]

const activityContent: Record<string, ActivityContent> = {
  macroscopie: {
    title: "Macroscopie",
    description:
      "La macroscopie est la porte d’entrée de l’anatomopathologie. Elle consiste à examiner à l’œil nu les pièces opératoires et les prélèvements afin d’en décrire la taille, la forme, la couleur, la consistance et les relations anatomiques. Cette étape structure l’ensemble du parcours diagnostique : elle oriente l’échantillonnage, conditionne la qualité des coupes et garantit que les zones d’intérêt sont bien étudiées. Dans un laboratoire médical exigeant, la macroscopie s’appuie sur des protocoles standardisés, une traçabilité stricte et une documentation photographique fidèle. Chaque description est pensée pour être claire, utile et corrélée à la demande clinique. La macroscopie permet aussi d’anticiper les difficultés techniques, de repérer les marges chirurgicales et de sécuriser le diagnostic final. Elle constitue un acte médical à part entière, qui relie la réalité opératoire au langage histologique. Un examen macroscopique rigoureux réduit les erreurs, accélère les délais et renforce la pertinence des conclusions transmises aux cliniciens.",
    points: [
      "Traçabilité complète des pièces et des prélèvements.",
      "Documentation structurée et photographique.",
      "Échantillonnage ciblé pour maximiser la valeur diagnostique.",
    ],
    image: "/images_defilement/1 Macroscopie/1.png",
  },
  histopathologie: {
    title: "Histopathologie",
    description:
      "L’histopathologie analyse l’architecture des tissus au microscope afin d’identifier, de classer et de stadifier les maladies. C’est le cœur du diagnostic en anatomopathologie. Après fixation et inclusion, des coupes fines sont colorées pour révéler la structure cellulaire et tissulaire. Cette lecture permet de reconnaître les processus inflammatoires, infectieux ou tumoraux, de préciser l’agressivité d’une lésion et d’orienter le traitement. Nos équipes appliquent des référentiels internationaux, assurent une corrélation clinico-radiologique et réalisent des relectures collégiales quand nécessaire. L’objectif est de fournir un diagnostic clair, argumenté et utile à la décision thérapeutique. La rigueur technique et la qualité des colorations sont essentielles pour éviter les faux négatifs, améliorer la reproductibilité et sécuriser la prise en charge. L’histopathologie est donc une synthèse médicale qui transforme le tissu en information clinique fiable.",
    points: [
      "Chaîne technique maîtrisée (fixation, inclusion, coupe).",
      "Colorations adaptées à l’indication clinique.",
      "Lecture experte et synthèse diagnostique claire.",
    ],
    image: "/images_defilement/2 Histopathologie/2.jpg",
  },
  cytopathologie: {
    title: "Cytopathologie",
    description:
      "La cytopathologie étudie les cellules isolées pour détecter précocement les anomalies et orienter un diagnostic. Elle joue un rôle central dans le dépistage et la surveillance, notamment pour les lésions cervicales, thyroïdiennes ou pulmonaires. La qualité du prélèvement et la préparation des lames sont déterminantes : un étalement maîtrisé, une fixation rapide et des colorations adaptées garantissent une lecture fiable. Nos cytologistes évaluent la morphologie cellulaire, les caractéristiques nucléaires et le contexte inflammatoire afin de distinguer les processus bénins des lésions précancéreuses ou malignes. Lorsque le cas l’exige, nous proposons des examens complémentaires pour renforcer la pertinence clinique. Cette discipline, rapide et peu invasive, permet d’apporter une réponse médicale utile tout en limitant les gestes agressifs. Elle contribue à améliorer le parcours patient en accélérant l’orientation diagnostique.",
    points: [
      "Préparation optimisée pour une lecture fiable.",
      "Dépistage et diagnostic précoce des lésions.",
      "Compléments d’analyse selon le contexte clinique.",
    ],
    image: "/images_defilement/3 Cytopathologie/3.jpg",
  },
  immunohistochimie: {
    title: "Immunohistochimie",
    description:
      "L’immunohistochimie est une technique incontournable pour caractériser les tissus et préciser l’origine des lésions. En utilisant des anticorps spécifiques, elle révèle l’expression de marqueurs biologiques qui aident à identifier le type tumoral, le niveau de différenciation ou la sensibilité à certains traitements ciblés. Elle est particulièrement utile dans les diagnostics complexes et en oncologie, où la précision du profil tumoral influence directement la stratégie thérapeutique. Notre laboratoire applique des panels d’anticorps validés, des protocoles stricts et des contrôles qualité systématiques. Les résultats sont interprétés dans un contexte global et restitués avec clarté. L’immunohistochimie transforme des signaux moléculaires en informations cliniques pertinentes, améliorant la pertinence des décisions médicales et la personnalisation des soins.",
    points: [
      "Panels d’anticorps validés et contrôles qualité.",
      "Aide à la classification des tumeurs.",
      "Support aux traitements ciblés et personnalisés.",
    ],
    image: "/images_defilement/4 immunohistochimie/4.jpg",
  },
  "typage-hpv": {
    title: "Typage HPV",
    description:
      "Le typage HPV permet d’identifier la présence et le type de papillomavirus humain, élément clé dans la prévention et la prise en charge des lésions précancéreuses du col utérin. Il s’agit d’un examen de biologie moléculaire qui complète la cytologie et l’histologie. Les génotypes à haut risque sont détectés avec précision, ce qui aide à évaluer le niveau de risque et à adapter la surveillance. Dans notre laboratoire, les procédures sont standardisées pour garantir la fiabilité, de la réception de l’échantillon à l’interprétation des résultats. Le typage HPV contribue à une médecine préventive plus efficace, en améliorant le dépistage et en évitant les interventions inutiles. Il renforce la stratégie de santé publique et accompagne les cliniciens dans leurs décisions.",
    points: [
      "Détection fiable des génotypes à haut risque.",
      "Résultat intégré au parcours de dépistage.",
      "Support à une prévention personnalisée.",
    ],
    image: "/images_defilement/5 Typage HPV/5.png",
  },
  "circuit-urgent": {
    title: "Circuit urgent",
    description:
      "Le circuit urgent est conçu pour les situations cliniques où un diagnostic rapide est essentiel. Il s’appuie sur un flux dédié, une priorisation immédiate et une coordination renforcée entre techniciens et médecins. La qualité ne peut pas être sacrifiée à la vitesse : nous maintenons les mêmes standards que pour les examens programmés, tout en réduisant les délais. Ce dispositif est crucial pour la prise en charge opératoire, les décisions thérapeutiques rapides ou la gestion de situations aiguës. Une communication directe avec le clinicien permet de restituer les résultats de manière claire et exploitable. Ce circuit offre aux équipes médicales une sécurité décisionnelle tout en garantissant la fiabilité des conclusions.",
    points: [
      "Priorisation immédiate des prélèvements critiques.",
      "Résultats rapides sans compromis qualité.",
      "Communication médicale directe et sécurisée.",
    ],
    image: "/images_defilement/6 Circuit urgent/6.png",
  },
  "materiel-et-techniques": {
    title: "Matériel et techniques",
    description:
      "Un diagnostic précis repose sur un plateau technique fiable et régulièrement contrôlé. Notre laboratoire investit dans des équipements de pointe : automates de coloration, microtomes de précision, systèmes d’imagerie et outils de gestion de la traçabilité. Chaque équipement est soumis à des contrôles qualité et à une maintenance planifiée. Les techniques sont choisies en fonction de leur pertinence clinique et de leur reproductibilité, afin de garantir des résultats cohérents dans le temps. La formation continue des équipes assure une maîtrise parfaite des procédures et une intégration fluide des innovations. Cette exigence technique renforce la sécurité médicale, améliore la rapidité des analyses et soutient la confiance des cliniciens.",
    points: [
      "Plateau technique moderne et contrôlé.",
      "Protocoles standardisés pour une reproductibilité optimale.",
      "Formation continue et veille technologique.",
    ],
    image: "/images_defilement/7 Matériel et techniques/7.jpg",
  },
  "innovation-et-suivi": {
    title: "Innovation et suivi",
    description:
      "L’innovation en anatomopathologie vise à améliorer la fiabilité, la traçabilité et la communication médicale. Nous intégrons des outils numériques pour suivre chaque échantillon, réduire les erreurs et accélérer les délais. Les systèmes de double vérification, les audits qualité et les indicateurs de performance garantissent un suivi rigoureux. Cette approche améliore la coordination avec les cliniciens et facilite l’accès aux informations utiles pour la décision thérapeutique. L’innovation n’est pas un simple ajout technologique : elle soutient une démarche d’amélioration continue, centrée sur la sécurité du patient et la pertinence médicale. Notre objectif est d’offrir un service moderne, fiable et adapté aux exigences actuelles.",
    points: [
      "Traçabilité numérique complète.",
      "Contrôles qualité renforcés et audits réguliers.",
      "Optimisation continue des flux de travail.",
    ],
    image: "/documents/1 Photos macroscopiques jointes au CR/3B.jpg",
    secondaryImage: "/documents/1 Photos macroscopiques jointes au CR/2B.png",
  },
  "rigueur-diagnostiques": {
    title: "Rigueur Diagnostiques",
    description:
      "La rigueur diagnostique garantit la fiabilité des résultats et la sécurité des décisions médicales. Chaque cas est analysé avec une méthodologie précise, une corrélation clinique et, lorsque nécessaire, une relecture collégiale. Les protocoles d’assurance qualité, les audits internes et les contrôles continus assurent la reproductibilité des conclusions. Cette exigence permet de réduire les incertitudes, d’améliorer la pertinence des recommandations et de renforcer la confiance des cliniciens. La rigueur diagnostique est au cœur de notre pratique : elle sécurise chaque étape, du prélèvement à la restitution, afin d’offrir un diagnostic clair, argumenté et utile au patient.",
    points: [
      "Lecture experte et validation collégiale.",
      "Assurance qualité et contrôles internes.",
      "Diagnostic clair et utile à la décision médicale.",
    ],
    image: "/images_defilement/9 Rigueur Diagnostiques/9.png",
  },
}

const slugify = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .toLowerCase()

export function generateStaticParams() {
  return serviceTitles.map((title) => ({ slug: slugify(title) }))
}

export default async function Page({ params }: ActivityPageProps) {
  const { slug } = await params
  const activity = activityContent[slug]

  if (!activity) {
    notFound()
  }

  return (
    <>
      <Header />
      <main>
        <ActivityPage activity={activity} />
      </main>
    </>
  )
}

