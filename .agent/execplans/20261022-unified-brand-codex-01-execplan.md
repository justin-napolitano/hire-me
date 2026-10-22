---
id: 20261022-unified-brand-codex-01-execplan
title: Apply approved restrained brand to the hiring page
owner: agent/codex-01
created: 2026-10-22T15:10:00Z
status: draft
base_branch: main
initiative_branch: initiative/unified-brand-20261022
initiative_node_id: initiative-unified-brand-20261022
approve_policy: codeowners
reviewers: [github:justin-napolitano]
changes:
  - src/styles/design-system.css
  - src/components/HeroSection.astro
  - public/fonts/
  - design-qa.md
---

## Outcomes & Retrospective

Agent-owned draft scope for the user-authorized implementation swarm. No human finalization asserted.

## Context and Orientation

Issue https://github.com/justin-napolitano/hire-me/issues/5 and the pinned contract in littlelink planning PR #30 govern this presentation-only update. Exact approved reference is 08-index-simplified-no-marks.png. Older personal-suite notes called this route hidden; coordinator verified hire.jnap.me currently exists in actual hosting inventory. Preserve current deployment/exposure; do not activate a new hostname.

## Plan of Work

1. Carry this bounded plan on the initiative and implement on its child branch.
2. Align existing theme tokens and component presentation with paper/ink/stone, modest sans headings, local licensed Inter, no decorative shadows/gradients. Preserve light/dark control with coherent palettes.
3. Preserve verified source profile, forms/API, calendar integration, links, content and SEO. No external integration or dependency changes. Make the existing profile name the sole h1 without adding a title mark.
4. Build, inspect source invariants and obtain rendered review before merge/deploy.

## Validation and Acceptance

npm run build; git diff --check; source comparison of profile and API/integration handlers. No automated live email, calendar or form submission. Browser review at 390/768/1440, 320px overflow, keyboard/zoom/contrast remains blocked pending coordinator browser permission. No deployment until coordinated QA.

## Artifacts and Notes

Rollback via focused presentation commit. No data migration. Existing content authority and remote services preserved. Fonts from licensed official google/fonts bundle copied locally with OFL license.
