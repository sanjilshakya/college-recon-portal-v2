import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentBenefitsComponent } from './benefits.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [StudentBenefitsComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: StudentBenefitsComponent }]),
    SharedModule,
  ],
  exports: [],
})
export class StudentBenefitsModule {}
