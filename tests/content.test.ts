import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { aboutContent, profile } from '../content/profile';
import { projects } from '../content/projects';
import { capabilitiesContent } from '../content/skills';
import { projectSchema } from '../content/schema';

const previousCapabilityTags = [
  'Product thinking',
  'System design',
  'User experience design',
  'Workflow automation',
  'SaaS UX',
  'Landing pages',
  'Dashboards',
  'Admin panels',
  'Next.js',
  'Next.js App Router',
  'React',
  'React Server Components',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Express.js',
  'REST APIs',
  'API design',
  'WebSockets',
  'Socket.io',
  'Tailwind CSS',
  'Responsive UI',
  'shadcn/ui',
  'Framer Motion',
  'Zustand',
  'React Query',
  'React Hook Form',
  'Zod validation',
  'Component architecture',
  'Strapi (headless CMS)',
  'JWT',
  'OAuth',
  'NextAuth',
  'Role-based access control',
  'Rate limiting',
  'Stripe webhooks',
  'Cron jobs',
  'Nodemailer',
  'Error handling',
  'Anthropic Claude API',
  'OpenAI API',
  'Prompt engineering',
  'Structured JSON output',
  'SSE streaming',
  'LLM workflows',
  'Workflow orchestration',
  'AI-assisted product features',
  'Automation design',
  'Token optimization',
  'MongoDB',
  'Mongoose',
  'Prisma ORM',
  'Aggregation pipelines',
  'Indexing',
  'Schema design',
  'Data modeling',
  'Firebase',
  'Secure sessions',
  'Access control',
  'Secrets management',
  'Vercel',
  'Heroku',
  'Nginx',
  'Sentry',
  'Stripe',
  'CI/CD',
  'GitHub Actions',
  'Environment configuration',
  'Production deployment',
  'Monitoring',
  'Git',
  'GitHub',
  'Postman',
];

describe('content integrity', () => {
  it('profile points to a resume file that really exists in /public', () => {
    expect(existsSync(join(process.cwd(), 'public', profile.resume))).toBe(true);
  });

  it('preserves every previous capability tag exactly once', () => {
    const capabilityTags = capabilitiesContent.cards.flatMap((card) => [
      ...card.core,
      ...card.alsoUsed,
    ]);
    capabilityTags.push(...capabilitiesContent.collaborationTags);
    const normalizedTags = capabilityTags.map((tag) => tag.toLowerCase());

    expect(capabilitiesContent.cards).toHaveLength(6);
    expect(previousCapabilityTags).toHaveLength(73);
    expect(new Set(normalizedTags).size).toBe(normalizedTags.length);
    expect(
      previousCapabilityTags.filter(
        (tag) => normalizedTags.filter((candidate) => candidate === tag.toLowerCase()).length !== 1,
      ),
    ).toEqual([]);
  });

  it('About content has the requested stat, focus, and link counts', () => {
    expect(aboutContent.stats).toHaveLength(3);
    expect(aboutContent.focusAreas).toHaveLength(5);
    expect(aboutContent.links.map((link) => link.label)).toEqual([
      'GitHub',
      'LinkedIn',
      'Email',
      'Resume',
    ]);
  });

  it('capability cards have descriptions and core tags', () => {
    for (const group of capabilitiesContent.cards) {
      expect(group.description.length).toBeGreaterThanOrEqual(20);
      expect(group.core.length).toBeGreaterThan(0);
    }
  });

  it('portfolio includes at least one project showcase entry', () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it('project slugs are unique', () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

describe('project schema', () => {
  const valid = {
    slug: 'ai-real-estate-platform',
    title: 'AI real estate investment platform',
    summary: 'A SaaS platform for real estate investors with AI-generated scripts.',
    role: 'Software engineer',
    stack: ['Next.js', 'Node.js'],
    problem: 'Investors needed tailored scripts for every deal they worked on.',
    highlights: ['Built a streaming generation engine.'],
  };

  it('accepts a complete entry and defaults links to empty', () => {
    expect(projectSchema.parse(valid).links).toEqual([]);
  });

  it('rejects entries with a bad slug, no stack, or no highlights', () => {
    expect(projectSchema.safeParse({ ...valid, slug: 'Bad Slug' }).success).toBe(false);
    expect(projectSchema.safeParse({ ...valid, stack: [] }).success).toBe(false);
    expect(projectSchema.safeParse({ ...valid, highlights: [] }).success).toBe(false);
  });
});
