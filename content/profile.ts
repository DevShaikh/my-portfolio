import { aboutContentSchema, profileSchema } from './schema';

// Facts here come from the resume. Keep them identical to it.
export const profile = profileSchema.parse({
  name: 'Muhammad Ahmed Shaikh',
  role: 'Full Stack Engineer',
  headline: 'I build full-stack systems that make real work easier.',
  intro:
    'I’m a Full Stack Engineer with 4+ years of experience delivering production-grade platforms across real estate, e-commerce, and deal management. I specialize in Next.js, Node.js, MongoDB, and TypeScript, and I’ve built hands-on experience integrating LLMs like Anthropic Claude into real-world commercial products.',
  location: 'Hyderabad, Pakistan',
  email: 'asofficial4k@gmail.com',
  linkedin: 'https://www.linkedin.com/in/devshaikh',
  github: 'https://github.com/DevShaikh',
  resume: '/Ahmed_Shaikh_Resume.pdf',
});

export const aboutContent = aboutContentSchema.parse({
  eyebrow: 'About me',
  heading: 'Full stack engineer building SaaS products and AI features.',
  paragraphs: [
    "I'm a Full Stack Engineer with 4+ years of experience building production SaaS platforms across real estate, e-commerce, and deal management. I've delivered 15+ projects for multiple clients, from multi-role dashboards and admin portals to AI features built on the Claude API, taking each one from database design to deployment.",
    'I care about more than making code work. I focus on understanding the underlying problem, handling edge cases, and shipping features that are practical to maintain. Most of my work is private client work, so the public projects below show my independent work, and project details are generalized.',
  ],
  stats: [
    { value: '4+', label: 'Years of experience' },
    { value: '15+', label: 'Client projects delivered' },
    { value: '20+', label: 'Database models designed' },
  ],
  focusHeading: 'Focus areas',
  focusAreas: [
    'AI and LLM integration with the Claude and OpenAI APIs',
    'SaaS architecture and API design',
    'Next.js, Node.js, MongoDB, and TypeScript',
    'Stripe billing, subscriptions, and webhooks',
    'Real-time features with Socket.io',
  ],
  availability: 'Open to full-time roles and select contract work.',
  linksLabel: 'About links',
  links: [
    { label: 'GitHub', href: profile.github, external: true },
    { label: 'LinkedIn', href: profile.linkedin, external: true },
    { label: 'Email', href: `mailto:${profile.email}`, external: false },
    { label: 'Resume', href: profile.resume, external: false },
  ],
});
