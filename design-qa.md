# Hiring page brand QA

final result: blocked

Exact visual reference: approved 08-index-simplified-no-marks.png, inspected directly; contract pinned in littlelink planning PR #30. Implemented warm paper #F4F0E8, ink #25251F, stone rules #CBC8BF, focus slate #64758A. Local licensed Inter; profile name 24px, body 16px, no title mark, gradients, shadows or oversized type. Existing dark and auto mode remain supported with paper-on-ink text; functional project, form and calendar structure retained.

`npm run build` and `git diff --check` pass. Vercel adapter retains its existing local Node 24 → deployed Node 22 warning. Shared source profile, API handlers, form/calendar scripts and PageLayout theme logic were not changed. No live email, calendar booking or form submission was invoked. Existing site exposure is preserved; no hostname activated.

Contrast: ink/paper 13.55:1; secondary #45453E on paper exceeds AA; muted #62625C on paper 5.40:1. Primary CTA descriptions now use the same contrast token as the CTA label. Slate is focus-only. Dark secondary and muted text use light paper/stone against ink.

Rendered visual and interaction review remains blocked because chosen in-app browser is unavailable and fallback permission is pending with coordinator. Required before/after captures at 390/768/1440; 320px reflow, 200% zoom, focus, theme switching and passive form validation/calendar-load review must pass before merge/deploy. Existing source copy and claims remain unchanged; a later content authority pass can reconcile them with current resume facts.
