# 🖥️ macOS Portfolio — Kunal Chakraborty

A macOS-inspired developer portfolio built with React, GSAP, and Zustand. It simulates a desktop OS experience complete with draggable windows, a dock, a boot splash screen, and interactive apps.

---

## ✨ Features

- **macOS-style desktop** — wallpaper, dock, draggable windows, window controls
- **Boot splash screen** — animated terminal boot sequence with idle, boot, and about phases
- **Variable font hover** — Gaussian magnetic weight effect on the welcome text using GSAP
- **Draggable windows** — every app window is draggable and focusable via GSAP Draggable
- **Window management** — open, close, focus, and z-index stacking via Zustand
- **Built-in apps** — Safari (blog), Terminal (tech stack), Finder, Photos, Contacts, Resume viewer
- **Responsive** — desktop/tablet optimized with a graceful small-screen fallback

---

## 🏗️ Architecture

### The Main Attraction — `WindowWrapper` HOC

The core of this project is a **Higher Order Component** that turns any React component into a fully managed, draggable, animated OS window.

```
src/hoc/WindowWrapper.jsx
```

**What it does:**

Every app (Safari, Terminal, Finder, etc.) is wrapped with `WindowWrapper(Component, windowKey)`. This HOC injects:

1. **GSAP enter animation** — scales and fades in from `scale: 0.8, opacity: 0` when opened
2. **GSAP Draggable** — makes the window draggable by its `#window-header`
3. **Focus on click** — calls `focusWindow()` on mousedown, bringing the window to the front via z-index
4. **Show/hide** — syncs `display: block/none` with the `isOpen` state from the window store
5. **`displayName`** — preserves the component name in React DevTools for easy debugging

```jsx
// Usage — wrap any component to make it a window
const SafariWindow   = WindowWrapper(Safari,   "safari")
const TerminalWindow = WindowWrapper(Terminal, "terminal")
const FinderWindow   = WindowWrapper(Finder,   "finder")
```

**Why HOC over a wrapper component?**

The HOC pattern was chosen because each window needs both behaviour (drag, animate, focus) AND its own DOM identity (`id={windowKey}`). A render-prop or context approach would require every app component to know about the window system. With the HOC, app components stay completely unaware — they just render their UI.

---

### Window Store — `src/store/window.js`

Built with **Zustand + Immer**. Manages the state of every window:

| Action | Description |
|---|---|
| `openWindow(key, data?)` | Opens a window, assigns the next z-index, optionally passes data |
| `closeWindow(key)` | Closes a window, resets z-index and data |
| `focusWindow(key)` | Bumps the window's z-index to the top |

Z-index is managed with a simple incrementing counter (`nextZIndex`), so the last focused window is always on top — exactly like a real OS.

```js
// Window config shape (defined in constants)
{
  safari:   { isOpen: false, zIndex: 10, data: null },
  terminal: { isOpen: false, zIndex: 10, data: null },
  finder:   { isOpen: false, zIndex: 10, data: null },
  // ...
}
```

---

### Location Store — `src/store/location.js`

Also Zustand + Immer. Tracks the active "location" shown in the Finder sidebar or used for contextual rendering.

| Action | Description |
|---|---|
| `setActiveLocation(location)` | Switch to a location |
| `resetActiveLocation()` | Reset to the default (`work`) |

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| React 18 | UI framework |
| GSAP + Draggable | Window animations and drag behaviour |
| Zustand + Immer | Global window and location state |
| Tailwind CSS v4 | Styling via `@layer` and `@apply` |
| Vite | Build tool with path alias support |
| EmailJS | Contact form email delivery |

---

## 📁 Project Structure

```
src/
├── components/        # Shared UI components (Dock, Nav, etc.)
├── constants/         # WINDOW_CONFIG, skillsData, locations
├── hoc/
│   └── WindowWrapper.jsx   # ← The main HOC
├── store/
│   ├── window.js      # Window open/close/focus state
│   └── location.js    # Active location state
├── windows/           # Individual app components
│   ├── Safari.jsx
│   ├── Terminal.jsx
│   ├── Finder.jsx
│   ├── Contact.jsx
│   ├── Photos.jsx
│   └── Resume.jsx
└── App.jsx
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## 🔑 Environment Variables

Create a `.env` file in the root:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Get your keys at [emailjs.com](https://emailjs.com).

---

## 📦 Deployment

Deployed on **Vercel**. Add the three `VITE_APP_EMAILJS_*` variables in your Vercel project settings before deploying.

```bash
git push origin main  # Vercel auto-deploys on push
```

---

## 👤 Author

**Kunal Chakraborty**
[LinkedIn](www.linkedin.com/in/kunal-chakraborty-32274534b)
