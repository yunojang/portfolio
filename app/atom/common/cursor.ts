import { atom } from "jotai";

interface Cursor {
  show: boolean;
  active: boolean;
  text: string;
}

const defalutOptions: Cursor = {
  show: true,
  active: false,
  text: "open",
};

export const cursor = atom<Cursor>(defalutOptions);

export const showCursor = atom(null, (get, set) => {
  set(cursor, { ...get(cursor), show: true });
});

export const hideCursor = atom(null, (get, set) => {
  set(cursor, { ...get(cursor), show: false });
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

export const initCursor = atom(null, (_, set) => set(cursor, defalutOptions));
