# Architectural Rationale & Tech Stack Decision
**Course Module:** Week 04 — Three Roads ([aifluency.flyrank.ai/week-04.html#three-roads](https://aifluency.flyrank.ai/week-04.html#three-roads))  
**Author:** 4th-Year Computer Science Student (ISU) | Frontend AI Engineering Intern (`flyrank.ai`)  
**Target:** Single-Page Portfolio Funnel for Junior Software Engineer & AI Engineer Roles  

---

## 1. Constraints & Ground Truths

Before choosing a stack, every architectural decision is grounded by four explicit constraints:

1. **Cost Constraint ($0 Free Only):** Zero budget for hosting, build systems, domain renewals, or databases. The entire stack must live permanently on reliable, generous, $0 free tiers.
2. **Honest Skill Level:** Strong frontend foundation in JavaScript and responsive design (FreeCodeCamp Certified), and Python/Algorithmic logic (Harvard CS50P Certified). Everyday working familiarity with **React**, JSX component composition, modern frontend build tools, React Native, and Supabase SQL (from *PomoDuo* and *OmniStudy*), plus Git CI/CD workflows (GitHub Foundations Certified). Not an enterprise DevOps engineer or Next.js server-runtime specialist.
3. **Portfolio Scope (Sitemap & Content Map):** A tight, single-page vertical funnel:
   - **Section 1: Hero / Landing:** The one-line claim (*"I build interactive frontend applications powered by custom AI and real-time data pipelines"*), credential subhead, and smooth-scroll CTA.
   - **Section 2: Work / Case Studies:** 3 high-impact proof cards (*OmniStudy*, *PomoDuo*, *flyrank.ai*) following *Problem → Tech Stack → Contribution → Proof Links*.
   - **Section 3: About & ATS Toolkit:** A two-paragraph engineering narrative paired with a scannable, credential-backed skill matrix.
   - **Section 4: Contact & Footer:** High-contrast `mailto:` trigger with pre-filled engineering manager subject lines, secondary channels (GitHub, LinkedIn, Resume PDF), and a minimal developer footer.
4. **Display Needs:** Visual preview screenshots, interactive live demo links, repository source links, and clear technical write-ups.
5. **Backend Requirement (Dynamic vs. Static):** **Not yet.** The primary call to action is a native `mailto:` link that opens the visitor's mail client directly with a pre-filled subject line. The 3 case studies are curated by hand. There are no client accounts, user databases, comment streams, or dynamic server rendering requirements. Introducing a backend database or server runtime here is unnecessary complexity.

---

## 2. The Three Roads: Simplest to Most Powerful

```
[Option 1: Simplest]           [Option 2: Chosen Sweet Spot]      [Option 3: Most Powerful]
HTML5 + CSS3 + Vanilla JS   -->   Vite + React (SPA)          -->    Next.js (App Router) + MDX
Hosted on GitHub Pages            Hosted on Cloudflare / Vercel      Hosted on Vercel
```

---

### Option 1 (Simplest): Semantic HTML5 + Modern CSS + Vanilla JavaScript
* **How to build:** A single hand-crafted `index.html` file using semantic tags, CSS custom properties for theming, Flexbox/Grid layouts, and a minimal `main.js` file for theme toggling and scroll spies.
* **Where to host (free):** **GitHub Pages** (or Cloudflare Pages). Direct git push to `main` deploys with zero configuration.
* **Does it need a backend?** **No.** Purely static client delivery.
* **The Real Trade-off:**
  - *Upside:* Zero build step, zero dependencies, zero `node_modules`, 100/100 Lighthouse performance, and zero dependency maintenance over time.
  - *Downside:* Lack of component abstraction. All project cards and skill badges must be copy-pasted directly into the single HTML file. Modifying a card layout requires editing multiple blocks of raw HTML. Furthermore, it misses an opportunity to show immediate React fluency in the portfolio's own repository when applying for React/frontend-heavy roles.

---

### Option 2 (The Chosen Sweet Spot): Vite + React + Modern CSS / CSS Modules
* **How to build:** A lightweight single-page application scaffolded with Vite and React. The 3 case studies and toolkit credentials are typed data structures (e.g., `projects.ts` or `projects.json`) rendered cleanly via modular components (`<ProjectCard />`, `<SkillBadge />`, `<ThemeToggle />`). Styling uses clean CSS custom properties or scoped CSS modules.
* **Where to host (free):** **Cloudflare Pages** or **Vercel** (both offer automated Git pushes, fast edge builds, and generous $0 bandwidth).
* **Does it need a backend?** **No.** Vite bundles the React code into optimized, static HTML/JS/CSS assets (`dist/`) that run purely client-side.
* **The Real Trade-off:**
  - *Upside:* High component reusability and clean data-view separation. Adding a new case study or updating a project's metrics takes seconds by modifying a single data file. Critically, the portfolio repo itself directly demonstrates practical React proficiency to hiring managers.
  - *Downside:* Requires a local build pipeline (`npm run build`), a `node_modules` directory, and ships a small client-side bundle (~45KB gzip) compared to raw HTML.

---

### Option 3 (Most Powerful): Next.js (App Router) + React + Tailwind CSS + MDX
* **How to build:** A full-stack web application utilizing React Server Components, Tailwind CSS for utility styling, and `@next/mdx` to author case studies in Markdown with embedded live interactive React widgets.
* **Where to host (free):** **Vercel** Hobby Tier.
* **Does it need a backend?** **Not yet, but architecturally present.** Next.js has serverless API routes and server action primitives baked in, even if left unused.
* **The Real Trade-off:**
  - *Upside:* Industrial-strength content management. Case studies can be written as long-form Markdown articles with rich interactive components embedded directly in the text. Adding dynamic server features or automated contact endpoints later is seamless.
  - *Downside:* Extreme complexity penalty. The Next.js App Router introduces complex server/client boundaries, frequent major version updates with breaking changes, and high mental overhead. For a 4-section single-page portfolio, 90% of the framework is dead weight that diverts focus away from writing compelling case study proof.

---

## 3. Pressure-Testing the Front-Runner (Option 2: Vite + React)

### 1. What breaks if I pick the simplest (Option 1)?
* **Architectural scalability and developer experience break.** In raw HTML, the content and presentation are tightly coupled. If I want to change the card badge layout or tweak how proof links display across all case studies, I have to manually edit 3–4 different sections in raw HTML. 
* More importantly, for a candidate positioning themselves as an *interactive frontend developer bridging AI and UI*, having a portfolio repository built in plain HTML misses the chance to prove clean React architecture (custom hooks, component prop contracts, clean state management) right in the site's own source code.

### 2. What do I maintain if I pick the most powerful (Option 3)?
* **Excessive framework overhead and dependency churn.** With Next.js and MDX, I am maintaining server component boundaries (`use client` directives), Tailwind configuration files, PostCSS setups, and complex bundler configurations. When Next.js releases major updates, unmaintained projects frequently suffer from build failures or breaking routing conventions. I would be spending time debugging full-stack framework tooling instead of building actual AI applications.

### 3. Can I finish in two weeks?
* **Yes, comfortably (within 5–7 days).** Because I already work daily with React and modern JavaScript, scaffolding a clean Vite project takes less than an afternoon. Building the 4 sections as modular components (`Hero`, `Work`, `About`, `Contact`) with typed project data takes 2–3 days. That leaves over a full week to polish responsive micro-interactions, dark/light theme transitions, accessibility, and high-impact case study copy.

### 4. Does it show my work the way it needs to be shown?
* **Yes, exceptionally well.** Vite + React allows me to:
  - Isolate each case study into a structured `<ProjectCard />` that cleanly renders proof links (`[Live Demo]`, `[GitHub Repo]`), tech stack badges, and screenshots.
  - Maintain an organized `data/projects.js` file where I can update metrics and copy without touching layout code.
  - Implement fluid micro-interactions (e.g., active section scroll-spy, theme toggles, accessible keyboard navigation) using clean React hooks.
  - Give engineering managers an immediate look at a clean, professional React codebase when they click on the portfolio's own repository link.

---

## 4. The Decision & Written Rationale

> ### The Chosen Stack: Option 2 — Vite + React + Modern CSS
> * **Hosting:** Cloudflare Pages or Vercel (100% free, automated Git CI/CD, fast global edge CDN).
> * **Backend:** None ("Not yet" — native `mailto:` link with pre-filled subject line; static SPA output).
>
> ### Why I Rejected the Other Two:
> 1. **Rejected Option 1 (Vanilla HTML/CSS/JS):** While Vanilla HTML is fast and has zero build setup, it forces manual markup duplication for every project card and skill badge. As someone targeting Junior Frontend and AI Engineer roles, I want the portfolio's own source code to be a living demonstration of my React component architecture, clean state handling, and data-driven UI design.
> 2. **Rejected Option 3 (Next.js + MDX):** Next.js App Router is built for large, multi-route, server-rendered web apps. For a single-page vertical funnel with 3 case studies, Next.js introduces serverless runtimes, routing overhead, and breaking API changes for no tangible benefit. It adds significant maintenance friction without improving the speed or readability of the portfolio for recruiters.
>
> ### Can I Maintain This?
> **Yes, easily and sustainably.**  
> Vite is lightweight, battle-tested, and uses standard ES modules with almost zero configuration drift. The data layer is decoupled: all my case studies and credentials live in a single structured JSON/JS file. If I want to add a 4th case study, update a live demo URL, or add a newly earned certification, I update one data object, run `git push`, and Cloudflare Pages/Vercel builds and deploys the update automatically within 20 seconds. I don't have to manage complex server environments or worry about breaking framework changes.
>
> ### Does It Show My Work Well?
> **Yes, it reinforces my claim on two fronts.**  
> My one-line claim is: *"I build interactive frontend applications powered by custom AI and real-time data pipelines."*  
> Vite + React backs this claim up directly:
> 1. **The Portfolio Itself:** When hiring managers inspect the repo, they find clean React code, sensible component decomposition, accessible markup, and smooth client-side interactions.
> 2. **The Featured Case Studies:** The component structure cleanly showcases the engineering depth of my work:
>    - **OmniStudy:** Proves I can architect asynchronous AI parsing pipelines and dynamic interfaces.
>    - **PomoDuo:** Proves I handle real-time database synchronization, multi-user state, and defensive error handling with React Native and Supabase.
>    - **flyrank.ai Internship:** Proves I build production-grade frontend interfaces connected to streaming AI backends.
>
> Choosing Vite + React strikes the exact sweet spot: it demonstrates real-world frontend engineering without falling into the trap of over-engineering a static site.

---

### Pass / Revise Verification Checklist
- [x] **Three genuine options with real trade-offs considered** (Vanilla HTML vs. Vite + React vs. Next.js).
- [x] **Chosen stack is 100% free**, matched to real needs, and displays screenshots, repos, and case studies properly.
- [x] **Rationale is in your own words** and explicitly includes *"can I maintain this"* and *"does it show my work well."*
- [x] **Backend question answered honestly** (*"not yet"*).
