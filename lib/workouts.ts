export type BodyPartId =
  | "face"
  | "neck"
  | "chest"
  | "shoulders"
  | "arms"
  | "abs"
  | "obliques"
  | "glutes"
  | "thighs"
  | "calves";

export interface Exercise {
  name: string;
  sets: string;
  notes: string;
}

export interface BodyPart {
  id: BodyPartId;
  label: string;
  tagline: string;
  caloriesPerSession: string;
  exercises: Exercise[];
}

export const BODY_PARTS: Record<BodyPartId, BodyPart> = {
  face: {
    id: "face",
    label: "Face & Jaw",
    tagline: "Tighten the jawline, lose the puffy cheeks.",
    caloriesPerSession: "200–350 kcal",
    exercises: [
      { name: "Chin-up tilt + hold", sets: "3 × 20s", notes: "Lift jaw to ceiling, hold." },
      { name: "Mewing + tongue press", sets: "4 × 30s", notes: "Tongue to roof of mouth." },
      { name: "Cardio HIIT (overall fat loss)", sets: "20 min", notes: "Face fat = whole-body fat." },
      { name: "Hydration + sodium cut", sets: "daily", notes: "Beats facial puffiness." },
    ],
  },
  neck: {
    id: "neck",
    label: "Neck",
    tagline: "Burn the double-chin & lift the line.",
    caloriesPerSession: "150–250 kcal",
    exercises: [
      { name: "Neck rolls", sets: "3 × 10 each way", notes: "Slow and controlled." },
      { name: "Resistance band neck flexion", sets: "3 × 12", notes: "Light tension." },
      { name: "Plank + chin tucks", sets: "3 × 30s", notes: "Engages full posterior chain." },
    ],
  },
  chest: {
    id: "chest",
    label: "Chest",
    tagline: "Carve the pec line. Burn the soft tissue.",
    caloriesPerSession: "350–500 kcal",
    exercises: [
      { name: "Incline dumbbell press", sets: "4 × 10", notes: "Upper-chest emphasis." },
      { name: "Push-up burnout", sets: "3 × max", notes: "Pace under 60s." },
      { name: "Cable crossover", sets: "3 × 15", notes: "Slow squeeze at center." },
      { name: "Battle ropes", sets: "4 × 30s", notes: "Cardio + chest activation." },
    ],
  },
  shoulders: {
    id: "shoulders",
    label: "Shoulders",
    tagline: "Build the cap. Torch the surrounding fat.",
    caloriesPerSession: "300–450 kcal",
    exercises: [
      { name: "Overhead press", sets: "4 × 8", notes: "Heavy with control." },
      { name: "Lateral raise 21s", sets: "3 × 21", notes: "Bottom-half, top-half, full." },
      { name: "Face pulls", sets: "3 × 15", notes: "Posture + rear delts." },
    ],
  },
  arms: {
    id: "arms",
    label: "Arms",
    tagline: "Define the biceps. Erase the underarm jiggle.",
    caloriesPerSession: "300–400 kcal",
    exercises: [
      { name: "Hammer curls", sets: "4 × 10", notes: "Brachialis = thicker arms." },
      { name: "Tricep rope pushdown", sets: "4 × 12", notes: "Eliminates the bat-wing." },
      { name: "Boxing intervals", sets: "5 × 2 min", notes: "Massive caloric burn." },
    ],
  },
  abs: {
    id: "abs",
    label: "Abs & Core",
    tagline: "Belly-fat killer. Reveal the six-pack underneath.",
    caloriesPerSession: "400–600 kcal",
    exercises: [
      { name: "Hanging leg raises", sets: "4 × 12", notes: "Lower-ab destroyer." },
      { name: "Weighted planks", sets: "3 × 60s", notes: "Plate on the back." },
      { name: "HIIT sled push", sets: "6 × 20m", notes: "Core stays braced." },
      { name: "Mountain climbers", sets: "4 × 45s", notes: "Cardio + abdominal burn." },
    ],
  },
  obliques: {
    id: "obliques",
    label: "Obliques",
    tagline: "Vaporize the love handles.",
    caloriesPerSession: "350–500 kcal",
    exercises: [
      { name: "Russian twists (weighted)", sets: "4 × 30", notes: "10kg medicine ball." },
      { name: "Side plank dips", sets: "3 × 15 / side", notes: "Tight hip lift." },
      { name: "Wood-chops (cable)", sets: "3 × 12 / side", notes: "Explosive rotation." },
    ],
  },
  glutes: {
    id: "glutes",
    label: "Glutes",
    tagline: "Lift, round, and torch surrounding fat.",
    caloriesPerSession: "400–550 kcal",
    exercises: [
      { name: "Barbell hip thrusts", sets: "5 × 8", notes: "Pause at the top." },
      { name: "Bulgarian split squats", sets: "4 × 10", notes: "Glute-focused dropoff." },
      { name: "Cable kickbacks", sets: "3 × 15", notes: "Squeeze, don't swing." },
    ],
  },
  thighs: {
    id: "thighs",
    label: "Thighs",
    tagline: "Cut the saddlebags. Slim the inner thigh.",
    caloriesPerSession: "500–700 kcal",
    exercises: [
      { name: "Walking lunges", sets: "4 × 20", notes: "Loaded with dumbbells." },
      { name: "Sumo squat pulses", sets: "3 × 20", notes: "Inner-thigh emphasis." },
      { name: "Stairmaster intervals", sets: "20 min", notes: "Level 12, no leaning." },
    ],
  },
  calves: {
    id: "calves",
    label: "Calves",
    tagline: "Tight, defined calves. No more cankles.",
    caloriesPerSession: "200–300 kcal",
    exercises: [
      { name: "Standing calf raises", sets: "5 × 15", notes: "Full stretch at the bottom." },
      { name: "Jump rope intervals", sets: "5 × 90s", notes: "Cardio + calves." },
      { name: "Hill sprints", sets: "8 × 30s", notes: "10% incline minimum." },
    ],
  },
};

export const BODY_PART_ORDER: BodyPartId[] = [
  "face",
  "neck",
  "shoulders",
  "chest",
  "arms",
  "abs",
  "obliques",
  "glutes",
  "thighs",
  "calves",
];
