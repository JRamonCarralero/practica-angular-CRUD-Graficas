import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ImageModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
