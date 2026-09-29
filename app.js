const desktop = document.getElementById("desktop");
const icons = [...document.querySelectorAll(".desktop-icon:not(.omar-icon)")];
const omarIcon = document.getElementById("omarIcon");
const windowLayer = document.getElementById("windowLayer");
const glitchText = document.getElementById("glitchText");
const restart = document.getElementById("restart");

let timers = [];
let startedAt = performance.now();

const content = {
  room: {
    title: "THE-ROOM...",
    heading: "The room remembers wrong.",
    body: "A room can keep fragments without keeping the whole person. Movement becomes evidence. Memory becomes reconstruction.",
    system: "STATUS: present / incomplete"
  },
  pc: {
    title: "This PC",
    heading: "This PC",
    body: "The machine is not a tool in this piece. It is the place where unfinished versions of the same person keep living together.",
    system: "OWNER: OMAR  •  LOCATION: unresolved"
  },
  tor: {
    title: "Tor Browser",
    heading: "Private window.",
    body: "Privacy exists here as a button before it exists as a room.",
    system: "NETWORK: connected  •  ROOM: shared"
  },
  vlc: {
    title: "VLC media player",
    heading: "Playback history",
    body: "Things can be replayed perfectly. That does not mean they are remembered correctly.",
    system: "00:00:00 / 00:00:00"
  },
  fokhara: {
    title: "Fokhara",
    heading: "still here",
    body: "Not a dead folder. Not a finished object. A piece of attention stored under a name.",
    system: "LAST MODIFIED: more than once"
  },
  nova: {
    title: "nova",
    heading: "unfinished ≠ abandoned",
    body: "Some projects stop being products and become timestamps. They prove what a person was trying to become at that moment.",
    system: "PROCESS STILL RUNNING"
  },
  wavezero: {
    title: "wavezero-dev",
    heading: "CODE FROZEN",
    body: "A frozen version can still carry heat from the person who made it.",
    system: "BUILD: preserved"
  },
  blender: {
    title: "Blender",
    heading: "make another world",
    body: "The easiest place to move a wall is the one you modeled yourself.",
    system: "RENDER DEVICE: imagination"
  },
  vscode: {
    title: "Visual Studio Code",
    heading: "build first",
    body: "Work can become architecture. Architecture can become shelter. Shelter can become a loop.",
    system: "TERMINAL: waiting for input"
  },
  github: {
    title: "GitHub",
    heading: "commits",
    body: "A public history of making things while the private life around them stays almost unchanged.",
    system: "CONTRIBUTIONS: visible  •  LOCATION: not committed"
  },
  camera: {
    title: "Camera Roll",
    heading: "evidence",
    body: "The camera remembers the surface. The desktop remembers what was open next to it.",
    system: "PHOTO FOUND / CONTEXT MISSING"
  },
  recorder: {
    title: "Voice Recorder",
    heading: "Microphone ready.",
    body: "The track can be recorded. The room cannot be made empty from inside the software.",
    system: "ROOM OCCUPIED — PRIVACY UNAVAILABLE"
  },
  trash: {
    title: "Recycle Bin",
    heading: "Deleted?",
    body: "Things thrown away remain indexed by the life that created them.",
    system: "0 items permanently removed"
  },
  photos: {
    title: "Photos-1-001",
    heading: "face / file",
    body: "A face can become another icon among folders, apps, drafts, experiments, and unfinished plans.",
    system: "SUBJECT DETECTED"
  },
  obs: {
    title: "OBS Studio",
    heading: "recording the screen",
    body: "When the screen becomes the room, recording the screen becomes a kind of self-portrait.",
    system: "CAPTURE SOURCE: DISPLAY"
  },
  film: {
    title: "film-analysis",
    heading: "watching / making",
    body: "Some folders are research. Some are escape. Most are both.",
    system: "CLASSIFICATION FAILED"
  }
};

function clearTimers() {
  timers.forEach(clearTimeout);
  timers = [];
}

function later(ms, fn) {
  timers.push(setTimeout(fn, ms));
}

function flash(text) {
  glitchText.textContent = text;
  glitchText.classList.remove("show");
  void glitchText.offsetWidth;
  glitchText.classList.add("show");
}

function openWindow(data, final = false) {
  const article = document.createElement("article");
  article.className = "window";
  article.innerHTML = final ? `
    <div class="window-titlebar">
      <strong>OMAR</strong>
      <button class="window-close" aria-label="Close">×</button>
    </div>
    <div class="window-body final-card">
      <div class="tiny">WINDOWS CANNOT FIND THE REQUESTED LOCATION</div>
      <div class="location">Location unavailable.</div>
      <p class="sub">The user exists. The place is missing.</p>
      <div class="system-msg">THIS IS NOT MY DESKTOP.<br>THIS IS WHERE I KEPT MYSELF.</div>
    </div>` : `
    <div class="window-titlebar">
      <strong>${data.title}</strong>
      <button class="window-close" aria-label="Close">×</button>
    </div>
    <div class="window-body">
      <h2>${data.heading}</h2>
      <p>${data.body}</p>
      <div class="system-msg">${data.system}</div>
    </div>`;

  article.querySelector(".window-close").addEventListener("click", () => article.remove());
  windowLayer.appendChild(article);
  return article;
}

function createClones(count = 22) {
  const source = icons.filter(el => !el.classList.contains("trash"));
  for (let i = 0; i < count; i++) {
    const original = source[i % source.length];
    const clone = original.cloneNode(true);
    clone.classList.add("clone");
    clone.removeAttribute("data-id");
    clone.style.setProperty("--x", (4 + ((i * 13) % 88)).toString());
    clone.style.setProperty("--y", (5 + ((i * 17) % 72)).toString());
    clone.style.transform = `rotate(${(i % 7) - 3}deg) scale(${0.78 + ((i % 5) * .08)})`;
    document.getElementById("icons").appendChild(clone);
  }
}

function removeClones() {
  document.querySelectorAll(".desktop-icon.clone").forEach(el => el.remove());
}

function startTimeline() {
  clearTimers();
  removeClones();
  windowLayer.innerHTML = "";
  desktop.className = "desktop";
  icons.forEach(el => {
    el.classList.remove("wrong", "ghost", "shake");
    el.style.opacity = "";
    el.style.transform = "";
  });
  omarIcon.classList.remove("show");
  startedAt = performance.now();

  later(5000, () => {
    document.querySelector('[data-id="nova"]')?.classList.add("wrong");
  });

  later(9000, () => {
    flash("something moved");
    document.querySelector('[data-id="camera"]')?.classList.add("shake");
  });

  later(13000, () => {
    const trash = document.querySelector('[data-id="trash"] span:last-child');
    if (trash) trash.textContent = "Recycle Bin (1)";
  });

  later(17000, () => {
    flash("ROOM OCCUPIED");
    document.querySelector('[data-id="recorder"]')?.classList.add("wrong");
  });

  later(23000, () => {
    ["fokhara","nova","wavezero"].forEach(id =>
      document.querySelector(`[data-id="${id}"]`)?.classList.add("ghost")
    );
  });

  later(29000, () => {
    desktop.classList.add("stage-overload");
    createClones();
    flash("TOO MANY WINDOWS / NOT ENOUGH ROOM");
  });

  later(39000, () => {
    [...document.querySelectorAll(".desktop-icon.clone")].forEach((el, i) => {
      el.style.opacity = i % 3 === 0 ? ".1" : ".55";
      el.style.transform += ` translate(${(i%2?1:-1)*12}px,${(i%4)*4}px)`;
    });
  });

  later(47000, () => {
    desktop.classList.add("stage-empty");
    flash("where did everything go");
  });

  later(53500, () => {
    removeClones();
    omarIcon.classList.add("show");
    desktop.classList.add("stage-final");
  });
}

icons.forEach(icon => {
  icon.addEventListener("dblclick", () => {
    const id = icon.dataset.id;
    if (content[id]) openWindow(content[id]);
  });
  icon.addEventListener("click", () => {
    icons.forEach(i => i.removeAttribute("aria-current"));
    icon.setAttribute("aria-current", "true");
  });
});

omarIcon.addEventListener("dblclick", () => openWindow({}, true));
omarIcon.addEventListener("click", () => openWindow({}, true));

restart.addEventListener("click", startTimeline);
document.addEventListener("keydown", event => {
  if (event.key.toLowerCase() === "r") startTimeline();
  if (event.key === "Escape") windowLayer.innerHTML = "";
});

startTimeline();