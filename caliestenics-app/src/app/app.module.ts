import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { OwnerModule } from './owner/owner.module';
import { TrainingModule } from './training/training.module';
import { FormsModule } from '@angular/forms';
// import { EmailDirective } from './validators/email.directive';
import { AppInterceptor } from './app.interceptor';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FontAwesomeModule,
    UserModule,
    SharedModule,
    HomeModule,
    AboutModule,
    TrainingModule,
    OwnerModule,
    FormsModule
  ],
  providers: [AppInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
