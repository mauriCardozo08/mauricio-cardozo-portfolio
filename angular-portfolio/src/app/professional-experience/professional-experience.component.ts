import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../shared/services/content.service';
import { AppContent } from '../../shared/models/app-content';

@Component({
  selector: 'app-professional-experience',
  imports: [CommonModule],
  templateUrl: './professional-experience.component.html',
  styleUrl: './professional-experience.component.scss'
})
export class ProfessionalExperienceComponent implements OnInit {
  career!: AppContent['Career'];

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.career = this.contentService.content.Career;
  }
}
