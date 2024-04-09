import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CreateExerciseComponent } from './create-exercise/create-exercise.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { CreateProgramComponent } from './create-program/create-program.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateExerciseComponent,
    CreateProgramComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    CreateExerciseComponent,
    CreateProgramComponent
  ]
})
export class OwnerModule { }
