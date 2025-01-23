import { FC } from "react";

import "./style/animation.css";

interface LineGridProps {}

const LineGrid: FC<LineGridProps> = () => {
  return (
    <div className="absolute inset-0 grid grid-cols-6 justify-between place-items-center w-full h-full overflow-hidden">
      {new Array(6).fill(0).map((_, i) => (
        <div
          key={i}
          className="slide-up-animation bg-gray-200 w-0.5 h-full static"
          style={{ animationDelay: `${i * 100}ms`, animationDuration: "1.2s" }}
        />
      ))}
    </div>
  );
};

export default LineGrid;
