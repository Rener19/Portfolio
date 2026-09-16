## Design Context

### Users
Recruiters, hiring managers, and technical leads evaluating candidates for Junior Software Engineer and AI Engineer roles. They are looking for clear evidence of capability, clean code, and solid problem-solving without digging through fluff.

### Brand Personality
Direct, technical, plainspoken, and honest. 
Zero buzzwords. The tone should convey a developer who builds lean, highly performant architecture and iterates continuously.

### Aesthetic Direction
Clinical, functional, and developer-first. 
Prioritizes a sleek, premium dark-mode aesthetic with high contrast, minimal layouts, and smooth micro-interactions. The interface must act as a minimal, intuitive layer highlighting the engineering behind it.

### Design Principles
1. **Content over Decoration**: Functionality dictates form. Eliminate visual bloat and let the projects and technical skills stand out.
2. **Ambient Performance**: Utilize seamless, continuous, smooth animations (like infinite CSS marquees) to make the page feel alive and hardware-accelerated without distracting the user.
3. **Responsive Rigor**: Perfectly adaptive across all screen sizes. Data must remain easily digestible, using techniques like mobile vertical cards in place of horizontal scrolling tables.
4. **Adaptive Theming**: Natively respect the user's system preferences with a heavily polished, primary dark-mode experience.

## Chosen Technical Architecture
- **Framework & Tooling**: **Vite + React** (Option 2 from Week 04 Three Roads)
- **Styling**: Modern Vanilla CSS / CSS Modules with Design Tokens (CSS Custom Properties)
- **Hosting**: Cloudflare Pages / Vercel ($0 Free Tier, automated Git CI/CD)
- **Backend Requirement**: None / "Not yet" (pure client-side SPA, `mailto:` native contact trigger, static deployment)
- **Data Architecture**: Decoupled, typed data files for case studies, toolkit credentials, and links (e.g. `data/projects.js` or `.ts`) rendering through reusable React components (`<ProjectCard />`, `<SkillGrid />`, `<ThemeToggle />`)
- **Key Deliverable Reference**: [rationale.md](file:///c:/Users/raini/Desktop/Portfolio/rationale.md)

