import { NgModule } from '@angular/core';
import { CollegeDetailComponent } from './college-detail.component';
import { RouterModule } from '@angular/router';
import { CollegeDetailOverviewComponent } from './overview/overview.component';
import { CollegeDetailMilitaryComponent } from './military/military.component';
import { CollegeDetailStatsComponent } from './stats/stats.component';
import { CollegeDetailProgramsComponent } from './programs/programs.component';
import { CollegeDetailReviewsComponent } from './reviews/reviews.component';
import { CollegeDetailContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    CollegeDetailComponent,
    CollegeDetailOverviewComponent,
    CollegeDetailMilitaryComponent,
    CollegeDetailStatsComponent,
    CollegeDetailProgramsComponent,
    CollegeDetailReviewsComponent,
    CollegeDetailContactComponent,
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: CollegeDetailComponent }]),
  ],
  exports: [],
})
export class CollegeDetailModule {}
