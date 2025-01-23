import { FC, ReactElement } from "react";
import { Smooch_Sans } from "next/font/google";

const smoochSans = Smooch_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

interface Project {
  thumbnail: ReactElement;
  title: string;
}

export interface Career {
  projects: Project[];
  companyName: string;
  startDate: Date;
  endDate: Date;
  position: string;
  mainColor: string;
}

interface CareerPanelProps {
  career: Career;
}

const CareerPanel: FC<CareerPanelProps> = ({ career }) => {
  const { companyName, startDate, endDate, mainColor, position, projects } =
    career;

  return (
    <>
      <div
        className={`h-[100vh] sticky ${smoochSans.className}`}
        style={{
          background: mainColor,
        }}
      >
        <div className="flex items-center justify-between text-white pl-40 pr-20 h-full">
          <div className="text-[4.25em] font-semibold tracking-wider">
            {companyName.toUpperCase()}
          </div>

          <div className="w-[22.5em] h-0.5 bg-white" />

          <div className="text-3xl">
            {startDate.getFullYear() === endDate.getFullYear()
              ? startDate.getFullYear()
              : `${startDate.getFullYear()} - ${endDate.getFullYear()}`}
          </div>
          <div className="text-4xl font-medium">{position}</div>
        </div>
      </div>

      <div className="h-[40vh] bg-white sticky top-0">
        <div className="flex items-center">
          <div className="flex-1">1</div>
          <div className="flex-1">2</div>
          <div className="flex-1">3</div>
        </div>
      </div>
    </>
  );
};

export default CareerPanel;
