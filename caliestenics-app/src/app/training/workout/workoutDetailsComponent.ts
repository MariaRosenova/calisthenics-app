import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-workout-details',
  templateUrl: './workout-details.component.html',
  styleUrls: ['./workout-details.component.css']
})
export class WorkoutDetailsComponent{
  programs: any[] = [];
  constructor(private router: Router, private apiService: ApiService, private route: ActivatedRoute,) { }

  navigateToWorkout(workoutId: string): void {
    this.router.navigate(['/training', workoutId]);
  }

  getProgram(workoutId: any) {
    this.apiService.getWorkout(workoutId).subscribe((program) => this.programs = program);
    console.log(this.programs);
  }



  // workoutDays: { dayNumber: number, exercises: ExerciseForWorkout[] }[] = [
  //   {
  //     dayNumber: 1,
  //     exercises: [/* Array of ExerciseForWorkout objects for day 1 */]
  //   },
  //   {
  //     dayNumber: 2,
  //     exercises: [/* Array of ExerciseForWorkout objects for day 2 */]
  //   },
  //   // Add more days as needed
  // ];
}
