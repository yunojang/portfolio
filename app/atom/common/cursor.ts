import { atom } from "jotai";

interface Cursor {
  active: boolean;
  text: string;
  hide: boolean;
}

export const cursor = atom<Cursor>({
  active: false,
  text: "open",
  hide: false,
});

export const activateCursor = atom(null, (get, set, newText?: string) => {
  set(cursor, {
    ...get(cursor),
    active: true,
    text: newText ?? get(cursor).text,
  });
});

export const deactivateCursor = atom(null, (get, set) => {
  set(cursor, { ...get(cursor), active: false, text: get(cursor).text });
});
