import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './main-view/main-view.component';
import { SecondViewComponent } from './second-view/second-view.component';
import { ThirdViewComponent } from './third-view/third-view.component';




@NgModule({
  declarations: [
    MainViewComponent,
    SecondViewComponent,
    ThirdViewComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MainViewComponent,
    SecondViewComponent,
    ThirdViewComponent
  ]
})
export class SharedModule { }
