import { Component, Input } from '@angular/core';
import { ExerciseForWorkout } from 'src/app/types/exerciseForWorkout';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent {
//@Input('exercise') exercise = {} as ExerciseComponent;
@Input() exercise: ExerciseForWorkout | undefined;
}
