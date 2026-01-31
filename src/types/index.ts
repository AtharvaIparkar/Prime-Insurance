export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterHandle?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  slug: string;
  longDescription?: string;
  bulletPoints?: string[];
  subService?: boolean;
  featured?: boolean;
  image?: string;
  link: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
