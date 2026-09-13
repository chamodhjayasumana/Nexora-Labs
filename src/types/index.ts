export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface Industry {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export type ProjectStatus = 'Real Project' | 'Concept' | 'Experimental';
export type ProjectTemplate =
  | 'cinematic'
  | 'phone'
  | 'ai-scanner'
  | 'automation'
  | 'dashboard'
  | 'before-after';

export type ProjectCategory =
  | 'Web Platforms'
  | 'Automation'
  | 'AI Concepts'
  | 'Lead Generation'
  | 'Dashboards'
  | 'Experimental';

export interface ProjectCaseStudy {
  problem: string;
  opportunity: string;
  thinking: string;
  userExperience: string;
  automationFlow: string[];
  technology: string;
  expectedImpact: string;
}

export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  category: ProjectCategory;
  year: number;
  status: ProjectStatus;
  industry: string;
  location?: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  thumbnail?: string;
  featured: boolean;
  template: ProjectTemplate;
  tags?: string[];
  caseStudy: ProjectCaseStudy;
}

export interface Idea {
  id: string;
  title: string;
  category: string;
  description: string;
  status: 'Idea' | 'Prototype' | 'Experiment';
}

export type ProjectFilter =
  | 'All'
  | 'Web Platforms'
  | 'Automation'
  | 'AI Concepts'
  | 'Lead Generation'
  | 'Dashboards'
  | 'Experimental';

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Technology {
  id: string;
  name: string;
}

export interface Metric {
  id: string;
  value: string;
  label: string;
  numericValue?: number;
  prefix?: string;
  suffix?: string;
}

export interface SolutionCapability {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface FocusItem {
  number: string;
  title: string;
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  industry: string;
  projectInterest: string;
  message: string;
}

export type DemoTab = 'estimator' | 'lead-capture' | 'missed-call';
