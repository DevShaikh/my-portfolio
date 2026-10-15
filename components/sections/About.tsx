'use client';

import { motion, useReducedMotion } from 'motion/react';
import { aboutContent } from '@/content/profile';
import { Reveal } from '@/components/ui/Reveal';

export function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-24 border-t border-slate-800 bg-slate-950"
    >
      <div className="mx-auto max-w-page px-5 py-20">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-emerald-400">
            {aboutContent.eyebrow}
          </p>
          <h2 id="about-title" className="mt-3 text-3xl font-bold tracking-tight text-white">
            {aboutContent.heading}
          </h2>
        </Reveal>

        <div className="mt-9 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal className="space-y-0">
            <p className="text-base leading-8 text-slate-300">{aboutContent.paragraphs[0]}</p>
            <p className="mt-5 text-base leading-8 text-slate-400">{aboutContent.paragraphs[1]}</p>

            <div className="mt-8 grid grid-cols-3 gap-4 border-y border-slate-800 py-5">
              {aboutContent.stats.map((item, index) => (
                <Reveal key={item.label} delay={index * 0.08} className="min-w-0">
                  <div className="text-2xl font-semibold text-white">{item.value}</div>
                  <div className="mt-1 text-xs leading-5 text-slate-500">{item.label}</div>
                </Reveal>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-500">{aboutContent.availability}</p>
          </Reveal>

          <Reveal delay={0.08}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              {aboutContent.focusHeading}
            </h3>
            <ul className="mt-4 divide-y divide-slate-800">
              {aboutContent.focusAreas.map((item, index) => (
                <motion.li
                  key={item}
                  initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="py-3 text-sm leading-6 text-slate-300"
                >
                  {item}
                </motion.li>
              ))}
            </ul>

            <nav
              aria-label={aboutContent.linksLabel}
              className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-800 pt-5 text-sm text-slate-400"
            >
              {aboutContent.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="transition-colors hover:text-emerald-400 focus-visible:text-emerald-400"
                >
                  {link.label}
                  {link.external && <span aria-hidden="true"> ↗</span>}
                </a>
              ))}
            </nav>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
