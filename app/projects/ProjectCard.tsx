"use client";

import { FC, ReactNode } from "react";

import { cx } from "@emotion/css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Image from "next/image";

import { SiNextdotjs } from "react-icons/si";
import { FaJs, FaReact } from "react-icons/fa6";

import { IBM_Plex_Sans_KR } from "next/font/google";
import ClickableComponent from "../common/components/ClickableComponent";
import { IconableStackName, Project } from "./types/project";
import Link from "next/link";

const ibm = IBM_Plex_Sans_KR({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

interface ProjectCardProps {
  project: Project;
  direction: "left" | "right";
  keyIndex: string;
}

const StackIcon: { [k in IconableStackName]: ReactNode } = {
  [IconableStackName.next]: <SiNextdotjs />,
  [IconableStackName.react]: <FaReact />,
  [IconableStackName.js]: <FaJs />,
};

gsap.registerPlugin(ScrollTrigger);

const ProjectCard: FC<ProjectCardProps> = ({
  project,
  direction,
  keyIndex,
}) => {
  const getClassName = (name: string) => `${keyIndex}-${name}`;

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${getClassName("container")}`,
        start: "82.5% bottom",
        end: "top 25%",
        scrub: 1.5,
      },
    });

    tl.from(`.${getClassName("container")} .image-overlay`, {
      clipPath: "rect(100% 100% 100% 0%)",
      duration: 2,
    })
      .to(
        `.${getClassName("container")} .image-overlay>img`,
        {
          scale: 1.05,
        },
        "-=1.25"
      )
      .from(
        `.${getClassName("container")} .title`,
        {
          y: "100%",
        },
        "<"
      )
      .from(
        `.${getClassName("container")} .description`,
        {
          opacity: 0,
          y: "-100%",
        },
        "-=.5"
      )
      .from(
        `.${getClassName("container")} .icon`,
        {
          opacity: 0,
        },
        "<"
      );
  });

  return (
    <div
      className={`${getClassName("container")} w-full px-20 mb-52 ${
        ibm.className
      }`}
    >
      <div
        className={cx(
          "w-fit",
          direction === "left" ? "mr-auto text-left" : "ml-auto text-right"
        )}
      >
        <ClickableComponent>
          <Link href={`/projects/${project.id}`}>
            <div className="flex items-end gap-10 min-h-[24.75vw]">
              {project.thumbnail && (
                <div
                  className={cx(
                    direction === "right" ? "order-1" : "",
                    `image-overlay w-[32.5vw] h-[22.5vw] overflow-hidden`
                  )}
                  style={{
                    clipPath: "rect(0% 100% 100% 0%)",
                  }}
                >
                  <Image
                    src={project.thumbnail}
                    width={800}
                    height={500}
                    className={"w-full h-full object-cover top-0 left-0"}
                    alt="project-thumbnail "
                  />
                </div>
              )}

              <div className="flex items-end gap-10">
                <div>
                  <div className="overflow-hidden">
                    <div className="title font-bold text-[3.95em]">
                      {project.title.toUpperCase()}
                    </div>
                  </div>
                  <div className="overlay overflow-hidden">
                    <div className="description text-[1.05em]">
                      <div className="text-gray-500 ">{project.position}</div>
                      <div className="text-gray-500 font-medium ">
                        {project.period}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={cx(
                    direction === "right" ? "-order-1" : "",
                    "icon text-[2.25em] text-gray-500"
                  )}
                >
                  {StackIcon[project.thumbStacks?.[0]]}
                </div>
              </div>
            </div>
          </Link>
        </ClickableComponent>
      </div>
    </div>
  );
};

export default ProjectCard;
