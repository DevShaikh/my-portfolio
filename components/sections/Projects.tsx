'use client';

import {
  ArrowUpRight,
  Building2,
  ChartNoAxesCombined,
  Code2,
  ShoppingBag,
  Sparkles,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import {
  moreClientWork,
  moreClientWorkNote,
  moreClientWorkTitle,
  projects,
} from '@/content/projects';
import { Reveal } from '@/components/ui/Reveal';

const projectVisuals = [
  {
    icon: Sparkles,
    color: 'text-emerald-300',
    panel: 'bg-[#0c2927]',
    eyebrow: 'INVESTOR WORKSPACE',
    title: 'Deal intelligence',
    detail: 'Analysis  /  Scripts  /  Buyer matching',
    bars: ['w-4/5', 'w-3/5', 'w-2/3'],
  },
  {
    icon: ChartNoAxesCombined,
    color: 'text-sky-300',
    panel: 'bg-[#102334]',
    eyebrow: 'OPERATIONS',
    title: 'Deal pipeline',
    detail: 'Offers  /  Buyers  /  Live activity',
    bars: ['w-2/3', 'w-4/5', 'w-1/2'],
  },
  {
    icon: Building2,
    color: 'text-amber-200',
    panel: 'bg-[#282319]',
    eyebrow: 'PROPERTY PLATFORM',
    title: 'Property operations',
    detail: 'Buildings  /  Members  /  Reporting',
    bars: ['w-3/5', 'w-4/5', 'w-2/3'],
  },
  {
    icon: ShoppingBag,
    color: 'text-rose-200',
    panel: 'bg-[#2a1d24]',
    eyebrow: 'COMMERCE',
    title: 'Marketplace',
    detail: 'Listings  /  Countries  /  Live updates',
    bars: ['w-4/5', 'w-1/2', 'w-3/5'],
  },
];

function ProjectPreview({ index }: { index: number }) {
  const visual = projectVisuals[index % projectVisuals.length];
  const Icon = visual.icon;

  return (
    <div className={`relative h-48 overflow-hidden ${visual.panel} p-5 sm:h-56`}>
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:28px_28px]"
      />
      <div className="absolute -right-12 -top-16 h-52 w-52 rounded-full border border-white/10" />
      <div className="absolute -right-3 -top-7 h-36 w-36 rounded-full border border-white/10" />

      <div className="relative mx-auto max-w-sm overflow-hidden rounded-md border border-white/15 bg-[#081116]/95 shadow-2xl shadow-black/30">
        <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
          <div className="flex items-center gap-2">
            <span className={`flex h-6 w-6 items-center justify-center rounded ${visual.panel}`}>
              <Icon size={14} className={visual.color} aria-hidden="true" />
            </span>
            <span className="text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-slate-300">
              {visual.eyebrow}
            </span>
          </div>
          <div className="flex gap-1" aria-hidden="true">
            <span className="h-1 w-1 rounded-full bg-white/35" />
            <span className="h-1 w-1 rounded-full bg-white/35" />
            <span className="h-1 w-1 rounded-full bg-white/35" />
          </div>
        </div>

        <div className="p-4">
          <p className="text-sm font-semibold text-white">{visual.title}</p>
          <p className="mt-1 text-[0.6rem] text-slate-500">{visual.detail}</p>
          <div className="mt-4 grid grid-cols-[1fr_0.7fr] gap-3">
            <div className="space-y-2 rounded border border-white/10 bg-white/[0.03] p-2.5">
              {visual.bars.map((width, rowIndex) => (
                <div key={`${width}-${rowIndex}`} className="flex items-center gap-2">
                  <span
                    className={`h-1.5 ${width} rounded-full ${['bg-white/35', 'bg-white/20', 'bg-white/15'][rowIndex]}`}
                  />
                  <span className="h-1.5 w-8 rounded-full bg-white/10" />
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-between rounded border border-white/10 bg-white/[0.03] p-2.5">
              <span className="h-1.5 w-10 rounded-full bg-white/20" />
              <span className={`h-5 w-full rounded-sm ${visual.panel}`} />
              <span className={`h-1.5 w-2/3 rounded-full ${visual.color} opacity-60`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const prefersReducedMotion = useReducedMotion();

  if (!projects.length) return null;

  const publicProjects = [
    {
      name: 'nexthealth-proxy',
      description: 'Secure backend proxy for the NexHealth API.',
      stack: 'TypeScript · Node.js · Express',
      href: 'https://github.com/DevShaikh/nexthealth-proxy',
    },
    {
      name: 'file_instant',
      description: 'Full-stack file-sharing web app.',
      stack: 'JavaScript · Node.js · Express',
      href: 'https://github.com/DevShaikh/file_instant',
    },
    {
      name: 'my-portfolio',
      description: 'Personal portfolio built with Next.js.',
      stack: 'JavaScript · Next.js',
      href: 'https://github.com/DevShaikh/my-portfolio',
    },
  ];

  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="scroll-mt-24 border-t border-white/5 bg-[#070d12]"
    >
      <div className="mx-auto max-w-page px-5 py-20">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-emerald-400">
            Selected work
          </p>
          <h2 id="work-title" className="mt-3 text-3xl font-bold tracking-tight text-white">
            Production products and open-source work.
          </h2>
        </Reveal>

        <div className="mt-12">
          <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="text-lg font-semibold text-white">Client products</h3>
            <p className="text-sm text-slate-500">Private repositories · Selected contributions</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((p, index) => (
              <motion.article
                key={p.slug}
                id={p.slug}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                whileHover={prefersReducedMotion ? undefined : { y: -6 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.995 }}
                className="group overflow-hidden rounded-lg border border-white/10 bg-slate-900/50 transition-colors duration-300 hover:border-emerald-300/30"
              >
                <div className="overflow-hidden">
                  <motion.div
                    whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="h-full"
                  >
                    <ProjectPreview index={index} />
                  </motion.div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.12em] text-emerald-300">
                        {p.period ?? 'Production SaaS'}
                      </p>
                      <h4 className="mt-2 text-xl font-semibold text-white">{p.title}</h4>
                    </div>
                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all group-hover:border-emerald-300/30 group-hover:text-emerald-300">
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{p.summary}</p>

                  <ul className="mt-5 space-y-2 border-t border-white/10 pt-4 text-sm leading-6 text-slate-300">
                    {p.highlights.slice(0, 2).map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-0.5 text-emerald-300" aria-hidden="true">
                          ↗
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-5 text-slate-500">
                    {p.stack.join('  ·  ')}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <section className="mt-8" aria-labelledby="more-client-work-title">
          <div className="border-b border-slate-800 pb-4">
            <h3 id="more-client-work-title" className="text-lg font-semibold text-white">
              {moreClientWorkTitle}
            </h3>
            <p className="mt-1 text-sm text-slate-500">{moreClientWorkNote}</p>
          </div>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {moreClientWork.map((item, index) => (
              <motion.li
                key={item.title}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 14 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
              >
                <article className="h-full rounded-md border border-white/10 bg-slate-900/50 p-4 transition-colors hover:border-emerald-300/25">
                  <h4 className="font-semibold text-white">{item.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
                  <ul className="mt-3 flex flex-wrap gap-2" aria-label={`${item.title} skills`}>
                    {item.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-sm border border-white/[0.08] bg-black/20 px-2 py-1 text-xs font-medium text-slate-300"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              </motion.li>
            ))}
          </ul>
        </section>

        <div className="mt-14">
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-slate-800 pb-4">
            <h3 className="text-lg font-semibold text-white">Public projects</h3>
            <a
              href="https://github.com/DevShaikh?tab=repositories"
              className="text-sm text-emerald-400 transition-colors hover:text-emerald-300"
            >
              Browse GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>

          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {publicProjects.map((project, index) => (
              <motion.li
                key={project.name}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: index * 0.04 }}
                className="rounded-md border border-white/10 bg-slate-900/50 transition-colors hover:border-emerald-300/25"
              >
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block h-full p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded bg-emerald-400/10 text-emerald-300">
                      <Code2 size={17} aria-hidden="true" />
                    </span>
                    <ArrowUpRight size={16} className="text-slate-500" aria-hidden="true" />
                  </div>
                  <p className="mt-4 font-semibold text-white">{project.name}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{project.description}</p>
                  <p className="mt-4 text-xs text-slate-500">{project.stack}</p>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
