import React, { FC, ReactNode } from "react";
import "./slider.css";

interface AutoSliderProps {
  items: ReactNode[];
  itemWidth: string;
  itemHeight: string;
}

const AutoSlider: FC<AutoSliderProps> = ({ items, itemHeight, itemWidth }) => {
  return (
    <div
      className="slider"
      style={
        {
          "--width": itemWidth,
          "--height": itemHeight,
          "--quantity": items.length,
          "--gap": "12px",
          "--duration": "14s",
        } as React.CSSProperties
      }
    >
      <div className="list">
        {items.concat(items).map((item, i) => (
          <div
            className="item"
            key={i}
            style={{ "--index": i } as React.CSSProperties}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
