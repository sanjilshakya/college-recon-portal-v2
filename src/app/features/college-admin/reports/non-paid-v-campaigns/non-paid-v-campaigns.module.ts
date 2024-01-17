import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NonPaidVCampaignsComponent } from './non-paid-v-campaigns.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [NonPaidVCampaignsComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: NonPaidVCampaignsComponent },
    ]),
    SharedModule,
  ],
  exports: [],
})
export class NonPaidVCampaignsModule {}
