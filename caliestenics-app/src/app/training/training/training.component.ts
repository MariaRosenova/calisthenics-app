import { Component } from '@angular/core';
import { ProgramItem } from '../../types/programItem';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent {


    programs: ProgramItem[] = [
    { title: 'Build strength' },
    { description: 'The best shape in your life' },
    { imgUrl: '../../../assets/workout-comp.jpg' }
];

}
