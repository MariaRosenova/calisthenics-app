import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { ExerciseForWorkout } from 'src/app/types/exerciseForWorkout';
import { WorkoutPlans } from 'src/app/types/workout-plan';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-create-program',
  templateUrl: './create-program.component.html',
  styleUrls: ['./create-program.component.css']
})

export class CreateProgramComponent {
  exercises: ExerciseForWorkout[] = [];

  constructor(private apiService: ApiService, private router: Router,  private elementRef: ElementRef) { }

  addExercise(day: number, exerciseName: string, reps: number, sets: number) {

    const exercise: ExerciseForWorkout = { day, exerciseName, reps, sets };
    this.exercises.push(exercise);
    
    (this.elementRef.nativeElement.querySelector('#exerciseName') as HTMLInputElement).value = '';
    (this.elementRef.nativeElement.querySelector('#reps') as HTMLInputElement).value = '';
    (this.elementRef.nativeElement.querySelector('#sets') as HTMLInputElement).value = '';
  };
  
  createProgram(form: NgForm) {

    if (form.invalid) {
      return;
    }

    const {day, goal, level} = form.value;
 
    this.apiService.createProgram(day, goal, level)
  
  }

 
  
  

  

 
}
  
   
function addExercise() {
  throw new Error('Function not implemented.');
}

