export enum IconableStackName {
  next = "Next",
  react = "React",
  js = "Js",
}

export interface Project {
  title: string;
  position: string;
  period: string;
  thumbnail?: string;
  stacks: IconableStackName[];

  // --- detail
  // tags: string[];
  // images: string[];
  // mainFeature: string[];
  // description: string;
  // progress: string;
  // tools: string[];
  //
}
