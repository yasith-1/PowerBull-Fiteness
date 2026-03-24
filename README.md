# 🐂 PowerBull Fitness — Unleash Your Inner Beast

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?logo=framer&logoColor=white)](https://www.framer.com/motion/)

> A premium, high-performance fitness landing page designed for elite gyms. Featuring a state-of-the-art membership registration system, buttery-smooth animations, and a cinematic UI that commands attention.

---

## 📸 Cinematic Preview

**PowerBull Fitness** is not just a gym website; it's a digital experience. Built as a high-fidelity React application, it combines aesthetic excellence with functional precision to drive conversions and inspire action.

---

## ✨ Key Features

- 💎 **Premium Membership Flow** — Interactive modal-based registration system collecting comprehensive athlete profiles (experience level, age, location).
- ✉️ **Automated Lead Gen** — Seamless integration with **EmailJS** for instant delivery of registration details to the admin.
- 🎭 **Motion Design** — Sophisticated reveal animations and micro-interactions powered by **Framer Motion**.
- 🌓 **Glassmorphism UI** — A modern, dark-themed aesthetic with blurred backgrounds and high-contrast typography.
- 🏋️ **Full Business Suite** — Dedicated sections for specialized programs, expert trainers, and transparent pricing tiers.
- 📱 **Adaptive Architecture** — Flawless performance across all devices, from desktop workstations to mobile handsets.

---

## 🛠️ The Tech Stack

| Technology | Role |
| :--- | :--- |
| **React 19** | Modern UI Engine |
| **Vite 8** | Next-gen Build System |
| **Tailwind CSS 4** | Utility-First Design Engine |
| **Framer Motion 12** | Production-grade Animations |
| **React Hook Form** | High-performance Form Management |
| **EmailJS** | Serverless SMTP Communication |
| **React Icons** | Premium Iconography (Feather/FontAwesome) |

---

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/pasanhansaka/PowerBull-Fitness.git
cd PowerBull-Fitness
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory and add your EmailJS credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Ignite the Development Server
```bash
npm run dev
```

---

## 📁 Architecture Overview

```text
PowerBull-Fitness/
├── public/               # High-res static assets
├── src/
│   ├── assets/           # Media & Branding assets
│   ├── components/       # Reusable UI Prime components (PlanModal, ContactForm, etc.)
│   ├── hooks/            # Custom React logic
│   ├── pages/            # Core page layouts (Home.jsx)
│   ├── App.jsx           # Application orchestrator
│   └── main.jsx          # React DOM mounting
├── vite.config.js        # Build optimizations
└── package.json          # Dependencies & Scripts
```

---

## 🏗️ Deployment

The project is optimized for high-performance hosting on platforms like GitHub Pages, Vercel, or Netlify.

```bash
# Production Build
npm run build

# Deploy to GitHub Pages
npm run deploy
```

---

**Developed with Passion by [Pasan Hansaka](https://github.com/pasanhansaka)**  
*Elevating digital fitness standards one pixel at a time.*
