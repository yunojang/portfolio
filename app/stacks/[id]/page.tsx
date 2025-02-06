"use client";

import { FC } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface StackPageProps {
  params: Promise<{ id: string }>;
}

const StackPage: FC<StackPageProps> = ({ params }) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".c",
      start: "top 65%",
      end: "bottom 20%",
      // toggleActions: "restart pause resume pasue",
      // markers: true,
      // pin: ".b",
      scrub: 1,
    },
  });

  useGSAP(() => {
    tl.to(".c", {
      x: 400,
      rotate: 360,
      duration: 3,
      stagger: 1,
    });
    // .to(".c", {
    //   background: "purple",
    //   duration: 1,
    // });
  });
  // const id = (await params).id;

  return (
    <div className="relative">
      <div className="h-[500vh]">
        {/* <div className="flex items-center justify-center"> */}
        <div className="a bg-red-400 w-40 h-40 mb-[50em]">a</div>
        <div className="b bg-blue-400 w-40 h-40 mb-[50em]">b</div>
        <div className="c bg-green-400 w-40 h-40 mb-[2em]">c</div>
        <div className="c bg-green-400 w-40 h-40 mb-[50em]">c</div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default StackPage;
