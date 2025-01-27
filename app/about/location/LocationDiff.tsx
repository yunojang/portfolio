"use client";

import { FC } from "react";
import { FaMapPin } from "react-icons/fa6";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface LocationDiffProps {}

interface Diff {
  name: string;
  diffMin: number;
}

const diffs: Diff[] = [
  {
    name: "강남역, Seoul",
    diffMin: 11,
  },
  {
    name: "삼성역, Seoul",
    diffMin: 18,
  },
  {
    name: "잠실역, Seoul",
    diffMin: 24,
  },
  {
    name: "여의도역, Seoul",
    diffMin: 26,
  },
  {
    name: "구로디지털, Seoul",
    diffMin: 27,
  },
  {
    name: "판교역, Gyeonggi",
    diffMin: 28,
  },
  {
    name: "을지로3가, Seoul",
    diffMin: 31,
  },
  {
    name: "공덕역, Seoul",
    diffMin: 35,
  },
];

const LocationDiff: FC<LocationDiffProps> = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".diff-container",
      },
    });

    gsap.utils.toArray<HTMLElement>(".line").forEach((el, i) => {
      tl.from(el.querySelector(".pin"), {
        y: -25,
        opacity: 0,
        delay: i * 0.001,
        duration: 0.2,
        ease: "back",
      })
        .from(el.querySelector(".progress"), {
          scaleX: 0,
        })
        .from(el.querySelector(".name"), {
          x: -45,
          opacity: 0,
          ease: "back",
          duration: 0.3,
        });
    });

    // tl.from(".pin", { y: -25 })
    //   .from(".progress", { scaleX: 0 })
    //   .from(".location", { opacity: 0, x: -45 });
  });

  return (
    <div className="w-[50em] mx-auto bg-white py-10">
      <header className="font-bold text-2xl mb-10">주요위치와의 거리 🗺️</header>

      <div className="diff-container flex flex-col gap-12">
        {diffs.map((diff, i) => (
          <div
            key={i}
            className="line flex items-center font-bold text-xl gap-5 justify-between"
          >
            <div>
              <FaMapPin className="pin" size={28} color="black" />
            </div>

            <div
              className="progress flex-1 bg-pink-300 relative rounded-md origin-left"
              style={{
                height: `${(Math.floor(diff.diffMin / 10) / 10) * 1.2}em`,
              }}
            >
              <div className="absolute bottom-[115%] left-1/2 -translate-x-1/2 font-medium text-lg">
                {formatMin(diff.diffMin)}
              </div>
            </div>

            <div className="name w-40">{diff.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationDiff;

const formatMin = (min: number) => {
  const h = Math.floor(min / 60);
  const m = min - h * 60;

  if (h > 0) return `${h} H ${m} Min`;
  else return `${m} Min`;
};
