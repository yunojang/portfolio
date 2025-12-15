"use client";

import React, { FC } from "react";
import { Experience } from "./types/experience";

import { useAtomValue } from "jotai";
import { experienceFilter } from "../atom/experience/filter";
import { ExperienceFiliterType } from "./types/type";

interface ExperienceCardsProps {
  exps: Experience[];
}

const ExperienceCards: FC<ExperienceCardsProps> = ({ exps }) => {
  const filterState = useAtomValue(experienceFilter);

  const seeAll = filterState === ExperienceFiliterType.ALL;
  const seeOnlyCareer = filterState === ExperienceFiliterType.CAREER;
  const seeOnlyEdu = filterState === ExperienceFiliterType.EDU;
  const seeOnlyEvent = filterState === ExperienceFiliterType.EVENT;

  return (
    <div className="flex flex-col gap-8 max-w-6xl mx-auto">
      {exps
        .filter(
          (exp) =>
            seeAll ||
            (seeOnlyCareer && exp.type === "career") ||
            (seeOnlyEdu && exp.type === "edu") ||
            (seeOnlyEvent && exp.type === "event")
        )
        .map((exp, i) => (
          <div key={i} id={exp.name} className="relative pl-10">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-200" />
            <div className="absolute left-2.5 top-4 w-3 h-3 rounded-full bg-[#1a397c] shadow-[0_0_0_4px_rgba(26,57,124,0.12)]" />

            <section className="rounded-2xl border border-slate-200/80 bg-white/80 shadow-sm px-6 py-6 flex flex-col gap-4 text-slate-800">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-[0.65rem] font-semibold tracking-[0.18em] text-[#1a397c] bg-[#e7edfb] border border-[#b9c8f4] rounded-full px-3 py-1">
                    {typeLabel(exp.type)}
                  </span>
                  <span className="text-base text-slate-500">{exp.name}</span>
                </div>

                <span className="text-sm font-semibold text-slate-600 bg-slate-100 rounded-full px-3 py-1 border border-slate-200">
                  {formatPeriod(exp.startDate, exp.endDate, exp.type)}
                </span>
              </div>

              {exp.subContents.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {exp.subContents.map((content, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {content}
                    </span>
                  ))}
                </div>
              )}

              {exp.description && (
                <p className="text-sm leading-relaxed text-slate-700 whitespace-pre-line">
                  {exp.description}
                </p>
              )}
            </section>
          </div>
        ))}
    </div>
  );
};

export default ExperienceCards;

const formatPeriod = (start: Date, end: Date, type: Experience["type"]) => {
  const fmt = (d: Date) =>
    `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}`;

  if (type === "event") return fmt(start);
  return `${fmt(start)} - ${fmt(end)}`;
};

const typeLabel = (type: Experience["type"]) => {
  switch (type) {
    case "career":
      return "Career";
    case "edu":
      return "Education";
    case "event":
      return "Certification";
    default: {
      const text = typeof type === "string" ? type : "unknown";
      return text.toUpperCase();
    }
  }
};
