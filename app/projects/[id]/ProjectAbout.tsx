import { FC } from "react";
import { Project } from "../types/project";

import "@/app/common/style/animation.css";
interface ProjectAboutProps {
  project: Project;
}

import { IBM_Plex_Sans_KR } from "next/font/google";
import { cx } from "@emotion/css";
const ibm = IBM_Plex_Sans_KR({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

const ProjectAbout: FC<ProjectAboutProps> = ({ project }) => {
  return (
    <header className="xl:w-[37.5em] lg:w-[31.725em] md:w-[28.725em] h-full flex flex-col gap-20 pb-20 pr-12">
      <div className="">
        <h1
          className={cx(
            project.title.length >= 8 ? "heading" : "title",
            `slide-up-animation  ${ibm.className} text-left`
          )}
        >
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
          <ProjectAboutHolder line label="(Period)" content={project.period} />
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
          {project.member && (
            <div className="flex flex-col">
              <div className="label">(Member)</div>
              <div className="ml-8 description">{project.member}</div>
            </div>
          )}
          {project.links && project.links.length > 0 && (
            <div className="flex flex-col gap-2">
              <div className="label">(Links)</div>
              <div className="ml-8 flex flex-wrap gap-2">
                {project.links.map((link, idx) =>
                  link.url ? (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="description underline hover:opacity-75 transition-opacity"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <div key={idx} className="description">
                      {link.label}
                    </div>
                  )
                )}
              </div>
            </div>
          )}
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
