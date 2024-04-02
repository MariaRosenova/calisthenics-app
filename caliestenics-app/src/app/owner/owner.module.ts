import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateExerciseComponent } from './create-exercise/create-exercise.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CreateExerciseComponent
  ],
  imports: [
    CommonModule,
 
    SharedModule,
  ],
  exports: [
    CreateExerciseComponent
  ]
})
export class OwnerModule { }
