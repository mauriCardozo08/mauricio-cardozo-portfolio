import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../shared/services/content.service';
import { AppContent } from '../../shared/models/app-content';

@Component({
  selector: 'app-personal-information',
  imports: [],
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.scss'
})
export class PersonalInformationComponent implements OnInit {
  person!: AppContent['Person'];

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.person = this.contentService.content.Person;
  }
}
