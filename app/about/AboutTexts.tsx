"use client";

import React, { FC } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

type AboutTextsProps = Record<string, never>;

const AboutTexts: FC<AboutTextsProps> = () => {
  useGSAP(() => {
    gsap.from(".text-container", {
      scrollTrigger: {
        trigger: ".text-container",
        start: "top 90%",
        end: "+=300 15%",
        scrub: 2,
      },
      opacity: 0,
      y: 50,
      filter: "blur(8px)",
      ease: "power2.out",
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
          title="성장과 지원동기"
          content={`AI 어플리케이션의 'Frontend/Backend 시스템 설계 및 구현'을 웹 서비스 실무 경험과 CS 기본기를 바탕으로 즉시 수행할 수 있는 풀스택 엔지니어입니다. 약 3년간 프론트엔드 실무에서 React·JavaScript를 중심으로 기능 개발과 상태 관리, 성능, 에러 처리, 사용자 경험을 고려하여 서비스 완성도를 끌어올리는 역할을 수행했습니다. 동시에 프레임워크를 쓰는 수준에 머무르지 않고 요청이 실제로 어떻게 흘러가고 병목과 오류가 어디서 발생하는지와 같은 기본기를 다지기 위해 정글 부트캠프에 참여했고 자료구조, 알고리즘, 운영체제, 네트워크, 브라우저 동작 등 학습하고 웹 서버를 직접 만들면서 기본기를 체계적으로 다졌습니다. 정글 최종 프로젝트에서는 자동 더빙 서비스의 에디터를 주로 담당하며, 프론트 개발과 함께 백엔드 설계, 구현과 비동기 워커까지 함께 개발하며 풀스택 개발로 제품으로 완성했습니다. 이 과정에서 요구사항을 서비스 플로우로 정리하고 데이터, API 설계 및 예외 처리와 운영 관점까지 고려하는 방식으로 풀스택 구현 역량을 확장했습니다. 프론트엔드 실무 능력과 정글에서 다진 기본기를 바탕으로, 서비스를 E2E로 설계 및 구현하는 Fullstack Engineer로 기여하겠습니다.`}
        />

        <CoverLetter
          title="문제 해결 태도"
          content={`복잡한 문제를 작은 단위로 쪼개 정의하고, 원리 수준에서 원인을 설명할 수 있을 때까지 파고드는 개발자입니다. 프론트엔드 실무에서 만날 수 있는 문제들을 해결하며 겉으로 드러나는 증상들만 고치는 스스로에 한계를 느꼈고, 정글에서 자료구조, 운영체제 등 기반 원리를 직접 구현하며 문제를 감으로 수정하기보다, 어느 단계에서 무슨 문제가 있는지 확인하고 설명하는 방식으로 접근하게 됐습니다. 정글 최종 프로젝트에서 자동 더빙의 간헐 실패를 운이 나쁜 버그가 아닌, 조건에 따라 달라지는 현상으로 보고 실패하는 케이스를 정의하기 위해 더빙의 각 단계를 나눠 무엇이 입력되고 보장되어야 하는지 정리했고, 구간별 로그를 통해 실패 조건을 찾았습니다. 발화 세그먼트 길이에 따라 TTS가 실패하는 패턴을 찾아 세그먼트 분할/병합 전처리로 보완하였습니다. 또한, 더빙 편집 에디터와 같은 복잡한 기능을 작은 문제 단위로 쪼개 순서대로 완성해 나갔습니다. 단계별로 목표를 정의하여 타임라인 세그먼트 계산과 같은 순수로직은 입력, 결과를 정의해 테스트 코드를 작성하고, UI / 미디어 동기화 처럼 테스트가 어려운 부분은 시나리오와 측정 기준 등을 정해 문제들을 쪼개고 정의했습니다. 이처럼, 복잡한 문제를 작은 단위로 나누고 하나씩 파고들며 해결 가능한 형태로 전환해 나가는 문제 해결 역량을 갖추게 되었습니다.`}
        />

        <CoverLetter
          title="협업과 포부"
          content={`팀과 함께 문제를 끝까지 풀어가며 소통하는 개발자입니다. 말의 요지를 빨리 파악하는 편이라, 팀 회의에서 서로 전달이 꼬일 때마다 각자의 의견 핵심을 짧게 정리해 전달해주는 역할을 자주 맡았습니다. 제 의견을 먼저 내기보다 동료의 말을 요약해 되짚어 주고 그 위에 제 생각을 더하다 보니, 팀원의 소통을 도우면서도 의견을 부드럽게 제시할 수 있었습니다. 또한, 문제 원인을 끝까지 추적하고자 하여 맡은 일만 끝내기 보다 서비스 전체를 함께 보려고 합니다. 로그와 코드를 함께 보며 어디에서 문제가 시작되는지 팀과 이야기하고, 제 담당이 아니어도 필요하면 디버깅에 참여해 해결하였습니다. 이런 태도를 통해 새 팀에 합류해도 요구사항을 빠르게 이해하고, 다양한 포지션의 팀원들과 소통하며 맡은 일뿐 아니라 연결된 문제까지 함께 해결하는 방식으로 빠르게 적응해 기여하겠습니다.`}
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
