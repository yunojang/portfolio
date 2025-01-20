import { FC, ReactNode } from "react";

import { useSetAtom } from "jotai";
import { activateCursor, deactivateCursor } from "@/app/atom/common/cursor";

import { cx } from "@emotion/css";

interface ClickableComponentProps {
  children: ReactNode;
  className?: string;
  clickableText?: string;
}

const ClickableComponent: FC<ClickableComponentProps> = ({
  children,
  className,
  clickableText = "open",
}) => {
  const activate = useSetAtom(activateCursor);
  const deactivate = useSetAtom(deactivateCursor);

  const onMouseEnter = () => {
    activate(clickableText);
  };

  const onMouseLeave = () => {
    deactivate();
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
