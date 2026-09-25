"use client";

import { useEffect, useMemo, useState } from "react";
import { getWorkouts } from "@/lib/api";
import WorkoutCard from "./WorkoutCard";
import SortDropdown from "./SortDropdown";

export default function Library() {
  const [workouts, setWorkouts] = useState([]);
  const [sort, setSort] = useState("duration");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadWorkouts() {
      try {
        const data = await getWorkouts();
        setWorkouts(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadWorkouts();
  }, []);

  const sortedWorkouts = useMemo(() => {
    return [...workouts].sort((a, b) => {
      if (sort === "duration") {
        return a.duration - b.duration;
      }

      if (sort === "calories") {
        return b.caloriesBurned - a.caloriesBurned;
      }

      return b.rating - a.rating;
    });
  }, [workouts, sort]);

  return (
    <section id="library" className="container-fit scroll-mt-20 py-10 md:py-14">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-4xl font-bold uppercase">THE LIBRARY</h2>
          <p className="mt-1 text-[10px] text-[#747b85] md:text-xs">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {!loading && !error && <SortDropdown value={sort} onChange={setSort} />}
      </div>

      {loading && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-[#252a32] bg-[#15181d]"
            >
              <div className="skeleton aspect-[1.7/1]" />

              <div className="space-y-3 p-4">
                <div className="skeleton h-4 w-20 rounded" />
                <div className="skeleton h-6 w-3/4 rounded" />
                <div className="skeleton h-3 w-1/2 rounded" />
                <div className="skeleton h-3 w-2/3 rounded" />
              </div>
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="rounded-lg border border-[#292f37] bg-[#15181d] py-20 text-center">
          <h3 className="font-display text-2xl font-bold uppercase">Unable to load workouts</h3>
          <p className="mt-2 text-xs text-[#777e88]">
            Please refresh the page and try again.
          </p>
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sortedWorkouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      )}
    </section>
  );
}