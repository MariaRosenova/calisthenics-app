import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "./environments/environment";
import { WorkoutPlans } from "./types/workout-plan";
import { Exercise } from "./types/exercise";


@Injectable({
    providedIn: 'root',
})

export class ApiService {
    createProgram(programData: { goal: string; level: string; exercises: never[]; }) {
      throw new Error('Method not implemented.');
    }
    constructor(private http: HttpClient) {}

    getWorkoutPlans() {
        const { apiUrl } = environment;
        return this.http.get<WorkoutPlans[]>(`${apiUrl}/training/getWorkoutPlans`);
       //{PersonalProgram: [{}, {}, {}]},
    }

    createWorkout(programData: WorkoutPlans) {
        const { apiUrl } = environment;
        return this.http.post<WorkoutPlans>(`${apiUrl}/training/createWorkoutPlans`, programData);
    }

    

    createExercise(exercise: Exercise) {
        console.log("Already in the service", exercise);
        
        const { apiUrl } = environment;
        return this.http.post<Exercise>(`${apiUrl}/training/createExercise`, exercise);
    }
}