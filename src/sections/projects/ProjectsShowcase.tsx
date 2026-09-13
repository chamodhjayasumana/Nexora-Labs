import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ideas } from '../../data/ideas';
import { featuredProjects, filterProjects, projectFilters, projects } from '../../data/projects';
import type { Project, ProjectFilter } from '../../types';
import { useActiveSection } from '../../hooks/useActiveSection';
import { Container } from '../../components/ui';
import { GiantTypography } from '../../components/creative/CreativePrimitives';
import { CinematicFeatured } from './templates/CinematicFeatured';
import { PhoneExperience } from './templates/PhoneExperience';
import { AiScanner } from './templates/AiScanner';
import { AutomationStoryboard } from './templates/AutomationStoryboard';
import { CommandCenter } from './templates/CommandCenter';
import { BeforeAfter } from './templates/BeforeAfter';
import { InnovationLab } from './InnovationLab';
import { ProjectArchive } from './ProjectArchive';
import { IdeasWall } from './IdeasWall';
import { ProjectNavigator } from './ProjectNavigator';

function renderTemplate(project: Project) {
  switch (project.template) {
    case 'cinematic':
      return <CinematicFeatured key={project.id} project={project} />;
    case 'phone':
      return <PhoneExperience key={project.id} project={project} />;
    case 'ai-scanner':
      return <AiScanner key={project.id} project={project} />;
    case 'automation':
      return <AutomationStoryboard key={project.id} project={project} />;
    case 'dashboard':
      return <CommandCenter key={project.id} project={project} />;
    case 'before-after':
      return <BeforeAfter key={project.id} project={project} />;
    default:
      return null;
  }
}

export function ProjectsShowcase() {
  const [filter, setFilter] = useState<ProjectFilter>('All');
  const visible = useMemo(() => filterProjects(filter), [filter]);
  const navIds = useMemo(
    () => featuredProjects.map((p) => `project-${p.id}`),
    [],
  );
  const activeId = useActiveSection(navIds);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const section = document.getElementById('projects');
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowNav(Boolean(entry?.isIntersecting)),
      { threshold: 0.02 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="relative overflow-hidden">
      <ProjectNavigator
        projects={featuredProjects}
        activeId={activeId}
        visible={showNav}
      />

      <div className="relative border-b border-border py-20 sm:py-24">
        <GiantTypography text="EXPLORE" />
        <Container className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Selected Work / Innovation Lab
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-semibold tracking-tight text-text sm:text-5xl lg:text-6xl">
            We Don't Just Build Websites.
            <br />
            We Build Digital Experiences.
          </h2>
          <p className="mt-5 max-w-2xl text-base text-muted sm:text-lg">
            Explore selected platforms, experiments and digital concepts designed around
            automation, interaction and business growth.
          </p>

          <div
            className="mt-8 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Project filters"
          >
            {projectFilters.map((item) => (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={filter === item}
                onClick={() => setFilter(item)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  filter === item
                    ? 'border-accent bg-accent text-white'
                    : 'border-border bg-card text-muted hover:text-text'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </Container>
      </div>

      <div>
        {visible.length === 0 ? (
          <Container className="py-20">
            <p className="text-muted">No projects in this filter yet.</p>
          </Container>
        ) : (
          visible.map((project) => (
            <motion.div
              key={`${filter}-${project.id}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
            >
              {renderTemplate(project)}
            </motion.div>
          ))
        )}
      </div>

      <InnovationLab />
      <ProjectArchive projects={projects} />
      <IdeasWall ideas={ideas} />
    </section>
  );
}
