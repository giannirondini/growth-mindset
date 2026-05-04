import type { LessonCard } from "../types";
import { createBackPage, createFrontCard } from "./lesson-card";

type BookModalOptions = {
  card: LessonCard;
  totalCards: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
};

export function createBookModal(options: BookModalOptions) {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-labelledby", "book-title");

  const modal = document.createElement("div");
  modal.className = "book-modal";

  const controls = createBookControls(options);
  const spread = document.createElement("div");
  spread.className = "book-spread";
  spread.setAttribute("aria-label", "Flip card");
  spread.append(createFrontCard(options.card, "spread"), createBackPage(options.card));

  const cue = document.createElement("div");
  cue.className = "mobile-flip-cue";
  cue.setAttribute("aria-hidden", "true");
  cue.innerHTML = `<span>&#8635;</span>`;
  spread.append(cue);

  if (isMobileFlipLayout()) {
    spread.setAttribute("role", "button");
    spread.setAttribute("tabindex", "0");
  }

  spread.addEventListener("click", () => {
    if (isMobileFlipLayout()) {
      spread.classList.toggle("book-spread--flipped");
    }
  });
  spread.addEventListener("keydown", (event) => {
    if (!isMobileFlipLayout() || (event.key !== "Enter" && event.key !== " ")) {
      return;
    }

    event.preventDefault();
    spread.classList.toggle("book-spread--flipped");
  });

  modal.append(controls, spread);
  overlay.append(modal);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      options.onClose();
    }
  });

  return overlay;
}

function createBookControls(options: BookModalOptions) {
  const controls = document.createElement("div");
  controls.className = "book-controls";

  const previous = createIconButton("&lsaquo;", "Previous lesson", options.onPrevious);
  const title = document.createElement("div");
  title.className = "book-title-wrap";

  const count = document.createElement("p");
  count.textContent = `Card ${options.card.id} of ${options.totalCards}`;

  const heading = document.createElement("h2");
  heading.id = "book-title";
  heading.textContent = options.card.topic;

  title.append(count, heading);

  const next = createIconButton("&rsaquo;", "Next lesson", options.onNext);
  const close = createIconButton("&times;", "Close lesson", options.onClose, [
    "icon-button--close"
  ]);

  controls.append(previous, title, next, close);
  return controls;
}

function createIconButton(
  symbol: string,
  label: string,
  onClick: () => void,
  extraClasses: string[] = []
) {
  const button = document.createElement("button");
  button.className = ["icon-button", ...extraClasses].join(" ");
  button.type = "button";
  button.setAttribute("aria-label", label);
  button.innerHTML = `<span aria-hidden="true">${symbol}</span>`;
  button.addEventListener("click", onClick);
  return button;
}

function isMobileFlipLayout() {
  return window.matchMedia("(max-width: 840px)").matches;
}
