/**
 * Company configuration — replace placeholders with real business details.
 */
export const COMPANY = {
  name: 'Nexora Labs',
  legalName: 'Nexora Labs',
  tagline: 'Web Development • Automation • Digital Growth',
  positioning: 'Digital Growth & Automation Partner',
  email: 'hello@yourcompany.com',
  phone: '(555) 000-0000',
  address: {
    line1: 'Your Street Address',
    city: 'Your City',
    state: 'ST',
    zip: '00000',
    country: 'United States',
  },
  foundedYear: 'YYYY',
  social: {
    linkedin: 'https://linkedin.com/company/your-company',
    github: 'https://github.com/your-company',
  },
  cta: {
    primary: 'Book a Free Strategy Call',
    secondary: 'View Our Solutions',
    contact: 'Start My Project',
    strategyHref: '#contact',
    solutionsHref: '#solutions',
  },
} as const;

export const SEO = {
  title: `Digital Growth, Web Development & Automation | ${COMPANY.name}`,
  description:
    'We build high-converting websites, lead-generation systems and business automation solutions for service businesses.',
} as const;
