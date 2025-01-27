import { FC } from "react";

import "./style/animation.css";

interface LineGridProps {
  count?: number;
}

const LineGrid: FC<LineGridProps> = ({ count = 6 }) => {
  return (
    <div
      className="absolute inset-0 grid justify-between place-items-center w-full h-full overflow-hidden"
      style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
    >
      {new Array(count).fill(0).map((_, i) => (
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
