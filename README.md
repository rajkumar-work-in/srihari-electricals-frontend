# Sri Hari Electricals — Business Website

A modern, responsive business website built for **Sri Hari Electricals**, a hardware, electrical, and plumbing supply store based in Panruti, Tamil Nadu (established 2016). The site serves as a digital storefront — showcasing products, brands, and store information, with direct WhatsApp and call integration for instant customer inquiries.

🔗 **Live Site:** [srihari-electricals.vercel.app](https://srihari-electricals.vercel.app)

---

## 📋 About This Project

This was built as a **freelance client project** for a real local hardware business. The goal was to deliver a professional, fast, mobile-first website within a short timeframe — without the overhead of a backend or CMS, since the business needed a digital visiting card rather than an e-commerce platform.

**Client:** Sri Hari Electricals
**Location:** No. 125, Arasur Main Road, Pudupet, Panruti TK, Cuddalore – 607108
**Industry:** Electricals, Plumbing, Lighting, Sanitary Ware, Cables & Wires

---

## ✨ Features

- **Fully responsive design** — optimized for mobile, tablet, and desktop
- **Multi-page routing** with React Router (Home, Products, Brands, About, Contact)
- **WhatsApp-first contact flow** — category-specific pre-filled WhatsApp inquiry links instead of a traditional contact form
- **Auto-rotating hero image slider** showcasing the storefront and product range
- **Animated brand marquee** — scrolling showcase of dealer brands
- **Interactive product category grid** with direct WhatsApp enquiry per category
- **Embedded map** with store location and business hours
- **SEO-optimized** meta tags for local search visibility
- **Custom branded favicon** and consistent red/dark visual identity throughout

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | [React](https://react.dev/) (Vite) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Routing | [React Router](https://reactrouter.com/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Hosting | [Vercel](https://vercel.com/) |
| Version Control | Git / GitHub |

**No backend required** — this is a fully static, frontend-only site. Customer inquiries are routed directly through WhatsApp and phone links rather than a server-side contact form, keeping the site fast, secure, and free of hosting overhead.

---

## 📁 Project Structure

```
srihari-electricals-frontend/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── images/          # Product & storefront images
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSlider.jsx
│   │   └── BrandMarquee.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── Brands.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/rajkumar-work-in/srihari-electricals-frontend.git

# Navigate to project directory
cd srihari-electricals-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output is generated in the `dist/` folder, ready for static hosting.

---

## 🌐 Deployment

This project is deployed on **Vercel** with automatic deployments on every push to the `main` branch.

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

---

## 📄 Pages Overview

| Page | Description |
|---|---|
| **Home** | Hero slider, category highlights, trust points, brand marquee, CTA banner |
| **Products** | Full product category grid with WhatsApp enquiry per category |
| **Brands** | Showcase of all brands stocked, with moving brand strip |
| **About** | Store history, mission, and trust statistics |
| **Contact** | Contact cards, embedded map, business hours, and address |

---

## 📬 Contact

For inquiries about Sri Hari Electricals:
- 📞 +91 88254 86940
- ✉️ ksanjai21203@gmail.com
- 📍 Pudupet, Cuddalore, Tamil Nadu

---

## 👨‍💻 Developer

Built by ##Rajkumar J## — Freelance Full Stack Developer specializing in responsive, business-focused websites for local enterprises.

## 📝 License

This project was built for a specific client (Sri Hari Electricals) and is not intended for reuse or redistribution as a template.
