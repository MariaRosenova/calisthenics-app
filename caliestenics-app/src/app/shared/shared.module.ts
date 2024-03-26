import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './main-view/main-view.component';
import { SecondViewComponent } from './second-view/second-view.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    MainViewComponent,
    SecondViewComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MainViewComponent,
    SecondViewComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
