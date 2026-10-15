'use client';

import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';
import { profile } from '@/content/profile';
import { projects } from '@/content/projects';

export function Header() {
  const links = [
    { href: '#top', label: 'Home' },
    { href: '#about', label: 'About' },
    ...(projects.length ? [{ href: '#work', label: 'Work' }] : []),
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
    { href: profile.resume, label: 'Resume' },
  ];

  const [activeSection, setActiveSection] = useState('top');
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.35,
  });

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-18% 0px -55% 0px',
        threshold: [0.15, 0.35, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/85 backdrop-blur">
      <motion.div
        className="h-px origin-left bg-emerald-400"
        style={prefersReducedMotion ? undefined : { scaleX: progressScale }}
      />
      <div className="mx-auto flex max-w-page items-center justify-between gap-5 px-5 py-3">
        <a
          href="#top"
          className="font-semibold tracking-tight text-white transition-colors hover:text-emerald-300"
        >
          {profile.name}
        </a>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-5 text-sm text-slate-300">
            {links.map((link) => {
              const isActive =
                activeSection === link.href.replace('#', '') ||
                (link.href === profile.resume && activeSection === 'contact');
              const isResumeLink = link.href === profile.resume;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={[
                      'transition-colors',
                      isActive ? 'text-white' : 'text-slate-300 hover:text-white',
                      isResumeLink ? 'text-emerald-300 hover:text-emerald-200' : '',
                    ].join(' ')}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
