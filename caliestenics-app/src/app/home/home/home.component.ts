import { Component } from '@angular/core';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  appStore = faApple;
  googlePlay = faGooglePlay;
}
