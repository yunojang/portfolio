"use client";

import { FC, ReactNode } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

import Image from "next/image";

interface ProjectImageSliderProps {
  screenShots: string[];
  fixedEl: ReactNode;
}

const ProjectImageSlider: FC<ProjectImageSliderProps> = ({
  fixedEl,
  screenShots,
}) => {
  const imageWidth = 1080;
  const gapSize = 92;
  const padSize = 140;

  const projectImageScrollerWidth = `${
    (screenShots?.length ?? 0) * (imageWidth + gapSize) + (padSize - gapSize)
  }`;

  useGSAP(() => {
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

  return (
    <div
      className="slide-scroll-container w-screen"
      style={{
        height: `calc(100vh + ${projectImageScrollerWidth}px)`,
      }}
    >
      {/* < scroll container */}

      {/* top about section */}
      <section className="w-screen h-screen  pl-10 py-5 sticky top-0">
        {/* 전체 flex-box : 설명영역 / 사진영역 */}
        <div className="flex gap-5 w-full h-full">
          {/* flex-box 설명영역 - 제목 / 설명 */}
          {fixedEl}

          {/* 스크린샷 슬라이더 */}
          <main className="flex-1 h-full overflow-hidden">
            <div
              className="image-slider flex items-center h-full "
              style={{
                gap: `${gapSize}px`,
                padding: `4.25em ${padSize}px`,
              }}
            >
              {screenShots?.map((ss, i) => (
                <Image
                  key={i}
                  src={ss}
                  alt="screenshot"
                  className="object-cover h-full"
                  style={{
                    minWidth: imageWidth,
                    maxWidth: imageWidth,
                    objectPosition: "center 35%",
                  }}
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
