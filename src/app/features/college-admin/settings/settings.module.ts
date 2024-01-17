import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminSettingsComponent } from './settings.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AdminSettingsComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: AdminSettingsComponent }]),
    SharedModule,
  ],
  exports: [],
})
export class AdminSettingsModule {}
