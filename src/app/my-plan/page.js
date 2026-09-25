"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useFitlog } from "@/Context/FitlogContext";
import PlanStats from "@/Components/my-plan/PlanStats";
import PlanCard from "@/Components/my-plan/PlanCard";
import EmptyPlan from "@/Components/my-plan/EmptyPlan";

export default function MyPlanPage() {
  const { plan, saved, planMinutes, planCalories } = useFitlog();

  const [tab, setTab] = useState("plan");
  const [sort, setSort] = useState("duration");

  const currentItems = tab === "plan" ? plan : saved;

  const sortedItems = useMemo(() => {
    return [...currentItems].sort((a, b) => {
      if (sort === "duration") {
        return a.duration - b.duration;
      }

      if (sort === "calories") {
        return b.caloriesBurned - a.caloriesBurned;
      }

      return b.rating - a.rating;
    });
  }, [currentItems, sort]);

  return (
    <div className="container-fit py-9 md:py-12">
      <div>
        <h1 className="font-display text-5xl font-bold uppercase">MY PLAN</h1>
        <p className="mt-1 text-xs text-[#7a818a]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="mt-7">
        <PlanStats count={plan.length} minutes={planMinutes} calories={planCalories} />
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <div className="flex rounded-lg border border-[#282e36] bg-[#15181d] p-1">
          <button
            onClick={() => setTab("plan")}
            className={`rounded-md px-4 py-2 text-[10px] ${
              tab === "plan" ? "bg-[#22272f] text-white" : "text-[#737a84]"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => setTab("saved")}
            className={`rounded-md px-4 py-2 text-[10px] ${
              tab === "saved" ? "bg-[#22272f] text-white" : "text-[#737a84]"
            }`}
          >
            Saved
          </button>
        </div>

        <div className="relative">
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="appearance-none rounded-md border border-[#2b3038] bg-[#15181d] py-2 pl-3 pr-8 text-[10px] text-[#d5d8dc] outline-none"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>

          <ChevronDown
            size={13}
            className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#777e87]"
          />
        </div>
      </div>

      <div className="mt-5 space-y-3">
        {sortedItems.length === 0 ? (
          <EmptyPlan savedTab={tab === "saved"} />
        ) : (
          sortedItems.map((workout) => (
            <PlanCard key={workout.id} workout={workout} savedTab={tab === "saved"} />
          ))
        )}
      </div>
    </div>
  );
}