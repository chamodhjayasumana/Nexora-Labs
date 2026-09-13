import type { Project } from '../../types';
import { cn } from '../../utils';

interface Props {
  projects: Project[];
  activeId: string;
  visible: boolean;
}

export function ProjectNavigator({ projects, activeId, visible }: Props) {
  if (!visible) return null;

  return (
    <nav
      aria-label="Project navigator"
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 xl:flex"
    >
      {projects.map((project, index) => {
        const id = `project-${project.id}`;
        const active = activeId === id;
        return (
          <a
            key={project.id}
            href={`#${id}`}
            className={cn(
              'group flex items-center justify-end gap-3 rounded-xl px-3 py-2 text-right transition',
              active ? 'bg-card/90 text-text' : 'text-muted hover:text-text',
            )}
          >
            <span
              className={cn(
                'max-w-[120px] truncate text-xs font-medium opacity-0 transition group-hover:opacity-100',
                active && 'opacity-100',
              )}
            >
              {project.shortTitle}
            </span>
            <span
              className={cn(
                'font-display text-sm',
                active ? 'text-accent' : 'text-muted',
              )}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
