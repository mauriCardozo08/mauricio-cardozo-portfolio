import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { AppConsts } from '../../shared/app.consts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fixed-information',
  imports: [FontAwesomeModule,NgxTypedJsModule,CommonModule],
  templateUrl: './fixed-information.component.html',
  styleUrl: './fixed-information.component.scss'
})
export class FixedInformationComponent {
  technologies: string[] = AppConsts.Technologies;  
  isRepeat: boolean = false;

  onStringTyped(index: number): void {
    const currentWord = this.technologies[index];
    this.isRepeat = currentWord === 'Repeat';
  }

  obBeforeStringTyped(index: number): void{
    const currentWord = this.technologies[index];
    this.isRepeat = !(currentWord != 'Repeat');
  }
}
