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
