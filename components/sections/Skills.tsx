import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  LayoutDashboard,
  Lightbulb,
  PanelsTopLeft,
  ShieldCheck,
  Workflow,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { skills } from '@/content/skills';

const skillIcons: Record<string, { icon: LucideIcon; color: string; wash: string }> = {
  'Core stack': { icon: Code2, color: 'text-emerald-300', wash: 'bg-emerald-300/10' },
  'Product & strategy': { icon: Lightbulb, color: 'text-amber-200', wash: 'bg-amber-200/10' },
  Frontend: { icon: PanelsTopLeft, color: 'text-sky-300', wash: 'bg-sky-300/10' },
  'Backend & APIs': { icon: Workflow, color: 'text-cyan-200', wash: 'bg-cyan-200/10' },
  'AI & automation': { icon: BrainCircuit, color: 'text-lime-200', wash: 'bg-lime-200/10' },
  'Databases & data': { icon: Database, color: 'text-orange-200', wash: 'bg-orange-200/10' },
  'Web product delivery': {
    icon: LayoutDashboard,
    color: 'text-teal-200',
    wash: 'bg-teal-200/10',
  },
  'Cloud & deployment': { icon: Cloud, color: 'text-blue-200', wash: 'bg-blue-200/10' },
  'Security & auth': { icon: ShieldCheck, color: 'text-rose-200', wash: 'bg-rose-200/10' },
  'Tools & workflow': { icon: Wrench, color: 'text-violet-200', wash: 'bg-violet-200/10' },
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
            Capabilities
          </p>
          <h2 id="skills-title" className="mt-3 text-3xl font-bold tracking-tight text-white">
            Tools and systems I use to build production-grade software.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {skills.map((group, index) => {
            const visual = skillIcons[group.label] ?? skillIcons['Core stack'];
            const Icon = visual.icon;

            return (
              <div
                key={group.label}
                className="group relative overflow-hidden rounded-lg border border-white/10 bg-slate-900/50 p-5 transition-colors hover:border-white/20"
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
                  <span className="font-mono text-xs text-slate-600">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-sm border border-white/[0.08] bg-black/20 px-2.5 py-1 text-xs font-medium text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
