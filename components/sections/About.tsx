import { profile } from '@/content/profile';

const metrics = [
  { value: '4+', label: 'Years of experience' },
  { value: '15+', label: 'AI script types built' },
  { value: '15+', label: 'Projects delivered' },
];

const strengths = [
  'AI and LLM product integration',
  'SaaS architecture and API design',
  'Next.js, Node.js, MongoDB, and TypeScript delivery',
  'Security, payments, and operational workflow design',
  'Product thinking with engineering execution',
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-t border-slate-800 bg-slate-950"
    >
      <div className="mx-auto max-w-page px-5 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-emerald-400">
            About me
          </p>
          <h2 id="about-title" className="mt-3 text-3xl font-bold tracking-tight text-white">
            Building software that turns operational friction into product clarity.
          </h2>
        </div>

        <div className="mt-9 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p className="text-base leading-8 text-slate-300">{profile.intro}</p>
            <p className="mt-5 text-base leading-8 text-slate-400">
              I take product modules from data models and API contracts through frontend
              interactions, third-party integrations, and deployment. Much of this work is built for
              private client repositories; the public projects below offer a look at my independent
              work.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 border-y border-slate-800 py-5">
              {metrics.map((item) => (
                <div key={item.label}>
                  <div className="text-2xl font-semibold text-white">{item.value}</div>
                  <div className="mt-1 text-xs leading-5 text-slate-500">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Focus areas
            </h3>
            <ul className="mt-4 divide-y divide-slate-800">
              {strengths.map((item) => (
                <li key={item} className="py-3 text-sm leading-6 text-slate-300">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-800 pt-5 text-sm text-slate-400">
              <a href={profile.github} className="transition-colors hover:text-emerald-400">
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <a href={profile.linkedin} className="transition-colors hover:text-emerald-400">
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="transition-colors hover:text-emerald-400"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
