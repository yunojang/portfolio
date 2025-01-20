import { FC, useEffect, useRef } from "react";

import "./style/profile.css";

import { Space_Mono } from "next/font/google";
import ExpendableBox from "./components/ExpendableBox";

const doHyeon = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

interface ProfileTextsProps {}

const ProfileTexts: FC<ProfileTextsProps> = () => {
  const textSection = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    };

    const observer = new IntersectionObserver(onIntersection, {
      rootMargin: "-15% 0px -35% 0px",
      threshold: 0,
    });

    if (textSection.current) {
      const texts = textSection.current.querySelectorAll(".text");
      texts.forEach((el) => observer.observe(el));
    }
  }, []);

  return (
    <main
      className={`text-[70px] ${doHyeon.className} leading-[1.25em] tracking-widest text-black py-80 mb-52 sticky top-0`}
    >
      <section
        id="intro-text"
        ref={textSection}
        className="flex flex-col items-center justify-center font-semibold"
      >
        {/* <FloatingText delay={0.2} className="flex gap-8 items-center "> */}
        <div className="flex gap-6 items-center text">
          <div>JANG YUNHO</div>
          <ExpendableBox innerText="About me" />
          <div>장윤호,</div>
          <div>Live in korea</div>
          <ExpendableBox innerText="Location" />
        </div>

        {/* </FloatingText> */}
        {/* <FloatingText delay={0.3} className=""> */}
        <div className="text">성실함과 책임감으로 아이디어와 활력이 되는,</div>
        {/* </FloatingText> */}
        {/* <FloatingText delay={0.4} className=""> */}
        <div className="text">성장과 결과물에 최선을 다하는 사람</div>
        {/* </FloatingText> */}
        {/* <FloatingText delay={0.5} className="flex gap-8 items-center "> */}
        <div className="text flex gap-6 items-center">
          <div>Front-end Web Developer</div>
          <ExpendableBox innerText="Careers" />
        </div>
        {/* </FloatingText> */}
      </section>
    </main>
  );
};

export default ProfileTexts;
