"use client";

import { FC, useRef } from "react";

import { IBM_Plex_Sans_KR } from "next/font/google";
import ExpendableBox from "./components/ExpendableBox";

import { useRouter } from "next/navigation";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const doHyeon = IBM_Plex_Sans_KR({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

interface ProfileTextsProps {
  onScrollCareer(): void;
}

const ProfileTexts: FC<ProfileTextsProps> = ({ onScrollCareer }) => {
  const router = useRouter();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#intro-text",
        start: "top 80%",
        // end: "bottom 35%",
        // scrub: 2,
        // markers: true,
      },
    });
    // gsap.utils.toArray(".text");
    tl.from(".text1", {
      x: -85,
      // scale: 0.8,
      opacity: 0,
      filter: "blur(10px)",
      duration: 0.8,
    })
      .from(
        ".text2",
        {
          x: -85,
          // scale: 0.8,
          opacity: 0,
          filter: "blur(10px)",
          duration: 0.8,
        },
        "-=0.7"
      )
      .from(
        ".text3",
        {
          x: -85,
          // scale: 0.8,
          opacity: 0,
          filter: "blur(10px)",
          duration: 0.8,
        },
        "-=0.7"
      )
      .from(
        ".text4",
        {
          x: -85,
          // scale: 0.8,
          opacity: 0,
          filter: "blur(10px)",
          duration: 1.2,
        },
        "-=0.7"
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
      className={`text-[3.75em] ${doHyeon.className} leading-[1.4em] tracking-widest text-black`}
    >
      <section
        id="intro-text"
        // ref={textSection}
        className="flex flex-col items-center justify-center font-medium"
      >
        {/* <FloatingText delay={0.2} className="flex gap-8 items-center "> */}
        <div className="flex gap-6 items-center text1">
          <div>{`I'm Jang Yun Ho`}</div>

          <ExpendableBox
            innerText="About me"
            onClick={() => router.push("/about")}
          />

          <div>Living in korea</div>
          <ExpendableBox
            innerText="Location"
            onClick={() => router.push("/about/location")}
          />
        </div>

        {/* </FloatingText> */}
        {/* <FloatingText delay={0.3} className=""> */}
        <div className="text2">
          성실함과 책임감으로 아이디어와 활력을 일으키는,
        </div>
        {/* </FloatingText> */}
        {/* <FloatingText delay={0.4} className=""> */}
        <div className="text3">결과물과 성장에 최선을 다하는,</div>
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
