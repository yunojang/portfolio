"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

interface PageLoadGateProps {
  children: ReactNode;
}

const PageLoadGate = ({ children }: PageLoadGateProps) => {
  const pathname = usePathname();

  const [isReady, setIsReady] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsReady(false);

    let cancelled = false;

    let settledCount = 0;

    const settle = () => {
      settledCount += 1;

      if (!cancelled && settledCount >= images.length) {
        setIsReady(true);
      }
    };

    const images = Array.from(rootRef.current?.querySelectorAll("img") ?? []);
    const viewportBuffer = window.innerHeight * 1.5;

    const observedImages = images.filter((img) => {
      const rect = img.getBoundingClientRect();
      const isNearViewport =
        rect.top <= viewportBuffer && rect.bottom >= -viewportBuffer;

      // lazy 이미지 중 뷰포트 밖에 있는 것들은 기다리지 않고 패스
      if (img.loading === "lazy" && !isNearViewport) {
        settle();
        return false;
      }

      return true;
    });

    if (observedImages.length === 0) {
      setIsReady(true);
      return;
    }

    const onWindowLoad = () => {
      if (!cancelled) setIsReady(true);
    };

    window.addEventListener("load", onWindowLoad);

    const cleanups: Array<() => void> = [];

    observedImages.forEach((img) => {
      if (img.complete) {
        settle();
        return;
      }

      function removeListeners() {
        img.removeEventListener("load", handleLoad);
        img.removeEventListener("error", handleError);
      }

      function handleLoad() {
        removeListeners();
        settle();
      }

      function handleError() {
        removeListeners();
        settle();
      }

      img.addEventListener("load", handleLoad);
      img.addEventListener("error", handleError);

      cleanups.push(removeListeners);
    });

    return () => {
      cancelled = true;
      cleanups.forEach((fn) => fn());
      window.removeEventListener("load", onWindowLoad);
    };
  }, [pathname]);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;

    if (!isReady) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = prevOverflow;
    }

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isReady]);

  return (
    <div className="relative">
      <div
        ref={rootRef}
        className={`transition-opacity duration-500 ${
          isReady ? "opacity-100" : "opacity-0 pointer-events-none select-none"
        }`}
      >
        {children}
      </div>

      <div
        className={`fixed inset-0 z-[5000] flex items-center justify-center bg-white transition-opacity duration-500 ${
          isReady ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-gray-200 border-t-gray-800 animate-spin" />

          <div className="tracking-[0.25em] text-[0.75rem] font-medium text-gray-600 uppercase">
            Loading portfolio
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoadGate;
