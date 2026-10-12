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

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-page items-center justify-between gap-5 px-5 py-3">
        <a href="#top" className="font-semibold tracking-tight text-white">
          {profile.name}
        </a>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-5 text-sm text-slate-300">
            {links.map((l) => (
              <li key={l.href}>
                <a className="transition-colors hover:text-white" href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
