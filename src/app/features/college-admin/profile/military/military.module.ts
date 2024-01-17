import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminMilitaryComponent } from './military.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AdminMilitaryComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: AdminMilitaryComponent }]),
    SharedModule,
  ],
  exports: [],
})
export class AdminMilitaryModule {}
