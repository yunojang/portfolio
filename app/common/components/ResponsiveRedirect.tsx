"use client";

import { navigate } from "@/app/actions";
import { FC, ReactNode, useEffect } from "react";

interface ResponsiveRedirectProps {
  diff?: "bigger" | "smaller";
  width?: number;
  path?: string;
  children?: ReactNode;
}

const ResponsiveRedirect: FC<ResponsiveRedirectProps> = ({
  width = 901,
  diff = "smaller",
  path = "/mobile",
  children,
}) => {
  // const router = useRouter();
  // const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;

      const isRedirectResponsive =
        (innerWidth < width && diff == "smaller") ||
        (innerWidth >= width && diff == "bigger");

      if (isRedirectResponsive) {
        navigate(path);
      }
    };

    // if (pathname !== "/mobile") {
    handleResize();
    // }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [diff, width, path]);

  return <></>;
};

export default ResponsiveRedirect;
