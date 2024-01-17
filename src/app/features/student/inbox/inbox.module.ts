import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentInboxComponent } from './inbox.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [StudentInboxComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: StudentInboxComponent }]),
    SharedModule,
  ],
  exports: [],
})
export class StudentInboxModule {}
