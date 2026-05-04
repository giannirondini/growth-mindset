import type { LessonCard } from "../types";

export function applyCardTheme(element: HTMLElement, card: LessonCard) {
  element.style.setProperty("--card-color", card.color);
}
