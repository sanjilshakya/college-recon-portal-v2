import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminStatsComponent } from './stats.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AdminStatsComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: AdminStatsComponent }]),
    SharedModule,
  ],
  exports: [],
})
export class AdminStatsModule {}
