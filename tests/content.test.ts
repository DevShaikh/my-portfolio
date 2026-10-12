import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { profile } from '../content/profile';
import { projects } from '../content/projects';
import { skills } from '../content/skills';
import { projectSchema } from '../content/schema';

describe('content integrity', () => {
  it('profile points to a resume file that really exists in /public', () => {
    expect(existsSync(join(process.cwd(), 'public', profile.resume))).toBe(true);
  });

  it('skills have no empty groups or duplicate items within a group', () => {
    for (const g of skills) {
      expect(new Set(g.items.map((i) => i.toLowerCase())).size).toBe(g.items.length);
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
