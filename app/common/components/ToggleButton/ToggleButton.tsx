"use clinet";

import { cx } from "@emotion/css";
import { FC, useEffect, useState } from "react";

interface ToggleButtonProps {
  onClick?(selectedId: string): void;
  items: { text: string; id: string }[];
  itemHeight: string;
}

const GAP = "1.25em";

const ToggleButton: FC<ToggleButtonProps> = ({
  items,
  onClick,
  itemHeight = "1.75em",
}) => {
  const [selectIndex, setSelectIdx] = useState<number>(0);
  const [activeTransition, setActiveTransition] = useState(true);
  const [ready, setReady] = useState(true);

  const handleClick = () => {
    if (!ready) return;
    const newIndex = selectIndex + 1;

    setActiveTransition(true);

    onClick?.(items[newIndex % items.length].id);
    setSelectIdx(newIndex);
    setReady(false);
  };

  const handleTransitionEnd = () => {
    setReady(true);

    if (selectIndex !== 0 && selectIndex % items.length === 0) {
      setSelectIdx(0);
      setActiveTransition(false);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="select-none overflow-hidden hover:scale-105 transition-all h-fit"
    >
      <div
        className={cx(
          activeTransition ? "transition-all duration-500" : "",
          "flex flex-col "
        )}
        onTransitionEnd={handleTransitionEnd}
        style={{
          gap: GAP,
          height: itemHeight,
          transform: `translateY(calc((${itemHeight} + ${GAP})* ${selectIndex} * -1))`,
        }}
      >
        {/* <div>{items[selectIndex]}</div> */}
        {items.concat(items).map((item, i) => (
          <div key={i} style={{ minHeight: itemHeight }}>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToggleButton;
