import { FC, useMemo } from "react";

import { Noto_Sans_KR } from "next/font/google";
const noto = Noto_Sans_KR({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

import { Experience } from "./types/experience";
import { cx } from "@emotion/css";

import "./style/shape.css";

interface ExperienceGraphProps {
  exps: Experience[];
}

const ExperienceGraph: FC<ExperienceGraphProps> = ({ exps }) => {
  const expStartTime = useMemo(
    () =>
      exps.reduce(
        (time, exp) =>
          exp.startDate.getTime() < time ? exp.startDate.getTime() : time,
        Date.now()
      ) - new Date("1970-02-01").getTime(),
    [exps]
  );

  const expEndTime = useMemo(() => Date.now(), []);

  const totalTime = expEndTime - expStartTime;

  // exps
  const careers = useMemo(
    () => exps.filter((exp) => exp.type === "career"),
    [exps]
  );

  const edus = useMemo(() => exps.filter((exp) => exp.type === "edu"), [exps]);

  const events = useMemo(
    () => exps.filter((exp) => exp.type === "event"),
    [exps]
  );

  return (
    <div className={`${noto.className} py-20`}>
      <div className="relative h-12">
        {/* 수직선 */}
        <div className="border-t-2 border-[#666] w-full absolute top-1/2 -translate-y-1/2" />
        {/* 수직선 꾸밈 라인 */}
        <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 w-full px-0.5">
          <div className="h-10 w-0.5 bg-[#666]" />

          {/* 잔 라인 */}
          {Array.from({ length: 180 }, (_, i) => i).map((v) => (
            <div key={v} className="h-2 w-[1.5px] bg-[#c5c5c5]" />
          ))}

          <div className="h-10 w-0.5 bg-[#666]" />
        </div>

        {/* career - 중앙 */}
        <div className="absolute px-3 top-1/2 h-8 -translate-y-1/2 w-full">
          {careers.map((career, i) => (
            <GraphBar
              key={i}
              backGround={career.graphColor ?? "#2b2b2b"}
              type={career.type}
              length={
                ((career.endDate.getTime() - career.startDate.getTime()) /
                  totalTime) *
                100
              }
              start={
                ((career.startDate.getTime() - expStartTime) / totalTime) * 100
              }
            />
          ))}
        </div>

        {/* edu - 아래 */}
        {/* <div className="absolute px-3 top-1/2 h-5 -translate-y-1/2 w-full"> */}
        <div className="absolute px-3 top-[75%] h-8 w-full">
          {edus.map((edu, i) => (
            <GraphBar
              key={i}
              backGround={edu.graphColor ?? "#858585"}
              type={edu.type}
              length={
                ((edu.endDate.getTime() - edu.startDate.getTime()) /
                  totalTime) *
                100
              }
              start={
                ((edu.startDate.getTime() - expStartTime) / totalTime) * 100
              }
            />
          ))}
        </div>

        {/* events - 위 */}
        <div className="absolute px-3 bottom-[75%] w-full h-5 -translate-y-1/2">
          {events.map((event, i) => (
            <GraphBar
              key={i}
              backGround={event.graphColor ?? "#4d4d4d"}
              type={event.type}
              start={
                ((event.startDate.getTime() - expStartTime) / totalTime) * 100
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceGraph;

interface GraphBarProps {
  backGround?: string;
  type: Experience["type"];
  length?: number;
  start?: number;
}

const GraphBar: FC<GraphBarProps> = ({ backGround, type, length, start }) => {
  return (
    <div
      className={cx(
        // type === "event" ? "" : "shadow-trim",
        type === "event" ? "shadow-trim rotate-45" : "rounded-lg",
        "absolute cursor-pointer transition-all hover:scale-x-105 hover:scale-y-125 hover:z-10"
      )}
      style={{
        background: backGround ?? "#aaa",
        left: `${start}%`,
        width: type === "event" ? 16 : `${length}%`,
        height: type === "event" ? 16 : 32,
      }}
    />
  );
};
