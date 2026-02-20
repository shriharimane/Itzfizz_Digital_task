tzFizz Ditzfizz_digital – Hero Scroll Animation Task
📌 Project Overview

This project recreates a scroll-based hero section animation inspired by the reference demo below.
The goal of this assignment is to demonstrate a strong understanding of frontend animations, scroll-driven interactions, and smooth UI behavior using modern web technologies.

🔗 Live Project:
https://itzfizz-digital-task.vercel.app/

🔗 Reference Animation:
https://paraschaturvedi.github.io/car-scroll-animation

🎯 Objective

Build a premium, smooth, and performant hero section animation

Implement scroll-linked motion instead of time-based autoplay

Maintain clean animation logic and responsive UI behavior

Use vanilla animation principles enhanced with GSAP

🧩 Features & Functional Requirements
1️⃣ Hero Section Layout

Occupies the first viewport (above the fold)

Displays a letter-spaced headline:

W E L C O M E   I T Z   F I Z Z

Includes impact metrics/statistics (percentages with short descriptions)

Clean and minimal design inspired by premium landing pages

2️⃣ Initial Load Animation

On page load:

Headline animates in smoothly

Fade-in with slight vertical movement

Optional stagger effect for better visual rhythm

Statistics animate one by one with subtle delay

Motion feels smooth, elegant, and non-abrupt

Implemented using GSAP intro animations.

3️⃣ Scroll-Based Animation (Core Feature)

Hero section responds dynamically to user scroll

Main visual element:

Moves smoothly based on scroll progress

Animation is scroll-driven, not time-based

Motion uses interpolation & easing for natural feel

Scroll progress is mapped to transform values

This ensures:

High user engagement

Precise animation control

Premium UI experience

4️⃣ Motion & Performance Guidelines

Uses transform properties:

translate

scale

rotate

Avoids layout thrashing and unnecessary reflows

Optimized scroll listeners using GSAP utilities

Ensures consistent performance across devices

🛠 Tech Stack (Mandatory)

Next.js / React.js

Tailwind CSS

HTML5

CSS3

JavaScript (ES6+)

GSAP (GreenSock Animation Platform)

📂 Project Structure (Simplified)
/components
  └── HeroSection.jsx
/pages
  └── index.js
/styles
  └── globals.css
/public
  └── assets
🚀 How to Run Locally
# Clone the repository
git clone https://github.com/your-username/itzfizz-digital-task.git

# Navigate into project
cd itzfizz-digital-task

# Install dependencies
npm install

# Start development server
npm run dev

App will run on:
http://localhost:3000

🧠 Key Learnings & Concepts Demonstrated

Scroll-linked animations using GSAP

Smooth easing & interpolation

Performance-first animation practices

Clean UI motion design

React + GSAP integration

Tailwind-based responsive layout

✅ Evaluation Criteria Covered

✔ Smooth animation quality
✔ Scroll-based interaction logic
✔ Clean and readable code
✔ Performance-friendly implementation
✔ Premium UI feel

📌 Conclusion

This project focuses on motion quality over complexity, delivering a refined hero animation that feels modern, smooth, and interactive. It reflects real-world frontend animation practices used in high-quality landing pages.
