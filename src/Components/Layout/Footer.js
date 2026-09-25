export default function Footer() {
  return (
    <footer className="mt-10 border-t border-[#1e2228] bg-[#0b0d10]">
      <div className="container-fit flex min-h-[90px] items-center justify-between gap-5">
        <img src="/img/logo.png" alt="FitLog" className="h-7 w-auto object-contain" />

        <p className="text-right text-[10px] leading-4 text-[#6f757e]">
          ©2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}