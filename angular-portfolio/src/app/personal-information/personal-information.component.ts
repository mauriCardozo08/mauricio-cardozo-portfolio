import { Component } from '@angular/core';
import { AppConsts } from '../../shared/app.consts';

@Component({
  selector: 'app-personal-information',
  imports: [],
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.scss'
})
export class PersonalInformationComponent {
  person = AppConsts.Person;
}
