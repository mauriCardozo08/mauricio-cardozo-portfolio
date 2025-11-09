import { Routes } from '@angular/router';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';

export const routes: Routes = [
    { path: '', component: PersonalInformationComponent },
    { path: 'experience', component: ProfessionalExperienceComponent },
    { path: 'projects', component: PersonalProjectsComponent },
    { path: 'recommendations', component: RecommendationsComponent }
];
