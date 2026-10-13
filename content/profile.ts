import { profileSchema } from './schema';

// Facts here come from the resume. Keep them identical to it.
export const profile = profileSchema.parse({
  name: 'Muhammad Ahmed Shaikh',
  role: 'Full-Stack Engineer',
  headline: 'I build full-stack systems that make real work easier.',
  intro:
    'I’m a Full-Stack Engineer with 4+ years of experience delivering production-grade platforms across real estate technology, property management, and ecommerce. I specialize in Next.js, Node.js, MongoDB, and TypeScript, and I’ve built hands-on experience integrating LLMs like Anthropic Claude into real-world commercial products.',
  location: 'Karachi, Pakistan',
  email: 'asofficial4k@gmail.com',
  linkedin: 'https://www.linkedin.com/in/devshaikh',
  github: 'https://github.com/DevShaikh',
  resume: '/Ahmed_Shaikh_Resume.pdf',
});
