/* eslint-disable @typescript-eslint/no-explicit-any */

export const debounce = (func: (...args: any) => any, delay: number = 0) => {
  let timeOut: NodeJS.Timeout | null = null;

  return (...args: any[]) => {
    if (timeOut) {
      clearTimeout(timeOut);
    }

    timeOut = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
