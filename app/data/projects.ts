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
    description: `보관/관리가 필요한 문서 및 사진을 업로드하여
    OCR을 통해 자동 분류, 관리하는 솔루션.
        주로, 산업안전 문서 관리가 힘든 현장의 중대재해처벌법 대응을 위함`,
    company: "wizcore",
    points: [
      {
        subject: "Role",
        // title: "Front-end Lead",
        description: `프론트 팀에서 개발 및 리드를 담당. 프로젝트의 구조 및 개발 방식 등 결정 및 배포 설정.
               문서 관리 및 문서 뷰어 개발, 반응형 웹 및 WebView를 통한 모바일 개발과 앱 배포`,
      },
      {
        subject: "CO-OP",
        // title: "회의 주관",
        description: `팀 내 서버 개발팀과 API 개발 요구사항 회의 등을 주관하며 사전 작업 진행.
           기획팀, 디자인 외주사 등과 협업`,
      },
      {
        subject: "Stack",
        // title: "Next, Jotai",
        description: `Next를 처음으로 프로젝트에 적용하며 Next에 App Router 사용 컴포넌트별 ssr, csr 여부 구분하여 개발. 또한, state libaray로 jotai를 사용하여 간단한 사용 코드로 전역 state를 관리`,
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
    description: `자료 공유에 따른 리워드 시스템과 커뮤니티 기능이 있는, 여러 분야의 실무자를 위한 정보 및 자료를 공유하는 정보 공유 커뮤니티 플랫폼.`,
    stacks: ["React", "Typescript", "react-query", "tailwind"],
    member: "Front 1인, Server 2인",
    state: "-",
    company: "wizcore",

    screenShots: [
      "/images/finde/finde-logo.png",
      "/images/finde/finde-ss1.png",
      "/images/finde/finde-ss2.png",
    ],

    points: [
      {
        subject: "Role",
        description: `프론트 팀에서 개발 및 리드를 담당. 로그인 관련 및 OAuth, 계정 설정 관련 기능, 실무 자료 업로드와 관리, 리워드 시스템, 커뮤니티 전반적 개발`,
      },
      {
        subject: "Reward",
        description: `게시글 및 댓글 작성 시 리워드 부여로 값을 동기화 하기 위해 React-Query를 사용하여 key 무효화를 통해 구현. 상대방에 후원에 의한 리워드 변화 및 알림 구현을 위해 Server-Sent Events 사용`,
      },
      {
        subject: "WebView",
        description: `반응형 작업 및 WebView를 사용해 앱 구현. Webview Agent로 웹에서 웹뷰 환경 구분. FCM 모바일 알림 구현`,
      },
    ],

    thumbStacks: [IconableStackName.react],
  },

  {
    id: "3",
    title: "wcm",
    position: "Front-end Web Developer",
    period: "2022-2024",
    description: `사내 사업관련 계약 건 관리 및 결제를 위한 백오피스 계약 결제 시스템`,
    stacks: ["React", "Typescript", "react-query", "tailwind"],
    member: "Front 2인, Server 2인",
    state: "-",
    points: [
      {
        subject: "Role",
        description: `프론트 팀에서 개발 및 리드를 담당. 계약서 작성 및 상신, 계약 내 채팅 시스템, 계약 관리자 페이지, 계약 통계 대시보드 개발`,
      },
      {
        subject: "Chat",
        description: `WebSocket을 이용 실시간 채팅 구현, 채팅 멘션 기능 자동완성을 위해 라이브러리를 통해 자모분리 및 비교하여 개발`,
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
    description: `[국가과제] 각종 파라미터 별 공구 추천, 공구 사용 및 환경에 따른 공구 상태 예측 결과 플랫폼`,
    stacks: ["React", "Typescript", "react-query", "tailwind"],
    member: "Front 2인, Server 3인",
    state: "-",
    company: "wizcore",
    // thumbnail: "/images/finde/finde-logo.png",
    thumbStacks: [IconableStackName.react],
  },

  {
    id: "5",
    title: "component lib",
    position: "Front-end Web Developer",
    period: "2021-2023",
    description: `사내 프로젝트 프론트 컴포넌트 및 환경 일치, 컴포넌트 테마 구현을 위한 사내 라이브러리`,
    stacks: ["React", "Typescript", "Emotion", "Storybook", "plop"],
    member: "Front 1인",
    company: "wizcore",
    state: "-",
    points: [
      {
        subject: "개발 템플릿화",
        description: `지속적 컴포넌트 개발 및 추가를 위해 plop 템플릿 라이브러리로 컴포넌트 개발을 위한 설정과 storybook 설정과 같은 초기 설정을 자동화 함`,
      },
    ],
    thumbStacks: [IconableStackName.react],
  },

  {
    id: "6",
    title: "Toonivie",
    description: `영상이나 사진을 타임라인 위에서 편집하거나, 사진 요소를 이동시켜 애니메이션을 만드는 웹 영상 편집 및 제작 플랫폼. `,
    position: "Front-end Web Developer",
    period: "2020",
    stacks: ["React"],
    member: "-",
    state: "-",
    company: "ideaconcert",
    points: [
      {
        subject: "Canvas",
        description:
          "pixi.js 와 같은 Canvas 라이브러리를 사용해 업로드한 요소의 파라미터를 제어해 영상 애니메이션으로 편집하도록 개발",
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
    // thumbnail: "/images/finde/finde-logo.png",
    thumbStacks: [IconableStackName.next],
  },

  {
    id: "8",
    title: "Morak",
    description: `셀 수 없이 많아진 웹 드라마 및 웹 포맷 영상물을 OTT 처럼 검색하고 시청하는 플랫폼`,
    position: "Front-end Web Developer",
    stacks: ["Next", "Typescript", "Jotai", "tailwind"],
    member: "Front 1인, Sever 1인",
    period: "2023",
    state: "-",
    // thumbnail: "/images/finde/finde-logo.png",
    thumbStacks: [IconableStackName.next],
  },

  {
    id: "9",
    title: "pomodoro-timer",
    description: `업무나 공부 효율 향상에 도움을 주는 뽀모도로 타이머 시간 관리법을 웹으로 구현, 정해놓은 집중시간과 휴식시간을 반복하여 시각적으로 보여주고 알림을 준다`,
    position: "Front-end Web Developer",
    member: "1인",
    period: "2021",
    stacks: ["Javascript"],
    state: "운영중",
    // thumbnail: "/images/finde/finde-logo.png",
    thumbStacks: [IconableStackName.js],
  },
];
