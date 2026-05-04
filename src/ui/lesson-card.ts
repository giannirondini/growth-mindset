import { siteCopy } from "../content/site-copy";
import { cardIconImagePaths } from "../icons/card-icons";
import type { LessonCard } from "../types";
import { renderRichText } from "./rich-text";
import { applyCardTheme } from "./theme";

export type CardMode = "tile" | "spread";

export function createFrontCard(card: LessonCard, mode: CardMode) {
  const article = document.createElement("article");
  article.className = `lesson-card lesson-card--${mode}`;
  applyCardTheme(article, card);

  const iconWrap = document.createElement("div");
  iconWrap.className = "lesson-card__icon";
  const icon = document.createElement("img");
  icon.className = "card-icon";
  icon.src = cardIconImagePaths[card.icon];
  icon.alt = "";
  icon.decoding = "async";
  iconWrap.append(icon);

  const title = document.createElement(mode === "tile" ? "h2" : "h3");
  title.className = "lesson-card__title";
  card.frontLines.forEach((line) => {
    const span = document.createElement("span");
    span.textContent = line;
    title.append(span);
  });

  const footer = document.createElement("footer");
  footer.className = "lesson-card__footer";
  siteCopy.footerLines.forEach((line) => {
    const span = document.createElement("span");
    span.textContent = line;
    footer.append(span);
  });
  footer.append(document.createElement("i"));

  article.append(iconWrap, title, footer);
  return article;
}

export function createBackPage(card: LessonCard) {
  const article = document.createElement("article");
  article.className = "book-page book-page--back";
  applyCardTheme(article, card);

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

  article.append(label, title, copy, list);
  return article;
}
