import { atom } from "jotai";

interface Cursor {
  active: boolean;
  text: string;
}

export const cursor = atom<Cursor>({ active: false, text: "open" });

export const activateCursor = atom(null, (get, set, newText?: string) => {
  set(cursor, { active: true, text: newText ?? get(cursor).text });
});

export const deactivateCursor = atom(null, (get, set) => {
  set(cursor, { active: false, text: get(cursor).text });
});
