import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
import { CommonModule } from '@angular/common';
import { FixedInformationComponent } from './fixed-information/fixed-information.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,CommonModule, FixedInformationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-portfolio';
}
