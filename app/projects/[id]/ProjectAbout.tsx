import { FC } from "react";
import { Project } from "../types/project";

import "@/app/common/style/animation.css";
interface ProjectAboutProps {
  project: Project;
}

import { IBM_Plex_Sans_KR } from "next/font/google";
const ibm = IBM_Plex_Sans_KR({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

const ProjectAbout: FC<ProjectAboutProps> = ({ project }) => {
  return (
    <header className="xl:w-[37.5em] lg:w-[31.725em] md:w-[28.725em] h-full flex flex-col gap-20 pb-20 pr-12">
      <div className="overflow-hidden">
        <h1 className={`slide-up-animation title ${ibm.className} text-left`}>
          {project.title.toUpperCase()}
        </h1>
      </div>

      <div className="flex flex-col justify-between flex-1">
        <div className="description">{project.description}</div>

        <div className="flex flex-col gap-1 justify-end">
          <ProjectAboutHolder
            line
            label="(Position)"
            content={project.position}
          />
          <ProjectAboutHolder line label="(Year)" content={project.period} />
          <ProjectAboutHolder
            line
            label="(In)"
            content={project.company?.toUpperCase() ?? "Side(Toy)"}
          />
        </div>

        <div className="flex flex-col items-start gap-5">
          <div className="flex flex-col">
            <div className="label">(Stacks)</div>
            <div className="ml-8 description">
              {project.stacks?.reduce((acc, stack) => (acc += `, ${stack}`))}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="label">(Member)</div>
            <div className="ml-8 description">{project.member ?? ""}</div>
          </div>
          <div className="flex flex-col">
            <div className="label">(State)</div>
            <div className="ml-8 description">{project.state ?? ""}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProjectAbout;

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
