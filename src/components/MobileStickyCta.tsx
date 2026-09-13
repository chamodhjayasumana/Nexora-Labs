import { Phone } from 'lucide-react';
import { COMPANY } from '../data/company';
import { Button } from './ui';

/** Sticky mobile CTA bar for conversion on smaller screens. */
export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/95 p-3 backdrop-blur-xl sm:hidden">
      <div className="flex gap-2">
        <Button href={`tel:${COMPANY.phone.replace(/\D/g, '')}`} variant="secondary" className="flex-1">
          <Phone className="h-4 w-4" aria-hidden />
          Call
        </Button>
        <Button href={COMPANY.cta.strategyHref} className="flex-1">
          Strategy Call
        </Button>
      </div>
    </div>
  );
}
