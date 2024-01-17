import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CampaignsComponent } from './campaigns.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CampaignsComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: CampaignsComponent }]),
    SharedModule,
  ],
  exports: [],
})
export class CampaignsModule {}
