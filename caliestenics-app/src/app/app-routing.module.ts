import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './home/home/home.component';
import { TrainingComponent } from './training/training/training.component';
import { AboutComponent } from './about/about/about.component';
import { CreateExerciseComponent } from './owner/create-exercise/create-exercise.component';
import { WorkoutDetailsComponent } from './training/workout-details/workout-details.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/home'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    //LOGGED IN USER
    path: 'training',
    children: [
     {
       path: '', pathMatch: 'full', component: TrainingComponent
     },
     {
      path: ':workoutId', component: WorkoutDetailsComponent
     }
    ]
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'create', component: CreateExerciseComponent
  },
  {
     path:'login', component: LoginComponent
  },
  { 
    path: 'register', component: RegisterComponent
  },
  {
    //ONLY OWNER
    path: 'create', component: CreateExerciseComponent
  },
  {
    path: '**', redirectTo: '/404'
  },
  {
    path:'404', component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
