"use client";

import { ChevronDown } from "lucide-react";

export default function SortDropdown({ value, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <span className="hidden text-[10px] text-[#747b84] sm:block">Sort By</span>

      <div className="relative">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="appearance-none rounded-md border border-[#2b3038] bg-[#15181d] py-2 pl-3 pr-8 text-[10px] text-[#d6d8dc] outline-none"
        >
          <option value="duration">Duration</option>
          <option value="calories">Calories</option>
          <option value="rating">Rating</option>
        </select>

        <ChevronDown
          size={13}
          className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#737a84]"
        />
      </div>
    </div>
  );
}