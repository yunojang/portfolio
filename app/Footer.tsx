import { FC } from "react";
import Logo from "./common/Logo";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="h-60 bg-gray-900">
      <section className="px-7 py-5 flex flex-col h-full">
        {/* <Logo dark /> */}
        <div className="flex gap-7 flex-wrap text-lg">
          <div className="text-white">PROFILE</div>
          <div className="text-white">CAREER</div>
          <div className="text-white">PROJECTS</div>
          <div className="text-white">ETC</div>
        </div>

        <div className="text-white mt-3">
          3년차 개발자로써,
          <br />
          프로젝트 경험과 적극적인 도전 자세를 섞어 훌륭한 프로덕트가 되도록
          기여하고
          <br /> 그룹의 성취를 위해 부단히 노력하는 구성원이 되겠습니다.
        </div>

        <div className="mt-auto flex justify-between text-sm">
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
