import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './main-view/main-view.component';



@NgModule({
  declarations: [
    MainViewComponent
  ],
  imports: [
    CommonModule,
    MainViewComponent
  ]
})
export class SharedModule { }
