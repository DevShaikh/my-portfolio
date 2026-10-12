const experience = [
  {
    title: 'Full-Stack Software Engineer',
    company: 'Quantum Skye Technologies',
    period: 'Jan 2022 – Sep 2026',
    description:
      'Built production SaaS platforms for real-estate, finance, and operational workflows, handling everything from API design and database architecture to product UX, AI features, and deployment.',
    bullets: [
      'Built LLM product workflows using Anthropic Claude with prompt engineering, structured JSON outputs, token optimization, and SSE streaming.',
      'Delivered deal analysis, buyer matching, payment flows, and dashboard features for real-estate operations teams.',
      'Worked across frontend, backend, Prisma data models, Stripe billing, and deployment for business-critical products.',
    ],
  },
  {
    title: 'Independent Product Engineer',
    company: 'Custom SaaS and workflow products',
    period: '2021 – 2022',
    description:
      'Built end-to-end web apps and workflow tooling for secure file sharing, operational automation, and product experimentation, shipping features from requirement gathering through deployment.',
    bullets: [
      'Created secure file-sharing and backend proxy features with authenticated API flows and validation layers.',
      'Designed business workflow systems to replace spreadsheets and fragmented manual processes with central, structured products.',
      'Owned product delivery from architecture and implementation to iteration, cloud deployment, and real-world usage support.',
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="border-t border-slate-800 bg-slate-950"
    >
      <div className="mx-auto max-w-page px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-emerald-400">
            Experience
          </p>
          <h2 id="experience-title" className="mt-3 text-3xl font-bold tracking-tight text-white">
            Product engineering built around real business outcomes.
          </h2>
        </div>

        <div className="mt-10 border-t border-slate-800">
          {experience.map((item) => (
            <article
              key={item.company}
              className="grid gap-5 border-b border-slate-800 py-7 lg:grid-cols-[minmax(13rem,0.75fr)_1.5fr] lg:gap-10"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                  {item.period}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-emerald-400">{item.company}</p>
              </div>

              <div>
                <p className="max-w-3xl text-sm leading-7 text-slate-300">{item.description}</p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-400">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="text-emerald-400" aria-hidden="true">
                        /
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
