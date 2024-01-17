import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminInboxComponent } from './inbox.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AdminInboxComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: AdminInboxComponent }]),
    SharedModule,
  ],
  exports: [],
})
export class AdminInboxModule {}
