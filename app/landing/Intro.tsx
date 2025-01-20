"use client";

import { FC, useCallback, useEffect } from "react";

import { Noto_Sans_KR } from "next/font/google";
import "../common/style/animation.css";
import ClickableComponent from "../common/components/ClickableComponent";

const notoSansKR = Noto_Sans_KR({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

interface IntroProps {
  onStart?(): void;
  onEnd?(): void;
}

const Intro: FC<IntroProps> = ({ onEnd, onStart }) => {
  const onStartIntro = useCallback(() => {
    console.log("start of intro");
    onStart?.();
  }, [onStart]);

  const onEndIntro = useCallback(() => {
    console.log("end of intro");
    onEnd?.();
  }, [onEnd]);

  useEffect(() => {
    onStartIntro();

    return () => onEndIntro();
  }, [onStartIntro, onEndIntro]);

  return (
    <div className="w-full" style={{ height: "calc(100vh + 60px)" }}>
      <div
        className={`h-[85%] flex flex-col relative items-center justify-center ${notoSansKR.className} leading-[230px] font-semibold`}
      >
        <div className="overflow-hidden">
          <ClickableComponent>
            <div className={`slide-up-animation text-[185px]`}>장윤호</div>
          </ClickableComponent>
        </div>

        <div className="overflow-hidden">
          <div
            className={`slide-up-animation text-[185px]`}
            style={{ animationDelay: "350ms" }}
          >
            JANG YUN HO
          </div>
        </div>

        <div className="overflow-hidden absolute inset-auto top-1/2">
          <div
            className={`slide-up-animation text-3xl text-gray-400 font-light`}
            style={{ animationDelay: "750ms" }}
            onAnimationEnd={onEndIntro}
          >
            FRONT-END WEB DEVELOPER
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
