import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../shared/services/content.service';
import { AppContent } from '../../shared/models/app-content';

@Component({
  selector: 'app-fixed-information',
  imports: [FontAwesomeModule,NgxTypedJsModule,CommonModule],
  templateUrl: './fixed-information.component.html',
  styleUrl: './fixed-information.component.scss'
})
export class FixedInformationComponent implements OnInit {
  technologies: string[] = [];
  isRepeat: boolean = false;
  person!: AppContent['Person'];

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    const content = this.contentService.content;
    this.technologies = content.Technologies;
    this.person = content.Person;
  }

  onStringTyped(index: number): void {
    const currentWord = this.technologies[index];
    this.isRepeat = currentWord === 'Repeat';
  }

  obBeforeStringTyped(index: number): void{
    const currentWord = this.technologies[index];
    this.isRepeat = !(currentWord != 'Repeat');
  }


}
