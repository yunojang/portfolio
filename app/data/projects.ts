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
        description: `프론트 개발 및 프론트 팀 리드 담당. 프로젝트 구조, 개발 방식 결정 및 프론트 빌드, 배포 설정.
              업로드 문서 관리 및 문서 뷰어 개발, 반응형 웹 및 WebView를 통한 모바일 개발과 앱 배포`,
      },
      {
        subject: "CO-OP",
        // title: "회의 주관",
        description: `부서 내 서버 개발팀과 API 개발 요구사항 회의 등 주관하여 주도적 사전 작업.
           기획팀, 디자인 외주사와 함께 협업`,
      },
      {
        subject: "PDF Viewer",
        description:
          "PDF 페이지 별 Intersection observer 활용하여 페이지 개발 및 뷰어 활용",
      },
      {
        subject: "Stack",
        // title: "Next, Jotai",
        description: `첫 Next 사용 프로젝트, Next의 App Router 기능 (Parallel Routes, layout 등) 활용. 컴포넌트 별 실행 환경 구분 및 server action 활용. State libaray로 Jotai를 사용, 간단한 코드로 전역 state 관리`,
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
        description: `프론트 개발 및 프론트 팀 리드 담당. Auth 관련 개발 및 OAuth, 계정 설정 기능, 실무 자료 업로드 및 관리, 리워드 시스템, 커뮤니티 페이지 개발`,
      },
      {
        subject: "Reward",
        description: `게시글 및 댓글 작성 시 리워드가 부여되어, 변경된 리워드 동기화 하기 위해 React-Query key 무효화를 통해 구현. 상대 후원에 의한 리워드 변화 및 알림 구현을 위해 Server-Sent Events 사용`,
      },
      {
        subject: "Mobile",
        description: `반응형 작업 및 WebView를 사용해 Mobile 앱 구현. Webview Agent로 웹에서 웹뷰 환경 구분하여 설정. 모바일 알림 FCM 설정`,
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
        description: `프론트 개발 및 프론트 팀 리드 담당. 계약서 작성 및 상신, 계약 내 채팅, 관리자 페이지, 통계 대시보드 개발`,
      },
      {
        subject: "Chat",
        description: `WebSocket 활용 실시간 채팅 구현, 채팅 내 멘션 자동완성을 위해 자모분리 후 비교하여 개발`,
      },
      // {
      //   subject: "Dashboard",
      //   description: ``,
      // },
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
        description: `지속적 컴포넌트 개발 및 추가를 위해 plop 템플릿 라이브러리로 컴포넌트 개발을 위한 템플릿 코드와 storybook 설정과 같은 초기 설정을 자동화`,
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
          "pixi.js라는 Canvas 라이브러리를 사용해 유저가 업로드한 요소의 파라미터를 제어해 영상 애니메이션으로 편집할 수 있도록 개발",
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

  {
    id: "8",
    title: "Molak",
    description: `최근 많아진 웹 드라마 및 웹 포맷 영상물을 OTT 처럼 추천하고 검색하고 시청하는 플랫폼`,
    position: "Front-end Web Developer",
    stacks: ["Next", "Typescript", "Jotai", "tailwind"],
    member: "Front 1인, Sever 1인",
    period: "2023",
    state: "-",
    thumbnail: "/images/molak/molak-logo.jpg",
    thumbStacks: [IconableStackName.next],
    screenShots: ["/images/molak/molak-logo.jpg"],
  },

  {
    id: "9",
    title: "pomodoro",
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
