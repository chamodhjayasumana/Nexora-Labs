import type { Project } from '../types';

/**
 * Add new projects here — they automatically surface in
 * Projects showcase, filters, archive, navigator, and case studies.
 */
export const projects: Project[] = [
  {
    id: 'apexshield',
    title: 'ApexShield Roofing & Restoration',
    shortTitle: 'ApexShield',
    category: 'Lead Generation',
    year: 2026,
    status: 'Concept',
    industry: 'Roofing / Storm Restoration',
    location: 'Austin, TX',
    description:
      'An interactive roofing lead-generation platform that turns a contractor website into a digital sales system.',
    problem:
      'Traditional contractor websites inform homeowners but rarely convert high-intent traffic into inspections.',
    solution:
      'A conversion platform combining satellite lookup, instant estimates, storm tools, financing, and automated follow-up.',
    technologies: ['React', 'TypeScript', 'Automation APIs', 'Maps'],
    features: [
      'Roof satellite lookup',
      'Instant estimate widget',
      'Storm alert',
      'Financing calculator',
      'Lead notifications',
    ],
    featured: true,
    template: 'cinematic',
    tags: ['Austin, TX', 'Roofing / Storm Restoration', 'Lead Automation'],
    caseStudy: {
      problem:
        'Homeowners researching storm damage or roof replacement often leave without contacting the contractor.',
      opportunity:
        'Interactive tools can capture intent while demand is high and route qualified leads into follow-up.',
      thinking:
        'Treat the website as a sales system: estimate, qualify, recover missed calls, and book inspections.',
      userExperience:
        'Visitors explore property context, receive a sample estimate range, and request an inspection with mobile-first CTAs.',
      automationFlow: [
        'Visitor lands from search or ads',
        'Interacts with estimate / storm tools',
        'Lead captured',
        'SMS / call follow-up',
        'Inspection booked',
      ],
      technology:
        'React front-end, modular lead widgets, notification hooks, and analytics-ready event tracking.',
      expectedImpact:
        'Expected business impact: more qualified inspection requests and fewer lost high-intent visitors. Concept demonstration only.',
    },
  },
  {
    id: 'emergency-plumbing',
    title: 'Emergency Plumbing Lead System',
    shortTitle: 'Emergency Plumbing',
    category: 'Lead Generation',
    year: 2026,
    status: 'Concept',
    industry: 'Plumbing',
    location: 'United States',
    description:
      'An emergency conversion experience designed for customers who need help immediately — not a brochure.',
    problem:
      'Emergency visitors panic, bounce, or call competitors when the site is slow or unclear.',
    solution:
      'A mobile-first emergency funnel with instant help CTAs, availability messaging, and SMS confirmation.',
    technologies: ['React', 'SMS Automation', 'Mobile UX'],
    features: [
      'GET HELP NOW CTA',
      'Technician availability',
      'ETA messaging',
      'Lead capture',
      'SMS response',
    ],
    featured: true,
    template: 'phone',
    caseStudy: {
      problem: 'Emergency customers do not browse — they need a clear next action in seconds.',
      opportunity: 'Reduce friction between discovery and dispatch request.',
      thinking: 'Design for panic: large CTAs, immediate reassurance, and automated confirmation.',
      userExperience:
        'Phone-first journey from emergency discovery to help request with live availability cues.',
      automationFlow: [
        'Customer discovers issue',
        'Visits site',
        'Taps Emergency Help',
        'Lead captured',
        'SMS response sent',
        'Dispatch requested',
      ],
      technology: 'Mobile conversion UI, lead routing, and messaging automation hooks.',
      expectedImpact:
        'Expected business impact: faster emergency lead capture and fewer abandoned late-night visits.',
    },
  },
  {
    id: 'ai-roof-scanner',
    title: 'AI Roof Damage Scanner',
    shortTitle: 'AI Scanner',
    category: 'AI Concepts',
    year: 2026,
    status: 'Experimental',
    industry: 'Roofing',
    description:
      'A computer-vision style UI concept that simulates roof photo analysis and inspection recommendations.',
    problem:
      'Homeowners struggle to interpret roof damage from photos and delay contacting a professional.',
    solution:
      'A demonstration interface that visualizes scanning, markers, and a clear inspection recommendation path.',
    technologies: ['React', 'Computer Vision UI', 'Motion'],
    features: [
      'Upload simulation',
      'Scanning lines',
      'Damage markers',
      'Analysis panel',
      'Inspection CTA',
    ],
    featured: true,
    template: 'ai-scanner',
    caseStudy: {
      problem: 'Photo-based damage assessment is intimidating and often leads to inaction.',
      opportunity: 'A guided analysis experience can move homeowners toward booking an inspection.',
      thinking:
        'Present analysis as a UI concept that educates and converts — without claiming medical-grade diagnosis.',
      userExperience:
        'Upload → scan animation → markers → recommendation panel → request inspection.',
      automationFlow: [
        'Photo uploaded',
        'UI analysis simulation',
        'Markers displayed',
        'Lead / inspection request',
      ],
      technology: 'Front-end simulation of analysis UI. Not a trained production model.',
      expectedImpact:
        'Expected business impact: higher engagement from homeowners researching storm damage. UI concept only.',
    },
  },
  {
    id: 'missed-call-recovery',
    title: 'Missed-Call Recovery System',
    shortTitle: 'Automation',
    category: 'Automation',
    year: 2026,
    status: 'Concept',
    industry: 'Home Services',
    description:
      'An automation storyboard showing how unanswered calls can become recovered leads within seconds.',
    problem: 'Missed calls often become lost revenue when no follow-up happens fast enough.',
    solution:
      'Automatic SMS recovery, reply capture, lead creation, and sales notification in one workflow.',
    technologies: ['SMS', 'Webhooks', 'CRM Hooks', 'React'],
    features: [
      'Missed-call trigger',
      'Automatic SMS',
      'Reply capture',
      'Lead creation',
      'Rep notification',
    ],
    featured: true,
    template: 'automation',
    caseStudy: {
      problem: 'Busy crews miss calls and competitors win the next dial.',
      opportunity: 'Recover intent while the homeowner is still engaged.',
      thinking: 'Make the recovery path visible and trustworthy — automation as a sales teammate.',
      userExperience: 'Timeline demonstration of call → miss → SMS → reply → booked appointment.',
      automationFlow: [
        'Incoming call',
        'No answer',
        'Automatic SMS',
        'Customer replies',
        'Lead created',
        'Appointment booked',
      ],
      technology: 'Telephony + SMS automation concepts with CRM-ready lead objects.',
      expectedImpact:
        'Expected business impact: reclaim a portion of missed inbound opportunities. Concept demonstration.',
    },
  },
  {
    id: 'growth-command-center',
    title: 'Home Services Growth Command Center',
    shortTitle: 'Command Center',
    category: 'Dashboards',
    year: 2026,
    status: 'Concept',
    industry: 'Home Services',
    description:
      'A SaaS-style operations dashboard for leads, calls, estimates, appointments, and live activity.',
    problem:
      'Owners and sales teams lack a single live view of acquisition activity across channels.',
    solution:
      'A command center that surfaces today’s metrics, lead sources, and a live activity stream.',
    technologies: ['React', 'Analytics', 'Charts'],
    features: [
      "Today's leads",
      'Calls / estimates / appointments',
      'Lead source breakdown',
      'Live activity feed',
    ],
    featured: true,
    template: 'dashboard',
    caseStudy: {
      problem: 'Fragmented tools hide what’s happening in the business right now.',
      opportunity: 'A unified dashboard creates faster coaching and response.',
      thinking: 'Prioritize clarity: counts, sources, and a live feed of meaningful events.',
      userExperience: 'Glanceable KPI cards, source mix, and timestamped activity.',
      automationFlow: [
        'Lead events ingested',
        'Metrics aggregated',
        'Activity stream updated',
        'Team follows up',
      ],
      technology: 'Dashboard UI patterns ready for analytics APIs and CRM event streams.',
      expectedImpact:
        'Expected business impact: better visibility into pipeline health. Dashboard concept.',
    },
  },
  {
    id: 'contractor-transformation',
    title: 'Contractor Website Transformation',
    shortTitle: 'Transformation',
    category: 'Web Platforms',
    year: 2026,
    status: 'Concept',
    industry: 'Home Services',
    description:
      'A before/after digital transformation comparing a static contractor site to a growth platform.',
    problem: 'Many contractor sites look fine but fail to convert.',
    solution:
      'Replace static pages with estimate tools, sticky CTAs, booking, financing, and automation.',
    technologies: ['React', 'UX', 'Conversion Design'],
    features: [
      'Instant estimate',
      'Sticky call button',
      'Interactive services',
      'Automated follow-up',
      'Financing tool',
    ],
    featured: true,
    template: 'before-after',
    caseStudy: {
      problem: 'Generic brochure websites underperform against paid traffic costs.',
      opportunity: 'Reposition the site as an always-on sales and qualification system.',
      thinking: 'Show the contrast clearly so stakeholders feel the difference immediately.',
      userExperience: 'Interactive split comparison between traditional and growth experiences.',
      automationFlow: [
        'Visitor arrives',
        'Engages interactive tools',
        'Lead captured',
        'Automated follow-up',
      ],
      technology: 'Conversion-focused React UI and modular growth components.',
      expectedImpact:
        'Expected business impact: clearer path from visit to appointment. Concept comparison.',
    },
  },
  {
    id: 'storm-radar',
    title: 'Storm Opportunity Radar',
    shortTitle: 'Storm Radar',
    category: 'Experimental',
    year: 2026,
    status: 'Experimental',
    industry: 'Roofing',
    description: 'Experimental map UI exploring recent storm activity and opportunity zones.',
    problem: 'Storm demand is time-sensitive and geographically uneven.',
    solution: 'Visualize hail activity and opportunity areas for proactive outreach.',
    technologies: ['Maps', 'APIs', 'React'],
    features: ['ZIP lookup', 'Hail activity', 'Radar rings'],
    featured: false,
    template: 'cinematic',
    caseStudy: {
      problem: 'Teams miss localized storm windows.',
      opportunity: 'Surface opportunity areas quickly after weather events.',
      thinking: 'Keep it experimental — explore the interface before productizing.',
      userExperience: 'ZIP-based radar with activity labels.',
      automationFlow: ['Weather signal', 'Opportunity area', 'Campaign / outreach'],
      technology: 'Map UI concept with placeholder storm data.',
      expectedImpact: 'Expected business impact: faster storm-response marketing experiments.',
    },
  },
  {
    id: 'hvac-command-archive',
    title: 'HVAC Command Center',
    shortTitle: 'HVAC Command',
    category: 'Dashboards',
    year: 2026,
    status: 'Concept',
    industry: 'HVAC',
    description: 'Archive entry for an HVAC-focused operations and lead dashboard concept.',
    problem: 'Seasonal HVAC demand needs tighter monitoring.',
    solution: 'Dashboard views tailored to installation and emergency lead flows.',
    technologies: ['React', 'Analytics'],
    features: ['Lead metrics', 'Source mix', 'Activity feed'],
    featured: false,
    template: 'dashboard',
    caseStudy: {
      problem: 'HVAC teams need seasonal clarity.',
      opportunity: 'Centralize lead and appointment visibility.',
      thinking: 'Reuse command-center patterns for trade-specific views.',
      userExperience: 'Trade-specific KPI layout.',
      automationFlow: ['Lead in', 'Metric update', 'Follow-up'],
      technology: 'React analytics UI.',
      expectedImpact: 'Expected business impact: clearer seasonal pipeline visibility.',
    },
  },
];

export const projectFilters = [
  'All',
  'Web Platforms',
  'Automation',
  'AI Concepts',
  'Lead Generation',
  'Dashboards',
  'Experimental',
] as const;

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function filterProjects(
  filter: (typeof projectFilters)[number],
): Project[] {
  if (filter === 'All') return featuredProjects;
  if (filter === 'Experimental') {
    return featuredProjects.filter(
      (p) => p.category === 'Experimental' || p.status === 'Experimental',
    );
  }
  return featuredProjects.filter((p) => p.category === filter);
}
