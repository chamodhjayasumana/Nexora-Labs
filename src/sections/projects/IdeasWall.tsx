import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Idea } from '../../types';
import { Container } from '../../components/ui';
import { GiantTypography } from '../../components/creative/CreativePrimitives';

interface Props {
  ideas: Idea[];
}

export function IdeasWall({ ideas }: Props) {
  const navigate = useNavigate();

  const wantThis = (idea: Idea) => {
    navigate(`/?idea=${encodeURIComponent(idea.title)}#contact`);
  };

  return (
    <div className="relative overflow-hidden border-t border-border py-20 sm:py-28">
      <GiantTypography text="IDEAS" />
      <Container className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          Ideas We'd Love To Build
        </p>
        <h3 className="mt-4 font-display text-4xl font-semibold text-text sm:text-5xl">
          What Should Exist Next?
        </h3>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ideas.map((idea, index) => (
            <motion.article
              key={idea.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="flex min-h-[220px] flex-col rounded-2xl border border-border bg-[#f8fafc0a] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.18)] rotate-[-0.5deg] odd:rotate-[0.8deg]"
              style={{
                background:
                  index % 3 === 0
                    ? 'linear-gradient(160deg, rgba(249,115,22,0.08), rgba(17,28,46,0.9))'
                    : index % 3 === 1
                      ? 'linear-gradient(160deg, rgba(59,130,246,0.08), rgba(17,28,46,0.9))'
                      : 'linear-gradient(160deg, rgba(34,197,94,0.06), rgba(17,28,46,0.9))',
              }}
            >
              <span className="text-[11px] uppercase tracking-[0.16em] text-muted">{idea.status}</span>
              <h4 className="mt-3 font-display text-xl font-semibold text-text">{idea.title}</h4>
              <p className="mt-3 flex-1 text-sm text-muted">{idea.description}</p>
              <button
                type="button"
                onClick={() => wantThis(idea)}
                className="mt-4 inline-flex items-center gap-2 self-start rounded-xl border border-accent/40 bg-accent/10 px-3 py-2 text-sm font-semibold text-accent transition hover:bg-accent hover:text-white"
              >
                I Want This
                <Send className="h-3.5 w-3.5" />
              </button>
            </motion.article>
          ))}
        </div>
      </Container>
    </div>
  );
}
