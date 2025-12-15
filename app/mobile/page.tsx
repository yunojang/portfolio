import { FC } from "react";
import LineGrid from "../common/LineGrid";
import ResponsiveRedirect from "../common/components/ResponsiveRedirect";

type MobilePageProps = Record<string, never>;

const MobilePage: FC<MobilePageProps> = () => {
  return (
    <div className="h-screen flex items-center justify-center text-[2.725em] font-medium bg-white">
      <ResponsiveRedirect width={900} diff="bigger" path="/" />

      <LineGrid />

      <div className="z-10 text-center" style={{ wordBreak: "keep-all" }}>
        모바일 반응형 준비중입니다.
      </div>
    </div>
  );
};

export default MobilePage;
