import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmailDirective } from '../validators/email.directive';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    EmailDirective,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule
  ],
  exports: [LoginComponent, RegisterComponent]
})
export class UserModule { }
