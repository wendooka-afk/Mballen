
export type Language = 'fr' | 'en' | 'tr' | 'ar';

export interface NavLink {
  name: string;
  path: string;
}

export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    actions: string;
    projects?: string;
    partners?: string;
    impact: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge?: string;
    title: string;
    subtitle: string;
    tagline?: string;
    ctaDon: string;
    ctaPartner?: string;
    ctaContact?: string;
    ctaActions: string;
  };
  mission: {
    badge: string;
    title: string;
    desc: string;
    targets: string[];
    approach: string;
  };
  about: {
    title: string;
    identityTitle: string;
    identityDesc: string;
    visionTitle: string;
    visionDesc: string;
    missionTitle?: string;
    missionDesc?: string;
    valuesTitle: string;
    values: string[];
    mottoTitle?: string;
    motto?: string;
  };
  actionsPage: {
    title: string;
    intro: string;
    items: {
      title: string;
      desc: string;
      subItems?: string[];
    }[];
    activities?: {
      slug: string;
      title: string;
      date: string;
      content: string[];
      tagline?: string;
      images: string[];
    }[];
  };
  projectsPage?: {
    title: string;
    intro: string;
    categories: {
      title: string;
      items: string[];
    }[];
    cta: string;
  };
  partnersPage?: {
    title: string;
    intro: string;
    whyTitle: string;
    whyItems: string[];
    potentialTitle: string;
    potentialItems: string[];
    cta: string;
  };
  impactPage: {
    title: string;
    subtitle: string;
    news: {
      title: string;
      tag: string;
      date: string;
    }[];
    note: string;
    donationTitle: string;
    donationMessage: string;
    donationCTA: string;
    donationOptions: string[];
    paymentMethods: string;
  };
  contactPage: {
    title: string;
    subtitle: string;
    addressLabel: string;
    addressValue: string;
    emailLabel: string;
    emailValue: string;
    phoneLabel: string;

    phoneValues: string[];
    tagline?: string;
  };
  joinUsPage: {
    title: string;
    subtitle: string;
    volunteerTitle: string;
    volunteerDesc: string;
    internshipTitle: string;
    internshipDesc: string;
    cta: string;
  };
  pressPage: {
    title: string;
    subtitle: string;
    kitTitle: string;
    kitDesc: string;
    contactTitle: string;
    releases: {
      date: string;
      title: string;
    }[];
  };
  reportsPage: {
    title: string;
    subtitle: string;
    annualReportsTitle: string;
    transparencyTitle: string;
    transparencyDesc: string;
    reports: {
      year: string;
      title: string;
    }[];
  };
  domains: {
    title: string;
    subtitle: string;
    cta?: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  fieldActions?: {
    title: string;
    items: string[];
    conclusion: string;
  };
  callToAction?: {
    title: string;
    heading: string;
    desc: string;
    links: string[];
  };
  don: {
    title: string;
    desc: string;
    reasons: string[];
    cta: string;
  };
  footer: {
    description: string;
    navigation: string;
    privacy: string;
    contact: string;
    address: string;
    emailPlaceholder: string;
    emailLabel: string;
    newsletter: string;
    newsletterDesc: string;
    subscribe: string;
    rights: string;
    links: {
      join: string;
      press: string;
      reports: string;
    };
  };
}

export interface Project {
  title: string;
  location: string;
  status: string;
  image: string;
  description: string;
}
