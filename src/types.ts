export interface DressDetail {
  id: string;
  name: string;
  subtitle: string;
  category: 'Bridal Collection' | 'Party Wear';
  description: string;
  longDescription: string;
  image: string;
  closeUpImages?: {
    neckline?: string;
    sleeves?: string;
    finish?: string;
  };
  features: string[];
  fabrics: string;
  craftsmanship: string;
  perfectFor: string[];
  colorPalette: {
    name: string;
    hex: string;
  }[];
}

export interface SiteContent {
  brandTitle: string;
  slogan: string;
  intro: {
    badge: string;
    tag: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    heroImage?: string;
  };
  bridal: {
    badge: string;
    subtitleTag: string;
    title: string;
    subtitle: string;
  };
  partyWear: {
    badge: string;
    subtitleTag: string;
    title: string;
    subtitle: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
    hours: string;
    brandStatement: string;
  };
}

