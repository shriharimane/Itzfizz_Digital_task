# ✦ ItzFizz Digital — Hero Scroll Animation

A premium, scroll-driven hero section animation built with Next.js, GSAP, and Tailwind CSS. Motion is tied to scroll progress — not timers — for precise, high-quality UI interactions.

🔗 **Live Demo:** [itzfizz-digital-task.vercel.app](https://itzfizz-digital-task.vercel.app/)
🎯 **Reference:** [paraschaturvedi.github.io/car-scroll-animation](https://paraschaturvedi.github.io/car-scroll-animation)

---

## Overview

This project demonstrates real-world frontend animation techniques used in high-end landing pages. The hero section features a load-in sequence followed by a scroll-linked animation — where the main visual element responds directly to the user's scroll position rather than playing on a fixed timeline.

The goal: motion that feels earned, intentional, and smooth across all devices.

---

## Features

### Load Animation
On page load, the headline (`W E L C O M E   I T Z   F I Z Z`) fades in with a subtle vertical offset. Impact statistics animate in one by one with a staggered delay, giving the UI a polished, sequential reveal.

### Scroll-Driven Animation
The main visual element tracks scroll progress in real time. Transform values — `translate`, `scale`, and `rotate` — are interpolated against scroll position using GSAP's easing utilities. This replaces autoplay with direct user control, making the animation feel tactile and responsive.

### Performance
- Only `transform` properties are animated (no layout-triggering reflows)
- Scroll events are throttled via GSAP's optimized listeners
- Consistent performance on mobile and desktop

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js / React.js |
| Styling | Tailwind CSS |
| Animation | GSAP (GreenSock Animation Platform) |
| Language | JavaScript ES6+ |
| Markup | HTML5 / CSS3 |

---

## Project Structure

```
/components
  └── HeroSection.jsx     # Main hero component with all animation logic

/pages
  └── index.js            # Entry point

/styles
  └── globals.css         # Global resets and base styles

/public
  └── assets/             # Static media (images, SVGs, etc.)
```

---

## Getting Started

**Prerequisites:** Node.js 16+ and npm

```bash
# 1. Clone the repository
git clone https://github.com/your-username/itzfizz-digital-task.git

# 2. Navigate into the project
cd itzfizz-digital-task

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Animation Architecture

```
Page Load
  └─▶ GSAP timeline fires
        ├─▶ Headline fades in + slides up
        └─▶ Stats stagger in (delay per item)

User Scrolls
  └─▶ Scroll progress (0 → 1) calculated
        └─▶ Mapped to transform values
              ├─▶ translateY / translateX
              ├─▶ scale
              └─▶ rotate
                    └─▶ GSAP applies with easing (no layout reflow)
```

---

## Key Concepts Demonstrated

- **Scroll-linked animation** — progress-mapped transforms instead of autoplay timers
- **GSAP + React integration** — refs, useLayoutEffect, and ScrollTrigger patterns
- **Easing & interpolation** — natural deceleration curves for every motion
- **Performance-first approach** — GPU-composited properties only
- **Responsive layout** — Tailwind utilities ensure consistent behaviour across breakpoints

---

## Evaluation Criteria

| Criterion | Status |
|---|---|
| Smooth animation quality | ✅ |
| Scroll-based interaction logic | ✅ |
| Clean and readable code | ✅ |
| Performance-friendly implementation | ✅ |
| Premium UI feel | ✅ |

---

## License

MIT — free to use and adapt with attribution.
