import { lessons } from "./content/lessons";
import { siteCopy } from "./content/site-copy";
import { createBookModal } from "./ui/book-modal";
import { createFrontCard } from "./ui/lesson-card";

let selectedIndex: number | null = null;
let previouslyFocused: HTMLElement | null = null;

export function renderApp(root: HTMLElement) {
  root.innerHTML = "";

  const shell = document.createElement("main");
  shell.className = "site-shell";
  shell.append(createHero(), createCardGrid());

  root.append(shell);
  document.addEventListener("keydown", handleGlobalKeydown);
}

function createHero() {
  const hero = document.createElement("section");
  hero.className = "hero";

  const copy = document.createElement("div");
  copy.className = "hero__header";

  const eyebrow = document.createElement("p");
  eyebrow.className = "eyebrow";
  eyebrow.textContent = siteCopy.eyebrow;

  const title = document.createElement("h1");
  title.textContent = siteCopy.title;

  const intro = document.createElement("p");
  intro.className = "hero__intro";
  intro.textContent = siteCopy.intro;

  const fastener = document.createElement("div");
  fastener.className = "hero__fastener";
  fastener.setAttribute("aria-hidden", "true");

  copy.append(eyebrow, title, intro);
  hero.append(copy, fastener);
  return hero;
}

function createCardGrid() {
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

  return grid;
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

  const overlay = createBookModal({
    card: lessons[selectedIndex],
    totalCards: lessons.length,
    onClose: closeLesson,
    onNext: () => moveLesson(1),
    onPrevious: () => moveLesson(-1)
  });

  document.body.append(overlay);
  document.querySelector<HTMLElement>(".icon-button--close")?.focus();
}

function handleGlobalKeydown(event: KeyboardEvent) {
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
    keepFocusInsideModal(event);
  }
}

function keepFocusInsideModal(event: KeyboardEvent) {
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
