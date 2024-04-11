import { Program } from "./program";

export interface WorkoutPlans {
    goal: string;
    level: string;
    program: Program[];
}