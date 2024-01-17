import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentSettingsComponent } from './settings.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [StudentSettingsComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: StudentSettingsComponent }]),
    SharedModule,
  ],
  exports: [],
})
export class StudentSettingsModule {}
