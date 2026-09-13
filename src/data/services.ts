import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 'websites',
    number: '01',
    title: 'High-Converting Websites',
    description:
      'Modern, fast, mobile-first websites designed around customer actions rather than simple page views.',
    features: [
      'Conversion-focused UI/UX',
      'Responsive development',
      'Landing pages',
      'SEO-ready architecture',
    ],
    icon: 'MonitorSmartphone',
  },
  {
    id: 'lead-gen',
    number: '02',
    title: 'Lead Generation Systems',
    description:
      'Interactive tools that capture intent, qualify prospects, and move homeowners toward a booked conversation.',
    features: [
      'Smart lead forms',
      'Instant quote tools',
      'Lead qualification',
      'Appointment funnels',
    ],
    icon: 'Target',
  },
  {
    id: 'automation',
    number: '03',
    title: 'Business Automation',
    description:
      'Follow-up systems that respond when your team cannot — so opportunities do not go cold.',
    features: [
      'SMS automation',
      'Missed-call recovery',
      'Email notifications',
      'Lead routing',
      'CRM integrations',
    ],
    icon: 'Zap',
  },
  {
    id: 'custom-software',
    number: '04',
    title: 'Custom Software Development',
    description:
      'Purpose-built applications that support your operations, reporting, and customer workflows.',
    features: [
      'Web applications',
      'Business portals',
      'Dashboards',
      'API integrations',
      'Workflow automation',
    ],
    icon: 'Code2',
  },
  {
    id: 'local-growth',
    number: '05',
    title: 'Local Business Growth',
    description:
      'Local search structure and conversion tracking designed for service-area businesses.',
    features: [
      'Local SEO structure',
      'Google Business integration',
      'Service-area pages',
      'Conversion tracking',
    ],
    icon: 'MapPinned',
  },
  {
    id: 'cloud',
    number: '06',
    title: 'Cloud & Integration Solutions',
    description:
      'Reliable deployment, third-party connections, and performance optimization for growing platforms.',
    features: [
      'Cloud deployment',
      'Third-party APIs',
      'Analytics',
      'Performance optimization',
    ],
    icon: 'Cloud',
  },
];
