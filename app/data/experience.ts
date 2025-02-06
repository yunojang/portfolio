import { Experience } from "../experience/types/experience";

export const experience: Experience[] = [
  {
    id: "0",
    type: "career",
    name: "wizcore",
    subContents: ["", "Front-End Web Dev"],
    startDate: new Date("2021-11-21"),
    endDate: new Date("2024-07-15"),
    description: `2년 9개월간 기술연구소에서 웹 프론트엔드 개발.
  2개의 국가 과제 프로젝트, 3개의 백오피스 프로젝트,
  2개의 신사업 B2C 프로젝트를 참여 및 담당`,
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
      "3개월간 근무하며, 비디오 편집,제작 툴 리뉴얼 웹 프론트 참여. 수습기간 후, 군 면제 전환으로 퇴사",
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
    id: "3",
    type: "edu",
    name: "원티드 프리온보딩",
    subContents: ["[wanted x wecode] Pre-onboarding 프론트엔드 과정"],
    startDate: new Date("2021-07"),
    endDate: new Date("2021-10"),
    description:
      "참여기업 9곳에서 제공하는 과제를 프론트 신입 개발자가 해결 및 피드백하는 교육과정. JS, React 개발에 필요한 핵심 이론 및 실습 강의",
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
      "Java, Spring 프레임워크 기반 웹 백엔드 개발 교육. JS, React 기반 웹 프론트엔드 개발 교육",
    // graphColor: "#52c91b",
  },

  {
    id: "2",
    type: "edu",
    name: "한국IT직업전문학교",
    subContents: ["정보보호학과", "정보보호전문학사", "학점:4.15 / 4.5"],
    startDate: new Date("2018-03"),
    endDate: new Date("2020-02"),
    description:
      "정보보호개론, 암호학, 네트워크, 포렌식 등 정보보호 관련 과목 수료",
    // graphColor: "#8debf0",
  },

  {
    id: "5",
    type: "event",
    name: "컴퓨터공학사",
    subContents: ["학사 학위", "학점은행제", "학점: 4.16 / 4.5"],
    startDate: new Date("2022-08-26"),
    endDate: new Date(),
    description:
      "학점은행제 전문학사 학위연계. 회사 재직 기간 중 온라인 강의 및 독학사 시험을 통해 학위 취득",
  },

  {
    id: "6",
    type: "event",
    name: "정보처리기사",
    subContents: ["기사", "한국산업인력공단"],
    startDate: new Date("2021-06"),
    endDate: new Date(),
    description: "",
  },

  {
    id: "4",
    type: "event",
    name: "정보보호전문학사",
    subContents: ["전문학사 학위", "학점은행제", "학점: 4.15 / 4.5"],
    startDate: new Date("2020-02"),
    endDate: new Date(),
    description: "전문학교를 통한 학점은행제 학위 취득",
  },

  {
    id: "7",
    type: "event",
    name: "네트워크관리사",
    subContents: ["2급 (국가공인)", "한국정보통신자격협회"],
    startDate: new Date("2018-12"),
    endDate: new Date(),
    description: "",
  },

  {
    id: "10",
    type: "event",
    name: "2023 우수사원",
    subContents: ["사내 연말 2023 우수사원"],
    startDate: new Date("2024-01"),
    endDate: new Date(),
    description: "",
  },
];
