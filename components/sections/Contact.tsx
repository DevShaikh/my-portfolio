'use client';

import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, BriefcaseBusiness, Code2, FileText, Mail } from 'lucide-react';
import { profile } from '@/content/profile';
import { Reveal } from '@/components/ui/Reveal';

export function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const channels = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    { label: 'LinkedIn', value: 'Connect', href: profile.linkedin, icon: BriefcaseBusiness },
    { label: 'GitHub', value: 'View code', href: profile.github, icon: Code2 },
    { label: 'Resume', value: 'PDF copy', href: profile.resume, icon: FileText },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-24 border-t border-white/5 bg-[#050a0e]"
    >
      <div className="mx-auto max-w-page px-5 py-20">
        <Reveal className="relative overflow-hidden rounded-lg border border-emerald-300/15 bg-[radial-gradient(ellipse_at_100%_0%,rgba(16,185,129,0.15),transparent_42%),linear-gradient(135deg,#0d191d,#0b1118_65%,#11151a)] p-7 shadow-xl shadow-black/20 sm:p-10">
          <div
            aria-hidden="true"
            className="absolute right-8 top-8 hidden h-24 w-24 rotate-12 border border-emerald-200/10 sm:block"
          />
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-emerald-300">
              <Mail size={16} aria-hidden="true" /> Contact
            </p>
            <h2 id="contact-title" className="mt-3 text-3xl font-bold tracking-tight text-white">
              Let&apos;s build the next product milestone, from idea to shipped outcome.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              I&apos;m available for product engineering, AI-enabled features, and SaaS work where
              product quality, reliability, and business clarity matter. If you need a developer who
              can move from concept to implementation, I&apos;d love to hear about it.
            </p>
          </div>

          <ul className="relative mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((channel, index) => {
              const Icon = channel.icon;

              return (
                <motion.li
                  key={channel.label}
                  initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                >
                  <a
                    className="group block h-full rounded-md border border-white/10 bg-black/25 p-4 transition-all hover:-translate-y-1 hover:border-emerald-200/30 hover:bg-emerald-300/[0.06]"
                    href={channel.href}
                  >
                    <div className="flex items-center justify-between">
                      <Icon size={18} className="text-emerald-300" aria-hidden="true" />
                      <ArrowUpRight
                        size={15}
                        className="text-slate-500 transition-colors group-hover:text-emerald-200"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="mt-5 block text-xs uppercase tracking-[0.12em] text-slate-500">
                      {channel.label}
                    </span>
                    <span className="mt-1 block break-all font-medium text-white">
                      {channel.value}
                    </span>
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
