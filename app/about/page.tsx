import Image from "next/image";
import React, { FC, ReactNode } from "react";

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

import StackSlider from "./components/StackSlider";
import AboutTexts from "./AboutTexts";

import { IoIosMail } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import ImageCards from "./ImageCards";
import MouseCursor from "../common/components/MouseCursor/MouseCursor";
import ClickableComponent from "../common/components/ClickableComponent";
import { FiExternalLink } from "react-icons/fi";
import { SiVelog } from "react-icons/si";

interface AboutPageProps {}

const AboutPage: FC<AboutPageProps> = () => {
  return (
    <section className={`pt-32 ${noto.className} bg-[#f0f1eb]`}>
      <MouseCursor />
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
        <div className="w-fit mx-auto mb-52 h-[50vh]">
          <ImageCards />
        </div>

        {/* profile details */}
        <section style={{ "--view-width": "55vw" } as React.CSSProperties}>
          <div className="view-width mx-auto flex gap-3 mb-10">
            <div className="flex-1">
              <header className="mb-10">
                <h1 className="text-lg text-gray-500">더 알아보기</h1>
                <h3 className="font-medium text-2xl">
                  자세한 정보를 알아보세요
                </h3>
              </header>
              <div className="flex flex-col flex-wrap gap-3">
                <ProfileField label="생년월일" content={"1998.10.03"} />
                <ProfileField label="연락처" content={"010-2757-3729"} />

                <ClickableComponent clickableText="move">
                  <Link href="/about/location">
                    <ProfileField
                      label="거주지"
                      content={
                        <div className="flex items-center justify-between">
                          <div>서초구 Seoul, Korea</div>
                          <div>
                            <FiExternalLink />
                          </div>
                        </div>
                      }
                    />
                  </Link>
                </ClickableComponent>
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
            <div className=" bg-white py-10 shadow-sm rounded-2xl w-[47.25%] flex flex-col justify-between">
              <header className="px-5">
                <div className="text-3xl font-semibold mb-5">
                  My Tech Stacks
                </div>
                <div className="text-lg text-[#404040]">
                  일치하면 좋지만, 새로운 스택에도 열려있습니다.
                </div>
              </header>

              {/* stack icons */}
              <div className="mb-[10.5%]">
                {/* stacks slider */}
                <StackSlider />
              </div>
            </div>
          </div>

          {/* contact icons */}
          <div className="view-width mx-auto flex items-center justify-end gap-6 relative mb-40">
            <ContactIcon
              icon={<IoIosMail size={"67.5%"} />}
              path="mailto:hanganda23@naver.com"
            />
            <ContactIcon
              icon={<SiVelog size={"52.5%"} />}
              path="https://velog.io/@hanganda23/posts"
            />
            <ContactIcon icon={<GoHomeFill size={"62.5%"} />} path="/" />
            <ContactIcon
              icon={<FaGithub size={"62.5%"} />}
              path="https://github.com/yunojang"
            />
          </div>
        </section>

        {/* texts */}
        <AboutTexts />
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
    <div className="w-full h-full flex flex-col gap-1 bg-white px-3 py-2.5 rounded-lg shadow-lg">
      {/* <div className="w-full bg-white py-7 px-3 rounded-lg shadow-lg"> */}
      <label className="text-xl font-bold">{label}</label>
      <div className="text-lg">{content}</div>
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
