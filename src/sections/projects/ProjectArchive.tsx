import { Link } from 'react-router-dom';
import type { Project } from '../../types';
import { Container } from '../../components/ui';
import { StatusBadge } from '../../components/creative/CreativePrimitives';

interface Props {
  projects: Project[];
}

export function ProjectArchive({ projects }: Props) {
  const sorted = [...projects].sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));

  return (
    <div className="border-t border-border py-20 sm:py-24">
      <Container>
        <h3 className="font-display text-3xl font-semibold text-text sm:text-4xl">
          More Things We've Built & Explored
        </h3>
        <div className="mt-8 overflow-x-auto rounded-2xl border border-border">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-bg-secondary text-xs uppercase tracking-[0.14em] text-muted">
              <tr>
                <th className="px-4 py-3 font-medium">Year</th>
                <th className="px-4 py-3 font-medium">Project</th>
                <th className="px-4 py-3 font-medium">Type</th>
                <th className="px-4 py-3 font-medium">Tech</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((project) => (
                <tr key={project.id} className="border-t border-border hover:bg-white/[0.02]">
                  <td className="px-4 py-4 text-muted">{project.year}</td>
                  <td className="px-4 py-4">
                    <Link
                      to={`/work/${project.id}`}
                      className="font-medium text-text transition hover:text-accent"
                    >
                      {project.title}
                    </Link>
                  </td>
                  <td className="px-4 py-4">
                    <StatusBadge status={project.status} />
                  </td>
                  <td className="px-4 py-4 text-muted">
                    {project.technologies.slice(0, 3).join(' / ')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
}
