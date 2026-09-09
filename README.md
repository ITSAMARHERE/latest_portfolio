# Amar Pal - Portfolio

A dark-first, editorial, and highly technical software engineering and ML engineering portfolio website.

## Technical Stack

- **Framework**: TanStack Start (React, Vite, Nitro server)
- **Styling**: Tailwind CSS
- **Interactions**: Motion (Framer Motion)
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

To run the development server locally:

```sh
npm install
npm run dev
```

The dev server will be available at `http://localhost:8080/`.

## Architecture & Project Structure

- `src/components/portfolio/` - Core presentation layout sections:
  - `Hero.tsx` - Title and technical coordinate backdrop grid
  - `About.tsx` - Biography, Timeline, and working principles
  - `Experience.tsx` - Detailed history of previous work terms
  - `Featured.tsx` - Spotlight architectural details of core systems
  - `Projects.tsx` - Summary cards for shipped services
  - `Skills.tsx` - Detailed view of technical languages, ML systems, and databases
  - `Lab.tsx` - Interactive experimentation logs and open-source packages
  - `Contact.tsx` - Large email hooks and connections
  - `Cursor.tsx` - Subtle contextual custom cursor
- `src/data/portfolio.ts` - Single source of truth for portfolio profile details, timelines, experiences, projects, skills, labs, and contact links.
- `src/routes/` - Router file-based pages
- `src/styles.css` - Custom design system themes (Neutral Oklch colors, and emerald accents)
