export interface Experience {
  id: string;
  name: string;
  subContents: string[];
  type: "career" | "edu" | "event";
  description: string;
  thumbnail?: string;
  startDate: Date;
  endDate?: Date;
  graphColor?: string;
}
