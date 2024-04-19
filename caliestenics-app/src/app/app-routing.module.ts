import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './home/home/home.component';
import { TrainingComponent } from './training/training/training.component';
import { AboutComponent } from './about/about/about.component';
import { CreateExerciseComponent } from './owner/create-exercise/create-exercise.component';
import { WorkoutDetailsComponent } from './training/workout/workoutDetailsComponent';
import { ErrorComponent } from './error/error.component';
import { AuthActivate } from './guards/auth.activate';
import { CreateProgramComponent } from './owner/create-program/create-program.component';


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
    ],
      canActivate: [AuthActivate]
  },
  {
    path: 'about', component: AboutComponent
  },
  {
     path:'login', component: LoginComponent
  },
  { 
    path: 'register', component: RegisterComponent
  }, 
  {
    //ONLY OWNER, Add guard
    path: 'createProgram', component: CreateProgramComponent
  },
  {
    path: 'createExercise', component: CreateExerciseComponent
  },
  // {
  //   path: '**', redirectTo: '/404', component: ErrorComponent
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
