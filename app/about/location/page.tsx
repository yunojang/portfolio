import { FC } from "react";

import "../style/location.css";
import "@/app/common/style/animation.css";
import LocationMap from "./LocationMapArea";
import { Noto_Sans_KR } from "next/font/google";
import LineGrid from "@/app/common/LineGrid";
import LocationDiff from "./LocationDiff";

const noto = Noto_Sans_KR({
  weight: ["400", "700"],
  subsets: ["latin"],
});

type LocationPageProps = Record<string, never>;

const LocationPage: FC<LocationPageProps> = () => {
  return (
    <div className={`${noto.className} min-h-screen py-14 relative`}>
      <LineGrid count={5} />

      <div className={`overflow-hidden text-center mb-10`}>
        <span className="slide-up-animation font-bold text-[8em]">
          LOCATION
        </span>
      </div>

      <div className="mb-20">
        <LocationMap />
      </div>

      <div className=" relative z-10 ">
        <LocationDiff />
      </div>
    </div>
  );
};

export default LocationPage;
