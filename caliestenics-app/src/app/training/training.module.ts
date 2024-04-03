import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingComponent } from './training/training.component';
import { SharedModule } from '../shared/shared.module';
import { ProgramComponent } from './program/program.component';



@NgModule({
  declarations: [
    TrainingComponent,
    ProgramComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    
  ],
  exports: [
    TrainingComponent,
    ProgramComponent
  ]
})
export class TrainingModule { }
