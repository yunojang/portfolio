"use client";

import LineGrid from "./common/LineGrid";
import Intro from "./landing/Intro";
import ProfileIntroduce from "./landing/ProfileIntroduce";

import { useAtomValue, useSetAtom } from "jotai";
import {
  isEndIntro as isEndIntroAtom,
  setProgressIntro as setProgressIntroAtom,
  setEndIntro as setEndIntroAtom,
} from "./atom/landing/introState";

export default function Home() {
  const isEndIntro = useAtomValue(isEndIntroAtom);

  const setProgressIntro = useSetAtom(setProgressIntroAtom);
  const setEndIntro = useSetAtom(setEndIntroAtom);

  return (
    <main className="min-h-screen relative">
      {isEndIntro && <LineGrid />}

      {/* 인트로 - 이름 */}
      <Intro onStart={setProgressIntro} onEnd={setEndIntro} />

      {/* 프로필 */}
      <ProfileIntroduce />

      {/* Work - 커리어 */}

      {/* Project */}

      {/* ETC - 학위, 자격증, 받은 교육 */}
    </main>
  );
}
