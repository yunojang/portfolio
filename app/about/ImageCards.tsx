"use client";

import "./style/card.css";
import { FC, useState } from "react";

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { cx } from "@emotion/css";

gsap.registerPlugin(ScrollTrigger);

type ImageCardsProps = Record<string, never>;

const IMG_PATHS = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
];

const ImageCards: FC<ImageCardsProps> = () => {
  const [animationState, setAnimationState] = useState<
    "ready" | "progress" | "end"
  >("ready");

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".container",
          start: "50% 75%",
        },
        onStart() {
          setAnimationState("progress");
        },
        onComplete() {
          setAnimationState("end");
        },
      })
      .from(".card", {
        y: 150,
        stagger: 0.15,
        duration: 0.25,
      })
      .to(".card:nth-child(1)", {
        x: -365,
        delay: 0.25,
      })
      .to(
        ".card:nth-child(2)",
        {
          x: -120,
          y: -30,
        },
        "<"
      )
      .to(
        ".card:nth-child(3)",
        {
          x: 120,
          y: -30,
        },
        "<"
      )
      .to(
        ".card:nth-child(4)",
        {
          x: 365,
        },
        "<"
      );
  });

  return (
    <div className="container relative w-screen h-full">
      {IMG_PATHS.map((imgPath, i) => {
        const diff = i + 1 - (IMG_PATHS.length + 1) / 2;

        return (
          <div
            key={i}
            className="card
          absolute left-1/2 -translate-x-1/2 top-0 "
            style={
              {
                "--tw-rotate": `${
                  (diff < 0 ? Math.floor(diff) : Math.round(diff)) * 3
                }deg`,
                transform: `translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
              } as React.CSSProperties
            }
          >
            <Image
              src={imgPath}
              width={250}
              height={350}
              priority
              alt="myimg"
              className={cx(
                animationState === "end" ? "card-img" : "",
                "w-80 cursor-pointer shadow-frame rounded-xl h-[28.5em] object-cover transition-all duration-500"
              )}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageCards;
