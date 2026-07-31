---
name: The Console
description: A daylight mission-control instrument panel for one operator.
colors:
  signal: "#e0531d"
  signal-ink: "#a53809"
  live: "#2f7d3f"
  live-glow: "#58c46a"
  desk: "#d3cfc4"
  desk-deep: "#c7c2b6"
  panel: "#edeae2"
  panel-2: "#e5e1d8"
  well: "#dbd7cd"
  ink: "#1b1a16"
  ink-mid: "#55514a"
  ink-soft: "#4b463e"
  line: "#b8b3a5"
  edge-hi: "#ffffff"
typography:
  scale:
    display-xl: "104px"
    display-lg: "92px"
    display-md: "86px"
    display-sm: "80px"
    title-lg: "22px"
    body-lg: "17px"
    body: "15px"
    body-sm: "14px"
    detail: "13.5px"
    detail-sm: "13px"
    caption: "12.5px"
    unit: "11px"
    placard: "10.5px"
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 12vw, 5.75rem)"
    fontWeight: 800
    lineHeight: 0.86
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  readout:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontFeature: "'tnum' 1"
  label:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "10.5px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.2em"
rounded:
  chip: "6px"
  inset: "7px"
  panel: "10px"
  tile: "12px"
  pill: "999px"
spacing:
  tight: "12px"
  snug: "20px"
  mid: "32px"
  wide: "48px"
  section-y: "80px"
  section-y-lg: "96px"
components:
  button-signal:
    backgroundColor: "{colors.signal}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-signal-hover:
    backgroundColor: "{colors.signal}"
    textColor: "#ffffff"
  button-metal:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  panel-card:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "20px"
  panel-inset:
    backgroundColor: "{colors.well}"
    textColor: "{colors.ink}"
    rounded: "{rounded.inset}"
    padding: "12px 16px"
  annunciator:
    backgroundColor: "{colors.panel-2}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.pill}"
    padding: "5.5px 12.8px 5.5px 11.2px"
  placard-chip:
    backgroundColor: "{colors.panel-2}"
    textColor: "{colors.signal-ink}"
    rounded: "{rounded.chip}"
    padding: "4px 10px"
---

# Design System: The Console

## Overview

**Creative North Star: "The Daylight Control Desk"**

The Console is a warm, brushed-aluminium mission-control panel photographed in daylight. Everything on the page is a physical instrument on a metal desk: raised bone modules with real machined bevels and corner screws, recessed reading wells pressed into the surface, engraved placard labels, illuminated keys, and status lamps that light up only when they mean something. The register is functional Braun/Rams, not sci-fi. It reads as precision hardware built by one competent operator, which is the entire persuasion strategy: the surface itself is a work sample of care and correctness.

The palette is metal neutrals plus exactly one voice — a signal orange — with a single functional green lamp for "live/open" status. Depth is built entirely from inset bevel shadows and a top-light gradient, never from cards floating on ambient drop shadows. Type splits cleanly by function: Archivo is the machined display and UI voice; Martian Mono is reserved for instrument readouts, tabular figures, and engraved labels. Motion is disciplined — one authored "power-on" moment when the hero boots, quiet in-view fades everywhere else, and a full stand-down under `prefers-reduced-motion`.

This world is a deliberate refusal of the dark-neon developer-terminal hero the category ships by default. The prior near-black + emerald/indigo-glow + mono-terminal language is an explicit anti-reference. The Console is light, not dark; anodized metal, not a glowing screen; instrument, not cockpit.

**Key Characteristics:**
- Daylight brushed-metal desk; light surfaces, warm near-black ink, zero dark theme.
- One signal-orange accent used as scarce emphasis; one functional green status lamp.
- Physical depth from inset bevels, corner screws, and pressed-in wells — never ambient float.
- Two-font functional split: Archivo (machined display/UI) + Martian Mono (readouts/placards).
- One "power-on" hero moment; everything else fades quietly and stands down for reduced-motion.

## Colors

Metal neutrals carry the whole surface; a single signal orange is the only chromatic voice, joined by one functional green used strictly as a status lamp.

### Primary
- **Signal Orange** (`#e0531d`): The one accent. Fills the primary illuminated key, the headline payoff word (e.g. "Whole tech team."), the carousel progress fill, the selection highlight, and the hover border on interactive modules. It is emphasis, never a surface.
- **Signal Ink** (`#a53809`): The deeper, AA-legible orange for small orange text on light metal — channel tags, placard-signal labels, cadence labels, monogram marks. Use this, not Signal Orange, whenever orange type is below ~18px.

### Secondary (functional state only)
- **Live Green** (`#2f7d3f`) with glow **Live Glow** (`#58c46a`): The "open / live" annunciator lamp and the bullet lamps in lists and readouts. Green means status is good/live; it never becomes a fill, a text color, or decoration.

### Neutral
- **Desk** (`#d3cfc4`): The page ground — warm brushed aluminium with a hairline vertical grain and a soft top-light wash.
- **Desk Deep** (`#c7c2b6`): Recessed desk zones and the metrics-ribbon channel (pressed below the desk plane).
- **Panel** (`#edeae2`): The raised module face — the light-bone surface of every card, the hero console, and icon tiles.
- **Panel 2** (`#e5e1d8`): Secondary panel tone for placard chips, credential tags, icon wells, and annunciator bodies.
- **Well** (`#dbd7cd`): Recessed reading wells — inset numeric readouts and image frames pressed into a module. Lightened to hold AA text.
- **Ink** (`#1b1a16`): Primary text; warm near-black.
- **Ink Mid** (`#55514a`): Secondary body copy (~6:1 on panel).
- **Ink Soft** (`#4b463e`): Muted labels and placard text; tuned to pass AA on both panel and well.
- **Line** (`#b8b3a5`): Universal hairline — every border, groove, and divider.
- **Edge Highlight** (`#ffffff`): The top-left bevel highlight and the light lip of engraved grooves. Pure white, used only as a 1px inset/emboss light, never as a fill.

### Named Rules
**The One Signal Rule.** Signal Orange is the only accent hue on the page and appears on a small fraction of any screen — one illuminated key, one payoff word, one active indicator at a time. Its scarcity is the emphasis. If a second competing accent shows up, the system is broken.

**The Function-Only Lamp Rule.** Lamps light up because a state is true, never for decoration. Green = live/open (default `.lamp`); orange (`.lamp-signal`) = flagship/systems marker. There is no third lamp color in the shipped system.

## Typography

**Display Font:** Archivo (with ui-sans-serif, system-ui fallback)
**Body Font:** Archivo (same family; weight and case do the work)
**Label/Mono Font:** Martian Mono (with ui-monospace fallback)

**Character:** Archivo is the machined, tightly-tracked display and UI voice — heavy, condensed-feeling, engineered. Martian Mono is the instrument face: it appears only where a real console would use a monospaced readout — numbers, tabular figures, and engraved placards. The two never blur; if it's a measured value or an engraved label, it's Martian Mono, otherwise it's Archivo.

### Hierarchy
- **Display** (Archivo 800, `clamp(2.75rem, 12vw, 5.75rem)`, line-height 0.86, tracking -0.04em, UPPERCASE): The hero headline only. One per page.
- **Headline** (Archivo 800, `clamp(2.25rem, 5vw, 3.75rem)`, line-height 0.95, tracking -0.03em, UPPERCASE): Section titles, each with a single orange payoff word.
- **Title** (Archivo 700, ~1.125–1.25rem, line-height ~1.2, tracking -0.01em, mixed case): Card and module titles (project names, company names, FAQ questions).
- **Body** (Archivo 400, 15px→17px, line-height ~1.6, Ink Mid): Paragraph copy, capped around max-w-xl/2xl (~40–65ch).
- **Readout** (Martian Mono 700, tabular `tnum`, tracking -0.03em): Every measured value — hero gauge numbers, ribbon metrics, slide indices, stat wells. Sizes range from 11px unit labels to the 80–104px ghosted slide monograms.
- **Label / Placard** (Martian Mono 400, 10.5px, tracking 0.2em, UPPERCASE, Ink Soft, with a `0 1px 0 #ffffff` emboss): Engraved instrument labels — channel tags, status text, field captions.

### Named Rules
**The Tabular Readout Rule.** Any number that represents a measured quantity is set in Martian Mono with `tnum` on and negative tracking. Numbers never appear in Archivo; prose never appears in Martian Mono.

**The Engraved Label Rule.** Placards are Martian Mono, 10.5px, uppercase, 0.2em tracking, with a single white top-emboss text-shadow — as if pressed into the metal. This is the only place letter-spacing goes positive.

## Layout

A centered instrument desk. Content lives in a `max-w-7xl` (80rem) column, narrowed to `max-w-4xl` (56rem) for the FAQ. Horizontal gutters step from `px-5` (20px) on phones to `sm:px-8` (32px). Section rhythm is a consistent `py-20` → `sm:py-24` (80px → 96px), and every major section after the hero opens with a `border-t` hairline in Line — the seams between panels on the desk.

The compositional unit is the module grid: capability rack, workflow, and career all resolve to a four-up grid (`lg:grid-cols-4`, collapsing to `sm:grid-cols-2` then single column), while feature modules (operator, education) use asymmetric two-column splits (~0.82/1.18 and 1.55/1.0). Module-internal gaps run tight-to-snug (`gap-3`/`gap-5`/`gap-6`; 12/20/24px) and vertical stepping uses `mt-5`/`mt-8`/`mt-12` (20/32/48px). The sticky header is a fixed 64px (`h-16`) translucent metal bar with backdrop blur.

The body sets `overflow-x: clip` (not `hidden`, which would kill the sticky header) so no section ever scrolls the page sideways — verified at 390px.

## Elevation & Depth

Depth is physical and tonal, not ambient. There are no free-floating drop-shadow cards. Every surface declares whether it is **raised** (light hits the top-left, shadow gathers bottom-right) or **recessed** (pressed in: dark inset top-left, light lip bottom-right). Drop shadow appears only as a tight, low-spread grounding shadow under raised modules and as a hover response — never as the primary depth cue.

### Shadow Vocabulary
- **Raised module** (`.panel`): `inset 1px 1px 0 #ffffff, inset -1px -1px 0 rgba(120,112,96,.22), 0 1px 0 #ffffff, 0 6px 14px -10px rgba(40,36,28,.5)` — the bevel lifts the face off the desk.
- **Recessed well** (`.panel-inset`): `inset 2px 2px 5px rgba(90,84,70,.28), inset -1px -1px 0 #ffffff` — pressed into the module.
- **Hover lift** (`.panel-lift:hover`): rises `translateY(-2px)`, border becomes Signal Orange, drop shadow deepens to `0 14px 26px -14px` plus a `0 0 0 1px rgba(224,83,29,.28)` signal ring.
- **Corner screws** (`.screws` / `.screws-b`): 7px radial-gradient fasteners pinned into module corners — decoration that reads as fastening, reinforcing "raised, bolted-down hardware."

### Named Rules
**The Bevel-Not-Float Rule.** Surfaces earn depth by beveling into the metal, not by floating on a blurred shadow. Every card is either raised (edge-highlight top-left) or recessed (inset dark top-left). A card with only an outer drop shadow and no bevel is off-world.

## Shapes

Soft-machined rectangles with a small, consistent radius family: recessed wells at 7px (`--radius-sm`), raised panels at 10px (`--radius`), small chips at 6px, icon tiles at 8–12px, and fully-round (999px) pills for buttons, annunciators, and the metrics ribbon. Circles are reserved for lamps (7–9px) and corner screws (7px).

Borders are a single universal hairline — `1px solid` Line — on nearly every element. Dividers are grooves, not plain rules: `.groove-full` is a stacked `1px` Line over `1px` Edge Highlight, reading as a channel engraved into the metal with a lit lower lip. Corner screws are the recurring silhouette signature.

## Components

### Buttons
- **Shape:** Fully rounded pills (999px). Two variants, both physical keys.
- **Primary — Signal Key** (`.btn-signal`): A lit orange key. Vertical gradient (`#ef6a34 → #e0531d → #cf4715`), white legend, `1px #a53c0f` rim, inset top-highlight + inset bottom-shadow, and an outer signal glow. Padding scales 12–24px. Hover brightens ~5% and deepens the glow; active presses down `translateY(1.5px)` into an inset shadow. Used for every "Send a Brief" and "Visit live" action.
- **Secondary — Metal Key** (`.btn-metal`): Brushed-metal pill (gradient `#f3f0ea → #ddd8ce`), Ink legend, Line rim, inset bevel. Hover shifts the border to Ink Soft and lifts `translateY(-1px)`. Used for "See my work" and footer contact keys.
- **Focus:** `focus-visible:ring-2` in Signal Orange on all interactive links/keys.

### Placards & Chips
- **Placard** (`.placard`): The engraved label primitive (see Typography). `.placard-signal` recolors it to Signal Ink.
- **Placard chip:** A placard seated in a `bg-panel-2`, `1px` Line, 6px-radius holder with an inset white top-highlight — used for channel tags (`CH · WORK`) and credential/skill tags (the latter in Archivo mono-numeric at 11px).

### Cards / Containers
- **Corner Style:** 10px raised panels; recessed content wells at 7px.
- **Background:** Panel face; wells and image frames in Well; secondary fills in Panel 2.
- **Depth:** Raised bevel at rest (see Elevation). Interactive cards add `.panel-lift` (hover rise + Signal border + signal ring) and often `.screws` / `.screws-b`.
- **Border:** `1px` Line, universal.
- **Internal Padding:** 20px (`p-5`) standard, up to 48px (`p-12`) for the hero console.

### Annunciator (status pill)
- A rounded metal capsule (`.annunciator`) pairing a live lamp with a placard — the recurring "Open for briefs" indicator. Body is a light metal gradient with inset bevel; the lamp pulses (green `.lamp`, or `.lamp-signal` orange), and the pulse halts under reduced-motion.

### Navigation
- Sticky 64px translucent metal bar (`color-mix` of Panel 2 at 85% + backdrop blur), `1px` Line bottom border. Nav links are placards (Martian Mono, uppercase, 0.2em) that shift to Signal Ink on hover. Brand lockup is the AR monogram in a beveled tile beside the name and a "Station 01" placard. On mobile the nav links collapse; the Signal Key persists as the always-visible conversion action.

### FAQ Accordion
- A single raised panel with `divide-y` Line rows. Each row is a full-width button: Archivo-bold question, a beveled 6px chevron tile that rotates 180° and turns Signal Ink when open. Answer height animates open (0.28s); rows highlight to Panel 2 on hover.

### Signature Component — Instrument Readout Well
- The defining primitive: a recessed `.panel-inset` well holding a Martian Mono tabular value, an orange (Signal Ink) unit tag, and a placard caption — the hero gauges (`4+ YRS`, `5 LIVE`, `AI RDY`), career stat wells, and the scroll-driven carousel progress bar. This is where "measured instrument, not marketing stat" lives.

## Do's and Don'ts

### Do:
- **Do** keep the world in daylight — light metal grounds (Desk `#d3cfc4`, Panel `#edeae2`), warm near-black ink. New surfaces stay light.
- **Do** declare every surface as raised (edge-highlight top-left bevel) or recessed (inset dark top-left). Honor **The Bevel-Not-Float Rule**.
- **Do** ration Signal Orange to one emphasis per view and use Signal Ink (`#a53809`) for any orange text under ~18px. Honor **The One Signal Rule**.
- **Do** set measured numbers in Martian Mono with `tnum`, and prose in Archivo. Honor **The Tabular Readout Rule**.
- **Do** light a lamp only for a true state — green for live/open, orange for flagship. Honor **The Function-Only Lamp Rule**.
- **Do** use `1px` Line hairlines and stacked-emboss grooves for structure; corner screws for machined character.
- **Do** keep one authored "power-on" moment (the hero boot); fade everything else quietly and fully stand down under `prefers-reduced-motion`.

### Don't:
- **Don't** reintroduce the anti-reference: dark/near-black backgrounds, neon emerald/indigo glows, or glowing-terminal/mono-code motifs. The Console is anodized metal in daylight, not a screen.
- **Don't** float a card on an ambient drop shadow without a bevel, or use shadow as the primary depth cue.
- **Don't** introduce a second accent hue, tint surfaces with orange, or use orange as a background fill.
- **Don't** color a lamp for decoration or invent a third lamp state (no amber caution lamp ships — do not add one without a real caution state to drive it).
- **Don't** set body copy in Martian Mono or set measured values in Archivo.
- **Don't** let letter-spacing go positive anywhere except placards (0.2em); display/headline type is tightly tracked (negative).
