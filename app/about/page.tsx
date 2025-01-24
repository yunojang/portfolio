import Image from "next/image";
import { FC, ReactNode } from "react";

import "./style/about.css";

import { Noto_Sans_KR, IBM_Plex_Sans_KR } from "next/font/google";
const noto = Noto_Sans_KR({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

const ibm = IBM_Plex_Sans_KR({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

import Link from "next/link";

import { IoIosMail } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import StackSlider from "./components/StackSlider";

interface AboutPageProps {}

const AboutPage: FC<AboutPageProps> = () => {
  return (
    <section className={`pt-32 ${noto.className} bg-[#f0f1eb]`}>
      <header className="flex flex-col justify-center items-center w-fit mx-auto mb-48">
        <Image
          className="rounded-full object-cover w-48 h-48 border mb-5"
          width={194}
          height={194}
          style={{ objectPosition: "center 25%" }}
          src={"/images/profile.jpg"}
          alt="profile"
        />
        <div className="font-medium text-[6.25em] leading-[1em]">ABOUT ME</div>
        <div className="flex items-center justify-between w-full text-2xl font-light">
          <div>Korean</div>
          <div>Front-End Web Devloper</div>
        </div>
      </header>

      <main className={ibm.className}>
        {/* images */}
        <div className="flex w-fit mx-auto items-center mb-52">
          <Image
            src="/images/img1.jpg"
            width={250}
            height={350}
            alt="myimg4"
            className="w-80 cursor-pointer h-[28em] object-cover -rotate-6"
          />
          <Image
            src="/images/img2.jpg"
            width={250}
            height={350}
            alt="myimg4"
            className="w-80 cursor-pointer h-[28em] object-cover -rotate-3 -translate-y-6"
          />
          <Image
            src="/images/img3.jpg"
            width={250}
            height={350}
            alt="myimg4"
            className="w-80 cursor-pointer h-[28em] object-cover rotate-3 -translate-y-6"
          />
          <Image
            src="/images/img4.jpg"
            width={250}
            height={350}
            alt="myimg4"
            className="w-80 cursor-pointer h-[28em] object-cover rotate-6"
          />
        </div>

        {/* profile details */}
        <section className="w-[55vw] mx-auto flex gap-6 mb-10">
          <div className="flex-1">
            <header className="mb-10">
              <h1 className="text-lg text-gray-500">더 알아보기</h1>
              <h3 className="font-medium text-2xl">자세한 정보를 알아보세요</h3>
            </header>
            <div className="flex flex-col gap-6">
              <ProfileField label="생년월일" content={"1998.10.03"} />
              <ProfileField label="거주지" content={"서울시 서초구"} />
              <ProfileField label="연락처" content={"010-2757-3729"} />
            </div>

            {/* <div className="flex w-full items-center justify-end gap-3 relative">
              <ContactIcon
                icon={<IoIosMail size={"65%"} />}
                path="mailto:hanganda23@naver.com"
              />
              <ContactIcon icon={<GoHomeFill size={"65%"} />} path="/" />
              <ContactIcon
                icon={<FaGithub size={"65%"} />}
                path="https://github.com/yunojang"
              />
            </div> */}
          </div>

          {/* stacks */}
          <div className=" bg-white py-10 shadow-sm rounded-2xl w-[25vw] flex flex-col justify-between">
            <header className="px-5">
              <div className="text-3xl font-semibold mb-5">My Tech Stacks</div>
              <div className="text-lg text-[#404040]">
                일치하면 좋지만, 새로운 스택에도 열려있습니다.
              </div>
            </header>

            {/* stack icons */}
            <div className="mb-[12.5%]">
              {/* stacks slider */}
              <StackSlider />
            </div>
          </div>
        </section>

        {/* contact icons */}
        <div className="w-[55vw] mx-auto flex items-center justify-end gap-6 relative mb-40">
          <ContactIcon
            icon={<IoIosMail size={"65%"} />}
            path="mailto:hanganda23@naver.com"
          />
          <ContactIcon icon={<GoHomeFill size={"65%"} />} path="/" />
          <ContactIcon
            icon={<FaGithub size={"65%"} />}
            path="https://github.com/yunojang"
          />
        </div>

        {/* texts */}
        <section className="bg-white py-52 rounded-t-[25%]">
          <header>
            <h1 className="w-[45vw] mx-auto text-[4em] font-bold mb-20">
              ABOUT ME
            </h1>
          </header>
          <div className="flex flex-col gap-32 w-[45vw] mx-auto ">
            <CoverLetter
              title="프론트엔드 개발자로써의 과정"
              content="진로를 선택하는 과정에서 IT 전문학교에 입학 해보았고, 2년간 정보보호를 전공으로 네트워크, 암호학, 포렌식 등 여러 분야를 학습했습니다. 다양한 영역에 관심이 있는게 특징 중 하나인데, 학습하는 과정에도 관심가는 분야들을 따로 공부 하기도 했고 당시, JAVA나 C언어를 통해 개발하는데 가장 큰 흥미를 가져 졸업한 후에,개발 집중 학습을 위한 강좌와 교육을 수료했습니다. JAVA-Spring으로 웹 백엔드를 개발하는 교육이었으나, 웹개발 중 JS로 개발하는 프론트 부분에 더 흥미를 느껴 수료 이후 프론트 개발자로 취업했습니다. 2개의 회사에 총 3년 재직(3개월 + 2년 9개월)하면서 주로, Next, React로 웹 프론트를 개발하며 요구에 맞는 개발과 함께, CRA같은 사내 보일러 플레이트를 제작하며 빌드 과정과 구조를 이해하며, 사내 컴포넌트 패키지 개발 경험도 있습니다. 웹 반응형 개발 및 React-native와 Webview를 사용하여 2개의 동일한 소스를 기반으로 운영되는 웹과 앱을 개발하기도 하였습니다."
            />

            <CoverLetter
              title="함께 일 하는 스타일"
              content="기본적으로 내향적인 유형이지만, 사람에게 먼저 다가가고 말도 많이 하는 편입니다. 밝고 두루두루 잘 지내는 편이라 타 부서 사람들과도 원만히 지내 부서 간 소통 창구 역할을 하기도 했습니다. 업무에서는 주로 프론트 리드를 맡았고, 새 프로젝트를 개발하는 업무에서 서버와 프론트가 다른 일정으로 따로 개발하게 된게 우려되어, 서버 팀 마다 프론트 개발 진행사항과 그에 맞는 API 요구사항을 작성하여 공유 및 조율 회의를 주관하여, 무사히 일을 마칠 수 있었습니다. 비 효율적 회의에 힘듦을 느껴 주관하는 회의에는 확실한 목적을 세우고 철저한 준비 후에 의견 교류에만 집중된 회의가 이루어지도록 노력합니다. 사담도 좋아하지만, 회의시간 보다 별도의 시간을 가지는 것이 좋았습니다. 회사에 불만이 생길 수 있는데, 막연한 불만으로 담아두기 보다 구체적으로 정리해야 개선의 여지가 있다고 믿기에, 기록 및 정리 해 두었다가 혼자서도 개선할 수 있는 부분을 찾아 노력한 뒤에도 안된다면 기회가 될 때, 상급자(관리자)에게 말하는 편입니다. 그렇게 정리된 내용 및 노력을 전해 함께 많은 부분을 개선할 수 있었습니다."
            />

            <CoverLetter
              title="성장과 이루고 싶은 것"
              content="일을 하면 경험을 얻고 실력이 향상됩니다. 요청에 따라 개발하고, 새로운 것을 도입하고, 일이 진행되는 일련의 과정을 겪고 겪어야 알 수 있는 문제를 해결하며 성장합니다. 다만, 회사에서 하는 일은 어쩔 수 없이 과정보다 결과가 좀 더 중요하다고 느낍니다. 혹자는, 학습과 성장을 위해선 input, output의 균형이 중요하다 합니다. 일은 출력에 더 치중하기 때문에, 별도의 공부로 채워 넣거나 프로그래밍 사고 향상을 위한 깊은 고민과 같은 시간도 필요합니다. 그래서, 회사에서 퇴근하면 2~4시간씩 공부하는 시간을 가져 학습합니다. 이처럼, 다양한 환경에서도 학습하고 성장할 부분을 찾고, 성장에 부족한 부분은 찾아 채워 나갈 수 있습니다. 또한, 회사에 성과나 성장에 기여할 수 있는 포지션을 맡고 싶습니다. 회사의 서비스에 큰 개선을 가져오거나, 개발한 프로젝트를 통해 많은 가치를 불러오게 된다면, 일하면서 그보다 뿌듯한 일은 없을 것 입니다."
            />
          </div>
        </section>
      </main>
    </section>
  );
};

export default AboutPage;

interface ProfileFieldProps {
  label: string;
  content: ReactNode;
}

const ProfileField: FC<ProfileFieldProps> = ({ content, label }) => {
  return (
    <div className=" flex flex-col gap-1">
      {/* <div className="w-full bg-white py-7 px-3 rounded-lg shadow-lg"> */}
      <label className="text-xl font-bold">{label}</label>
      <div className="text-lg bg-white px-3 py-2.5 rounded-lg shadow-lg">
        {content}
      </div>
    </div>
  );
};

interface ContactIconProps {
  icon: ReactNode;
  path: string;
}

const ContactIcon: FC<ContactIconProps> = ({ icon, path }) => {
  return (
    <Link href={path} target="_blank">
      <div className="w-16 h-16 overflow-hidden rounded-2xl shadow-sm bg-white flex items-center justify-center text-gray-600">
        {icon}
      </div>
    </Link>
  );
};

interface CoverLetterProps {
  title: string;
  content: string;
}

const CoverLetter: FC<CoverLetterProps> = ({ title, content }) => {
  return (
    <section className="">
      <header>
        <h1 className="font-bold text-[3.125em]">{title}</h1>
      </header>
      <p className="text-2xl">{content}</p>
    </section>
  );
};
