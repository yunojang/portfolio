/* eslint-disable @typescript-eslint/no-explicit-any */
export function padArray(arr: any[], length: number) {
  return arr.length < length
    ? [...arr, ...Array(length - arr.length).fill(null)]
    : arr;
}
