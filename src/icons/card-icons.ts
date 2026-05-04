import type { IconName } from "../types";

export const cardIconPaths: Record<IconName, string> = {
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

export function cardIconSvg(icon: IconName): string {
  return `
    <svg class="card-icon" viewBox="0 0 106 106" aria-hidden="true">
      ${cardIconPaths[icon]}
    </svg>
  `;
}
