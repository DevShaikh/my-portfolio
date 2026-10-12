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

export const skillGroupSchema = z.object({
  label: z.string().min(2),
  items: z.array(z.string().min(1)).min(1),
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

export type Profile = z.infer<typeof profileSchema>;
export type SkillGroup = z.infer<typeof skillGroupSchema>;
export type Project = z.infer<typeof projectSchema>;
