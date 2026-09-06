export interface PlumbingService {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  iconName: string;
  category: 'residential' | 'commercial' | 'both' | 'emergency';
}

export interface Review {
  id: string;
  author: string;
  location: string;
  serviceType: string;
  rating: number;
  text: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  serviceNeeded: string;
  urgency: 'emergency' | 'standard' | 'flexible';
  propertyType: 'residential' | 'commercial';
  message: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  serviceNeeded: string;
  message: string;
}
