"use client";

import Link from "next/link";
import { Check, Clock3, Flame, Star, X } from "lucide-react";
import { useFitlog } from "@/Context/FitlogContext";

export default function PlanCard({ workout, savedTab }) {
  const { removeFromPlan, removeFromSaved, markAsDone, isDone } = useFitlog();

  const completed = isDone(workout.id);

  return (
    <article className="rounded-xl border border-[#282e36] bg-[#15181d] p-3 md:p-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-28 w-full rounded-lg object-cover sm:h-[76px] sm:w-[115px]"
        />

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap gap-1.5">
            {workout.muscleGroups.slice(0, 2).map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#ccff00] px-2 py-1 text-[7px] font-bold uppercase text-black"
              >
                {group}
              </span>
            ))}
          </div>

          <h3 className="font-display mt-2 text-xl font-bold uppercase leading-none">
            {workout.name}
          </h3>

          <p className="mt-1 text-[9px] text-[#777e87]">{workout.equipment}</p>

          <div className="mt-2 flex flex-wrap gap-3 text-[9px] text-[#858c95]">
            <span className="flex items-center gap-1">
              <Clock3 size={11} className="text-[#ccff00]" />
              {workout.duration} min
            </span>

            <span className="flex items-center gap-1">
              <Flame size={11} className="text-[#ccff00]" />
              {workout.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1">
              <Star size={11} className="text-[#ccff00]" />
              {workout.rating}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:justify-end">
          <Link
            href={`/workouts/${workout.id}`}
            className="rounded-md border border-[#303640] px-3 py-2 text-[9px] font-medium text-[#d7d9dd] hover:bg-[#1b1f25]"
          >
            View Details
          </Link>

          {!savedTab && (
            <button
              onClick={() => markAsDone(workout.id)}
              disabled={completed}
              className={`flex items-center gap-1 rounded-md px-3 py-2 text-[9px] font-bold ${
                completed
                  ? "cursor-not-allowed bg-[#30362b] text-[#a0aa90]"
                  : "bg-[#ccff00] text-black"
              }`}
            >
              <Check size={13} />
              {completed ? "Done" : "Mark as Done"}
            </button>
          )}

          <button
            onClick={() => {
              if (savedTab) {
                removeFromSaved(workout.id);
              } else {
                removeFromPlan(workout.id);
              }
            }}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-transparent text-[#777e87] hover:bg-[#20242a] hover:text-white"
          >
            <X size={15} />
          </button>
        </div>
      </div>
    </article>
  );
}