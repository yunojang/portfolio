import { FC } from "react";

interface StackPageProps {
  params: Promise<{ id: string }>;
}

const StackPage: FC<StackPageProps> = async ({ params }) => {
  const id = (await params).id;

  return <div>{id}번 Stack 페이지</div>;
};

export default StackPage;
