import { FC } from "react";

import { Orbit } from "next/font/google";

const orbit = Orbit({
  weight: ["400"],
  subsets: ["latin"],
});

interface LogoProps {
  dark?: boolean;
  href?: string;
}

const Logo: FC<LogoProps> = ({ dark, href }) => {
  return (
    <div
      className={`flex flex-col gap-0.5 items-start text-2xl [&>*]:h-5 mb-5 ml-3 cursor-pointer select-none ${
        orbit.className
      } ${dark ? "text-white" : "text-black"}`}
    >
      <div className="">JANGYUNHO</div>
      <div className="">장윤호#</div>
      <div className="">Developer</div>
    </div>
  );
};

export default Logo;
