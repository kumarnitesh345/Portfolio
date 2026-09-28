# Nitesh Kumar — Cyber-Emerald Developer Portfolio

A production-quality developer portfolio website built for **Nitesh Kumar**, Software Engineer & Full Stack Developer with deep expertise in Test Automation and Scalable Systems. Built using **React + Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

Designed with the **Cyber-Emerald & Dark Forest Tech theme** directly modeled from the design specification:
* **Primary Neon Emerald Accent:** `#00df81` / `#05c774`
* **Deep Dark Forest Background:** `#040d09` / `#020906`
* **Surface / Glass Cards:** `#081a14` (rgba(8, 26, 20, 0.78))
* **Borders & Hover Glows:** `rgba(0, 223, 129, 0.2)` transitioning to `#00df81` with soft ambient illumination

---

## 🚀 Key Sections & Architecture

```text
src/
├── components/
│   ├── Navbar.jsx           # "Nitesh." branding with green dot, clean links & "Let's Talk →" pill
│   ├── Hero.jsx             # Left: Headline & actions | Right: Circular glowing portrait & Code Create Grow
│   │                        # Bottom: 3-stat metric banner card (85%+, 10+, 8.59)
│   ├── About.jsx            # Section 01: About Me with CS graduation details & code graphic window
│   ├── Skills.jsx           # Section 02: Skills with rounded-xl tech icon cards & expandable curriculum
│   ├── Projects.jsx         # Section 03: Projects 3-column card grid with live preview styling & metrics
│   ├── Experience.jsx       # Section 04: Work & Internships (Infosys Springboard 5.0, AICTE Next Gen)
│   ├── Education.jsx        # Section 05: Education (Haldia HIT), Leadership (NEEDS), & Honors (SIH)
│   ├── Contact.jsx          # Section 06: Contact Me with circular social buttons, "Get In Touch →", copy pills & form
│   └── Footer.jsx           # Clean footer with back-to-top button
│
├── data/
│   └── resumeData.js        # Single source of truth containing Nitesh's exact resume information
│
├── App.jsx                  # Main orchestrator with accessible skip links
├── main.jsx                 # React root mount
└── index.css                # Cyber-emerald styles, dot matrix, and custom scrollbar

public/
├── profile.jpg              # Your portrait image (displayed in the glowing circular hero frame)
└── resume.pdf               # Your downloadable resume PDF
```

---

## 🛠️ Features Implemented

1. **Exact Design Match:**
   * **Hero Layout:** Split layout with the developer's name in `Nitesh <span className="text-[#00df81]">Kumar</span>`, "● Hi, I'm" indicator, and a glowing circular portrait surrounded by concentric orbital rings and matrix dot patterns with `Code • Create • Grow →` cursive badge.
   * **Stats Banner:** 3-metric banner card right beneath the hero (`85%+ Regression Reduced`, `10+ Projects Delivered`, `8.59 B.Tech CGPA / SIH Winner`).
   * **Section 01: About Me:** Haldia Institute of Technology background with code graphic card.
   * **Section 02: Skills:** Rounded-xl tech cards with logos (HTML5, CSS3, JS, React, Python, Java, SQL, Git, Docker, VS Code, Selenium, Jenkins, MongoDB, Node.js).
   * **Section 03: Projects:** 3-column cards with mockup window headers, metrics, and repo links.
   * **Section 04: Work & Internships:** Full timeline of Infosys Springboard 5.0 (Autonomous Driving CNN) and AICTE Next Gen (MERN Stack).
   * **Section 05: Education & Honors:** Haldia HIT (8.59 CGPA), DK Cresi, St. Paul's, NEEDS Leadership, SIH Hackathon & Chess.
   * **Section 06: Contact Me:** "Let's build something amazing together!", circular social buttons, "Get In Touch →" pill button, direct email/phone copy pills, and interactive message form.

2. **100% Genuine Resume Information:**
   * All data strictly extracted from Nitesh Kumar's verified resume PDF without placeholder or hallucinated claims.
   * Contact details intact: Phone `+91 9334129956`, Email `nk1711336@gmail.com`, LinkedIn, and GitHub.

---

## 💻 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
The application will run on `http://localhost:5173/`.

### 3. Production Build
```bash
npm run build
```

---

## 📄 License
MIT © 2026 Nitesh Kumar.
