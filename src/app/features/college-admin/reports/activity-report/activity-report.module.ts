import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivityReportComponent } from './activity-report.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ActivityReportComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: ActivityReportComponent }]),
    SharedModule,
  ],
  exports: [],
})
export class ActivityReportModule {}
