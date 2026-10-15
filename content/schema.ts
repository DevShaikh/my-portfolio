import { z } from 'zod';

export const profileSchema = z.object({
  name: z.string().min(2),
  role: z.string().min(2),
  headline: z.string().min(10).max(140),
  intro: z.string().min(40).max(400),
  location: z.string().min(2),
  email: z.string().email(),
  linkedin: z.string().url(),
  github: z.string().url(),
  resume: z.string().startsWith('/'),
});

export const aboutContentSchema = z.object({
  eyebrow: z.string().min(1),
  heading: z.string().min(1),
  paragraphs: z.tuple([z.string().min(1), z.string().min(1)]),
  stats: z.array(z.object({ value: z.string().min(1), label: z.string().min(1) })).length(3),
  focusHeading: z.string().min(1),
  focusAreas: z.array(z.string().min(1)).length(5),
  availability: z.string().min(1),
  linksLabel: z.string().min(1),
  links: z
    .array(
      z.object({
        label: z.string().min(1),
        href: z.string().min(1),
        external: z.boolean(),
      }),
    )
    .length(4),
});

export const skillGroupSchema = z.object({
  label: z.string().min(2),
  icon: z.enum(['code', 'brain', 'database', 'shield', 'dashboard', 'tools']),
  description: z.string().min(20),
  core: z.array(z.string().min(1)).min(1),
  alsoUsed: z.array(z.string().min(1)),
});

export const capabilitiesContentSchema = z.object({
  eyebrow: z.string().min(1),
  heading: z.string().min(1),
  coreLabel: z.string().min(1),
  alsoUsedLabel: z.string().min(1),
  collaborationLabel: z.string().min(1),
  cards: z.array(skillGroupSchema).length(6),
  collaborationTags: z.array(z.string().min(1)).min(1),
});

export const projectSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/, 'Use lowercase letters, numbers and hyphens'),
  title: z.string().min(3).max(80),
  summary: z.string().min(20).max(280),
  role: z.string().min(2),
  period: z.string().optional(),
  stack: z.array(z.string().min(1)).min(1),
  problem: z.string().min(20),
  highlights: z.array(z.string().min(10)).min(1),
  links: z.array(z.object({ label: z.string().min(1), href: z.string().url() })).default([]),
});

export const experienceGroupSchema = z.object({
  label: z.string().min(2),
  bullets: z.array(z.string().min(1)).min(1),
});

export const experienceEntrySchema = z.object({
  title: z.string().min(2),
  company: z.string().min(2),
  period: z.string().min(2),
  description: z.string().min(20),
  groups: z.array(experienceGroupSchema).default([]),
  skills: z.array(z.string().min(1)).min(1),
});

export const moreClientWorkSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(20),
  tags: z.array(z.string().min(1)).min(2).max(3),
});

export type Profile = z.infer<typeof profileSchema>;
export type SkillGroup = z.infer<typeof skillGroupSchema>;
export type Project = z.infer<typeof projectSchema>;
export type ExperienceEntry = z.infer<typeof experienceEntrySchema>;
export type ExperienceGroup = z.infer<typeof experienceGroupSchema>;
export type MoreClientWork = z.infer<typeof moreClientWorkSchema>;
