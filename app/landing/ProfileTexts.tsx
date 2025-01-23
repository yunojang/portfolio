"use client";

import { FC, useEffect, useRef } from "react";

import { Smooch_Sans } from "next/font/google";
import ExpendableBox from "./components/ExpendableBox";

import { useRouter } from "next/navigation";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const doHyeon = Smooch_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

interface ProfileTextsProps {
  onScrollCareer(): void;
}

const ProfileTexts: FC<ProfileTextsProps> = ({ onScrollCareer }) => {
  const router = useRouter();

  const showVars = {
    y: 0,
    x: 0,
    rotate: 0,
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    duration: 3,
    // stagger: 2,
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#intro-text",
        start: "top bottom",
        end: "bottom 55%",
        scrub: 3,
        // markers: true,
      },
    });
    // gsap.utils.toArray(".text");
    tl.from(".text1", {
      y: 85,
      scale: 0.8,
      opacity: 0.15,
      filter: "blur(10px)",
    })
      .from(".text2", {
        y: 85,
        scale: 0.8,
        opacity: 0.15,
        filter: "blur(10px)",
      })
      .from(".text3", {
        y: 85,
        scale: 0.8,
        opacity: 0.15,
        filter: "blur(10px)",
      })
      .from(".text4", {
        y: 85,
        scale: 0.8,
        opacity: 0.15,
        filter: "blur(10px)",
      })
      .fromTo(
        "text-container",
        {
          overflow: "hidden",
        },
        {
          overflow: "visible",
        }
      );
  });

  // const textSection = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const onIntersection = (entries: IntersectionObserverEntry[]) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("show");
  //       } else {
  //         entry.target.classList.remove("show");
  //       }
  //     });
  //   };

  //   const observer = new IntersectionObserver(onIntersection, {
  //     rootMargin: "-15% 0px -35% 0px",
  //     threshold: 0,
  //   });

  //   if (textSection.current) {
  //     const texts = textSection.current.querySelectorAll(".text");
  //     texts.forEach((el) => observer.observe(el));
  //   }
  // }, []);

  const container = useRef<HTMLDivElement>(null);

  return (
    <main
      ref={container}
      className={`text-[70px] ${doHyeon.className} leading-[1.8em] tracking-widest text-black py-32 mb-[20rem] sticky top-0`}
    >
      <section
        id="intro-text"
        // ref={textSection}
        className="flex flex-col items-center justify-center font-semibold"
      >
        {/* <FloatingText delay={0.2} className="flex gap-8 items-center "> */}
        <div className="flex gap-6 items-center text1">
          <div>HI!</div>
          <ExpendableBox
            innerText="About me"
            onClick={() => router.push("/about")}
          />
          <div>{`I'm Jang Yun Ho,`}</div>
          <div>Living in korea</div>
          <ExpendableBox
            innerText="Location"
            onClick={() => router.push("/about/location")}
          />
        </div>

        {/* </FloatingText> */}
        {/* <FloatingText delay={0.3} className=""> */}
        <div className="text2">
          열정, 성실함, 책임감으로 아이디어와 활력이 되는,
        </div>
        {/* </FloatingText> */}
        {/* <FloatingText delay={0.4} className=""> */}
        <div className="text3">결과물과 그룹의 성장에 기여하는,</div>
        {/* </FloatingText> */}
        {/* <FloatingText delay={0.5} className="flex gap-8 items-center "> */}
        <div className="text4 flex gap-6 items-center">
          <div>Front-end Web Developer</div>
          <ExpendableBox
            innerText="Careers"
            onClick={
              onScrollCareer
              // () => window.scrollBy(0, (container.current?.clientHeight ?? 500) + 500)
            }
          />
        </div>
        {/* </FloatingText> */}
      </section>
    </main>
  );
};

export default ProfileTexts;
