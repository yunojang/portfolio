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

import { useCallback, useEffect } from "react";
import { lockScroll, releaseScroll } from "./common/utils/scroll";
import SmoothScroll from "./common/components/SmoothScroll";
import { debounce } from "./common/utils/delay";
import MouseCursor from "./common/components/MouseCursor/MouseCursor";
import StackTapeLine from "./landing/components/StackTapeLine";
import ProfileTexts from "./landing/ProfileTexts";

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

  useEffect(() => {
    const onWheel = () => {
      // console.log(window.scrollY);
    };

    const debouncedOnWheel = debounce(onWheel, 40);

    window.addEventListener("wheel", debouncedOnWheel);
    return () => window.removeEventListener("wheel", debouncedOnWheel);
  }, []);

  return (
    <main className="min-h-screen h-full w-full relative">
      <MouseCursor />

      {/* <SmoothScroll /> */}

      {isEndIntro && <LineGrid />}

      {/* 인트로 - 이름 */}
      <Intro onStart={onStartIntro} onEnd={onEndIntro} />

      <ProfileIntroduce />

      <ProfileTexts />

      <div className="bg-red-200 h-screen sticky top-0 z-20">1</div>
      <div className="bg-blue-200 h-screen sticky top-0 z-20">2</div>
      <div className="bg-green-200 h-screen sticky top-0 z-20">3</div>

      {/* Work - 커리어 */}

      {/* 대표 프로젝트 미리보기 */}

      {/* Project */}

      {/* ETC - 학위, 자격증, 받은 교육 */}
    </main>
  );
}
