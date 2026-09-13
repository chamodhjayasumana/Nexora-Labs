import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Container } from '../../components/ui';
import { GiantTypography } from '../../components/creative/CreativePrimitives';

function StormRadarWidget() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-4">
      <p className="text-xs uppercase tracking-[0.16em] text-blue">Storm Opportunity Radar</p>
      <div className="relative mx-auto mt-4 flex h-40 w-40 items-center justify-center">
        <span className="absolute h-full w-full animate-ping rounded-full border border-accent/30" />
        <span className="absolute h-2/3 w-2/3 animate-pulse rounded-full border border-accent/40" />
        <span className="absolute h-1/3 w-1/3 rounded-full bg-accent/30" />
        <span className="relative h-2 w-2 rounded-full bg-accent" />
      </div>
      <dl className="mt-3 space-y-1 text-sm">
        <div className="flex justify-between"><dt className="text-muted">ZIP</dt><dd>78704</dd></div>
        <div className="flex justify-between"><dt className="text-muted">Hail Activity</dt><dd className="text-accent">MODERATE</dd></div>
        <div className="flex justify-between"><dt className="text-muted">Last Event</dt><dd>2 Days Ago</dd></div>
      </dl>
      <p className="mt-2 text-[11px] text-muted">Potential Opportunity Area</p>
    </div>
  );
}

function SmartEstimateWidget() {
  const steps = [
    'Locating Property...',
    'Property Found',
    'Estimated Roof Area — 2,740 sq ft',
    'Recommended Estimate Range — $11,800 – $15,400',
  ];
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setStep((s) => (s + 1) % steps.length), 1800);
    return () => window.clearInterval(id);
  }, [steps.length]);

  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <p className="text-xs uppercase tracking-[0.16em] text-accent">Smart Property Estimate</p>
      <p className="mt-3 rounded-lg border border-border bg-bg-secondary px-3 py-2 text-sm text-text">
        123 Example Street
      </p>
      <AnimatePresence mode="wait">
        <motion.p
          key={step}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          className="mt-4 text-sm text-muted"
        >
          {steps[step]}
        </motion.p>
      </AnimatePresence>
      <p className="mt-3 text-[11px] text-accent">Demo Data</p>
    </div>
  );
}

function LeadAssistantWidget() {
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <p className="text-xs uppercase tracking-[0.16em] text-blue">AI Lead Qualification</p>
      <div className="mt-3 space-y-2 text-sm">
        <p className="rounded-xl bg-bg-secondary px-3 py-2 text-muted">What type of project are you planning?</p>
        <p className="ml-6 rounded-xl bg-accent/15 px-3 py-2 text-text">Roof replacement.</p>
        <p className="rounded-xl bg-bg-secondary px-3 py-2 text-muted">When would you like the work completed?</p>
        <p className="ml-6 rounded-xl bg-accent/15 px-3 py-2 text-text">Within a month.</p>
      </div>
      <div className="mt-4 rounded-xl border border-success/30 bg-success/10 p-3">
        <p className="text-xs text-success">Lead Score — HIGH INTENT</p>
        <p className="mt-1 text-xs text-muted">Roof Replacement · &lt;30 Days · Service Area ✓</p>
        <button type="button" className="mt-2 text-xs font-semibold text-accent">
          Send to Sales
        </button>
      </div>
    </div>
  );
}

function VoiceLeadWidget() {
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.16em] text-muted">Voice-to-Lead Concept</p>
        <span className="text-[10px] text-blue">Automation Concept</span>
      </div>
      <div className="mt-4 flex h-12 items-end gap-1">
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.span
            key={i}
            className="w-1 rounded-full bg-accent"
            animate={{ height: [6, 18 + (i % 5) * 4, 8] }}
            transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.04 }}
          />
        ))}
      </div>
      <p className="mt-3 text-sm italic text-muted">
        "My AC stopped working and the house is getting really hot."
      </p>
      <dl className="mt-4 grid grid-cols-2 gap-2 text-xs">
        <div className="rounded-lg border border-border p-2"><dt className="text-muted">Service</dt><dd>Emergency HVAC</dd></div>
        <div className="rounded-lg border border-border p-2"><dt className="text-muted">Priority</dt><dd className="text-accent">High</dd></div>
        <div className="rounded-lg border border-border p-2"><dt className="text-muted">Location</dt><dd>Austin</dd></div>
        <div className="rounded-lg border border-border p-2"><dt className="text-muted">Status</dt><dd>Sales Follow-Up</dd></div>
      </dl>
    </div>
  );
}

function FinancingWidget() {
  const [cost, setCost] = useState(14000);
  const [down, setDown] = useState(2000);
  const financed = Math.max(cost - down, 0);
  const monthly = Math.round(financed / 60);

  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <p className="text-xs uppercase tracking-[0.16em] text-accent">Smart Financing Experience</p>
      <label className="mt-4 block text-xs text-muted">
        Project Cost ${cost.toLocaleString()}
        <input
          type="range"
          min={5000}
          max={25000}
          step={500}
          value={cost}
          onChange={(e) => setCost(Number(e.target.value))}
          className="mt-2 w-full accent-orange-500"
        />
      </label>
      <label className="mt-3 block text-xs text-muted">
        Down Payment ${down.toLocaleString()}
        <input
          type="range"
          min={0}
          max={5000}
          step={100}
          value={down}
          onChange={(e) => setDown(Number(e.target.value))}
          className="mt-2 w-full accent-orange-500"
        />
      </label>
      <p className="mt-4 font-display text-3xl font-semibold text-text">${monthly} / month</p>
      <p className="mt-1 text-[11px] text-muted">Illustrative estimate only.</p>
    </div>
  );
}

function ServiceMapWidget() {
  const [active, setActive] = useState('Austin, TX');
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <p className="text-xs uppercase tracking-[0.16em] text-blue">Interactive Service Area</p>
      <svg viewBox="0 0 320 180" className="mt-3 h-36 w-full" aria-label="Stylized US service map">
        <rect width="320" height="180" rx="12" fill="#0b1524" />
        {[
          { id: 'Austin, TX', x: 150, y: 118 },
          { id: 'Dallas, TX', x: 168, y: 100 },
          { id: 'Houston, TX', x: 175, y: 128 },
        ].map((city) => (
          <g key={city.id} onMouseEnter={() => setActive(city.id)} className="cursor-pointer">
            <circle
              cx={city.x}
              cy={city.y}
              r={active === city.id ? 8 : 5}
              fill={active === city.id ? '#F97316' : '#3B82F6'}
            />
          </g>
        ))}
        <path
          d="M40 40 C90 20, 140 30, 200 25 S280 50, 290 90 S250 150, 180 155 S70 140, 40 100 Z"
          fill="none"
          stroke="rgba(148,163,184,0.25)"
          strokeWidth="1.5"
        />
      </svg>
      <p className="text-sm font-medium text-text">{active}</p>
      <p className="text-xs text-muted">Active Service Areas — Roofing · HVAC · Restoration</p>
    </div>
  );
}

export function InnovationLab() {
  return (
    <div id="innovation-lab" className="relative overflow-hidden border-t border-border py-20 sm:py-28">
      <GiantTypography text="LAB" />
      <Container className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue">Innovation Lab</p>
        <h3 className="mt-4 font-display text-4xl font-semibold text-text sm:text-5xl">
          Things We're Experimenting With.
        </h3>
        <p className="mt-4 max-w-2xl text-muted">
          Some ideas become client products. Others exist simply because we wanted to see if they
          were possible.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <motion.div initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="-rotate-1">
            <StormRadarWidget />
          </motion.div>
          <motion.div initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="rotate-1 md:translate-y-6">
            <SmartEstimateWidget />
          </motion.div>
          <motion.div initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="-rotate-1">
            <LeadAssistantWidget />
          </motion.div>
          <motion.div initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="rotate-1">
            <VoiceLeadWidget />
          </motion.div>
          <motion.div initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="-rotate-1 md:translate-y-4">
            <FinancingWidget />
          </motion.div>
          <motion.div initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="rotate-1">
            <ServiceMapWidget />
          </motion.div>
        </div>
        <p className="mt-6 text-sm text-muted">
          Prefer a full journey walkthrough?{' '}
          <Link to="/work/apexshield" className="text-accent hover:underline">
            Open the ApexShield case study
          </Link>
          .
        </p>
      </Container>
    </div>
  );
}
