import type { RichSegment } from "../types";

export function strong(text: string): RichSegment {
  return { text, strong: true };
}
