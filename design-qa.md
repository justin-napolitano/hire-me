# Approved brand visual QA — hire-me

final result: passed

## Source, state and comparison

Source visual truth: /Users/justin/repos/brand-review/2026-10-22/08-index-simplified-no-marks.png (1448×1086px composite board; exact SHA-256 aa73b7441e83d5a5930d776c604209a09f54206a676314923037201bd695eef1). Implementation: http://127.0.0.1:4327/, actual public/source-owned content, light theme, fresh isolated Chromium context. User explicitly approved Chromium fallback; cached Playwright/Chromium used without installing dependencies.

Full-view and responsive capture directory: /Users/justin/repos/brand-review/2026-10-22/implementation-evidence/browser-qa/2026-10-22T18-53-42-262Z

- 390CSSpx: 390×7105px full-page PNG, DPR1
- 768CSSpx: 768×4915px full-page PNG, DPR1
- 1440CSSpx: 1440×4497px full-page PNG, DPR1
- 320CSSpx: 320×7520px full-page PNG, DPR1

Combined comparison input opened and visually inspected: /Users/justin/repos/brand-review/2026-10-22/implementation-evidence/browser-qa/2026-10-22T18-53-42-262Z/compare-hire-me.png (1800×1000px). It places the entire approved board scaled650px beside the1440px actual page scaled650px and390px actual page; source is a multi-site composite, so this evaluates visual contract rather than pretending the whole-page source has identical content or viewport. Original unscaled full-page captures and768px views were also inspected. Focused regional evidence is the masthead/body region in this combined capture; no additional P0/P1/P2 regional mismatch required another fix capture.

## Required fidelity surfaces

- Typography: local licensed Inter (Index Inter in optional themes), comfortable16px body; text-only identity22–24px, primary headings at most28px. Family, moderate weights, line height, wrapping and labels were visually compared. No giant title, bracket/logo prefix or clipped heading.
- Layout/spacing: restrained reading width, thin neutral rules, purposeful spacing and responsive flow. No decorative gradients/shadows or new image placeholders. Real longer content, structured toolkit surfaces and functional skill groups are preserved.
- Colors: paper #F4F0E8, ink #25251F, stone #CBC8BF; slate focus/active details only. Ink contrast13.55:1 and secondary text5.40:1 against paper. Functional categorical graph colors and deliberate dark mode are retained where relevant.
- Assets/content: no invented photos, symbols or placeholder claims. Meaningful existing logos/graphs/source content remain. Names retain their own identity rather than replacing tenant/product names with JNAP.

## Browser and interaction evidence

Structured capture/DOM/console evidence: /Users/justin/repos/brand-review/2026-10-22/implementation-evidence/browser-qa/2026-10-22T18-53-42-262Z/evidence.json. Deeper interactions: /Users/justin/repos/brand-review/2026-10-22/implementation-evidence/browser-qa/2026-10-22T18-53-42-262Z/deep-checks.json.

All390/768/1440/320CSSpx views have document width equal to viewport, no page overflow. Keyboard Tab navigation exposes visible2px slate focus with focused controls in view. All five pages also passed effective200% reflow (720CSSpx at DPR2 representing a1440px display); captures named hire-me-effective-200-percent.png. This is explicitly emulated CSS-pixel reflow, not a claim that native browser-chrome zoom UI was exercised.

Light/dark/auto theme control works: dark body rgb(37,37,31), text rgb(244,240,232). Required form checkValidity rejects blank name/contact/adventure without submission. Calendar iframe loads after scrolling into view; passive frame inspection found505text characters and67buttons, with no booking click. Focused screenshot hire-me-calendar-visible.png was inspected. Contact, email, calendar booking and form actions were not invoked. Source profile and handlers unchanged.

## Findings and iteration history

Initial visual comparison found no actionable P0/P1/P2. Preserved real skill/readiness content and tool logos rather than deleting source data to imitate the sparse illustrative board.

No unresolved P0/P1/P2 brand-layout finding after visual comparison. This decision was made from the combined rendered image, not automatically from DOM checks. Existing relevant build/check results remain recorded in the PR; littlelink rebuilt after its privacy presentation fix.

## Follow-up / scope limits

Same development-only Astro dev-toolbar403; no app JS exception. Existing career claims retained without content verification; no claim that visual QA validates these facts.

No live form submission, email, booking, real login/account write, source-fact reconciliation, deployment, protected merge or custom-domain promotion was performed. This report passes the scoped brand visual/interaction gate; broader content claims, release governance and hosting gates remain separately owned by the coordinator.


## 2026-10-23: Shared midpoint palette

Final result: passed

Apply midpoint red (#d01527) to text accents, hover/focus/selection states, keeping green (#356349) exclusively as the native scroll canvas behind a full-height paper page surface. Screen-only overrides preserve print styling and published PDF files. Existing dark modes retain readable contrast with a lighter red text variant. No application data, destinations, authentication, or runtime dependencies changed.

The production build/static checks pass using the repository lockfile. Browser checks at 320, 390, and 1440 pixels verify palette tokens, green root/body canvas, paper surface without exposed green bands, selection color, and no page overflow or runtime exceptions. Screenshots were inspected. Existing dark modes also pass. The news reader includes narrow-screen wrapping for article controls/text found during this review; hiring CTA text retains sufficient contrast on red.

Local build/browser evidence is retained outside this repo in the rollout directory. Production status and screenshots are recorded after release; this local QA result does not assert production has already changed.
