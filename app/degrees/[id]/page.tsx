import { FC } from "react";

interface DegreePageProps {
  params: Promise<{ id: string }>;
}

const DegreePage: FC<DegreePageProps> = async ({ params }) => {
  const id = (await params).id;

  return <div>{id}번 Degree 페이지</div>;
};

export default DegreePage;
