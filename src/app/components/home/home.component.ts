import { Component } from '@angular/core';
import { MatDrawerContainer } from '@angular/material/sidenav';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatDrawerContainer],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
