# Adding a project

Add one object to the array in `content/projects.ts`. The section appears automatically once the list is not empty.

```ts
export const projects = z.array(projectSchema).parse([
  {
    slug: 'short-lowercase-id',
    title: 'Generic project name, for example: AI real estate investment platform',
    summary: 'One or two sentences on what the product does and who it is for.',
    role: 'Software engineer',
    period: 'Jan 2022 - Sep 2026', // optional
    stack: ['Next.js', 'Node.js', 'MongoDB'],
    problem: 'What the business or users needed, in plain language.',
    highlights: [
      'A concrete thing you built or solved, with the technique used.',
      'Another one. Add numbers only if they are real and you can defend them.',
    ],
    links: [], // add { label, href } only for public, owned links
  },
]);
```

Then run `npm run check`.

## Confidentiality checklist (before publishing any project)

- [ ] I checked my contract or NDA, or have written permission, to describe this work publicly.
- [ ] No company, client or customer names. Use a generic name for the product.
- [ ] No source code, prompts, algorithms, pricing logic or database schemas.
- [ ] No screenshots or recordings containing real data, branding or internal tools.
- [ ] No API keys, URLs of staging or admin systems, or internal hostnames.
- [ ] Every claim is true and I can explain it in an interview.
- [ ] Numbers are real. If I do not have one, I describe the outcome without a number.

## Writing tips

- Lead with the problem, then the decision you made and why.
- Prefer one hard problem explained well (what broke, how you found it, what you changed) over a list of technologies.
- Keep highlights to a sentence or two each.
