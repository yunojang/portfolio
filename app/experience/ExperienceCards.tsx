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
    <div className="flex flex-col gap-5">
      {exps
        .filter(
          (exp) =>
            seeAll ||
            (seeOnlyCareer && exp.type === "career") ||
            (seeOnlyEdu && exp.type === "edu") ||
            (seeOnlyEvent && exp.type === "event")
        )
        .map((exp, i) => (
          <div key={i} id={exp.name}>
            <div className="border-t-2 border-[#a7bcec] border-dashed" />
            <section
              className="view-width mx-auto flex items-start gap-5 pb-[50vh] pt-12 text-gray-600"
              style={{ "--view-width": "62.625vw" } as React.CSSProperties}
            >
              <div className="flex-1">
                <div className="border-2 rounded-full border-[#1a397c] text-[#1a397c] inline-block px-2 py-1 self-end font-semibold text-sm mb-3 tracking-wider">
                  {exp.type.toUpperCase()}
                </div>

                <div className="text-3xl text-[#1a397c] mb-3">
                  {exp.name.toUpperCase()}
                </div>

                <div className="text-lg">
                  {exp.startDate.getFullYear() === exp.endDate.getFullYear() ||
                  exp.type === "event"
                    ? exp.startDate.getFullYear()
                    : `${exp.startDate.getFullYear()} - ${exp.endDate.getFullYear()}`}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col text-lg">
                  {exp.subContents.map((content, i) => (
                    <div key={i}>{content}</div>
                  ))}
                </div>
              </div>
              <div className="flex-1 text-lg whitespace-pre-line">
                {exp.description}
              </div>
            </section>
          </div>
        ))}
    </div>
  );
};

export default ExperienceCards;
