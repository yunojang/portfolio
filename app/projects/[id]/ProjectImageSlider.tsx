"use client";

import React, { FC, ReactNode, useEffect, useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

import Image from "next/image";
import { cx } from "@emotion/css";

import "@/app/common/style/animation.css";

interface ProjectImageSliderProps {
  screenShots: string[];
  fixedEl: ReactNode;
}

const ProjectImageSlider: FC<ProjectImageSliderProps> = ({
  fixedEl,
  screenShots,
}) => {
  const imageWidth = 876;
  const gapSize = 47.75;
  const padSize = 200;

  const projectImageScrollerWidth = `${
    (screenShots?.length ?? 0) * (imageWidth + gapSize) + (padSize - gapSize)
  }`;

  const [scrolling, setScrolling] = useState(false);

  useGSAP(() => {
    ScrollTrigger.addEventListener("scrollStart", () => {
      setScrolling(true);
    });
    ScrollTrigger.addEventListener("scrollEnd", () => {
      setScrolling(false);
    });

    gsap.to(".image-slider", {
      scrollTrigger: {
        trigger: ".slide-scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
      x: -projectImageScrollerWidth + imageWidth + gapSize,
    });
  }, []);

  const imgContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-up-animation");
        }
      });
    };
    const observer = new IntersectionObserver(onIntersection, {
      rootMargin: "0% -100px 0% 0%",
    });

    if (imgContainer.current) {
      const imgs = imgContainer.current.querySelectorAll("img");
      imgs.forEach((img) => observer.observe(img));
    }
  }, []);

  return (
    <div
      className="slide-scroll-container w-screen"
      style={{
        height: `calc(100vh + ${projectImageScrollerWidth}px)`,
      }}
    >
      {/* < scroll container */}

      {/* top about section */}
      <section className="w-screen h-screen pl-10 py-5 sticky top-0">
        {/* 전체 flex-box : 설명영역 / 사진영역 */}
        <div className="flex gap-3 w-full h-full">
          {/* flex-box 설명영역 - 제목 / 설명 */}
          {fixedEl}

          {/* 스크린샷 슬라이더 */}
          <main className={cx("flex-1 h-full overflow-hidden")}>
            <div
              ref={imgContainer}
              className={"image-slider flex items-center h-full"}
              style={{
                gap: `${gapSize}px`,
                padding: `4.75em ${padSize}px`,
              }}
            >
              {screenShots?.map((ss, i) => (
                <Image
                  key={i}
                  src={ss}
                  alt="screenshot"
                  className={cx(
                    // scrolling ? "rotate-1" : "",
                    "object-cover h-full opacity-0 translate-y-full"
                  )}
                  style={
                    {
                      "--duration": "350ms",
                      clipPath: scrolling
                        ? "polygon(1.5% 0%, 100% 0%, 98.5% 100%, 0% 100%)" // 상단 두 점을 5%만큼 우측으로 이동
                        : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // 기본 사각형 모양
                      transition: "clip-path 0.25s", // clip-path에 transition을 적용
                      minWidth: imageWidth,
                      maxWidth: imageWidth,
                      objectPosition: "center 35%",
                    } as React.CSSProperties
                  }
                  width={imageWidth}
                  height={imageWidth * 0.75}
                />
              ))}
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default ProjectImageSlider;
