import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { ApiService } from 'src/api.service';
import { WorkoutPlans } from 'src/app/types/workout-plan';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-create-program',
  templateUrl: './create-program.component.html',
  styleUrls: ['./create-program.component.css']
})

export class CreateProgramComponent {

  constructor(private userService: UserService, private router: Router) { }
  
  createProgram(form: NgForm) {
    if (form.invalid) {
      return;
    }

    console.log(form.value);
  }

  addExercise() {

  }

}
  
   
