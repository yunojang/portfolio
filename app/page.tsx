"use client";

import { careers } from "./data/career";

import { useAtomValue, useSetAtom } from "jotai";
import {
  isEndIntro as isEndIntroAtom,
  setProgressIntro as setProgressIntroAtom,
  setEndIntro as setEndIntroAtom,
} from "./atom/landing/introState";

import MouseCursor from "./common/components/MouseCursor/MouseCursor";
import LineGrid from "./common/LineGrid";
import SmoothScroll from "./common/components/SmoothScroll";

import ProfileTexts from "./landing/ProfileTexts";
import Intro from "./landing/Intro";
import ProfileIntroduce from "./landing/GlitchAnimation";
import LandingEtc from "./landing/LandingEtc";
import CareerPanel from "./landing/CareerPanel";

import React, { useCallback, useRef } from "react";
import { lockScroll, releaseScroll } from "./common/utils/scroll";

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

      <div className="py-32 mb-[16rem] sticky top-0">
        <ProfileTexts onScrollCareer={scrollToCareer} />
      </div>

      {/* Work - 커리어 */}
      <div id="career" className="bg-white" ref={career}>
        {careers.map((career, i) => (
          <CareerPanel key={i} career={career} />
        ))}
      </div>

      {/* Projects - see all projects */}
      <div className="bg-white pb-20 sticky z-20">
        <LandingEtc />
      </div>
    </main>
  );
}
