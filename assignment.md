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