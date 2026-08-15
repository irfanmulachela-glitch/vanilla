export interface Product {
  id: string;
  name: string;
  slug: string;
  category: "beans" | "paste" | "powder";
  shortDescription: string;
  description: string;
  image: string;
  specifications: Record<string, string>;
  certifications: string[];
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  company: string;
  phone?: string;
  productId: string;
  message: string;
  region?: string;
  createdAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: string;
  published: boolean;
  createdAt: string;
}

export interface Region {
  name: string;
  slug: string;
  description: string;
  keywords: string[];
}
