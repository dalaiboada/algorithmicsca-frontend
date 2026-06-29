import { Outlet } from "react-router-dom";
import { AnimatedBackground } from "@/components/feedback/AnimatedBackground";

export const MainLayout = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <AnimatedBackground />

      <div className="relative z-10 w-full">
        <Outlet />
      </div>
    </div>
  );
};
