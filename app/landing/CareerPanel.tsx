import { FC, ReactElement, ReactNode, useState } from "react";
import { Smooch_Sans } from "next/font/google";
import Image from "next/image";

import "./style/career.css";

const smoochSans = Smooch_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

interface Project {
  thumbnailSrc: string;
  title: string;
  id: string;
}

export interface Career {
  projects: Project[];
  companyName: string;
  startDate: Date;
  endDate: Date;
  position: string;
  mainColor: string;
}

interface CareerPanelProps {
  career: Career;
}

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { padArray } from "@/utils/array";
import { cx } from "@emotion/css";
import ClickableComponent from "../common/components/ClickableComponent";
import Link from "next/link";

const ORDER = [2, 1, 3];

const CareerPanel: FC<CareerPanelProps> = ({ career }) => {
  const { companyName, startDate, endDate, mainColor, position, projects } =
    career;

  const glowedFlex = 2.8;

  const [progress, setProgress] = useState(0);
  const [focusIdx, setFocusIdx] = useState(0);

  const onCardHover = (idx: number) => {
    setFocusIdx(idx);
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.card-${companyName}-area`,
        start: "35% bottom",
        // end: "+=50 75%",
        // markers: true,
        // scrub: 1,
        onUpdate(self) {
          setProgress(self.progress);

          if (self.progress < 1) {
            setFocusIdx(0);
          }
        },
      },
    });

    tl.fromTo(
      `.${companyName}-thumbnail:nth-child(1)`,
      {
        y: "-220%",
        flexGrow: 0.55,
        height: "37.5%",
      },
      { scale: 1, flexGrow: glowedFlex, y: 0, height: "100%" }
    )
      .fromTo(
        `.${companyName}-thumbnail:nth-child(2)`,
        { x: -700 },
        { x: 0, duration: 0.4 }
      )
      .fromTo(
        `.${companyName}-thumbnail:nth-child(3)`,
        { x: 700 },
        { x: 0, duration: 0.4 },
        "-=0.2"
      );
  });

  return (
    <>
      <section
        className={`h-[105vh] sticky ${smoochSans.className}`}
        style={{
          background: mainColor,
        }}
      >
        <div className="flex items-center justify-between text-white pl-40 pr-20 h-full">
          <div className="text-[4.25em] font-semibold tracking-wider">
            {companyName.toUpperCase()}
          </div>

          <div className="w-[22.5em] h-0.5 bg-white" />

          <div className="text-3xl">
            {startDate.getFullYear() === endDate.getFullYear()
              ? startDate.getFullYear()
              : `${startDate.getFullYear()} - ${endDate.getFullYear()}`}
          </div>
          <div className="text-4xl font-medium">{position}</div>
        </div>
      </section>

      {projects.length > 0 && (
        <section
          className={`card-${companyName}-area h-[32.5vw] bg-white sticky top-0`}
        >
          <div className="flex items-center h-full px-6 py-10">
            {projects.map((project, i) => (
              <div
                key={i}
                className={cx(
                  `${companyName}-thumbnail thumbnail-container w-full h-full px-6 `
                )}
                style={{
                  order: ORDER[i],
                  flex: i === focusIdx ? glowedFlex : 1,
                }}
                onMouseEnter={project ? () => onCardHover(i) : undefined}
              >
                {project ? (
                  <Link href={`/projects/${project.id}`}>
                    <ClickableComponent className="w-full h-full">
                      <ProjectThumbCard src={project.thumbnailSrc} />
                    </ClickableComponent>
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default CareerPanel;

interface ProjectThumbCardProps {
  el?: ReactNode;
  src?: string;
}

const ProjectThumbCard: FC<ProjectThumbCardProps> = ({ el, src }) => {
  return (
    <div className="thumbnail-holder w-full h-full rounded-xl overflow-hidden shadow-lg flex items-center justify-center">
      {el && el}
      {src && (
        <Image
          src={src}
          width={400}
          height={300}
          alt="project-thumbnail"
          className="object-cover object-center w-full h-full"
        />
      )}
    </div>
  );
};
