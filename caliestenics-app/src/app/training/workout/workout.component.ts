import { Component, Input } from '@angular/core';
import { Card } from 'src/app/types/card';


@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent {
    @Input('card') card = {} as Card; 
  }
