export default function Loading() {
  return (
    <div className="container-fit py-10">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="skeleton min-h-[500px] rounded-xl" />

        <div className="space-y-5">
          <div className="skeleton h-16 w-3/4 rounded" />
          <div className="skeleton h-20 w-full rounded" />
          <div className="skeleton h-48 w-full rounded-xl" />
          <div className="skeleton h-32 w-full rounded-xl" />
        </div>
      </div>
    </div>
  );
}