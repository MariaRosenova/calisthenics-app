import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingComponent } from './training/training.component';
import { SharedModule } from '../shared/shared.module';
import { ProgramComponent } from './program/program.component';
import { WorkoutDetailsComponent } from './workout-details/workout-details.component';



@NgModule({
  declarations: [
    TrainingComponent,
    ProgramComponent,
    WorkoutDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    
  ],
  exports: [
    TrainingComponent,
    ProgramComponent,
    WorkoutDetailsComponent
  ]
})
export class TrainingModule { }
