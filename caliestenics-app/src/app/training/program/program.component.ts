import { Component, Input } from '@angular/core';
import { ProgramItem } from 'src/app/types/programItem';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent {

  @Input('program') program = {} as ProgramItem;

  
}
