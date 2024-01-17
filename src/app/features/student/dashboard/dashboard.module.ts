import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentDashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [StudentDashboardComponent],
  imports: [RouterModule.forChild([{ path: '', component: StudentDashboardComponent }])],
  exports: [],
})
export class StudentDashboardModule {}
