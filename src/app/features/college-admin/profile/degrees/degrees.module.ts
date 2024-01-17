import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminDegreesComponent } from './degrees.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AdminDegreesComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: AdminDegreesComponent }]),
    SharedModule,
  ],
  exports: [],
})
export class AdminDegreesModule {}
