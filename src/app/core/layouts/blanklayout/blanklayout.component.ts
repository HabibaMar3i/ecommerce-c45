import { Component } from '@angular/core';
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blanklayout',
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './blanklayout.component.html',
  styleUrl: './blanklayout.component.css'
})
export class BlanklayoutComponent {

}
