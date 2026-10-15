import { z } from 'zod';
import { experienceEntrySchema } from './schema';

export const experience = z.array(experienceEntrySchema).parse([
  {
    title: 'Full Stack Engineer',
    company: 'Quantum Skye Technologies',
    period: 'Jan 2023 - Sep 2026',
    description:
      'Delivered 15+ production projects for multiple clients, from multi-role SaaS dashboards and admin portals to CMS-driven websites. The main ones were an AI real estate investment platform, a deal and property management platform, and a multi-country e-commerce marketplace. I owned features from database schema to deployment.',
    groups: [
      {
        label: 'AI real estate investment platform',
        bullets: [
          'Built an AI script-generation engine on the Anthropic Claude API that produces 15+ types of outbound, prequalification, and closing scripts, with tone inference and offer routing tailored to each deal.',
          'Implemented structured JSON outputs, Server-Sent Events streaming, and custom prompt enforcement for reliable, real-time AI responses.',
          'Fixed 30 to 60 second AI request timeouts on cloud infrastructure with HTTP header flushing and keepalive writes, ending dropped connections on long-running calls.',
          'Designed 20+ data schemas with Prisma ORM and MongoDB, and built Stripe billing for multi-tier subscriptions and credit-based usage tracking.',
          'Developed core investment logic: After Repair Value (ARV) calculations, dynamic repair estimates, buyer-matching algorithms, and automated deal temperature scoring.',
        ],
      },
      {
        label: 'Deal and property management platform',
        bullets: [
          'Delivered real-time updates with Socket.io, multi-role admin and user dashboards, and versioned REST APIs.',
          'Automated market data refresh with node-cron jobs and transactional email alerts through Nodemailer.',
        ],
      },
      {
        label: 'Multi-country e-commerce marketplace',
        bullets: [
          'Architected the marketplace on the Next.js 14 App Router with NextAuth v5 authentication and Zustand state management.',
          'Refactored legacy components to improve accessibility and visual consistency.',
        ],
      },
    ],
    skills: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Prisma',
      'Stripe',
      'Socket.io',
      'NextAuth',
      'Zustand',
      'Anthropic Claude API',
      'OpenAI API',
      'Strapi',
      'GitHub Actions',
      'Nginx',
    ],
  },
  {
    title: 'Junior Software Engineer',
    company: 'Quantum Skye Technologies',
    period: 'Jan 2022 - Jan 2023',
    description:
      'Joined as a junior software engineer on client web projects, building front-end and back-end features with React, Next.js, Node.js, and MongoDB. Grew into owning full features end to end, which led to the Full Stack Engineer role in January 2023.',
    groups: [],
    skills: ['JavaScript', 'React', 'Next.js', 'Node.js', 'MongoDB'],
  },
]);
