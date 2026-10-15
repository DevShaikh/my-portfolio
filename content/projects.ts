import { z } from 'zod';
import { moreClientWorkSchema, projectSchema } from './schema';

export const projects = z.array(projectSchema).parse([
  {
    slug: 'ai-real-estate-investment-platform',
    title: 'AI Real Estate Investment Platform',
    summary:
      'A production SaaS platform for real-estate investors that combines deal analysis, AI-generated scripts, and user workflows in one operating system.',
    role: 'Full Stack Engineer',
    stack: ['Next.js', 'Node.js', 'Prisma', 'MongoDB', 'Anthropic Claude API', 'Stripe'],
    problem:
      'Investment teams were relying on repetitive research and fragmented processes, which slowed deal evaluation and caused inconsistent follow-up quality.',
    highlights: [
      'Built a script-generation engine that used Anthropic Claude for 15+ script types with structured JSON outputs and tone-based personalization.',
      'Implemented property analysis workflows including ARV, repair estimation, rental analysis, and AI-generated narratives to speed decision-making.',
      'Added payment flows, subscription logic, credit tracking, and deployment-ready infrastructure for an operational product.',
    ],
    links: [],
  },
  {
    slug: 'real-estate-deal-management-platform',
    title: 'Real Estate Deal Management Platform',
    summary:
      'A deal and workflow platform for property teams to manage offers, buyer matching, activity, and updates in a single system.',
    role: 'Full Stack Engineer',
    stack: ['Next.js', 'Node.js', 'Prisma', 'Socket.io', 'Stripe', 'Recharts'],
    problem:
      'Teams were juggling scattered deal activity across spreadsheets and disconnected communications, creating blind spots and slow decisions.',
    highlights: [
      'Built dashboards, offer management, and buyer matching logic to support faster decision-making across property workflows.',
      'Delivered real-time updates and notifications through Socket.io so stakeholders could see critical changes immediately.',
      'Implemented Google OAuth, JWT auth, role-based access, and Stripe subscriptions for a production-ready internal SaaS experience.',
    ],
    links: [],
  },
  {
    slug: 'property-management-saas-platform',
    title: 'Property Management SaaS Platform',
    summary:
      'A multi-role property operations platform for member management, reporting, dashboards, and admin workflows across property operations.',
    role: 'Full Stack Engineer',
    stack: ['Next.js', 'Express.js', 'Prisma', 'MongoDB', 'JWT', 'Tailwind CSS'],
    problem:
      'Property teams needed a clearer operational system for member workflows, role-based access, and day-to-day administration without dependency on fragmented tools.',
    highlights: [
      'Designed separate dashboards for admins, members, and marketing flows with clear access boundaries and reporting views.',
      'Created secure API layers with validation and middleware for consistent, scalable access to core operations.',
      'Improved internal workflow visibility and reduced process friction through better role-design and structured data models.',
    ],
    links: [],
  },
  {
    slug: 'ecommerce-marketplace-platform',
    title: 'E-commerce Marketplace Platform',
    summary:
      'A marketplace product with dynamic listing flows, real-time interactions, and a smooth buying experience across multi-country commerce needs.',
    role: 'Full Stack Engineer',
    stack: ['Next.js 14', 'TypeScript', 'Socket.io', 'NextAuth', 'Tailwind CSS', 'Zustand'],
    problem:
      'The product needed a more scalable and consistent commerce experience across listings, real-time engagement, and cross-country user flows.',
    highlights: [
      'Built dynamic listing and image gallery experiences with modern UX patterns and state management for a smoother marketplace journey.',
      'Added real-time features and authentication flows to support more engaging interactions across the platform.',
      'Delivered a cleaner, more responsive product experience with better frontend structure and available product workflows.',
    ],
    links: [],
  },
]);

export const moreClientWorkTitle = 'More client work';
export const moreClientWorkNote =
  'Part of 15+ client projects. Details are generalized for confidentiality.';

export const moreClientWork = z.array(moreClientWorkSchema).parse([
  {
    title: 'User and admin dashboards',
    description:
      'Multi-role dashboards for client SaaS products: separate user and admin experiences on top of a backend API.',
    tags: ['React', 'Node.js', 'REST APIs'],
  },
  {
    title: 'Admin portals and CMS tooling',
    description:
      'Admin portals and content management screens that let clients manage users, content and operations themselves.',
    tags: ['Admin panels', 'CMS', 'Role-based access'],
  },
  {
    title: 'Backend APIs and integrations',
    description:
      'REST APIs and third-party integrations behind web dashboards, landing pages and client products.',
    tags: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'CMS-driven websites',
    description:
      'Content websites backed by a Strapi headless CMS so clients can update content without a developer.',
    tags: ['Strapi', 'Headless CMS', 'React'],
  },
  {
    title: 'Marketing and landing pages',
    description: 'Fast, responsive landing pages and marketing sites for client products.',
    tags: ['Landing pages', 'Responsive UI', 'Tailwind CSS'],
  },
  {
    title: 'Company websites',
    description: 'Company websites with a content management system, delivered for clients.',
    tags: ['Websites', 'CMS', 'Responsive UI'],
  },
]);
