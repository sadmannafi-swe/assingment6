export default function Hero() {
  return (
    <section className="container-fit pt-7 md:pt-9">
      <div className="grid min-h-[390px] overflow-hidden rounded-xl border border-[#252a31] bg-[#14171c] md:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col justify-center p-7 md:p-12">
          <p className="text-[10px] font-bold tracking-[0.22em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="font-display mt-4 text-5xl font-bold uppercase leading-[0.9] tracking-tight md:text-7xl">
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h1>

          <p className="mt-5 max-w-[510px] text-xs leading-6 text-[#858b95] md:text-sm">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <a
            href="#library"
            className="mt-7 inline-flex w-fit items-center gap-2 rounded-md bg-[#CCFF00] px-5 py-3 text-[10px] font-bold uppercase tracking-wide text-[#000000] transition hover:bg-[#CCFF00]"
          >
            <span>↓</span>
            Browse Workouts
          </a>
        </div>

        <div className="relative min-h-[260px] overflow-hidden md:min-h-full">
          <img
            src="/img/banner.png"
            alt="FitLog workout banner"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#14171c] via-[#14171c]/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}