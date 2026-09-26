import { createElement } from "react";

const h = createElement;

export default function Hero() {
    return h(
        "section", { className: "container-fit pt-7 md:pt-9" },
        h(
            "div", {
                className: "grid min-h-[390px] overflow-hidden rounded-xl border border-[#252a31] bg-[#14171c] md:grid-cols-[1.05fr_0.95fr]",
            },
            h(
                "div", { className: "flex flex-col justify-center p-7 md:p-12" },
                h(
                    "p", { className: "text-[10px] font-bold tracking-[0.22em] text-[#ccff00]" },
                    "WORKOUT LIBRARY",
                ),
                h(
                    "h1", {
                        className: "font-display mt-4 text-5xl font-bold uppercase leading-[0.9] tracking-tight md:text-7xl",
                    },
                    h("span", { className: "whitespace-nowrap" }, "TRAIN WITH INTENT. LOG"),
                    h("br"),
                    h("span", { className: "whitespace-nowrap" }, "EVERY SET."),
                ),
                h(
                    "p", { className: "mt-5 max-w-[510px] text-xs leading-6 text-[#858b95] md:text-sm" },
                    "FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.",
                ),
                h(
                    "a", {
                        href: "#library",
                        className: "mt-7 inline-flex w-fit items-center gap-2 rounded-md bg-[#CCFF00] px-5 py-3 text-[10px] font-bold uppercase tracking-wide text-black transition hover:bg-[#CCFF00]",
                    },
                    h("span", null, "↓"),
                    "Browse Workouts",
                ),
            ),
            h(
                "div", { className: "relative min-h-[260px] overflow-hidden md:min-h-full" },
                h("img", {
                    src: "/img/banner.png",
                    alt: "FitLog workout banner",
                    className: "absolute right-3 top-1/2 h-[72%] w-[48%] -translate-y-1/2 object-contain object-right md:right-8 md:h-[78%] md:w-[45%]",
                }),
                h("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-[#14171c] via-[#14171c]/20 to-transparent",
                }),
            ),
        ),
    );
}