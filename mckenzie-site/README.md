# McKenzie Strategies — Website

A plain, static HTML/CSS/JS site for [mckenziestrategies.com](https://www.mckenziestrategies.com), migrated from Softr. No build step, no framework, no dependencies — every page is a self-contained `.html` file that references shared `/css/styles.css` and `/js/main.js`.

## Structure

```
.
├── index.html          Home
├── about.html           About & team
├── contact.html         Contact (Netlify Form)
├── faqs.html             FAQs
├── contedu.html          Continuing Education
├── fly.html              FLY (Freedom Lies in You) program
├── podcast.html          Talking Strategies podcast
├── resources.html        Resources hub
├── workplace.html        Careers (coming soon)
├── 404.html
├── css/styles.css
├── js/main.js            Mobile nav toggle only
├── images/               All site images
├── netlify.toml          Redirects, headers, publish config
├── sitemap.xml
└── robots.txt
```

## Editing content

Every page is plain HTML — open the file, edit the text, save. There is no templating; the header/nav and footer are duplicated at the top and bottom of each page, so a nav or footer change needs to be made in each file (find/replace across files works well for this).

## Forms

The Contact form, the About-page newsletter signup, and the ContEdu sign-up form all use [Netlify Forms](https://docs.netlify.com/manage/forms/setup/) (`data-netlify="true"`). No backend or JavaScript is required — Netlify parses the static HTML at deploy time and handles submissions automatically. Submissions show up under **Site settings → Forms** in the Netlify dashboard, and you can turn on email notifications there.

## Local preview

No build step means no server is required — just open `index.html` directly in a browser, or serve the folder with any static file server, e.g.:

```
npx serve .
```

## Deploy

See the deployment/DNS steps provided separately, or:
1. Push this repo to GitHub (already done) and connect it in Netlify with **Base directory:** `mckenzie-site`, **Publish directory:** `.`, **Build command:** *(leave blank)*.
2. Or drag-and-drop the `mckenzie-site` folder directly onto [app.netlify.com/drop](https://app.netlify.com/drop).
