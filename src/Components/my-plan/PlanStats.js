export default function PlanStats({ count, minutes, calories }) {
  return (
    <div className="grid overflow-hidden rounded-xl border border-[#282e36] bg-[#15181d] sm:grid-cols-3">
      <Stat label="Exercises" value={count} />
      <Stat label="Minutes" value={minutes} />
      <Stat label="Calories" value={calories} />
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="border-b border-[#282e36] px-5 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
      <p className="text-[9px] uppercase tracking-wide text-[#777e87]">{label}</p>
      <p className="font-display mt-1 text-3xl font-bold text-[#ccff00]">{value}</p>
    </div>
  );
}