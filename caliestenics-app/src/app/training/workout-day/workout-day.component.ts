import { Component, Input } from '@angular/core';
import { ExerciseForWorkout } from 'src/app/types/exerciseForWorkout';

@Component({
  selector: 'app-workout-day',
  templateUrl: './workout-day.component.html',
  styleUrls: ['./workout-day.component.css']
})
export class WorkoutDayComponent {

@Input() day: { dayNumber: number, exercises: ExerciseForWorkout[]} | undefined;

}
