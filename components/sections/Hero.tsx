import Image from 'next/image';
import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { profile } from '@/content/profile';

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden border-b border-white/5 bg-[#061214]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
      />
      <div className="mx-auto grid max-w-page items-center gap-12 px-5 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
        <div className="animate-fade-up max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-3 py-1.5 text-xs font-medium text-emerald-200">
            <Sparkles size={14} aria-hidden="true" />
            {profile.role}
          </div>

          <h1 className="mt-6 text-5xl font-semibold leading-[1.04] text-white sm:text-6xl">
            Muhammad
            <br />
            Ahmed Shaikh<span className="text-emerald-400">.</span>
          </h1>

          <p className="mt-6 max-w-xl text-xl leading-8 text-slate-200 sm:text-2xl">
            {profile.headline}
          </p>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
            Full-stack SaaS products <span className="text-emerald-400">/</span> AI integrations{' '}
            <span className="text-emerald-400">/</span> API design
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex min-h-11 items-center gap-2 rounded-md bg-emerald-400 px-5 font-semibold text-slate-950 shadow-lg shadow-emerald-950/30 transition-all hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              Explore selected work <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href={profile.resume}
              className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/15 px-4 font-medium text-slate-100 transition-colors hover:border-white/35 hover:bg-white/5"
            >
              <ArrowDownToLine size={16} aria-hidden="true" /> Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href={profile.github}
              aria-label="Ahmed Shaikh on GitHub"
              title="GitHub"
              className="text-slate-400 transition-colors hover:text-white"
            >
              <Code2 size={19} />
            </a>
            <a
              href={profile.linkedin}
              aria-label="Ahmed Shaikh on LinkedIn"
              title="LinkedIn"
              className="text-slate-400 transition-colors hover:text-white"
            >
              <BriefcaseBusiness size={19} />
            </a>
            <span className="h-4 w-px bg-white/15" aria-hidden="true" />
            <p className="flex items-center gap-2 text-sm text-slate-400">
              <MapPin size={15} className="text-emerald-400" aria-hidden="true" />
              {profile.location}
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[26rem] lg:ml-auto">
          <div className="absolute -right-5 -top-5 h-32 w-32 border-r border-t border-emerald-300/50" />
          <div className="absolute -bottom-5 -left-5 h-32 w-32 border-b border-l border-emerald-300/50" />
          <div className="relative aspect-[4/4.25] overflow-hidden rounded-lg border border-white/10 bg-slate-900">
            <Image
              src="/ahmed-shaikh.jpg"
              alt="Ahmed Shaikh"
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 420px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061214]/90 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-emerald-300">
                  Based in Pakistan
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  Building for the real world.
                </p>
              </div>
              <ArrowUpRight className="mb-1 text-white/70" size={20} aria-hidden="true" />
            </div>
          </div>
          <div className="absolute -bottom-10 right-4 hidden items-center gap-3 rounded-md border border-white/10 bg-[#0c191c] px-4 py-3 shadow-xl shadow-black/30 sm:flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
              <Sparkles size={17} aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">AI · SaaS · Systems</p>
              <p className="text-xs text-slate-400">Product engineering</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
