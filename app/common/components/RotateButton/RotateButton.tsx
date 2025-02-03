import { FC, ReactNode } from "react";

import "./button.css";

interface RotateButtonProps {
  padSize?: string;
  children: ReactNode;
}

const RotateButton: FC<RotateButtonProps> = ({
  padSize = "1.05em",
  children,
}) => {
  return (
    <div
      className="rotate-button rounded-full bg-black px-10 font-bold text-white text-center w-fit overflow-hidden cursor-pointer select-none"
      style={
        {
          "--pad": padSize,
        } as React.CSSProperties
      }
    >
      <div className="flex flex-col gap-4">
        <div className="">{children}</div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default RotateButton;
