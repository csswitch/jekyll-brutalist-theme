---
layout: post
title: "Welcome to The Brutalist — A Raw Jekyll Theme"
date: 2024-01-15
tags: [design, jekyll, typography]
description: "The Brutalist is a newspaper-grid Jekyll theme built on stark contrast, heavy rules, and raw typographic power — no decoration without purpose."
---

**The Brutalist** is a Jekyll theme built on three principles: stark contrast, heavy rules, and raw type.

## The Newspaper Grid

The home page layout is modeled on a newspaper front page — not a blog feed. There's a dominant lead story with a two-column excerpt and a secondary sidebar of latest headlines. Below, a CSS grid fills in the rest.

This forces you to write a strong headline and a proper lead paragraph. The theme does the layout work.

## Typography

All headlines use **Bebas Neue** — a condensed, all-caps display font designed for high visual impact at any size. It's the font tabloids and punk posters use. There's no weight variation — it IS the bold weight.

Body copy uses **Space Grotesk** — a geometric grotesque with a technical personality. Combined, they create a tension: newspaper bluntness meets editorial clarity.

## The One-Color Rule

There is exactly **one accent color**: tabloid red (`#e8001a`).

It appears in:
- The reading progress bar at the top
- The `LATEST` and tag kicker stamps
- Code block left borders and `CODE` labels
- The "Read Full Story" button hover

Everything else is black, off-white, or gray. The red earns its impact through restraint.

## Configuring Your Site

```yaml
brutalist:
  invert: false        # flip to white-on-black
  rule_weight: "heavy" # border thickness: light | medium | heavy
  uppercase: true      # uppercase heading transform
```

Start by changing `title` in `_config.yml` — it's used as the masthead typographic headline.
