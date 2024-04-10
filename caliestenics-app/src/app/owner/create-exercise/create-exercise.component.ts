import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Exercise } from 'src/app/types/exercise';



@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  styleUrls: ['./create-exercise.component.css']
})
export class CreateExerciseComponent {

  constructor(private apiService: ApiService, private router: Router) { }

  addNewExercise(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const {name, exercise} = form.value
    this.apiService.createExercise(name, exercise)
      .subscribe((exercise) => {
        this.router.navigate(['/createProgram']);
      });

  }
}
