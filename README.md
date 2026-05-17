# Tanchi Chrispus — Cybersecurity Portfolio

Built with React + Vite + Tailwind CSS + Framer Motion.

---

## Project Structure

```
tanchi-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
├── .gitignore
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── portfolio.js       ← All your content lives here
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Labs.jsx
        ├── Learning.jsx
        ├── Certifications.jsx
        ├── Blog.jsx
        ├── Resume.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        ├── FadeUp.jsx
        └── SectionHeader.jsx
```

---

## Prerequisites

Make sure you have these installed before starting:

- **Node.js** v18 or higher → https://nodejs.org
- **npm** (comes with Node.js)
- **Git** → https://git-scm.com

Check your versions:
```bash
node -v
npm -v
git --version
```

---

## Local Development Setup

### Step 1 — Get the project files

If you downloaded the zip, extract it. If you're cloning from GitHub:
```bash
git clone https://github.com/YOUR_USERNAME/tanchi-portfolio.git
cd tanchi-portfolio
```

### Step 2 — Install dependencies

```bash
npm install
```

This installs React, Vite, Tailwind, and Framer Motion. Takes about 30 seconds.

### Step 3 — Start the dev server

```bash
npm run dev
```

Open your browser and go to: **http://localhost:5173**

The site hot-reloads automatically whenever you save a file.

---

## Updating Your Content

All your personal information is in one file:

```
src/data/portfolio.js
```

Edit that file to update:
- Your name, titles, bio
- Skills
- Projects (name, description, links, status)
- Certifications
- Contact links (GitHub, LinkedIn, email)

You do **not** need to touch any component files to update content.

### Updating your GitHub/LinkedIn/email

In `src/data/portfolio.js`, find the `contact` object at the bottom:

```js
contact: {
  github: 'https://github.com/YOUR_ACTUAL_USERNAME',
  linkedin: 'https://linkedin.com/in/YOUR_ACTUAL_USERNAME',
  email: 'your@actualemail.com',
},
```

Replace the placeholder values with your real links.

### Adding a real Resume PDF

1. Place your PDF file in the `public/` folder (create it if it doesn't exist):
   ```
   public/resume.pdf
   ```

2. In `src/components/Resume.jsx`, find this line:
   ```jsx
   <a href="#" className="btn-primary justify-center">Download PDF</a>
   ```
   Change `href="#"` to `href="/resume.pdf"` and add `download`:
   ```jsx
   <a href="/resume.pdf" download className="btn-primary justify-center">Download PDF</a>
   ```

### Adding a real profile photo

1. Place your photo in `public/avatar.jpg`
2. In `src/components/About.jsx`, replace the `TC` initials block with:
   ```jsx
   <img src="/avatar.jpg" alt="Tanchi Chrispus" className="w-24 h-24 rounded-xl object-cover border border-border2" />
   ```

---

## Building for Production

```bash
npm run build
```

This creates a `dist/` folder with the optimised static files ready for hosting.

To preview the production build locally:
```bash
npm run preview
```

---

## Deployment

### Option A — Vercel (Recommended, free)

**Method 1: Vercel CLI**

```bash
npm install -g vercel
vercel
```

Follow the prompts. Your site will be live at a `.vercel.app` URL in under a minute.

**Method 2: Vercel Dashboard (no CLI needed)**

1. Push your project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/tanchi-portfolio.git
   git push -u origin main
   ```

2. Go to https://vercel.com and sign in with GitHub
3. Click **"Add New Project"**
4. Import your `tanchi-portfolio` repository
5. Vercel auto-detects Vite — just click **Deploy**
6. Done. Live URL given instantly.

Every time you push to `main`, Vercel redeploys automatically.

### Option B — GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json` scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

Add to `vite.config.js`:
```js
export default defineConfig({
  plugins: [react()],
  base: '/tanchi-portfolio/',   // your repo name
})
```

Then deploy:
```bash
npm run deploy
```

Your site will be at: `https://YOUR_USERNAME.github.io/tanchi-portfolio/`

---

## Custom Domain (Optional)

On Vercel:
1. Go to your project → **Settings → Domains**
2. Add your domain (e.g. `tanchi.dev`)
3. Update your domain's DNS records as shown
4. Vercel handles HTTPS automatically

---

## Common Issues

**`npm install` fails**
- Make sure Node.js is v18+: `node -v`
- Try deleting `node_modules` and running `npm install` again

**Fonts not loading**
- You need an internet connection during development (fonts come from Google Fonts)
- For offline use, download the fonts and host them in `public/fonts/`

**Blank page after build**
- If hosting on GitHub Pages, make sure the `base` in `vite.config.js` matches your repo name

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI components |
| Vite 5 | Build tool & dev server |
| Tailwind CSS 3 | Utility-first styling |
| Framer Motion 11 | Animations |
| Google Fonts | Syne, JetBrains Mono, DM Sans |
