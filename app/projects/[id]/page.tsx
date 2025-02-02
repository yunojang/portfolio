import { FC } from "react";

import { IconableStackName, Project } from "../types/project";
import ProjectPageView from "./ProjectPageView";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

const tempProject: Project = {
  id: "1",
  title: "Safely",
  position: "Front-end Web/Mobile Developer",
  period: "2024",
  thumbnail: "/images/safely-logo.png",
  thumbStacks: [IconableStackName.next],
  stacks: ["Next", "React", "Typescript", "React-Native", "Jotai"],
  member: "Web Front-end 2인, Web Back-end 3인",
  state: "운영중",
  description: `Safely는 보관/관리가 필요한 문서 및 사진을 업로드하여
  OCR을 통해 자동 분류, 관리하는 솔루션
  주로, 제조업의 중대재해처벌법 대응을 위해 개발`,
  points: [
    {
      subject: "Role",
      title: "Front-end Lead",
      description:
        "프론트 2인 팀으로 개발 및 리드를 담당\n 개발 규칙, 구조 회의 및 결정 \n 산업안전문서 관리 및 문서 뷰어 개발,\n 반응형 개발 및 WebView 모바일 개발",
    },
    {
      subject: "CO-OP",
      title: "회의 주관",
      description: `서버 3인 팀 및 디자인 외주 사와 소통 협업
      API 개발 회의 주관 등 협업에 노력
      서비스 개선안 개발팀 아이디어 회의 주관 및 기획 관련 팀과 소통`,
    },
  ],
  screenShots: [
    "/images/safely-logo.png",
    "/images/safely-ss.jpg",
    "/images/safely-logo.png",
    "/images/safely-logo.png",
    "/images/safely-ss.jpg",
    "/images/safely-ss.jpg",
  ],
  company: "wizcore",
};

const ProjectPage: FC<ProjectPageProps> = async ({ params }) => {
  const id = (await params).id;

  return (
    <div>
      <ProjectPageView project={tempProject} />
    </div>
  );
};

export default ProjectPage;
