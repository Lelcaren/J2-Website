# J2 Advisory Group — React + Tailwind CSS

A complete React rebuild of the J2 Advisory Group website with Tailwind CSS, React Router, and all original images and fonts.

## Stack
- React 18
- React Router DOM 6
- Tailwind CSS 3
- Google Fonts: Cormorant Garamond + Montserrat

---

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Start dev server
```bash
npm start
```
Opens at **http://localhost:3000**

---

## Pages
| URL | File |
|-----|------|
| `/` | `src/pages/HomePage.jsx` |
| `/legal` | `src/pages/LegalPage.jsx` |
| `/advisory` | `src/pages/AdvisoryPage.jsx` |
| `/about` | `src/pages/AboutPage.jsx` |
| `/contact` | `src/pages/ContactPage.jsx` |
| `/news` | `src/pages/NewsPage.jsx` |

## Key Files
| File | Purpose |
|------|---------|
| `src/constants.js` | All images, team data, services, clients |
| `src/components/Navbar.jsx` | Sticky nav with dropdowns |
| `src/components/Footer.jsx` | Footer |
| `src/components/Marquee.jsx` | Animated client logo scroll |
| `tailwind.config.js` | Brand colors, fonts, animations |

---

## Customization

### Brand Colors (tailwind.config.js)
```js
navy: { DEFAULT: '#1a2340', dark: '#0d1117', deep: '#111827' }
gold: { DEFAULT: '#b89a4e', light: '#d4b46a', dark: '#9a7e38' }
```

### Add / Remove Team Members
Edit the `TEAM` array in `src/constants.js`.

### Add / Remove Services
Edit the `SERVICES` array in `src/constants.js`.

### Add / Remove Client Logos
Edit `LEGAL_CLIENTS` or `ADVISORY_CLIENTS` in `src/constants.js`.

### All Images in One Place
Every image URL lives in the `IMAGES` object in `src/constants.js` — swap any URL there.

---

## Build for Production
```bash
npm run build
```
