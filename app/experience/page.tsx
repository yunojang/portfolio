import { FC } from "react";

import ExperienceGraph from "./ExperienceGraph";
import ExperienceCards from "./ExperienceCards";
import { experience } from "../data/experience";

interface ExperiencePageProps {}

const ExperiencePage: FC<ExperiencePageProps> = () => {
  return (
    <div className="pb-40">
      {/* 제목 */}
      <header className="py-32">
        <div className="text-[8.75em] leading-[1.25em] text-center font-medium">
          EXPERIENCE
        </div>
        <div className="text-3xl text-center text-gray-500">
          모든 경험들 - TIMELINE
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
