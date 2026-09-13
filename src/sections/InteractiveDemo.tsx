import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDown, CheckCircle2 } from 'lucide-react';
import type { DemoTab } from '../types';
import { Badge, Button, Container, SectionHeading } from '../components/ui';
import { cn } from '../utils';

const tabs: { id: DemoTab; label: string }[] = [
  { id: 'estimator', label: 'Cost Estimator' },
  { id: 'lead-capture', label: 'Lead Capture' },
  { id: 'missed-call', label: 'Missed Call Automation' },
];

const projectTypes = ['Roof Replacement', 'Roof Repair', 'Storm Damage'] as const;
const propertySizes = ['Under 1,500 sq ft', '1,500–2,500', '2,500–3,500', '3,500+'] as const;
const materials = ['Architectural Shingle', 'Metal', 'Premium Shingle'] as const;

const leadFlow = [
  'New Website Visitor',
  'Estimate Request',
  'Lead Captured',
  'SMS Notification',
  'Sales Follow-Up',
  'Appointment',
];

function estimateRange(
  projectType: (typeof projectTypes)[number],
  size: (typeof propertySizes)[number],
  material: (typeof materials)[number],
) {
  const base =
    projectType === 'Roof Repair' ? 2800 : projectType === 'Storm Damage' ? 6500 : 9800;
  const sizeFactor =
    size === 'Under 1,500 sq ft'
      ? 0.85
      : size === '1,500–2,500'
        ? 1
        : size === '2,500–3,500'
          ? 1.25
          : 1.55;
  const materialFactor =
    material === 'Metal' ? 1.35 : material === 'Premium Shingle' ? 1.2 : 1;
  const mid = Math.round(base * sizeFactor * materialFactor);
  const low = Math.round(mid * 0.88);
  const high = Math.round(mid * 1.18);
  return { low, high };
}

function OptionGrid<T extends string>({
  options,
  value,
  onChange,
}: {
  options: readonly T[];
  value: T;
  onChange: (next: T) => void;
}) {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={cn(
            'rounded-xl border px-4 py-3 text-left text-sm transition',
            value === option
              ? 'border-accent bg-accent/10 text-text'
              : 'border-border bg-bg-secondary text-muted hover:border-blue/30 hover:text-text',
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

function CostEstimatorDemo() {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState<(typeof projectTypes)[number]>('Roof Replacement');
  const [size, setSize] = useState<(typeof propertySizes)[number]>('1,500–2,500');
  const [material, setMaterial] = useState<(typeof materials)[number]>('Architectural Shingle');

  const range = useMemo(
    () => estimateRange(projectType, size, material),
    [projectType, size, material],
  );

  return (
    <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <p className="text-sm text-muted">Step {step} of 3</p>
        <Badge variant="accent">Demo estimate only</Badge>
      </div>

      {step === 1 ? (
        <div>
          <h3 className="mb-3 font-medium text-text">Project Type</h3>
          <OptionGrid options={projectTypes} value={projectType} onChange={setProjectType} />
        </div>
      ) : null}

      {step === 2 ? (
        <div>
          <h3 className="mb-3 font-medium text-text">Property Size</h3>
          <OptionGrid options={propertySizes} value={size} onChange={setSize} />
        </div>
      ) : null}

      {step === 3 ? (
        <div>
          <h3 className="mb-3 font-medium text-text">Material</h3>
          <OptionGrid options={materials} value={material} onChange={setMaterial} />
          <div className="mt-5 rounded-xl border border-accent/30 bg-accent/5 p-4">
            <p className="text-xs uppercase tracking-wider text-accent">Sample estimated range</p>
            <p className="mt-2 font-display text-2xl font-semibold text-text">
              ${range.low.toLocaleString()} – ${range.high.toLocaleString()}
            </p>
            <p className="mt-2 text-sm text-muted">
              Demo estimate only. This is not a real contractor quote.
            </p>
          </div>
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-3">
        {step > 1 ? (
          <Button variant="secondary" onClick={() => setStep((s) => s - 1)}>
            Back
          </Button>
        ) : null}
        {step < 3 ? (
          <Button onClick={() => setStep((s) => s + 1)}>Continue</Button>
        ) : (
          <Button variant="outline" onClick={() => setStep(1)}>
            Restart Demo
          </Button>
        )}
      </div>
    </div>
  );
}

function LeadCaptureDemo() {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
      <ul className="space-y-0">
        {leadFlow.map((step, index) => (
          <motion.li
            key={step}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.12 }}
            className="flex flex-col items-center"
          >
            <div className="flex w-full items-center gap-3 rounded-xl border border-border bg-bg-secondary px-4 py-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue/15 text-sm font-semibold text-blue">
                {index + 1}
              </span>
              <span className="font-medium text-text">{step}</span>
            </div>
            {index < leadFlow.length - 1 ? (
              <ArrowDown className="my-2 h-4 w-4 text-muted" aria-hidden />
            ) : null}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

function MissedCallDemo() {
  const stages = [
    { title: 'Incoming Call', detail: 'Homeowner dials your business line.' },
    { title: 'No Answer', detail: 'Call goes unanswered during a busy job.' },
    { title: 'Automation Triggered', detail: 'System detects the missed opportunity.' },
    { title: '8 seconds', detail: 'Recovery sequence starts almost immediately.' },
    {
      title: 'SMS Sent',
      detail: '"Hi! Sorry we missed your call. How can we help with your project?"',
    },
    { title: 'Customer Replies', detail: 'Conversation continues by text.' },
    { title: 'Lead Recovered ✓', detail: 'Opportunity stays with your business.' },
  ];

  return (
    <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
      <ol className="space-y-3">
        {stages.map((stage, index) => (
          <motion.li
            key={stage.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-xl border border-border bg-bg-secondary p-4"
          >
            <div className="flex items-start gap-3">
              {index === stages.length - 1 ? (
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-success" aria-hidden />
              ) : (
                <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-[10px] font-bold text-accent">
                  {index + 1}
                </span>
              )}
              <div>
                <p className="font-medium text-text">{stage.title}</p>
                <p className="mt-1 text-sm text-muted">{stage.detail}</p>
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

export function InteractiveDemo() {
  const [tab, setTab] = useState<DemoTab>('estimator');

  return (
    <section id="demo" className="bg-bg-secondary/50 py-20 sm:py-24" aria-labelledby="demo-heading">
      <Container>
        <SectionHeading
          title="Don't Just Read About It. Try It."
          description="Interactive demos that show how a digital growth platform captures, qualifies, and recovers leads."
          align="center"
          className="max-w-3xl"
        />
        <h2 id="demo-heading" className="sr-only">
          Interactive Demo
        </h2>

        <div
          className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Demo types"
        >
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={tab === item.id}
              onClick={() => setTab(item.id)}
              className={cn(
                'rounded-xl px-4 py-2.5 text-sm font-medium transition',
                tab === item.id
                  ? 'bg-accent text-white'
                  : 'border border-border bg-card text-muted hover:text-text',
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-3xl" role="tabpanel">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {tab === 'estimator' ? <CostEstimatorDemo /> : null}
              {tab === 'lead-capture' ? <LeadCaptureDemo /> : null}
              {tab === 'missed-call' ? <MissedCallDemo /> : null}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
