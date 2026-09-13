import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowDown } from 'lucide-react';
import { getProjectById } from '../data/projects';
import { Container } from '../components/ui';
import {
  BrowserChrome,
  MagneticButton,
  StatusBadge,
} from '../components/creative/CreativePrimitives';

const journeyBeats = [
  'Landing experience',
  'Satellite lookup appears',
  'Estimate tool appears',
  'Lead captured',
  'SMS automation appears',
  'Appointment booked',
];

export function CaseStudyPage() {
  const { projectId } = useParams();
  const project = projectId ? getProjectById(projectId) : undefined;

  if (!project) {
    return (
      <section className="py-32">
        <Container className="max-w-2xl text-center">
          <h1 className="font-display text-3xl font-semibold text-text">Project not found</h1>
          <Link to="/#projects" className="mt-6 inline-block text-accent hover:underline">
            Back to projects
          </Link>
        </Container>
      </section>
    );
  }

  const sections = [
    { id: '01', title: 'The Problem', body: project.caseStudy.problem },
    { id: '02', title: 'The Opportunity', body: project.caseStudy.opportunity },
    { id: '03', title: 'Our Thinking', body: project.caseStudy.thinking },
    { id: '04', title: 'User Experience', body: project.caseStudy.userExperience },
    { id: '05', title: 'Automation Flow', body: null, list: project.caseStudy.automationFlow },
    { id: '06', title: 'Technology', body: project.caseStudy.technology },
    { id: '07', title: 'Interactive Demo', body: 'Explore the live concept widgets on the homepage Innovation Lab and project showcase.' },
    { id: '08', title: 'Expected Business Impact', body: project.caseStudy.expectedImpact },
  ];

  return (
    <article className="pb-24 pt-28">
      <Container>
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-text"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8"
        >
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge status={project.status} />
            <span className="text-sm text-muted">
              {project.year} · {project.category}
            </span>
          </div>
          <h1 className="mt-5 font-display text-5xl font-semibold tracking-tight text-text sm:text-7xl lg:text-8xl">
            {project.shortTitle.toUpperCase()}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">{project.description}</p>
          <div className="mt-8">
            <MagneticButton href="/#contact">Discuss a similar build</MagneticButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-14"
        >
          <BrowserChrome url={`${project.id}.demo`}>
            <div className="space-y-4 bg-gradient-to-br from-bg-secondary to-bg p-6 sm:p-10">
              <p className="text-sm text-accent">{project.industry}</p>
              <h2 className="font-display text-3xl font-semibold text-text sm:text-4xl">
                {project.title}
              </h2>
              <p className="max-w-xl text-muted">{project.solution}</p>
              <div className="grid gap-3 sm:grid-cols-3">
                {project.features.slice(0, 3).map((feature) => (
                  <div key={feature} className="rounded-xl border border-border bg-card p-4 text-sm text-text">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </BrowserChrome>
        </motion.div>

        <div className="mt-20 space-y-6">
          <h2 className="font-display text-2xl font-semibold text-text">Scroll Storytelling</h2>
          <ol className="mx-auto flex max-w-md flex-col items-center">
            {journeyBeats.map((beat, index) => (
              <motion.li
                key={beat}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex w-full flex-col items-center"
              >
                <div className="w-full rounded-xl border border-border bg-card px-4 py-3 text-center text-sm text-text">
                  {beat}
                </div>
                {index < journeyBeats.length - 1 ? (
                  <ArrowDown className="my-2 h-4 w-4 text-accent" />
                ) : null}
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="mt-20 space-y-8">
          {sections.map((section, index) => (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.03 }}
              className="rounded-3xl border border-border bg-card/60 p-6 sm:p-8"
            >
              <p className="text-sm font-semibold text-accent">{section.id}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-text">{section.title}</h3>
              {section.body ? (
                <p className="mt-4 max-w-3xl leading-relaxed text-muted">{section.body}</p>
              ) : null}
              {section.list ? (
                <ol className="mt-4 space-y-2">
                  {section.list.map((item, i) => (
                    <li key={item} className="flex gap-3 text-muted">
                      <span className="text-accent">{String(i + 1).padStart(2, '0')}</span>
                      {item}
                    </li>
                  ))}
                </ol>
              ) : null}
            </motion.section>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-bg-secondary px-3 py-1.5 text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </Container>
    </article>
  );
}
