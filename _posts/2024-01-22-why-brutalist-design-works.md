---
layout: post
title: "Why Brutalist Web Design Works"
date: 2024-01-22
tags: [design, css, typography, opinion]
description: "Brutalist web design isn't broken design — it's a deliberate rejection of decoration in favor of structure, contrast, and typographic truth."
---

Brutalist web design gets dismissed as ugly. It's usually the opposite — it's the most honest form of web design there is.

## What Brutalism Actually Means

Brutalism in architecture means exposing structural materials — raw concrete, visible steel, unfinished surfaces. There's no cladding. What you see is what holds the building up.

In web design, brutalism means the same thing:

> **The structure IS the design.**

Links are underlined because they're links. Borders are thick because they separate content. Typography is large because it's important. Nothing pretends to be something it isn't.

## Why Heavy Rules Work

A 6px border isn't aggressive — it's communicative. Thick rules between sections say: *this section ends here*. You don't need white space, drop shadows, or card borders to communicate containment when you have a rule.

```css
h2 {
  border-top: 6px solid #0a0a0a;
  padding-top: 0.5rem;
}
```

That's structural typography. The rule IS the heading marker.

## The Newspaper Invented This

Newspapers solved content hierarchy before the web existed. Lead story. Secondary stories. Pull quotes. Datelines. Every typographic convention a developer blog needs was already solved in 1920.

The Brutalist theme borrows all of it:
- **Bebas Neue**: condensed display — the tabloid headline font
- **Heavy lead card**: dominant story with excerpt columns
- **Dateline meta**: `BYLINE — DATE` in small-caps mono
- **Double rule**: the classic thick-thin newspaper section separator

## The Honest Hover

The Brutalist hover state is an inversion — black background, white text. No color transition, no box-shadow, no transform. Just a reversal of contrast.

```css
a:hover {
  color: white;
  background: black;
  text-decoration: none;
}
```

It reads instantly. It costs nothing. It's the most legible hover state on the web.
