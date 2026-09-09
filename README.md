# Otuaro for the Senate — Delta South 2027

React conversion of the supplied static HTML campaign site.

**This site is not finished and must not be described as finished.** Everything
flagged in `BUILD_NOTES_AND_PLACEHOLDERS.md` still applies: no legal review, no
claims log, no launch readiness checklist, no confirmed party mark usage.

## Running it

```bash
npm install
npm run dev      # local development
npm run build    # production build into dist/
npm run preview  # serve the production build
```

## What was and wasn't changed

**Text is unchanged.** Every heading, paragraph, list item, table cell, form
label, option and placeholder marker was carried across word for word from the
supplied HTML, including the `[BRACKETED]` markers and the internal build notes.
Page `<title>` and `<meta name="description">` strings were carried over too, and
are applied per route by `src/hooks/useDocumentMeta.js`.

**What is new** is structure and styling only: the component split, the
per-component stylesheets, the image slots, and the design system built from the
manifesto cover artwork (`styles.css` was not supplied, so the visual language
was rebuilt rather than ported).

## CSS structure

No single stylesheet controls the site. Every component and every page owns its
own CSS file, imported by its own module:

```
src/styles/tokens.css   colour, type scale and spacing variables only
src/styles/base.css     element defaults and the .wrap layout container
src/components/X/X.css  scoped to that component
src/pages/Y/Y.css       scoped to that page
```

`tokens.css` holds variables, not rules — it is there so a colour change happens
in one place instead of across forty files. Nothing in it styles an element.

## Replacing the placeholder images

Every image slot is a `<PlaceholderImage>`. While it has no `src` it renders a
labelled dashed box saying which photograph belongs there. To drop a real photo
in, add the file to `public/images/` and pass `src` and `alt`:

```jsx
<PlaceholderImage
  ratio="portrait"
  label="PRIMARY CAMPAIGN PORTRAIT"
  src="/images/otuaro-portrait.jpg"
  alt="Barr. Kingsley Burutu Otuaro in Warri South-West"
/>
```

Nothing else changes. For responsive sources on slower connections, pass
`srcSet` and `sizes` as well:

```jsx
srcSet="/images/portrait-480.webp 480w, /images/portrait-960.webp 960w"
sizes="(max-width: 940px) 100vw, 460px"
```

Images below the fold lazy-load by default. The home page hero portrait is
marked `priority` so it loads eagerly.

### Where the slots are

| Page | Slots |
|---|---|
| Home | Hero portrait, 3 theme images, 3-image band, secondary portrait, 8 LGA photos |
| About | 2 inline images, aside portrait, 3-image band |
| The Plan | 6 theme images, first-100-days image |
| Track Record | 3 timeline images |
| News | 1 per article |
| Events | 3-image band |
| Get Involved | Volunteers image |
| Contact | Campaign office image |
| Voter Information | None — deliberately plain, it is non-partisan factual content |
| Legal | None |

## Build notes

The internal notes from the supplied HTML are preserved verbatim in
`<BuildNote>` components. Their visibility is controlled by one variable in
`.env`:

```
VITE_SHOW_BUILD_NOTES=true    # visible — for review and hand-off
VITE_SHOW_BUILD_NOTES=false   # hidden — for the public site
```

Set it to `false` before launch. The text stays in the codebase either way, so
nothing is lost and the notes come back by flipping the flag.

The disclaimer on the Voter Information page ("A note on this page…") is a
different thing — it is written for the reader, not for the team, so it uses the
`<Notice>` component and always renders.

## Party mark

The header has a commented-out slot for the PDP umbrella mark. It is left
commented out deliberately: the build notes record that party mark usage has not
been confirmed in writing per section 4.6. Add the file and uncomment once that
confirmation exists.

## Routing

Uses `HashRouter`, so the built site works on static hosting without server
rewrite rules. To switch to clean URLs, change `HashRouter` to `BrowserRouter` in
`src/main.jsx` and add a catch-all rewrite to `index.html` on the host.

## Still outstanding

Carried forward from the build notes, unchanged by this conversion:

- Rights-cleared photography for every slot above
- Volunteer and contact forms are not wired to a backend; both call
  `preventDefault()` and do nothing else
- No news posts or event schedule supplied
- Legal text is a draft structure pending the campaign lawyer's sign-off
- INEC voter portal URL unverified
- Election date for Delta South unconfirmed
- Contact details, office address, social handles and publisher attribution
  are all still `[BRACKETED]` placeholders
