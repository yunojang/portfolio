import { Experience } from "../types/experience";

export const formatPeriod = (
  start: Date,
  end: Date | undefined,
  type: Experience["type"]
) => {
  const fmt = (d: Date) =>
    `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}`;

  if (!end || start.getTime() === end.getTime()) return fmt(start);
  return `${fmt(start)} - ${fmt(end)}`;
};
