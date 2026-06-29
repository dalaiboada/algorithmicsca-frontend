import { Outlet } from "react-router-dom";
import { AnimatedBackground } from "@/components/feedback/AnimatedBackground";

export const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden flex">
      <AnimatedBackground />

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
