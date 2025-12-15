import { Experience } from "../experience/types/experience";

export const experience: Experience[] = [
  {
    id: "0",
    type: "career",
    name: "wizcore",
    subContents: ["", "Front-End Web Dev"],
    startDate: new Date("2021-11-21"),
    endDate: new Date("2024-07-15"),
    description: `2년 9개월간 기술연구소 소속 프론트엔드 웹 개발자 근무.
    웹 프론트 리드 역할로 개발 방향 및 기술 결정, 빌드 설정 및 배포 담당
    주로, 기획 시작 단계부터 배포 운영까지 프로젝트 전 과정 참여. B2C, 국책과제, 사내 백오피스 등 다양한 프로젝트 경험`,
    // graphColor: "#1C51FA",
  },
  {
    id: "1",
    type: "career",
    name: "ideaconcert",
    subContents: ["Front-End Web Dev", "IT Team", "산업기능요원(대체복무)"],
    startDate: new Date("2020-09-01"),
    endDate: new Date("2020-11-31"),
    description:
      "웹 영상 편집, 제작 툴 프로토타입 개발 웹 프론트 참여. 수습기간 후, 군 면제 전환으로 퇴사",
    // graphColor: "#FC943B",
  },
  {
    id: "8",
    type: "career",
    name: "U+커넥트",
    subContents: ["Front-End Web Dev", "SI팀 외주계약 참여"],
    startDate: new Date("2024-11-10"),
    endDate: new Date("2024-12-20"),
    description:
      "U+커넥트 리뉴얼, 내/외부 관리자 & 사용자 웹 페이지의 프론트 개발 및 유지보수 참여",
    // graphColor: "#EC018C",
  },

  {
    id: "kj",
    type: "edu",
    name: "KRAFTON JUNGLE 10기",
    subContents: ["KRAFTON JUNGLE"],
    startDate: new Date("2025-07-01"),
    endDate: new Date("2025-12-31"),
    description: "",
  },

  {
    id: "3",
    type: "edu",
    name: "원티드 프리온보딩",
    subContents: ["[wanted x wecode] Pre-onboarding 프론트엔드 과정"],
    startDate: new Date("2021-07"),
    endDate: new Date("2021-10"),
    description: `참여기업 제공 과제 해결 및 피드백 교육과정. JS, React 개발에 필요한 핵심 이론 및 실습 강의 포함`,
    // graphColor: "#01E3B9",
  },

  {
    id: "11",
    type: "edu",
    name: "국비지원교육",
    subContents: ["자바기반의 웹&앱 응용SW개발자 양성과정"],
    startDate: new Date("2020-02"),
    endDate: new Date("2020-08"),
    description:
      "HTML, CSS, JS, React 웹 프론트엔드  Java, Spring 프레임워크 웹서버 개발 과정",
    // graphColor: "#52c91b",
  },

  {
    id: "5",
    type: "edu",
    name: "컴퓨터공학사",
    subContents: ["학사 학위", "학점은행제", "학점: 4.16 / 4.5"],
    startDate: new Date("2018-03-01"),
    endDate: new Date("2022-06-01"),
    description:
      "학점은행제 전문학사 학위연계. 회사 재직 중 온라인 강의 및 독학사 시험을 통해 학위 취득",
  },

  {
    id: "4",
    type: "edu",
    name: "정보보호전문학사",
    subContents: [
      "전문학사 학위",
      "학점은행제",
      "학점: 4.15 / 4.5",
      "한국IT직업전문학교 정보보호학과"
    ],
    startDate: new Date("2018-03-01"),
    endDate: new Date("2020-02-01"),
    description:
      "한국IT직업전문학교 재학하며 학점은행제 병행으로 정보보호 전문학사 취득",
  },

  {
    id: "6",
    type: "event",
    name: "정보처리기사",
    subContents: ["기사", "한국산업인력공단"],
    startDate: new Date("2021-06"),
    description: "",
  },

  {
    id: "7",
    type: "event",
    name: "네트워크관리사",
    subContents: ["2급 (국가공인)", "한국정보통신자격협회"],
    startDate: new Date("2018-12"),
    description: "",
  },

  {
    id: "10",
    type: "event",
    name: "2023 우수사원",
    subContents: ["사내 연말 2023 우수사원"],
    startDate: new Date("2024-01"),
    description: "연말결산 우수사원 수상(3명) 및 상여금 수령",
  },

  {
    id: "11",
    type: "event",
    name: "PCCP Lv3",
    subContents: [
      "PCCP (Programmers Certified Coding Professional) JavaScript Lv.3",
    ],
    startDate: new Date("2025-03"),
    endDate: new Date(),
    description: `그렙(프로그래머스)에서 주관하는 SW 전문가 및 상급 학습자를 대상으로 하는 역량 인증`,
  },
];
