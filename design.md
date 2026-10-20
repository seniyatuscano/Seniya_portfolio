# Design System — Seniya Tuscano Portfolio

A locked design system for Seniya Tuscano's Portfolio (Software, Cloud &amp; AI Engineer). Every component and view reads this system. Adheres to Hallmark anti-AI-slop guidelines and modern software engineering aesthetic.

## 1. Genre
**Atmospheric / Modern-Minimal** (Deep engineering cockpit, high-precision telemetry, tactile interactions).

## 2. Macrostructure Family & Section Sequence
- **Section Flow**:
  1. **Hero**: Interactive studio gaze stage with software & AI headline, open opportunities status, direct LinkedIn & email.
  2. **Experience**: Career & Engineering Track (Saayam for All DevSecOps, HBS 2026 FIFA World Cup, Media Stream AI, Spider Software).
  3. **Skills & Technology Matrix**: Interactive category filter & domain pillars.
  4. **Featured Projects**: Interactive carousel for Kestrel AI, Multi-Tenant RAG, Live Stream Engine, Tweet Analysis.
  5. **Engineering Profile**: Background & philosophy bento grid with academic credentials.
  6. **Academic Foundation**: MS in Information Systems (UT Arlington) & BE in Computer Science.
  7. **Leadership & Milestones**: Publications, NSS Volunteering, Alumni Committee.
  8. **Direct Communication**: Primary personal email copy & send triggers, DFW location.
- **Nav Archetype**: **N5 Floating Pill** (Obsidian/glassless pill with active section tracking, status indicator, and quick actions).
- **Footer Archetype**: **Ft5 Statement Colophon** (Software & AI colophon, career status, location, direct social links).

## 3. Theme & Color Tokens (OKLCH)
A curated dark palette that replaces generic `#000000` / `#ffffff` with rich obsidian depth and electric cyan / cyber violet precision accents:

```css
:root {
  /* Surfaces */
  --color-paper:       oklch(0.13 0.012 250);   /* Canvas deep obsidian #0d1117 */
  --color-paper-2:     oklch(0.17 0.015 250);   /* Layered cards #151b23 */
  --color-paper-3:     oklch(0.21 0.020 250);   /* Hover / interactive items #1d2430 */
  --color-paper-glass: rgba(21, 27, 35, 0.85); /* Backing with backdrop-filter */

  /* Inks */
  --color-ink:         oklch(0.96 0.005 250);   /* Crisp high-contrast text #f0f4f8 */
  --color-ink-2:       oklch(0.72 0.015 250);   /* Subtitle & body secondary #94a3b8 */
  --color-ink-muted:   oklch(0.50 0.015 250);   /* Tertiary, footnotes, line numbers */

  /* Borders & Rules */
  --color-rule:        oklch(0.24 0.015 250);   /* Hairline container borders */
  --color-rule-active: oklch(0.40 0.030 250);   /* Hovered/active card borders */

  /* Precision Accents */
  --color-accent:      oklch(0.72 0.17 195);    /* Electric Cyan / Telemetry #00d2ff */
  --color-accent-ink:  oklch(0.12 0.02 250);    /* Text placed over accent */
  --color-accent-2:    oklch(0.68 0.20 295);    /* Cyber Violet secondary #a855f7 */
  --color-accent-dim:  rgba(0, 210, 255, 0.12); /* Subtle glow & active highlights */
  --color-success:     oklch(0.72 0.18 145);    /* System status green #10b981 */
  --color-focus:       oklch(0.72 0.17 195);

  /* Typography */
  --font-display: 'Space Grotesk', -apple-system, sans-serif;
  --font-body:    'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono:    'JetBrains Mono', 'Fira Code', monospace;

  /* Spacing Scale (4pt) */
  --space-3xs: 0.25rem;  /* 4px */
  --space-2xs: 0.5rem;   /* 8px */
  --space-xs:  0.75rem;  /* 12px */
  --space-sm:  1rem;     /* 16px */
  --space-md:  1.5rem;   /* 24px */
  --space-lg:  2rem;     /* 32px */
  --space-xl:  3rem;     /* 48px */
  --space-2xl: 4.5rem;   /* 72px */
  --space-3xl: 6.5rem;   /* 104px */

  /* Type Scale */
  --text-xs:   0.75rem;
  --text-sm:   0.875rem;
  --text-base: 1rem;
  --text-md:   1.125rem;
  --text-lg:   1.375rem;
  --text-xl:   1.75rem;
  --text-2xl:  2.25rem;
  --text-3xl:  clamp(2.5rem, 6vw, 4rem);

  /* Motion & Radii */
  --ease-out:    cubic-bezier(0.16, 1, 0.3, 1);
  --dur-short:   180ms;
  --dur-med:     320ms;
  --radius-sm:   6px;
  --radius-card: 14px;
  --radius-pill: 9999px;
}
```

## 4. Typography Rules
- **No italic headers**: Headings are always `font-style: normal`.
- **Heading scale**: Controlled fluid clamp for hero headlines with `line-height: 1.1` and `letter-spacing: -0.02em`.
- **Monospace tabular figures**: `font-variant-numeric: tabular-nums` on all metrics, timestamps, telemetry stats, and tags.

## 5. Motion, Parallax & 3D Interactive Discipline
- **Interactive Particle / Telemetry Mesh**: Lightweight, silky HTML5 canvas in the hero reacting gently to mouse movement (smooth interpolation, zero CPU hogging, no gaudy bouncing spheres).
- **Parallax & Slider Interactions**:
  - Parallax coordinate shifts on background grid and technical cards.
  - Interactive project slider / switcher with smooth horizontal translation and domain filter tabs.
  - Interactive 3D tilt card effect on featured project inspection (subtle perspective tilt based on cursor position `rotateX` / `rotateY` <= 6deg).
- **Reduced Motion Support**: If `prefers-reduced-motion: reduce` is detected, all 3D tilt and continuous parallax motion are immediately silenced with instant opacity reveals.

## 6. Microinteractions & Component Stance
- **Command Menu (`⌘K`)**: Power-user modal for quick navigation, resume download, contact copying, and theme telemetry.
- **Interactive Terminal**: Real interactive shell with commands (`help`, `skills`, `projects`, `experience`, `contact`, `clear`).
- **Interactive Skill Matrix**: Domain tabs (AI/ML, Cloud & Distributed Systems, Backend & APIs, Frontend) with clean progress indicators and tech stack tags.
- **Experience Timeline**: Collapsible technical details, architecture decisions, and quantifiable metrics.

## 7. Hallmark Pre-Emit Score Target
- Philosophy: 5/5
- Hierarchy: 5/5
- Execution: 5/5
- Specificity: 5/5
- Restraint: 5/5 (Clean, zero clutter, high signal-to-noise ratio)
- Variety: 5/5
