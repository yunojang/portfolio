"use client";

import { FC, useEffect, useMemo, useState } from "react";

import { Noto_Sans_KR } from "next/font/google";
const noto = Noto_Sans_KR({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

import { Experience } from "./types/experience";
import { cx } from "@emotion/css";

import "./style/shape.css";

import ToggleButton from "../common/components/ToggleButton/ToggleButton";
import { ExperienceFiliterType } from "./types/type";
import { useAtom } from "jotai";
import { experienceFilter } from "../atom/experience/filter";

interface ExperienceGraphProps {
  exps: Experience[];
}

const now = new Date("2025").getTime();

const ExperienceGraph: FC<ExperienceGraphProps> = ({ exps }) => {
  const expStartTime = useMemo(
    () =>
      exps.reduce(
        (time, exp) =>
          exp.startDate.getTime() < time ? exp.startDate.getTime() : time,
        now
      ) - new Date("1970-02-01").getTime(),
    [exps]
  );

  const expEndTime = useMemo(() => now, []);

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

  // events
  // const router = useRouter();
  const scrollToById = (id: string) => {
    const target = document.getElementById(id);
    target?.scrollIntoView({ behavior: "smooth" });
  };
  const onClickGraph = (id: string) => scrollToById(id);

  const [filterState, setFilterState] = useAtom(experienceFilter);
  // const [filterState, setFilterState] = useState<ExperienceFiliterType>(
  //   ExperienceFiliterType.ALL
  // );

  useEffect(() => {
    return () => setFilterState(ExperienceFiliterType.ALL);
  }, [setFilterState]);

  return (
    <div className={`${noto.className} py-20`}>
      <div className="mb-20 flex items-center justify-end px-10">
        <div className="text-lg font-medium cursor-pointer bg-black rounded-full text-white px-6 py-1.5 text-center">
          <ToggleButton
            itemHeight="1.75em"
            items={Object.values(ExperienceFiliterType).map((type) => ({
              id: type,
              text: type.toUpperCase(),
            }))}
            onClick={(id) => setFilterState(id as ExperienceFiliterType)}
          />
        </div>
      </div>
      <div className="relative h-12">
        {/* 년도 표시 */}
        <div className="absolute left-1 bottom-full font-bold text-lg  text-gray-400">
          {new Date(expStartTime).getFullYear()}년
        </div>
        <div className="absolute right-1 bottom-full font-bold text-lg  text-gray-400">
          {new Date(expEndTime).getFullYear()}년
        </div>
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
              inActive={
                filterState !== ExperienceFiliterType.ALL &&
                filterState !== ExperienceFiliterType.CAREER
              }
              onClick={() => onClickGraph(career.name)}
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
              inActive={
                filterState !== ExperienceFiliterType.ALL &&
                filterState !== ExperienceFiliterType.EDU
              }
              onClick={() => onClickGraph(edu.name)}
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
              inActive={
                filterState !== ExperienceFiliterType.ALL &&
                filterState !== ExperienceFiliterType.EVENT
              }
              onClick={() => onClickGraph(event.name)}
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
  onClick?(): void;
  inActive?: boolean;
}

const GraphBar: FC<GraphBarProps> = ({
  backGround,
  type,
  length,
  start,
  onClick,
  inActive,
}) => {
  return (
    <div
      onClick={inActive ? undefined : onClick}
      className={cx(
        inActive ? "opacity-25" : "",
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
