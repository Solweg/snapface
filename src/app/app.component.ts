import { Component } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';

@Component({
  selector: 'app-root',
  imports: [
    FaceSnapComponent
  ],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
