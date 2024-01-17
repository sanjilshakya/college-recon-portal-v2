import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentEmploymentComponent } from './employment.component';

@NgModule({
  declarations: [StudentEmploymentComponent],
  imports: [RouterModule.forChild([{ path: '', component: StudentEmploymentComponent }])],
  exports: [],
})
export class StudentEmploymentModule {}
