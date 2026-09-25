"use client";

import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";

export default function WorkoutCard({ workout }) {
  return (
    <Link href={`/workouts/${workout.id}`} className="group block">
      <article className="card-hover overflow-hidden rounded-lg border border-[#252a32] bg-[#15181d]">
        <div className="relative aspect-[1.7/1] overflow-hidden bg-[#20242a]">
          <img
            src={workout.image}
            alt={workout.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-4">
          <div className="mb-3 flex flex-wrap gap-1.5">
            {workout.muscleGroups.slice(0, 3).map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#ccff00] px-2 py-1 text-[7px] font-bold uppercase text-black"
              >
                {group}
              </span>
            ))}
          </div>

          <h3 className="font-display text-[21px] font-bold uppercase leading-none">
            {workout.name}
          </h3>

          <p className="mt-1 text-[10px] text-[#747b85]">{workout.equipment}</p>

          <div className="mt-4 flex items-center gap-3 text-[9px] text-[#858b95]">
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
      </article>
    </Link>
  );
}