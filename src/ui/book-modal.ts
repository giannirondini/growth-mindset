import type { LessonCard } from "../types";
import { createBackPage, createFrontCard } from "./lesson-card";

type BookModalOptions = {
  card: LessonCard;
  totalCards: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
};

type SwipeNavigationOptions = Pick<BookModalOptions, "onNext" | "onPrevious"> & {
  onSwipeIntent: () => void;
};

const SWIPE_DISTANCE = 48;
const SWIPE_DRAG_LIMIT = 72;
const SWIPE_EXIT_DURATION = 50;
const SWIPE_MAX_VERTICAL_DRIFT = 80;

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
  spread.setAttribute("aria-label", "Flip card. Swipe left or right to change lesson.");
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

  let skipNextFlip = false;
  addSwipeNavigation(spread, {
    onSwipeIntent: () => {
      skipNextFlip = true;
      window.setTimeout(() => {
        skipNextFlip = false;
      }, SWIPE_EXIT_DURATION * 2);
    },
    onNext: () => {
      skipNextFlip = true;
      options.onNext();
    },
    onPrevious: () => {
      skipNextFlip = true;
      options.onPrevious();
    }
  });

  spread.addEventListener("click", () => {
    if (skipNextFlip || spread.classList.contains("book-spread--swipe-exiting")) {
      skipNextFlip = false;
      return;
    }

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

function addSwipeNavigation(
  spread: HTMLElement,
  options: SwipeNavigationOptions
) {
  let activePointerId: number | null = null;
  let hadSwipeIntent = false;
  let startX = 0;
  let startY = 0;

  spread.addEventListener("pointerdown", (event) => {
    if (!isMobileFlipLayout() || event.button !== 0) {
      return;
    }

    activePointerId = event.pointerId;
    hadSwipeIntent = false;
    startX = event.clientX;
    startY = event.clientY;
    spread.setPointerCapture(event.pointerId);
  });

  spread.addEventListener("pointermove", (event) => {
    if (activePointerId !== event.pointerId || !isMobileFlipLayout()) {
      return;
    }

    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;

    if (Math.abs(deltaX) < 8 || Math.abs(deltaX) <= Math.abs(deltaY)) {
      resetSwipePreview(spread);
      return;
    }

    const previewX = clamp(deltaX, -SWIPE_DRAG_LIMIT, SWIPE_DRAG_LIMIT);
    hadSwipeIntent = true;
    spread.classList.add("book-spread--swipe-dragging");
    spread.style.setProperty("--swipe-x", `${previewX}px`);
    spread.style.setProperty("--swipe-rotate", `${previewX / 24}deg`);
  });

  spread.addEventListener("pointerup", (event) => {
    if (activePointerId !== event.pointerId) {
      return;
    }

    if (!isMobileFlipLayout()) {
      activePointerId = null;
      hadSwipeIntent = false;
      releasePointer(spread, event.pointerId);
      resetSwipePreview(spread);
      return;
    }

    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;
    activePointerId = null;
    releasePointer(spread, event.pointerId);

    if (Math.abs(deltaX) < SWIPE_DISTANCE || Math.abs(deltaY) > SWIPE_MAX_VERTICAL_DRIFT) {
      if (hadSwipeIntent) {
        options.onSwipeIntent();
      }
      hadSwipeIntent = false;
      resetSwipePreview(spread);
      return;
    }

    if (Math.abs(deltaX) <= Math.abs(deltaY)) {
      if (hadSwipeIntent) {
        options.onSwipeIntent();
      }
      hadSwipeIntent = false;
      resetSwipePreview(spread);
      return;
    }

    hadSwipeIntent = false;
    event.preventDefault();
    if (deltaX < 0) {
      finishSwipe(spread, "next", options.onNext);
    } else {
      finishSwipe(spread, "previous", options.onPrevious);
    }
  });

  spread.addEventListener("pointercancel", (event) => {
    if (activePointerId === event.pointerId) {
      activePointerId = null;
      hadSwipeIntent = false;
      releasePointer(spread, event.pointerId);
      resetSwipePreview(spread);
    }
  });
}

function finishSwipe(spread: HTMLElement, direction: "next" | "previous", onFinish: () => void) {
  resetSwipePreview(spread);
  spread.classList.add("book-spread--swipe-exiting", `book-spread--swipe-${direction}`);
  window.setTimeout(onFinish, SWIPE_EXIT_DURATION);
}

function resetSwipePreview(spread: HTMLElement) {
  spread.classList.remove("book-spread--swipe-dragging");
  spread.style.removeProperty("--swipe-x");
  spread.style.removeProperty("--swipe-rotate");
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function releasePointer(element: HTMLElement, pointerId: number) {
  if (element.hasPointerCapture(pointerId)) {
    element.releasePointerCapture(pointerId);
  }
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
