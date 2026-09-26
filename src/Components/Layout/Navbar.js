"use client";

import { createElement } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFitlog } from "@/Context/FitlogContext";

const h = createElement;

export default function Navbar() {
    const pathname = usePathname();
    const { plan, saved } = useFitlog();

    const workoutActive = pathname === "/";
    const planActive = pathname.startsWith("/my-plan");

    return h(
        "header", { className: "border-b border-[#1e2228] bg-[#0b0d10]" },
        h(
            "div", { className: "container-fit relative flex h-[76px] items-center justify-between" },
            h(
                Link, { href: "/", className: "flex items-center gap-2" },
                h("img", {
                    src: "/img/logo.png",
                    alt: "FitLog",
                    className: "h-8 w-auto object-contain",
                }),
                h(
                    "span", { className: "text-[11px] font-bold uppercase tracking-[0.08em] text-[#F4F5F7]" },
                    "FITLOG",
                ),
            ),
            h(
                "nav", { className: "absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex" },
                h(
                    Link, {
                        href: "/",
                        className: `rounded-full px-5 py-2 text-[11px] font-medium ${
              workoutActive ? "bg-[#1A2312] text-[#CCFF00]" : "text-[#8a9099] hover:text-white"
            }`,
                    },
                    "Workout",
                ),
                h(
                    Link, {
                        href: "/my-plan",
                        className: `rounded-full px-5 py-2 text-[11px] font-medium ${
              planActive ? "bg-[#1A2312] text-[#CCFF00]" : "text-[#8a9099] hover:text-white"
            }`,
                    },
                    "My Plan",
                ),
            ),
            h(
                "div", { className: "flex items-center gap-2" },
                h(
                    Link, {
                        href: "/my-plan",
                        className: "flex items-center gap-2 rounded-full bg-[#ccff00] px-3 py-1.5 text-[10px] font-bold text-black",
                    },
                    h("span", null, "Plan"),
                    h("span", null, plan.length),
                ),
                h(
                    Link, {
                        href: "/my-plan?tab=saved",
                        className: "flex items-center gap-2 rounded-full border border-[#3a4049] px-3 py-1.5 text-[10px] font-medium text-[#d3d6db]",
                    },
                    h("span", null, "Saved"),
                    h("span", null, saved.length),
                ),
            ),
        ),
        h(
            "div", { className: "border-t border-[#1b1f25] md:hidden" },
            h(
                "div", { className: "container-fit flex h-11 items-center justify-center gap-2" },
                h(
                    Link, {
                        href: "/",
                        className: `rounded-full px-5 py-1.5 text-[10px] ${
              workoutActive ? "bg-[#1A2312] text-[#CCFF00]" : "text-[#858b94]"
            }`,
                    },
                    "Workout",
                ),
                h(
                    Link, {
                        href: "/my-plan",
                        className: `rounded-full px-5 py-1.5 text-[10px] ${
              planActive ? "bg-[#1A2312] text-[#CCFF00]" : "text-[#858b94]"
            }`,
                    },
                    "My Plan",
                ),
            ),
        ),
    );
}