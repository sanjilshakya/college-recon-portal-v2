import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentDiscountsComponent } from './discounts.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [StudentDiscountsComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: StudentDiscountsComponent }]),
    SharedModule,
  ],
  exports: [],
})
export class StudentDiscountModule {}
