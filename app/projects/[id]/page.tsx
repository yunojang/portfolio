import { FC } from "react";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

const ProjectPage: FC<ProjectPageProps> = async ({ params }) => {
  const id = (await params).id;

  return <div>{id}번 Project 페이지</div>;
};

export default ProjectPage;
