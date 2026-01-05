
export type Language = 'fr' | 'en' | 'tr';

export interface NavLink {
  name: string;
  path: string;
}

export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    actions: string;
    impact: string;
    contact: string;
    cta: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaDon: string;
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
    valuesTitle: string;
    values: string[];
  };
  actionsPage: {
    title: string;
    intro: string;
    items: {
      title: string;
      desc: string;
    }[];
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
    phoneValue: string;
    socialTitle: string;
    socialDesc: string;
    whyTitle: string;
    whySubtitle: string;
    reasons: string[];
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
    items: {
      title: string;
      desc: string;
    }[];
  };
  don: {
    title: string;
    desc: string;
    reasons: string[];
    cta: string;
  };
  footer: {
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
