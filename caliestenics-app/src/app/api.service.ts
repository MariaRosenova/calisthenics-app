import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "./environments/environment";
import { WorkoutPlans } from "./types/workout-plan";
import { Exercise } from "./types/exercise";
import { ExerciseForWorkout } from "./types/exerciseForWorkout";
import { Observable } from "rxjs";


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

    getWorkoutGoalPrograms(goal: string): Observable<WorkoutPlans[]> {
        const { apiUrl } = environment;
        return this.http.get<WorkoutPlans[]>(`${apiUrl}/training/getWorkoutGoalPrograms`, {
            params: { goal: goal } 
        });
    }

  
    createExercise(exersiceName:string, urlVideo:string) {
       console.log(exersiceName, urlVideo);
       
        const { apiUrl } = environment;
        return this.http.post<Exercise>(`${apiUrl}/training/createExercise`, {exersiceName, urlVideo});
    }

    getWorkout(id: string) {
        const { apiUrl } = environment;
        return this.http.post<WorkoutPlans[]>(`${apiUrl}/training/getWorkout`, {id});
    }
  
}