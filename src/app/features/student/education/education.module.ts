import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentEducationComponent } from './education.component';

@NgModule({
  declarations: [StudentEducationComponent],
  imports: [RouterModule.forChild([{ path: '', component: StudentEducationComponent }])],
  exports: [],
})
export class StudentEducationModule {}
