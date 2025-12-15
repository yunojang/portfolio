"use client";

import { FC, useEffect, useRef } from "react";

import { cx } from "@emotion/css";
import "./cursor.css";

import { useAtom, useSetAtom } from "jotai";
import {
  cursor as cursorAtom,
  initCursor as initCursorAtom,
} from "@/app/atom/common/cursor";

type MouseCursorProps = Record<string, never>;

interface ClientPosition {
  x: number;
  y: number;
}

interface FollowCursorPosition {
  mouse: ClientPosition;
  destination: ClientPosition;
  distance: ClientPosition;
}

const MouseCursor: FC<MouseCursorProps> = () => {
  const cursor = useRef<HTMLDivElement>(null);

  const initCursor = useSetAtom(initCursorAtom);

  const positionRef = useRef<FollowCursorPosition>({
    mouse: { x: 0, y: 0 },
    destination: { x: 0, y: 0 },
    distance: { x: 0, y: 0 },
  });

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      positionRef.current.mouse.x =
        event.clientX - (cursor.current?.clientWidth ?? 1) / 2;

      positionRef.current.mouse.y =
        event.clientY - (cursor.current?.clientHeight ?? 1) / 2;
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      initCursor();
    };
  }, [initCursor]);

  useEffect(() => {
    const moveCursor = (time: number) => {
      if (!cursor.current) return;

      const { mouse, destination, distance } = positionRef.current;

      if (!destination.x || !destination.y) {
        destination.x = mouse.x;
        destination.y = mouse.y;
      } else {
        const degree = 0.075;

        distance.x = (mouse.x - destination.x) * degree;
        distance.y = (mouse.y - destination.y) * degree;
      }

      if (Math.abs(distance.x) + Math.abs(distance.y) < 0.1) {
        destination.x = mouse.x;
        destination.y = mouse.y;
      } else {
        destination.x += distance.x;
        destination.y += distance.y;
      }

      cursor.current.style.transform = `translate3d(${
        destination.x + window.scrollX
      }px, ${destination.y + window.scrollY}px, 0)`;

      window.requestAnimationFrame(moveCursor);
    };

    window.requestAnimationFrame(moveCursor);
  }, []);

  const [{ active, text, show }] = useAtom(cursorAtom);
  const cursorText = `[ ${text.toUpperCase()} ]`;

  return (
    <div
      ref={cursor}
      data-text={cursorText}
      className={cx(
        show ? "" : "opacity-0",
        active ? "open" : "",
        "cursor absolute top-0 left-0 rounded-full z-[999] pointer-events-none "
      )}
    >
      <div />
    </div>
  );
};

export default MouseCursor;
