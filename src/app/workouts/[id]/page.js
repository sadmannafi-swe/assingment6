import { notFound } from "next/navigation";
import { getWorkout } from "@/lib/api";
import WorkoutDetails from "@/Components/workout/WorkoutDetails";

export default async function WorkoutDetailsPage({ params }) {
  const { id } = await params;

  try {
    const workout = await getWorkout(id);

    if (!workout || !workout.id) {
      notFound();
    }

    return <WorkoutDetails workout={workout} />;
  } catch {
    notFound();
  }
}