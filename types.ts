export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  repoLink?: string;
  demoLink?: string;
  image: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company?: string;
  period: string;
  description: string;
  skills: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // lucide icon name
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  about: string;
  socials: SocialLink[];
  avatarUrl: string;
  contact?: {
    email: string;
    whatsapp: string;
    whatsappDisplay: string;
  };
}

export interface PortfolioData {
  profile: Profile;
  skills: string[];
  projects: Project[];
  experience: ExperienceItem[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}