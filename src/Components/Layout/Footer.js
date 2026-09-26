import { createElement } from "react";

const h = createElement;

export default function Footer() {
    return h(
        "footer", { className: "mt-10 border-t border-[#1e2228] bg-[#0b0d10]" },
        h(
            "div", { className: "container-fit flex min-h-[90px] items-center justify-between gap-5" },
            h(
                "div", { className: "flex items-center gap-2" },
                h("img", {
                    src: "/img/logo.png",
                    alt: "FitLog",
                    className: "h-7 w-auto object-contain",
                }),
                h(
                    "span", { className: "text-[11px] font-bold uppercase tracking-[0.08em] text-[#F4F5F7]" },
                    "FITLOG",
                ),
            ),
            h(
                "p", { className: "text-right text-[10px] leading-4 text-[#6f757e]" },
                "©2026 FitLog — Workout Library. Train hard, log honest.",
            ),
        ),
    );
}