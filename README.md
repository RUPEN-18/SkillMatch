# SkillMatch
A browser-based skill coverage checker for preparing a resume for a job description. Paste your resume text and enter comma- or newline-separated skills; the app reports matching and missing keywords. This is a literal keyword comparison, **not** an ATS score or hiring prediction. All text stays in the browser.

## Run
Open `index.html` in a browser. No dependencies or API keys. To host it, enable GitHub Pages from the repository root.

## Test
`node --test test.js` (Node.js 18+). Try resume `Python, SQL, React` with requirements `Python, Docker, SQL`; coverage is 67%.

## Implementation
Case-insensitive phrase matching with token boundaries, deduplication, and safe DOM text rendering. It does not infer synonyms or semantic skills; review results manually.
