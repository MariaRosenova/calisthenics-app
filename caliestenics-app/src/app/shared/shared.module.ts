import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './main-view/main-view.component';
import { SecondViewComponent } from './second-view/second-view.component';



@NgModule({
  declarations: [
    MainViewComponent,
    SecondViewComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MainViewComponent,
    SecondViewComponent
  ]
})
export class SharedModule { }
