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
        주로, 산업안전 문서 관리가 힘든 현장의 중대재해처벌법 대응을 위해 개발`,
    company: "wizcore",
    points: [
      {
        subject: "Role",
        title: "Front-end Lead",
        description: `프론트 2인 팀에서 개발 및 리드를 담당. 프로젝트의 구조와 개발 방식 등을 결정, 초기 보일러플레이트 적용 및 배포 설정 담당.
               문서 관리 및 문서 뷰어 개발, 반응형 웹 및 WebView를 통한 모바일 개발과 앱 배포 담당`,
      },
      {
        subject: "CO-OP",
        title: "회의 주관",
        description: `디자인 외주 사와 소통 협업.
            팀 내 서버개발자와 API 개발 회의 주관.
            서비스 개선안 취합하여 기획팀과 소통`,
      },
    ],
    screenShots: [
      "/images/safely-logo.png",
      "/images/safely-ss.jpg",
      "/images/safely-ss1.png",
      "/images/safely-logo.png",
      "/images/safely-ss.jpg",
      "/images/safely-ss1.png",
    ],
  },

  {
    id: "2",
    title: "Find-e",
    position: "Front-end Web/Mobile Developer",
    period: "2023-2024",
    thumbnail: "/images/finde-logo.png",
    description: `다양한 분야의 실무자를 위한 정보 및 자료를 공유하는 플랫폼. 자료 공유 촉진을 위한 리워드 시스템과 커뮤니티 기능이 있다.`,
    stacks: ["React", "Typescript", "react-query", "tailwind"],
    member: "Front 1인, Server 2인",
    state: "운영중단",
    company: "wizcore",
    screenShots: [
      "/images/finde-logo.png",
      "/images/safely-ss1.png",
      "/images/safely-logo.png",
      "/images/safely-ss.jpg",
      "/images/safely-ss1.png",
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
    state: "모름",
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
    state: "모름",
    company: "wizcore",
    // thumbnail: "/images/finde-logo.png",
    thumbStacks: [IconableStackName.react],
  },

  {
    id: "5",
    title: "component lib",
    position: "Front-end Web Developer",
    period: "2021-2023",
    company: "wizcore",
    // thumbnail: "/images/finde-logo.png",
    thumbStacks: [IconableStackName.react],
  },

  {
    id: "7",
    title: "Toonivie",
    position: "Front-end Web Developer",
    period: "2020",
    company: "ideaconcert",
    // thumbnail: "/images/finde-logo.png",
    thumbStacks: [IconableStackName.react],
  },

  {
    id: "8",
    title: "portfolio",
    position: "Front-end Web Developer",
    period: "2025",
    // thumbnail: "/images/finde-logo.png",
    thumbStacks: [IconableStackName.next],
  },

  {
    id: "6",
    title: "Morak",
    position: "Front-end Web Developer",
    period: "2023",
    // thumbnail: "/images/finde-logo.png",
    thumbStacks: [IconableStackName.next],
  },

  {
    id: "9",
    title: "daily-diary",
    position: "Front-end Web Developer",
    period: "2021",
    // thumbnail: "/images/finde-logo.png",
    thumbStacks: [IconableStackName.js],
  },

  {
    id: "10",
    title: "pomodoro-timer",
    position: "Front-end Web Developer",
    period: "2021",
    // thumbnail: "/images/finde-logo.png",
    thumbStacks: [IconableStackName.js],
  },
];
