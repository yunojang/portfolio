import { useSpring, animated } from "@react-spring/web";
import { FC } from "react";

interface ExpendableBoxProps {
  size?: string;
  expendRatio?: number;
  innerText?: string;
}

const ExpendableBox: FC<ExpendableBoxProps> = ({
  size = "72px",
  expendRatio = 4.8,
  innerText,
}) => {
  const [springs, api] = useSpring(() => ({
    from: { scale: 1, opacity: 0, blur: 5 },
  }));

  return (
    <button
      className="relative"
      onMouseEnter={() =>
        api.start({
          from: { scale: 1, opacity: 0, blur: 20 },
          to: { scale: expendRatio, opacity: 1, blur: 0 },
        })
      }
      onMouseLeave={() =>
        api.start({
          from: { scale: expendRatio, opacity: 1, blur: 0 },
          to: { scale: 1, opacity: 0, blur: 20 },
        })
      }
    >
      <animated.div
        style={{
          width: size,
          height: size,
          background: "black",
          borderRadius: "6px",
          cursor: "pointer",
          position: "relative",
          transform: springs.scale.to((v) => `scale(${v})`),
          //   transform: springs.scale.to((v) => `scale(${v})`),
        }}
        // className="hover:scale-[4.2] transition-all duration-500 relative"
        // className="bg-black rounded-lg cursor-pointer"
      />
      <animated.div
        style={{
          opacity: springs.opacity,
          filter: springs.blur.to((v) => `blur(${v}px)`),
          color: "white", // text-white
          position: "absolute", // absolute
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "1.75rem", // text-2xl
          fontFamily: "serif", // font-serif
          letterSpacing: "normal", // tracking-normal
          lineHeight: "2rem", // leading-8
        }}
        // className="text-white absolute inset-0 text-2xl font-serif tracking-normal leading-8"
      >
        {innerText}
      </animated.div>
    </button>
  );
};

export default ExpendableBox;
