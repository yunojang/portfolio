"use client";

import React, { FC } from "react";

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
    <section
      className="bg-white py-80 text-container"
      style={{ "--view-width": "45vw" } as React.CSSProperties}
    >
      <header>
        <h1 className="view-width mx-auto text-[4em] font-bold mb-20">
          ABOUT ME
        </h1>
      </header>
      <div className="view-width flex flex-col gap-32 mx-auto ">
        <CoverLetter
          title="프론트엔드 개발자로써의 과정"
          content={`진로 선택 과정에서 IT 전문학교에 입학 한 뒤, 2년간 정보보호 전공으로 네트워크, 암호학, 포렌식 등 여러 분야를 배웠습니다. 다양한 분야에 관심을 가지고 관심가는 분야들을 따로 공부하기도 하였습니다. 
            그 중 JAVA, C언어 등 개발하는 것에 가장 관심을 가져 졸업 후, 본격적으로 개발을 위한 강좌와 교육을 수료했습니다. JAVA Spring 개발 교육과 함께 진행한 JS 프론트 개발에 흥미를 느껴 수료 이후 프론트 개발자로 취업했습니다.
            2개의 회사에 총 3년 재직하며 주로, Next, React 기반 웹 프론트엔드 개발 및 React-Native(WebView)기반 앱 개발로 여러 프로젝트에 참여했습니다. 작은 규모의 팀이지만 프론트 리드를 담당하여, 프로젝트의 초기 단계 부터 개발과 빌드 설정 및 배포까지 담당하였습니다.
            많은 사용자는 아니지만, 리드로써 프론트 운영에 전적으로 책임감을 가지고 만든 여러 프로젝트가 기업이나 개인에게 판매 및 운영되었고 그렇기에 얻을 수 있는 경험을 기반으로 앞으로도 더욱 성장하고 기여하는 개발자가 될 것 입니다.`}
        />

        <CoverLetter
          title="함께 일 하는 스타일"
          content={`기본적으론 내향적이지만, 함께하는 동료들에게는 먼저 다가가고 말도 많이 하는 편입니다. 
            밝고 두루두루 잘 지내는 편이라 타 부서 사람들과도 원만히 지내 부서 간 소통 창구 역할을 하기도 했습니다. 업무에서는 프론트 리드로써 결정 사항이나 진행 공유 등 소통을 주도하였습니다. 
            새 프로젝트 시작 때, 서버와 프론트가 소통없이 따로 개발하는게 우려되어 서버팀과 개발 진행사항 및 API 요구사항에 대해 공유 및 조율하는 
            회의를 주관하는 등 사전 작업을 진행했고, 구성원들이 되돌아보며 그 때 따로 회의하지 않았다면 오래 걸려 큰일 날 뻔 했다고 말해주기도 하였습니다. 비 효율적 회의에 힘듦을 느껴 회의에는 확실한 목적을 세우고 개별 준비는 모두 완료된 후, 의견 교류에만 집중된 회의가 이루어지도록 노력합니다.
            언젠가 회사에 불만이 생길 수 있는데, 막연한 불만으로 담아두기 보다 무엇이 불만인지를 알아야 개선하는 대화도 가능하기 때문에, 따로 정리 하여 혼자서도 개선할 수 있는 부분을 찾아 먼저 노력했는가 되짚어 봅니다. 그래도, 개선을 요청하고 싶을 때 상급자(관리자)에게 말하는 편입니다. 항상 정리하던 내용을 전달하여 함께 많은 부분을 개선할 수 있었습니다.`}
        />

        <CoverLetter
          title="성장과 이루고 싶은 것"
          content={`일을 하면서도 실력이 향상됩니다. 요청에 따라 개발하고, 여러 문제를 해결하며 성장할 수 있습니다. 
            다만, 회사에서 하는 일은 과정보다 결과가 더 중요하다고 생각합니다. 혹자는, 학습과 성장을 위해선 input, output의 균형이 중요하다 합니다. 
            일은 출력에 더 치중해야 하기 때문에, 공부로 input을 채워 넣거나 프로그래밍 사고 향상을 위한 깊은 고민과 같은 시간이 모자랄 수 있습니다. 그래서, 회사에서 퇴근하면 스터디카페를 이용하여 2~4시간씩 공부하는 시간을 가져 학습했습니다.
            이처럼, 다양한 환경에서도 학습하고 성장할 부분을 찾으며, 성장에 부족한 부분이 있다면 찾아 채워 나갈 수 있습니다. 
            이러한 노력의 산물로 회사에 성과나 성장에 기여하고 싶습니다.
            회사의 서비스에 큰 개선을 가져오거나, 개발한 프로젝트를 통해 많은 가치를 불러오게 된다면 일을 하면서 그보다 뿌듯한 일은 없을 것 입니다.`}
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
