import { FC } from "react";
import { Project } from "../types/project";
import { Noto_Sans_KR } from "next/font/google";

import "./style/project.css";

import RotateButton from "@/app/common/components/RotateButton/RotateButton";
import ProjectImageSlider from "./ProjectImageSlider";
import ProjectAbout from "./ProjectAbout";
import ProjectPoints from "./ProjectPoints";
import Link from "next/link";

const noto = Noto_Sans_KR({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

interface ProjectPageViewProps {
  project: Project;
  nextProject: Project;
}

const ProjectPageView: FC<ProjectPageViewProps> = ({
  project,
  nextProject,
}) => {
  return (
    <div
      className={`${noto.className} project-detail`}
      style={{ background: "var(--bg-color)" }}
    >
      <ProjectImageSlider
        fixedEl={<ProjectAbout project={project} />}
        screenShots={project.screenShots ?? []}
      />

      {project.points?.length && (
        <div className="w-screen py-5 px-7">
          <ProjectPoints points={project.points} />
        </div>
      )}

      {/* next project show */}
      <div>
        <div className="flex flex-col items-center justify-center bg-white rounded-t-[12.5%] h-[44.5em]">
          <div className="font-light text-gray-400 text-[1.525em]">
            Next Project
          </div>
          <div className="font-bold text-[5.25em] mb-10">
            {nextProject.title.toUpperCase()}
          </div>

          <Link href={`/projects/${nextProject.id}`}>
            <RotateButton>Next Project</RotateButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectPageView;
