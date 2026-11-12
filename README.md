# Avnee Jain | Portfolio

Personal portfolio for Avnee Jain, an Information Science senior at Michigan State University (Business minor, Class of 2027).

## Sections
- **Home:** intro, quick facts, and links to projects and contact
- **About:** background, experience (expandable cards), toolkit, and interests
- **Projects:** UX, data, AI, web, and design work, including the 2024 March Madness bracket
- **Contact:** email, LinkedIn, GitHub, and a contact form

## Built with
- Semantic HTML5 (`index.html`)
- Hand-written CSS (`styles.css`), no frameworks
- Colors, spacing, and type match the variables and styles in the Figma prototype
- Fonts: Bricolage Grotesque and Figtree (Google Fonts)

## JavaScript features
- **Dark/light mode** (`theme.js`, my own code): the moon/sun button in the nav switches themes. It starts in your system setting, remembers your choice, and swaps the color tokens in `styles.css` for an inverse palette that still passes WCAG AA contrast.
- **Scroll animations** ([ScrollReveal](https://scrollrevealjs.org) 4.0.9 from the unpkg CDN, configured in `reveal.js`): sections fade and slide in as you scroll. Animations are skipped for visitors who prefer reduced motion, and the page stays fully visible if the CDN can't load.
- The two features don't conflict: project cards lift on hover with `top` instead of `transform`, so ScrollReveal's transforms never cancel the hover effect.

Validated with the W3C Markup and CSS validators.
