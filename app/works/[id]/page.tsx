import { FC } from "react";

interface WorkPageProps {
  params: Promise<{ id: string }>;
}

const WorkPage: FC<WorkPageProps> = async ({ params }) => {
  const id = (await params).id;

  return <div>{id}번 work 페이지</div>;
};

export default WorkPage;
