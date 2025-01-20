import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import "@/app/common/style/glitch.css";
import "./style/profile.css";

import StackTapeLine from "./components/StackTapeLine";

interface ProfileAnimationProps {}

const ProfileAnimation: FC<ProfileAnimationProps> = () => {
  return (
    <section className="min-h-screen flex-col">
      <header className="text-[10em] text-center">
        <div className="title-bg bg-black h-[150vh]">
          <div className="mask-x flex items-center justify-center relative w-full h-full">
            <div className="absolute top-1/3 z-10 w-full">
              <StackTapeLine />
            </div>

            <div className="absolute top-2/3 translate-y-1/2 z-10 w-full">
              <StackTapeLine direction="right" />
            </div>

            <span className="glitch text-white">
              <span aria-hidden="true">INTRODUCE</span>
              INTRODUCE
              <span aria-hidden="true">INTRODUCE</span>
            </span>
          </div>
        </div>
      </header>
    </section>
  );
};

export default ProfileAnimation;

// const FloatingText: FC = () => {
//   return <></>;
// };

const FloatingText: FC<{
  children?: ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, delay = 0.2, ...rest }) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "100%", filter: "blur(5px)" }}
      whileInView={{
        opacity: 1,
        translateY: "0",
        filter: "blur(0px)",
        transition: {
          delay,
          duration: 0.5,
          ease: [0.2, 0.86, 0.57, 1.11],
        },
      }}
      viewport={{ once: false, amount: 1 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
