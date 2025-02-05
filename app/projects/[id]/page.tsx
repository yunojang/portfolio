import { FC } from "react";

import { IconableStackName, Project } from "../types/project";
import ProjectPageView from "./ProjectPageView";
import { projects } from "@/app/data/projects";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

const ProjectPage: FC<ProjectPageProps> = async ({ params }) => {
  const id = (await params).id;
  const project = projects.find((prj) => prj.id === id);

  if (!project) throw new Error("Invalid id");

  const nextProject =
    projects.find((prj) => Number(prj.id) === Number(id) + 1) ?? projects[0];

  return (
    <div>
      <ProjectPageView project={project} nextProject={nextProject} />
    </div>
  );
};

export default ProjectPage;
