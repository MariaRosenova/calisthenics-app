import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "./environments/environment";
import { WorkoutPlans } from "./types/workout-plan";
import { Exercise } from "./types/exercise";


@Injectable({
    providedIn: 'root',
})

export class ApiService {
   
    constructor(private http: HttpClient) {}

    getWorkoutPlans() {
        const { apiUrl } = environment;
        return this.http.get<WorkoutPlans[]>(`${apiUrl}/training/getWorkoutPlans`);
    }

    createWorkout(programData: WorkoutPlans) {
        const { apiUrl } = environment;
        return this.http.post<WorkoutPlans>(`${apiUrl}/training/createWorkoutPlans`, programData);
    }

    

    createExercise(exersiceName:string, urlVideo:string) {
       console.log(exersiceName, urlVideo);
       
        const { apiUrl } = environment;
        return this.http.post<Exercise>(`${apiUrl}/training/createExercise`, {exersiceName, urlVideo});
    }

    createProgram(
        day: number,
        goal: string,
        level: string,
        // exercises: Object
    ) {
       console.log(day, goal, level);
       
        const { apiUrl } = environment;
        return this.http.post(`${apiUrl}/training/createProgram`, {day, goal, level});
    }
}