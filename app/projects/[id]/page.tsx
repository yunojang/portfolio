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
  member: "Web Front-end 2인, Server 3인",
  state: "운영중",
  description: `Safely는 보관/관리가 필요한 문서 및 사진을 업로드하여
  OCR을 통해 자동 분류, 관리하는 솔루션으로
  주로, 산업안전 문서 관리가 힘든 현장의 중대재해처벌법 대응을 위해 개발`,
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
