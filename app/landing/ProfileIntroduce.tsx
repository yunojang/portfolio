import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";

import "@/app/common/style/glitch.css";

import { IBM_Plex_Sans_KR } from "next/font/google";
import ExpendableBox from "./components/ExpendableBox";
const doHyeon = IBM_Plex_Sans_KR({
  weight: ["400", "600"],
  subsets: ["latin"],
});

interface ProfileIntroduceProps {}

const ProfileIntroduce: FC<ProfileIntroduceProps> = () => {
  return (
    <section className="min-h-screen relative flex-col py-5">
      <header className="text-[160px] mb-36 text-center px-36">
        <div className="bg-black rounded-2xl">
          <span className="glitch text-white">
            <span aria-hidden="true">INTRODUCE</span>
            INTRODUCE
            <span aria-hidden="true">INTRODUCE</span>
          </span>
        </div>
      </header>

      <main
        className={`text-[70px] ${doHyeon.className} leading-[1.25em] tracking-widest text-black mb-52`}
      >
        <div className="flex flex-col items-center font-semibold">
          <FloatingText delay={0.2} className="flex gap-8 items-center ">
            <div>JANG YUNHO</div>
            <ExpendableBox innerText="About me" />
            <div>장윤호,</div>
            <div>Live in korea</div>
            <ExpendableBox innerText="Location" />
          </FloatingText>
          <FloatingText delay={0.3} className="">
            <div>성실, 열정, 책임감으로 아이디어와 활력이 되는,</div>
          </FloatingText>
          <FloatingText delay={0.4} className="">
            <div>성장과 결과물에 최선을 다하는 사람</div>
          </FloatingText>
          <FloatingText delay={0.5} className="flex gap-8 items-center ">
            <div>Front-end Web Developer</div>
            <ExpendableBox innerText="Careers" />
          </FloatingText>
        </div>
      </main>
    </section>
  );
};

export default ProfileIntroduce;

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
