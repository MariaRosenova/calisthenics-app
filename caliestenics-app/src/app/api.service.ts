import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "./environments/environment";
import { WorkoutPlans } from "./types/workout-plan";
import { Exercise } from "./types/exercise";
import { ExerciseForWorkout } from "./types/exerciseForWorkout";


@Injectable({
    providedIn: 'root',
})

export class ApiService {
   
    constructor(private http: HttpClient) {}

    createProgram(
        goal : string,
        level : string,
        exercises: any) {
        const { apiUrl } = environment;

        console.log("In the service", goal, level, exercises);
        return this.http.post<WorkoutPlans[]>(`${apiUrl}/training/createProgram`, {goal, level, exercises});
    }

    getWorkoutPlans() {
        const { apiUrl } = environment;
        return this.http.get<WorkoutPlans[]>(`${apiUrl}/training/getWorkoutPlans`);
    }

  
    createExercise(exersiceName:string, urlVideo:string) {
       console.log(exersiceName, urlVideo);
       
        const { apiUrl } = environment;
        return this.http.post<Exercise>(`${apiUrl}/training/createExercise`, {exersiceName, urlVideo});
    }

  
  
}