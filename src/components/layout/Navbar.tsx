import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { COMPANY } from '../../data/company';
import { navItems } from '../../data/navigation';
import { useScrolled } from '../../hooks/useScroll';
import { cn } from '../../utils';
import { Button, Container } from '../ui';
import { Logo } from './Logo';

export function Navbar() {
  const scrolled = useScrolled(16);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-bg/80 shadow-lg shadow-black/20 backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <Logo />

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-muted transition hover:bg-white/5 hover:text-text"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href={COMPANY.cta.strategyHref}
            size="sm"
            className="hidden sm:inline-flex"
          >
            {COMPANY.cta.primary}
          </Button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-border p-2.5 text-text xl:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-border bg-bg/95 backdrop-blur-xl xl:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className="rounded-xl px-4 py-3 text-base text-text hover:bg-white/5"
                >
                  {item.label}
                </motion.a>
              ))}
              <Button href={COMPANY.cta.strategyHref} className="mt-2 w-full" onClick={close}>
                {COMPANY.cta.primary}
              </Button>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
