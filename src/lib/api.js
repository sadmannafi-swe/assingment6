const API_URL = "https://api.abcz.workers.dev/api/fitlog";

const fallbackWorkouts = [
    ["Barbell Back Squat", "Barbell", "Quads", 12, 5, 8, 4.8],
    ["Deadlift", "Barbell", "Back", 10, 4, 6, 4.9],
    ["Bench Press", "Barbell", "Chest", 10, 4, 8, 4.7],
    ["Overhead Press", "Barbell", "Shoulders", 9, 4, 8, 4.6],
    ["Pull-Up", "Bodyweight", "Back", 8, 4, 10, 4.8],
    ["Barbell Row", "Barbell", "Back", 9, 4, 8, 4.7],
    ["Romanian Deadlift", "Barbell", "Hamstrings", 10, 4, 10, 4.7],
    ["Dumbbell Lunge", "Dumbbells", "Legs", 8, 3, 12, 4.5],
    ["Incline Dumbbell Press", "Dumbbells", "Chest", 9, 4, 10, 4.6],
    ["Dumbbell Lateral Raise", "Dumbbells", "Shoulders", 7, 3, 15, 4.4],
    ["Cable Tricep Pushdown", "Cable", "Arms", 7, 3, 12, 4.5],
    ["Barbell Curl", "Barbell", "Arms", 7, 3, 12, 4.4],
].map(([name, equipment, muscleGroup, duration, sets, reps, rating], index) => ({
    id: `fallback-${index + 1}`,
    name,
    equipment,
    muscleGroups: [muscleGroup],
    duration,
    sets,
    reps,
    caloriesBurned: duration * 9,
    rating,
    difficulty: "Intermediate",
    image: "/img/banner.png",
    description: `A focused ${name.toLowerCase()} session built for steady strength and controlled progress.`,
    instructions: [
        "Warm up and prepare the equipment with controlled movement.",
        `Complete ${sets} sets of ${reps} reps with consistent form.`,
        "Rest between sets and record the weight used.",
    ],
}));

export async function getWorkouts() {
    try {
        const response = await fetch(API_URL, {
            cache: "no-store"
        });

        if (!response.ok) {
            return fallbackWorkouts;
        }

        return response.json();
    } catch {
        return fallbackWorkouts;
    }
}

export async function getWorkout(id) {
    const fallbackWorkout = fallbackWorkouts.find((workout) => workout.id === id);

    if (fallbackWorkout) {
        return fallbackWorkout;
    }

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            cache: "no-store"
        });

        if (!response.ok) {
            throw new Error("Workout not found");
        }

        return response.json();
    } catch {
        throw new Error("Workout not found");
    }
}