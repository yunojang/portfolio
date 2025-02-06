import { ExperienceFiliterType } from "@/app/experience/types/type";
import { atom } from "jotai";

export const experienceFilter = atom<ExperienceFiliterType>(
  ExperienceFiliterType.ALL
);

// export const changeExperienceFilter = atom(
//   null,
//   (_, set, type: ExperienceFiliterType) => {
//     set(experienceFilter, type);
//   }
// );
