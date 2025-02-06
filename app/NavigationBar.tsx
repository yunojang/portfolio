"use client";

import Logo from "./common/Logo";
import StairButton from "./common/components/StairButton";

import { FC, ReactNode, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { IoIosArrowBack } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

interface NavigationBarProps {}

interface Menu {
  content: ReactNode;
  condition: "always" | "chlid" | "onScroll";
  path?: string;
  onClick?(): void;
}

const NavigationBar: FC<NavigationBarProps> = () => {
  // const [t, setT] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollActive(true);
      } else {
        setScrollActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menus: Menu[] = [
    {
      content: <IoIosArrowBack />,
      condition: "chlid",
      onClick() {
        router.back();
      },
    },
    {
      content: <FaHome />,
      condition: "chlid",
      onClick() {
        router.push("/");
      },
    },
    {
      content: "About",
      condition: "always",
      onClick() {
        router.push("/about");
      },
    },
    {
      content: "Location",
      condition: "always",
      onClick() {
        router.push("/about/location");
      },
    },
    {
      content: "Projects",
      condition: "always",
      onClick() {
        router.push("/projects");
      },
    },
    {
      content: "Experience",
      condition: "always",
      onClick() {
        router.push("/experience");
      },
    },

    {
      content: <FaChevronUp />,
      condition: "onScroll",
      onClick() {
        window.scroll({ left: 0, top: 0, behavior: "smooth" });
      },
    },
  ];

  if (pathname.includes("mobile")) return null;

  return (
    <div>
      {/* <div className="bg-gray-900 rounded-lg py-2 px-4 pr-8 shadow-frame opacity-25 hover:opacity-100 transition-all duration-500">
        <section className="flex items-center justify-between">
          <Logo dark />

          <StairButton active={t} onClick={() => setT((b) => !b)} />
        </section>
      </div> */}

      <div className="flex items-center gap-2">
        {menus
          .filter((m) => m.condition !== "chlid" || pathname !== "/")
          .filter((m) => m.condition !== "onScroll" || scrollActive)
          .map((menu, i) => (
            <NavButton onClick={menu.onClick} key={i}>
              {menu.content}
            </NavButton>
          ))}
      </div>
    </div>
  );
};

export default NavigationBar;

interface NavButtonProps {
  children?: ReactNode;
  onClick?(): void;
}

const NavButton: FC<NavButtonProps> = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="rounded-full bg-[#1d3752] px-4 py-auto h-8 flex items-center justify-center text-white opacity-35 hover:opacity-100 cursor-pointer transition-all select-none tracking-tighter"
    >
      {children}
    </div>
  );
};
