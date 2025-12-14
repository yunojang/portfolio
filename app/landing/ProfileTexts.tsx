"use client";

import { FC, useRef } from "react";

import { IBM_Plex_Sans_KR } from "next/font/google";
import { useRouter } from "next/navigation";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import ClickableComponent from "../common/components/ClickableComponent";

gsap.registerPlugin(ScrollTrigger);

const ibm = IBM_Plex_Sans_KR({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

interface ProfileTextsProps {
  onScrollCareer(): void;
}

const introLines = [
  {
    keyword: "프론트 실무",
    text: "약 3년의 프론트 실무를 바탕으로 React와 JS 계열 언어에 자신이 있습니다.",
  },
  {
    keyword: "기본기",
    text: "프레임워크 사용뿐 아니라 기본기를 다지기 위해 정글 부트캠프에서 CS·운영체제·웹 렌더링을 학습했습니다.",
  },
  {
    keyword: "AI 활용",
    text: "AI 기술을 적극 사용해 생산성을 높이면서도 코드 검증 기준을 두고 적용해 완성도를 유지합니다.",
  },
];

const ProfileTexts: FC<ProfileTextsProps> = ({ onScrollCareer }) => {
  const router = useRouter();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#intro-text",
        start: "top 80%",
        end: "bottom 35%",
        scrub: 1,
        // markers: true,
      },
    });
    tl.from(".intro-line", {
      y: 50,
      opacity: 0,
      filter: "blur(14px)",
      scale: 0.97,
      duration: 0.95,
      ease: "power2.out",
      stagger: 0.2,
    });
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
      className={`text-[2em] ${ibm.className} leading-[1.3em] tracking-tight text-black`}
    >
      <section
        id="intro-text"
        // ref={textSection}
        className="flex flex-col items-center justify-start pt-4"
      >
        <div className="w-full max-w-[1050px] rounded-[22px] bg-white/70 backdrop-blur shadow-xl border border-black/5 px-10 py-12">
          <div className="mb-6 flex items-center gap-3 text-lg text-gray-500">
            <div className="uppercase tracking-[0.3em] text-[0.65em] font-semibold text-gray-600">
              INTRO
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {introLines.map((line, idx) => (
              <IntroLine key={idx} keyword={line.keyword} text={line.text} />
            ))}
          </div>

          <div className="mt-8 flex gap-2 flex-wrap text-[0.6em] text-gray-800">
            <ClickableComponent cursorHide>
              <button
                onClick={() => router.push("/about")}
                className="inline-flex items-center gap-2 px-5 py-1 rounded-full border border-gray-800 bg-black text-white hover:-translate-y-0.5 hover:shadow-md transition-all"
              >
                About me
              </button>
            </ClickableComponent>
            <ClickableComponent cursorHide>
              <button
                onClick={
                  onScrollCareer
                  // () => window.scrollBy(0, (container.current?.clientHeight ?? 500) + 500)
                }
                className="inline-flex items-center gap-2 px-5 py-1 rounded-full border border-gray-200 bg-white text-gray-900 hover:-translate-y-0.5 hover:shadow-md transition-all"
              >
                Careers
              </button>
            </ClickableComponent>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProfileTexts;

const KeywordBadge: FC<{ label: string }> = ({ label }) => {
  return (
    <div className="inline-flex h-6 items-center justify-center self-start rounded-full border border-slate-900/15 bg-slate-100 px-2.5 text-sm  tracking-tight text-slate-900 uppercase shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
      {label}
    </div>
  );
};

const IntroLine: FC<{ keyword: string; text: string }> = ({
  keyword,
  text,
}) => {
  return (
    <div className="intro-line flex flex-col gap-2 border-b border-black/5 pb-4">
      <KeywordBadge label={keyword} />
      <div className="text-lg leading-snug text-gray-900">{text}</div>
    </div>
  );
};
