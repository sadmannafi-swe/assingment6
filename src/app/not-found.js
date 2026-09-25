export default function NotFound() {
  return (
    <section className="container-fit flex min-h-[70vh] items-center justify-center py-16">
      <div className="text-center">
        <p className="font-display text-sm font-bold tracking-[0.25em] text-[#ccff00]">
          ERROR 404
        </p>

        <h1 className="mt-3 font-display text-6xl font-bold uppercase text-white">
          Page Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#818791]">
          The page you are looking for does not exist or may have been moved.
        </p>

        <a
          href="/"
          className="mt-8 inline-flex rounded-lg bg-[#ccff00] px-6 py-3 text-sm font-bold text-black transition hover:brightness-95"
        >
          Back to Home
        </a>
      </div>
    </section>
  );
}