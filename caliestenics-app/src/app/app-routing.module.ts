import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './home/home/home.component';
import { TrainingComponent } from './training/training/training.component';
import { AboutComponent } from './about/about/about.component';
import { CreateExerciseComponent } from './owner/create-exercise/create-exercise.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/home'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'training', component: TrainingComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'create', component: CreateExerciseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
