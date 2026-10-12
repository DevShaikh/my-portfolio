import { profile } from '@/content/profile';

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-page px-5 py-8 text-sm text-slate-400">
        © {new Date().getFullYear()} {profile.name}. Project descriptions are generalized to respect
        client confidentiality.
      </div>
    </footer>
  );
}
