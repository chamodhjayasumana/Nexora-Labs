import type {
  FaqItem,
  FocusItem,
  Industry,
  Metric,
  ProcessStep,
  SolutionCapability,
  Technology,
} from '../types';

export const metrics: Metric[] = [
  { id: 'capture', value: '24/7', label: 'Lead Capture' },
  { id: 'response', value: '< 60 Sec', label: 'Automated Response' },
  { id: 'mobile', value: '100%', label: 'Mobile Optimized', numericValue: 100, suffix: '%' },
  { id: 'roi', value: 'ROI', label: 'Focused Development' },
];

export const focusItems: FocusItem[] = [
  { number: '01', title: 'Conversion' },
  { number: '02', title: 'Automation' },
  { number: '03', title: 'Performance' },
  { number: '04', title: 'Scalability' },
];

export const industries: Industry[] = [
  {
    id: 'roofing',
    title: 'Roofing & Restoration',
    description:
      'Capture storm-related demand, provide estimate experiences and convert homeowners into inspection appointments.',
    icon: 'Home',
  },
  {
    id: 'hvac',
    title: 'HVAC',
    description:
      'Turn seasonal urgency into booked service calls with fast mobile actions and clear financing paths.',
    icon: 'Thermometer',
  },
  {
    id: 'plumbing',
    title: 'Plumbing',
    description:
      'Help emergency visitors reach you immediately with sticky call CTAs and automated missed-call recovery.',
    icon: 'Droplets',
  },
  {
    id: 'restoration',
    title: 'Water & Mold Restoration',
    description:
      'Guide distressed homeowners from first visit to dispatch-ready requests with clear next steps.',
    icon: 'ShieldAlert',
  },
  {
    id: 'electrical',
    title: 'Electrical & EV',
    description:
      'Qualify panel upgrades and EV charger interest with interactive quizzes and appointment funnels.',
    icon: 'Bolt',
  },
  {
    id: 'professional',
    title: 'Professional Services',
    description:
      'Build polished digital systems that generate inquiries and streamline follow-up for local service firms.',
    icon: 'Briefcase',
  },
];

export const solutionCapabilities: SolutionCapability[] = [
  {
    id: 'estimator',
    number: '01',
    title: 'Instant Cost Estimator',
    description:
      'Allow homeowners to answer a few questions and receive an estimated project range.',
  },
  {
    id: 'property',
    number: '02',
    title: 'Property Lookup',
    description:
      'Address-based property experience designed to make estimate requests more interactive.',
  },
  {
    id: 'storm',
    number: '03',
    title: 'Storm & Hail Checker',
    description:
      'Location-based storm checking experience for roofing and restoration companies.',
  },
  {
    id: 'missed-call',
    number: '04',
    title: 'Missed-Call SMS Recovery',
    description:
      'Automatically follow up when a potential customer calls but nobody answers.',
  },
  {
    id: 'financing',
    number: '05',
    title: 'Financing Calculator',
    description:
      'Transform large project prices into easier-to-understand monthly payment scenarios.',
  },
  {
    id: 'qualification',
    number: '06',
    title: 'Lead Qualification',
    description: 'Capture homeowner information before displaying estimates.',
  },
  {
    id: 'booking',
    number: '07',
    title: 'Appointment Booking',
    description:
      'Convert high-intent visitors directly into inspection or consultation requests.',
  },
  {
    id: 'click-to-call',
    number: '08',
    title: 'Mobile Click-to-Call',
    description: 'Persistent mobile conversion actions.',
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: 'discovery',
    number: '01',
    title: 'Discovery',
    description: 'Understand the business, customer journey and growth goals.',
  },
  {
    id: 'strategy',
    number: '02',
    title: 'Strategy',
    description: 'Design conversion funnels, automation and technical architecture.',
  },
  {
    id: 'design',
    number: '03',
    title: 'Design',
    description: 'Create modern UX/UI optimized for desktop and mobile.',
  },
  {
    id: 'development',
    number: '04',
    title: 'Development',
    description: 'Build the platform using modern scalable technology.',
  },
  {
    id: 'automation',
    number: '05',
    title: 'Automation',
    description: 'Connect forms, SMS, APIs, analytics and lead routing.',
  },
  {
    id: 'launch',
    number: '06',
    title: 'Launch & Optimize',
    description: 'Deploy, monitor and continuously improve.',
  },
];

export const technologies: Technology[] = [
  { id: 'react', name: 'React' },
  { id: 'angular', name: 'Angular' },
  { id: 'next', name: 'Next.js' },
  { id: 'typescript', name: 'TypeScript' },
  { id: 'dotnet', name: '.NET' },
  { id: 'dotnet-core', name: '.NET Core' },
  { id: 'rest', name: 'REST APIs' },
  { id: 'sql', name: 'SQL Server' },
  { id: 'azure', name: 'Azure' },
  { id: 'cloud', name: 'Cloud Integrations' },
];

export const faqs: FaqItem[] = [
  {
    id: 'different',
    question: 'What makes your websites different?',
    answer:
      'We design websites as conversion systems — with interactive lead tools, clear calls to action, mobile-first actions, and automation hooks — not static brochure pages.',
  },
  {
    id: 'crm',
    question: 'Can you integrate with our existing CRM?',
    answer:
      'Yes. We can connect forms, lead routing, and notifications to many CRM and operations tools through APIs and webhooks.',
  },
  {
    id: 'sms',
    question: 'Can you automate SMS and lead notifications?',
    answer:
      'Yes. Missed-call recovery, instant lead alerts, and follow-up messaging can be built into the platform as part of an automation layer.',
  },
  {
    id: 'custom',
    question: 'Do you build custom software?',
    answer:
      'Yes. Beyond marketing sites, we build portals, dashboards, workflow tools, and integrations tailored to how your business operates.',
  },
  {
    id: 'redesign',
    question: 'Can you redesign an existing contractor website?',
    answer:
      'Absolutely. We can rebuild or extend an existing site into a higher-converting platform with estimators, booking flows, and automation.',
  },
  {
    id: 'support',
    question: 'Do you provide ongoing support?',
    answer:
      'Support and maintenance options can be scoped based on hosting, content updates, automation monitoring, and continuous improvement needs.',
  },
  {
    id: 'timeline',
    question: 'How long does a project take?',
    answer:
      'Timing depends on scope, number of interactive features, and required integrations. After discovery, we provide a clear timeline based on your specific requirements.',
  },
];

export const trustIndicators = [
  'Conversion Focused',
  'Automation Ready',
  'Mobile First',
  'Built for Growth',
] as const;

export const targetIndustries = [
  'Roofing',
  'HVAC',
  'Plumbing',
  'Restoration',
  'Electrical',
] as const;

export const contactIndustries = [
  'Roofing',
  'HVAC',
  'Plumbing',
  'Restoration',
  'Electrical',
  'Professional Services',
  'Other',
] as const;

export const projectInterests = [
  'Website',
  'Lead Generation',
  'Automation',
  'Custom Software',
  'Full Digital Platform',
] as const;

export const traditionalWebsitePoints = [
  'Looks professional',
  'Static contact form',
  'Generic pages',
  'Manual follow-up',
  'Little interaction',
] as const;

export const growthPlatformPoints = [
  'Conversion-focused design',
  'Interactive lead tools',
  'Automated follow-up',
  'Instant customer response',
  'Analytics-ready',
  'Scalable integrations',
] as const;

export const caseStudyFlow = [
  'Google Search / Ads',
  'Landing Page',
  'Interactive Estimate',
  'Lead Captured',
  'SMS / Call Follow-Up',
  'Inspection Booked',
  'Potential Customer',
] as const;
