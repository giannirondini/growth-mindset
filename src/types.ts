export type IconName =
  | "handshake"
  | "compass"
  | "request"
  | "puzzle"
  | "breakdown"
  | "ear"
  | "responsibility"
  | "feedback";

export type StrongSegment = {
  text: string;
  strong: true;
};

export type RichSegment = string | StrongSegment;

export type LessonCard = {
  id: number;
  topic: string;
  color: string;
  accent: string;
  icon: IconName;
  frontLines: string[];
  sourceFront: string;
  sourceBack: string;
  backParagraphs: RichSegment[][];
  bullets: RichSegment[][];
};
