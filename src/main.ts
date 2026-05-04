import "./styles.css";

type IconName =
  | "handshake"
  | "compass"
  | "request"
  | "puzzle"
  | "breakdown"
  | "ear"
  | "responsibility"
  | "feedback";

type RichSegment = {
  text: string;
  strong?: boolean;
};

type LessonCard = {
  id: number;
  topic: string;
  color: string;
  accent: string;
  icon: IconName;
  frontLines: string[];
  sourceFront: string;
  sourceBack: string;
  backParagraphs: RichSegment[][];
  bullets: RichSegment[][];
};

const lessons: LessonCard[] = [
  {
    id: 1,
    topic: "Committed conversations",
    color: "#008731",
    accent: "#006a2a",
    icon: "handshake",
    frontLines: ["I shift from", "uncommitted", "to committed", "conversations"],
    sourceFront: "/assets/leaflet-front/1.jpeg",
    sourceBack: "/assets/leaflet-back/1.jpeg",
    backParagraphs: [
      [
        { text: "Commitment", strong: true },
        {
          text: " is a choice to a future where you don't necessarily know yet how to get there. It is manifested through observable "
        },
        { text: "behaviors", strong: true },
        { text: " and actions." }
      ]
    ],
    bullets: [
      [{ text: "If you commit, stick to it OR revoke your commitment." }],
      [
        {
          text: "Tell people what you are committed to. Where do YOU stand regarding the situation?"
        }
      ],
      [{ text: "Align with the decisions of your team even if you disagree." }],
      [{ text: "Own your assessments, opinions and judgements as YOURS." }],
      [
        {
          text: 'If you are saying "yes" to someone, give them a clear "yes", not "I will try" or "I will see what I can do" type of response.'
        }
      ]
    ]
  },
  {
    id: 2,
    topic: "Authenticity",
    color: "#c72012",
    accent: "#9f180e",
    icon: "compass",
    frontLines: [
      "I am being",
      "authentic by",
      "bringing conversations",
      "from the background",
      "to the foreground"
    ],
    sourceFront: "/assets/leaflet-front/2.jpeg",
    sourceBack: "/assets/leaflet-back/2.jpeg",
    backParagraphs: [
      [
        {
          text: "Authenticity is about having your foreground and background conversations be the same."
        }
      ],
      [
        {
          text: "You might feel as if you are taking a risk. So, being authentic often requires some courage."
        }
      ]
    ],
    bullets: [
      [
        {
          text: "Being authentic is the easiest way to build connections and trust with others. It is the foundation for leadership conversations."
        }
      ],
      [
        {
          text: "Others gain the benefit of your wisdom and insights which could make all the difference in the critical moments."
        }
      ],
      [{ text: "Straight talk: tell it like it is, respectfully." }]
    ]
  },
  {
    id: 3,
    topic: "Requests",
    color: "#0496cf",
    accent: "#047aae",
    icon: "request",
    frontLines: ["I transform", "complaints", "into requests"],
    sourceFront: "/assets/leaflet-front/3.jpeg",
    sourceBack: "/assets/leaflet-back/3.jpeg",
    backParagraphs: [
      [
        { text: "Stop carrying your " },
        { text: "negativity", strong: true },
        { text: " around and FORMULATE REQUESTS!" }
      ],
      [
        { text: "Complaints affect the " },
        { text: "mood", strong: true },
        { text: " of an organization. Turn your complaints into " },
        { text: "requests", strong: true },
        { text: "." }
      ]
    ],
    bullets: [
      [{ text: "We all know that complaining doesn't solve anything." }],
      [{ text: "Make specific requests about what's missing." }],
      [
        {
          text: "Raise an issue to the person who can influence the situation (if you don't know to whom, ask your N+1)."
        }
      ],
      [
        {
          text: 'Do not speak about things in a vague or unclear manner. Make clear requests with a "by when" it will be done included! Talk straight to each other.'
        }
      ]
    ]
  },
  {
    id: 4,
    topic: "What's missing",
    color: "#0051a7",
    accent: "#003f86",
    icon: "puzzle",
    frontLines: ['I practice', '"What\'s missing?"', "rather than", '"What\'s wrong?"'],
    sourceFront: "/assets/leaflet-front/4.jpeg",
    sourceBack: "/assets/leaflet-back/4.jpeg",
    backParagraphs: [
      [
        { text: "Once we've " },
        { text: "stopped complaining", strong: true },
        {
          text: " about what's wrong, let's go one step further: look for "
        },
        { text: "WHAT'S MISSING", strong: true },
        { text: " instead." }
      ],
      [
        {
          text: 'What you perceive as "wrong" is actually missing some pieces that will make it '
        },
        { text: "right", strong: true },
        { text: "." }
      ]
    ],
    bullets: [
      [{ text: "Turn reactions into questions." }],
      [{ text: "Approach the person positively with a request for help." }],
      [{ text: "Be clearer on your requirements instead of pointing fingers." }],
      [{ text: 'Find out the "why."' }],
      [
        {
          text: "Instead of what's wrong, identify what's missing in relation to fulfilling a commitment."
        }
      ]
    ]
  },
  {
    id: 5,
    topic: "Breakdowns",
    color: "#c6074b",
    accent: "#a40540",
    icon: "breakdown",
    frontLines: ["I declare", "breakdowns"],
    sourceFront: "/assets/leaflet-front/5.jpeg",
    sourceBack: "/assets/leaflet-back/5.jpeg",
    backParagraphs: [
      [
        {
          text: "Breakdowns are not problems, they REVEAL WHAT'S MISSING to fulfill our commitments."
        }
      ],
      [
        {
          text: "This means raising any blocking point towards fulfilling a commitment, and often, it is the stepping-stone to great achievements."
        }
      ]
    ],
    bullets: [
      [{ text: "Identify risks early." }],
      [{ text: "Ask for help and enable focus on solving the issue." }],
      [{ text: "Notify everyone involved." }],
      [
        {
          text: "Be transparent & comfortable, there is no blame in declaring breakdowns (the blame would be if you don't say anything)."
        }
      ]
    ]
  },
  {
    id: 6,
    topic: "Generous listening",
    color: "#9fcbe1",
    accent: "#79aec7",
    icon: "ear",
    frontLines: [
      "I choose",
      "generous listening",
      "over already",
      "listening, centering,",
      "and granting trust"
    ],
    sourceFront: "/assets/leaflet-front/6.jpeg",
    sourceBack: "/assets/leaflet-back/6.jpeg",
    backParagraphs: [
      [
        { text: "By practicing " },
        { text: "GENEROUS LISTENING", strong: true },
        {
          text: " in your day-to-day life, listening openly without all of our past preconceived notions and ideas, you'll find out how easy it is to truly "
        },
        { text: "understand", strong: true },
        { text: " people." }
      ]
    ],
    bullets: [
      [{ text: "Listen fully, without bias or interpretations." }],
      [{ text: "Don't think about your reply while the other is still talking." }],
      [{ text: "Don't listen to respond, listen to learn!" }],
      [{ text: "Show empathy." }],
      [{ text: "Find the value in each conversation." }],
      [{ text: "Listening doesn't mean waiting for your turn to talk or speaking." }]
    ]
  },
  {
    id: 7,
    topic: "Responsibility",
    color: "#cf8c08",
    accent: "#a87407",
    icon: "responsibility",
    frontLines: [
      "I am committed",
      "to be responsible",
      "for more than I am",
      "accountable for"
    ],
    sourceFront: "/assets/leaflet-front/7.jpeg",
    sourceBack: "/assets/leaflet-back/7.jpeg",
    backParagraphs: [
      [
        { text: "Being " },
        { text: "responsible", strong: true },
        {
          text: " is a choice, it's your ABILITY TO RESPOND (response-ability)."
        }
      ],
      [
        { text: "While being " },
        { text: "accountable", strong: true },
        {
          text: " is an agreement of who will take care of the task, it means people are COUNTING ON YOU (count-on-ability)."
        }
      ]
    ],
    bullets: [
      [
        {
          text: "Take the responsibility to help when you have the expertise (even when you are not accountable)."
        }
      ],
      [
        {
          text: "Sharing accountability in Travel Channels is an opening to new opportunities."
        }
      ],
      [{ text: "Example: Live Travel Space is everyone's responsibility." }]
    ]
  },
  {
    id: 8,
    topic: "Feedback",
    color: "#68108b",
    accent: "#520d70",
    icon: "feedback",
    frontLines: [
      "I give constructive",
      "feedback that is",
      "future-driven and",
      "result-oriented"
    ],
    sourceFront: "/assets/leaflet-front/8.jpeg",
    sourceBack: "/assets/leaflet-back/8.jpeg",
    backParagraphs: [
      [
        { text: "Feedback should always be taken as an " },
        { text: "OPPORTUNITY TO GROW", strong: true },
        {
          text: ", whether it's for highlighting achievements or areas for "
        },
        { text: "improvement", strong: true },
        { text: "." }
      ],
      [
        {
          text: "So, let's stop being afraid of giving and receiving "
        },
        { text: "feedback", strong: true },
        { text: "." }
      ]
    ],
    bullets: [
      [{ text: "Be specific and factual." }],
      [{ text: "Be straight to the point, future-driven and result-oriented." }],
      [{ text: "Don't take it personally, feedback at work is about work." }],
      [{ text: "Be open & positive." }]
    ]
  }
];

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root not found");
}

let selectedIndex: number | null = null;
let previouslyFocused: HTMLElement | null = null;

const iconPaths: Record<IconName, string> = {
  handshake: `
    <path d="M11 39h15v30H11z" />
    <path d="M80 39h15v30H80z" />
    <path d="M26 43h12l12 10h12l18 16" />
    <path d="M80 44H68L55 54 43 67c-4 4-11-2-7-7l13-13" />
    <path d="M27 62h13l10 9c6 5 14 5 20-1" />
  `,
  compass: `
    <circle cx="49" cy="49" r="32" />
    <path d="M49 17v12M49 69v12M17 49h12M69 49h12" />
    <path d="M33 66l17-34 17-10-10 17-34 17z" />
    <circle cx="49" cy="49" r="4" />
  `,
  request: `
    <path d="M16 37h18M11 49h25M17 61h18" />
    <path d="M47 24h29a9 9 0 0 1 9 9v21a9 9 0 0 1-9 9H60L40 80V33a9 9 0 0 1 7-9z" />
    <path d="M63 34v16" />
    <circle cx="63" cy="58" r="2.4" />
  `,
  puzzle: `
    <path d="M17 31h24c0 8 12 8 12 0h10v18c-8 0-8 13 0 13v18H45c0-8-13-8-13 0H17V62c8 0 8-13 0-13V31z" />
    <path d="M64 39h19v19c8 0 8 13 0 13v18H64V76c-8 0-8-13 0-13V39z" />
  `,
  breakdown: `
    <circle cx="30" cy="23" r="6" />
    <circle cx="76" cy="23" r="6" />
    <path d="M22 70V36a8 8 0 0 1 16 0v34" />
    <path d="M68 70V36a8 8 0 0 1 16 0v34" />
    <path d="M11 70h28v-9h28v9h28" />
    <path d="M49 37l14 24H35l14-24z" />
    <path d="M49 45v8" />
    <circle cx="49" cy="57" r="1.8" />
  `,
  ear: `
    <path d="M35 76c12-1 17-9 17-20 0-6-5-11-11-11-7 0-13 5-13 13" />
    <path d="M22 50c0-18 12-32 30-32 17 0 29 12 29 29" />
    <path d="M36 36c3-7 8-11 16-11 11 0 20 9 20 22" />
    <path d="M43 56c0 6-3 11-9 13" />
    <path d="M82 24l10-11M88 38l14-3M84 52l13 6" />
  `,
  responsibility: `
    <circle cx="30" cy="25" r="6" />
    <circle cx="53" cy="15" r="6" />
    <circle cx="76" cy="25" r="6" />
    <path d="M22 72V39a8 8 0 0 1 16 0v33" />
    <path d="M45 72V29a8 8 0 0 1 16 0v43" />
    <path d="M68 72V39a8 8 0 0 1 16 0v33" />
    <path d="M12 72h26v-9h30v9h26" />
  `,
  feedback: `
    <path d="M18 22h48a11 11 0 0 1 11 11v25a11 11 0 0 1-11 11H42L24 84V69h-6a11 11 0 0 1-11-11V33a11 11 0 0 1 11-11z" />
    <path d="M50 43h39a9 9 0 0 1 9 9v21a9 9 0 0 1-9 9H82v13L66 82H50a9 9 0 0 1-9-9V52a9 9 0 0 1 9-9z" fill="currentColor" stroke="none" opacity=".95" />
    <path d="M55 56h27M55 64h27M55 72h20" stroke="var(--line-on-fill)" />
  `
};

function iconSvg(icon: IconName): string {
  return `
    <svg class="card-icon" viewBox="0 0 106 106" aria-hidden="true">
      ${iconPaths[icon]}
    </svg>
  `;
}

function renderRichText(parent: HTMLElement, segments: RichSegment[]) {
  segments.forEach((segment) => {
    const element = document.createElement(segment.strong ? "strong" : "span");
    element.textContent = segment.text;
    parent.append(element);
  });
}

function createFrontCard(card: LessonCard, mode: "tile" | "spread") {
  const article = document.createElement("article");
  article.className = `lesson-card lesson-card--${mode}`;
  article.style.setProperty("--card-color", card.color);
  article.style.setProperty("--card-accent", card.accent);
  article.style.setProperty("--line-on-fill", card.color);

  const iconWrap = document.createElement("div");
  iconWrap.className = "lesson-card__icon";
  iconWrap.innerHTML = iconSvg(card.icon);

  const title = document.createElement(mode === "tile" ? "h2" : "h3");
  title.className = "lesson-card__title";
  card.frontLines.forEach((line) => {
    const span = document.createElement("span");
    span.textContent = line;
    title.append(span);
  });

  const footer = document.createElement("footer");
  footer.className = "lesson-card__footer";
  footer.innerHTML = `
    <span>Transformative</span>
    <span>and Growth Mindset</span>
    <i></i>
    `;
    
  article.append(iconWrap, title, footer);
  return article;
}

function createBackPage(card: LessonCard) {
  const article = document.createElement("article");
  article.className = "book-page book-page--back";
  article.style.setProperty("--card-color", card.color);
  article.style.setProperty("--card-accent", card.accent);

  const label = document.createElement("p");
  label.className = "book-page__label";
  label.textContent = `Lesson ${card.id}`;

  const title = document.createElement("h3");
  title.className = "book-page__topic";
  title.textContent = card.topic;

  const copy = document.createElement("div");
  copy.className = "book-page__copy";
  card.backParagraphs.forEach((paragraph) => {
    const p = document.createElement("p");
    renderRichText(p, paragraph);
    copy.append(p);
  });

  const list = document.createElement("ul");
  list.className = "book-page__bullets";
  card.bullets.forEach((bullet) => {
    const item = document.createElement("li");
    renderRichText(item, bullet);
    list.append(item);
  });

  const sourceNote = document.createElement("p");
  sourceNote.className = "book-page__source";
  // sourceNote.textContent = `Source: ${card.sourceFront} + ${card.sourceBack}`;

  article.append(label, title, copy, list, sourceNote);
  return article;
}

function renderApp() {
  if (!app) return;
  app.innerHTML = "";

  const shell = document.createElement("main");
  shell.className = "site-shell";

  const hero = document.createElement("section");
  hero.className = "hero";
  hero.innerHTML = `
    <div class="hero__copy">
      <p class="eyebrow">Growth Mindset Leaflet</p>
      <h1>Eight practical shifts for a Transformative and Growth Mindset</h1>
      <p class="hero__intro">A playful digital card deck inspired by the physical Transformational Leadership Development leaflet.</p>
    </div>
    <div class="hero__fastener" aria-hidden="true"></div>
  `;

  const grid = document.createElement("section");
  grid.className = "card-grid";
  grid.setAttribute("aria-label", "Growth mindset lesson cards");

  lessons.forEach((card, index) => {
    const tile = createFrontCard(card, "tile");
    tile.classList.add("card-button");
    tile.style.setProperty("--tilt", `${index % 2 === 0 ? -1 : 1}deg`);
    tile.setAttribute("role", "button");
    tile.setAttribute("tabindex", "0");
    tile.setAttribute("aria-label", `Open ${card.topic} lesson`);
    tile.addEventListener("click", () => openLesson(index));
    tile.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLesson(index);
      }
    });
    grid.append(tile);
  });

  shell.append(hero, grid);
  app.append(shell);
}

function openLesson(index: number) {
  selectedIndex = index;
  previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  document.body.classList.add("modal-open");
  renderModal();
}

function closeLesson() {
  const overlay = document.querySelector(".modal-overlay");
  overlay?.remove();
  selectedIndex = null;
  document.body.classList.remove("modal-open");
  previouslyFocused?.focus();
}

function moveLesson(direction: 1 | -1) {
  if (selectedIndex === null) {
    return;
  }

  selectedIndex = (selectedIndex + direction + lessons.length) % lessons.length;
  renderModal();
}

function renderModal() {
  const existing = document.querySelector(".modal-overlay");
  existing?.remove();

  if (selectedIndex === null) {
    return;
  }

  const card = lessons[selectedIndex];
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-labelledby", "book-title");

  const modal = document.createElement("div");
  modal.className = "book-modal";

  const controls = document.createElement("div");
  controls.className = "book-controls";

  const prev = document.createElement("button");
  prev.className = "icon-button";
  prev.type = "button";
  prev.setAttribute("aria-label", "Previous lesson");
  prev.innerHTML = `<span aria-hidden="true">&lsaquo;</span>`;
  prev.addEventListener("click", () => moveLesson(-1));

  const title = document.createElement("div");
  title.className = "book-title-wrap";
  title.innerHTML = `
    <p>Card ${card.id} of ${lessons.length}</p>
    <h2 id="book-title">${card.topic}</h2>
  `;

  const next = document.createElement("button");
  next.className = "icon-button";
  next.type = "button";
  next.setAttribute("aria-label", "Next lesson");
  next.innerHTML = `<span aria-hidden="true">&rsaquo;</span>`;
  next.addEventListener("click", () => moveLesson(1));

  const close = document.createElement("button");
  close.className = "icon-button icon-button--close";
  close.type = "button";
  close.setAttribute("aria-label", "Close lesson");
  close.innerHTML = `<span aria-hidden="true">&times;</span>`;
  close.addEventListener("click", closeLesson);

  controls.append(prev, title, next, close);

  const spread = document.createElement("div");
  spread.className = "book-spread";
  spread.append(createFrontCard(card, "spread"), createBackPage(card));

  modal.append(controls, spread);
  overlay.append(modal);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeLesson();
    }
  });

  document.body.append(overlay);
  close.focus();
}

document.addEventListener("keydown", (event) => {
  if (selectedIndex === null) {
    return;
  }

  if (event.key === "Escape") {
    event.preventDefault();
    closeLesson();
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    moveLesson(1);
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    moveLesson(-1);
  }

  if (event.key === "Tab") {
    const overlay = document.querySelector<HTMLElement>(".modal-overlay");
    const focusable = overlay
      ? Array.from(overlay.querySelectorAll<HTMLElement>("button, [href], [tabindex]:not([tabindex='-1'])"))
      : [];

    if (focusable.length === 0) {
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

renderApp();
