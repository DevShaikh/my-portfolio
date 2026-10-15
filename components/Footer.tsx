import { profile } from '@/content/profile';
import packageJson from '../package.json';

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-2 px-5 py-8 text-sm text-slate-400">
        <p>
          © {new Date().getFullYear()} {profile.name}. Project descriptions are generalized to
          respect client confidentiality.
        </p>
        <p className="text-xs text-slate-500">v{packageJson.version}</p>
      </div>
    </footer>
  );
}
