import { IconableStackName, Project } from "../projects/types/project";

export const projects: Project[] = [
  {
    id: "1",
    title: "Safely",
    position: "Front-end Web/Mobile Developer",
    period: "2024",
    thumbnail: "/images/safely-logo.png",
    thumbStacks: [IconableStackName.next],
    stacks: ["Next", "React", "Typescript", "React-Native", "Jotai"],
    member: "Web Front-end 2인, Server 3인",
    state: "운영중",
    description: `산업안전문서 관리를 위한 SaaS형 웹 서비스, OCR을 통해 문서 자동 분류 및 관리 기능.`,
    company: "wizcore",
    points: [
      {
        subject: "Work",
        description: `계정 및 문서 관리, 문서 뷰어, 관리자 페이지 등 핵심 기능을 개발하였으며, 문서 업로드 시 OCR 처리 요청 및 대기 상태 관리를 구현하고, OCR 결과에 따라 문서를 자동 분류하고 폴더 구조에 반영되도록 처리하였습니다.`,
      },
      {
        subject: "Structure",
        description: `중첩된 폴더 구조를 고려해 컴포넌트를 재사용할 수 있도록 설계하고, 유지보수성과 확장성을 높이기 위한 구조적 고민을 경험했습니다.`,
      },
      {
        subject: "PDF Viewer",
        description:
          "문서 뷰어는 React PDF Viewer를 활용해 구현하였으며, Intersection Observer API를 통해 사용자의 스크롤 위치에 따라 현재 페이지를 식별하고, 관련 기능과 연결하는 로직도 개발하였습니다.",
      },
      {
        subject: "Concurrency",
        description:
          "하나의 워크스페이스를 여러 사용자가 동시에 사용하는 환경에서 발생할 수 있는 수정, 삭제 충돌 상황에 대비해 적절한 에러 처리 및 사용자 경험을 고려하여 개발하였습니다",
      },
    ],
    screenShots: [
      "/images/safely-logo.png",
      "/images/safely/sf-ss2.png",
      "/images/safely/sf-ss3.png",
      "/images/safely/sf-ss4.png",
      "/images/safely/sf-ss5.png",
      "/images/safely-ss2.png",
    ],
  },

  {
    id: "2",
    title: "Find-e",
    position: "Front-end Web/Mobile Developer",
    period: "2023-2024",
    thumbnail: "/images/finde/finde-logo.png",
    description: `실무 자료를 공유하고 탐색할 수 있는 서비스`,
    stacks: ["React", "Typescript", "react-query", "tailwind"],
    member: "Front 1인, Server 2인",
    state: "운영 중단",
    company: "wizcore",

    screenShots: [
      "/images/finde/finde-logo.png",
      "/images/finde/finde-ss1.png",
      "/images/finde/finde-ss2.png",
    ],

    points: [
      {
        subject: "Work",
        description: `검색 포털과 유사한 사용자 인터페이스를 구현하고, 핀터레스트 스타일의 멀티 컬럼 이미지 탭 UI를 개발하며 복잡한 레이아웃 처리 경험을 쌓았습니다. `,
      },
      {
        subject: "Cross-Platform",
        description: `복잡한 레이아웃에서 반응형 웹을 개발하였고, React Native, 웹뷰 기반 안드로이드 앱까지 개발, 배포하며 다양한 디바이스 환경에서 사용자 경험 차이를 고려하게 되었습니다. 이 경험을 통해 멀티 플랫폼 대응 역량을 키웠고, UI 요소의 유지보수성과 확장성을 고려한 컴포넌트 설계 역량을 강화할 수 있었습니다. `,
      },
      {
        subject: "Reward",
        description: `리워드 기능을 개발하며 react-query의 revalidate 설정을 활용해 데이터 일관성 유지, 최신 상태 반영, UX 개선을 위한 고민을 통해 개발하였습니다.`,
      },
    ],

    thumbStacks: [IconableStackName.react],
  },

  {
    id: "3",
    title: "wcm",
    position: "Front-end Web Developer",
    period: "2022-2024",
    description: `사내 백오피스 계약 관리 서비스(WCM)`,
    stacks: ["React", "Typescript", "react-query", "tailwind"],
    member: "Front 2인, Server 2인",
    state: "운영중",
    points: [
      {
        subject: "Achievements",
        description: `실제 사내 계약 업무에 도입되어 50건 이상 및 수백만~수억 규모 거래에 사용되었습니다.`,
      },

      {
        subject: "Chat",
        description: `WebSocket 활용 실시간 채팅 시스템 및 인터페이스 개발. 채팅 내 멘션 자동완성을 위해 자모분리 후 비교하여 개발하였습니다.`,
      },
      {
        subject: "Work",
        description: `유사한 관리 페이지가 많은 구조를 고려해 페이지 설계를 추상화하고, 재사용성과 유지보수성을 높였습니다. 
        또한, 사용자별 거래액 및 계약 건수 등을 확인할 수 있는 대시보드와 차트 시각화 기능을 구현하였으며, 차트는 주로 echarts를 사용하며, 다양한 차트에 대응할 수 있도록 데이터를 고유의 구조로 변환하고, 차트 컴포넌트를 개발하도록 구현하였습니다. 대시보드의 레이아웃 구성과 패널의 드래그 앤 드롭 기능은 react-grid-layout을 활용하여 구현하였습니다.`,
      },
    ],
    company: "wizcore",
    thumbStacks: [IconableStackName.react],
  },

  {
    id: "4",
    title: "절삭공구 플랫폼",
    position: "Front-end Web Developer",
    period: "2022",
    description: `국책 과제로 진행된 절삭공구 추천, 관리 플랫폼`,
    stacks: ["React", "Typescript", "react-query", "tailwind"],
    member: "Front 2인, Server 3인",
    state: "-",
    company: "wizcore",
    points: [
      {
        subject: "Work",
        description: `과제 요구사항을 바탕으로 공구 등록, 관리와 추천, 상태 예측 기능을 개발하였습니다.`,
      },
      {
        subject: "usability",
        description: `사용자 입력에 따른 절삭공구 예측 결과를 API로 요청하고(axios + react-query), 응답 데이터를 echarts로 시각화하는 기능을 구현하며, 입력 흐름 과 데이터 반영 시점 등 사용성을 고려하여 사용자 인터랙션을 개선하였습니다.`,
      },
    ],
    // thumbnail: "/images/finde/finde-logo.png",
    thumbStacks: [IconableStackName.react],
  },

  {
    id: "5",
    title: "component lib",
    position: "Front-end Web Developer",
    period: "2021-2023",
    description: `사내 UI 개발 단계의 일관성과 생산성을 높이기 위한 React 컴포넌트 라이브러리`,
    stacks: ["React", "Typescript", "Emotion", "Storybook", "plop"],
    member: "Front 1인",
    company: "wizcore",
    state: "-",
    points: [
      {
        subject: "Work",
        description: `약 20~30개의 컴포넌트를 개발하였으며, 버튼, 인풋 등 기본 요소부터 모달, 드로어 등 상태 기반 컴포넌트까지 포함되었습니다. 번들러 설정부터 사내 패키지 저장소 (verdaccio)에 배포하며, 모듈 시스템과 배포 구조에 대한 이해를 쌓을 수 있었습니다. `,
      },
      {
        subject: "Benchmarking",
        description: `시중 UI 라이브러리들의 소스를 보고 기능과 구현을 분석, 참고하여 재사용성과 확장성을 고려한 컴포넌트를 설계 및 개발하였습니다.`,
      },
      {
        subject: "Share",
        description: `사내 개발자가 쉽게 사용할 수 있도록 API 설계와 문서화를 고려하여, Storybook 도입 하여 문서 자동화와 협업 효율을 증대시켰습니다.`,
      },
      {
        subject: "Archivement",
        description: `사내 일부 프로젝트에 도입하여 사용 피드백을 기반으로 사용성을 개선해 나갔습니다.`,
      },
    ],
    thumbStacks: [IconableStackName.react],
  },

  {
    id: "6",
    title: "Toonivie",
    description: `Pixi.js를 활용한 타임라인 기반 웹 영상 편집 툴`,
    position: "Front-end Web Developer",
    period: "2020",
    stacks: ["React"],
    member: "-",
    state: "-",
    company: "ideaconcert",
    points: [
      {
        subject: "Work",
        description:
          "영상 및 이미지 요소를 타임라인에 배치하고, 구간에 맞춰 해당 요소들이 등장,전환되도록 하여, 영상 미리보기 인터페이스를 구현하였습니다. ",
      },
    ],
    // thumbnail: "/images/finde/finde-logo.png",
    thumbStacks: [IconableStackName.react],
  },

  {
    id: "7",
    title: "portfolio",
    description: `자기 자신을 소개하기 위한 포트폴리오 사이트`,
    position: "Front-end Web Developer",
    stacks: ["Next", "Typescript", "Jotai", "tailwind"],
    member: "1인",
    state: "운영중",
    period: "2025",
    thumbnail: "/images/pt/pt-main1.png",
    thumbStacks: [IconableStackName.next],
    screenShots: [
      "/images/pt/pt-main.png",
      "/images/pt/pt-main1.png",
      "/images/pt/pt-about.png",
      "/images/pt/pt-exp.png",
    ],
    points: [
      {
        subject: "Meaning",
        description:
          "회사 업무에선 디자인, UX를 위한 효과 및 애니메이션 적용 경험이 없어 여러 효과를 적용 해보기 위함. 해외 개발자 포트폴리오에 영감을 받아 개인 포트폴리오 사이트 제작",
      },
      {
        subject: "Scrolling",
        description:
          "스크롤 감응 애니메이션 적용을 위해 GSAP (ScrollTrigger, scrub 등), CSS (animation-timeline) 활용. 마우스 scroll delta값 누적 및 requestAnimationFrame 활용 scroll smooth 개발",
      },
      {
        subject: "Slider",
        description:
          "무한 반복 슬라이더 CSS Animation Infinity의 한 사이클 종료 후 원래 위치로 돌아가는 성질 활용하여 CSS로만 구현. 슬라이더 넓이의 스크롤 요소와 sticky 속성 활용 스크롤시 가로로 움직이는 이미지 슬라이더 구현",
      },
    ],
  },

  // {
  //   id: "8",
  //   title: "Molak",
  //   description: `최근 많아진 웹 드라마 및 웹 포맷 영상물을 OTT 처럼 추천하고 검색하고 시청하는 플랫폼`,
  //   position: "Front-end Web Developer",
  //   stacks: ["Next", "Typescript", "Jotai", "tailwind"],
  //   member: "Front 1인, Sever 1인",
  //   period: "2023",
  //   state: "운영 중단",
  //   thumbnail: "/images/molak/molak-logo.jpg",
  //   thumbStacks: [IconableStackName.next],
  //   screenShots: ["/images/molak/molak-logo.jpg"],
  // },

  {
    id: "8",
    title: "pomodoro",
    description: `업무나 공부 효율 향상에 도움을 주는 뽀모도로 타이머 시간 관리법을 웹으로 구현, 정해놓은 집중시간과 휴식시간을 반복하여 시각적으로 보여주고 알림을 준다`,
    position: "Front-end Web Developer",
    member: "1인",
    period: "2021",
    stacks: ["Javascript"],
    state: "운영중",
    thumbnail: "/images/pm/PM-SS2.png",
    screenShots: ["/images/pm/PM-SS1.png", "/images/pm/PM-SS2.png"],
    thumbStacks: [IconableStackName.js],
  },
];
