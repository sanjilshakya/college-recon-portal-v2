import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SchoolDataComponent } from './school-data.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SchoolDataComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: SchoolDataComponent }]),
    SharedModule,
  ],
  exports: [],
})
export class SchoolDataModule {}
