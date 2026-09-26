"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFitlog } from "@/Context/FitlogContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = useFitlog();

  const workoutActive = pathname === "/";
  const planActive = pathname.startsWith("/my-plan");

  return (
    <header className="border-b border-[#1e2228] bg-[#0b0d10]">
      <div className="container-fit relative flex h-[76px] items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/img/logo.png" alt="FitLog" className="h-8 w-auto object-contain" />
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          <Link
            href="/"
            className={`rounded-full px-5 py-2 text-[11px] font-medium ${
              workoutActive ? "bg-[#1A2312] text-[#CCFF00]" : "text-[#8a9099] hover:text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-5 py-2 text-[11px] font-medium ${
              planActive ? "bg-[#1A2312] text-[#CCFF00]" : "text-[#8a9099] hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full bg-[#ccff00] px-3 py-1.5 text-[10px] font-bold text-black"
          >
            <span>Plan</span>
            <span>{plan.length}</span>
          </Link>

          <Link
            href="/my-plan?tab=saved"
            className="flex items-center gap-2 rounded-full border border-[#3a4049] px-3 py-1.5 text-[10px] font-medium text-[#d3d6db]"
          >
            <span>Saved</span>
            <span>{saved.length}</span>
          </Link>
        </div>
      </div>

      <div className="border-t border-[#1b1f25] md:hidden">
        <div className="container-fit flex h-11 items-center justify-center gap-2">
          <Link
            href="/"
            className={`rounded-full px-5 py-1.5 text-[10px] ${
              workoutActive ? "bg-[#1A2312] text-[#CCFF00]" : "text-[#858b94]"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-5 py-1.5 text-[10px] ${
              planActive ? "bg-[#1A2312] text-[#CCFF00]" : "text-[#858b94]"
            }`}
          >
            My Plan
          </Link>
        </div>
      </div>
    </header>
  );
}