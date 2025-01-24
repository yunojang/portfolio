import { FC, useMemo } from "react";

import AutoSlider from "@/app/common/components/AutoSlider/AutoSlider";
import Image from "next/image";

interface StackSliderProps {}

const STACK_PATHS: string[] = [
  "css-logo.webp",
  "js-logo.png",
  "ts-logo.png",
  "react-icon.png",
  "next-icon.svg",
  "jotai-logo.png",
  "tailwind.png",
  "rn-icon.png",
  "git-logo.png",
  "gsap-icon.svg",
].map((endPath) => `/icons/${endPath}`);

const StackSlider: FC<StackSliderProps> = () => {
  const Stacks = useMemo(
    () =>
      STACK_PATHS.map((path, i) => (
        <div
          className="bg-[#efefed] rounded-lg w-[80px] h-[80px] flex items-center justify-center"
          key={i}
        >
          <Image
            src={path}
            className="w-3/5 h-3/5 object-contain"
            width={100}
            height={100}
            alt="stack"
          />
        </div>
      )),
    []
  );

  return <AutoSlider items={Stacks} itemHeight="80px" itemWidth="80px" />;
};

export default StackSlider;
