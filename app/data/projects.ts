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
    description: `산업안전문서 관리 솔루션으로, 
    분류 / 관리가 필요한 문서 및 사진을 업로드하여 OCR을 통해 문서 자동 분류 및 관리하는 시스템 제공.`,
    company: "wizcore",
    points: [
      {
        subject: "Role",
        // title: "Front-end Lead",
        description: `프론트 개발 및 프론트 팀 Lead. 프론트엔드 및 앱 빌드 설정 배포. 계정 관련 개발 및 OAuth,
              업로드 문서 관리 및 문서 뷰어 개발, 관리자 및 결제 페이지 개발, 반응형 웹 및 WebView를 통한 모바일 개발`,
      },
      {
        subject: "CO-OP",
        // title: "회의 주관",
        description: `부서 내 서버 개발팀과 API 개발 요구사항 회의 등 주관하여 개발 효율성 증대.
          디자인 외주 및 기획팀 함께 협업`,
      },
      {
        subject: "PDF Viewer",
        description:
          "문서 업로드 및 문서 뷰어 개발. PDF 페이지 별 Intersection observer 활용 문서뷰어 페이지 개발",
      },
      {
        subject: "Stack",
        // title: "Next, Jotai",
        description: `Next를 도입하여 라우터 설정 코드량 감소, Jotai를 도입하여 상태 관리 코드량 감소`,
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
    description: `실무자를 위한 정보, 자료 공유 커뮤니티 플랫폼. 리워드 시스템 및 커뮤니티 기능 제공.`,
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
        description: `프론트 개발 및 프론트 팀 Lead. 프론트엔드 및 앱 빌드 설정 배포. 계정 관련 개발 및 OAuth, 실무자료 업로드 및 관리 개발, 리워드 시스템 개발, 커뮤니티 페이지 개발`,
      },
      {
        subject: "Reward",
        description: `React-Query invalidate key 활용 변경 리워드 동기화 구현 및 Suspense 개발 코드량 감소. Server-Sent Events 활용 상대 후원에 의한 리워드 변화 및 알림 구현`,
      },
      {
        subject: "Mobile",
        description: `반응형 작업 및 React-Native WebView 사용 Mobile 앱 구현. 모바일 알림 FCM 설정`,
      },
    ],

    thumbStacks: [IconableStackName.react],
  },

  {
    id: "3",
    title: "wcm",
    position: "Front-end Web Developer",
    period: "2022-2024",
    description: `사내 사업 계약 건 관리 및 결재를 위한 백오피스 계약 결재 시스템`,
    stacks: ["React", "Typescript", "react-query", "tailwind"],
    member: "Front 2인, Server 2인",
    state: "-",
    points: [
      {
        subject: "Role",
        description: `프론트 개발 및 프론트 팀 Lead. 
        계약서 작성 및 상신, 관리자 페이지, 통계 커스텀 대시보드 개발.`,
      },
      {
        subject: "Chat",
        description: `WebSocket 활용 실시간 채팅 시스템 및 인터페이스 개발. 채팅 내 멘션 자동완성을 위해 자모분리 후 비교`,
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
    description: `[국가 과제 프로젝트. 조건에 맞는 절삭 공구를 추천하고 공구 상태를 예측하는 서비스. 공구 개인화 등록 및 관리 기능을 제공하는 플랫폼 개발.`,
    stacks: ["React", "Typescript", "react-query", "tailwind"],
    member: "Front 2인, Server 3인",
    state: "-",
    company: "wizcore",
    points: [
      {
        subject: "Role",
        description: `
        절삭 공구 추천과 상태 예측을 위한 사용자 인터페이스 개발.
        사용자 맞춤형 공구 정보 등록 및 관리 기능 개발. 반응형 웹 구현 및 다양한 화면 크기에서의 사용자 경험 최적화.`,
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
    description: `사내 프로젝트의 프론트 컴포넌트 개발 일관성 확보 및 외부 의존도 낮추기 위한 사내 UI 컴포넌트 라이브러리`,
    stacks: ["React", "Typescript", "Emotion", "Storybook", "plop"],
    member: "Front 1인",
    company: "wizcore",
    state: "-",
    points: [
      {
        subject: "개발 문서",
        description: `Storybook 도입하여 컴포넌트 사용 방법 튜토리얼 제공`,
      },
      {
        subject: "개발 템플릿화",
        description: `Plop 코드 제너레이션 도입하여 컴포넌트 개발 템플릿으로  컴포넌트 개발 효율 증대`,
      },
    ],
    thumbStacks: [IconableStackName.react],
  },

  {
    id: "6",
    title: "Toonivie",
    description: `웹 영상 편집 제작 툴. 타임라인 기반 영상, 사진 요소를 배치하여 편집. 요소의 타임 별 파라미터 적용하여 애니메이션을 제작하는 웹 영상 편집 및 제작 플랫폼.`,
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
