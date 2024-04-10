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
    if (form.valid) {
      return;
    }

    const exercise = form.value as Exercise;

    this.apiService.createExercise({ ...form.value })
      .subscribe((exercise) => console.log(exercise));

    this.router.navigate(['createProgram']);
    // form.setValue({name: '', exercise: ''});
  }


}
