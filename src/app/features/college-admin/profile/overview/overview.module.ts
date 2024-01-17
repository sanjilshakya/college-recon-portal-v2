import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminOverviewComponent } from './overview.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AdminOverviewComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: AdminOverviewComponent }]),
    SharedModule,
  ],
  exports: [],
})
export class AdminOverviewModule {}
