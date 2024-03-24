import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [NavigationComponent, FooterComponent]
})
export class CoreModule { }
