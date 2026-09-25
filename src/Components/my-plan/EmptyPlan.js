import Link from "next/link";

export default function EmptyPlan({ savedTab }) {
  return (
    <div className="flex min-h-[310px] flex-col items-center justify-center rounded-xl border border-dashed border-[#30353d] bg-[#101216] px-5 text-center">
      <h3 className="font-display text-3xl font-bold uppercase">NOTHING HERE YET</h3>

      <p className="mt-2 max-w-[410px] text-xs leading-5 text-[#777e87]">
        {savedTab
          ? "Save a workout from the library and it will appear here."
          : "Browse the library and add a lift to get today moving."}
      </p>

      <Link
        href="/"
        className="mt-5 rounded-md bg-[#ccff00] px-5 py-3 text-[9px] font-bold uppercase text-black"
      >
        Go to workouts
      </Link>
    </div>
  );
}