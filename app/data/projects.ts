import { IconableStackName, Project } from "../projects/types/project";

export const projects: Project[] = [
  {
    id: "dupilot",
    title: "Dupilot",
    position: "Full-stack Engineer",
    period: "2025.07 - 2025.12",
    company: "Krafton Jungle",
    description:
      "AI 자동 더빙 영상 서비스. 업로드-더빙 생성-편집-배포까지 AI 콘텐츠 제작 플로우를 풀스택으로 개발",
    stacks: [
      "React",
      "Zustand",
      "React-Query",
      "FastAPI",
      "DocumentDB",
      "Redis",
      "Worker",
    ],
    thumbStacks: [IconableStackName.react],
    links: [
      { label: "시연영상" },
      { label: "소스코드" },
    ],
    points: [
      {
        subject: "더빙 파이프라인 진행률",
        description:
          "STT→MT→TTS→Mux 단계 기반 진행률·상태 전이 모델링, 워커 콜백 수집 + SSE 실시간 반영, 단계 전환 전 완만 증가 UI로 멈춰 보이는 구간 제거 및 중복 요청 감소.",
      },
      {
        subject: "오디오 에디터 성능",
        description:
          "스크럽/시킹 병목 프로파일링 후 throttle + 키프레임 시킹 + 이진탐색/사전로딩 적용, 프레임드랍·오디오 레이턴시 90%+ 감소로 반응성 및 싱크 안정화.",
      },
      {
        subject: "업로드 병목 해소",
        description:
          "업로드 요청을 Job 생성 후 즉시 응답, 다운로드/전처리를 Redis 큐+워커 비동기로 오프로딩하여 장시간/동시 업로드 시 API 지연·타임아웃 제거.",
      },
      {
        subject: "보이스 클로닝 품질",
        description:
          "보이스 임베딩 유사도 기반으로 타겟 언어 발화 가능한 유사 보이스 선택 전략 전환, 발음 품질 편차 완화 및 자연스러움 개선.",
      },
    ],
  },
  {
    id: "pintos",
    title: "Pintos",
    position: "System Programming",
    period: "2025.07 - 2025.12",
    description:
      "Pintos OS에서 Threads‒User Programs‒VM 단계별 핵심 기능을 구현하며 커널 동작 원리를 체득.",
    stacks: ["C"],
    thumbStacks: [IconableStackName.c],
    company: "KRAFTON JUNGLE",
    points: [
      {
        subject: "Priority Donation",
        description:
          "Priority Donation Chaining으로 중첩 락에서 우선순위 역전 문제를 해결.",
      },
      {
        subject: "System Call",
        description:
          "dup2 등 시스템콜을 FD 정합성과 표준 I/O 흐름에 맞게 타입 분리 + refcount 기반 close로 구현.",
      },
      {
        subject: "VM / Swap",
        description:
          "Lazy Loading, Page Fault, Frame/Swap 관리로 swap-in/out을 구현하며 VM 동작 원리 학습.",
      },
    ],
  },
  {
    id: "web-server",
    title: "Web Server",
    position: "System Programming",
    period: "2025.07 - 2025.12",
    description:
      "C로 소켓/TCP 기반 Echo - Tiny HTTP 서버 - Proxy 서버를 구현하며 요청‒응답 흐름을 계층별로 구현.",
    stacks: ["C"],
    thumbStacks: [IconableStackName.c],
    company: "KRAFTON JUNGLE",
    points: [
      {
        subject: "HTTP Cycle",
        description:
          "요청 파싱-디스패치-응답 생성을 직접 구현해 웹 서버 요청-응답 사이클 원리를 체득.",
      },
      {
        subject: "Proxy Cache",
        description:
          "캐시 키 재정의와 용량/대상 제한 정책으로 오답/메모리 잠식 문제를 줄이며 효율 개선.",
      },
    ],
  },
  {
    id: "1",
    title: "Safely",
    position: "Front-end Web/Mobile Developer",
    period: "2024.01 - 2024.12",
    thumbnail: "/images/safely-logo.png",
    thumbStacks: [IconableStackName.next],
    stacks: ["Next", "React", "Typescript", "React-Native", "Jotai"],
    member: "Web Front-end 2인, Server 3인",
    company: "wizcore",
    links: [{ label: "운영사이트" }],
    description:
      "산업안전 문서 관리 SaaS. 사진·PDF 업로드 시 OCR로 문서 타입/제목을 추출해 자동 분류·저장.",
    points: [
      {
        subject: "문서 관리",
        description: `계정 및 문서 관리, 문서 뷰어, 관리자 페이지 등 핵심 기능을 개발하고 OCR 결과에 따라 문서를 자동 분류.`,
      },
      {
        subject: "구조 설계",
        description:
          "중첩 폴더 구조를 고려한 재사용 가능 컴포넌트 설계로 유지보수성·확장성 확보.",
      },
      {
        subject: "PDF Viewer",
        description:
          "React PDF Viewer + Intersection Observer로 페이지 감지 및 UI 연동 구현.",
      },
      {
        subject: "동시성",
        description:
          "다중 사용자 환경에서 수정/삭제 충돌 대응을 위한 에러 처리와 UX 고려.",
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
    period: "2023.01 - 2024.12",
    thumbnail: "/images/finde/finde-logo.png",
    description: `실무 자료를 공유하고 탐색할 수 있는 서비스`,
    stacks: ["React", "Typescript", "react-query", "tailwind"],
    member: "Front 1인, Server 2인",
    company: "wizcore",
    links: [{ label: "운영사이트" }],

    screenShots: [
      "/images/finde/finde-logo.png",
      "/images/finde/finde-ss1.png",
      "/images/finde/finde-ss2.png",
    ],

    points: [
      {
        subject: "Work",
        description: `검색 포털과 유사한 사용자 인터페이스 구현 및 핀터레스트 스타일 멀티 컬럼 이미지 탭 UI 개발.`,
      },
      {
        subject: "Cross-Platform",
        description: `반응형 웹 + React Native(WebView) 앱 개발·배포로 멀티 플랫폼 대응 경험.`,
      },
      {
        subject: "Reward",
        description: `리워드 기능 개발 시 react-query revalidate 설정으로 데이터 일관성과 UX 개선.`,
      },
    ],

    thumbStacks: [IconableStackName.react],
  },

  {
    id: "3",
    title: "wcm",
    position: "Front-end Web Developer",
    period: "2022.01 - 2024.12",
    description: `사내 백오피스 계약 관리 서비스(WCM)`,
    stacks: ["React", "Typescript", "react-query", "tailwind"],
    member: "Front 2인, Server 2인",
    company: "wizcore",
    links: [],
    points: [
      {
        subject: "Achievements",
        description: `사내 계약 업무에 도입되어 50건 이상 및 수백만~수억 규모 거래에 사용.`,
      },

      {
        subject: "Chat",
        description: `WebSocket 실시간 채팅, 멘션 자동완성 구현.`,
      },
      {
        subject: "Work",
        description: `반복되는 관리 페이지 추상화, 대시보드/차트/패널 드래그앤드롭 등 유지보수성 고려 설계.`,
      },
    ],
    thumbStacks: [IconableStackName.react],
  },

  {
    id: "4",
    title: "절삭공구 플랫폼",
    position: "Front-end Web Developer",
    period: "2022.01 - 2022.12",
    description: `국책 과제로 진행된 절삭공구 추천, 관리 플랫폼`,
    stacks: ["React", "Typescript", "react-query", "tailwind"],
    member: "Front 2인, Server 3인",
    company: "wizcore",
    links: [],
    points: [
      {
        subject: "Work",
        description: `공구 등록/관리/추천 기능 개발.`,
      },
      {
        subject: "usability",
        description: `입력 흐름/데이터 반영 시점을 고려한 사용자 인터랙션 개선 및 echarts 시각화.`,
      },
    ],
    thumbStacks: [IconableStackName.react],
  },

  {
    id: "5",
    title: "component lib",
    position: "Front-end Web Developer",
    period: "2021.01 - 2023.12",
    description: `사내 UI 개발 일관성과 생산성을 위한 React 컴포넌트 라이브러리`,
    stacks: ["React", "Typescript", "Emotion", "Storybook", "plop"],
    member: "Front 1인",
    company: "wizcore",
    links: [],
    points: [
      {
        subject: "Work",
        description: `20~30개 컴포넌트 개발, Storybook 문서화 및 사내 배포.`,
      },
      {
        subject: "Benchmarking",
        description: `UI 라이브러리 분석으로 재사용성과 확장성을 고려한 설계.`,
      },
      {
        subject: "Share",
        description: `API 설계·문서화로 협업 효율 증대.`,
      },
      {
        subject: "Archivement",
        description: `사내 프로젝트 도입 후 피드백 기반 개선.`,
      },
    ],
    thumbStacks: [IconableStackName.react],
  },

  {
    id: "6",
    title: "Toonivie",
    description: `Pixi.js 기반 타임라인 웹 영상 편집 툴 데모`,
    position: "Front-end Web Developer",
    period: "2020.01 - 2020.12",
    stacks: ["React"],
    member: "-",
    company: "ideaconcert",
    links: [{ label: "Demo" }],
    points: [
      {
        subject: "Work",
        description:
          "영상/이미지 요소를 타임라인에 배치, 전환되도록 구현하고 미리보기 인터페이스 개발.",
      },
    ],
    thumbStacks: [IconableStackName.react],
  },

  {
    id: "7",
    title: "portfolio",
    description: `개인 포트폴리오 사이트`,
    position: "Front-end Web Developer",
    stacks: ["Next", "Typescript", "Jotai", "tailwind"],
    member: "1인",
    period: "2025.01 - 2025.12",
    thumbnail: "/images/pt/pt-main1.png",
    thumbStacks: [IconableStackName.next],
    links: [],
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
          "해외 포트폴리오에 영감을 받아 다양한 효과와 애니메이션을 적용해본 개인 작업.",
      },
      {
        subject: "Scrolling",
        description:
          "GSAP ScrollTrigger, CSS animation-timeline, custom smooth scroll로 스크롤 감응 애니메이션 구현.",
      },
      {
        subject: "Slider",
        description:
          "CSS 무한 슬라이더와 sticky 가로 슬라이더 등 실험적 인터랙션 구현.",
      },
    ],
  },

  {
    id: "8",
    title: "pomodoro",
    description: `업무/공부 효율을 위한 뽀모도로 타이머`,
    position: "Front-end Web Developer",
    member: "1인",
    period: "2021.01 - 2021.12",
    stacks: ["Javascript"],
    links: [],
    thumbnail: "/images/pm/PM-SS2.png",
    screenShots: ["/images/pm/PM-SS1.png", "/images/pm/PM-SS2.png"],
    thumbStacks: [IconableStackName.js],
  },
];
