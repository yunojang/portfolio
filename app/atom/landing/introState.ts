import { atom } from "jotai";

export enum IntroState {
  NO = "No",
  INPROGRESS = "InProgress",
  END = "End",
}

export const intro = atom(IntroState.NO);

export const isEndIntro = atom((get) => get(intro) === IntroState.END);

export const setProgressIntro = atom(null, (_, set) => {
  set(intro, IntroState.INPROGRESS);
});

export const setEndIntro = atom(null, (_, set) => {
  set(intro, IntroState.END);
});
