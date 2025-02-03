"use client";

import { FC } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

interface AboutTextsProps {}

const AboutTexts: FC<AboutTextsProps> = () => {
  useGSAP(() => {
    gsap.from(".text-container", {
      scrollTrigger: {
        trigger: ".text-container",
        start: "top 90%",
        end: "+=300 15%",
        scrub: 2,
      },
      borderTopLeftRadius: "50%",
      borderTopRightRadius: "50%",
    });

    gsap.utils.toArray<HTMLElement>(".title").forEach((el) =>
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          scrub: 1,
          start: "top 85%",
          end: "bottom 35%",
        },
        scale: 0.85,
        opacity: 0.4,
        y: 65,
        filter: "blur(5px)",
      })
    );

    gsap.utils.toArray<HTMLElement>(".content").forEach((el) =>
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          scrub: 3,
          start: "top 85%",
          end: "+=80 35%",
        },
        scale: 0.85,
        opacity: 0.4,
        y: 75,
        filter: "blur(10px)",
      })
    );
  });

  return (
    <section className="bg-white py-80 text-container">
      <header>
        <h1 className="w-[45vw] mx-auto text-[4em] font-bold mb-20">
          ABOUT ME
        </h1>
      </header>
      <div className="flex flex-col gap-32 w-[45vw] mx-auto ">
        <CoverLetter
          title="프론트엔드 개발자로써의 과정"
          content="진로를 선택하는 과정에서 IT 전문학교에 입학 하였고, 2년간 정보보호를 전공으로 네트워크, 암호학, 포렌식 등 여러 분야를 배웠습니다. 다양한 분야에 관심을 가지는 편인데, 학습하는 과정 중에 관심가는 분야들을 따로 공부하기도 하였습니다. 당시, JAVA나 C언어를 통해 개발하는 것에 가장 관심을 가져 졸업한 후에 본격적으로, 개발 학습을 위한 강좌와 교육을 수료했습니다. JAVA Spring을 통해 웹 백엔드를 주로 개발하는 교육이었으나, JS를 통한 프론트 개발에 더 흥미를 느껴 수료 이후 프론트 개발자로 취업했습니다. 2개의 회사에 총 3년 재직(3개월 + 2년 9개월)하면서 주로, Next, React로 웹 프론트로 여러 프로젝트에 참여했으며, CRA처럼 사내 프론트 개발 보일러 플레이트를 제작하며 빌드 과정과 배포 설정에 대해서도 다뤘습니다. 또한, 사내 컴포넌트 패키지 개발 경험도 있습니다. 반응형 개발과 React-native와 Webview를 사용하여 동일한 소스를 기반으로 웹과 앱을 운영하기도 하였습니다."
        />

        <CoverLetter
          title="함께 일 하는 스타일"
          content="내향적인 유형이지만, 동료들에게는 먼저 다가가고 말도 많이 하는 편입니다. 밝고 두루두루 잘 지내는 편이라 타 부서 사람들과도 원만히 지내 부서 간 소통 창구 역할을 하기도 했습니다. 업무에서는 주로 프론트 리드를 맡아 결정 사항이나 진행 공유 등 소통을 주도하였습니다. 새 프로젝트를 진행하면서, 서버와 프론트가 각각 다른 일정으로 따로 개발하는게 우려되어 서버팀과 개발 진행사항 및 API 요구사항에 대해 공유 및 조율하는 회의를 주관하여, 무사히 일을 마칠 수 있었습니다. 비 효율적 회의에 힘듦을 느껴 회의에 확실한 목적을 세우고 따로 할 수 있는 준비는 모두 마친 후에 의견 교류에만 집중된 회의가 이루어지도록 노력합니다. 사담도 좋아하지만, 회의시간 보다는 별도의 다른 시간을 가지는 것이 효율적이라 생각했습니다. 언젠가 회사에 불만이 생길 수 있는데, 막연한 불만으로 담아두기 보다 구체적으로 정리해야 개선의 여지가 있다고 믿어, 불만이 무엇인지 기록 및 정리 하고 혼자서도 개선할 수 있는 부분을 찾아 먼저 노력했는가 되짚어 봅니다. 그래도, 안된다면 기회가 될 때 상급자(관리자)에게 말하는 편입니다. 그렇게 정리된 내용을 전해 함께 많은 부분을 개선할 수 있었습니다."
        />

        <CoverLetter
          title="성장과 이루고 싶은 것"
          content="일을 하면 경험을 얻고 실력이 향상됩니다. 요청에 따라 개발하고, 새로운 것을 도입하고, 일이 진행되는 일련의 과정을 겪고 겪어야 알 수 있는 문제를 해결하며 성장합니다. 다만, 회사에서 하는 일은 어쩔 수 없이 과정보다 결과가 좀 더 중요하다고 느낍니다. 혹자는, 학습과 성장을 위해선 input, output의 균형이 중요하다 합니다. 일은 출력에 더 치중하기 때문에, 별도의 공부로 채워 넣거나 프로그래밍 사고 향상을 위한 깊은 고민과 같은 시간도 필요합니다. 그래서, 회사에서 퇴근하면 2~4시간씩 공부하는 시간을 가져 학습합니다. 이처럼, 다양한 환경에서도 학습하고 성장할 부분을 찾고, 성장에 부족한 부분은 찾아 채워 나갈 수 있습니다. 또한, 회사에 성과나 성장에 기여하고 싶습니다. 회사의 서비스에 큰 개선을 가져오거나, 개발한 프로젝트를 통해 많은 가치를 불러오게 된다면 일을 하면서 그보다 뿌듯한 일은 없을 것 입니다."
        />
      </div>
    </section>
  );
};

export default AboutTexts;

interface CoverLetterProps {
  title: string;
  content: string;
}

const CoverLetter: FC<CoverLetterProps> = ({ title, content }) => {
  return (
    <section className="">
      <header className="title">
        <h1 className="font-bold text-[3.125em]">{title}</h1>
      </header>
      <p className="content text-2xl">{content}</p>
    </section>
  );
};
