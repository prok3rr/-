export interface Sector {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  iconName: string;
  professions: string[];
  keyRoles: string[];
  benefits: string[];
}

export interface Profession {
  id: string;
  slug: string;
  title: string;
  seoTitle: string;
  sectorId: string;
  sectorName: string;
  shortDesc: string;
  tasks: string[];
  experienceLevel: string;
  suitableFor: string;
  requirements: string[];
}

export interface RecruitmentService {
  id: string;
  title: string;
  description: string;
  iconName: string;
  targetAudience: string;
  keyFeatures: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface InquiryFormData {
  fullName: string;
  clientType: 'شركة' | 'مؤسسة' | 'فرد';
  country: string;
  profession: string;
  workerCount: number | string;
  nationality: string;
  phone: string;
  whatsapp: string;
  notes: string;
}
