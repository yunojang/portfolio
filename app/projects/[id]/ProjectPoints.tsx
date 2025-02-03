"use client";

import { FC } from "react";
import { Point } from "../types/project";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

interface ProjectPointsProps {
  points: Point[];
}

gsap.registerPlugin(ScrollTrigger);

const keyTitleHeight = 200;

const ProjectPoints: FC<ProjectPointsProps> = ({ points }) => {
  useGSAP(() => {
    gsap.from(".heading", {
      scrollTrigger: {
        trigger: ".heading",
      },
      y: "150%",
      opacity: 0,
    });
  });

  return (
    <div>
      <div className="sticky top-0 heading" style={{ height: keyTitleHeight }}>
        Key Points
      </div>

      <div className="">
        {points?.map((point, i) => (
          <ProjectPointItem
            point={point}
            key={i}
            index={i}
            topPad={keyTitleHeight}
            size={70}
          />
        ))}

        <div
          className="w-screen h-screen sticky top-0"
          style={{ background: "var(--bg-color)" }}
        >
          <div
            className="border-t-[1px] border-dashed"
            style={{ borderColor: "var(--font-color)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectPoints;

interface ProjectPointItemProps {
  topPad: number;
  index: number;
  size: number;
  point: Point;
}

const ProjectPointItem: FC<ProjectPointItemProps> = ({
  topPad,
  index,
  size,
  point,
}) => {
  return (
    <div
      className="flex flex-col h-screen sticky"
      style={{ top: size * index + topPad, background: "var(--bg-color)" }}
    >
      <div
        className="border-t-[1px] border-dashed"
        style={{ borderColor: "var(--font-color)" }}
      />
      <div className="flex items-start pt-2" style={{ height: size }}>
        <div className="w-[37.5vw] expend">
          {`${index + 1}`.padStart(2, "0")}
        </div>
        <div className="flex-1">
          <div className="expend">({point.subject})</div>
          <div className="ml-12 description w-[24.5vw] mt-5">
            {point.description}
          </div>
        </div>
      </div>
    </div>
  );
};
