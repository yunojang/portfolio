"use client";

import LineGrid from "./common/LineGrid";
import Intro from "./landing/Intro";
import ProfileIntroduce from "./landing/ProfileAnimation";

import { useAtomValue, useSetAtom } from "jotai";
import {
  isEndIntro as isEndIntroAtom,
  setProgressIntro as setProgressIntroAtom,
  setEndIntro as setEndIntroAtom,
} from "./atom/landing/introState";

import { useCallback, useRef } from "react";
import { lockScroll, releaseScroll } from "./common/utils/scroll";
import SmoothScroll from "./common/components/SmoothScroll";
import MouseCursor from "./common/components/MouseCursor/MouseCursor";
import ProfileTexts from "./landing/ProfileTexts";
import CareerPanel, { Career } from "./landing/CareerPanel";

const career1: Career = {
  companyName: "wizcore",
  startDate: new Date("2021-11-21"),
  endDate: new Date("2024-07-14"),
  position: "Front-End Web Developer",
  mainColor: "#1C51FA",
  projects: [],
};

const career2: Career = {
  companyName: "ideaconcert",
  startDate: new Date("2020-09-01"),
  endDate: new Date("2020-11-25"),
  position: "Front-End Web Developer",
  mainColor: "#FC943B",
  projects: [],
};

export default function Home() {
  const isEndIntro = useAtomValue(isEndIntroAtom);

  const setProgressIntro = useSetAtom(setProgressIntroAtom);
  const setEndIntro = useSetAtom(setEndIntroAtom);

  const onStartIntro = useCallback(() => {
    // lockScroll();
    setProgressIntro();
  }, [setProgressIntro]);

  const onEndIntro = useCallback(() => {
    // releaseScroll();
    setEndIntro();
  }, [setEndIntro]);

  // useEffect(() => {
  //   const onWheel = () => {};

  //   const debouncedOnWheel = debounce(onWheel, 40);

  //   window.addEventListener("wheel", debouncedOnWheel);
  //   return () => window.removeEventListener("wheel", debouncedOnWheel);
  // }, []);

  const career = useRef<HTMLDivElement>(null);

  const scrollToCareer = () => {
    if (!career.current) return;

    career.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen h-full w-full relative">
      <MouseCursor />

      {/* <SmoothScroll /> */}

      {isEndIntro && <LineGrid />}

      {/* 인트로 - 이름 */}
      <Intro onStart={onStartIntro} onEnd={onEndIntro} />

      <ProfileIntroduce />

      <ProfileTexts onScrollCareer={scrollToCareer} />

      {/* Work - 커리어 */}
      <div id="career" ref={career}>
        <CareerPanel career={career1} />

        <CareerPanel career={career2} />
      </div>

      {/* Projects - see all projects */}

      {/* ETC - 학위, 자격증, 받은 교육  - 타임라인 */}
    </main>
  );
}
