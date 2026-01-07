
import { TranslationSchema, Language } from './types';

export const translations: Record<Language, TranslationSchema> = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      actions: 'Nos actions',
      projects: 'Nos projets',
      partners: 'Partenariats',
      impact: 'Impact',
      contact: 'Contact',
      cta: 'Faire un don',
    },
    hero: {
      badge: 'ONG MBALLEN',
      title: 'Aidons aujourd\'hui pour bâtir des communautés dignes et résilientes',
      subtitle: 'MBALLEN, qui signifie « Aidons » en fulfuldé, est une ONG camerounaise engagée pour la protection des personnes vulnérables, l\'autonomisation économique, la préservation de l\'environnement et le développement communautaire durable.',
      tagline: '👉 Ensemble, transformons la solidarité en actions concrètes.',
      ctaDon: '🤲 Faire un don',
      ctaPartner: '🤝 Devenir partenaire',
      ctaContact: '📩 Nous contacter',
      ctaActions: 'Nos missions',
    },
    mission: {
      badge: 'Notre mission en bref',
      title: 'Une ONG au service de la dignité humaine',
      desc: 'L\'ONG MBALLEN œuvre pour un développement humain inclusif, en accompagnant les populations défavorisées : femmes, enfants, orphelins, personnes âgées, réfugiés, déplacés internes et personnes handicapées.',
      targets: [
        'Femmes en situation de précarité',
        'Enfants et orphelins',
        'Personnes âgées et handicapées',
        'Réfugiés et déplacés internes'
      ],
      approach: 'Nos actions visent à répondre aux besoins essentiels tout en renforçant l\'autonomie et la résilience des communautés.',
    },
    about: {
      title: 'À propos de Mballen',
      identityTitle: 'Qui sommes-nous ?',
      identityDesc: 'L\'ONG MBALLEN est une organisation non gouvernementale à caractère unipersonnel, fondée par M. Oumarou Sanda Aboubakar, et officiellement agréée par l\'État camerounais par arrêté ministériel du 22 novembre 2024.\n\nBasée à N\'Gaoundéré, dans la région de l\'Adamaoua, l\'ONG intervient sur l\'ensemble du territoire camerounais selon les besoins et les partenariats.',
      visionTitle: 'Notre vision',
      visionDesc: 'Contribuer à l\'émergence de communautés solidaires, autonomes et résilientes, où chaque individu vit dans la dignité et participe pleinement au développement.',
      missionTitle: 'Notre mission',
      missionDesc: 'Promouvoir un développement humain durable et inclusif en œuvrant prioritairement auprès des populations vulnérables à travers des actions sociales, économiques, environnementales et communautaires.',
      valuesTitle: 'Nos valeurs',
      values: [
        'Solidarité : agir ensemble pour le bien commun',
        'Intégrité : transparence et responsabilité',
        'Inclusion : personne ne doit être laissé de côté',
        'Respect de la dignité humaine',
        'Engagement communautaire'
      ],
      mottoTitle: 'Devise',
      motto: 'Solidarité – Paix – Développement'
    },
    actionsPage: {
      title: 'Nos actions au service des communautés',
      intro: 'L\'ONG MBALLEN agit de manière concrète et durable à travers plusieurs axes complémentaires.',
      items: [
        {
          title: '1. Protection et inclusion des personnes vulnérables',
          desc: 'Nous luttons contre la marginalisation et promouvons l\'égalité des droits pour :',
          subItems: ['Femmes et jeunes filles', 'Enfants et orphelins', 'Personnes âgées', 'Personnes handicapées', 'Réfugiés et déplacés internes']
        },
        {
          title: '2. Assistance humanitaire et sociale',
          desc: 'Nous apportons une aide directe pour :',
          subItems: ['Le logement', 'La santé communautaire', 'L\'éducation de base', 'L\'accès à l\'eau potable']
        },
        {
          title: '3. Eau, hygiène et assainissement',
          desc: '',
          subItems: ['Construction et réhabilitation de forages', 'Mise en place de comités de gestion de l\'eau', 'Construction de latrines', 'Sensibilisation à l\'hygiène sanitaire']
        },
        {
          title: '4. Protection de l\'environnement',
          desc: '',
          subItems: ['Sensibilisation à la pollution et au changement climatique', 'Promotion du reboisement', 'Lutte contre la déforestation', 'Protection des ressources naturelles']
        }
      ]
    },
    impactPage: {
      title: 'L’engagement MBALLEN sur le terrain',
      subtitle: 'Suivez nos initiatives récentes et les histoires de changement à travers le Cameroun.',
      news: [
        { title: 'Urgence Ngaoundéré : distribution de kits aux familles vulnérables', tag: 'Humanitaire', date: 'mars 2024' },
        { title: 'Éducation pour tous : lancement d’un nouveau programme d’appui scolaire', tag: 'Éducation', date: 'février 2024' },
        { title: 'Éco‑citoyenneté : campagne de sensibilisation et nettoyage urbain', tag: 'Environnement', date: 'janvier 2024' }
      ],
      note: 'Section tenue à jour pour garantir la transparence et inviter de nouveaux bénévoles.',
      donationTitle: 'Votre don, un levier de transformation',
      donationMessage: 'Chaque contribution rapproche des familles de conditions de vie dignes. Vos dons financent directement nos actions de terrain et assurent notre présence auprès des plus fragiles.',
      donationCTA: 'Soutenir nos actions — chaque geste compte',
      donationOptions: ['Don ponctuel', 'Don régulier (mensuel)', 'Parrainage de projet'],
      paymentMethods: 'Paiements sécurisés : Mobile Money (Orange/MTN), carte bancaire, virement.'
    },
    projectsPage: {
      title: 'Nos projets pour un impact durable',
      intro: 'Chaque projet de l\'ONG MBALLEN est conçu pour répondre à un besoin réel et produire des résultats durables.',
      categories: [
        {
          title: '🔹 Projets sociaux',
          items: ['Soutien aux orphelinats', 'Aide aux personnes vulnérables', 'Programmes de santé communautaire']
        },
        {
          title: '🔹 Projets économiques',
          items: ['Financement de petits projets agricoles', 'Soutien à l\'élevage', 'Appui aux petits métiers', 'Formation en gestion et entrepreneuriat']
        },
        {
          title: '🔹 Projets d\'infrastructures',
          items: ['Construction et réhabilitation de salles de classe', 'Réhabilitation de centres de santé', 'Équipement d\'infrastructures communautaires']
        },
        {
          title: '🔹 Projets environnementaux',
          items: ['Campagnes de sensibilisation', 'Reboisement communautaire', 'Gestion durable des ressources naturelles']
        }
      ],
      cta: '👉 Vous pouvez soutenir ou cofinancer un projet.'
    },
    partnersPage: {
      title: 'Construire ensemble pour aller plus loin',
      intro: 'L’ONG MBALLEN croit fermement à la force des partenariats pour amplifier l’impact social et environnemental.',
      whyTitle: 'Pourquoi devenir partenaire ?',
      whyItems: [
        'Mutualiser les ressources et expertises',
        'Développer des projets à fort impact',
        'Intervenir durablement auprès des communautés',
        'Agir au niveau local, national et international'
      ],
      potentialTitle: 'Nos partenaires potentiels',
      potentialItems: [
        'ONG et associations',
        'Institutions publiques',
        'Organisations internationales',
        'Entreprises et fondations'
      ],
      cta: '👉 Contactez-nous pour bâtir un partenariat durable.'
    },
    contactPage: {
      title: 'Contactez l’ONG MBALLEN',
      subtitle: 'Vous souhaitez soutenir nos actions, devenir partenaire ou en savoir plus ?\nNous serons heureux d’échanger avec vous.',
      addressLabel: '📍 Siège social',
      addressValue: 'N’Gaoundéré, Région de l’Adamaoua – Cameroun',
      emailLabel: '📧 Email',
      emailValue: 'contact@mballen.org',
      phoneLabel: '📞 Téléphone',
      phoneValues: ['+237 696 68 40 41', '+237 673 01 65 85'],
      tagline: 'Aidons aujourd’hui. Construisons demain.'
    },
    joinUsPage: {
      title: 'Rejoignez l’aventure MBALLEN',
      subtitle: 'Votre temps et vos compétences sont des dons précieux.',
      volunteerTitle: 'Devenir bénévole',
      volunteerDesc: 'Participez aux actions sur le terrain ou soutenez‑nous à distance. Chaque contribution compte.',
      internshipTitle: 'Stages & apprentissage',
      internshipDesc: 'Développez vos compétences au service d’une cause et découvrez le secteur humanitaire au Cameroun.',
      cta: 'Postuler'
    },
    pressPage: {
      title: 'Espace presse',
      subtitle: 'Consultez nos communiqués officiels et ressources média.',
      kitTitle: 'Dossier de presse',
      kitDesc: 'Téléchargez notre kit : logos, photos HD et chiffres clés.',
      contactTitle: 'Contact presse',
      releases: [
        { date: '15 mars 2024', title: 'Partenariat stratégique pour le développement rural' },
        { date: '02 février 2024', title: 'Rapport d’impact : 10 000 familles soutenues en un an' }
      ]
    },
    reportsPage: {
      title: 'Transparence et gouvernance',
      subtitle: 'Nous rendons compte de chaque franc investi au service des populations.',
      annualReportsTitle: 'Rapports d’activité',
      transparencyTitle: 'Notre engagement',
      transparencyDesc: 'La confiance de nos donateurs repose sur une gestion rigoureuse et transparente de nos ressources.',
      reports: [
        { year: '2023', title: 'Rapport annuel d’impact — Vers l’autonomie' },
        { year: '2022', title: 'Rapport annuel d’impact — Solidarité active' }
      ]
    },
    domains: {
      title: 'Nos principaux domaines d\'action',
      subtitle: '',
      cta: '👉 Découvrir toutes nos actions',
      items: [
        { title: '🤝 Protection et inclusion sociale', desc: 'Accompagner les personnes vulnérables vers une vie digne.' },
        { title: '🚑 Assistance humanitaire et sociale', desc: 'Intervenir rapidement pour fournir aide et soins essentiels.' },
        { title: '💧 Eau potable, hygiène et assainissement', desc: 'Garantir l\'accès à l\'eau propre et aux conditions sanitaires.' },
        { title: '🌱 Environnement et lutte contre le changement climatique', desc: 'Préserver l\'écosystème pour les générations futures.' },
        { title: '🛠️ Infrastructures communautaires', desc: 'Améliorer le cadre de vie par des constructions communautaires.' },
        { title: '💼 Autonomisation économique', desc: 'Soutenir l\'économie locale et l\'entrepreneuriat.' }
      ]
    },
    fieldActions: {
      title: 'Nos actions sur le terrain',
      items: [
        'Séminaires de sensibilisation à la protection de l\'environnement',
        'Actions en faveur des personnes handicapées',
        'Distribution de dons aux orphelinats',
        'Projets communautaires en zones vulnérables'
      ],
      conclusion: 'Chaque action est menée avec les communautés, pour un impact durable.'
    },
    callToAction: {
      title: 'Appel à l\'engagement',
      heading: 'Vous pouvez changer des vies avec nous',
      desc: 'Votre soutien permet d\'apporter des solutions concrètes là où les besoins sont les plus urgents.',
      links: ['👉 Faire un don', '👉 Devenir partenaire', '👉 S\'engager']
    },
    don: {
      title: 'Participez au changement',
      desc: 'Votre générosité est le fondement de notre indépendance et de notre efficacité.',
      reasons: [
        'Aide directe sans intermédiaire inutile',
        'Transparence sur l’utilisation des fonds',
        'Impact local mesurable et durable',
        'Soutien à une expertise camerounaise engagée'
      ],
      cta: 'Faire un don'
    },
    footer: {
      description: "Restaurer la dignité pour un avenir plein d'espoir. Ensemble, cultivons la solidarité.",
      navigation: "Navigation",
      privacy: "Confidentialité",
      contact: "Contact",
      address: "Yaoundé, Cameroun",
      emailPlaceholder: "Votre email",
      emailLabel: "Votre adresse e-mail",
      newsletter: 'Newsletter',
      newsletterDesc: 'Inscrivez‑vous pour recevoir les comptes rendus de nos actions.',
      subscribe: 'S’abonner',
      rights: '© 2025 ONG MBALLEN. Tous droits réservés.',
      links: {
        join: 'Nous rejoindre',
        press: 'Presse',
        reports: 'Rapports'
      }
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'Our Identity',
      actions: 'Our Actions',
      impact: 'Our Impact',
      projects: 'Our Projects',
      partners: 'Partnerships',
      contact: 'Contact',
      cta: 'Donate Now',
    },
    hero: {
      badge: 'MBALLEN NGO',
      title: 'Let\'s help today to build dignified and resilient communities',
      subtitle: 'MBALLEN, meaning "Let\'s Help" in Fulfulde, is a Cameroonian NGO committed to protecting vulnerable people, economic empowerment, environmental preservation, and sustainable community development.',
      tagline: '👉 Together, let\'s turn solidarity into concrete actions.',
      ctaDon: '🤲 Make a donation',
      ctaPartner: '🤝 Become a partner',
      ctaContact: '📩 Contact us',
      ctaActions: 'Explore Our Missions',
    },
    mission: {
      badge: 'Our Mission',
      title: 'Acting where urgency and need converge',
      desc: 'We strive to sustainably transform the lives of marginalized populations by providing practical solutions and close community support.',
      targets: [
        'Women facing precariousness',
        'Vulnerable children and youth',
        'Elderly and people with disabilities',
        'Isolated rural communities'
      ],
      approach: 'Beyond aid, we aim for empowerment and long-term resilience.',
    },
    about: {
      title: 'A unified force rooted in local communities',
      identityTitle: 'Who are we?',
      identityDesc: 'Founded by Mr. Oumarou Sanda Aboubakar, MBALLEN NGO embodies mutual aid and social innovation. Authorized by the State of Cameroon, it works tirelessly to restore hope and human dignity among the most underprivileged social groups.',
      visionTitle: 'Our Vision',
      visionDesc: 'A world of solidarity where every individual has the resources and autonomy to become the architect of their own development.',
      valuesTitle: 'Our Core Values',
      values: ['Active Solidarity', 'Total Integrity', 'Social Inclusion', 'Human Dignity', 'Local Engagement']
    },
    actionsPage: {
      title: 'Tangible impact through targeted actions',
      intro: 'Our programs are designed to address the major challenges of our communities, from social inclusion to economic independence.',
      items: [
        { title: '1. Protection & Social Inclusion', desc: 'Accompanying marginalized women, youth, and people with disabilities toward full and dignified integration into society.' },
        { title: '2. Assistance & Basic Services', desc: 'Ensuring access to fundamental needs: clean water, primary healthcare, decent housing, and education for all.' },
        { title: '3. Economic Empowerment', desc: 'Supporting local entrepreneurship and agriculture through micro-financing and technical training to create sustainable income.' },
        { title: '4. Community Infrastructure', desc: 'Rehabilitating and building health centers and schools to strengthen the foundation of local development.' },
        { title: '5. Environmental Resilience', desc: 'Promoting sustainable practices and fighting climate degradation to protect tomorrow’s resources.' },
        { title: '6. Cooperation & Partnerships', desc: 'Building strategic alliances to pool expertise and amplify the impact of our interventions.' }
      ]
    },
    impactPage: {
      title: 'MBALLEN Engagement in the Field',
      subtitle: 'Follow our latest initiatives and stories of change across Cameroon.',
      news: [
        { title: 'Ngaoundere Emergency: Distribution of survival kits to vulnerable families', tag: 'Humanitarian', date: 'March 2024' },
        { title: 'Education for All: New school support program launched', tag: 'Education', date: 'February 2024' },
        { title: 'Eco-Citizenship: Major awareness campaign and urban cleanup', tag: 'Environment', date: 'January 2024' }
      ],
      note: 'This section is updated regularly to ensure transparency and invite new volunteers to join our mission.',
      donationTitle: 'Your gift, a driver for transformation',
      donationMessage: 'Every contribution is a step closer to dignity. Your donations directly fund our field projects and ensure our lasting presence for those in need.',
      donationCTA: 'Support Our Work — Every gesture counts.',
      donationOptions: ['One-time gift', 'Monthly support', 'Project sponsorship'],
      paymentMethods: 'Secure payments: Mobile Money, Credit Card, Bank Transfer.'
    },
    contactPage: {
      title: 'Let’s connect and act together',
      subtitle: 'Have a question? A partnership project? Our team is listening.',
      addressLabel: 'Headquarters',
      addressValue: 'N’Gaoundéré, Vina Department, Adamawa Region, Cameroon',
      emailLabel: 'E-mail',
      emailValue: 'contact@mballen.org',
      phoneLabel: 'Phone',
      phoneValues: ['+237 696 68 40 41', '+237 673 01 65 85'],
    },
    projectsPage: {
      title: 'Our projects for sustainable impact',
      intro: 'Each MBALLEN NGO project is designed to address a real need and produce lasting results.',
      categories: [
        {
          title: '🔹 Social Projects',
          items: ['Support for orphanages', 'Aid for vulnerable people', 'Community health programs']
        },
        {
          title: '🔹 Economic Projects',
          items: ['Funding for small agricultural projects', 'Support for livestock farming', 'Support for small trades', 'Training in management and entrepreneurship']
        },
        {
          title: '🔹 Infrastructure Projects',
          items: ['Construction and rehabilitation of classrooms', 'Rehabilitation of health centers', 'Equipping community infrastructures']
        },
        {
          title: '🔹 Environmental Projects',
          items: ['Awareness campaigns', 'Community reforestation', 'Sustainable management of natural resources']
        }
      ],
      cta: '👉 You can support or co-finance a project.'
    },
    partnersPage: {
      title: 'Building together to go further',
      intro: 'MBALLEN NGO firmly believes in the power of partnerships to amplify social and environmental impact.',
      whyTitle: 'Why become a partner?',
      whyItems: [
        'Pool resources and expertise',
        'Develop high-impact projects',
        'Intervene sustainably in communities',
        'Act at local, national, and international levels'
      ],
      potentialTitle: 'Our potential partners',
      potentialItems: [
        'NGOs and associations',
        'Public institutions',
        'International organizations',
        'Companies and foundations'
      ],
      cta: '👉 Contact us to build a lasting partnership.'
    },
    joinUsPage: {
      title: 'Join the MBALLEN Adventure',
      subtitle: 'Your time and skills are the most beautiful gifts you can offer.',
      volunteerTitle: 'Become a Volunteer',
      volunteerDesc: 'Participate directly in our actions on the ground or help us remotely. Every pair of hands counts.',
      internshipTitle: 'Internships & Learning',
      internshipDesc: 'Develop your skills in service of a noble cause and discover the humanitarian sector in Cameroon.',
      cta: 'Apply now'
    },
    pressPage: {
      title: 'Press & Media Area',
      subtitle: 'Find our official press releases and media resources.',
      kitTitle: 'Media Kit',
      kitDesc: 'Download our complete kit including logos, high-definition photos, and key figures.',
      contactTitle: 'Media Contact',
      releases: [
        { date: 'March 15, 2024', title: 'Strategic partnership for rural development' },
        { date: 'February 02, 2024', title: 'Impact Report: 10,000 families supported in one year' }
      ]
    },
    reportsPage: {
      title: 'Transparency & Governance',
      subtitle: 'We account for every franc invested in serving the people.',
      annualReportsTitle: 'Activity Reports',
      transparencyTitle: 'Our Commitment',
      transparencyDesc: 'Our donors\' trust relies on rigorous and transparent management of our resources.',
      reports: [
        { year: '2023', title: 'Annual Impact Report - Towards self-reliance' },
        { year: '2022', title: 'Annual Impact Report - Active solidarity' }
      ]
    },
    domains: {
      title: 'Our Main Areas of Action',
      subtitle: '',
      cta: '👉 Discover all our actions',
      items: [
        { title: '🤝 Protection and social inclusion', desc: 'Supporting vulnerable people towards a dignified life.' },
        { title: '🚑 Humanitarian and social assistance', desc: 'Rapid intervention to provide aid and essential care.' },
        { title: '💧 Clean water, hygiene and sanitation', desc: 'Ensuring access to clean water and sanitary conditions.' },
        { title: '🌱 Environment and climate change', desc: 'Preserving the ecosystem for future generations.' },
        { title: '🛠️ Community infrastructure', desc: 'Improving living conditions through community construction.' },
        { title: '💼 Economic empowerment', desc: 'Supporting local economy and entrepreneurship.' }
      ]
    },
    fieldActions: {
      title: 'Our Actions in the Field',
      items: [
        'Environmental protection awareness seminars',
        'Actions for people with disabilities',
        'Donation distribution to orphanages',
        'Community projects in vulnerable areas'
      ],
      conclusion: 'Every action is carried out with the communities, for lasting impact.'
    },
    callToAction: {
      title: 'Call to Action',
      heading: 'You can change lives with us',
      desc: 'Your support enables concrete solutions where needs are most urgent.',
      links: ['👉 Make a donation', '👉 Become a partner', '👉 Get involved']
    },
    don: {
      title: 'Be part of the change',
      desc: 'Your generosity is the foundation of our independence and effectiveness.',
      reasons: [
        'Direct aid without unnecessary intermediaries',
        'Full transparency on fund usage',
        'Measurable and sustainable local impact',
        'Support for committed Cameroonian expertise'
      ],
      cta: 'Donate Now'
    },
    footer: {
      description: "Restoring dignity for a future full of hope. Together, let's cultivate solidarity.",
      navigation: "Navigation",
      privacy: "Privacy",
      contact: "Contact",
      address: "Yaoundé, Cameroon",
      emailPlaceholder: "Your email",
      emailLabel: "Your email address",
      newsletter: 'Newsletter',
      newsletterDesc: 'Subscribe to receive updates on our field actions.',
      subscribe: 'Subscribe',
      rights: '© 2025 MBALLEN NGO. All rights reserved.',
      links: {
        join: 'Join Us',
        press: 'Press & Media',
        reports: 'Reports'
      }
    }
  },
  tr: {
    nav: {
      home: 'Ana Sayfa',
      about: 'Kimliğimiz',
      actions: 'Faaliyetlerimiz',
      impact: 'Etkimiz',
      projects: 'Projelerimiz',
      partners: 'Ortaklıklar',
      contact: 'İletişim',
      cta: 'Bağış Yap',
    },
    hero: {
      badge: 'MBALLEN STK',
      title: 'Onurlu ve dirençli topluluklar inşa etmek için bugün yardım edelim',
      subtitle: 'MBALLEN, Fulfulde dilinde "Yardım Edelim" anlamına gelen, savunmasız kişilerin korunması, ekonomik güçlendirme, çevrenin korunması ve sürdürülebilir topluluk kalkınmasına kendini adamış bir Kamerun STK\'sıdır.',
      tagline: '👉 Birlikte, dayanışmayı somut eylemlere dönüştürelim.',
      ctaDon: '🤲 Bağış Yap',
      ctaPartner: '🤝 Ortak Ol',
      ctaContact: '📩 Bize Ulaşın',
      ctaActions: 'Misyonlarımızı Keşfedin',
    },
    mission: {
      badge: 'Misyonumuz',
      title: 'Aciliyet ve ihtiyacın buluştuğu noktada eylem',
      desc: 'Somut çözümler ve yakın topluluk desteği sunarak marjinalleşmiş kitlelerin yaşamlarını sürdürülebilir şekilde dönüştürmeye çalışıyoruz.',
      targets: [
        'Yoksulluk sınırındaki kadınlar',
        'Savunmasız çocuklar ve gençler',
        'Yaşlılar ve engelli bireyler',
        'İzole edilmiş kırsal topluluklar'
      ],
      approach: 'Yardımın ötesinde, güçlendirme ve uzun vadeli direnç hedefliyoruz.',
    },
    about: {
      title: 'Yerel topluluklara kök salmış dayanışma gücü',
      identityTitle: 'Biz kimiz?',
      identityDesc: 'Sayın Oumarou Sanda Aboubakar tarafından kurulan MBALLEN STK, yardımlaşma ve sosyal inovasyonu temsil eder. Kamerun Devleti onaylı kuruluşumuz, en yoksul sosyal gruplar arasında onuru yeniden tesis etmek için çalışır.',
      visionTitle: 'Vizyonumuz',
      visionDesc: 'Her bireyin kendi gelişiminin mimarı olabilmek için gerekli kaynaklara ve özerkliğe sahip olduğu bir dayanışma dünyası.',
      valuesTitle: 'Temel Değerlerimiz',
      values: ['Aktif Dayanışma', 'Tam Dürüstlük', 'Sosyal Kapsayıcılık', 'İnsan Onuru', 'Yerel Bağlılık']
    },
    actionsPage: {
      title: 'Hedefli eylemlerle somut etki',
      intro: 'Programlarımız, sosyal kapsayıcılıktan ekonomik bağımsızlığa kadar topluluklarımızın temel zorluklarını çözmek için tasarlanmıştır.',
      items: [
        { title: '1. Koruma ve Sosyal Dahiliyet', desc: 'Marjinalleşmiş kadınların, gençlerin ve engellilerin topluma tam ve onurlu entegrasyonuna rehberlik etmek.' },
        { title: '2. Yardım ve Temel Hizmetler', desc: 'Herkes için temiz su, temel sağlık hizmetleri, insani konut ve eğitim gibi temel ihtiyaçlara erişimi garanti altına almak.' },
        { title: '3. Ekonomik Güçlendirme', desc: 'Sürdürülebilir gelir yaratmak için mikro finansman ve teknik eğitim yoluyla yerel girişimciliği ve tarımı desteklemek.' },
        { title: '4. Toplum Altyapısı', desc: 'Yerel kalkınmanın temelini güçlendirmek için sağlık merkezlerini ve okulları inşa etmek ve yenilemek.' },
        { title: '5. Çevresel Direnç', desc: 'Yarının kaynaklarını korumak için sürdürülebilir uygulamaları teşvik etmek ve iklim değişikliğiyle mücadele etmek.' },
        { title: '6. İşbirliği ve Ortaklıklar', desc: 'Uzmanlıkları birleştirmek ve müdahalelerimizin etkisini artırmak için stratejik ittifaklar kurmak.' }
      ]
    },
    impactPage: {
      title: 'MBALLEN Sahadaki Etkimiz',
      subtitle: 'Kamerun genelindeki en son girişimlerimizi ve değişim hikayelerimizi takip edin.',
      news: [
        { title: 'Ngaoundéré Acil Durum: Savunmasız ailelere yaşam kitleri dağıtımı', tag: 'İnsani Yardım', date: 'Mart 2024' },
        { title: 'Herkes İçin Eğitim: Yeni okul destek programı başlatıldı', tag: 'Eğitim', date: 'Şubat 2024' },
        { title: 'Eko-Vatandaşlık: Büyük farkındalık kampanyası ve şehir temizliği', tag: 'Çevre', date: 'Ocak 2024' }
      ],
      note: 'Bu bölüm, şeffaflığı sağlamak ve yeni gönüllüleri misyonumuza katılmaya davet etmek için düzenli olarak güncellenmektedir.',
      donationTitle: 'Bağışınız, bir dönüşüm motorudur',
      donationMessage: 'Her katkı onura doğru atılmış bir adımdır. Bağışlarınız doğrudan saha projelerimizi finanse eder ve ihtiyaç sahiplerine sürekli destek vermemizi sağlar.',
      donationCTA: 'Faaliyetlerimizi Destekleyin — Her jest değerlidir.',
      donationOptions: ['Tek seferlik bağış', 'Düzenli (Aylık) bağış', 'Proje sponsorluğu'],
      paymentMethods: 'Güvenli ödemeler: Mobil Para, Kredi Kartı, Banka Havalesi.'
    },
    contactPage: {
      title: 'Birlikte hareket etmek için bağlanalım',
      subtitle: 'Bir sorunuz mu var? Bir ortaklık projesi mi? Ekibimiz sizi dinliyor.',
      addressLabel: 'Genel Merkez',
      addressValue: 'N’Gaoundéré, Vina Departmanı, Adamawa Bölgesi, Kamerun',
      emailLabel: 'E-posta',
      emailValue: 'contact@mballen.org',
      phoneLabel: 'Telefon',
      phoneValues: ['+237 696 68 40 41', '+237 673 01 65 85'],
    },
    projectsPage: {
      title: 'Sürdürülebilir etki için projelerimiz',
      intro: 'Her MBALLEN STK projesi, gerçek bir ihtiyacı karşılamak ve kalıcı sonuçlar üretmek için tasarlanmıştır.',
      categories: [
        {
          title: '🔹 Sosyal Projeler',
          items: ['Yetimhanelere destek', 'Savunmasız kişilere yardım', 'Toplum sağlığı programları']
        },
        {
          title: '🔹 Ekonomik Projeler',
          items: ['Küçük tarım projelerinin finansmanı', 'Hayvancılık desteği', 'Küçük esnaf desteği', 'Yönetim ve girişimcilik eğitimi']
        },
        {
          title: '🔹 Altyapı Projeler',
          items: ['Sınıfların inşası ve rehabilitasyonu', 'Sağlık merkezlerinin rehabilitasyonu', 'Topluluk altyapılarının donatılması']
        },
        {
          title: '🔹 Çevre Projeler',
          items: ['Farkındalık kampanyaları', 'Topluluk ağaçlandırması', 'Doğal kaynakların sürdürülebilir yönetimi']
        }
      ],
      cta: '👉 Bir projeyi destekleyebilir veya ortak finanse edebilirsiniz.'
    },
    partnersPage: {
      title: 'Daha ileri gitmek için birlikte inşa etmek',
      intro: 'MBALLEN STK, sosyal ve çevresel etkiyi artırmak için ortaklıkların gücüne sıkı sıkıya inanmaktadır.',
      whyTitle: 'Neden ortak olmalısınız?',
      whyItems: [
        'Kaynakları ve uzmanlığı birleştirmek',
        'Yüksek etkili projeler geliştirmek',
        'Topluluklara sürdürülebilir müdahalede bulunmak',
        'Yerel, ulusal ve uluslararası düzeyde hareket etmek'
      ],
      potentialTitle: 'Potansiyel ortaklarımız',
      potentialItems: [
        'STK\'lar ve dernekler',
        'Kamu kurumları',
        'Uluslararası kuruluşlar',
        'Şirketler ve vakıflar'
      ],
      cta: '👉 Sürdürülebilir bir ortaklık kurmak için bizimle iletişime geçin.'
    },
    joinUsPage: {
      title: 'MBALLEN Macerasına Katılın',
      subtitle: 'Zamanınız ve yetenekleriniz sunabileceğiniz en güzel hediyelerdir.',
      volunteerTitle: 'Gönüllü Ol',
      volunteerDesc: 'Sahadaki eylemlerimize doğrudan katılın veya uzaktan bize yardımcı olun. Her yardım eli değerlidir.',
      internshipTitle: 'Staj ve Öğrenim',
      internshipDesc: 'Yeteneklerinizi asil bir amaç için geliştirin ve Kamerun\'daki insani yardım sektörünü keşfedin.',
      cta: 'Şimdi başvur'
    },
    pressPage: {
      title: 'Basın ve Medya Alanı',
      subtitle: 'Resmi bültenlerimizi ve medya kaynaklarımızı burada bulabilirsiniz.',
      kitTitle: 'Basın Kiti',
      kitDesc: 'Logolar, yüksek çözünürlüklü fotoğraflar ve anahtar figürleri içeren setimizi indirin.',
      contactTitle: 'Medya İletişim',
      releases: [
        { date: '15 Mart 2024', title: 'Kırsal kalkınma için stratejik ortaklık' },
        { date: '02 Şubat 2024', title: 'Etki Raporu: Bir yılda 10.000 aileye destek' }
      ]
    },
    reportsPage: {
      title: 'Şeffaflık ve Yönetişim',
      subtitle: 'Halkın hizmetine yatırılan her kuruşun hesabını veriyoruz.',
      annualReportsTitle: 'Faaliyet Raporları',
      transparencyTitle: 'Taahhüdümüz',
      transparencyDesc: 'Bağışçılarımızın güveni, kaynaklarımızın titiz ve şeffaf yönetimine dayanmaktadır.',
      reports: [
        { year: '2023', title: 'Yıllık Etki Raporu - Özerkliğe doğru' },
        { year: '2022', title: 'Yıllık Etki Raporu - Aktif dayanışma' }
      ]
    },
    domains: {
      title: 'Temel Faaliyet Alanlarımız',
      subtitle: '',
      cta: '👉 Tüm eylemlerimizi keşfedin',
      items: [
        { title: '🤝 Koruma ve sosyal dahiliyet', desc: 'Savunmasız kişileri onurlu bir yaşama yönlendirmek.' },
        { title: '🚑 İnsani ve sosyal yardım', desc: 'Yardım ve temel bakım sağlamak için hızlı müdahale.' },
        { title: '💧 Temiz su, hijyen ve sanitasyon', desc: 'Temiz suya ve sağlık koşullarına erişimi sağlamak.' },
        { title: '🌱 Çevre ve iklim değişikliği', desc: 'Ekosistemi gelecek nesiller için korumak.' },
        { title: '🛠️ Toplum altyapısı', desc: 'Toplum inşaatları ile yaşam koşullarını iyileştirmek.' },
        { title: '💼 Ekonomik güçlendirme', desc: 'Yerel ekonomiyi ve girişimciliği desteklemek.' }
      ]
    },
    fieldActions: {
      title: 'Sahadaki Eylemlerimiz',
      items: [
        'Çevre koruma farkındalık seminerleri',
        'Engelli bireyler için eylemler',
        'Yetimhanelere bağış dağıtımı',
        'Savunmasız bölgelerde toplum projeleri'
      ],
      conclusion: 'Her eylem, kalıcı etki için topluluklarla birlikte yürütülür.'
    },
    callToAction: {
      title: 'Harekete Geçme Çağrısı',
      heading: 'Bizimle hayat değiştirebilirsiniz',
      desc: 'Desteğiniz, ihtiyaçların en acil olduğu yerlerde somut çözümler sağlar.',
      links: ['👉 Bağış Yap', '👉 Ortak Ol', '👉 Katılın']
    },
    don: {
      title: 'Değişimin bir parçası olun',
      desc: 'Cömertliğiniz, bağımsızlığımızın ve etkinliğimizin temelidir.',
      reasons: [
        'Gereksiz aracılar olmadan doğrudan yardım',
        'Fon kullanımı konusunda tam şeffaflık',
        'Ölçülebilir ve sürdürülebilir yerel etki',
        'Kendini adamış Kamerun uzmanlığına destek'
      ],
      cta: 'Şimdi Bağış Yap'
    },
    footer: {
      description: "Umut dolu bir gelecek için onuru yeniden tesis etmek. Birlikte dayanışmayı yeşertelim.",
      navigation: "Gezinme",
      privacy: "Gizlilik",
      contact: "İletişim",
      address: "Yaoundé, Kamerun",
      emailPlaceholder: "E-postanız",
      emailLabel: "E-posta adresiniz",
      newsletter: 'Bülten',
      newsletterDesc: 'Saha çalışmalarımızdan güncellemeler almak için abone olun.',
      subscribe: 'Abone Ol',
      rights: '© 2025 MBALLEN STK. Tüm hakları saklıdır.',
      links: {
        join: 'Bize Katılın',
        press: 'Basın ve Medya',
        reports: 'Raporlar'
      }
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      actions: 'أعمالنا',
      projects: 'مشاريعنا',
      partners: 'شراكات',
      impact: 'تأثيرنا',
      contact: 'اتصل بنا',
      cta: 'تبرع الآن',
    },
    hero: {
      badge: 'منظمة مبالن',
      title: 'لنساعد اليوم لبناء مجتمعات كريمة ومرنة',
      subtitle: 'مبالن، وتعني "لنساعد" بلغة الفولفولدي، هي منظمة غير حكومية كاميرونية ملتزمة بحماية الأشخاص المستضعفين، والتمكين الاقتصادي، والحفاظ على البيئة، وتنمية المجتمع المستدامة.',
      tagline: '👉 معًا، لنحول التضامن إلى إجراءات ملموسة.',
      ctaDon: '🤲 تبرع',
      ctaPartner: '🤝 كن شريكًا',
      ctaContact: '📩 اتصل بنا',
      ctaActions: 'اكتشف مهامنا',
    },
    mission: {
      badge: 'مهمتنا',
      title: 'العمل حيث تلتقي الضرورة والحاجة',
      desc: 'نسعى لتحويل حياة الفئات المهمشة بشكل مستدام من خلال تقديم حلول عملية ودعم مجتمعي قريب.',
      targets: [
        'النساء في وضع هشاشة',
        'الأطفال والشباب المستضعفون',
        'كبار السن والأشخاص ذوي الإعاقة',
        'المجتمعات الريفية المعزولة'
      ],
      approach: 'أبعد من المساعدة، نهدف للتمكين والمرونة طويلة الأمد.',
    },
    about: {
      title: 'قوة موحدة متجذرة في المجتمعات المحلية',
      identityTitle: 'من نحن؟',
      identityDesc: 'أسسها السيد عمر ساندا أبو بكر، وتجسد منظمة مبالن المساعدة المتبادلة والابتكار الاجتماعي. معتمدة من الدولة الكاميرونية، وتعمل بلا كلل لاستعادة الأمل والكرامة الإنسانية بين الفئات الاجتماعية الأكثر حرمانًا.',
      visionTitle: 'رؤيتنا',
      visionDesc: 'عالم متضامن يمتلك فيه كل فرد الموارد والاستقلالية ليصبح مهندس تنميته الخاصة.',
      valuesTitle: 'قيمنا الأساسية',
      values: ['التضامن النشط', 'النزاهة التامة', 'الشمول الاجتماعي', 'الكرامة الإنسانية', 'التزام محلي']
    },
    actionsPage: {
      title: 'تأثير ملموس من خلال إجراءات هادفة',
      intro: 'تم تصميم برامجنا لمواجهة التحديات الكبرى لمجتمعاتنا، من الشمول الاجتماعي إلى الاستقلال الاقتصادي.',
      items: [
        { title: '1. الحماية والشمول الاجتماعي', desc: 'مرافقة النساء والشباب والأشخاص ذوي الإعاقة المهمشين نحو الاندماج الكامل والكرامة في المجتمع.' },
        { title: '2. المساعدة والخدمات الأساسية', desc: 'ضمان الوصول إلى الاحتياجات الأساسية: المياه النظيفة، الرعاية الصحية الأولية، السكن اللائق، والتعليم للجميع.' },
        { title: '3. التمكين الاقتصادي', desc: 'دعم ريادة الأعمال المحلية والزراعة من خلال التمويل الأصغر والتدريب الفني لخلق دخل مستدام.' },
        { title: '4. البنية التحتية المجتمعية', desc: 'إعادة تأهيل وبناء المراكز الصحية والمدارس لتعزيز أساس التنمية المحلية.' },
        { title: '5. المرونة البيئية', desc: 'تعزيز الممارسات المستدامة ومكافحة التدهور المناخي لحماية موارد الغد.' },
        { title: '6. التعاون والشراكات', desc: 'بناء تحالفات استراتيجية لتجميع الخبرات وتضخيم تأثير تدخلاتنا.' }
      ]
    },
    projectsPage: {
      title: 'مشاريعنا لتأثير مستدام',
      intro: 'تم تصميم كل مشروع لمنظمة مبالن لتلبية حاجة حقيقية وتحقيق نتائج دائمة.',
      categories: [
        {
          title: '🔹 مشاريع اجتماعية',
          items: ['دعم دور الأيتام', 'مساعدة الأشخاص المستضعفين', 'برامج الصحة المجتمعية']
        },
        {
          title: '🔹 مشاريع اقتصادية',
          items: ['تمويل المشاريع الزراعية الصغيرة', 'دعم تربية المواشي', 'دعم الحرف الصغيرة', 'التدريب في الإدارة وريادة الأعمال']
        },
        {
          title: '🔹 مشاريع البنية التحتية',
          items: ['بناء وإعادة تأهيل الفصول الدراسية', 'إعادة تأهيل المراكز الصحية', 'تجهيز البنى التحتية المجتمعية']
        },
        {
          title: '🔹 مشاريع بيئية',
          items: ['حملات التوعية', 'التشجير المجتمعي', 'الإدارة المستدامة للموارد الطبيعية']
        }
      ],
      cta: '👉 يمكنك دعم أو المشاركة في تمويل مشروع.'
    },
    partnersPage: {
      title: 'نبني معًا لنذهب أبعد',
      intro: 'تؤمن منظمة مبالن بقوة الشراكات لتضخيم التأثير الاجتماعي والبيئي.',
      whyTitle: 'لماذا تصبح شريكًا؟',
      whyItems: [
        'تجميع الموارد والخبرات',
        'تطوير مشاريع ذات تأثير كبير',
        'التدخل المستدام في المجتمعات',
        'العمل على المستوى المحلي والوطني والدولي'
      ],
      potentialTitle: 'شركاؤنا المحتملون',
      potentialItems: [
        'المنظمات غير الحكومية والجمعيات',
        'المؤسسات العامة',
        'المنظمات الدولية',
        'الشركات والمؤسسات'
      ],
      cta: '👉 اتصل بنا لبناء شراكة دائمة.'
    },
    impactPage: {
      title: 'تأثير مبالن في الميدان',
      subtitle: 'تابع أحدث مبادراتنا وقصص التغيير في جميع أنحاء الكاميرون.',
      news: [
        { title: 'طوارئ نغاونديري: توزيع مجموعات البقاء على الأسر الضعيفة', tag: 'إنساني', date: 'مارس 2024' },
        { title: 'التعليم للجميع: إطلاق برنامج دعم مدرسي جديد', tag: 'تعليم', date: 'فبراير 2024' },
        { title: 'المواطنة البيئية: حملة توعية كبرى وتنظيف حضري', tag: 'بيئة', date: 'يناير 2024' }
      ],
      note: 'يتم تحديث هذا القسم بانتظام لضمان الشفافية ودعوة متطوعين جدد للانضمام إلى مهمتنا.',
      donationTitle: 'تبرعك، محرك للتحول',
      donationMessage: 'كل مساهمة هي خطوة أقرب إلى الكرامة. تبرعاتك تمول مشاريعنا الميدانية مباشرة وتضمن وجودنا الدائم لمن يحتاجوننا.',
      donationCTA: 'ادعم أعمالنا — كل بادرة لها قيمتها.',
      donationOptions: ['تبرع لمرة واحدة', 'دعم شهري', 'رعاية مشروع'],
      paymentMethods: 'مدفوعات آمنة: الهاتف المحمول، بطاقة الائتمان، التحويل المصرفي.'
    },
    contactPage: {
      title: 'لنكن على تواصل ونتحرك',
      subtitle: 'لديك سؤال؟ مشروع شراكة؟ فريقنا يستمع إليك.',
      addressLabel: 'المقر الرئيسي',
      addressValue: 'نغاونديري، قسم فينا، منطقة أداماوا، الكاميرون',
      emailLabel: 'البريد الإلكتروني',
      emailValue: 'contact@mballen.org',
      phoneLabel: 'الهاتف',
      phoneValues: ['+237 696 68 40 41', '+237 673 01 65 85'],
      tagline: 'نساعد اليوم. نبني الغد.'
    },
    joinUsPage: {
      title: 'انضم إلى مغامرة مبالن',
      subtitle: 'وقتك ومهاراتك هي أجمل الهدايا التي يمكنك تقديمها.',
      volunteerTitle: 'كن متطوعًا',
      volunteerDesc: 'شارك مباشرة في أعمالنا الميدانية أو ساعدنا عن بعد. كل يد عون لها قيمتها.',
      internshipTitle: 'تدريب وتعلم',
      internshipDesc: 'طور مهاراتك في خدمة قضية نبيلة واكتشف القطاع الإنساني في الكاميرون.',
      cta: 'قدم الآن'
    },
    pressPage: {
      title: 'منطقة الصحافة والإعلام',
      subtitle: 'ابحث عن بياناتنا الصحفية الرسمية ومواردنا الإعلامية.',
      kitTitle: 'المجموعة الإعلامية',
      kitDesc: 'قم بتنزيل مجموعتنا الكاملة بما في ذلك الشعارات والصور عالية الدقة والأرقام الرئيسية.',
      contactTitle: 'الاتصال الإعلامي',
      releases: [
        { date: '15 مارس 2024', title: 'شراكة استراتيجية للتنمية الريفية' },
        { date: '02 فبراير 2024', title: 'تقرير الأثر: 10,000 عائلة تم دعمها في عام واحد' }
      ]
    },
    reportsPage: {
      title: 'الشفافية والحوكمة',
      subtitle: 'نحن مسؤولون عن كل فرنك يتم استثماره في خدمة الناس.',
      annualReportsTitle: 'تقارير النشاط',
      transparencyTitle: 'التزامنا',
      transparencyDesc: 'تعتمد ثقة مانحينا على إدارة صارمة وشفافة لمواردنا.',
      reports: [
        { year: '2023', title: 'تقرير الأثر السنوي - نحو الاعتماد على الذات' },
        { year: '2022', title: 'تقرير الأثر السنوي - التضامن النشط' }
      ]
    },
    domains: {
      title: 'مجالات عملنا الرئيسية',
      subtitle: '',
      cta: '👉 اكتشف جميع أعمالنا',
      items: [
        { title: '🤝 الحماية والشمول الاجتماعي', desc: 'مرافقة الأشخاص المستضعفين نحو حياة كريمة.' },
        { title: '🚑 المساعدة الإنسانية والاجتماعية', desc: 'التدخل السريع لتقديم المساعدة والرعاية الأساسية.' },
        { title: '💧 المياه النظيفة والنظافة والصرف الصحي', desc: 'ضمان الوصول إلى المياه النظيفة والظروف الصحية.' },
        { title: '🌱 البيئة وتغير المناخ', desc: 'الحفاظ على النظام البيئي للأجيال القادمة.' },
        { title: '🛠️ البنية التحتية المجتمعية', desc: 'تحسين ظروف المعيشة من خلال البناء المجتمعي.' },
        { title: '💼 التمكين الاقتصادي', desc: 'دعم الاقتصاد المحلي وريادة الأعمال.' }
      ]
    },
    fieldActions: {
      title: 'أعمالنا في الميدان',
      items: [
        'ندوات توعية لحماية البيئة',
        'أعمال للأشخاص ذوي الإعاقة',
        'توزيع التبرعات على دور الأيتام',
        'مشاريع مجتمعية في المناطق الضعيفة'
      ],
      conclusion: 'كل عمل يتم تنفيذه مع المجتمعات، لتأثير دائم.'
    },
    callToAction: {
      title: 'دعوة للعمل',
      heading: 'يمكنك تغيير الحياة معنا',
      desc: 'دعمكم يتيح حلولاً ملموسة حيث تكون الاحتياجات أكثر إلحاحًا.',
      links: ['👉 تبرع', '👉 كن شريكًا', '👉 شارك']
    },
    don: {
      title: 'كن جزءًا من التغيير',
      desc: 'كرمكم هو أساس استقلالنا وفعاليتنا.',
      reasons: [
        'مساعدة مباشرة دون وسطاء غير ضروريين',
        'شفافية كاملة في استخدام الأموال',
        'تأثير محلي قابل للقياس ومستدام',
        'دعم للخبرة الكاميرونية الملتزمة'
      ],
      cta: 'تبرع الآن'
    },
    footer: {
      description: "استعادة الكرامة لمستقبل مفعم بالأمل. معًا، لنزرع التضامن.",
      navigation: "تصفح",
      privacy: "الخصوصية",
      contact: "اتصل بنا",
      address: "ياوندي، الكاميرون",
      emailPlaceholder: "بريدك الإلكتروني",
      emailLabel: "عنوان بريدك الإلكتروني",
      newsletter: 'النشرة الإخبارية',
      newsletterDesc: 'اشترك لتلقي تحديثات حول أعمالنا الميدانية.',
      subscribe: 'اشترك',
      rights: '© 2025 منظمة مبالن. جميع الحقوق محفوظة.',
      links: {
        join: 'انضم إلينا',
        press: 'الصحافة والإعلام',
        reports: 'التقارير'
      }
    }
  }
};
