export default function Loading() {
  return (
    <section className="container-fit py-12">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="skeleton h-[420px] rounded-2xl" />

        <div className="space-y-5">
          <div className="skeleton h-4 w-28 rounded" />
          <div className="skeleton h-14 w-3/4 rounded" />
          <div className="skeleton h-20 w-full rounded" />

          <div className="grid grid-cols-2 gap-3">
            <div className="skeleton h-20 rounded-xl" />
            <div className="skeleton h-20 rounded-xl" />
            <div className="skeleton h-20 rounded-xl" />
            <div className="skeleton h-20 rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}