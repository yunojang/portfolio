import { FC } from "react";

interface StackIconProps {
  icon: string;
  size: string;
}

const StackIcon: FC<StackIconProps> = ({ icon, size }) => {
  return (
    <div
      className="bg-gray-200 rounded-xl flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {icon}
    </div>
  );
};

export default StackIcon;
