import { FC, MouseEventHandler } from "react";

interface StairButtonProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
  active?: boolean;
}

const StairButton: FC<StairButtonProps> = ({ onClick, active }) => {
  return (
    <div onClick={onClick}>
      <div className="flex flex-col gap-3 items-center cursor-pointer">
        <div
          className={`h-0.5 w-16 bg-white transition-all duration-300 ${
            active ? "translate-y-2 rotate-25" : ""
          }`}
        />
        <div
          className={`h-0.5 w-16 bg-white transition-all duration-300 ${
            active ? "-translate-y-1.5 -rotate-25" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default StairButton;
