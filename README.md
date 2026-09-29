# THIS IS MY ROOM — Desktop Study 01

An interactive self-portrait disguised as an ordinary Windows desktop.

The desktop begins almost normally. Then tiny errors accumulate: a project moves, the recycle bin changes, privacy becomes unavailable, old projects ghost out, the screen overloads, and eventually everything disappears except one file:

**OMAR → Location unavailable.**

> This is not my desktop.  
> This is where I kept myself.

## Run

No build step.

Open `index.html` directly, or run any static server:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Interaction

- Single-click selects an icon.
- Double-click opens its memory/window.
- The piece also runs an automatic ~54 second narrative.
- Press **R** to restart.
- Press **Esc** to close all open windows.

## Source screenshot

The CSS is already wired for Omar's real desktop screenshot.

Put the original screenshot at:

```
assets/desktop-source.png
```

If that file is absent, the piece uses the included stylized London wallpaper fallback.

## Narrative states

1. Ordinary desktop.
2. One project shifts position.
3. Small visual errors.
4. Recycle Bin gains an item.
5. Voice Recorder reports: **ROOM OCCUPIED — PRIVACY UNAVAILABLE**.
6. Projects become ghosts.
7. Icons multiply until there is not enough room.
8. The desktop empties.
9. **OMAR** appears.
10. **Location unavailable.**

## Next pass

- Replace fallback with the exact September 29 desktop screenshot.
- Use real project thumbnails/video/audio fragments inside selected windows.
- Add pointer hesitation and proximity reactions.
- Add sound only after the silent timing works.
- Capture a clean exhibition build at 16:9 and projector resolution.

This repository is currently being used as a scratch build for the piece and can be renamed later.
