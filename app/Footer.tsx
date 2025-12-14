import { FC } from "react";
import ClickableComponent from "./common/components/ClickableComponent";
import Link from "next/link";

type FooterProps = Record<string, never>;

const Footer: FC<FooterProps> = () => {
  return (
    <ClickableComponent cursorHide>
      <div className="h-60 bg-gray-900 relative">
        <section className="px-7 py-5 flex flex-col h-full">
          {/* <Logo dark /> */}
          <div className="flex gap-12 flex-wrap mb-3 font-bold">
            <Link href={"/about"}>
              <div className="text-white">ABOUT</div>
            </Link>
            <Link href={"/projects"}>
              <div className="text-white">PROJECTS</div>
            </Link>
            <Link href={"/experience"}>
              <div className="text-white">EXPERIENCE</div>
            </Link>
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
    </ClickableComponent>
  );
};

export default Footer;
