"use client";

import React, { FC, useRef } from "react";
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
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!imageRef.current) return;
    gsap.from(imageRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <section className="flex flex-col" style={{} as React.CSSProperties}>
      <div
        className="border-t-[1px] border-dashed"
        style={{ borderColor: "var(--font-color)" }}
      />
      <div className="flex items-start pt-2" style={{ height: size }}>
        <div className="flex-1">
          <div className="expend h-[2em] text-lg font-bold tracking-tight text-slate-900 flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-slate-900" />
            <span>{point.subject}</span>
          </div>
          <div className="ml-12 description view-width mt-5 pr-5">
            {point.description}
          </div>
        </div>

        {/* image */}
        <div
          ref={imageRef}
          className="w-[50vw] h-[60vh] rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/80 flex items-center justify-center text-sm text-gray-500"
        >
          -
        </div>
      </div>
    </section>
  );
};
