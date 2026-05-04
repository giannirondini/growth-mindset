import type { IconName } from "../types";

export const cardIconImagePaths: Record<IconName, string> = {
  handshake: new URL("../../assets/icons/handshake.png", import.meta.url).href,
  compass: new URL("../../assets/icons/compass.png", import.meta.url).href,
  request: new URL("../../assets/icons/request.png", import.meta.url).href,
  puzzle: new URL("../../assets/icons/puzzle.png", import.meta.url).href,
  breakdown: new URL("../../assets/icons/breakdown.png", import.meta.url).href,
  ear: new URL("../../assets/icons/ear.png", import.meta.url).href,
  responsibility: new URL("../../assets/icons/responsibility.png", import.meta.url).href,
  feedback: new URL("../../assets/icons/feedback.png", import.meta.url).href
};
