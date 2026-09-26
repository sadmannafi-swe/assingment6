import { notFound } from "next/navigation";
import { getWorkout } from "@/lib/api";
import WorkoutDetails from "@/Components/workout/WorkoutDetails";

export default async function WorkoutDetailsPage({ params }) {
  const { id } = await params;
  let workout;

  try {
    workout = await getWorkout(id);
  } catch {
    notFound();
  }

  if (!workout || !workout.id) {
    notFound();
  }

  return <WorkoutDetails workout={workout} />;
}