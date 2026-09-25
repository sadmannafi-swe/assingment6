"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Bookmark,
  CalendarPlus,
  Check,
  Clock3,
  Flame,
  Star,
} from "lucide-react";
import { useFitlog } from "@/Context/FitlogContext";

export default function WorkoutDetails({ workout }) {
  const { addToPlan, saveForLater, isInPlan, isSaved } = useFitlog();

  const inPlan = isInPlan(workout.id);
  const saved = isSaved(workout.id);

  return (
    <div className="container-fit py-8 md:py-11">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-2 text-xs text-[#7e8588] hover:text-white"
      >
        <ArrowLeft size={14} />
        Back to workouts
      </Link>

      <div className="grid gap-7 lg:grid-cols-[1fr_0.95fr] lg:gap-9">
        <div className="overflow-hidden rounded-xl border border-[#252a32] bg-[#15181d]">
          <img
            src={workout.image}
            alt={workout.name}
            className="h-full min-h-[420px] w-full object-cover md:min-h-[600px]"
          />
        </div>

        <div>
          <h1 className="font-display text-5xl font-bold uppercase leading-[0.9] md:text-6xl">
            {workout.name}
          </h1>

          <p className="mt-4 text-xs leading-6 text-[#878e97] md:text-sm">
            {workout.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#ccff00] px-3 py-1 text-[9px] font-bold uppercase text-black"
              >
                {group}
              </span>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-[#292f37] bg-[#15181d]">
            <SpecRow label="EQUIPMENT" value={workout.equipment} />
            <SpecRow label="DIFFICULTY" value={workout.difficulty} />
            <SpecRow label="SETS" value={workout.sets} />
            <SpecRow label="REPS" value={workout.reps} />
            <SpecRow label="DURATION" value={`${workout.duration} min`} />
            <SpecRow label="CALORIES" value={`${workout.caloriesBurned} kcal`} />
            <SpecRow label="RATING" value={workout.rating} />
          </div>

          <div className="mt-7">
            <h2 className="font-display text-xl font-bold uppercase">INSTRUCTIONS</h2>

            <ol className="mt-4 space-y-4">
              {workout.instructions.map((instruction, index) => (
                <li key={`${workout.id}-${index}`} className="flex gap-3 text-xs leading-5 text-[#858c95]">
                  <span className="font-bold text-[#ccff00]">{index + 1}.</span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <button
              onClick={() => addToPlan(workout)}
              disabled={inPlan}
              className={`flex items-center justify-center gap-2 rounded-md px-4 py-3 text-[10px] font-bold uppercase transition ${
                inPlan
                  ? "cursor-not-allowed bg-[#30362b] text-[#9fa98d]"
                  : "bg-[#ccff00] text-black hover:bg-[#bced00]"
              }`}
            >
              {inPlan ? <Check size={15} /> : <CalendarPlus size={15} />}
              {inPlan ? "Already in plan" : "Add to today's plan"}
            </button>

            <button
              onClick={() => saveForLater(workout)}
              disabled={saved}
              className={`flex items-center justify-center gap-2 rounded-md border px-4 py-3 text-[10px] font-bold uppercase transition ${
                saved
                  ? "cursor-not-allowed border-[#3a4230] text-[#909886]"
                  : "border-[#303640] text-[#d4d7db] hover:bg-[#191d23]"
              }`}
            >
              <Bookmark size={15} />
              {saved ? "Saved" : "Save for later"}
            </button>
          </div>

          <div className="mt-6 flex gap-5 text-[10px] text-[#747b85]">
            <span className="flex items-center gap-1">
              <Clock3 size={12} className="text-[#ccff00]" />
              {workout.duration} min
            </span>

            <span className="flex items-center gap-1">
              <Flame size={12} className="text-[#ccff00]" />
              {workout.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1">
              <Star size={12} className="text-[#ccff00]" />
              {workout.rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecRow({ label, value }) {
  return (
    <div className="flex min-h-[44px] items-center justify-between border-b border-[#252a32] px-4 last:border-b-0">
      <span className="text-[9px] font-bold text-[#7b828c]">{label}</span>
      <span className="max-w-[65%] text-right text-[10px] text-[#e0e2e5]">{value}</span>
    </div>
  );
}