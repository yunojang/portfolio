"use client";

import React, { FC, useRef } from "react";

import { Noto_Sans_KR } from "next/font/google";
const noto = Noto_Sans_KR({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

import { FaArrowDown } from "react-icons/fa6";

import "@/app/common/style/animation.css";
import ProjectCard from "./ProjectCard";
import MouseCursor from "../common/components/MouseCursor/MouseCursor";
import { IconableStackName, Project } from "./types/project";

interface ProjectPageProps {}

const projects: Project[] = [
  {
    title: "Safely",
    position: "Front-end Web/Mobile Developer",
    period: "2024",
    thumbnail: "/images/safely-logo.png",
    stacks: [IconableStackName.next],
  },

  {
    title: "Find-e",
    position: "Front-end Web/Mobile Developer",
    period: "2023-2024",
    thumbnail: "/images/finde-logo.png",
    stacks: [IconableStackName.react],
  },

  {
    title: "wcm",
    position: "Front-end Web Developer",
    period: "2022-2024",
    // thumbnail: "/images/finde-logo.png",
    stacks: [IconableStackName.react],
  },

  {
    title: "절삭공구 플랫폼",
    position: "Front-end Web Developer",
    period: "2022",
    // thumbnail: "/images/finde-logo.png",
    stacks: [IconableStackName.react],
  },

  {
    title: "component lib",
    position: "Front-end Web Developer",
    period: "2021-2023",
    // thumbnail: "/images/finde-logo.png",
    stacks: [IconableStackName.react],
  },

  {
    title: "Morak",
    position: "Front-end Web Developer",
    period: "2023",
    // thumbnail: "/images/finde-logo.png",
    stacks: [IconableStackName.next],
  },

  {
    title: "Toonivie",
    position: "Front-end Web Developer",
    period: "2020",
    // thumbnail: "/images/finde-logo.png",
    stacks: [IconableStackName.react],
  },

  {
    title: "portfolio",
    position: "Front-end Web Developer",
    period: "2025",
    // thumbnail: "/images/finde-logo.png",
    stacks: [IconableStackName.next],
  },

  {
    title: "daily-diary",
    position: "Front-end Web Developer",
    period: "2021",
    // thumbnail: "/images/finde-logo.png",
    stacks: [IconableStackName.js],
  },

  {
    title: "pomodoro-timer",
    position: "Front-end Web Developer",
    period: "2021",
    // thumbnail: "/images/finde-logo.png",
    stacks: [IconableStackName.js],
  },
];

const ProjectPage: FC<ProjectPageProps> = () => {
  const listContainer = useRef<HTMLElement>(null);

  const scrollToProjectList = () => {
    if (!listContainer.current) return;
    listContainer.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section>
      <MouseCursor />

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

            <div className="text-lg">Scroll to Explore</div>
          </div>

          {/* filter 적용 - 토글 버튼 같은 느낌을 [all, work, toy(side)] */}
          <div className="text-lg">ALL Projects</div>
        </div>

        <div className="h-0.5 bg-gray-200 w-full mt-3" />
      </header>

      <main ref={listContainer}>
        {projects.map((project, i) => (
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
