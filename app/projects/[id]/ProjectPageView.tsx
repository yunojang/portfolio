import { FC } from "react";
import { Project } from "../types/project";
import { Noto_Sans_KR } from "next/font/google";

import "./style/project.css";

import RotateButton from "@/app/common/components/RotateButton/RotateButton";
import ProjectImageSlider from "./ProjectImageSlider";
import ProjectAbout from "./ProjectAbout";
import ProjectPoints from "./ProjectPoints";

const noto = Noto_Sans_KR({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

interface ProjectPageViewProps {
  project: Project;
}

const ProjectPageView: FC<ProjectPageViewProps> = ({ project }) => {
  return (
    <div
      className={`${noto.className} project-detail`}
      style={{ background: "var(--bg-color)" }}
    >
      <ProjectImageSlider
        screenShots={project.screenShots ?? []}
        fixedEl={<ProjectAbout project={project} />}
      />

      <div className="w-screen py-5 px-7">
        <ProjectPoints points={project.points ?? []} />
      </div>

      {/* next project show */}
      <div>
        <div className="flex flex-col items-center justify-center bg-white h-[44.5em]">
          <div className="font-light text-gray-400 text-[1.525em]">
            Next Project
          </div>
          <div className="font-bold text-[5.25em] mb-10">FIND-E</div>

          <RotateButton>Next Project</RotateButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectPageView;
