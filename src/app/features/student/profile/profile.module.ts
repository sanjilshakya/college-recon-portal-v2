import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentProfileComponent } from './profile.component';

@NgModule({
  declarations: [StudentProfileComponent],
  imports: [RouterModule.forChild([{ path: '', component: StudentProfileComponent }])],
  exports: [],
})
export class StudentProfileModule {}
