import type { LessonCard } from "../types";

export function applyCardTheme(element: HTMLElement, card: LessonCard) {
  element.style.setProperty("--card-color", card.color);
  element.style.setProperty("--card-accent", card.accent);
  element.style.setProperty("--line-on-fill", card.color);
}
