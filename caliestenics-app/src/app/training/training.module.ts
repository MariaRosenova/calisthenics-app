import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingComponent } from './training/training.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { WorkoutComponent } from './workout/workout.component';



@NgModule({
  declarations: [
    TrainingComponent,
    WorkoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ],
  exports: [
    TrainingComponent,
    WorkoutComponent,
  ]
})
export class TrainingModule { }
