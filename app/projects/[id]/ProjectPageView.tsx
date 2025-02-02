"use client";

import { FC } from "react";
import { Project } from "../types/project";
import { IBM_Plex_Sans_KR, Noto_Sans_KR } from "next/font/google";

import "./style/project.css";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

const ibm = IBM_Plex_Sans_KR({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

const noto = Noto_Sans_KR({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

interface ProjectPageViewProps {
  project: Project;
}

gsap.registerPlugin(ScrollTrigger);

const ProjectPageView: FC<ProjectPageViewProps> = ({ project }) => {
  const imageWidth = 760;
  const gapSize = 92;
  const padSize = 140;

  const projectImageScrollerWidth = `${
    (project.screenShots?.length ?? 0) * (imageWidth + gapSize)
    // 4 * (imageWidth + gapSize) + padSize * 2
  }`;

  useGSAP(() => {
    gsap.to(".image-slider", {
      scrollTrigger: {
        trigger: ".slider-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
      x: -projectImageScrollerWidth + imageWidth,
    });
  }, []);

  return (
    <div className={`${noto.className} project-detail`}>
      {/* scroll container */}
      {/* first screen (about + screen shot) */}
      <div
        className="slider-container w-screen"
        style={{
          height: `calc(100vh + ${projectImageScrollerWidth}px)`,
        }}
      >
        {/* top about section */}
        <section className="w-screen h-screen bg-[#EFECD2] pl-10 py-5 sticky top-0">
          {/* 전체 flex-box : 설명영역 / 사진영역 */}
          <div className="flex gap-5 w-full h-full">
            {/* flex-box 설명영역 - 제목 / 설명 */}
            <header className="w-[37.5em] h-full flex flex-col gap-20 pb-20 pr-12">
              <h1 className={`title ${ibm.className} text-left`}>
                {project.title.toUpperCase()}
              </h1>

              <div className="flex flex-col justify-between flex-1">
                <div className="description">{project.description}</div>

                <div className="flex flex-col gap-1 justify-end">
                  <ProjectAboutHolder
                    line
                    label="(Position)"
                    content={project.position}
                  />
                  <ProjectAboutHolder
                    line
                    label="(Year)"
                    content={project.period}
                  />
                  <ProjectAboutHolder
                    line
                    label="(In)"
                    content={project.company?.toUpperCase() ?? "Side(Toy)"}
                  />
                </div>

                <div className="flex flex-col items-start gap-7 ">
                  <div className="description flex flex-col">
                    <div>(Stacks)</div>
                    <div className="ml-8">
                      {project.stacks?.reduce(
                        (acc, stack) => (acc += `, ${stack}`)
                      )}
                    </div>
                  </div>
                  <div className="description flex flex-col">
                    <div>(Member)</div>
                    <div className="ml-8">{project.member ?? ""}</div>
                  </div>
                  <div className="description flex flex-col">
                    <div>(State)</div>
                    <div className="ml-8">{project.state ?? ""}</div>
                  </div>
                </div>
              </div>
            </header>

            {/* 스크린샷 슬라이더 */}
            <main className="flex-1 h-full  overflow-hidden">
              <div
                className="image-slider flex items-center h-full flex-nowrap w-fit"
                style={{
                  gap: `${gapSize}px`,
                  padding: `8.525em ${padSize}px`,
                }}
              >
                {project.screenShots?.map((ss, i) => (
                  <Image
                    key={i}
                    src={ss}
                    alt="screenshot"
                    className="object-cover h-full"
                    width={imageWidth}
                    height={imageWidth * 0.75}
                  />
                ))}
              </div>
            </main>
          </div>
        </section>
      </div>

      <div className="w-screen h-screen">
        <div>하단 컨텐츠입니다</div>
      </div>
    </div>
  );
};

export default ProjectPageView;

interface ProjectAboutHolderProps {
  label: string;
  content: string;
  line?: boolean;
}

const ProjectAboutHolder: FC<ProjectAboutHolderProps> = ({
  content,
  label,
  line,
}) => {
  return (
    <div>
      <div className="flex justify-between items-start gap-2">
        <div className="label">{label}</div>
        <div className="description">{content}</div>
      </div>

      {line && (
        <div
          className="border-t-[1px] border-dashed"
          style={{ borderColor: "var(--font-color)" }}
        />
      )}
    </div>
  );
};
