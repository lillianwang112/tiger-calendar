# 🐯 TigerCalendar

A personal calendar and task manager with the aesthetic of a Princeton tiger.

**Live:** `https://<your-username>.github.io/tiger-calendar/`

## Features

- **Day / Week / Month / Year** views
- **Drag-to-create** events on the time grid (day & week views)
- **Tasks + Events** — separate types with a combined sidebar view
- **Category filtering**
- **Dark / Light** theme toggle
- **Keyboard shortcuts**: `D` `W` `M` `Y` views · `T` today · `←` `→` navigate · `N` new event · `[` toggle sidebar
- **localStorage persistence** — your data stays in your browser
- **Mini calendar** in sidebar for quick date navigation
- **Now line** — red indicator showing current time
- **PWA-ready** — add to home screen on mobile

## Tech

Zero build step. Single `index.html` using:
- React 18 via CDN
- Babel Standalone for JSX compilation
- Google Fonts (DM Serif Display, DM Mono, DM Sans)
- localStorage for persistence

## Setup

Just open `index.html` in a browser, or deploy to GitHub Pages (see below).
