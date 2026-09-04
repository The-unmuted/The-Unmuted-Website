# Brand — The Unmuted / 非默

A bilingual safety and rights literacy platform for women that turns legal knowledge and safety resources into practical action before, during, and after harm through four stages: Safety, Practice, Record, and Support.

_Established from the current beta product UI on 2026-08-30._

## Palette — Midnight Signal

**Vibe:** protective, calm, serious, quietly luminous  
**Category:** rights education + consumer safety  
**Mood:** serious + calm

| Token | Hex | Use |
|---|---:|---|
| `--background` | `#0E0E25` | Page background |
| `--surface` | `#1A1835` | Cards and elevated controls |
| `--surface-raised` | `#211D3F` | Hovered or emphasized surfaces |
| `--foreground` | `#F8EBF9` | Primary text |
| `--muted` | `#B1A2C3` | Supporting text |
| `--primary` | `#FF8FDA` | Calls to action, focus, active state |
| `--primary-ink` | `#24112B` | Text on the pink primary color |
| `--violet-accent` | `#A879FF` | Gradient endpoint and ambient glow only |
| `--border` | `#42395F` | Card and control boundaries |

### Contrast check

| Pair | Ratio | Result |
|---|---:|---|
| Foreground / background | 16.46:1 | AA ✓ |
| Muted / background | 7.96:1 | AA ✓ |
| Foreground / card | 14.88:1 | AA ✓ |
| Muted / card | 7.20:1 | AA ✓ |
| Primary ink / primary | 8.57:1 | AA ✓ |
| Primary / background | 9.20:1 | AA ✓ |
| Border / background | 1.79:1 | Visible boundary ✓ |

## Typography

- **Display and English UI:** Outfit
- **Chinese UI:** Noto Sans SC
- **Numbers and technical fingerprints:** JetBrains Mono

Use strong but restrained display weights. Keep body copy at regular or medium weight with generous line height. Use uppercase tracking only for short product labels, beta indicators, and section eyebrows.

## Gradients and glow

The app logo establishes a pink-to-violet light signature. Use it sparingly:

- Hero display text may use `#FF8FDA → #FFC0DF → #A879FF`.
- Large backgrounds may use very low-opacity radial pink or violet light.
- Primary controls remain solid pink for clarity and contrast.
- Do not place body copy on a saturated gradient.
- Do not add unrelated accent hues.

## Shape and elevation

- Cards: 16px radius, one-pixel lavender border, no default shadow.
- Primary and secondary buttons: 14px radius and at least 44px high.
- Pills are reserved for status labels such as `BETA` and compact metadata.
- Use elevation only for the app preview or overlays; ordinary content stays flat and bordered.
- Hover feedback is 100–150ms and changes one or two properties only.

## Tone and voice

Use measured, factual, people-centered language. Lead with learning, practice, rights, and preparedness; then explain the tools available if harm occurs. Explain exactly what the product does, what is stored, and what is still in development. Urgency is appropriate only for real safety actions.

For all Chinese website copy, address the reader as `妳`. Use the feminine third-person form `她` for women and for The Unmuted when the platform is personified. Rewrite surrounding phrases when necessary so the public-facing Chinese voice remains consistently feminine. Apply this rule to every new or revised string before publishing.

Avoid hype, fear-based conversion copy, absolute legal or security guarantees, and vague claims such as “completely safe,” “tamper-proof,” or “anonymous” unless they have been independently verified.

Example:

> Learn your rights. Practice difficult choices. Know what to do before you need to do it.

The website offers English and Simplified Chinese through a persistent language switch. Show one language at a time; do not stack English and Chinese translations in the same component.

## Usage rules

**Do:**

- Use the tokens in `theme.css`; add new semantic tokens there instead of hardcoding component colors.
- Keep content within a 1120px container and use a four-pixel spacing rhythm.
- Preserve visible pink focus rings and 44px touch targets.
- Test at 375px, 768px, and 1280px.
- Respect `prefers-reduced-motion`.

**Don't:**

- Reintroduce the previous rose, amber, teal, and sky card palette.
- Use white text on the pink primary button; use `--primary-ink` for accessible contrast.
- Mix heavy shadows with card borders.
- Use decorative animation that delays access to safety information.
- Present beta-only or planned infrastructure as already live.

---

_Last updated: 2026-09-01 · Palette: Midnight Signal · Typography: Outfit + Noto Sans SC + JetBrains Mono._
