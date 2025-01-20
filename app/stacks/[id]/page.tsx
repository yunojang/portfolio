import { FC } from "react";

interface StackPageProps {
  params: Promise<{ id: string }>;
}

const StackPage: FC<StackPageProps> = async ({ params }) => {
  const id = (await params).id;

  return (
    <div className="relative top-0 ">
      <div className="bg-green-300">{id}번 Stack 페이지</div>
      <div className="bg-green-300">{id}번 Stack 페이지</div>
      <div className="bg-green-300">{id}번 Stack 페이지</div>
      <div className="bg-green-300">{id}번 Stack 페이지</div>
      <div className="bg-green-300 h-52">
        <div className="sticky top-0">멈춰라잇!</div>
      </div>
      <div className="h-screen sticky top-20 bg-red-200">1</div>
      <div className="h-screen sticky top-20 bg-red-200">2</div>
      <div className="h-[200vh] sticky top-0 left-0 bg-blue-50">3</div>
      <div className="h-screen sticky top-20 bg-red-200">2</div>
    </div>
  );
};

export default StackPage;
