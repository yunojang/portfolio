"use client";

import { FC, useState } from "react";
import Logo from "./common/Logo";
import StairButton from "./common/components/StairButton";

interface NavigationBarProps {}

const NavigationBar: FC<NavigationBarProps> = () => {
  const [t, setT] = useState(false);

  return (
    <div>
      <div className="bg-gray-900 rounded-lg py-2 px-4 pr-8 shadow-frame opacity-70 hover:opacity-100 transition-all duration-500">
        <section className="flex items-center justify-between">
          <Logo dark />

          {/* menu button (stairs) */}
          <StairButton active={t} onClick={() => setT((b) => !b)} />
        </section>
      </div>
    </div>
  );
};

export default NavigationBar;
