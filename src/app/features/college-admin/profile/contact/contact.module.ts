import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminContactComponent } from './contact.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AdminContactComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: AdminContactComponent }]),
    SharedModule,
  ],
  exports: [],
})
export class AdminContactModule {}
