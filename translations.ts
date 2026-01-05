
import { TranslationSchema, Language } from './types';

export const translations: Record<Language, TranslationSchema> = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      actions: 'Nos actions',
      impact: 'Impact',
      contact: 'Contact',
      cta: 'Faire un don',
    },
    hero: {
      title: 'Bâtir un avenir de dignité et d’autonomie pour les plus vulnérables',
      subtitle: 'MBALLEN — « Aidons » en fulfuldé — place la solidarité active et l’écoute au cœur du développement humain durable au Cameroun.',
      ctaDon: 'Soutenir',
      ctaActions: 'Nos missions',
    },
    mission: {
      badge: 'Notre mission',
      title: 'Intervenir là où l’urgence rejoint le besoin',
      desc: 'Nous travaillons à transformer durablement la vie des populations marginalisées en apportant des solutions concrètes et un accompagnement de proximité.',
      targets: [
        'Femmes en situation de précarité',
        'Enfants et jeunes vulnérables',
        'Personnes âgées et personnes en situation de handicap',
        'Communautés rurales isolées'
      ],
      approach: 'Au‑delà de l’aide, nous visons l’autonomie et la résilience durable.',
    },
    about: {
      title: 'Une force solidaire ancrée sur le terrain',
      identityTitle: 'Qui sommes‑nous ?',
      identityDesc: 'Fondée par Oumarou Sanda Aboubakar, MBALLEN est une ONG dédiée à l’entraide et à l’innovation sociale. Reconnaissance officielle et ancrage local nous permettent d’agir pour restaurer l’espoir et la dignité des populations les plus vulnérables.',
      visionTitle: 'Notre vision',
      visionDesc: 'Un monde solidaire où chacun dispose des ressources et de l’autonomie nécessaires pour piloter son propre développement.',
      valuesTitle: 'Nos valeurs',
      values: ['Solidarité active', 'Intégrité', 'Inclusion sociale', 'Dignité humaine', 'Engagement local']
    },
    actionsPage: {
      title: 'Un impact concret par des actions ciblées',
      intro: 'Nos programmes répondent aux défis majeurs de nos communautés, de l’inclusion sociale à l’autonomie économique.',
      items: [
        { title: '1. Protection et inclusion sociale', desc: 'Accompagner les femmes marginalisées, les jeunes et les personnes en situation de handicap vers une intégration pleine et digne.' },
        { title: '2. Assistance et services de base', desc: 'Assurer l’accès aux besoins fondamentaux : eau potable, santé primaire, logement décent et éducation.' },
        { title: '3. Autonomisation économique', desc: 'Soutenir l’entrepreneuriat local et l’agriculture via le micro‑financement et la formation pour générer des revenus durables.' },
        { title: '4. Infrastructures communautaires', desc: 'Réhabiliter et construire des centres de santé et des écoles pour renforcer le développement local.' },
        { title: '5. Résilience environnementale', desc: 'Promouvoir des pratiques durables et lutter contre la dégradation climatique pour préserver les ressources.' },
        { title: '6. Coopération et partenariats', desc: 'Bâtir des alliances stratégiques pour mutualiser les compétences et amplifier l’impact.' }
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
    contactPage: {
      title: 'Restons connectés pour agir ensemble',
      subtitle: 'Une question ? Un partenariat ? Notre équipe vous répond.',
      addressLabel: 'Siège',
      addressValue: 'N’Gaoundéré, département de la Vina, région de l’Adamaoua, Cameroun',
      emailLabel: 'E‑mail',
      emailValue: 'contact@mballen.cm',
      phoneLabel: 'Téléphone',
      phoneValue: '+237 6XX XXX XXX',
      socialTitle: 'Suivez‑nous',
      socialDesc: 'Retrouvez nos campagnes en images et nos opportunités de bénévolat sur les réseaux sociaux.',
      whyTitle: 'Pourquoi soutenir MBALLEN ?',
      whySubtitle: 'Votre impact en direct',
      reasons: [
        'Redonner espoir aux plus démunis',
        'Soutenir une autonomisation réelle et durable',
        'Bâtir des communautés plus résilientes',
        'Faire vivre la solidarité concrète'
      ]
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
      title: 'Nos domaines d’intervention',
      subtitle: 'Une approche globale pour un développement humain durable.',
      items: [
        { title: 'Inclusion sociale', desc: 'Lutter contre l’exclusion et la stigmatisation des personnes vulnérables.' },
        { title: 'Aide humanitaire', desc: 'Intervenir rapidement pour fournir vivres et soins essentiels.' },
        { title: 'Éducation', desc: 'Faciliter l’accès au savoir et à la formation professionnelle.' },
        { title: 'Entrepreneuriat', desc: 'Soutenir l’économie locale par l’appui aux micro‑projets.' },
        { title: 'Infrastructures', desc: 'Améliorer le cadre de vie par des constructions communautaires.' },
        { title: 'Environnement', desc: 'Préserver l’écosystème pour les générations futures.' }
      ]
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
      contact: 'Contact',
      cta: 'Donate Now',
    },
    hero: {
      title: 'Building a future of dignity and self-reliance for the most vulnerable',
      subtitle: 'MBALLEN NGO — meaning "Let’s Help" in Fulfulde — places active solidarity and empathy at the heart of sustainable human development in Cameroon.',
      ctaDon: 'Support Our Cause',
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
      emailValue: 'contact@mballen.cm',
      phoneLabel: 'Phone',
      phoneValue: '+237 6XX XXX XXX',
      socialTitle: 'Follow Us',
      socialDesc: 'Join our community on social media to see our campaigns in action and find volunteering opportunities.',
      whyTitle: 'Why support MBALLEN?',
      whySubtitle: 'Your direct impact',
      reasons: [
        'Restoring hope to the most destitute.',
        'Supporting real and sustainable empowerment.',
        'Building stronger and more resilient communities.',
        'Making concrete human solidarity a reality.'
      ]
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
      title: 'Our Areas of Focus',
      subtitle: 'A holistic approach to complete human development.',
      items: [
        { title: 'Social Inclusion', desc: 'Fighting exclusion and the stigmatization of vulnerable people.' },
        { title: 'Humanitarian Aid', desc: 'Emergency intervention to provide food and essential care.' },
        { title: 'Education', desc: 'Facilitating access to knowledge and vocational training.' },
        { title: 'Entrepreneurship', desc: 'Boosting the local economy by supporting micro-projects.' },
        { title: 'Infrastructure', desc: 'Improving the living environment through community construction.' },
        { title: 'Environment', desc: 'Preserving the ecosystem for future generations.' }
      ]
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
      contact: 'İletişim',
      cta: 'Bağış Yap',
    },
    hero: {
      title: 'En savunmasızlar için onurlu ve özerk bir gelecek inşa ediyoruz',
      subtitle: 'MBALLEN STK — Fulfulde dilinde "Yardım Edelim" — Kamerun\'da sürdürülebilir insani gelişimin merkezine aktif dayanışmayı koyar.',
      ctaDon: 'Davaya Destek Ol',
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
      emailValue: 'contact@mballen.cm',
      phoneLabel: 'Telefon',
      phoneValue: '+237 6XX XXX XXX',
      socialTitle: 'Bizi Takip Edin',
      socialDesc: 'Kampanyalarımızı eylem halindeyken görmek ve gönüllülük fırsatlarını bulmak için sosyal medyada topluluğumuza katılın.',
      whyTitle: 'Neden MBALLEN\'i desteklemelisiniz?',
      whySubtitle: 'Doğrudan etkiniz',
      reasons: [
        'En yoksul olanlara umudu geri vermek.',
        'Gerçek ve sürdürülebilir özerkleşmeyi desteklemek.',
        'Daha güçlü ve dirençli topluluklar inşa etmek.',
        'Somut insani dayanışmayı gerçeğe dönüştürmek.'
      ]
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
      title: 'Eylem Alanlarımız',
      subtitle: 'Tam insani gelişim için bütünsel bir yaklaşım.',
      items: [
        { title: 'Sosyal Dahiliyet', desc: 'Savunmasız kişilerin dışlanması ve damgalanmasıyla mücadele.' },
        { title: 'İnsani Yardım', desc: 'Gıda ve temel bakım sağlamak için acil müdahale.' },
        { title: 'Eğitim', desc: 'Bilgiye ve mesleki eğitime erişimi kolaylaştırmak.' },
        { title: 'Girişimcilik', desc: 'Mikro projeleri destekleyerek yerel ekonomiyi canlandırmak.' },
        { title: 'Altyapı', desc: 'Toplum inşaatlarıyla yaşam ortamını iyileştirmek.' },
        { title: 'Çevre', desc: 'Ekosistemi gelecek nesiller için korumak.' }
      ]
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
  }
};
