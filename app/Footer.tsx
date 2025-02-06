import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="h-60 bg-gray-900 relative">
      <section className="px-7 py-5 flex flex-col h-full">
        {/* <Logo dark /> */}
        <div className="flex gap-7 flex-wrap mb-3 font-bold">
          <div className="text-white">ABOUT</div>
          <div className="text-white">PROJECTS</div>
          <div className="text-white">EXPERIENCE</div>
        </div>

        <div className="text-white mt-3 text-[0.85em] ">
          3년차 개발자로써,
          <br />
          프로젝트 경험과 적극적인 도전 자세로 훌륭한 결과물에 기여하고
          <br /> 그룹의 성취를 위해 노력하는 구성원이 되겠습니다.
        </div>

        <div className="mt-auto flex justify-between text-xs">
          <div className="text-white">
            Copyright 2025. YUNHO. all rights reserved.
          </div>

          <div className="text-white flex gap-1">
            <span className="px-3 bg-black">NextJS v15</span>
            <span className="px-3 bg-black">React v19</span>
            <span className="px-3 bg-black">Vercel</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
