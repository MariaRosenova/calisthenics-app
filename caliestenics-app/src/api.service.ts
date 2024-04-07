import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "./app/environments/environment";
import { WorkoutPlans } from "./app/types/workout-plan";

@Injectable({
    providedIn: 'root',
})

export class ApiService {
    constructor(private http: HttpClient) {}

    getWorkoutPlans() {
        const { apiUrl } = environment;
        return this.http.get<WorkoutPlans[]>(`${apiUrl}/training/getWorkoutPlans`);
       //{PersonalProgram: [{}, {}, {}]},
    }
}