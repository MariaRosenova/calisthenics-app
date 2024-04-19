import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingComponent } from './training/training.component';
import { SharedModule } from '../shared/shared.module';
import { ProgramComponent } from './program/program.component';
import { WorkoutDetailsComponent } from './workout-details/workoutDetailsComponent';
import { RouterModule } from '@angular/router';
import { WorkoutDayComponent } from './workout-day/workout-day.component';



@NgModule({
  declarations: [
    TrainingComponent,
    ProgramComponent,
    WorkoutDetailsComponent,
    WorkoutDayComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    
  ],
  exports: [
    TrainingComponent,
    ProgramComponent,
    WorkoutDetailsComponent
  ]
})
export class TrainingModule { }
