import { FC } from "react";

interface StackTapeLineProps {
  direction?: "left" | "right";
}

const STACKS = [
  "WEB",
  "Front-End",
  "Developer",
  "CSS",
  "Javascript",
  "Typescript",
  "ReactJS",
  "NextJS",
  "React-Native",
  "UX/UI",
  "Tailwind",
  "Jotai",
];

const StackTapeLine: FC<StackTapeLineProps> = ({ direction = "left" }) => {
  return (
    <div
      className="scroller flex items-center gap-3 text-2xl text-white w-full max-w-full"
      data-animated={true}
      data-direction={direction}
    >
      {Array.from({ length: 40 }, (_, i) => STACKS[i % STACKS.length]).map(
        (stack, i) => (
          <div
            key={i}
            className="bg-white bg-opacity-30 rounded-md px-3 py-2 backdrop-blur-sm whitespace-nowrap"
          >
            {stack}
          </div>
        )
      )}
    </div>
  );
};

export default StackTapeLine;
