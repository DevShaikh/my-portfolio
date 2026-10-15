import { experience } from '@/content/experience';

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
              key={`${item.title}-${item.period}`}
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
                {item.groups.map((group) => (
                  <section key={group.label} className="mt-5">
                    <h4 className="text-sm font-semibold text-white">{group.label}</h4>
                    <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-400">
                      {group.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="text-emerald-400" aria-hidden="true">
                            /
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
                <ul
                  className="mt-5 flex flex-wrap gap-2 border-t border-slate-800 pt-4"
                  aria-label={`${item.title} skills`}
                >
                  {item.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-sm border border-white/[0.08] bg-black/20 px-2.5 py-1 text-xs font-medium text-slate-300"
                    >
                      {skill}
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
