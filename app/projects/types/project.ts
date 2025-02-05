export enum IconableStackName {
  next = "Next",
  react = "React",
  js = "Js",
}

export interface Point {
  subject: string;
  // title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  position: string;
  period: string;
  thumbnail?: string;
  thumbStacks: IconableStackName[];

  // --- detail
  company?: string;
  stacks?: string[];
  // tools: string[];
  member?: string;
  state?: string;
  // progress: string;
  description?: string;
  screenShots?: string[];
  points?: Point[];
  // mainFeature: string[];
}
