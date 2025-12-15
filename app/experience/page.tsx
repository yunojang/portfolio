import React, { FC } from "react";

import ExperienceGraph from "./ExperienceGraph";
import ExperienceCards from "./ExperienceCards";
import { experience } from "../data/experience";

import "@/app/common/style/animation.css";

type ExperiencePageProps = Record<string, never>;

const ExperiencePage: FC<ExperiencePageProps> = () => {
  return (
    <div className="pb-40">
      {/* 제목 */}
      <header className="py-32">
        <div className="overflow-hidden">
          <div className="slide-up-animation text-[8.75em] leading-[1.25em] text-center font-medium">
            EXPERIENCE
          </div>
        </div>
        <div className="overflow-hidden">
          <div
            className="slide-down-animation text-3xl text-center text-gray-500"
            style={{ "--delay": "0.5s" } as React.CSSProperties}
          >
            모든 경험들 - TIMELINE
          </div>
        </div>
      </header>

      <div className="mb-40">
        <ExperienceGraph exps={experience} />
      </div>
      <ExperienceCards exps={experience} />
    </div>
  );
};

export default ExperiencePage;
