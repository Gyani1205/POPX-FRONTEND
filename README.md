# PopX — React App

A pixel-perfect React 18 implementation of the PopX mobile app design (Adobe XD).

## Tech Stack

- React 18
- React Router DOM v6
- Vite
- Pure CSS (no UI libraries)
- LocalStorage for auth simulation
- Poppins font (Google Fonts)

## Pages

| Route | Page |
|-------|------|
| `/` | Welcome |
| `/register` | Create Account |
| `/login` | Sign In |
| `/account` | Account Settings |

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

## Build for Production

```bash
npm run build
npm run preview
```

## Deploy to Vercel

### Option 1 — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2 — Vercel Dashboard
1. Push repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Framework preset: **Vite**
5. Click **Deploy**

The `vercel.json` file handles SPA routing automatically.

## Folder Structure

```
src/
├── components/
│   ├── Button.jsx        # Reusable button (primary / secondary)
│   ├── InputField.jsx    # Floating-label input with validation
│   └── MobileLayout.jsx  # 375px mobile shell wrapper
├── pages/
│   ├── Welcome.jsx       # Landing page
│   ├── Register.jsx      # Account creation form
│   ├── Login.jsx         # Sign-in form
│   └── Account.jsx       # Profile / settings page
├── routes/
│   └── AppRoutes.jsx     # Route definitions
├── styles/
│   ├── global.css        # CSS variables, resets, body
│   └── pages.css         # All component & page styles
├── App.jsx
└── main.jsx
```

## Auth Flow

1. **Register** → fills form → data saved to `localStorage` → redirected to `/account`
2. **Login** → credentials checked against `localStorage` → redirected to `/account`
3. **Account** → reads user from `localStorage`, redirects to `/login` if not authenticated

## Design Tokens

| Token | Value |
|-------|-------|
| Primary Purple | `#6C25FF` |
| Secondary Purple | `#CEA9FF` |
| Background | `#F7F8F9` |
| Text Dark | `#1D2226` |
| Border | `#CBCBCB` |
| Font | Poppins |
| Mobile Width | 375px |
