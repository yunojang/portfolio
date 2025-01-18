import { useEffect } from "react";

import Scrollbar from "smooth-scrollbar";

const SmoothScroll = () => {
  // useEffect(() => {
  //   Scrollbar.init(document.querySelector("#scroll")!, {
  //     damping: 0.02,
  //     alwaysShowTracks: true,
  //   });

  //   return () => {
  //     if (Scrollbar) {
  //       Scrollbar.destroy(document.querySelector("#scroll")!);
  //     }
  //   };
  // }, []);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      const currrentScroll = window.scrollY;
      const targetScroll = currrentScroll + event.deltaY * 2;

      const moveScroll = () => {
        window.requestAnimationFrame(() => {
          window.scrollTo({
            top: targetScroll,
            behavior: "smooth",
          });
        });
      };

      // if (!scrollTimeout) {
      moveScroll();
      // }

      // if (scrollTimeout) {
      // clearTimeout(scrollTimeout);
      // }

      // scrollTimeout = setTimeout(() => {
      //   moveScroll();
      // }, 500);

      //   scrollTimeout = setTimeout(() => {

      // window.scrollBy({
      //   top: scrollAmount * 1.5,
      //   left: 0,
      //   behavior: "smooth",
      // });
      //   }, 0); // debounce 타이밍을 조정할 수 있습니다
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return null;
};

export default SmoothScroll;
