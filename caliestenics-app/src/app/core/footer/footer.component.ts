import { Component } from '@angular/core';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import {} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
   yearNow: number = new Date().getFullYear(); 

   appStore = faApple;
   googlePlay = faGooglePlay;
}
