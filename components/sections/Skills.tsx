import {
  BrainCircuit,
  Code2,
  Database,
  LayoutDashboard,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { capabilitiesContent } from '@/content/skills';

const skillIcons: Record<string, { icon: LucideIcon; color: string; wash: string }> = {
  code: { icon: Code2, color: 'text-sky-300', wash: 'bg-sky-300/10' },
  brain: {
    icon: BrainCircuit,
    color: 'text-lime-200',
    wash: 'bg-lime-200/10',
  },
  database: {
    icon: Database,
    color: 'text-orange-200',
    wash: 'bg-orange-200/10',
  },
  shield: { icon: ShieldCheck, color: 'text-rose-200', wash: 'bg-rose-200/10' },
  dashboard: {
    icon: LayoutDashboard,
    color: 'text-teal-200',
    wash: 'bg-teal-200/10',
  },
  tools: { icon: Wrench, color: 'text-blue-200', wash: 'bg-blue-200/10' },
};

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="border-t border-white/5 bg-[#080e13]"
    >
      <div className="mx-auto max-w-page px-5 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-400">
            {capabilitiesContent.eyebrow}
          </p>
          <h2 id="skills-title" className="mt-3 text-3xl font-bold tracking-tight text-white">
            {capabilitiesContent.heading}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {capabilitiesContent.cards.map((group) => {
            const visual = skillIcons[group.icon];
            const Icon = visual.icon;

            return (
              <article
                key={group.label}
                className="group relative min-w-0 overflow-hidden rounded-lg border border-white/10 bg-slate-900/50 p-5 transition-colors hover:border-white/20"
              >
                <div className={`absolute inset-x-0 top-0 h-px ${visual.wash}`} />
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-md ${visual.wash} ${visual.color}`}
                    >
                      <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <h3 className="text-base font-semibold tracking-tight text-white">
                      {group.label}
                    </h3>
                  </div>
                </div>

                <p className="mb-4 max-w-xl text-sm leading-6 text-slate-400">
                  {group.description}
                </p>

                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                  {capabilitiesContent.coreLabel}
                </p>
                <ul
                  className="flex flex-wrap gap-2"
                  aria-label={`${group.label} ${capabilitiesContent.coreLabel}`}
                >
                  {group.core.map((item) => (
                    <li
                      key={item}
                      className="max-w-full rounded-sm border border-emerald-300/20 bg-emerald-300/[0.07] px-2.5 py-1 text-xs font-medium text-emerald-100 [overflow-wrap:anywhere]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mb-2 mt-4 text-xs font-medium text-slate-400">
                  {capabilitiesContent.alsoUsedLabel}
                </p>
                <ul
                  className="flex flex-wrap gap-2"
                  aria-label={`${group.label} ${capabilitiesContent.alsoUsedLabel}`}
                >
                  {group.alsoUsed.map((item) => (
                    <li
                      key={item}
                      className="max-w-full rounded-sm border border-white/[0.08] bg-black/20 px-2 py-1 text-xs font-medium text-slate-400 [overflow-wrap:anywhere]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-2 border-t border-white/5 pt-5">
          <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
            {capabilitiesContent.collaborationLabel}
          </h3>
          <ul className="flex flex-wrap gap-2" aria-label={capabilitiesContent.collaborationLabel}>
            {capabilitiesContent.collaborationTags.map((item) => (
              <li
                key={item}
                className="rounded-sm border border-white/[0.08] bg-black/20 px-2 py-1 text-xs font-medium text-slate-400"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
