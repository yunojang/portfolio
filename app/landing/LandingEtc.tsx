import Link from "next/link";
import { FC } from "react";
import ClickableComponent from "../common/components/ClickableComponent";

import { Noto_Sans_KR, IBM_Plex_Sans_KR } from "next/font/google";
const ibm = IBM_Plex_Sans_KR({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

import "./style/project.css";

interface LandingEtcProps {}

const LandingEtc: FC<LandingEtcProps> = () => {
  return (
    <div className={ibm.className}>
      <div className="flex flex-col items-center justify-center py-40 gap-5 mb-40">
        <div className="text-center text-[2.25em]">
          더 많은 프로젝트 알아보기
        </div>

        <Link
          href={"/projects"}
          className="rotate-button rounded-full bg-black px-10 font-bold text-white text-center w-fit overflow-hidden "
          style={
            {
              "--pad": "1.05em",
            } as React.CSSProperties
          }
        >
          <div className="flex flex-col gap-4">
            <div className="">All Projects</div>
            <div className="">All Projects</div>
          </div>
        </Link>
      </div>

      {/* ETC - 학위, 자격증, 받은 교육  - 타임라인 */}
      <div className="mb-40">
        <ClickableComponent>
          <Link
            href={"/experience"}
            className="flex flex-col items-center justify-center py-20 gap-3 "
          >
            <div className="text-center text-[8.75em]">모든 경험 살펴보기</div>
            <div className="text-gray-400 font-medium text-3xl">
              Experience - 지나온 타임라인으로 알아보기
            </div>
          </Link>
        </ClickableComponent>
      </div>
    </div>
  );
};

export default LandingEtc;
