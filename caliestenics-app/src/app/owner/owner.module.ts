import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateExerciseComponent } from './create-exercise/create-exercise.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms'; 



@NgModule({
  declarations: [
    CreateExerciseComponent,

  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    FormsModule,
  ],
  exports: [
    CreateExerciseComponent,

  ]
})
export class OwnerModule { }
