# University Projects Showcase

A modern portfolio website built with Astro, showcasing university projects with beautiful UI components and smooth animations.

## Tech Stack

- **Astro** - Static site generator
- **React** - Interactive UI components (via shadcn/ui)
- **Vue** - Animated effects and transitions
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI component library

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components (Button, Card, etc.)
│   ├── vue/             # Vue components for animations (TextReveal, FadeIn)
│   └── ProjectCard.tsx  # Project showcase component
├── layouts/
│   └── Layout.astro     # Base layout component
├── lib/
│   └── utils.ts         # Utility functions (cn helper)
├── pages/
│   └── index.astro      # Home page
└── styles/
    └── global.css       # Global styles and theme variables
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Features

- ✨ Modern UI with shadcn/ui components
- 🎨 Smooth animations with Vue components
- 📱 Fully responsive design
- ⚡ Fast performance with Astro
- 🎯 TypeScript for type safety
- 🎭 Customizable theme system

## Adding More Projects

To add more projects, update the `project` object in `src/pages/index.astro` or create a new page for each project.

## License

MIT
