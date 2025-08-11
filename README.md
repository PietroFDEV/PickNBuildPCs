# PickNBuildPCs — Static Landing Page

Dark/neon responsive landing page for a Liverpool-based PC building service. Customers can browse curated prebuilts or shortlist parts for a custom build, then contact you via Instagram, Facebook, email, or UK phone.

## Local preview

Open `index.html` directly in your browser, or use a simple static server if you prefer.

On Windows (PowerShell):

```powershell
Start-Process index.html
```

## Update your business details

- `index.html` → Contact links in the `#contact` section
  - Instagram: https://instagram.com/picknbuildpcs
  - Facebook: https://facebook.com/picknbuildpcs
  - Email: support@picknbuildpcs.co.uk (update to your preferred address)
  - Phone: replace `07123 456789` and `tel:+447123456789` with your number

## Deploy to GitHub Pages

1) Create a new GitHub repository (for example `picknbuildpcs`).

2) Push this folder to GitHub:

```powershell
git init
git add .
git commit -m "Initial commit: PickNBuildPCs landing page"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

3) In the GitHub repository → Settings → Pages:

- Source: `Deploy from a branch`
- Branch: `main` and folder `/ (root)`
- Save. Your site will be available at `https://<your-username>.github.io/<your-repo>/` shortly.

Alternatively, you can place the site in `/docs` and select `/docs` as the Pages folder.

## Custom domain (optional)

If you own a domain (e.g. `picknbuildpcs.co.uk`), add it in Settings → Pages → Custom domain, then create a `CNAME` DNS record pointing to `<your-username>.github.io`.

## Editing guidance

- Colours and theme: `assets/css/styles.css` (CSS variables at the top)
- Content: `index.html` (hero text, prebuilts, custom build options, contact)
- Interactions: `assets/js/main.js` (mobile nav, modals, estimate calc)


