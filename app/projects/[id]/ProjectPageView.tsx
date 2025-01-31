import { FC } from "react";
import { Project } from "../types/project";
import { IBM_Plex_Sans_KR, Noto_Sans_KR } from "next/font/google";

import "./style/project.css";

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

const ProjectPageView: FC<ProjectPageViewProps> = ({ project }) => {
  return (
    <div className={`${noto.className} project-detail`}>
      {/* top about section */}
      <section className="w-screen h-screen bg-[#EFECD2] pl-10 py-5">
        {/* 전체 flex-box : 설명영역 / 사진영역 */}
        <div className="flex gap-5 w-full h-full">
          {/* flex-box 설명영역 - 제목 / 설명 */}
          <header className="w-[37.5em] h-full flex flex-col gap-20 pb-14">
            <h1 className={`title ${ibm.className} text-left`}>
              {project.title.toUpperCase()}
            </h1>

            <div className="flex flex-col justify-between flex-1">
              <div className="flex flex-col gap-2 ml-16 justify-end">
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

              <div className="description px-5">{project.description}</div>

              <div className="flex flex-col items-start gap-7 ">
                <div className="description flex flex-col">
                  <div>(Stacks)</div>
                  <div className="ml-16">
                    {project.stacks?.reduce(
                      (acc, stack) => (acc += `, ${stack}`)
                    )}
                  </div>
                </div>
                <div className="description flex flex-col">
                  <div>(Member)</div>
                  <div className="ml-16">{project.member ?? ""}</div>
                </div>
                <div className="description flex flex-col">
                  <div>(State)</div>
                  <div className="ml-16">{project.state ?? ""}</div>
                </div>
              </div>
            </div>
          </header>

          {/* 스크린샷 슬라이더 */}
          <main className="flex-1 h-full bg-white">
            <div className="pl-10"></div>
          </main>
        </div>
      </section>
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
          className="decoration-dotted h-0.5"
          style={{ background: "var(--font-color)" }}
        />
      )}
    </div>
  );
};
