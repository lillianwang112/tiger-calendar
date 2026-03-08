# 🐯 TigerCalendar

A full-featured calendar and task manager built for Princeton students — with course scheduling, academic calendar integration, cloud sync, and the soul of a tiger.

**Live:** [lillianwang112.github.io/tiger-calendar](https://lillianwang112.github.io/tiger-calendar/)

---

## Features

### Views
- **Day / Week / Month / Year** — switch instantly with keyboard or buttons
- **Time grid** (day & week) with configurable hour height via pinch-to-zoom
- **Now line** — live red indicator showing the current time
- **Mini calendar** in sidebar for quick date jumping

### Creating Events & Tasks
- **Click to create** — tap any time slot to place a new event at that time
- **Drag-to-create** on desktop — click and drag to set start and end time
- **Long-press-to-drag** on mobile — hold 300ms, then drag to set duration (no accidental scrolling)
- **All-day events** with multi-day span support
- **Recurring events** — daily, weekly, monthly, annually, every weekday, or fully custom (every N days/weeks/months/years, with specific days-of-week and end conditions)
- **Tasks** — separate from events, with a freeform deadline field
- **Location field** on events, shown inline on the time grid

### Course & Academic Integration
- **Course setup wizard** — add courses with lecture, precept, lab, and drill sessions; per-day custom times supported
- **Semester selector** — Spring 2026 and Fall 2026 built in, with class dates, breaks, and reading periods pre-loaded
- **Academic calendar overlay** — Princeton academic milestones (add/drop, midterms, dean's date, finals, commencement) shown as all-day events
- **US Holidays overlay** — toggle on/off
- **Exams & Assignments tracker** — log exams and problem sets per course; these auto-sync as tasks
- **Study block generator** — quickly create focused study sessions tied to a course

### Sidebar & Filtering
- **Combined sidebar** — upcoming events and tasks in one scrollable view
- **Category filtering** — toggle any category or course on/off
- **Time insights** — hours scheduled per category this week, with a visual bar chart
- **Weekly load chart** — visualizes your event density across the week

### Personalization
- **Dark / Light** theme
- **Week start day** setting (Sunday or Monday)
- **Color-coded categories** — courses each get a unique color automatically

### Sync & Persistence
- **localStorage** — all data saved locally in your browser automatically
- **Google account sync** via Firebase — sign in to back up and sync across devices
- **Offline-capable** — works without a connection once loaded

### Mobile & PWA
- **PWA-ready** — add to home screen on iOS and Android for a native app feel
- **Touch-optimized** — long-press-to-drag, tap-to-preview, pinch-to-zoom the time grid
- **Responsive layout** — sidebar collapses on small screens; FAB for quick event creation

### Keyboard Shortcuts
| Key | Action |
|-----|--------|
| `D` `W` `M` `Y` | Switch view |
| `T` | Jump to today |
| `←` `→` | Navigate forward/back |
| `N` | New event |
| `[` | Toggle sidebar |

---

## Tech

Zero build step. Single `index.html` using:

- **React 18** via CDN
- **Babel Standalone** for in-browser JSX compilation
- **Firebase** (Auth + Firestore) for optional Google sign-in and cloud sync
- **Google Fonts** — DM Serif Display, DM Mono, DM Sans
- **localStorage** for offline-first persistence
- **Service Worker** for PWA caching and offline support

---
