# Rechtsanwalt Landing Page

Static landing page for a small local German Kanzlei with German/Russian i18n, SEO structure, accessible interactions and conservative legal copy.

## File structure

```text
/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   └── i18n.js
├── assets/
│   └── img/
│       ├── hero-praxis.webp
│       ├── team-portrait.webp
│       ├── beratung-tablet.webp
│       ├── behandlungsraum.webp
│       ├── technik-scan.webp
│       └── reception.webp
└── README.md
```

## How to run locally

Open `index.html` in a browser, or run a small static server:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Demo Kanzlei data

The current page uses fictional demo data for a local Kanzlei in Wetzlar:

`Kanzlei Hartmann Wetzlar`, `Rechtsanwältin`, `Clara Hartmann`, `Wetzlar`, `Bahnhofstraße, 35576 Wetzlar`, `+49123456789`, `kontakt@kanzlei-hartmann-wetzlar.de`, `+49123456789`, `Mo-Fr 09:00-17:00 Uhr`, `Rechtsanwaltskammer Frankfurt am Main`, `DE 318 742 956`, `Rechtsanwältin`, `Deutschland`, `kein Fachanwaltstitel im Demo-Profil`, `Familienrecht, Erbrecht, Arbeitsrecht, Mietrecht, Verkehrsrecht, Vertragsrecht`, `4,8`, `36`, `190 EUR inkl. MwSt.`, `https://www.kanzlei-hartmann-wetzlar.de`.

These details are invented for layout, SEO and conversion prototyping. Before publishing, all legal information, professional titles, Rechtsgebiete, Rechtsanwaltskammer, Impressum, Datenschutz, Streitbeilegung notices, rating statements and fee statements must be reviewed by the responsible lawyer.

## Data to confirm before launch

- Kanzlei name, lawyer name, Berufsbezeichnung and Zulassungsland.
- Full address, phone, e-mail, WhatsApp and opening hours.
- Rechtsanwaltskammer, USt-ID and Impressum details.
- Confirmed Rechtsgebiete. Current service cards are demo content; mark internally as `Rechtsgebiet prüfen`.
- Fachanwaltstitel, only if officially granted and current.
- Google rating, number of reviews and source link.
- Erstberatungspreis, only if legally and commercially confirmed.
- Datenschutz, cookie handling and contact form data flow.
- Real testimonials only with permission and correct source.

## SEO checklist

- One H1 in `index.html`.
- Meta title and description are present.
- Canonical URL uses the fictional demo domain `https://www.kanzlei-hartmann-wetzlar.de`.
- Open Graph tags are present.
- JSON-LD `LegalService` is present.
- JSON-LD `FAQPage` is present.
- Semantic landmarks: `header`, `main`, `section`, `nav`, `footer`, `address`.
- Local SEO terms are included naturally: Rechtsanwalt Wetzlar, Anwalt Wetzlar, Kanzlei Wetzlar, Erstberatung, Rechtsgebiete, Familienrecht, Erbrecht, Arbeitsrecht, Mietrecht, Verkehrsrecht, Vertragsrecht, RVG, russischsprachiger Rechtsanwalt, Beratung auf Russisch.
- Replace demo data with verified real Kanzlei data before indexing.

## Accessibility checklist

- Visible focus states.
- `aria-expanded` and `aria-controls` for FAQ.
- `aria-expanded` and `aria-label` for mobile menu.
- `aria-label` for language switcher.
- Labels for all form fields.
- Screen-reader-readable form errors.
- `html lang` switches between `de` and `ru`.
- `prefers-reduced-motion` is respected.

## Performance checklist

- No external UI libraries, fonts or CDNs.
- Images use local `.webp` paths.
- Below-hero images use `loading="lazy"`.
- Images have width and height attributes.
- Animations use `transform` and `opacity`.
- `will-change` is removed after reveal.

## Where to place generated images

Replace the placeholder files in `assets/img/` with final original `.webp` images using exactly these names:

- `hero-praxis.webp`
- `team-portrait.webp`
- `beratung-tablet.webp`
- `behandlungsraum.webp`
- `technik-scan.webp`
- `reception.webp`

## Image generation prompts

Use these references only as mood and composition inspiration. Do not copy real photos, faces, logos or identifiable offices.

```text
https://www.kanzleifrank.com/wp-content/uploads/2021/10/KanzleiFrank_Berlin_Team_.jpg.webp
https://www.kanzlei-koenigstrasse.de/wp-content/uploads/2012/01/rechtsanwalt-steffen-koester-2-1255x600.webp
https://kanzlei-sachse.de/sites/default/files/location_image/frankfurt_gross_0%20%281%29.jpg
https://www.kanzlei-koenigstrasse.de/wp-content/uploads/2024/05/fallback-hero-1210x600.webp
```

### hero-praxis.webp

Create an original premium hero image for a small German law office website. Scene: modern private Rechtsanwalt office in Germany, calm and trustworthy atmosphere. Composition: horizontal 16:9, slightly wide angle, attorney standing near a wooden desk and large window, city street softly visible outside, not a skyline cliché. Person: one professional lawyer, 40-55 years old, neutral European appearance, dark navy or charcoal suit, no visible brand, calm confident expression, direct but not aggressive eye contact, relaxed posture, one hand lightly resting on desk. Lighting: natural daylight from side window, soft shadows, warm ivory interior, subtle navy accents. Objects: closed laptop, leather document folder, fountain pen, neatly stacked papers, small plant, no gavel, no scales, no courtroom symbols. Mood: discreet, competent, calm, premium, human. Style: realistic editorial photography, high-end corporate portrait, shallow depth of field, clean background, no text, no logo. Output: webp, 1920x1080.

### team-portrait.webp

Create an original team portrait for a small German law firm. Scene: two or three legal professionals in a modern Kanzlei meeting room. Composition: horizontal 4:3 or 3:2, people positioned around a conference table, slightly asymmetrical composition, enough negative space for website layout. People: diverse but realistic European office team, professional clothing in navy, charcoal, white, beige. Expressions calm, approachable, serious but not cold. No exaggerated smiles. Pose: seated and standing mix, one lawyer seated with open folder, another standing behind, one assistant or colleague nearby. Lighting: soft natural daylight, elegant warm interior, matte surfaces. Objects: legal documents, tablet, glass of water, pen, minimal decor. Avoid: courtroom, gavel, scales, law books wall cliché, flags, luxury excess. Mood: personal Beratung, Vertrauen, Sorgfalt. Style: realistic premium business photography, no text, no logo. Output: webp, 1400x1000.

### beratung-tablet.webp

Create an original close-up image of a legal consultation in a German law office. Scene: attorney and client discussing documents at a table. Composition: close-up from shoulder level, hands visible, tablet on table with abstract document interface, no readable private data. People: only partial faces or hands, preserving confidentiality. Lawyer points calmly to a document, client listens. Lighting: warm daylight, soft shadows, professional but human. Objects: tablet, printed documents, pen, notebook, cup of water. Mood: structured explanation, clarity, confidentiality. Style: realistic editorial photography, shallow depth of field, no text, no logos, no identifiable data. Output: webp, 1200x900.

### behandlungsraum.webp

Create an original image of a quiet consultation room in a small German law office. Scene: empty private Besprechungsraum prepared for confidential legal consultation. Composition: horizontal 16:9, table in foreground, two comfortable chairs, frosted glass door or bookshelf in background, no people. Lighting: natural daylight, calm warm interior, navy and beige accents, subtle premium feel. Objects: clean table, closed folder, pen, water glasses, small plant, acoustic wall panel, discreet art. Avoid: medical room, courtroom, gavel, scales, aggressive luxury. Mood: confidentiality, order, calm, readiness. Style: architectural interior photography, realistic, no text, no logo. Output: webp, 1400x900.

### technik-scan.webp

Create an original image showing digital document review in a German law office. Scene: close-up of laptop and scanned legal documents on desk, attorney hands organizing papers. Composition: top-down 45-degree angle, laptop on left, documents on right, pen and sticky notes, no readable personal data. Lighting: clean daylight, neutral professional colors, high clarity. Objects: laptop with abstract document dashboard, printed contracts with blurred text, document folder, smartphone face down. Mood: precise, modern, structured, data-conscious. Style: realistic business photography, no brand logos, no readable legal names, no text overlays. Output: webp, 1200x900.

### reception.webp

Create an original image of a small welcoming reception area in a German law office. Scene: compact Kanzlei reception, tidy, discreet, premium but not luxurious. Composition: horizontal 16:9, reception desk on one side, seating area on the other, soft depth, no people or one receptionist partially visible from side. Lighting: natural daylight plus warm indoor light, calm atmosphere. Objects: reception desk, small sign placeholder with no readable text, coat stand, plant, chairs, neutral art. Mood: professional welcome, local trust, calm first contact. Style: realistic interior photography, no text, no logo, no cliché legal symbols. Output: webp, 1400x900.
