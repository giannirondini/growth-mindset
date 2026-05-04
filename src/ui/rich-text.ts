import type { RichSegment } from "../types";

export function renderRichText(parent: HTMLElement, segments: RichSegment[]) {
  segments.forEach((segment) => {
    const element = document.createElement(isStrongSegment(segment) ? "strong" : "span");
    element.textContent = typeof segment === "string" ? segment : segment.text;
    parent.append(element);
  });
}

function isStrongSegment(segment: RichSegment) {
  return typeof segment !== "string" && segment.strong;
}
