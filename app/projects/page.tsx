"use client";

import React, { FC, useRef, useState } from "react";

import { Noto_Sans_KR } from "next/font/google";
const noto = Noto_Sans_KR({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

import { FaArrowDown } from "react-icons/fa6";

import "@/app/common/style/animation.css";
import ProjectCard from "./ProjectCard";
import MouseCursor from "../common/components/MouseCursor/MouseCursor";
import { projects } from "../data/projects";
import ToggleButton from "../common/components/ToggleButton/ToggleButton";
import ClickableComponent from "../common/components/ClickableComponent";
import SmoothScroll from "../common/components/SmoothScroll";

enum ProjectViewFilter {
  ALL = "AllProject",
  ONLYWORK = "OnlyWork",
  ONLYSIDE = "OnlySide",
}

interface ProjectPageProps {}

const ProjectPage: FC<ProjectPageProps> = () => {
  const listContainer = useRef<HTMLElement>(null);

  const scrollToProjectList = () => {
    if (!listContainer.current) return;
    listContainer.current.scrollIntoView({ behavior: "smooth" });
  };

  const [viewState, setViewState] = useState<ProjectViewFilter>(
    ProjectViewFilter.ALL
  );

  return (
    <section>
      <MouseCursor />
      {/* <SmoothScroll /> */}

      <header className={`${noto.className} mb-40 w-full`}>
        <div className="pl-12 h-[95vh] flex flex-col justify-center">
          <div className="flex flex-col items-start font-medium text-[10.5em] leading-[1em] mb-3">
            <div className="overflow-hidden">
              <div className="slide-up-animation">PROJECT</div>
            </div>
            <div className="overflow-hidden">
              <div
                className="slide-up-animation"
                style={{ "--delay": ".35s" } as React.CSSProperties}
              >
                LIST
              </div>
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className="slide-down-animation text-gray-500 text-[1.25em] font-medium"
              style={{ "--delay": "1s" } as React.CSSProperties}
            >
              <div>프론트엔드 개발로 참여한 모든 프로젝트</div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center py-5 px-16">
          <div
            className="flex items-center gap-5 text-gray-600 cursor-pointer select-none hover:scale-105 transition-all"
            onClick={scrollToProjectList}
          >
            <FaArrowDown />

            <div className="text-xl">Scroll to Explore</div>
          </div>

          {/* filter 적용 - 토글 버튼 같은 느낌을 [all, work, toy(side)] */}
          <div className="text-lg font-medium">
            <ClickableComponent cursorHide>
              <ToggleButton
                itemHeight="1.75em"
                items={Object.values(ProjectViewFilter).map((v) => ({
                  id: v,
                  text: toName(v),
                }))}
                onClick={(key) => setViewState(key as ProjectViewFilter)}
              />
            </ClickableComponent>
          </div>
        </div>

        <div className="h-0.5 bg-gray-200 w-full mt-3" />
      </header>

      <main ref={listContainer}>
        {projects
          .filter((pj) =>
            viewState === ProjectViewFilter.ONLYWORK
              ? pj.company
              : viewState === ProjectViewFilter.ALL || !pj.company
          )
          .map((project, i) => (
            <ProjectCard
              key={i}
              keyIndex={`k${i}`}
              direction={i % 2 === 0 ? "left" : "right"}
              project={project}
            />
          ))}
      </main>
    </section>
  );
};

export default ProjectPage;

const isUpperCase = (letter: string) => {
  return letter === letter.toUpperCase();
};

const toName = (letter: string) => {
  return letter
    .split("")
    .reduce((str, char) => (str += isUpperCase(char) ? ` ${char}` : char), "")
    .toUpperCase();
};
