"use client";

import React, { FC } from "react";
import { Point } from "../types/project";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

interface ProjectPointsProps {
  points: Point[];
}

gsap.registerPlugin(ScrollTrigger);

const keyTitleHeight = 200;
const itemHieght = "4.75em";

const ProjectPoints: FC<ProjectPointsProps> = ({ points }) => {
  useGSAP(() => {
    gsap.from(".heading", {
      scrollTrigger: {
        trigger: ".heading",
        start: "-20 97.5",
        end: "bottom 50%",
        // markers: true,
        scrub: 1,
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
          <div
            className="h-screen sticky top-0"
            key={i}
            style={{
              top: `calc(${itemHieght} * ${i} + ${keyTitleHeight}px)`,
              background: "var(--bg-color)",
            }}
          >
            <ProjectPointItem point={point} size={itemHieght} index={i} />
          </div>
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
  // topPad: number;
  index: number;
  size: string;
  point: Point;
}

const ProjectPointItem: FC<ProjectPointItemProps> = ({
  // topPad,
  index,
  size,
  point,
}) => {
  return (
    <section
      className="flex flex-col"
      style={{ "--view-width": "25.25vw" } as React.CSSProperties}
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
          <div className="ml-12 description view-width mt-5">
            {point.description}
          </div>
        </div>
      </div>
    </section>
  );
};
