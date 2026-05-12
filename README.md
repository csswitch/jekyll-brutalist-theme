# The Brutalist — Newspaper-Grid Jekyll Theme

[![MIT License](https://img.shields.io/badge/license-MIT-0a0a0a.svg)](LICENSE)
[![Jekyll](https://img.shields.io/badge/jekyll-4.3-0a0a0a.svg)](https://jekyllrb.com)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-compatible-0a0a0a.svg)](https://pages.github.com)

> A raw, typographically bold Jekyll theme inspired by newspaper front pages and brutalist web design. No rounded corners. No gradients. Pure structure.

**[Live Demo →](https://csswitch.github.io/jekyll-brutalist-theme)**

---

## ✨ Features

- 📰 **Newspaper front-page layout** — dominant lead story + sidebar headlines + grid
- 🔠 **Bebas Neue headlines** — condensed tabloid display font
- 📏 **Heavy rules** — structural 6px borders, double-rule section separators
- 🔴 **One accent color** — tabloid red, used exactly where it matters
- 🔲 **Invert hover** — clean white-on-black link hover, zero decoration
- 🏷️ **Tag stamps** — outlined monospace tag chips
- 📱 **Fully responsive** — mobile-first masthead with MENU toggle
- ⚡ **Zero dependencies** — vanilla JS only
- 🐙 **GitHub Pages compatible**

## 🚀 Quick Start

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_BLOG.git
cd YOUR_BLOG
bundle install
bundle exec jekyll serve --livereload
```

## ⚙️ Configuration

```yaml
brutalist:
  invert: false          # true = white-on-black mode
  rule_weight: "heavy"   # light | medium | heavy
  uppercase: true        # uppercase all headings
```

## 📁 Structure

```
jekyll-brutalist-theme/
├── _config.yml
├── _layouts/
│   ├── default.html   ← masthead, footer, fonts
│   ├── home.html      ← newspaper grid layout
│   ├── post.html      ← heavy-rule header, post body
│   └── page.html
├── _sass/
│   ├── _variables.scss   ← monochrome palette, rule tokens
│   ├── _base.scss        ← typography, code, blockquote
│   ├── _layout.scss      ← masthead, footer, responsive
│   └── _components.scss  ← newspaper grid, cards, tags
├── assets/
│   ├── css/main.scss
│   └── js/brutalist.js
└── _posts/
```

## 📄 License

MIT © [csswitch](https://github.com/csswitch)

---

Made with 🖤 by [csswitch](https://github.com/csswitch) — distinctive Jekyll themes for developers.
