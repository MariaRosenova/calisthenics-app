import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  styleUrls: ['./create-exercise.component.css']
})
export class CreateExerciseComponent {
  addNewExercise(form: NgForm) {
    console.log(form.value);

    form.setValue({name: '', exercise: ''});
  }


}
