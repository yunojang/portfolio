"use client";

import { FC, ReactNode } from "react";

import { useSetAtom } from "jotai";
import {
  activateCursor,
  deactivateCursor,
  hideCursor,
  showCursor,
} from "@/app/atom/common/cursor";

import { cx } from "@emotion/css";

interface ClickableComponentProps {
  children: ReactNode;
  cursorHide?: boolean;
  className?: string;
  clickableText?: string;
}

const ClickableComponent: FC<ClickableComponentProps> = ({
  children,
  cursorHide = false,
  className,
  clickableText = "open",
}) => {
  const activate = useSetAtom(activateCursor);
  const deactivate = useSetAtom(deactivateCursor);
  const hide = useSetAtom(hideCursor);
  const show = useSetAtom(showCursor);

  const onMouseEnter = () => {
    if (cursorHide) hide();
    else activate(clickableText);
  };

  const onMouseLeave = () => {
    if (cursorHide) show();
    else deactivate();
  };

  return (
    <div
      className={cx(className, "cursor-pointer")}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

export default ClickableComponent;
