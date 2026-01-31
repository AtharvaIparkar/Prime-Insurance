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
}

export interface NavLink {
  label: string;
  href: string;
}
